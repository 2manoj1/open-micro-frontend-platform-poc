import { createServer } from 'node:http';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import {
  RESOURCE_MIME_TYPE,
  registerAppResource,
  registerAppTool,
} from '@openmf/core/mcp-standard';
import { createMcpAppHtml } from '@openmf/core/mcp-app';
import { z } from 'zod';

const PORT = Number(process.env.PORT ?? process.env.MCP_APPS_SERVER_PORT ?? 8787);
const MCP_PATH = process.env.MCP_APPS_PATH ?? '/mcp';
const SHELL_ORIGIN = trimTrailingSlash(process.env.SHELL_ORIGIN ?? 'http://127.0.0.1:3001');
const PUBLIC_SHELL_ORIGIN = trimTrailingSlash(process.env.PUBLIC_SHELL_ORIGIN ?? SHELL_ORIGIN);
const PUBLIC_MCP_ORIGIN = trimTrailingSlash(process.env.PUBLIC_MCP_ORIGIN ?? `http://127.0.0.1:${PORT}`);
const PUBLIC_APP_BASE_DOMAIN = process.env.PUBLIC_APP_BASE_DOMAIN ?? 'manojmukherjee.co.in';
const PUBLIC_APP_PROTOCOL = process.env.PUBLIC_APP_PROTOCOL ?? 'https';
const MCP_APPS_HOST_PROFILE = (process.env.MCP_APPS_HOST_PROFILE ?? 'portable').toLowerCase();
const MCP_APPS_ASSET_VERSION = process.env.MCP_APPS_ASSET_VERSION ?? '0.8.0-dev-3';
const ENABLED_APP_IDS = new Set(readCsv(process.env.MCP_APPS_ENABLED));
const DISABLED_APP_IDS = new Set(readCsv(process.env.MCP_APPS_DISABLED));

let cachedApps = [];
let cachedAt = 0;

