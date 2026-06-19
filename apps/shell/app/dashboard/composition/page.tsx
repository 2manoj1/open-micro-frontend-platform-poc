import { Suspense } from 'react';
import { Boxes, Columns2, Sparkles } from 'lucide-react';
import { RuntimeDesignSystemChrome } from '@/components/runtime-design-system-chrome';
import { MicroAppIsland, MicroAppIslandFallback } from '@/components/micro-app-island';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getMicroApp } from '@/lib/micro-apps';
import { shellPlatformConfig } from '@/lib/platform-config';

export const dynamic = 'force-dynamic';

export default async function CompositionPage() {
  const [designSystemApp, customerApp, aiAssistantApp] = await Promise.all([
    getMicroApp('design-system'),
    getMicroApp('customer'),
    getMicroApp('ai-assistant'),
  ]);

  if (!designSystemApp || !customerApp || !aiAssistantApp) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Composition unavailable</CardTitle>
          <CardDescription>Required apps are missing from the registry.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <RuntimeDesignSystemChrome
      designSystemApp={designSystemApp}
      shellName={shellPlatformConfig.shellName}
      active="composition"
    >
      <div className="space-y-5">
        <Card>
          <CardHeader>
            <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <Columns2 className="h-3.5 w-3.5" aria-hidden="true" />
              Runtime Composition
            </div>
            <CardTitle>One Shell, Shared Chrome, Two Runtime Apps</CardTitle>
            <CardDescription>
              Header and footer are loaded from the design-system remote at runtime. Customer and AI Assistant mount side by side through the same SDK loader.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-3">
            <CompositionFact icon={Boxes} label="Shell-owned" value="layout, auth, theme, registry" />
            <CompositionFact icon={Sparkles} label="Runtime-owned" value="micro app UI, events, release" />
            <CompositionFact icon={Columns2} label="Shared contract" value="tokens, header, footer, SDK" />
          </CardContent>
        </Card>

        <div className="grid gap-5 xl:grid-cols-2">
          <Suspense fallback={<MicroAppIslandFallback label="Loading Customer App..." />}>
            <MicroAppIsland appConfig={customerApp} />
          </Suspense>
          <Suspense fallback={<MicroAppIslandFallback label="Loading AI Assistant App..." />}>
            <MicroAppIsland appConfig={aiAssistantApp} />
          </Suspense>
        </div>
      </div>
    </RuntimeDesignSystemChrome>
  );
}

function CompositionFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Boxes;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
      <Icon className="mb-3 h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden="true" />
      <span className="block font-semibold text-slate-950 dark:text-white">{label}</span>
      <span>{value}</span>
    </div>
  );
}
