import { eventBus, PlatformEvents } from './event-bus.js';
export function normalizeError(error) {
    if (error instanceof Error) {
        return {
            name: error.name,
            message: error.message,
            stack: error.stack,
        };
    }
    return {
        message: typeof error === 'string' ? error : 'Unknown runtime error',
    };
}
export function createConsoleLogger(prefix = 'MicroFrontend') {
    return {
        log(entry) {
            const writer = entry.level === 'error' ? console.error : entry.level === 'warn' ? console.warn : console.info;
            writer(`[${prefix}] ${entry.message}`, entry);
        },
    };
}
export function createFetchLogger(endpoint, init) {
    return {
        async log(entry) {
            await fetch(endpoint, {
                ...init,
                method: init?.method ?? 'POST',
                headers: {
                    'content-type': 'application/json',
                    ...(init?.headers ?? {}),
                },
                body: JSON.stringify(entry),
                keepalive: true,
            });
        },
    };
}
export function reportMicroAppError({ app, error, logger, source = 'runtime', metadata, }) {
    const entry = {
        level: 'error',
        message: `${app.name} failed in ${source}`,
        appId: app.id,
        source,
        error: normalizeError(error),
        metadata,
        timestamp: Date.now(),
    };
    eventBus.emit(PlatformEvents.APP_ERROR, app.id, entry);
    void logger?.log(entry);
    return entry;
}
