import type { MicroAppConfig } from './micro-app.js';
export type PlatformLogLevel = 'debug' | 'info' | 'warn' | 'error';
export interface PlatformLogEntry {
    level: PlatformLogLevel;
    message: string;
    appId?: string;
    source?: string;
    error?: {
        name?: string;
        message: string;
        stack?: string;
    };
    metadata?: Record<string, unknown>;
    timestamp: number;
}
export interface PlatformLogger {
    log: (entry: PlatformLogEntry) => void | Promise<void>;
}
export declare function normalizeError(error: unknown): NonNullable<PlatformLogEntry['error']>;
export declare function createConsoleLogger(prefix?: string): PlatformLogger;
export declare function createFetchLogger(endpoint: string, init?: RequestInit): PlatformLogger;
export declare function reportMicroAppError({ app, error, logger, source, metadata, }: {
    app: Pick<MicroAppConfig, 'id' | 'name'>;
    error: unknown;
    logger?: PlatformLogger;
    source?: string;
    metadata?: Record<string, unknown>;
}): PlatformLogEntry;
//# sourceMappingURL=observability.d.ts.map