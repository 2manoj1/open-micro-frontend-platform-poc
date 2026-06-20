export class MicroAppValidationError extends Error {
    issues;
    constructor(issues) {
        super(`Invalid micro app registry: ${issues.map((issue) => `${issue.path} ${issue.message}`).join('; ')}`);
        this.name = 'MicroAppValidationError';
        this.issues = issues;
    }
}
export async function resolveMicroAppRegistry(source) {
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
export function createMicroAppRegistry(apps) {
    assertMicroAppRegistry(apps);
    const uniqueApps = dedupeApps(apps);
    const byId = new Map(uniqueApps.map((app) => [app.id, app]));
    return {
        list: () => uniqueApps,
        get: (id) => byId.get(id),
        has: (id) => byId.has(id),
    };
}
export async function fetchMicroAppRegistry(url, init) {
    const response = await fetch(url, init);
    if (!response.ok) {
        throw new Error(`Unable to load micro app registry from ${url}: ${response.status} ${response.statusText}`);
    }
    const payload = await response.json();
    const apps = Array.isArray(payload) ? payload : payload.apps ?? [];
    assertMicroAppRegistry(apps);
    return apps;
}
export function assertMicroAppRegistry(apps) {
    const issues = validateMicroAppRegistry(apps);
    if (issues.length)
        throw new MicroAppValidationError(issues);
}
export function validateMicroAppRegistry(apps) {
    if (!Array.isArray(apps)) {
        return [{ path: 'apps', message: 'must be an array' }];
    }
    const issues = apps.flatMap((app, index) => validateMicroAppConfig(app, `apps[${index}]`));
    const seen = new Set();
    apps.forEach((app, index) => {
        if (!app?.id)
            return;
        if (seen.has(app.id)) {
            issues.push({ path: `apps[${index}].id`, message: `duplicates "${app.id}"` });
        }
        seen.add(app.id);
    });
    return issues;
}
export function validateMicroAppConfig(app, path = 'app') {
    const issues = [];
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
function dedupeApps(apps) {
    const seen = new Set();
    const uniqueApps = [];
    for (const app of apps) {
        if (seen.has(app.id))
            continue;
        seen.add(app.id);
        uniqueApps.push(app);
    }
    return uniqueApps;
}
function requireString(value, path, issues) {
    if (typeof value !== 'string' || value.trim().length === 0) {
        issues.push({ path, message: 'must be a non-empty string' });
    }
}
