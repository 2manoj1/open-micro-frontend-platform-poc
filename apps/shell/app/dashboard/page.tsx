import Link from 'next/link';
import { Activity, BookOpen, Bot, ChartNoAxesCombined, CreditCard, DatabaseZap, Layers3, MessageSquareText, Plug, Radio, ServerCog, ShieldCheck, ShoppingCart, Sparkles, Users, Workflow, type LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getMicroApps } from '@/lib/micro-apps';

export const dynamic = 'force-dynamic';

const iconMap = {
  Activity,
  BookOpen,
  Bot,
  ChartNoAxesCombined,
  CreditCard,
  ShoppingCart,
  ShieldCheck,
  Users,
};

const accentMap = {
  blue: 'border-blue-200 bg-blue-50/70 text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300',
  cyan: 'border-cyan-200 bg-cyan-50/70 text-cyan-700 dark:border-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-300',
  emerald: 'border-emerald-200 bg-emerald-50/70 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300',
  fuchsia: 'border-fuchsia-200 bg-fuchsia-50/70 text-fuchsia-700 dark:border-fuchsia-900 dark:bg-fuchsia-950/40 dark:text-fuchsia-300',
  green: 'border-green-200 bg-green-50/70 text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300',
  red: 'border-red-200 bg-red-50/70 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300',
  slate: 'border-slate-200 bg-slate-50/70 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200',
  violet: 'border-violet-200 bg-violet-50/70 text-violet-700 dark:border-violet-900 dark:bg-violet-950/40 dark:text-violet-300',
};

export default async function DashboardPage() {
  const microApps = await getMicroApps();
  const runtimeCount = microApps.filter((app) => app.rendering.includes('csr')).length;
  const mcpAppsCount = microApps.filter((app) => app.capabilities?.mcpApps?.enabled).length;

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              MVP Console
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Micro Frontend Registry</h1>
            <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-400">
              Discover, govern, and launch independently deployed apps across RSC fragments, static content, and client runtime islands.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <Metric label="Apps" value={microApps.length.toString()} />
            <Metric label="Islands" value={runtimeCount.toString()} />
            <Metric label="MCP" value={mcpAppsCount.toString()} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Registered Apps</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Each app owns its build, server, manifest, runtime, and deployment lifecycle.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          <Plug className="h-4 w-4" aria-hidden="true" />
          Injectable registry
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {microApps.map((app) => (
          <Link key={app.id} href={`/dashboard/${app.id}`}>
            <Card className="h-full cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <span className={`rounded-lg border p-2 ${accentMap[app.accent as keyof typeof accentMap]}`}>
                    {(() => {
                      const Icon = iconMap[app.icon as keyof typeof iconMap];
                      return <Icon className="h-5 w-5" aria-hidden="true" />;
                    })()}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {app.status}
                  </span>
                </div>
                <div>
                  <CardTitle>{app.name}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex justify-between gap-3">
                    <span>Domain</span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">{app.domain}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>Version</span>
                    <span className="font-mono text-slate-700 dark:text-slate-200">v{app.version}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>Framework</span>
                    <span className="capitalize text-slate-700 dark:text-slate-200">{app.framework}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>Rendering</span>
                    <span className="max-w-[12rem] text-right uppercase text-slate-700 dark:text-slate-200">{app.rendering.join(' / ')}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>Runtime</span>
                    <span className="text-right text-slate-700 dark:text-slate-200">{app.runtime.type}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>MCPApps</span>
                    <span className="text-right text-slate-700 dark:text-slate-200">
                      {app.capabilities?.mcpApps?.enabled ? `${app.capabilities.mcpApps.tools?.length ?? 0} tools / ${app.capabilities.mcpApps.resources?.length ?? 0} resources` : 'Disabled'}
                    </span>
                  </div>
                </div>
                <Button className="w-full" size="sm" aria-label={`Launch ${app.name}`}>
                  Launch App
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Architecture Contract</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-4">
          <Capability icon={Layers3} title="Discovery" text="Inline, remote JSON, or service-backed registries are injected through the SDK." />
          <Capability icon={ServerCog} title="RSC Path" text="Static, SSR, SSG, and ISR fragments can be fetched server-side and streamed." />
          <Capability icon={Plug} title="Runtime Path" text="React, Vue, Angular, or custom apps mount as client islands at runtime." />
          <Capability icon={Workflow} title="MCPApps Path" text="Tool, resource, prompt, and event namespaces travel through the app manifest and event bus." />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2030-Ready Platform Model</CardTitle>
          <CardDescription>
            The shell composes apps; teams own capabilities. Communication is async, observable, and replaceable by transport.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-5">
          <Capability icon={ServerCog} title="Shell" text="Navigation, auth context, theme, registry client, and runtime composition." />
          <Capability icon={DatabaseZap} title="Registry" text="Versions, owners, URLs, permissions, features, rendering modes, and MCP metadata." />
          <Capability icon={Radio} title="Event Fabric" text="CustomEvent today; BroadcastChannel, WebSocket, Redis, SNS/SQS, or Kafka later." />
          <Capability icon={MessageSquareText} title="AI Host" text="ChatGPT, Claude, or future MCPApps hosts can provide context and tool data." />
          <Capability icon={ShieldCheck} title="App Team" text="Owns UI, BFF, microservices, database, telemetry, release, and rollback." />
        </CardContent>
      </Card>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-20 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-center dark:border-slate-800 dark:bg-slate-900">
      <div className="font-mono text-xl font-semibold text-slate-950 dark:text-white">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  );
}

function Capability({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
      <Icon className="mb-3 h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden="true" />
      <strong className="block text-slate-950 dark:text-white">{title}</strong>
      <p className="mt-1 leading-6 text-slate-600 dark:text-slate-400">{text}</p>
    </div>
  );
}
