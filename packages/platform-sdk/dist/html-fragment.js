export async function fetchMicroAppHtmlFragment(app, options = {}) {
    if (app.runtime.type !== 'html-fragment') {
        throw new Error(`${app.name} is not configured as an html-fragment micro app`);
    }
    const sourceUrl = resolveFragmentUrl(app.runtime.url, options.baseUrl);
    const init = {
        cache: app.runtime.cache,
        next: app.runtime.revalidate ? { revalidate: app.runtime.revalidate } : undefined,
    };
    const response = await fetch(sourceUrl, init);
    if (!response.ok) {
        throw new Error(`Unable to load ${app.name} HTML from ${sourceUrl}: ${response.status} ${response.statusText}`);
    }
    return {
        html: await response.text(),
        sourceUrl,
    };
}
export async function streamMicroAppHtmlFragment(app, options = {}) {
    if (app.runtime.type !== 'html-fragment') {
        throw new Error(`${app.name} is not configured as an html-fragment micro app`);
    }
    const sourceUrl = resolveFragmentUrl(app.runtime.url, options.baseUrl);
    const init = {
        cache: app.runtime.cache,
        next: app.runtime.revalidate ? { revalidate: app.runtime.revalidate } : undefined,
    };
    const response = await fetch(sourceUrl, init);
    if (!response.ok || !response.body) {
        throw new Error(`Unable to stream ${app.name} HTML from ${sourceUrl}: ${response.status} ${response.statusText}`);
    }
    return response.body;
}
function resolveFragmentUrl(url, baseUrl) {
    if (/^https?:\/\//.test(url))
        return url;
    if (!baseUrl)
        return url;
    return new URL(url, baseUrl).toString();
}
