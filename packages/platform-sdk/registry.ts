import type { MicroAppConfig } from './micro-app.js';

export type MicroAppRegistrySource =
  | MicroAppConfig[]
  | (() => MicroAppConfig[] | Promise<MicroAppConfig[]>)
  | {
      type: 'inline';
      apps: MicroAppConfig[];
    }
  | {
      type: 'url';
      url: string;
      init?: RequestInit;
    };

export interface MicroAppRegistry {
  list: () => MicroAppConfig[];
  get: (id: string) => MicroAppConfig | undefined;
  has: (id: string) => boolean;
}

export async function resolveMicroAppRegistry(source: MicroAppRegistrySource): Promise<MicroAppRegistry> {
  if (Array.isArray(source)) {
    return createMicroAppRegistry(source);
  }

  if (typeof source === 'function') {
    return createMicroAppRegistry(await source());
  }

  if (source.type === 'inline') {
    return createMicroAppRegistry(source.apps);
  }

  return createMicroAppRegistry(await fetchMicroAppRegistry(source.url, source.init));
}

export function createMicroAppRegistry(apps: MicroAppConfig[]): MicroAppRegistry {
  const uniqueApps = dedupeApps(apps);
  const byId = new Map(uniqueApps.map((app) => [app.id, app]));

  return {
    list: () => uniqueApps,
    get: (id: string) => byId.get(id),
    has: (id: string) => byId.has(id),
  };
}

export async function fetchMicroAppRegistry(url: string, init?: RequestInit): Promise<MicroAppConfig[]> {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(`Unable to load micro app registry from ${url}: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json() as { apps?: MicroAppConfig[] } | MicroAppConfig[];
  return Array.isArray(payload) ? payload : payload.apps ?? [];
}

function dedupeApps(apps: MicroAppConfig[]): MicroAppConfig[] {
  const seen = new Set<string>();
  const uniqueApps: MicroAppConfig[] = [];

  for (const app of apps) {
    if (seen.has(app.id)) continue;
    seen.add(app.id);
    uniqueApps.push(app);
  }

  return uniqueApps;
}
