import type { MicroAppConfig } from '@micro-frontend/platform-sdk';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function IframeMicroApp({ appConfig }: { appConfig: MicroAppConfig }) {
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
        <iframe
          className="min-h-96 w-full rounded-md border border-slate-200 bg-white dark:border-slate-800"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          src={appConfig.runtime.url}
          title={appConfig.runtime.title ?? appConfig.name}
        />
      </CardContent>
    </Card>
  );
}
