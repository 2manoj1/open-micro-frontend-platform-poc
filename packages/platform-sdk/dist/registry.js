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
    return Array.isArray(payload) ? payload : payload.apps ?? [];
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
