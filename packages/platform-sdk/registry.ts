import type { MicroAppConfig } from './micro-app.js';

export interface MicroAppValidationIssue {
  path: string;
  message: string;
}

export class MicroAppValidationError extends Error {
  readonly issues: MicroAppValidationIssue[];

  constructor(issues: MicroAppValidationIssue[]) {
    super(`Invalid micro app registry: ${issues.map((issue) => `${issue.path} ${issue.message}`).join('; ')}`);
    this.name = 'MicroAppValidationError';
    this.issues = issues;
  }
}

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
  assertMicroAppRegistry(apps);
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
  const apps = Array.isArray(payload) ? payload : payload.apps ?? [];
  assertMicroAppRegistry(apps);
  return apps;
}

export function assertMicroAppRegistry(apps: MicroAppConfig[]): void {
  const issues = validateMicroAppRegistry(apps);
  if (issues.length) throw new MicroAppValidationError(issues);
}

export function validateMicroAppRegistry(apps: MicroAppConfig[]): MicroAppValidationIssue[] {
  if (!Array.isArray(apps)) {
    return [{ path: 'apps', message: 'must be an array' }];
  }

  const issues = apps.flatMap((app, index) => validateMicroAppConfig(app, `apps[${index}]`));
  const seen = new Set<string>();

  apps.forEach((app, index) => {
    if (!app?.id) return;
    if (seen.has(app.id)) {
      issues.push({ path: `apps[${index}].id`, message: `duplicates "${app.id}"` });
    }
    seen.add(app.id);
  });

  return issues;
}

export function validateMicroAppConfig(app: MicroAppConfig, path = 'app'): MicroAppValidationIssue[] {
  const issues: MicroAppValidationIssue[] = [];

  if (!app || typeof app !== 'object') {
    return [{ path, message: 'must be an object' }];
  }

  requireString(app.id, `${path}.id`, issues);
  requireString(app.name, `${path}.name`, issues);
  requireString(app.entryUrl, `${path}.entryUrl`, issues);
  requireString(app.manifestUrl, `${path}.manifestUrl`, issues);
  requireString(app.version, `${path}.version`, issues);
  requireString(app.owner, `${path}.owner`, issues);

  if (!Array.isArray(app.rendering) || app.rendering.length === 0) {
    issues.push({ path: `${path}.rendering`, message: 'must include at least one rendering mode' });
  }

  if (!Array.isArray(app.permissions)) {
    issues.push({ path: `${path}.permissions`, message: 'must be an array' });
  }

  if (!app.runtime || typeof app.runtime !== 'object') {
    issues.push({ path: `${path}.runtime`, message: 'must be configured' });
    return issues;
  }

  switch (app.runtime.type) {
    case 'web-component':
      requireString(app.runtime.tagName, `${path}.runtime.tagName`, issues);
      break;
    case 'module':
      break;
    case 'html-fragment':
    case 'iframe':
      requireString(app.runtime.url, `${path}.runtime.url`, issues);
      break;
    default:
      issues.push({ path: `${path}.runtime.type`, message: 'must be web-component, module, html-fragment, or iframe' });
  }

  return issues;
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

function requireString(value: unknown, path: string, issues: MicroAppValidationIssue[]): void {
  if (typeof value !== 'string' || value.trim().length === 0) {
    issues.push({ path, message: 'must be a non-empty string' });
  }
}
