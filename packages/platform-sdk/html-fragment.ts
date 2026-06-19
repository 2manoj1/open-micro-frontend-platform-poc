import type { MicroAppConfig } from './micro-app.js';

export interface HtmlFragmentResult {
  html: string;
  sourceUrl: string;
}

export interface HtmlFragmentFetchOptions {
  baseUrl?: string;
}

type FragmentRequestInit = RequestInit & {
  next?: {
    revalidate?: number;
  };
};

export async function fetchMicroAppHtmlFragment(
  app: MicroAppConfig,
  options: HtmlFragmentFetchOptions = {}
): Promise<HtmlFragmentResult> {
  if (app.runtime.type !== 'html-fragment') {
    throw new Error(`${app.name} is not configured as an html-fragment micro app`);
  }

  const sourceUrl = resolveFragmentUrl(app.runtime.url, options.baseUrl);
  const init: FragmentRequestInit = {
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

function resolveFragmentUrl(url: string, baseUrl?: string): string {
  if (/^https?:\/\//.test(url)) return url;
  if (!baseUrl) return url;
  return new URL(url, baseUrl).toString();
}