async function main() {
  cachedApps = await loadMcpApps();
  cachedAt = Date.now();

  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url ?? '/', PUBLIC_MCP_ORIGIN);

      if (request.method === 'GET' && url.pathname === '/healthz') {
        sendJson(response, 200, {
          ok: true,
          name: '@micro-frontend/mcp-apps-server',
          mcpPath: MCP_PATH,
          profiledPaths: {
            portable: MCP_PATH,
            claude: `${MCP_PATH}/claude`,
            openai: `${MCP_PATH}/openai`,
            chatgpt: `${MCP_PATH}/chatgpt`,
          },
          shellOrigin: SHELL_ORIGIN,
          publicShellOrigin: PUBLIC_SHELL_ORIGIN,
          publicMcpOrigin: PUBLIC_MCP_ORIGIN,
          defaultHostProfile: MCP_APPS_HOST_PROFILE,
          assetVersion: MCP_APPS_ASSET_VERSION,
          appCount: cachedApps.length,
          cachedAt,
        });
        return;
      }

      if (request.method === 'GET' && url.pathname === '/apps') {
        sendJson(response, 200, {
          shellOrigin: SHELL_ORIGIN,
          publicShellOrigin: PUBLIC_SHELL_ORIGIN,
          publicMcpOrigin: PUBLIC_MCP_ORIGIN,
          apps: cachedApps,
        });
        return;
      }

      if (request.method === 'GET' && url.pathname.startsWith('/apps/') && url.pathname.endsWith('/resource')) {
        const parts = url.pathname.split('/');
        const appId = parts[2];
        const app = cachedApps.find((a) => a.id === appId);
        if (!app) {
          sendJson(response, 404, { error: `App ${appId} not found` });
          return;
        }

        if (!app.manifest) {
          sendJson(response, 500, { error: `No cached runtime manifest is available for ${app.name}` });
          return;
        }

        const html = createMcpAppHtml(app.manifest, {
          shellOrigin: PUBLIC_MCP_ORIGIN,
          resourceOrigin: PUBLIC_MCP_ORIGIN,
        });

        response.writeHead(200, {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'no-store',
          'x-content-type-options': 'nosniff',
        });
        response.end(html);
        return;
      }

      if (url.pathname === '/api/ai-assistant/chat') {
        if (request.method === 'OPTIONS') {
          sendJson(response, 204, {});
          return;
        }

        if (request.method !== 'POST') {
          sendJson(response, 405, { error: 'Method not allowed' });
          return;
        }

        const payload = await readJsonBody(request);
        const prompt = typeof payload?.prompt === 'string' ? payload.prompt.trim() : '';
        if (!prompt) {
          sendJson(response, 400, { error: 'prompt is required' });
          return;
        }

        sendJson(
          response,
          200,
          await createAssistantChatResponse(prompt, typeof payload?.context === 'string' ? payload.context : undefined)
        );
        return;
      }

      if (url.pathname === '/api/mcp-demo/run') {
        if (request.method === 'OPTIONS') {
          sendJson(response, 204, {});
          return;
        }

        if (request.method !== 'POST') {
          sendJson(response, 405, { error: 'Method not allowed' });
          return;
        }

        const payload = await readJsonBody(request);
        sendJson(
          response,
          200,
          createMcpDemoRunResponse(typeof payload?.scenario === 'string' ? payload.scenario : undefined)
        );
        return;
      }

      const mcpRequest = resolveMcpRequest(url.pathname);

      if (!mcpRequest) {
        sendJson(response, 404, {
          error: 'Not found',
          mcpPath: MCP_PATH,
          profiledPaths: [`${MCP_PATH}/claude`, `${MCP_PATH}/openai`, `${MCP_PATH}/chatgpt`],
        });
        return;
      }

      if (request.method === 'GET' || request.method === 'DELETE') {
        sendJson(response, 405, {
          jsonrpc: '2.0',
          error: {
            code: -32000,
            message: 'Method not allowed. Use Streamable HTTP POST for MCP JSON-RPC.',
          },
          id: null,
        });
        return;
      }

      if (request.method !== 'POST') {
        sendJson(response, 405, { error: 'Method not allowed' });
        return;
      }

      const body = await readJsonBody(request);

      let requestedResourceUri = null;
      if (body && body.method === 'resources/read' && body.params && typeof body.params.uri === 'string') {
        requestedResourceUri = body.params.uri;
      }
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      });
      const mcpServer = createOpenMicroPlatformServer(cachedApps, mcpRequest.profile, mcpRequest.path, requestedResourceUri);

      await mcpServer.connect(transport);
      await transport.handleRequest(request, response, body);

      response.on('close', () => {
        void transport.close();
        void mcpServer.close();
      });
    } catch (error) {
      console.error('[mcp-apps-server] request failed', error);
      if (!response.headersSent) {
        sendJson(response, 500, {
          jsonrpc: '2.0',
          error: {
            code: -32603,
            message: error instanceof Error ? error.message : 'Internal server error',
          },
          id: null,
        });
      }
    }
  });

  server.listen(PORT, () => {
    console.log(`[mcp-apps-server] listening on ${PUBLIC_MCP_ORIGIN}${MCP_PATH}`);
    console.log(`[mcp-apps-server] profiled paths ${PUBLIC_MCP_ORIGIN}${MCP_PATH}/claude, ${PUBLIC_MCP_ORIGIN}${MCP_PATH}/openai`);
    console.log(`[mcp-apps-server] shell origin ${SHELL_ORIGIN}`);
    console.log(`[mcp-apps-server] public shell origin ${PUBLIC_SHELL_ORIGIN}`);
    console.log(`[mcp-apps-server] registered apps ${cachedApps.map((app) => app.id).join(', ') || '(none)'}`);
  });
}

function createOpenMicroPlatformServer(apps, hostProfile, mcpPath, requestedResourceUri) {
  const server = new McpServer(
    {
      name: 'open-micro-platform-mcp-apps',
      version: '0.1.0',
    },
    {
      capabilities: {
        logging: {},
        resources: {},
        tools: {},
      },
    }
  );

  for (const app of apps) {
    registerPortableMicroApp(server, app, hostProfile, mcpPath, requestedResourceUri);
    registerAppCapabilityTools(server, app);
  }

  server.registerTool(
    'list_open_micro_apps',
    {
      title: 'List Open Micro Platform MCP Apps',
      description: 'List micro apps currently exposed as MCP Apps from the Open Micro Platform registry.',
      inputSchema: {},
    },
    async () => ({
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            apps.map((app) => ({
              id: app.id,
              name: app.name,
              resourceUri: app.resourceUri,
              resourceUrl: app.resourceUrl,
              tools: app.tools,
              resources: app.resources,
              prompts: app.prompts,
            })),
            null,
            2
          ),
        },
      ],
    })
  );

  return server;
}

