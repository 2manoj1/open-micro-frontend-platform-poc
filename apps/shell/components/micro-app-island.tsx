'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, Boxes, RefreshCw, Terminal } from 'lucide-react';
import {
  createFetchLogger,
  mountMicroApp,
  normalizeError,
  reportMicroAppError,
  type MicroAppConfig,
  type MountedMicroApp,
  type PlatformLogEntry,
} from '@micro-frontend/platform-sdk';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RuntimeErrorState {
  message: string;
  source: string;
  logEntry?: PlatformLogEntry;
}

export function MicroAppIsland({ appConfig }: { appConfig: MicroAppConfig }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef<MountedMicroApp | null>(null);
  const [error, setError] = useState<RuntimeErrorState | null>(null);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);
  const logger = useMemo(() => {
    const endpoint = appConfig.capabilities?.observability?.errorEndpoint;
    return endpoint ? createFetchLogger(endpoint) : undefined;
  }, [appConfig.capabilities?.observability?.errorEndpoint]);

  const captureError = useCallback((err: unknown, source: string, metadata?: Record<string, unknown>) => {
    const entry = reportMicroAppError({
      app: appConfig,
      error: err,
      logger,
      source,
      metadata,
    });
    const origin = getRuntimeOrigin(appConfig);
    setError({
      message:
        entry.error?.message ??
        `Failed to load ${appConfig.name}. Make sure the remote app is running${origin ? ` on ${origin}` : ''}.`,
      source,
      logEntry: entry,
    });
    return entry;
  }, [appConfig, logger]);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;
    const container = containerRef.current;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const mounted = await mountMicroApp(appConfig, container, {
          shellOrigin: window.location.origin,
        });

        if (cancelled) {
          await mounted.unmount();
          return;
        }

        mountedRef.current = mounted;
        setLoading(false);
      } catch (err) {
        captureError(err, 'micro-app-load', {
          entryUrl: appConfig.entryUrl,
          runtime: appConfig.runtime.type,
        });
        setLoading(false);
      }
    }

    function handleWindowError(event: ErrorEvent) {
      captureError(event.error ?? event.message, 'micro-app-runtime', {
        filename: event.filename,
        line: event.lineno,
        column: event.colno,
      });
      setLoading(false);
      container.replaceChildren();
    }

    function handleUnhandledRejection(event: PromiseRejectionEvent) {
      captureError(event.reason, 'micro-app-unhandled-rejection');
      setLoading(false);
      container.replaceChildren();
    }

    window.addEventListener('error', handleWindowError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    load();

    return () => {
      cancelled = true;
      window.removeEventListener('error', handleWindowError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      void mountedRef.current?.unmount();
      mountedRef.current = null;
      container.replaceChildren();
    };
  }, [appConfig, captureError, reloadKey]);

  return (
    <div className="space-y-6">
      {error && (
        <MicroAppErrorFallback appConfig={appConfig} error={error} onRetry={() => setReloadKey((value) => value + 1)} />
      )}

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Boxes className="h-5 w-5" aria-hidden="true" />
            Runtime Surface
          </CardTitle>
          <CardDescription>
            {loading ? 'Loading micro app island...' : `${appConfig.framework} micro app mounted successfully`}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          {loading && (
            <MicroAppIslandFallback label={`Loading ${appConfig.name}...`} />
          )}
          <div
            ref={containerRef}
            className="min-h-96 overflow-hidden rounded-md border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
          />
        </CardContent>
      </Card>
    </div>
  );
}

function MicroAppErrorFallback({
  appConfig,
  error,
  onRetry,
}: {
  appConfig: MicroAppConfig;
  error: RuntimeErrorState;
  onRetry: () => void;
}) {
  const normalized = normalizeError(error.logEntry?.error?.message ?? error.message);

  return (
    <Card className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
          <AlertCircle className="h-5 w-5" aria-hidden="true" />
          Micro App Error Fallback
        </CardTitle>
        <CardDescription className="text-red-700 dark:text-red-300">
          {appConfig.owner} can use this logged failure to triage the independently deployed remote.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-red-800 dark:text-red-200">
        <div className="rounded-md border border-red-200 bg-white p-4 dark:border-red-900 dark:bg-red-950/60">
          <div className="font-semibold">{appConfig.name} did not render successfully.</div>
          <p className="mt-1 text-red-700 dark:text-red-300">{normalized.message}</p>
        </div>
        <div className="grid gap-2 rounded-md border border-red-200 bg-white p-4 font-mono text-xs dark:border-red-900 dark:bg-red-950/60 md:grid-cols-2">
          <span>appId={appConfig.id}</span>
          <span>source={error.source}</span>
          <span>runtime={appConfig.runtime.type}</span>
          <span>owner={appConfig.owner}</span>
          <span className="break-all md:col-span-2">entry={appConfig.entryUrl}</span>
          <span className="break-all md:col-span-2">logEndpoint={appConfig.capabilities?.observability?.errorEndpoint ?? 'not configured'}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button type="button" size="sm" onClick={onRetry}>
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Retry
          </Button>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-red-700 dark:text-red-300">
            <Terminal className="h-4 w-4" aria-hidden="true" />
            Error emitted on `app:error` and posted to the configured logger.
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export function MicroAppIslandFallback({ label = 'Loading micro app...' }: { label?: string }) {
  return (
    <div className="absolute inset-4 z-10 flex items-center justify-center rounded-md border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="text-center">
        <div className="mb-3 inline-block animate-spin">
          <div className="h-8 w-8 rounded-full border-4 border-blue-500 border-t-transparent" />
        </div>
        <p className="text-slate-600 dark:text-slate-400">{label}</p>
      </div>
    </div>
  );
}

function getRuntimeOrigin(appConfig: MicroAppConfig): string {
  try {
    return new URL(appConfig.entryUrl, window.location.origin).origin;
  } catch {
    return '';
  }
}
