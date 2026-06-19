export function getMicroAppEntryUrl(app) {
    if (app.runtime.type === 'html-fragment' || app.runtime.type === 'iframe') {
        return app.entryUrl || app.runtime.url;
    }
    return app.entryUrl ?? app.url ?? '';
}
export function getMicroAppTagName(app) {
    if (app.runtime.type === 'web-component')
        return app.runtime.tagName;
    return app.componentTag;
}
export async function mountMicroApp(app, container, context = { shellOrigin: window.location.origin }, options = {}) {
    let mountedStyles = noopMountedStyles;
    try {
        const entryUrl = getMicroAppEntryUrl(app);
        if (!entryUrl) {
            throw new Error(`No entry URL configured for ${app.name}`);
        }
        container.replaceChildren();
        if (app.dev?.viteReactRefresh) {
            await installViteReactRefreshPreamble(entryUrl);
        }
        mountedStyles = await mountMicroAppStyles(app);
        const remoteModule = await import(/* webpackIgnore: true */ entryUrl);
        const fullContext = { ...context, app };
        if (app.runtime.type === 'html-fragment' || app.runtime.type === 'iframe') {
            throw new Error(`${app.name} is a ${app.runtime.type} remote and must be rendered by the shell server/HTML renderer`);
        }
        if (app.runtime.type === 'web-component') {
            const tagName = getMicroAppTagName(app);
            if (!tagName) {
                throw new Error(`No Web Component tag configured for ${app.name}`);
            }
            await customElements.whenDefined(tagName);
            const element = document.createElement(tagName);
            element.setAttribute('data-app-name', app.id);
            element.setAttribute('data-framework', app.framework);
            element.setAttribute('data-shell-origin', fullContext.shellOrigin);
            element.setAttribute('data-version', app.version);
            for (const [name, value] of Object.entries(fullContext.attributes ?? {})) {
                element.setAttribute(name, value);
            }
            container.replaceChildren(element);
            return {
                element,
                unmount: () => {
                    container.replaceChildren();
                    mountedStyles.unmount();
                },
            };
        }
        const mountName = app.runtime.mountFunction ?? app.runtime.exportName ?? 'mount';
        const mount = remoteModule[mountName];
        if (typeof mount !== 'function') {
            throw new Error(`${app.name} must export a ${mountName}(container, context) function`);
        }
        const mounted = await mount(container, fullContext);
        if (typeof mounted === 'function') {
            return {
                unmount: async () => {
                    await mounted();
                    mountedStyles.unmount();
                },
            };
        }
        if (mounted && typeof mounted === 'object' && 'unmount' in mounted) {
            return {
                ...mounted,
                unmount: async () => {
                    await mounted.unmount();
                    mountedStyles.unmount();
                },
            };
        }
        return {
            unmount: () => {
                container.replaceChildren();
                mountedStyles.unmount();
            },
        };
    }
    catch (error) {
        mountedStyles?.unmount();
        await options.onError?.(error, app);
        throw error;
    }
}
const noopMountedStyles = { unmount: () => { } };
const styleRefCounts = new Map();
async function mountMicroAppStyles(app) {
    if (typeof document === 'undefined')
        return { unmount: () => { } };
    const urls = resolveStyleUrls(app);
    if (!urls.length)
        return { unmount: () => { } };
    await Promise.all(urls.map((url) => loadStylesheet(url)));
    return {
        unmount() {
            for (const url of urls) {
                const currentCount = styleRefCounts.get(url) ?? 0;
                if (currentCount > 1) {
                    styleRefCounts.set(url, currentCount - 1);
                    continue;
                }
                styleRefCounts.delete(url);
                document.querySelector(`link[data-micro-app-style="${cssEscape(url)}"]`)?.remove();
            }
        },
    };
}
function resolveStyleUrls(app) {
    const explicitUrls = app.styleUrls ?? [];
    if (explicitUrls.length > 0) {
        return explicitUrls.map((url) => new URL(url, app.entryUrl).toString());
    }
    if (app.dev?.viteReactRefresh || app.runtime.type === 'html-fragment' || app.runtime.type === 'iframe') {
        return [];
    }
    const entryUrl = getMicroAppEntryUrl(app);
    if (!entryUrl.endsWith('.js'))
        return [];
    return [entryUrl.replace(/\.js(\?.*)?$/, '.css$1')];
}
function loadStylesheet(url) {
    const currentCount = styleRefCounts.get(url) ?? 0;
    styleRefCounts.set(url, currentCount + 1);
    const existingLink = document.querySelector(`link[data-micro-app-style="${cssEscape(url)}"]`);
    if (existingLink)
        return Promise.resolve();
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.dataset.microAppStyle = url;
        link.onload = () => resolve();
        link.onerror = () => {
            styleRefCounts.delete(url);
            link.remove();
            reject(new Error(`Unable to load micro app stylesheet ${url}`));
        };
        document.head.appendChild(link);
    });
}
function cssEscape(value) {
    if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
        return CSS.escape(value);
    }
    return value.replace(/"/g, '\\"');
}
async function installViteReactRefreshPreamble(entryUrl) {
    if (typeof window === 'undefined')
        return;
    if (window.__vite_plugin_react_preamble_installed__)
        return;
    const appOrigin = new URL(entryUrl).origin;
    const runtime = (await import(/* webpackIgnore: true */ `${appOrigin}/@react-refresh`));
    runtime.injectIntoGlobalHook(window);
    window.$RefreshReg$ = () => { };
    window.$RefreshSig$ = () => (type) => type;
    window.__vite_plugin_react_preamble_installed__ = true;
}