function registerPortableMicroApp(server, app, hostProfile, mcpPath, requestedResourceUri) {
  const resourceUri = app.resourceUri;
  const toolName = `open_micro_app_${toToolName(app.id)}`;
  const uiMeta = createUiMeta(app, hostProfile);

  registerAppTool(
    server,
    toolName,
    {
      title: `Open ${app.name}`,
      description: `Render ${app.name} as a portable MCP App. The same app also runs standalone and inside the Next.js shell.`,
      inputSchema: {
        prompt: z.string().optional().describe('Optional context or user goal to pass to the micro app.'),
      },
      annotations: {
        readOnlyHint: true,
        openWorldHint: true,
      },
      _meta: {
        ui: {
          resourceUri,
          visibility: ['model', 'app'],
        },
      },
    },
    async ({ prompt }) => {
      console.log(`[mcp-apps-server] tool open_micro_app_${app.id} called with prompt:`, prompt);
      const textResult = (prompt && app.id === 'ai-assistant')
        ? buildAssistantSummary(app, prompt)
        : `${app.name} is ready as an MCP App. Resource: ${resourceUri}`;
      return {
      content: [
        {
          type: 'text',
          text: textResult,
        },
        {
          type: 'resource_link',
          uri: resourceUri,
          name: `${app.id}-widget`,
          title: app.name,
          mimeType: RESOURCE_MIME_TYPE,
          description: `${app.name} interactive MCP Apps widget`,
        },
      ],
      structuredContent: {
        appId: app.id,
        name: app.name,
        prompt: prompt ?? null,
        resourceUri,
        resourceUrl: `${PUBLIC_MCP_ORIGIN}${mcpPath}#${app.id}`,
        shellUrl: app.appPublicOrigin,
        individualUrl: app.appPublicOrigin,
        hostProfile,
        tools: app.tools,
        resources: app.resources,
        prompts: app.prompts,
      },
      };
    }
  );

  registerAppResource(
    server,
    app.name,
    resourceUri,
    {
      description: `${app.name} portable MCP Apps HTML resource.`,
      _meta: createResourceMeta(app, uiMeta),
    },
    async () => {
      console.log(`[mcp-apps-server] registerAppResource handler called for ${app.name} (${resourceUri})`);
      if (!app.manifest) {
        throw new Error(`No cached runtime manifest is available for ${app.name}`);
      }

      const html = createMcpAppHtml(app.manifest, {
        shellOrigin: PUBLIC_MCP_ORIGIN,
        resourceOrigin: PUBLIC_MCP_ORIGIN,
      });

      return {
        contents: [
          {
            uri: resourceUri,
            mimeType: RESOURCE_MIME_TYPE,
            text: html,
            _meta: createResourceMeta(app, uiMeta),
          },
        ],
      };
    }
  );

  if (requestedResourceUri && requestedResourceUri !== resourceUri) {
    const baseUri = resourceUri.split('?')[0];
    if (requestedResourceUri.split('?')[0] === baseUri) {
      console.log(`[mcp-apps-server] Dynamically registering matched historical template URI: ${requestedResourceUri}`);
      registerAppResource(
        server,
        app.name,
        requestedResourceUri,
        {
          description: `${app.name} portable MCP Apps HTML resource (matched historical version).`,
          _meta: createResourceMeta(app, uiMeta),
        },
        async () => {
          console.log(`[mcp-apps-server] registerAppResource handler called for ${app.name} (${requestedResourceUri})`);
          if (!app.manifest) {
            throw new Error(`No cached runtime manifest is available for ${app.name}`);
          }

          const html = createMcpAppHtml(app.manifest, {
            shellOrigin: PUBLIC_MCP_ORIGIN,
            resourceOrigin: PUBLIC_MCP_ORIGIN,
          });

          return {
            contents: [
              {
                uri: requestedResourceUri,
                mimeType: RESOURCE_MIME_TYPE,
                text: html,
                _meta: createResourceMeta(app, uiMeta),
              },
            ],
          };
        }
      );
    }
  }
}

