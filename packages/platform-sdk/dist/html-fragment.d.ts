import type { MicroAppConfig } from './micro-app.js';
export interface HtmlFragmentResult {
    html: string;
    sourceUrl: string;
}
export interface HtmlFragmentFetchOptions {
    baseUrl?: string;
}
export declare function fetchMicroAppHtmlFragment(app: MicroAppConfig, options?: HtmlFragmentFetchOptions): Promise<HtmlFragmentResult>;
//# sourceMappingURL=html-fragment.d.ts.map