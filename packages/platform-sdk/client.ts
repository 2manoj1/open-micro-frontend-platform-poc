import { PlatformEvents, eventBus } from './event-bus.js';
import { notifyMcpHost, connectOfficialMcpAppRuntime, type McpJsonValue } from './mcp-app.js';
import type { MicroAppContext } from './micro-app.js';
import { reportMicroAppError, type PlatformLogger } from './observability.js';
import { registerWebMcpTool } from './web-mcp.js';

export const platformAppConfigs = new Map<string, any>();

export interface MicroAppElementLifecycle {
  mount: (host: HTMLElement, context: MicroAppContext) => void | (() => void | Promise<void>) | Promise<void | (() => void | Promise<void>)>;
  unmount?: (host: HTMLElement) => void | Promise<void>;
}

export interface DefineMicroAppElementOptions {
  observedAttributes?: string[];
  logger?: PlatformLogger;
}

export function defineMicroAppElement(
  tagName: string,
  lifecycle: MicroAppElementLifecycle,
  options: DefineMicroAppElementOptions = {}
): CustomElementConstructor {
  const existingElement = customElements.get(tagName);
  if (existingElement) return existingElement;

  class PlatformMicroAppElement extends HTMLElement {
    static observedAttributes = options.observedAttributes ?? [];

    private cleanup?: () => void | Promise<void>;

    async connectedCallback() {
      const context = this.createContext();
      console.log(`[Platform SDK] connectedCallback triggered for: ${context.app.id}`);

      let connectPromise: Promise<unknown> | null = null;

      const fullContext = typeof window !== 'undefined' ? (window as any).__MICRO_APP_CONTEXT__ : null;
      const isAiNative = fullContext?.app?.capabilities?.aiNative === true;
      const tagNameLower = tagName.toLowerCase();
      const config = platformAppConfigs.get(tagNameLower);

      // WebMCP tool registration (if modelContext is available and options.mcp is true)
      if (typeof window !== 'undefined' && config && config.mcp && config.tools) {
        for (const [name, tool] of Object.entries(config.tools)) {
          try {
            registerWebMcpTool({
              name,
              description: (tool as any).description,
              inputSchema: (tool as any).inputSchema,
              execute: (tool as any).execute
            });
          } catch (e) {
            console.warn(`[Platform SDK] Failed to register WebMCP tool ${name}:`, e);
          }
        }
      }

      // Auto-connect to official MCP runtime if running in iframe, not AI-native, and not connected yet
      if (typeof window !== 'undefined' && window.parent !== window && !isAiNative && !(window as any).__MCP_RUNTIME_CONNECTED__) {
        const shouldConnect = config ? config.mcp === true : true;

        if (shouldConnect) {
          console.log(`[Platform SDK] Auto-connecting to MCP runtime for: ${context.app.id}...`);

          const mcpName = config?.name ?? context.app.name;
          const mcpVersion = config?.version ?? context.app.version ?? '1.0.0';
          const mcpCapabilities = config?.capabilities ?? {
            sampling: {},
            serverTools: {},
            modelContext: {},
          };

          const defaultHandlers = {
            onToolInput(input: any) {
              console.log('[Platform SDK] MCP Tool input received:', input);
            },
            onToolResult(result: any) {
              console.log('[Platform SDK] MCP Tool result received:', result);
            },
            async onTeardown() {
              console.log('[Platform SDK] MCP Teardown event received');
              return { appId: config?.id ?? context.app.id };
            }
          };

          connectPromise = connectOfficialMcpAppRuntime({
            name: mcpName,
            version: mcpVersion,
            capabilities: mcpCapabilities,
            handlers: config?.handlers ?? defaultHandlers
          }).then((runtime) => {
            console.log(`[Platform SDK] connectOfficialMcpAppRuntime finished for: ${context.app.id}. Status:`, runtime.status);
            return runtime;
          }).catch((error) => {
            console.warn(`[Platform SDK] Auto-connecting to MCP runtime for ${context.app.id} failed:`, error);
            return null;
          });
        }
      }

      try {
        const mounted = await lifecycle.mount(this, context);
        this.cleanup = typeof mounted === 'function' ? mounted : undefined;
        await nextPaint();

        if (connectPromise) {
          await connectPromise;
        }
        this.dispatchEvent(
          new CustomEvent('micro-app:ready', {
            bubbles: true,
            composed: true,
            detail: {
              appId: context.app.id,
              tagName,
              timestamp: Date.now(),
            },
          })
        );
        eventBus.emit(PlatformEvents.APP_LOADED, context.app.id, { tagName });
      } catch (error) {
        reportMicroAppError({
          app: context.app,
          error,
          logger: options.logger,
          source: 'micro-app-connected-callback',
          metadata: { tagName },
        });
        throw error;
      }
    }

    disconnectedCallback() {
      window.setTimeout(() => {
        try {
          void this.cleanup?.();
          void lifecycle.unmount?.(this);
          eventBus.emit(PlatformEvents.APP_UNLOADED, this.getAttribute('data-app-name') ?? tagName, { tagName });
        } catch (error) {
          reportMicroAppError({
            app: {
              id: this.getAttribute('data-app-name') ?? tagName,
              name: this.getAttribute('data-app-name') ?? tagName,
            },
            error,
            logger: options.logger,
            source: 'micro-app-disconnected-callback',
            metadata: { tagName },
          });
        }
      }, 0);
    }

    private createContext(): MicroAppContext {
      return {
        app: {
          id: this.getAttribute('data-app-name') ?? tagName,
          name: this.getAttribute('data-app-name') ?? tagName,
          description: '',
          domain: '',
          icon: '',
          accent: '',
          status: 'Ready',
          framework: 'custom',
          rendering: ['csr'],
          entryUrl: '',
          manifestUrl: '',
          runtime: { type: 'web-component', tagName },
          version: this.getAttribute('data-version') ?? '0.0.0',
          owner: '',
          permissions: [],
        },
        shellOrigin: this.getAttribute('data-shell-origin') ?? window.location.origin,
      };
    }
  }

  customElements.define(tagName, PlatformMicroAppElement);
  return PlatformMicroAppElement;
}

function nextPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

export function emitMicroAppEvent(eventType: string, source: string, payload: unknown): void {
  eventBus.emit(eventType, source, payload);
}

export function emitMcpAppEvent(
  eventType: keyof Pick<
    typeof PlatformEvents,
    | 'MCP_APP_REGISTERED'
    | 'MCP_TOOL_CALL_REQUESTED'
    | 'MCP_TOOL_CALL_COMPLETED'
    | 'MCP_TOOL_CALL_FAILED'
    | 'MCP_RESOURCE_REQUESTED'
    | 'MCP_PROMPT_REQUESTED'
  >,
  source: string,
  payload: unknown
): void {
  const type = PlatformEvents[eventType];
  eventBus.emit(type, source, payload);
  notifyMcpHost('ui/notification', {
    type,
    source,
    payload: toMcpJsonValue(payload),
    timestamp: Date.now(),
  });
}

export {
  callMcpHostTool,
  createMcpAppBridge,
  connectOfficialMcpAppRuntime,
  getDefaultMcpAppBridge,
  initializeMcpAppBridge,
  notifyMcpHost,
  requestMcpHost,
  type OfficialMcpAppRuntime,
} from './mcp-app.js';
export { isWebMcpAvailable, registerWebMcpTool } from './web-mcp.js';

function toMcpJsonValue(value: unknown): McpJsonValue {
  if (value === undefined) return null;
  return JSON.parse(JSON.stringify(value)) as McpJsonValue;
}
