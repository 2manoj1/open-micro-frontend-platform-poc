import { createServer } from 'node:http';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import {
  RESOURCE_MIME_TYPE,
  registerAppResource,
  registerAppTool,
} from '@modelcontextprotocol/ext-apps/server';
import { createMcpAppHtml } from '@openmf/core/mcp-app';
import { z } from 'zod';

const PORT = Number(process.env.PORT ?? process.env.MCP_APPS_SERVER_PORT ?? 8787);
const MCP_PATH = process.env.MCP_APPS_PATH ?? '/mcp';
const SHELL_ORIGIN = trimTrailingSlash(process.env.PUBLIC_SHELL_ORIGIN ?? process.env.SHELL_ORIGIN ?? 'http://127.0.0.1:3001');
const PUBLIC_MCP_ORIGIN = trimTrailingSlash(process.env.PUBLIC_MCP_ORIGIN ?? `http://127.0.0.1:${PORT}`);
const PUBLIC_APP_BASE_DOMAIN = process.env.PUBLIC_APP_BASE_DOMAIN ?? 'manojmukherjee.co.in';
const PUBLIC_APP_PROTOCOL = process.env.PUBLIC_APP_PROTOCOL ?? 'https';
const MCP_APPS_HOST_PROFILE = (process.env.MCP_APPS_HOST_PROFILE ?? 'portable').toLowerCase();
const MCP_APPS_ASSET_VERSION = process.env.MCP_APPS_ASSET_VERSION ?? String(Date.now());
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
          publicMcpOrigin: PUBLIC_MCP_ORIGIN,
          apps: cachedApps,
        });
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
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      });
      const mcpServer = createOpenMicroPlatformServer(cachedApps, mcpRequest.profile, mcpRequest.path);

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
    console.log(`[mcp-apps-server] registered apps ${cachedApps.map((app) => app.id).join(', ') || '(none)'}`);
  });
}

function createOpenMicroPlatformServer(apps, hostProfile, mcpPath) {
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
    registerPortableMicroApp(server, app, hostProfile, mcpPath);
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

function registerPortableMicroApp(server, app, hostProfile, mcpPath) {
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
    async ({ prompt }) => ({
      content: [
        {
          type: 'text',
          text: `${app.name} is ready as an MCP App. Resource: ${resourceUri}`,
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
    })
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
}

function registerAppCapabilityTools(server, app) {
  for (const tool of app.tools) {
    const toolName = toToolName(tool);

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
      },
      async ({ prompt }) => ({
        content: [
          {
            type: 'text',
            text: buildAssistantSummary(app, prompt),
          },
        ],
        structuredContent: {
          appId: app.id,
          tool,
          prompt: prompt ?? null,
          resources: app.resources,
          result: buildAssistantSummary(app, prompt),
        },
      })
    );
  }
}

function buildAssistantSummary(app, prompt) {
  if (app.id !== 'ai-assistant') {
    return `${app.name} handled ${prompt ?? 'the requested task'} with its registered MCP capability.`;
  }

  return [
    prompt ? `MCP host tool result for "${prompt}":` : 'MCP host tool result:',
    'Billing has one overdue enterprise invoice.',
    'Analytics reports a 2% conversion dip.',
    'The admin flag billing-autopay is disabled.',
    'Recommended next action: enable a guarded 25% rollout and notify account owners.',
  ].join(' ');
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
  const resourceUri = descriptor.uri ?? ui.resourceUri ?? `ui://micro-app/${app.id}`;
  const resourceUrl = makePublicResourceUrl(app.id);
  const csp = ui.csp ?? {};
  const connectDomains = normalizeDomains(csp.connect_domains ?? csp.connectDomains, SHELL_ORIGIN);
  const resourceDomains = normalizeDomains(csp.resource_domains ?? csp.resourceDomains, SHELL_ORIGIN);
  const appPublicOrigin = getPublicAppOrigin(app.id);
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
    individualUrl: `${SHELL_ORIGIN}/dashboard/${app.id}`,
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
    csp: app.csp,
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
  return `${SHELL_ORIGIN}/api/mcp/apps/${appId}/resource`;
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
    if (!origin || origin === SHELL_ORIGIN) continue;
    output = output.split(origin).join(app.appPublicOrigin);
  }

  output = output.split(SHELL_ORIGIN).join(PUBLIC_MCP_ORIGIN);
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
    return value.replace(SHELL_ORIGIN, PUBLIC_MCP_ORIGIN);
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
    if (domain === SHELL_ORIGIN) return PUBLIC_MCP_ORIGIN;
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
