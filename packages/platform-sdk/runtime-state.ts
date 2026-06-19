import type { MicroAppConfig } from './micro-app.js';

export type MicroAppRuntimePhase =
  | 'idle'
  | 'resolving'
  | 'loading-assets'
  | 'mounting'
  | 'ready'
  | 'empty'
  | 'error'
  | 'unmounted';

export interface MicroAppRuntimeState {
  phase: MicroAppRuntimePhase;
  appId: string;
  label: string;
  detail: string;
  timestamp: number;
  error?: unknown;
}

export interface MicroAppReadyOptions {
  timeoutMs?: number;
  signal?: AbortSignal;
}

export function createMicroAppRuntimeState(
  app: MicroAppConfig,
  phase: MicroAppRuntimePhase,
  detail?: string,
  error?: unknown
): MicroAppRuntimeState {
  return {
    phase,
    appId: app.id,
    label: getMicroAppRuntimeLabel(app, phase),
    detail: detail ?? getMicroAppRuntimeDetail(app, phase),
    timestamp: Date.now(),
    error,
  };
}

export function getMicroAppRuntimeLabel(app: MicroAppConfig, phase: MicroAppRuntimePhase): string {
  const labels: Record<MicroAppRuntimePhase, string> = {
    idle: `${app.name} waiting`,
    resolving: `Resolving ${app.name}`,
    'loading-assets': `Loading ${app.name} assets`,
    mounting: `Mounting ${app.name}`,
    ready: `${app.name} ready`,
    empty: `${app.name} returned no content`,
    error: `${app.name} failed`,
    unmounted: `${app.name} unmounted`,
  };

  return labels[phase];
}

export function getMicroAppRuntimeDetail(app: MicroAppConfig, phase: MicroAppRuntimePhase): string {
  const runtime = app.runtime.type;
  const details: Record<MicroAppRuntimePhase, string> = {
    idle: 'The shell has not started loading this micro app yet.',
    resolving: `Resolving ${runtime} runtime metadata from the app registry.`,
    'loading-assets': `Loading runtime JavaScript and CSS for ${runtime} delivery.`,
    mounting: `Creating the isolated ${runtime} surface and passing shell context.`,
    ready: 'The micro app has mounted and completed the first render pass.',
    empty: 'The micro app loaded successfully but did not provide visible content.',
    error: 'The shell captured a runtime failure and rendered a fallback instead of a blank screen.',
    unmounted: 'The micro app surface was cleaned up by the shell.',
  };

  return details[phase];
}

export function isMicroAppRuntimeBusy(state: MicroAppRuntimeState): boolean {
  return state.phase === 'resolving' || state.phase === 'loading-assets' || state.phase === 'mounting';
}

export function isMicroAppRuntimeTerminal(state: MicroAppRuntimeState): boolean {
  return state.phase === 'ready' || state.phase === 'empty' || state.phase === 'error' || state.phase === 'unmounted';
}

export async function waitForMicroAppReady(container: HTMLElement, options: MicroAppReadyOptions = {}): Promise<void> {
  const timeoutMs = options.timeoutMs ?? 4_000;

  if (hasRenderableContent(container)) {
    await nextPaint();
    return;
  }

  await new Promise<void>((resolve, reject) => {
    let resolved = false;
    const cleanup = () => {
      observer.disconnect();
      window.clearInterval(interval);
      window.clearTimeout(timeout);
      options.signal?.removeEventListener('abort', abort);
      container.removeEventListener('micro-app:ready', ready);
    };
    const finish = () => {
      if (resolved) return;
      resolved = true;
      cleanup();
      resolve();
    };
    const fail = (error: Error) => {
      if (resolved) return;
      resolved = true;
      cleanup();
      reject(error);
    };
    const abort = () => fail(new Error('Micro app ready wait aborted'));
    const ready = () => finish();
    const observer = new MutationObserver(() => {
      if (hasRenderableContent(container)) finish();
    });
    const interval = window.setInterval(() => {
      if (hasRenderableContent(container)) finish();
    }, 100);
    const timeout = window.setTimeout(() => {
      if (hasRenderableContent(container)) {
        finish();
        return;
      }
      fail(new Error('Micro app mounted but did not render visible content before timeout'));
    }, timeoutMs);

    options.signal?.addEventListener('abort', abort, { once: true });
    container.addEventListener('micro-app:ready', ready, { once: true });
    observer.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    if (hasRenderableContent(container)) finish();
  });

  await nextPaint();
}

function hasRenderableContent(container: HTMLElement): boolean {
  if (hasMeaningfulText(container)) return true;

  for (const element of Array.from(container.querySelectorAll<HTMLElement>('*'))) {
    if (isElementVisible(element) && (hasMeaningfulText(element) || hasShadowRenderableContent(element))) {
      return true;
    }
  }

  return false;
}

function hasMeaningfulText(element: HTMLElement): boolean {
  return Boolean(element.textContent?.replace(/\s+/g, ' ').trim());
}

function hasShadowRenderableContent(element: HTMLElement): boolean {
  const shadowRoot = element.shadowRoot;
  if (!shadowRoot) return false;

  const shadowText = shadowRoot.textContent?.replace(/\s+/g, ' ').trim();
  if (shadowText) return true;

  return Array.from(shadowRoot.querySelectorAll<HTMLElement>('*')).some(isElementVisible);
}

function isElementVisible(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;

  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

function nextPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}
