/**
 * Platform-wide Event Bus for Micro Apps
 * Uses CustomEvent to communicate between independent apps
 */
export interface PlatformEvent {
    type: string;
    source: string;
    payload: unknown;
    timestamp: number;
}
export type EventListener = (event: PlatformEvent) => void;
export interface EventBusOptions {
    maxHistorySize?: number;
    eventTarget?: EventTarget;
}
export declare class EventBus {
    private listeners;
    private eventHistory;
    private maxHistorySize;
    private eventTarget?;
    constructor(options?: EventBusOptions);
    configure(options: EventBusOptions): void;
    /**
     * Subscribe to platform events
     */
    on(eventType: string, listener: EventListener): () => void;
    /**
     * Subscribe to a single event
     */
    once(eventType: string, listener: EventListener): () => void;
    /**
     * Publish platform event
     */
    emit(eventType: string, source: string, payload: unknown): void;
    /**
     * Get event history
     */
    getHistory(eventType?: string): PlatformEvent[];
    /**
     * Clear event history
     */
    clearHistory(): void;
    /**
     * Remove all listeners for an event type
     */
    off(eventType: string): void;
    /**
     * Remove all listeners
     */
    clear(): void;
}
export declare const eventBus: EventBus;
export declare function createEventBus(options?: EventBusOptions): EventBus;
/**
 * Common platform event types
 */
export declare const PlatformEvents: {
    readonly APP_LOADED: "app:loaded";
    readonly APP_UNLOADED: "app:unloaded";
    readonly APP_ERROR: "app:error";
    readonly USER_LOGGED_IN: "auth:login";
    readonly USER_LOGGED_OUT: "auth:logout";
    readonly AUTH_STATE_CHANGED: "auth:state-changed";
    readonly NAVIGATE: "nav:navigate";
    readonly ROUTE_CHANGED: "nav:route-changed";
    readonly SHOW_NOTIFICATION: "notification:show";
    readonly HIDE_NOTIFICATION: "notification:hide";
    readonly DATA_UPDATED: "data:updated";
    readonly DATA_REFRESH: "data:refresh";
    readonly THEME_CHANGED: "theme:changed";
    readonly APP_MESSAGE: "app:message";
    readonly MCP_APP_REGISTERED: "mcp:app-registered";
    readonly MCP_TOOL_CALL_REQUESTED: "mcp:tool-call-requested";
    readonly MCP_TOOL_CALL_COMPLETED: "mcp:tool-call-completed";
    readonly MCP_TOOL_CALL_FAILED: "mcp:tool-call-failed";
    readonly MCP_RESOURCE_REQUESTED: "mcp:resource-requested";
    readonly MCP_PROMPT_REQUESTED: "mcp:prompt-requested";
};
//# sourceMappingURL=event-bus.d.ts.map