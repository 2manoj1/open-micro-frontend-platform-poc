export type MicroAppStatus = 'Ready' | 'Beta' | 'Preview';

export type MicroAppFramework = 'react' | 'vue' | 'angular' | 'web-component' | 'static' | 'custom';

export type MicroAppRenderingMode = 'rsc' | 'ssr' | 'ssg' | 'isr' | 'csr' | 'static';

export type MicroAppRuntime =
  | {
      type: 'web-component';
      tagName: string;
    }
  | {
      type: 'module';
      exportName?: string;
      mountFunction?: string;
    }
  | {
      type: 'html-fragment';
      url: string;
      cache?: 'no-store' | 'force-cache';
      revalidate?: number;
    }
  | {
      type: 'iframe';
      url: string;
      title?: string;
    };

export interface MicroAppMcpCapability {
  enabled: boolean;
  protocolVersion?: string;
  manifestUrl?: string;
  tools?: string[];
  resources?: string[];
  prompts?: string[];
  eventNamespaces?: string[];
  browserPermissions?: McpAppSandboxPermissions;
}

export interface McpAppSandboxPermissions {
  camera?: Record<string, never>;
  microphone?: Record<string, never>;
  geolocation?: Record<string, never>;
  clipboardWrite?: Record<string, never>;
}

export interface MicroAppCapabilities {
  aiNative?: boolean;
  mcpApps?: MicroAppMcpCapability;
  eventBus?: {
    channels: string[];
  };
  observability?: {
    errorEndpoint?: string;
    logLevel?: 'debug' | 'info' | 'warn' | 'error';
  };
}

export interface MicroAppConfig {
  id: string;
  name: string;
  description: string;
  domain: string;
  icon: string;
  accent: string;
  status: MicroAppStatus;
  framework: MicroAppFramework;
  rendering: MicroAppRenderingMode[];
  entryUrl: string;
  manifestUrl: string;
  runtime: MicroAppRuntime;
  styleUrls?: string[];
  version: string;
  owner: string;
  permissions: string[];
  capabilities?: MicroAppCapabilities;
  dev?: {
    viteReactRefresh?: boolean;
  };
  url?: string;
  componentTag?: string;
}

export interface MicroAppContext {
  app: MicroAppConfig;
  shellOrigin: string;
  attributes?: Record<string, string>;
}

export interface MountedMicroApp {
  element?: HTMLElement;
  unmount: () => void | Promise<void>;
}

export interface MicroAppLoadOptions {
  onError?: (error: unknown, app: MicroAppConfig) => void | Promise<void>;
}

export type MicroAppMountFunction = (
  container: HTMLElement,
  context: MicroAppContext
) => void | (() => void | Promise<void>) | MountedMicroApp | Promise<void | (() => void | Promise<void>) | MountedMicroApp>;

interface ViteReactRuntime {
  injectIntoGlobalHook: (target: Window) => void;
}

declare global {
  interface Window {
    $RefreshReg$?: () => void;
    $RefreshSig$?: () => (type: unknown) => unknown;
    __vite_plugin_react_preamble_installed__?: boolean;
  }
}

export function getMicroAppEntryUrl(app: MicroAppConfig): string {
  if (app.runtime.type === 'html-fragment' || app.runtime.type === 'iframe') {
    return app.entryUrl || app.runtime.url;
  }
  return app.entryUrl ?? app.url ?? '';
}

export function getMicroAppTagName(app: MicroAppConfig): string | undefined {
  if (app.runtime.type === 'web-component') return app.runtime.tagName;
  return app.componentTag;
}

