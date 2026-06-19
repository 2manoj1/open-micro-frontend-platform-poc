import { PlatformEvents, eventBus } from './event-bus.js';
import { reportMicroAppError } from './observability.js';
export function defineMicroAppElement(tagName, lifecycle, options = {}) {
    const existingElement = customElements.get(tagName);
    if (existingElement)
        return existingElement;
    class PlatformMicroAppElement extends HTMLElement {
        static observedAttributes = options.observedAttributes ?? [];
        cleanup;
        async connectedCallback() {
            const context = this.createContext();
            try {
                const mounted = await lifecycle.mount(this, context);
                this.cleanup = typeof mounted === 'function' ? mounted : undefined;
                eventBus.emit(PlatformEvents.APP_LOADED, context.app.id, { tagName });
            }
            catch (error) {
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
                }
                catch (error) {
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
        createContext() {
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
export function emitMicroAppEvent(eventType, source, payload) {
    eventBus.emit(eventType, source, payload);
}
export function emitMcpAppEvent(eventType, source, payload) {
    eventBus.emit(PlatformEvents[eventType], source, payload);
}
