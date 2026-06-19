import type { MicroAppConfig } from './micro-app.js';

export type McpJsonValue = null | boolean | number | string | McpJsonValue[] | { [key: string]: McpJsonValue };

export interface McpJsonRpcRequest {
  jsonrpc: '2.0';
  id?: string | number;
  method: string;
  params?: McpJsonValue;
}

export interface McpJsonRpcResponse {
  jsonrpc: '2.0';
  id: string | number;
  result?: McpJsonValue;
  error?: {
    code: number;
    message: string;
    data?: McpJsonValue;
  };
}

export type McpJsonRpcMessage = McpJsonRpcRequest | McpJsonRpcResponse;

export interface McpAppBridgeOptions {
  source?: string;
  targetWindow?: Window;
  targetOrigin?: string;
  timeoutMs?: number;
  onNotification?: (message: McpJsonRpcRequest) => void;
}

export interface McpAppBridge {
  initialize: (params?: McpJsonValue) => Promise<McpJsonValue>;
  callTool: (name: string, args?: McpJsonValue) => Promise<McpJsonValue>;
  request: (method: string, params?: McpJsonValue) => Promise<McpJsonValue>;
  notify: (method: string, params?: McpJsonValue) => void;
  dispose: () => void;
}

export interface McpAppHtmlOptions {
  shellOrigin: string;
  resourceOrigin?: string;
  nonce?: string;
}

export interface McpAppResourceDescriptorOptions {
  shellOrigin: string;
  resourceUri?: string;
  resourceUrl?: string;
}

export interface McpAppResourceDescriptor {
  uri: string;
  name: string;
  description: string;
  mimeType: 'text/html';
  resourceUrl?: string;
  _meta: {
    ui: {
      appId: string;
      resourceUri: string;
      csp: {
        connect_domains: string[];
        resource_domains: string[];
      };
      permissions: string[];
      tools: string[];
      resources: string[];
      prompts: string[];
    };
  };
}

const DEFAULT_TIMEOUT_MS = 15_000;
let defaultBridge: McpAppBridge | undefined;

export function createMcpAppBridge(options: McpAppBridgeOptions = {}): McpAppBridge {
  const targetWindow =
    options.targetWindow ?? (typeof window !== 'undefined' && window.parent !== window ? window.parent : undefined);
  const targetOrigin = options.targetOrigin ?? '*';
  const pending = new Map<string | number, { resolve: (value: McpJsonValue) => void; reject: (error: Error) => void; timeout: ReturnType<typeof setTimeout> }>();
  let nextId = 1;

  function handleMessage(event: MessageEvent<McpJsonRpcMessage>) {
    if (!isJsonRpcMessage(event.data)) return;

    const message = event.data;
    if ('id' in message && message.id !== undefined && ('result' in message || 'error' in message)) {
      const inFlight = pending.get(message.id);
      if (!inFlight) return;

      pending.delete(message.id);
      clearTimeout(inFlight.timeout);

      if (message.error) {
        inFlight.reject(new Error(message.error.message));
        return;
      }

      inFlight.resolve(message.result ?? null);
      return;
    }

    if ('method' in message && typeof message.method === 'string') {
      options.onNotification?.(message);
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('message', handleMessage as EventListener);
  }

  function post(message: McpJsonRpcMessage): void {
    targetWindow?.postMessage(message, targetOrigin);
  }

  return {
    initialize(params: McpJsonValue = null) {
      return this.request('ui/initialize', params);
    },
    callTool(name: string, args: McpJsonValue = null) {
      return this.request('tools/call', { name, arguments: args });
    },
    request(method: string, params: McpJsonValue = null) {
      if (!targetWindow) {
        return Promise.reject(new Error('No MCP Apps host window is available'));
      }

      const id = `${options.source ?? 'micro-app'}-${nextId++}`;
      const timeout = setTimeout(() => {
        const inFlight = pending.get(id);
        if (!inFlight) return;
        pending.delete(id);
        inFlight.reject(new Error(`MCP request timed out: ${method}`));
      }, options.timeoutMs ?? DEFAULT_TIMEOUT_MS);

      const promise = new Promise<McpJsonValue>((resolve, reject) => {
        pending.set(id, { resolve, reject, timeout });
      });

      post({ jsonrpc: '2.0', id, method, params });
      return promise;
    },
    notify(method: string, params: McpJsonValue = null) {
      if (!targetWindow) return;
      post({ jsonrpc: '2.0', method, params });
    },
    dispose() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('message', handleMessage as EventListener);
      }

      for (const inFlight of pending.values()) {
        clearTimeout(inFlight.timeout);
        inFlight.reject(new Error('MCP bridge disposed'));
      }
      pending.clear();
    },
  };
}

