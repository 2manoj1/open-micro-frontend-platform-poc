import { Suspense } from 'react';
import { CheckCircle2, Database, ExternalLink, Layers3, MessageSquareText, Radio, ShieldCheck, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HtmlFragmentMicroApp } from '@/components/html-fragment-micro-app';
import { IframeMicroApp } from '@/components/iframe-micro-app';
import { MicroAppIsland, MicroAppIslandFallback } from '@/components/micro-app-island';
import { getMicroApp } from '@/lib/micro-apps';

export const dynamic = 'force-dynamic';

export default async function MicroAppPage({
  params,
}: {
  params: Promise<{ appName: string }>;
}) {
  const { appName } = await params;
  const appConfig = await getMicroApp(appName);

  if (!appConfig) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-red-600">App Not Found</h1>
        <p className="text-slate-600">The micro app &quot;{appName}&quot; does not exist.</p>
      </div>
    );
  }

  const mcp = appConfig.capabilities?.mcpApps;

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
              {appConfig.runtime.type}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{appConfig.name}</h1>
            <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-400">
              {appConfig.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-md bg-slate-100 px-2.5 py-1 font-mono dark:bg-slate-800">
              v{appConfig.version}
            </span>
            <span className="rounded-md bg-slate-100 px-2.5 py-1 font-semibold capitalize text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {appConfig.framework}
            </span>
            <span className="rounded-md bg-emerald-100 px-2.5 py-1 font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              {appConfig.status}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <InfoTile label="Owner" value={appConfig.owner} />
        <InfoTile label="Rendering" value={appConfig.rendering.join(' / ').toUpperCase()} />
        <InfoTile label="MCPApps" value={mcp?.enabled ? `${mcp.tools?.length ?? 0} tools / ${mcp.resources?.length ?? 0} resources` : 'Not declared'} />
      </div>

      <div>
        {appConfig.runtime.type === 'html-fragment' ? (
          <Suspense fallback={<SuspenseIslandCard label={`Fetching ${appConfig.name} fragment...`} />}>
            <HtmlFragmentMicroApp appConfig={appConfig} />
          </Suspense>
        ) : appConfig.runtime.type === 'iframe' ? (
          <IframeMicroApp appConfig={appConfig} />
        ) : (
          <Suspense fallback={<SuspenseIslandCard label={`Preparing ${appConfig.name} island...`} />}>
            <MicroAppIsland appConfig={appConfig} />
          </Suspense>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            SDK Runtime Contract
          </CardTitle>
          <CardDescription>Portable metadata passed from registry to shell SDK and client SDK.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-2">
          <p><strong>App ID:</strong> {appConfig.id}</p>
          <p><strong>Owner:</strong> {appConfig.owner}</p>
          <p><strong>Framework:</strong> {appConfig.framework}</p>
          <p><strong>Runtime:</strong> {appConfig.runtime.type}</p>
          <p><strong>Rendering:</strong> {appConfig.rendering.join(' / ').toUpperCase()}</p>
          <p><strong>Permissions:</strong> {appConfig.permissions.join(', ')}</p>
          <p className="break-all"><strong>ESM URL:</strong> {appConfig.entryUrl}</p>
          <p className="break-all md:col-span-2">
            <strong>Manifest:</strong>{' '}
            <a className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-300" href={appConfig.manifestUrl} target="_blank" rel="noreferrer">
              {appConfig.manifestUrl}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Radio className="h-5 w-5 text-cyan-600" aria-hidden="true" />
            MCPApps SDK Capability
          </CardTitle>
          <CardDescription>
            Manifest-declared tools, resources, prompts, and event namespaces that can be routed through the platform event bus.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm md:grid-cols-4">
          <CapabilityList icon={Wrench} title="Tools" items={mcp?.tools} emptyLabel="No tools declared" />
          <CapabilityList icon={Database} title="Resources" items={mcp?.resources} emptyLabel="No resources declared" />
          <CapabilityList icon={MessageSquareText} title="Prompts" items={mcp?.prompts} emptyLabel="No prompts declared" />
          <CapabilityList icon={Radio} title="Events" items={mcp?.eventNamespaces} emptyLabel="No event namespaces declared" />
          <div className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900 md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Configurable Observability</div>
            <div className="mt-2 grid gap-2 font-mono text-xs text-slate-700 dark:text-slate-300 md:grid-cols-2">
              <span>app:error channel enabled</span>
              <span>logLevel={appConfig.capabilities?.observability?.logLevel ?? 'not configured'}</span>
              <span className="break-all md:col-span-2">errorEndpoint={appConfig.capabilities?.observability?.errorEndpoint ?? 'not configured'}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-950 dark:text-white">{value}</div>
    </div>
  );
}

function CapabilityList({
  icon: Icon,
  title,
  items,
  emptyLabel,
}: {
  icon: typeof Wrench;
  title: string;
  items?: string[];
  emptyLabel: string;
}) {
  const values = items?.length ? items : [emptyLabel];

  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-center gap-2 font-semibold text-slate-950 dark:text-white">
        <Icon className="h-4 w-4 text-slate-700 dark:text-slate-200" aria-hidden="true" />
        {title}
      </div>
      <div className="space-y-2">
        {values.map((item) => (
          <div key={item} className="rounded-md bg-white px-2 py-1 font-mono text-xs text-slate-700 dark:bg-slate-950 dark:text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function SuspenseIslandCard({ label }: { label: string }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Runtime Surface</CardTitle>
        <CardDescription>Preparing the selected micro app renderer</CardDescription>
      </CardHeader>
      <CardContent className="relative min-h-96">
        <MicroAppIslandFallback label={label} />
      </CardContent>
    </Card>
  );
}
