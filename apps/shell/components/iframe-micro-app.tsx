'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import type { MicroAppConfig } from '@micro-frontend/platform-sdk';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MicroAppIslandFallback } from '@/components/micro-app-island';

export function IframeMicroApp({ appConfig }: { appConfig: MicroAppConfig }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  if (appConfig.runtime.type !== 'iframe') {
    return null;
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Isolated Runtime Frame</CardTitle>
        <CardDescription>
          Full document isolation for independently hosted SSR, SSG, static, or legacy apps
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
            <div className="flex items-center gap-2 font-semibold">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              Frame failed to load
            </div>
            <p className="mt-1 break-all">
              {appConfig.owner} owns this iframe URL: {appConfig.runtime.url}
            </p>
          </div>
        )}
        {!loading && !error && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            Frame ready
          </div>
        )}
        <div className="relative">
          {loading && !error && (
            <MicroAppIslandFallback
              label={`Loading ${appConfig.name} frame`}
              detail="The shell is waiting for the isolated runtime document to finish loading."
            />
          )}
        <iframe
          className="min-h-96 w-full rounded-md border border-slate-200 bg-white dark:border-slate-800"
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          onLoad={() => setLoading(false)}
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          src={appConfig.runtime.url}
          title={appConfig.runtime.title ?? appConfig.name}
        />
        </div>
      </CardContent>
    </Card>
  );
}