export function initializeMcpAppBridge(options?: McpAppBridgeOptions): McpAppBridge {
  defaultBridge?.dispose();
  defaultBridge = createMcpAppBridge(options);
  return defaultBridge;
}

export function getDefaultMcpAppBridge(): McpAppBridge {
  defaultBridge ??= createMcpAppBridge();
  return defaultBridge;
}

export function notifyMcpHost(method: string, params?: McpJsonValue): void {
  getDefaultMcpAppBridge().notify(method, params);
}

export function requestMcpHost(method: string, params?: McpJsonValue): Promise<McpJsonValue> {
  return getDefaultMcpAppBridge().request(method, params);
}

export function callMcpHostTool(name: string, args?: McpJsonValue): Promise<McpJsonValue> {
  return getDefaultMcpAppBridge().callTool(name, args);
}

export function createMcpAppResourceDescriptor(
  app: MicroAppConfig,
  options: McpAppResourceDescriptorOptions
): McpAppResourceDescriptor {
  const resourceUri = options.resourceUri ?? `ui://micro-app/${app.id}`;
  const origins = getAppAssetOrigins(app, options.shellOrigin);
  const mcp = app.capabilities?.mcpApps;

  return {
    uri: resourceUri,
    name: app.name,
    description: app.description,
    mimeType: 'text/html',
    resourceUrl: options.resourceUrl,
    _meta: {
      ui: {
        appId: app.id,
        resourceUri,
        csp: {
          connect_domains: origins,
          resource_domains: origins,
        },
        permissions: app.permissions,
        tools: mcp?.tools ?? [],
        resources: mcp?.resources ?? [],
        prompts: mcp?.prompts ?? [],
      },
    },
  };
}

