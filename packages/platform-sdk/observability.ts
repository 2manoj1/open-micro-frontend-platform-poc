import { eventBus, PlatformEvents } from './event-bus.js';
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

export function normalizeError(error: unknown): NonNullable<PlatformLogEntry['error']> {
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

export function createConsoleLogger(prefix = 'MicroFrontend'): PlatformLogger {
  return {
    log(entry) {
      const writer = entry.level === 'error' ? console.error : entry.level === 'warn' ? console.warn : console.info;
      writer(`[${prefix}] ${entry.message}`, entry);
    },
  };
}

export function createFetchLogger(endpoint: string, init?: RequestInit): PlatformLogger {
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

export function reportMicroAppError({
  app,
  error,
  logger,
  source = 'runtime',
  metadata,
}: {
  app: Pick<MicroAppConfig, 'id' | 'name'>;
  error: unknown;
  logger?: PlatformLogger;
  source?: string;
  metadata?: Record<string, unknown>;
}): PlatformLogEntry {
  const entry: PlatformLogEntry = {
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
