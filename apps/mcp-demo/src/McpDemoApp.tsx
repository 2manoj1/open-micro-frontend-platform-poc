import { useEffect, useRef, useState } from 'react';
import {
  callMcpHostTool,
  connectOfficialMcpAppRuntime,
  emitMcpAppEvent,
  initializeMcpAppBridge,
  type OfficialMcpAppRuntime,
} from '@openmf/core/client';

type DemoPhase = 'idle' | 'running' | 'done' | 'error';
type RuntimePath = 'mcp-host-model' | 'mcp-host-tool' | 'host-message' | 'server-api' | 'local-demo';
type TraceStatus = 'waiting' | 'running' | 'done' | 'error';

interface TraceEntry {
  id: string;
  channel: string;
  title: string;
  detail: string;
  status: TraceStatus;
}

interface DemoResult {
  headline: string;
  summary: string;
  runtime: RuntimePath;
  actions: Array<{ app: string; action: string; owner: string }>;
}

interface McpDemoApiResponse {
  headline?: string;
  summary?: string;
  actions?: Array<{ app: string; action: string; owner: string }>;
  runtime?: RuntimePath;
}

declare global {
  interface Window {
    __MICRO_APP_CONTEXT__?: {
      shellOrigin?: string;
      resourceOrigin?: string;
    };
  }
}

const demoContext = [
  'User clicked Run Native AI Flow in the MCP Apps SDK Demo.',
  'Visible platform context: billing conversion is down 2%, billing-autopay is disabled, one enterprise invoice is overdue, and two accounts are at renewal risk.',
  'Return a generated UI state with a headline, concise summary, and three cross-app actions.',
].join(' ');

const initialTrace: TraceEntry[] = [
  {
    id: 'ready',
    channel: 'ui/ready',
    title: 'Widget registered',
    detail: 'The micro app announced tools, resources, prompts, and event namespaces to the host.',
    status: 'done',
  },
  {
    id: 'waiting',
    channel: 'operator/click',
    title: 'Waiting for operator',
    detail: 'Click the run button to start native AI orchestration.',
    status: 'waiting',
  },
];

const fallbackResult: DemoResult = {
  headline: 'Autopay recovery workflow generated',
  summary:
    'The dip is most likely caused by billing-autopay being disabled for the affected cohort, with enterprise invoice friction adding risk.',
  runtime: 'local-demo',
  actions: [
    { app: 'Admin', action: 'Enable billing-autopay for a guarded 25% rollout.', owner: 'Platform Admin' },
    { app: 'Billing', action: 'Retry or review the overdue enterprise invoice.', owner: 'Revenue Ops' },
    { app: 'Analytics', action: 'Monitor checkout recovery and payment failures for 24 hours.', owner: 'Data Platform' },
  ],
};

