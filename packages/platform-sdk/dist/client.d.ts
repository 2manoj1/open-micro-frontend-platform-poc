import { PlatformEvents } from './event-bus.js';
import type { MicroAppContext } from './micro-app.js';
import { type PlatformLogger } from './observability.js';
export interface MicroAppElementLifecycle {
    mount: (host: HTMLElement, context: MicroAppContext) => void | (() => void | Promise<void>) | Promise<void | (() => void | Promise<void>)>;
    unmount?: (host: HTMLElement) => void | Promise<void>;
}
export interface DefineMicroAppElementOptions {
    observedAttributes?: string[];
    logger?: PlatformLogger;
}
export declare function defineMicroAppElement(tagName: string, lifecycle: MicroAppElementLifecycle, options?: DefineMicroAppElementOptions): CustomElementConstructor;
export declare function emitMicroAppEvent(eventType: string, source: string, payload: unknown): void;
export declare function emitMcpAppEvent(eventType: keyof Pick<typeof PlatformEvents, 'MCP_APP_REGISTERED' | 'MCP_TOOL_CALL_REQUESTED' | 'MCP_TOOL_CALL_COMPLETED' | 'MCP_TOOL_CALL_FAILED' | 'MCP_RESOURCE_REQUESTED' | 'MCP_PROMPT_REQUESTED'>, source: string, payload: unknown): void;
export { callMcpHostTool, createMcpAppBridge, connectOfficialMcpAppRuntime, getDefaultMcpAppBridge, initializeMcpAppBridge, notifyMcpHost, requestMcpHost, type OfficialMcpAppRuntime, } from './mcp-app.js';
export { isWebMcpAvailable, registerWebMcpTool } from './web-mcp.js';
//# sourceMappingURL=client.d.ts.map