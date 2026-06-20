import { headers } from 'next/headers';
import { AlertCircle, CheckCircle2, FileText, Inbox } from 'lucide-react';
import { fetchMicroAppHtmlFragment, normalizeError, type MicroAppConfig } from '@openmf/core';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export async function HtmlFragmentMicroApp({ appConfig }: { appConfig: MicroAppConfig }) {
  const baseUrl = await getShellOrigin();
  let fragment: Awaited<ReturnType<typeof fetchMicroAppHtmlFragment>>;

  try {
    fragment = await fetchMicroAppHtmlFragment(appConfig, { baseUrl });
  } catch (error) {
    const normalized = normalizeError(error);
    console.error(`[micro-app-error] ${appConfig.id} html-fragment: ${normalized.message}`, {
      error: normalized,
      entryUrl: appConfig.entryUrl,
      manifestUrl: appConfig.manifestUrl,
    });

    return (
      <Card className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
            <AlertCircle className="h-5 w-5" aria-hidden="true" />
            HTML Fragment Error Fallback
          </CardTitle>
          <CardDescription className="text-red-700 dark:text-red-300">
            {appConfig.owner} owns this fragment endpoint and can triage the logged shell error.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-red-800 dark:text-red-200">
          <p>{normalized.message}</p>
          <div className="rounded-md border border-red-200 bg-white p-4 font-mono text-xs dark:border-red-900 dark:bg-red-950/60">
            <div>appId={appConfig.id}</div>
            <div>runtime={appConfig.runtime.type}</div>
            <div className="break-all">entry={appConfig.entryUrl}</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!fragment.html.trim()) {
    return (
      <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-200">
            <Inbox className="h-5 w-5" aria-hidden="true" />
            Empty HTML Fragment
          </CardTitle>
          <CardDescription className="text-amber-800 dark:text-amber-300">
            {appConfig.name} responded successfully, but the fragment did not contain renderable HTML.
          </CardDescription>
        </CardHeader>
        <CardContent className="rounded-md border border-amber-200 bg-white p-4 font-mono text-xs text-amber-900 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-200">
          <div>appId={appConfig.id}</div>
          <div>runtime={appConfig.runtime.type}</div>
          <div className="break-all">source={fragment.sourceUrl}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" aria-hidden="true" />
          RSC HTML Fragment
        </CardTitle>
        <CardDescription>
          Fetched from {fragment.sourceUrl} and rendered by the shell server component path
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
          Fragment ready
        </div>
        <div
          className="min-h-96 overflow-hidden rounded-md border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
          dangerouslySetInnerHTML={{ __html: fragment.html }}
        />
      </CardContent>
    </Card>
  );
}

async function getShellOrigin(): Promise<string> {
  const requestHeaders = await headers();
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? 'localhost:3000';
  const protocol = requestHeaders.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https');
  return `${protocol}://${host}`;
}
