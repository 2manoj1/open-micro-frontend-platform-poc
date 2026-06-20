'use client';

import { createElement, useEffect, useId, useState, type ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';
import type { MicroAppConfig } from '@openmf/core';
import { getDesignSystemComponentTag } from '@micro-frontend/design-system';

interface RuntimeDesignSystemChromeProps {
  designSystemApp: MicroAppConfig;
  shellName: string;
  active?: string;
  children: ReactNode;
}

const loadedStyleUrls = new Set<string>();

export function RuntimeDesignSystemChrome({
  designSystemApp,
  shellName,
  active = 'composition',
  children,
}: RuntimeDesignSystemChromeProps) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const headingId = useId();

  useEffect(() => {
    let cancelled = false;

    async function loadChrome() {
      try {
        setError(null);
        await Promise.all((designSystemApp.styleUrls ?? []).map(loadStylesheet));
        await import(/* webpackIgnore: true */ designSystemApp.entryUrl);
        if (!cancelled) setReady(true);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unable to load runtime design system shell chrome');
          setReady(false);
        }
      }
    }

    void loadChrome();

    return () => {
      cancelled = true;
    };
  }, [designSystemApp.entryUrl, designSystemApp.styleUrls]);

  return (
    <section aria-labelledby={headingId} className="space-y-5">
      <h1 id={headingId} className="sr-only">
        Runtime composition shell
      </h1>

      {error ? (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
          <div className="flex items-center gap-2 font-semibold">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            Design system chrome fallback
          </div>
          <p className="mt-1">{error}</p>
        </div>
      ) : ready ? (
        <>
          {createRuntimeElement(getDesignSystemComponentTag('header'), {
            'shell-name': shellName,
            active,
          })}
          {children}
          {createRuntimeElement(getDesignSystemComponentTag('footer'), {
            'shell-name': shellName,
          })}
        </>
      ) : (
        <div className="rounded-md border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          <div className="font-semibold text-slate-900 dark:text-white">Loading runtime design system</div>
          <p className="mt-1">Fetching shared header, footer, tokens, and component contracts from the design-system remote.</p>
        </div>
      )}
    </section>
  );
}

function createRuntimeElement(tagName: string, attributes: Record<string, string>) {
  return createElement(tagName, attributes);
}

function loadStylesheet(url: string): Promise<void> {
  if (loadedStyleUrls.has(url)) return Promise.resolve();

  const existingLink = document.querySelector<HTMLLinkElement>(`link[data-runtime-design-system-style="${cssEscape(url)}"]`);
  if (existingLink) {
    loadedStyleUrls.add(url);
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.dataset.runtimeDesignSystemStyle = url;
    link.onload = () => {
      loadedStyleUrls.add(url);
      resolve();
    };
    link.onerror = () => {
      link.remove();
      reject(new Error(`Unable to load design system stylesheet ${url}`));
    };
    document.head.appendChild(link);
  });
}

function cssEscape(value: string): string {
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
    return CSS.escape(value);
  }

  return value.replace(/"/g, '\\"');
}
