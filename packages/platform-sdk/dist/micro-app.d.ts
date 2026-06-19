export type MicroAppStatus = 'Ready' | 'Beta' | 'Preview';
export type MicroAppFramework = 'react' | 'vue' | 'angular' | 'web-component' | 'static' | 'custom';
export type MicroAppRenderingMode = 'rsc' | 'ssr' | 'ssg' | 'isr' | 'csr' | 'static';
export type MicroAppRuntime = {
    type: 'web-component';
    tagName: string;
} | {
    type: 'module';
    exportName?: string;
    mountFunction?: string;
} | {
    type: 'html-fragment';
    url: string;
    cache?: 'no-store' | 'force-cache';
    revalidate?: number;
} | {
    type: 'iframe';
    url: string;
    title?: string;
};
export interface MicroAppMcpCapability {
    enabled: boolean;
    protocolVersion?: string;
    manifestUrl?: string;
    tools?: string[];
    resources?: string[];
    prompts?: string[];
    eventNamespaces?: string[];
}
export interface MicroAppCapabilities {
    aiNative?: boolean;
    mcpApps?: MicroAppMcpCapability;
    eventBus?: {
        channels: string[];
    };
    observability?: {
        errorEndpoint?: string;
        logLevel?: 'debug' | 'info' | 'warn' | 'error';
    };
}
export interface MicroAppConfig {
    id: string;
    name: string;
    description: string;
    domain: string;
    icon: string;
    accent: string;
    status: MicroAppStatus;
    framework: MicroAppFramework;
    rendering: MicroAppRenderingMode[];
    entryUrl: string;
    manifestUrl: string;
    runtime: MicroAppRuntime;
    styleUrls?: string[];
    version: string;
    owner: string;
    permissions: string[];
    capabilities?: MicroAppCapabilities;
    dev?: {
        viteReactRefresh?: boolean;
    };
    url?: string;
    componentTag?: string;
}
export interface MicroAppContext {
    app: MicroAppConfig;
    shellOrigin: string;
    attributes?: Record<string, string>;
}
export interface MountedMicroApp {
    element?: HTMLElement;
    unmount: () => void | Promise<void>;
}
export interface MicroAppLoadOptions {
    onError?: (error: unknown, app: MicroAppConfig) => void | Promise<void>;
}
export type MicroAppMountFunction = (container: HTMLElement, context: MicroAppContext) => void | (() => void | Promise<void>) | MountedMicroApp | Promise<void | (() => void | Promise<void>) | MountedMicroApp>;
declare global {
    interface Window {
        $RefreshReg$?: () => void;
        $RefreshSig$?: () => (type: unknown) => unknown;
        __vite_plugin_react_preamble_installed__?: boolean;
    }
}
export declare function getMicroAppEntryUrl(app: MicroAppConfig): string;
export declare function getMicroAppTagName(app: MicroAppConfig): string | undefined;
export declare function mountMicroApp(app: MicroAppConfig, container: HTMLElement, context?: Omit<MicroAppContext, 'app'>, options?: MicroAppLoadOptions): Promise<MountedMicroApp>;
//# sourceMappingURL=micro-app.d.ts.map