export async function mountMicroApp(
  app: MicroAppConfig,
  container: HTMLElement,
  context: Omit<MicroAppContext, 'app'> = { shellOrigin: window.location.origin },
  options: MicroAppLoadOptions = {}
): Promise<MountedMicroApp> {
  let mountedStyles: MountedStyles = noopMountedStyles;

  try {
    const entryUrl = getMicroAppEntryUrl(app);
    if (!entryUrl) {
      throw new Error(`No entry URL configured for ${app.name}`);
    }

    container.replaceChildren();

    if (app.dev?.viteReactRefresh) {
      await installViteReactRefreshPreamble(entryUrl);
    }

    mountedStyles = await mountMicroAppStyles(app);
    const remoteModule = await import(/* webpackIgnore: true */ entryUrl);
    const fullContext: MicroAppContext = { ...context, app };

    if (app.runtime.type === 'html-fragment' || app.runtime.type === 'iframe') {
      throw new Error(`${app.name} is a ${app.runtime.type} remote and must be rendered by the shell server/HTML renderer`);
    }

    if (app.runtime.type === 'web-component') {
      const tagName = getMicroAppTagName(app);
      if (!tagName) {
        throw new Error(`No Web Component tag configured for ${app.name}`);
      }

      await customElements.whenDefined(tagName);
      const element = document.createElement(tagName);
      element.setAttribute('data-app-name', app.id);
      element.setAttribute('data-framework', app.framework);
      element.setAttribute('data-shell-origin', fullContext.shellOrigin);
      element.setAttribute('data-version', app.version);

      for (const [name, value] of Object.entries(fullContext.attributes ?? {})) {
        element.setAttribute(name, value);
      }

      container.replaceChildren(element);

      return {
        element,
        unmount: () => {
          container.replaceChildren();
          mountedStyles.unmount();
        },
      };
    }

    const mountName = app.runtime.mountFunction ?? app.runtime.exportName ?? 'mount';
    const mount = remoteModule[mountName] as MicroAppMountFunction | undefined;

    if (typeof mount !== 'function') {
      throw new Error(`${app.name} must export a ${mountName}(container, context) function`);
    }

    const mounted = await mount(container, fullContext);

    if (typeof mounted === 'function') {
      return {
        unmount: async () => {
          await mounted();
          mountedStyles.unmount();
        },
      };
    }

    if (mounted && typeof mounted === 'object' && 'unmount' in mounted) {
      return {
        ...mounted,
        unmount: async () => {
          await mounted.unmount();
          mountedStyles.unmount();
        },
      };
    }

    return {
      unmount: () => {
        container.replaceChildren();
        mountedStyles.unmount();
      },
    };
  } catch (error) {
    mountedStyles?.unmount();
    await options.onError?.(error, app);
    throw error;
  }
}

interface MountedStyles {
  unmount: () => void;
}

const noopMountedStyles: MountedStyles = { unmount: () => {} };

const styleRefCounts = new Map<string, number>();

async function mountMicroAppStyles(app: MicroAppConfig): Promise<MountedStyles> {
  if (typeof document === 'undefined') return { unmount: () => {} };

  const urls = resolveStyleUrls(app);
  if (!urls.length) return { unmount: () => {} };

  await Promise.all(urls.map((url) => loadStylesheet(url)));

  return {
    unmount() {
      for (const url of urls) {
        const currentCount = styleRefCounts.get(url) ?? 0;
        if (currentCount > 1) {
          styleRefCounts.set(url, currentCount - 1);
          continue;
        }

        styleRefCounts.delete(url);
        document.querySelector<HTMLLinkElement>(`link[data-micro-app-style="${cssEscape(url)}"]`)?.remove();
      }
    },
  };
}

function resolveStyleUrls(app: MicroAppConfig): string[] {
  const explicitUrls = app.styleUrls ?? [];
  if (explicitUrls.length > 0) {
    return explicitUrls.map((url) => new URL(url, app.entryUrl).toString());
  }

  if (app.dev?.viteReactRefresh || app.runtime.type === 'html-fragment' || app.runtime.type === 'iframe') {
    return [];
  }

  const entryUrl = getMicroAppEntryUrl(app);
  if (!entryUrl.endsWith('.js')) return [];

  return [entryUrl.replace(/\.js(\?.*)?$/, '.css$1')];
}

function loadStylesheet(url: string): Promise<void> {
  const currentCount = styleRefCounts.get(url) ?? 0;
  styleRefCounts.set(url, currentCount + 1);

  const existingLink = document.querySelector<HTMLLinkElement>(`link[data-micro-app-style="${cssEscape(url)}"]`);
  if (existingLink) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.dataset.microAppStyle = url;
    link.onload = () => resolve();
    link.onerror = () => {
      styleRefCounts.delete(url);
      link.remove();
      reject(new Error(`Unable to load micro app stylesheet ${url}`));
    };
    document.head.appendChild(link);
  });
}

function cssEscape(value: string): string {
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
    return CSS.escape(value);
  }

  return value.replace(/"/g, '\\"');
}

async function installViteReactRefreshPreamble(entryUrl: string): Promise<void> {
  if (typeof window === 'undefined') return;
  if (window.__vite_plugin_react_preamble_installed__) return;

  const appOrigin = new URL(entryUrl).origin;
  const runtime = (await import(/* webpackIgnore: true */ `${appOrigin}/@react-refresh`)) as ViteReactRuntime;
  runtime.injectIntoGlobalHook(window);
  window.$RefreshReg$ = () => {};
  window.$RefreshSig$ = () => (type: unknown) => type;
  window.__vite_plugin_react_preamble_installed__ = true;
}