function registerAppCapabilityTools(server, app) {
  for (const tool of app.tools) {
    const toolName = toToolName(tool);
    const resourceUri = app.resourceUri;

    server.registerTool(
      toolName,
      {
        title: tool,
        description: `AI-native capability exposed by ${app.name}.`,
        inputSchema: {
          prompt: z.string().optional().describe('User question or task context.'),
        },
        annotations: {
          readOnlyHint: true,
          openWorldHint: true,
        },
        _meta: {
          ui: {
            resourceUri,
            visibility: ['model', 'app'],
          },
        },
      },
      async ({ prompt }) => {
        console.log(`[mcp-apps-server] capability tool ${toolName} called with prompt:`, prompt);
        return {
        content: [
          {
            type: 'text',
            text: buildAssistantSummary(app, prompt),
          },
          {
            type: 'resource_link',
            uri: resourceUri,
            name: `${app.id}-widget`,
            title: app.name,
            mimeType: RESOURCE_MIME_TYPE,
            description: `${app.name} interactive MCP Apps widget`,
          },
        ],
        structuredContent: {
          appId: app.id,
          tool,
          prompt: prompt ?? null,
          resources: app.resources,
          result: buildAssistantSummary(app, prompt),
          resourceUri,
        },
        };
      }
    );
  }
}

function buildAssistantSummary(app, prompt) {
  if (app.id === 'mcp-demo') {
    return buildMcpDemoSummary(prompt);
  }

  if (app.id !== 'ai-assistant') {
    return `${app.name} handled ${prompt ?? 'the requested task'} with its registered MCP capability.`;
  }

  const question = prompt ?? 'Investigate billing conversion';
  const normalizedPrompt = question.toLowerCase();

  if (normalizedPrompt.includes('plan') || normalizedPrompt.includes('workflow')) {
    return [
      `MCP host tool result for "${question}":`,
      'Recovery workflow:',
      '1. Analytics confirms the dip is concentrated in billing checkout and enterprise renewal cohorts.',
      '2. Admin re-enables billing-autopay behind a guarded 25% rollout.',
      '3. Billing retries or manually reviews the overdue enterprise invoice.',
      '4. Customer owners contact the two at-risk accounts while Analytics watches recovery for 24 hours.',
    ].join(' ');
  }

  return [
    `MCP host tool result for "${question}":`,
    'Billing conversion is down because Analytics shows a 2% billing checkout dip while Admin has billing-autopay disabled for the affected tenant group.',
    'Billing adds one overdue enterprise invoice, and Customer shows two enterprise accounts at renewal risk, so enterprise payment friction is likely amplifying the drop.',
    'Recommended next action: re-enable billing-autopay through a guarded 25% rollout, retry or review the overdue invoice, notify account owners, and monitor payment failures by cohort.',
  ].join(' ');
}

function buildMcpDemoSummary(prompt) {
  return [
    prompt ? `MCP Apps SDK Demo result for "${prompt}":` : 'MCP Apps SDK Demo result:',
    'The widget received a user click, shared model context, requested native host AI, called an MCP server tool, and rendered a generated recovery UI.',
    'Generated UI state: Admin enables billing-autopay at 25%, Billing reviews the overdue enterprise invoice, and Analytics watches checkout recovery for 24 hours.',
  ].join(' ');
}

function createMcpDemoRunResponse(scenario = 'billing-conversion-dip') {
  return {
    scenario,
    runtime: 'server-api',
    headline: 'Native AI generated a recovery UI',
    summary:
      'The MCP Apps demo completed through the portable MCP server API fallback. In ChatGPT or Claude, the same button first attempts model context, host sampling, and server tool calls.',
    actions: [
      { app: 'Admin', action: 'Enable billing-autopay through a 25% guarded rollout.', owner: 'Platform Admin' },
      { app: 'Billing', action: 'Review the overdue enterprise invoice and retry payment.', owner: 'Revenue Ops' },
      { app: 'Analytics', action: 'Track checkout recovery and payment failures for 24 hours.', owner: 'Data Platform' },
    ],
  };
}