export function McpDemoApp({ apiBaseUrl }: { apiBaseUrl?: string } = {}) {
  const [phase, setPhase] = useState<DemoPhase>('idle');
  const [hostStatus, setHostStatus] = useState<'checking' | 'connected' | 'standalone' | 'unavailable'>('checking');
  const [trace, setTrace] = useState<TraceEntry[]>(initialTrace);
  const [result, setResult] = useState<DemoResult>();
  const runtimeRef = useRef<OfficialMcpAppRuntime>();
  const phaseRef = useRef(phase);
  const resultRef = useRef(result);

  useEffect(() => {
    phaseRef.current = phase;
    resultRef.current = result;
  }, [phase, result]);

  useEffect(() => {
    const bridge = initializeMcpAppBridge({ source: 'mcp-demo' });
    bridge.notify('ui/ready', {
      appId: 'mcp-demo',
      tools: ['mcpDemo.runNativeFlow', 'mcpDemo.showTrace', 'mcpDemo.generateUiState'],
      resources: ['platform.signal', 'sdk.trace', 'generated.ui'],
    });

    return () => bridge.dispose();
  }, []);

  useEffect(() => {
    let disposed = false;

    connectOfficialMcpAppRuntime({
      name: 'MCP Apps SDK Demo',
      version: '0.1.0',
      capabilities: {
        sampling: {},
        serverTools: {},
        modelContext: {},
      },
      handlers: {
        onToolInput() {
          appendTrace('host-tool-input', 'tools/input', 'Host provided tool input', 'A host started streaming tool input into the widget.', 'running');
        },
        onToolInputPartial() {
          appendTrace('host-tool-input-partial', 'tools/inputPartial', 'Partial tool input received', 'The widget received incremental host input.', 'running');
        },
        onToolResult(value) {
          const text = readText(value);
          appendTrace('host-tool-result', 'tools/result', 'Host returned tool result', text || 'Tool result received from host.', 'done');
        },
        onHostContextChanged() {
          appendTrace('host-context-changed', 'host/context', 'Host context changed', 'The AI host shared updated conversation or runtime context.', 'done');
        },
        onTeardown() {
          return {
            appId: 'mcp-demo',
            phase: phaseRef.current,
            resultHeadline: resultRef.current?.headline ?? null,
          };
        },
      },
    }).then((runtime) => {
      if (disposed) {
        void runtime.dispose();
        return;
      }

      runtimeRef.current = runtime;
      setHostStatus(runtime.status === 'connected' ? 'connected' : runtime.status === 'standalone' ? 'standalone' : 'unavailable');
    });

    return () => {
      disposed = true;
      void runtimeRef.current?.dispose();
    };
  }, []);

  async function runDemo() {
    setPhase('running');
    setResult(undefined);
    setTrace([
      initialTrace[0],
      createTrace('click', 'operator/click', 'Run button clicked', 'The UI started the native AI workflow.', 'done'),
      createTrace('model-context', 'modelContext/update', 'Sharing platform context', 'Sending cross-app signals to the host model context.', 'running'),
    ]);

    emitMcpAppEvent('MCP_TOOL_CALL_REQUESTED', 'mcp-demo', {
      tool: 'mcpDemo.runNativeFlow',
      context: 'billing-conversion-dip',
    });

    const runtime = runtimeRef.current;

    if (runtime?.status === 'connected') {
      try {
        await runtime.updateModelContext(demoContext);
        completeTrace('model-context', 'Shared platform context with the MCP Apps host.');
        appendTrace('sampling', 'sampling/createMessage', 'Requesting host LLM', 'Asking the host model to generate the next UI state.', 'running');

        const text = await runtime.requestHostCompletion(
          [
            'You are driving an MCP Apps SDK demo.',
            'Generate a concise operational result for the clicked widget.',
            demoContext,
          ].join('\n'),
          'Return concise UI copy for an operations workflow. No markdown table.'
        );

        const hostResult = buildResultFromText(text, 'mcp-host-model');
        completeTrace('sampling', 'Host LLM returned generated UI copy.');
        await runServerToolTrace(runtime);
        finish(hostResult);
        return;
      } catch (error) {
        markTraceError('sampling', error);
        appendTrace(
          'host-message-skipped',
          'ui/message',
          'Conversation handoff skipped',
          'The widget avoided sending a follow-up prompt back into the host conversation to prevent recursive tool invocation.',
          'done'
        );
      }
    } else {
      markTraceError('model-context', 'No MCP Apps host model is connected in this surface.');
    }

    const bridgeResult = await runLegacyBridgeTool();
    if (bridgeResult) {
      finish(bridgeResult);
      return;
    }

    const apiResult = await callServerDemo(apiBaseUrl);
    if (apiResult) {
      finish(apiResult);
      return;
    }

    appendTrace('local-fallback', 'demo/local', 'Local demo fallback', 'The widget generated the same UI locally so shell and standalone demos still complete.', 'done');
    finish(fallbackResult);
  }

  async function runServerToolTrace(runtime: OfficialMcpAppRuntime) {
    appendTrace('server-tool', 'tools/call', 'Calling MCP server tool', 'Requesting mcpDemo.generateUiState through the host tool bridge.', 'running');

    try {
      await runtime.callServerTool('mcpDemo_generateUiState', {
        scenario: 'billing-conversion-dip',
      });
      completeTrace('server-tool', 'Server tool completed and returned a portable resource/tool result.');
    } catch (error) {
      markTraceError('server-tool', error);
    }
  }

  async function runLegacyBridgeTool(): Promise<DemoResult | undefined> {
    appendTrace('postmessage-tool', 'postMessage/tools.call', 'Trying shell MCP bridge', 'Using the platform SDK bridge when no official MCP host is present.', 'running');

    try {
      await callMcpHostTool('mcpDemo_generateUiState', {
        scenario: 'billing-conversion-dip',
      });
      completeTrace('postmessage-tool', 'Shell bridge accepted the tool request.');
      return { ...fallbackResult, runtime: 'mcp-host-tool' };
    } catch (error) {
      markTraceError('postmessage-tool', error);
      return undefined;
    }
  }

  async function callServerDemo(configuredApiBaseUrl?: string): Promise<DemoResult | undefined> {
    appendTrace('server-api', 'fetch/api', 'Calling portable API fallback', 'Using the same endpoint shape from shell or MCP server resource mode.', 'running');

    try {
      const endpoint = new URL('/api/mcp-demo/run', resolveApiBase(configuredApiBaseUrl)).toString();
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ scenario: 'billing-conversion-dip' }),
      });

      if (!response.ok) throw new Error(`API returned ${response.status}`);
      const payload = (await response.json()) as McpDemoApiResponse;
      completeTrace('server-api', 'Portable API returned generated UI state.');
      return {
        headline: payload.headline ?? fallbackResult.headline,
        summary: payload.summary ?? fallbackResult.summary,
        actions: payload.actions?.length ? payload.actions : fallbackResult.actions,
        runtime: payload.runtime ?? 'server-api',
      };
    } catch (error) {
      markTraceError('server-api', error);
      return undefined;
    }
  }

  function finish(nextResult: DemoResult) {
    setResult(nextResult);
    setPhase('done');
    appendTrace('ui-result', 'ui/render', 'Generated UI rendered', 'The widget switched from orchestration mode to the generated action UI.', 'done');
    emitMcpAppEvent('MCP_TOOL_CALL_COMPLETED', 'mcp-demo', {
      tool: 'mcpDemo.runNativeFlow',
      runtime: nextResult.runtime,
      actions: nextResult.actions.map((action) => action.app),
    });
  }

  function resetDemo() {
    setPhase('idle');
    setResult(undefined);
    setTrace(initialTrace);
  }

  function appendTrace(id: string, channel: string, title: string, detail: string, status: TraceStatus) {
    setTrace((current) => [...current, createTrace(id, channel, title, detail, status)]);
  }

  function completeTrace(id: string, detail: string) {
    setTrace((current) =>
      current.map((entry) => (entry.id === id ? { ...entry, detail, status: 'done' } : entry))
    );
  }

  function markTraceError(id: string, error: unknown) {
    setTrace((current) =>
      current.map((entry) =>
        entry.id === id
          ? {
              ...entry,
              detail: error instanceof Error ? error.message : String(error),
              status: 'error',
            }
          : entry
      )
    );
  }

  return (
    <section className="mcp-demo-shell">
      <header className="mcp-demo-hero">
        <div>
          <span>MCP Apps SDK</span>
          <h1>Native AI Flow Demo</h1>
          <p>Click once to trigger host AI, tool calls, model context, event bus updates, and generated UI rendering.</p>
        </div>
        <div className={`host-pill ${hostStatus}`}>
          <span>Host</span>
          <strong>{formatHostStatus(hostStatus)}</strong>
        </div>
      </header>

      <div className="demo-grid">
        <section className="run-panel" aria-label="Interactive MCP demo trigger">
          <div className="run-copy">
            <span>Scenario</span>
            <h2>Billing conversion dip</h2>
            <p>
              The widget will share context with the host model, request a generated UI state, call an MCP server tool,
              and render the result inside this micro app.
            </p>
          </div>

          <button className="run-button" type="button" onClick={runDemo} disabled={phase === 'running'}>
            {phase === 'running' ? 'Running native AI flow' : phase === 'done' ? 'Run again' : 'Run Native AI Flow'}
          </button>

          <div className="contract-list" aria-label="SDK capabilities used">
            <span>ui/ready</span>
            <span>modelContext/update</span>
            <span>sampling/createMessage</span>
            <span>tools/call</span>
            <span>ui/render</span>
          </div>
        </section>

        <section className={`result-panel ${phase === 'done' ? 'visible' : ''}`} aria-label="Generated result UI">
          {result ? (
            <>
              <span className="runtime-label">{formatRuntime(result.runtime)}</span>
              <h2>{result.headline}</h2>
              <p>{result.summary}</p>
              <div className="action-stack">
                {result.actions.map((action) => (
                  <article key={`${action.app}-${action.action}`}>
                    <span>{action.app}</span>
                    <strong>{action.action}</strong>
                    <small>{action.owner}</small>
                  </article>
                ))}
              </div>
              <button className="reset-button" type="button" onClick={resetDemo}>
                Reset trace
              </button>
            </>
          ) : (
            <>
              <span className="runtime-label">Generated UI</span>
              <h2>Result appears here</h2>
              <p>The panel changes after native AI orchestration completes.</p>
            </>
          )}
        </section>
      </div>

      <section className="trace-panel" aria-label="Full MCP communication trace">
        <div className="trace-heading">
          <span>Full communication trace</span>
          <strong>{trace.filter((entry) => entry.status === 'done').length}/{trace.length} complete</strong>
        </div>
        <ol>
          {trace.map((entry) => (
            <li className={entry.status} key={`${entry.id}-${entry.channel}`}>
              <code>{entry.channel}</code>
              <div>
                <strong>{entry.title}</strong>
                <p>{entry.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}

function createTrace(id: string, channel: string, title: string, detail: string, status: TraceStatus): TraceEntry {
  return { id, channel, title, detail, status };
}

function resolveApiBase(configuredApiBaseUrl?: string): string {
  return (
    configuredApiBaseUrl ??
    window.__MICRO_APP_CONTEXT__?.resourceOrigin ??
    window.__MICRO_APP_CONTEXT__?.shellOrigin ??
    window.location.origin
  );
}

function buildResultFromText(text: string, runtime: RuntimePath): DemoResult {
  const cleanText = text.trim();
  if (!cleanText) return { ...fallbackResult, runtime };

  return {
    ...fallbackResult,
    headline: cleanText.split('\n').find(Boolean)?.replace(/^#+\s*/, '') ?? fallbackResult.headline,
    summary: cleanText,
    runtime,
  };
}

function readText(value: unknown): string | undefined {
  if (!value) return undefined;
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(readText).filter(Boolean).join('\n') || undefined;
  if (typeof value !== 'object') return undefined;

  const record = value as Record<string, unknown>;
  if (typeof record.text === 'string') return record.text;
  if (Array.isArray(record.content)) return readText(record.content);
  if (typeof record.structuredContent === 'object') return readText(record.structuredContent);
  if (typeof record.result === 'string') return record.result;
  return undefined;
}

function formatHostStatus(status: 'checking' | 'connected' | 'standalone' | 'unavailable'): string {
  const labels = {
    checking: 'Checking',
    connected: 'Connected',
    standalone: 'Standalone shell',
    unavailable: 'Fallback ready',
  };

  return labels[status];
}

function formatRuntime(runtime: RuntimePath): string {
  const labels: Record<RuntimePath, string> = {
    'mcp-host-model': 'MCP host model',
    'mcp-host-tool': 'MCP host tool',
    'host-message': 'Host conversation',
    'server-api': 'Portable API',
    'local-demo': 'Local demo',
  };

  return labels[runtime];
}
