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
      window.clearTimeout(timeout);
      options.signal?.removeEventListener('abort', abort);
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
    const observer = new MutationObserver(() => {
      if (hasRenderableContent(container)) finish();
    });
    const timeout = window.setTimeout(() => {
      if (hasRenderableContent(container)) {
        finish();
        return;
      }
      fail(new Error('Micro app mounted but did not render visible content before timeout'));
    }, timeoutMs);

    options.signal?.addEventListener('abort', abort, { once: true });
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
  if (container.children.length > 0) return true;
  return Boolean(container.textContent?.trim());
}

function nextPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}
