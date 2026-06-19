/**
 * Platform-wide Event Bus for Micro Apps
 * Uses CustomEvent to communicate between independent apps
 */
export class EventBus {
    listeners = new Map();
    eventHistory = [];
    maxHistorySize;
    eventTarget;
    constructor(options = {}) {
        this.maxHistorySize = options.maxHistorySize ?? 100;
        this.eventTarget = options.eventTarget;
    }
    configure(options) {
        this.maxHistorySize = options.maxHistorySize ?? this.maxHistorySize;
        this.eventTarget = options.eventTarget ?? this.eventTarget;
    }
    /**
     * Subscribe to platform events
     */
    on(eventType, listener) {
        if (!this.listeners.has(eventType)) {
            this.listeners.set(eventType, new Set());
        }
        this.listeners.get(eventType).add(listener);
        // Return unsubscribe function
        return () => {
            this.listeners.get(eventType)?.delete(listener);
        };
    }
    /**
     * Subscribe to a single event
     */
    once(eventType, listener) {
        const unsubscribe = this.on(eventType, (event) => {
            listener(event);
            unsubscribe();
        });
        return unsubscribe;
    }
    /**
     * Publish platform event
     */
    emit(eventType, source, payload) {
        const event = {
            type: eventType,
            source,
            payload,
            timestamp: Date.now(),
        };
        // Store in history
        this.eventHistory.push(event);
        if (this.eventHistory.length > this.maxHistorySize) {
            this.eventHistory.shift();
        }
        // Notify local listeners
        const listeners = this.listeners.get(eventType);
        if (listeners) {
            listeners.forEach((listener) => {
                try {
                    listener(event);
                }
                catch (error) {
                    console.error(`[EventBus] Error in listener for ${eventType}:`, error);
                }
            });
        }
        // Emit as global CustomEvent for cross-frame communication
        const target = this.eventTarget ?? (typeof window !== 'undefined' ? window : undefined);
        if (target && typeof CustomEvent !== 'undefined') {
            const customEvent = new CustomEvent('platform-event', {
                detail: event,
                bubbles: true,
            });
            target.dispatchEvent(customEvent);
        }
    }
    /**
     * Get event history
     */
    getHistory(eventType) {
        if (eventType) {
            return this.eventHistory.filter((e) => e.type === eventType);
        }
        return [...this.eventHistory];
    }
    /**
     * Clear event history
     */
    clearHistory() {
        this.eventHistory = [];
    }
    /**
     * Remove all listeners for an event type
     */
    off(eventType) {
        this.listeners.delete(eventType);
    }
    /**
     * Remove all listeners
     */
    clear() {
        this.listeners.clear();
    }
}
// Global singleton instance
export const eventBus = new EventBus();
export function createEventBus(options) {
    return new EventBus(options);
}
/**
 * Common platform event types
 */
export const PlatformEvents = {
    // App lifecycle
    APP_LOADED: 'app:loaded',
    APP_UNLOADED: 'app:unloaded',
    APP_ERROR: 'app:error',
    // Authentication
    USER_LOGGED_IN: 'auth:login',
    USER_LOGGED_OUT: 'auth:logout',
    AUTH_STATE_CHANGED: 'auth:state-changed',
    // Navigation
    NAVIGATE: 'nav:navigate',
    ROUTE_CHANGED: 'nav:route-changed',
    // Notifications
    SHOW_NOTIFICATION: 'notification:show',
    HIDE_NOTIFICATION: 'notification:hide',
    // Data updates
    DATA_UPDATED: 'data:updated',
    DATA_REFRESH: 'data:refresh',
    // Theme
    THEME_CHANGED: 'theme:changed',
    // Custom app events
    APP_MESSAGE: 'app:message',
    // MCPApps-compatible events
    MCP_APP_REGISTERED: 'mcp:app-registered',
    MCP_TOOL_CALL_REQUESTED: 'mcp:tool-call-requested',
    MCP_TOOL_CALL_COMPLETED: 'mcp:tool-call-completed',
    MCP_TOOL_CALL_FAILED: 'mcp:tool-call-failed',
    MCP_RESOURCE_REQUESTED: 'mcp:resource-requested',
    MCP_PROMPT_REQUESTED: 'mcp:prompt-requested',
};