async function createAssistantChatResponse(prompt, context = defaultAssistantContext()) {
  const provider = process.env.AI_ASSISTANT_API_PROVIDER?.toLowerCase();

  if (provider === 'openai' && process.env.OPENAI_API_KEY && process.env.AI_ASSISTANT_OPENAI_MODEL) {
    const text = await callOpenAi(prompt, context);
    if (text) return toAssistantResponse(text, 'openai');
  }

  if (provider === 'anthropic' && process.env.ANTHROPIC_API_KEY && process.env.AI_ASSISTANT_ANTHROPIC_MODEL) {
    const text = await callAnthropic(prompt, context);
    if (text) return toAssistantResponse(text, 'anthropic');
  }

  if (provider === 'gemini' && process.env.GEMINI_API_KEY && process.env.AI_ASSISTANT_GEMINI_MODEL) {
    const text = await callGemini(prompt, context);
    if (text) return toAssistantResponse(text, 'gemini');
  }

  return toAssistantResponse(buildDeterministicApiAnswer(prompt, context), 'demo-rules-engine');
}

async function callOpenAi(prompt, context) {
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.AI_ASSISTANT_OPENAI_MODEL,
      input: [
        {
          role: 'system',
          content: 'You are the Open Micro Platform AI Assistant. Return concise operational guidance.',
        },
        {
          role: 'user',
          content: `Context: ${context}\n\nQuestion: ${prompt}`,
        },
      ],
      max_output_tokens: 320,
    }),
  });

  if (!response.ok) return undefined;
  const payload = await response.json();
  return payload.output_text?.trim();
}

async function callAnthropic(prompt, context) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'anthropic-version': '2023-06-01',
      'x-api-key': process.env.ANTHROPIC_API_KEY ?? '',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.AI_ASSISTANT_ANTHROPIC_MODEL,
      max_tokens: 320,
      system: 'You are the Open Micro Platform AI Assistant. Return concise operational guidance.',
      messages: [
        {
          role: 'user',
          content: `Context: ${context}\n\nQuestion: ${prompt}`,
        },
      ],
    }),
  });

  if (!response.ok) return undefined;
  const payload = await response.json();
  return payload.content?.map((part) => part.text).filter(Boolean).join('\n').trim();
}

async function callGemini(prompt, context) {
  const model = process.env.AI_ASSISTANT_GEMINI_MODEL;
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `You are the Open Micro Platform AI Assistant. Context: ${context}\n\nQuestion: ${prompt}`,
              },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 320,
        },
      }),
    }
  );

  if (!response.ok) return undefined;
  const payload = await response.json();
  return payload.candidates?.[0]?.content?.parts?.map((part) => part.text).filter(Boolean).join('\n').trim();
}

function buildDeterministicApiAnswer(prompt, context) {
  const normalizedPrompt = prompt.toLowerCase();

  if (normalizedPrompt.includes('plan') || normalizedPrompt.includes('workflow')) {
    return [
      `For "${prompt}", I turned the platform context into a recovery workflow.`,
      '1. Analytics: confirm the dip is isolated to billing checkout and enterprise renewal cohorts.',
      '2. Admin: re-enable billing-autopay with a guarded 25% rollout.',
      '3. Billing: retry or manually review the overdue enterprise invoice.',
      '4. Customer: notify account owners for the two renewal-risk accounts and watch conversion/payment failures for 24 hours.',
      `Signals used: ${context}`,
    ].join(' ');
  }

  return [
    `For "${prompt}", billing conversion most likely dipped because Admin has billing-autopay disabled for the same segment where Analytics reports a 2% billing checkout drop.`,
    'Billing adds one overdue enterprise invoice, and Customer adds two renewal-risk accounts, so enterprise payment friction is amplifying the impact.',
    'Recommended workflow: re-enable billing-autopay at 25%, retry or review the overdue invoice, notify affected account owners, and have Analytics monitor checkout recovery for 24 hours.',
    `Signals used: ${context}`,
    'This response came from the server API fallback, so the same micro app still works when an AI host bridge or Chrome Built-in AI is unavailable.',
  ].join(' ');
}