export function createMcpAppHtml(app: MicroAppConfig, options: McpAppHtmlOptions): string {
  const entryUrl = toAbsoluteUrl(app.entryUrl, options.shellOrigin);
  const styleUrls = (app.styleUrls ?? []).map((url) => toAbsoluteUrl(url, entryUrl));
  const nonce = options.nonce ? ` nonce="${escapeHtml(options.nonce)}"` : '';
  const context = {
    app: {
      id: app.id,
      name: app.name,
      framework: app.framework,
      rendering: app.rendering,
      version: app.version,
      capabilities: app.capabilities,
    },
    shellOrigin: options.shellOrigin,
    resourceOrigin: options.resourceOrigin ?? options.shellOrigin,
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(app.name)}</title>
    ${styleUrls.map((url) => `<link rel="stylesheet" href="${escapeHtml(url)}" />`).join('\n    ')}
    <style${nonce}>
      :root { color-scheme: light; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      body { margin: 0; background: transparent; color: #0f172a; }
      #micro-app-root { min-height: 100vh; }
      .mcp-resource-loading { box-sizing: border-box; min-height: 100vh; display: grid; place-items: center; padding: 24px; color: #334155; background: #f8fafc; }
      .mcp-resource-loading > div { max-width: 520px; border: 1px solid #dbe3ef; border-radius: 12px; background: #fff; padding: 20px; text-align: center; box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08); }
      .mcp-resource-loading strong { display: block; color: #0f172a; font-size: 16px; }
      .mcp-resource-loading span { display: inline-block; width: 28px; height: 28px; margin-bottom: 12px; border: 4px solid #2563eb; border-top-color: transparent; border-radius: 999px; animation: omf-spin .8s linear infinite; }
      .mcp-resource-loading p { margin: 8px 0 0; color: #64748b; line-height: 1.5; }
      .mcp-resource-error { box-sizing: border-box; min-height: 100vh; display: grid; place-items: center; padding: 24px; color: #7f1d1d; background: #fff1f2; }
      .mcp-resource-error > div { max-width: 560px; border: 1px solid #fecdd3; border-radius: 12px; background: #fff; padding: 20px; box-shadow: 0 16px 40px rgba(127, 29, 29, 0.08); }
      .mcp-resource-error h1 { margin: 0 0 8px; font-size: 18px; }
      .mcp-resource-error p { margin: 0; color: #9f1239; line-height: 1.5; }
      @keyframes omf-spin { to { transform: rotate(360deg); } }
    </style>
  </head>
  <body>
    <div id="micro-app-root">
      <section class="mcp-resource-loading">
        <div>
          <span aria-hidden="true"></span>
          <strong>Loading ${escapeHtml(app.name)}</strong>
          <p>Fetching remote assets and preparing the portable MCP Apps surface.</p>
        </div>
      </section>
    </div>
    <script${nonce} type="module">
      const context = ${safeJson(context)};
      const runtime = ${safeJson(app.runtime)};
      window.__MICRO_APP_CONTEXT__ = context;

      function post(method, params) {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ jsonrpc: '2.0', method, params }, '*');
        }
      }

      window.addEventListener('platform-event', (event) => {
        post('ui/notification', { appId: context.app.id, event: event.detail });
      });

      window.addEventListener('error', (event) => {
        post('ui/error', { appId: context.app.id, message: event.message, filename: event.filename, lineno: event.lineno, colno: event.colno });
      });

      window.addEventListener('unhandledrejection', (event) => {
        post('ui/error', { appId: context.app.id, message: String(event.reason?.message ?? event.reason ?? 'Unhandled promise rejection') });
      });

      function showError(error) {
        const root = document.getElementById('micro-app-root');
        if (!root) return;
        root.innerHTML = '<section class="mcp-resource-error"><div><h1>Micro app failed to load</h1><p></p></div></section>';
        const message = root.querySelector('p');
        if (message) message.textContent = error?.message ?? 'Unknown runtime error';
      }

      async function mount() {
        const root = document.getElementById('micro-app-root');
        if (!root) throw new Error('Missing micro app root');

        if (runtime.type === 'html-fragment') {
          const response = await fetch(${safeJson(entryUrl)}, { credentials: 'omit' });
          if (!response.ok) throw new Error('Unable to fetch HTML fragment: ' + response.status);
          root.innerHTML = await response.text();
          post('ui/ready', { appId: context.app.id, mode: 'html-fragment' });
          return;
        }

        if (runtime.type !== 'web-component') {
          throw new Error('MCP Apps HTML resource currently supports web-component and html-fragment runtimes');
        }

        await import(${safeJson(entryUrl)});
        await customElements.whenDefined(runtime.tagName);
        const element = document.createElement(runtime.tagName);
        element.setAttribute('data-app-name', context.app.id);
        element.setAttribute('data-framework', context.app.framework);
        element.setAttribute('data-shell-origin', context.shellOrigin);
        element.setAttribute('data-version', context.app.version);
        element.setAttribute('data-mcp-hosted', 'true');
        root.replaceChildren(element);
        post('ui/ready', { appId: context.app.id, tagName: runtime.tagName });
      }

      post('ui/initialize', { appId: context.app.id, capabilities: context.app.capabilities });
      mount().catch((error) => {
        console.error('[MCP Apps Resource]', error);
        post('ui/error', { appId: context.app.id, message: error?.message ?? String(error) });
        showError(error);
      });
    </script>
  </body>
</html>`;
}

function isJsonRpcMessage(value: unknown): value is McpJsonRpcMessage {
  return Boolean(value && typeof value === 'object' && 'jsonrpc' in value && (value as { jsonrpc?: unknown }).jsonrpc === '2.0');
}

function getAppAssetOrigins(app: MicroAppConfig, shellOrigin: string): string[] {
  const urls = [app.entryUrl, app.manifestUrl, ...(app.styleUrls ?? [])].filter(Boolean);
  const origins = new Set<string>([shellOrigin]);

  for (const url of urls) {
    try {
      origins.add(new URL(url, shellOrigin).origin);
    } catch {
      // Ignore invalid optional URLs; manifest validation reports hard failures elsewhere.
    }
  }

  return [...origins];
}

function toAbsoluteUrl(url: string, base: string): string {
  return new URL(url, base).toString();
}

function safeJson(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