function toAssistantResponse(text, provider) {
  return {
    text,
    runtime: 'server-api-chat',
    provider,
    signals: ['billing.invoice', 'analytics.funnel', 'admin.featureFlag', 'customer.health'],
  };
}

function defaultAssistantContext() {
  return 'Analytics shows billing checkout conversion down 2%, Admin has billing-autopay disabled for the affected tenant group, Billing has 1 overdue enterprise invoice, and Customer health shows two enterprise accounts at renewal risk.';
}

async function loadMcpApps() {
  const registryUrl = `${SHELL_ORIGIN}/api/mcp/apps`;
  const response = await fetch(registryUrl, {
    headers: {
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch MCP app registry ${registryUrl}: ${response.status}`);
  }

  const registry = await response.json();
  const apps = Array.isArray(registry.apps) ? registry.apps : [];

  return apps
    .map(toMcpServerApp)
    .filter((app) => (ENABLED_APP_IDS.size === 0 || ENABLED_APP_IDS.has(app.id)) && !DISABLED_APP_IDS.has(app.id));
}

function toMcpServerApp(app) {
  const descriptor = app.descriptor ?? {};
  const ui = descriptor._meta?.ui ?? {};
  const resourceUri = `${descriptor.uri ?? ui.resourceUri ?? `ui://micro-app/${app.id}`}?v=${MCP_APPS_ASSET_VERSION}`;
  const resourceUrl = makePublicResourceUrl(app.id);
  const csp = ui.csp ?? {};
  const connectDomains = normalizeDomains(csp.connect_domains ?? csp.connectDomains, SHELL_ORIGIN);
  const resourceDomains = normalizeDomains(csp.resource_domains ?? csp.resourceDomains, SHELL_ORIGIN);
  const appPublicOrigin = process.env[`MCP_APP_${toEnvKey(app.id)}_PUBLIC_ORIGIN`]
    ? trimTrailingSlash(process.env[`MCP_APP_${toEnvKey(app.id)}_PUBLIC_ORIGIN`])
    : app.app?.runtime?.type === 'html-fragment'
      ? PUBLIC_SHELL_ORIGIN
      : getPublicAppOrigin(app.id);
  const assetOrigins = collectAssetOrigins(csp);
  const publicConnectDomains = toPublicDomains(connectDomains, appPublicOrigin, assetOrigins);
  const publicResourceDomains = toPublicDomains(resourceDomains, appPublicOrigin, assetOrigins);
  const manifest = app.app
    ? addRuntimeAssetVersion(rewriteAppManifest(app.app, appPublicOrigin, assetOrigins), MCP_APPS_ASSET_VERSION)
    : undefined;

  return {
    id: app.id,
    name: app.name,
    description: app.description,
    framework: app.framework,
    rendering: app.rendering,
    resourceUri,
    resourceUrl,
    manifest,
    appPublicOrigin,
    assetOrigins,
    csp: {
      connectDomains: dedupe([...publicConnectDomains, PUBLIC_MCP_ORIGIN]),
      resourceDomains: dedupe([...publicResourceDomains, PUBLIC_MCP_ORIGIN, appPublicOrigin]),
    },
    permissions: normalizeSandboxPermissions(ui.permissions),
    individualUrl: `${PUBLIC_SHELL_ORIGIN}/dashboard/${app.id}`,
    tools: ui.tools ?? [],
    resources: ui.resources ?? [],
    prompts: ui.prompts ?? [],
  };
}

function resolveMcpRequest(pathname) {
  if (pathname === MCP_PATH) {
    return { path: MCP_PATH, profile: MCP_APPS_HOST_PROFILE };
  }

  const profilePathPrefix = `${MCP_PATH}/`;
  if (!pathname.startsWith(profilePathPrefix)) return undefined;

  const profile = pathname.slice(profilePathPrefix.length).split('/')[0]?.toLowerCase();
  if (!profile) return undefined;

  if (['openai', 'chatgpt'].includes(profile)) {
    return { path: `${MCP_PATH}/${profile}`, profile: 'openai' };
  }

  if (['claude', 'portable'].includes(profile)) {
    return { path: `${MCP_PATH}/${profile}`, profile };
  }

  return undefined;
}

function createUiMeta(app, hostProfile) {
  const uiMeta = {
    resourceUri: app.resourceUri,
    csp: {
      connectDomains: app.csp.connectDomains,
      connect_domains: app.csp.connectDomains,
      resourceDomains: app.csp.resourceDomains,
      resource_domains: app.csp.resourceDomains,
    },
    permissions: app.permissions,
  };
  const uiDomain = getMcpUiDomain(app.id, app.appPublicOrigin, hostProfile);

  if (uiDomain) {
    uiMeta.domain = uiDomain;
  }

  return uiMeta;
}

function createResourceMeta(app, uiMeta) {
  return {
    ui: uiMeta,
    'openai/widgetDomain': app.appPublicOrigin,
    'openai/widgetCSP': {
      connect_domains: app.csp.connectDomains,
      resource_domains: app.csp.resourceDomains,
    },
    'openai/widgetDescription': `${app.name} runs as a portable micro frontend inside the AI host.`,
  };
}

function makePublicResourceUrl(appId) {
  const explicit = process.env[`MCP_APP_${toEnvKey(appId)}_RESOURCE_URL`];
  if (explicit) return explicit;
  return `${PUBLIC_MCP_ORIGIN}/apps/${appId}/resource`;
}

function getPublicAppOrigin(appId) {
  const explicit = process.env[`MCP_APP_${toEnvKey(appId)}_PUBLIC_ORIGIN`];
  if (explicit) return trimTrailingSlash(explicit);
  return `${PUBLIC_APP_PROTOCOL}://${appId}.${PUBLIC_APP_BASE_DOMAIN}`;
}

function getMcpUiDomain(appId, appPublicOrigin, hostProfile) {
  const explicit = process.env[`MCP_APP_${toEnvKey(appId)}_UI_DOMAIN`] ?? process.env.MCP_APPS_UI_DOMAIN;
  if (explicit) return explicit.trim();

  const mode = (
    process.env[`MCP_APP_${toEnvKey(appId)}_UI_DOMAIN_MODE`] ??
    process.env.MCP_APPS_UI_DOMAIN_MODE ??
    hostProfile
  ).toLowerCase();

  if (['none', 'omit', 'portable', 'claude'].includes(mode)) return undefined;
  if (['openai', 'chatgpt', 'origin', 'app-origin'].includes(mode)) return appPublicOrigin;

  return undefined;
}

function collectAssetOrigins(csp) {
  const origins = new Set();
  const cspValues = [
    ...(Array.isArray(csp.connect_domains) ? csp.connect_domains : []),
    ...(Array.isArray(csp.connectDomains) ? csp.connectDomains : []),
    ...(Array.isArray(csp.resource_domains) ? csp.resource_domains : []),
    ...(Array.isArray(csp.resourceDomains) ? csp.resourceDomains : []),
  ];

  for (const value of cspValues) {
    try {
      origins.add(new URL(value).origin);
    } catch {
      // Ignore CSP tokens or malformed optional values.
    }
  }

  return [...origins];
}

function rewritePortableHtml(html, app) {
  let output = html;

  for (const origin of app.assetOrigins) {
    if (!origin || origin === SHELL_ORIGIN || origin === PUBLIC_SHELL_ORIGIN) continue;
    output = output.split(origin).join(app.appPublicOrigin);
  }

  output = output.split(SHELL_ORIGIN).join(PUBLIC_SHELL_ORIGIN);
  return output;
}

function rewriteAppManifest(manifest, appPublicOrigin, assetOrigins) {
  const output = structuredClone(manifest);

  output.entryUrl = rewriteUrl(output.entryUrl, appPublicOrigin, assetOrigins);
  output.manifestUrl = rewriteUrl(output.manifestUrl, appPublicOrigin, assetOrigins);
  output.url = rewriteUrl(output.url, appPublicOrigin, assetOrigins);

  if (Array.isArray(output.styleUrls)) {
    output.styleUrls = output.styleUrls.map((url) => rewriteUrl(url, appPublicOrigin, assetOrigins));
  }

  if (output.runtime?.url) {
    output.runtime = {
      ...output.runtime,
      url: rewriteUrl(output.runtime.url, appPublicOrigin, assetOrigins),
    };
  }

  return rewriteValueUrls(output, appPublicOrigin, assetOrigins);
}

function addRuntimeAssetVersion(manifest, version) {
  const output = structuredClone(manifest);

  output.entryUrl = appendQueryParam(output.entryUrl, 'mcpv', version);

  if (Array.isArray(output.styleUrls)) {
    output.styleUrls = output.styleUrls.map((url) => appendQueryParam(url, 'mcpv', version));
  }

  if (output.runtime?.url) {
    output.runtime = {
      ...output.runtime,
      url: appendQueryParam(output.runtime.url, 'mcpv', version),
    };
  }

  return output;
}

function rewriteValueUrls(value, appPublicOrigin, assetOrigins) {
  if (typeof value === 'string') return rewriteUrl(value, appPublicOrigin, assetOrigins);
  if (Array.isArray(value)) return value.map((item) => rewriteValueUrls(item, appPublicOrigin, assetOrigins));
  if (!value || typeof value !== 'object') return value;

  return Object.fromEntries(
    Object.entries(value).map(([key, entryValue]) => [key, rewriteValueUrls(entryValue, appPublicOrigin, assetOrigins)])
  );
}

function rewriteUrl(value, appPublicOrigin, assetOrigins) {
  if (typeof value !== 'string' || value.length === 0) return value;

  for (const origin of assetOrigins) {
    if (value.startsWith(origin)) {
      return value.replace(origin, appPublicOrigin);
    }
  }

  if (value.startsWith(SHELL_ORIGIN)) {
    return value.replace(SHELL_ORIGIN, PUBLIC_SHELL_ORIGIN);
  }

  return value;
}

function appendQueryParam(value, key, paramValue) {
  if (typeof value !== 'string' || value.length === 0) return value;
  if (value.startsWith('data:') || value.startsWith('blob:')) return value;

  try {
    const url = new URL(value);
    url.searchParams.set(key, paramValue);
    return url.toString();
  } catch {
    return value;
  }
}

function toPublicDomains(domains, appPublicOrigin, assetOrigins) {
  return domains.map((domain) => {
    if (domain === SHELL_ORIGIN) return PUBLIC_SHELL_ORIGIN;
    if (assetOrigins.includes(domain)) return appPublicOrigin;
    return domain;
  });
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      accept: 'text/html,application/xhtml+xml',
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch MCP App resource ${url}: ${response.status}`);
  }

  return response.text();
}

async function readJsonBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  if (!chunks.length) return undefined;
  const text = Buffer.concat(chunks).toString('utf8');
  return text ? JSON.parse(text) : undefined;
}

function sendJson(response, status, body) {
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'content-type, authorization',
    'access-control-allow-methods': 'GET, POST, OPTIONS',
  });
  response.end(JSON.stringify(body));
}

function normalizeDomains(value, fallback) {
  const values = Array.isArray(value) ? value : [];
  return dedupe(values.filter((item) => typeof item === 'string' && item.length > 0).concat(fallback));
}

function normalizeSandboxPermissions(value) {
  if (!value || Array.isArray(value) || typeof value !== 'object') return {};

  const allowedKeys = new Set(['camera', 'microphone', 'geolocation', 'clipboardWrite']);
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key, permissionValue]) => allowedKeys.has(key) && permissionValue && typeof permissionValue === 'object' && !Array.isArray(permissionValue))
      .map(([key]) => [key, {}])
  );
}

function readCsv(value) {
  return (value ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function toToolName(value) {
  return value.replace(/[^a-zA-Z0-9_-]/g, '_');
}

function toEnvKey(value) {
  return value.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();
}

function trimTrailingSlash(value) {
  return value.replace(/\/+$/, '');
}

function dedupe(values) {
  return [...new Set(values)];
}

main().catch((error) => {
  console.error('[mcp-apps-server] startup failed', error);
  process.exit(1);
});
