import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  callMcpHostTool,
  connectOfficialMcpAppRuntime,
  emitMcpAppEvent,
  initializeMcpAppBridge,
  isWebMcpAvailable,
  type OfficialMcpAppRuntime,
  registerWebMcpTool,
} from '@openmf/core/client';

interface Message {
  role: 'assistant' | 'user';
  text: string;
  runtime?: AssistantRuntime;
}

type BuiltInAiStatus = 'checking' | 'available' | 'downloadable' | 'downloading' | 'unavailable' | 'unsupported';
type HostAiStatus = 'checking' | 'connected' | 'standalone' | 'unavailable';
type OpenAiHostStatus = 'checking' | 'connected' | 'unavailable';
type ApiChatStatus = 'idle' | 'available' | 'unavailable';
type OpenAiGlobalsEvent = Event & { detail?: { openai?: OpenAiWidgetBridge } };
type AssistantRuntime =
  | 'ai-native-mcp-tool'
  | 'ai-native-host-model'
  | 'ai-native-host-message'
  | 'chrome-built-in-ai'
  | 'server-api-chat'
  | 'deterministic-fallback';

interface AssistantResponse {
  text: string;
  runtime: AssistantRuntime;
  provider?: string;
}

interface PlatformSignal {
  app: string;
  label: string;
  value: string;
  severity: 'high' | 'medium' | 'low';
  detail: string;
}

interface InvestigationStep {
  app: string;
  action: string;
  status: 'done' | 'next' | 'watch';
}

interface ChromeLanguageModelSession {
  prompt: (input: string) => Promise<string>;
  destroy?: () => void;
}

interface ChromeLanguageModel {
  availability: (options?: { languages?: string[] }) => Promise<BuiltInAiStatus>;
  create: (options?: { signal?: AbortSignal }) => Promise<ChromeLanguageModelSession>;
}

interface OpenAiWidgetBridge {
  sendFollowUpMessage?: (params: { prompt: string; scrollToBottom?: boolean }) => Promise<unknown>;
  setWidgetState?: (state: Record<string, unknown>) => void;
}

declare global {
  interface Window {
    LanguageModel?: ChromeLanguageModel;
    openai?: OpenAiWidgetBridge;
    __MICRO_APP_CONTEXT__?: {
      shellOrigin?: string;
      resourceOrigin?: string;
    };
  }
}

const platformSignals: PlatformSignal[] = [
  {
    app: 'Analytics',
    label: 'Checkout conversion',
    value: '-2.0%',
    severity: 'high',
    detail: 'Dip isolated to billing checkout and enterprise renewal cohorts.',
  },
  {
    app: 'Admin',
    label: 'billing-autopay',
    value: 'Disabled',
    severity: 'high',
    detail: 'Feature flag was turned off for the same tenant group seeing the dip.',
  },
  {
    app: 'Billing',
    label: 'Enterprise invoices',
    value: '1 overdue',
    severity: 'medium',
    detail: 'One strategic account has payment friction and needs owner follow-up.',
  },
  {
    app: 'Customer',
    label: 'Renewal risk',
    value: '2 accounts',
    severity: 'medium',
    detail: 'Customer health is softening for affected enterprise accounts.',
  },
];

const workflowSteps: InvestigationStep[] = [
  {
    app: 'Analytics',
    action: 'Confirm the dip is concentrated in billing checkout, not top-of-funnel traffic.',
    status: 'done',
  },
  {
    app: 'Admin',
    action: 'Re-enable billing-autopay behind a guarded 25% rollout.',
    status: 'next',
  },
  {
    app: 'Billing',
    action: 'Retry or manually review the overdue enterprise invoice.',
    status: 'next',
  },
  {
    app: 'Customer',
    action: 'Notify owners for the two renewal-risk accounts and monitor 24-hour recovery.',
    status: 'watch',
  },
];

const platformContext = platformSignals
  .map((signal) => `${signal.app}: ${signal.label} is ${signal.value} (${signal.detail})`)
  .join(' ');

const fallbackAnalysis = [
  'Billing conversion dipped because Analytics shows a 2% checkout conversion drop in the billing path while Admin has billing-autopay disabled for the affected tenant group.',
  'Billing adds one overdue enterprise invoice, and Customer adds two renewal-risk accounts, so the main cause is likely autopay friction with some enterprise payment follow-through risk.',
  'Recommended action: re-enable billing-autopay through a guarded 25% rollout, retry or review the overdue invoice, notify account owners, and monitor checkout recovery for 24 hours.',
].join(' ');

const demoPrompts = [
  'Why did billing conversion dip?',
  'Create a cross-app recovery plan',
  'What should I check before re-enabling autopay?',
];

export function AiAssistantApp({ apiBaseUrl }: { apiBaseUrl?: string } = {}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'I am watching Analytics, Billing, Admin, and Customer signals together. Ask about the conversion dip or run the recovery plan.',
    },
  ]);
  const [draft, setDraft] = useState('Why did billing conversion dip?');
  const [builtInAiStatus, setBuiltInAiStatus] = useState<BuiltInAiStatus>('checking');
  const [hostAiStatus, setHostAiStatus] = useState<HostAiStatus>('checking');
  const [openAiHostStatus, setOpenAiHostStatus] = useState<OpenAiHostStatus>('checking');
  const [apiChatStatus, setApiChatStatus] = useState<ApiChatStatus>('idle');
  const [lastRuntime, setLastRuntime] = useState<AssistantRuntime>('deterministic-fallback');
  const [webMcpSupported, setWebMcpSupported] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const officialMcpRuntimeRef = useRef<OfficialMcpAppRuntime>();
  const lastRuntimeRef = useRef(lastRuntime);

  useEffect(() => {
    lastRuntimeRef.current = lastRuntime;
  }, [lastRuntime]);

  useEffect(() => {
    const bridge = initializeMcpAppBridge({ source: 'ai-assistant' });
    bridge.notify('ui/ready', {
      appId: 'ai-assistant',
      tools: ['assistant.summarizeCase', 'assistant.planWorkflow', 'assistant.invokeTool'],
    });

    return () => bridge.dispose();
  }, []);

  useEffect(() => {
    let disposed = false;
    const syncStatus = () => {
      if (disposed) return;
      setOpenAiHostStatus(window.openai?.sendFollowUpMessage ? 'connected' : 'unavailable');
    };
    const interval = window.setInterval(syncStatus, 250);

    window.addEventListener('openai:set_globals', syncStatus);
    syncStatus();

    return () => {
      disposed = true;
      window.clearInterval(interval);
      window.removeEventListener('openai:set_globals', syncStatus);
    };
  }, []);

  useEffect(() => {
    let disposed = false;

    connectOfficialMcpAppRuntime({
      name: 'AI Assistant App',
      version: '0.8.0',
      capabilities: {
        sampling: {},
        serverTools: {},
        modelContext: {},
      },
      handlers: {
        onToolInput() {
          if (!disposed) setHostAiStatus('connected');
        },
        onToolInputPartial() {
          if (!disposed) setHostAiStatus('connected');
        },
        onToolResult(result) {
          if (disposed) return;
          setHostAiStatus('connected');
          const text = readToolText(result);
          if (!text || text.includes('ready as an MCP App')) return;
          setLastRuntime('ai-native-mcp-tool');
          setMessages((current) => [
            ...current,
            {
              role: 'assistant',
              text: withRuntimeLabel('AI Native MCP tool', text),
              runtime: 'ai-native-mcp-tool',
            },
          ]);
        },
        onToolCancelled() {
          if (!disposed) setHostAiStatus('unavailable');
        },
        onHostContextChanged() {
          if (!disposed) setHostAiStatus('connected');
        },
        onTeardown() {
          emitMcpAppEvent('MCP_RESOURCE_REQUESTED', 'ai-assistant', {
            lifecycle: 'teardown',
            runtime: 'mcp-apps',
          });
          return {
            appId: 'ai-assistant',
            latestRuntime: lastRuntimeRef.current,
          };
        },
      },
    }).then((runtime) => {
      if (disposed) {
        void runtime.dispose();
        return;
      }

      officialMcpRuntimeRef.current = runtime;
      setHostAiStatus(runtime.status === 'connected' ? 'connected' : runtime.status === 'standalone' ? 'standalone' : 'unavailable');
    });

    return () => {
      disposed = true;
      void officialMcpRuntimeRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    const languageModel = window.LanguageModel;
    if (!languageModel) {
      setBuiltInAiStatus('unsupported');
      return;
    }

    languageModel
      .availability({ languages: ['en'] })
      .then(setBuiltInAiStatus)
      .catch(() => setBuiltInAiStatus('unavailable'));
  }, []);

  useEffect(() => {
    const summaryTool = registerWebMcpTool<{
      question?: string;
    }>({
      name: 'assistant_summarize_platform_health',
      description:
        'Summarize the currently visible Open Micro Platform dashboard health signals and suggest the next action.',
      inputSchema: {
        type: 'object',
        properties: {
          question: {
            type: 'string',
            description: 'The user question or investigation goal from the browser agent.',
          },
        },
      },
      execute: async ({ question }) => ({
        source: 'ai-assistant',
        question: question ?? 'Summarize platform health',
        summary: fallbackAnalysis,
        resources: ['billing.invoice', 'analytics.funnel', 'admin.tenant'],
      }),
      readOnlyHint: true,
    });

    const toolCallTool = registerWebMcpTool<{
      tool?: string;
    }>({
      name: 'assistant_list_mcp_capabilities',
      description: 'List the MCP Apps capabilities exposed by the AI Assistant micro app.',
      inputSchema: {
        type: 'object',
        properties: {
          tool: {
            type: 'string',
            description: 'Optional capability name to inspect.',
          },
        },
      },
      execute: async ({ tool }) => ({
        selected: tool ?? null,
        tools: ['assistant.summarizeCase', 'assistant.planWorkflow', 'assistant.invokeTool'],
        resources: ['knowledge.article', 'customer.profile', 'billing.invoice'],
        prompts: ['support-triage', 'release-risk-review'],
      }),
      readOnlyHint: true,
    });

    setWebMcpSupported(summaryTool.supported || toolCallTool.supported || isWebMcpAvailable());

    return () => {
      summaryTool.unregister();
      toolCallTool.unregister();
    };
  }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    const prompt = draft.trim();
    if (!prompt) return;
    setIsThinking(true);

    emitMcpAppEvent('MCP_TOOL_CALL_REQUESTED', 'ai-assistant', {
      tool: 'assistant.summarizeCase',
      prompt,
    });
    void callMcpHostTool('assistant_summarizeCase', { prompt }).catch(() => undefined);
    const openAiBridge = window.openai;
    openAiBridge?.setWidgetState?.({
      lastPrompt: prompt,
      lastAction: 'assistant_summarizeCase',
      updatedAt: new Date().toISOString(),
    });

    try {
      const assistantResponse = await generateAssistantResponse(prompt, apiBaseUrl);
      setLastRuntime(assistantResponse.runtime);

      setMessages((current) => [
        ...current,
        { role: 'user', text: prompt },
        { role: 'assistant', text: assistantResponse.text, runtime: assistantResponse.runtime },
      ]);
      emitMcpAppEvent('MCP_TOOL_CALL_COMPLETED', 'ai-assistant', {
        tool: 'assistant.summarizeCase',
        resources: ['billing.invoice', 'analytics.funnel', 'admin.tenant'],
        runtime: assistantResponse.runtime,
        provider: assistantResponse.provider,
      });
      setDraft('');
    } catch (error) {
      const text = withRuntimeLabel('Deterministic fallback', fallbackAnalysis);
      setLastRuntime('deterministic-fallback');
      setMessages((current) => [
        ...current,
        { role: 'user', text: prompt },
        { role: 'assistant', text, runtime: 'deterministic-fallback' },
      ]);
      emitMcpAppEvent('MCP_TOOL_CALL_FAILED', 'ai-assistant', {
        tool: 'assistant.summarizeCase',
        error: error instanceof Error ? error.message : String(error),
      });
    } finally {
      setIsThinking(false);
    }
  }

  async function generateAssistantResponse(prompt: string, configuredApiBaseUrl?: string): Promise<AssistantResponse> {
    const hostRuntime = officialMcpRuntimeRef.current;
    if (hostRuntime?.status === 'connected') {
      try {
        await hostRuntime.updateModelContext(`Open Micro Platform context: ${platformContext}`);
        await hostRuntime.sendLog('info', {
          appId: 'ai-assistant',
          action: 'ask',
          runtime: 'ai-native-host-model',
        });

        const response = await hostRuntime.requestHostCompletion(
          [
            'Answer this as the Open Micro Platform AI Assistant.',
            'Be concise, operational, and use the known cross-app context.',
            `Known platform context: ${platformContext}`,
            `User question: ${prompt}`,
          ].join('\n'),
          'You are running inside an MCP Apps widget. Use the AI host model to answer from the provided platform context.'
        );

        if (response.trim()) {
          return {
            text: withRuntimeLabel('AI Native host model', response.trim()),
            runtime: 'ai-native-host-model',
          };
        }
      } catch {
        // Some hosts render the app before exposing sampling. Try host-mediated tool calls next.
      }

      try {
        await hostRuntime.updateModelContext(`Open Micro Platform context: ${platformContext}`);
        const result = await hostRuntime.sendHostMessage(
          [
            'Answer this as the Open Micro Platform AI Assistant.',
            'Use the platform context already shared by the widget.',
            `User question: ${prompt}`,
          ].join('\n')
        );

        if (!isHostMessageRejected(result)) {
          return {
            text: withRuntimeLabel(
              'AI Native host message',
              'I sent this Ask to the AI-native host conversation with the current platform context. The host model response should appear in the chat thread, and the widget kept the same state for follow-up actions.'
            ),
            runtime: 'ai-native-host-message',
          };
        }
      } catch {
        // Fall through to browser-native and server API runtimes when the host rejects ui/message.
      }
    }

    const legacyOpenAiMessageResult = await sendLegacyOpenAiHostMessage(prompt);
    if (legacyOpenAiMessageResult) return legacyOpenAiMessageResult;

    if (builtInAiStatus === 'available' && window.LanguageModel) {
      let session: ChromeLanguageModelSession | undefined;
      try {
        session = await window.LanguageModel.create();
        const response = await session.prompt(
          [
            'You are the Open Micro Platform AI Assistant.',
            'Answer as a concise platform operator.',
            `Use this known context: ${platformContext}`,
            `User question: ${prompt}`,
          ].join('\n')
        );
        return {
          text: withRuntimeLabel('Chrome Built-in AI', response),
          runtime: 'chrome-built-in-ai',
        };
      } catch {
        // Fall through to server API runtime.
      } finally {
        session?.destroy?.();
      }
    }

    setApiChatStatus('idle');
    const apiResult = await callServerApiChat(prompt, configuredApiBaseUrl);
    if (apiResult) {
      setApiChatStatus('available');
      return apiResult;
    }
    setApiChatStatus('unavailable');

    return {
      text: withRuntimeLabel('Deterministic fallback', fallbackAnalysis),
      runtime: 'deterministic-fallback',
    };
  }

  return (
    <section className="micro-app-container">
      <header className="micro-app-header">
        <span>AI Platform</span>
        <h1>AI Incident Copilot</h1>
        <p>Cross-platform triage that correlates micro app state and returns an actionable workflow.</p>
      </header>

      <div className="insights">
        <article>
          <strong>4</strong>
          <span>Apps correlated</span>
        </article>
        <article>
          <strong>High</strong>
          <span>Primary signal</span>
        </article>
        <article>
          <strong>25%</strong>
          <span>Safe rollout</span>
        </article>
      </div>

      <div className="signal-board" aria-label="Cross-platform signals">
        {platformSignals.map((signal) => (
          <article className={`signal-card ${signal.severity}`} key={`${signal.app}-${signal.label}`}>
            <div>
              <span>{signal.app}</span>
              <strong>{signal.label}</strong>
            </div>
            <b>{signal.value}</b>
            <p>{signal.detail}</p>
          </article>
        ))}
      </div>

      <div className="workflow-panel" aria-label="Recommended workflow">
        <div>
          <span>AI-native workflow</span>
          <strong>Conversion Recovery Runbook</strong>
        </div>
        <ol>
          {workflowSteps.map((step) => (
            <li className={step.status} key={`${step.app}-${step.action}`}>
              <span>{step.app}</span>
              {step.action}
            </li>
          ))}
        </ol>
      </div>

      <div className="mcp-panel" aria-label="MCPApps capabilities">
        <span>MCPApps SDK</span>
        <strong>assistant.summarizeCase</strong>
        <p>Emits shared events, answers inside the widget, and exposes the same capability as an MCP App tool.</p>
      </div>

      <div className="ai-runtime-grid" aria-label="AI runtime capabilities">
        <article>
          <span>Legacy ChatGPT bridge</span>
          <strong>{formatOpenAiHostStatus(openAiHostStatus)}</strong>
          <p>Only used when a host exposes the older `window.openai` message API instead of the MCP Apps `ui/message` runtime.</p>
        </article>
        <article>
          <span>MCP host AI</span>
          <strong>{formatHostAiStatus(hostAiStatus)}</strong>
          <p>When rendered inside Claude, ChatGPT, or another MCP Apps host, asks the host model or sends a host conversation message before local browser fallback.</p>
        </article>
        <article>
          <span>Chrome built-in AI</span>
          <strong>{formatBuiltInAiStatus(builtInAiStatus)}</strong>
          <p>Uses `LanguageModel` locally when Chrome has Gemini Nano available, then falls back without breaking the shell.</p>
        </article>
        <article>
          <span>WebMCP tools</span>
          <strong>{webMcpSupported ? 'Registered' : 'Waiting for browser support'}</strong>
          <p>Registers tab-bound tools with `document.modelContext` when a browser agent exposes WebMCP.</p>
        </article>
        <article>
          <span>MCP Apps portability</span>
          <strong>HTML resource ready</strong>
          <p>This same micro app can render through `/api/mcp/apps/ai-assistant/resource` in an AI host iframe.</p>
        </article>
        <article>
          <span>Server API chat</span>
          <strong>{formatApiChatStatus(apiChatStatus)}</strong>
          <p>When host and browser AI are unavailable, Ask calls the shell or MCP server chat API and still returns an operational answer.</p>
        </article>
        <article>
          <span>Last response</span>
          <strong>{formatAssistantRuntime(lastRuntime)}</strong>
          <p>Shows which runtime handled the latest user question across AI-native, browser-native, and server paths.</p>
        </article>
      </div>

      <div className="thread">
        {messages.map((message, index) => (
          <p className={message.role} key={`${message.role}-${index}`}>
            {message.runtime && <span className="runtime-badge">{formatAssistantRuntime(message.runtime)}</span>}
            {message.text}
          </p>
        ))}
      </div>

      <div className="prompt-strip" aria-label="Demo prompts">
        {demoPrompts.map((prompt) => (
          <button type="button" key={prompt} onClick={() => setDraft(prompt)}>
            {prompt}
          </button>
        ))}
      </div>

      <form className="composer" onSubmit={submit}>
        <input value={draft} onChange={(event) => setDraft(event.target.value)} aria-label="Assistant prompt" />
        <button type="submit" disabled={isThinking}>{isThinking ? 'Thinking' : 'Ask'}</button>
      </form>
    </section>
  );
}

async function sendLegacyOpenAiHostMessage(prompt: string): Promise<AssistantResponse | undefined> {
  const bridge = await waitForOpenAiBridge();
  if (!bridge?.sendFollowUpMessage) return undefined;

  try {
    await bridge.sendFollowUpMessage({
      prompt: `Answer inside the conversation using the AI Assistant context: ${prompt}`,
      scrollToBottom: true,
    });
    return {
      text: withRuntimeLabel(
        'Legacy ChatGPT bridge',
        'I sent this question to the ChatGPT host conversation. The host response will appear in the chat thread.'
      ),
      runtime: 'ai-native-host-message',
    };
  } catch {
    return undefined;
  }
}

async function callServerApiChat(prompt: string, configuredApiBaseUrl?: string): Promise<AssistantResponse | undefined> {
  const endpoint = resolveApiChatEndpoint(configuredApiBaseUrl);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        context: platformContext,
        appId: 'ai-assistant',
      }),
    });

    if (!response.ok) return undefined;

    const payload = await response.json() as {
      text?: string;
      runtime?: AssistantRuntime;
      provider?: string;
    };

    if (!payload.text) return undefined;

    return {
      text: withRuntimeLabel(payload.provider ? `Server API chat (${payload.provider})` : 'Server API chat', payload.text),
      runtime: payload.runtime ?? 'server-api-chat',
      provider: payload.provider,
    };
  } catch {
    return undefined;
  }
}

function resolveApiChatEndpoint(configuredApiBaseUrl?: string): string {
  const contextOrigin = window.__MICRO_APP_CONTEXT__?.resourceOrigin ?? window.__MICRO_APP_CONTEXT__?.shellOrigin;
  const baseUrl = configuredApiBaseUrl ?? contextOrigin ?? window.location.origin;
  return new URL('/api/ai-assistant/chat', baseUrl).toString();
}

function withRuntimeLabel(label: string, text: string): string {
  return `[${label}] ${text}`;
}

async function waitForOpenAiBridge(timeoutMs = 1_500): Promise<OpenAiWidgetBridge | undefined> {
  if (window.openai?.sendFollowUpMessage) return window.openai;

  return new Promise((resolve) => {
    const deadline = Date.now() + timeoutMs;
    let interval: number | undefined;
    let timeout: number | undefined;

    const cleanup = () => {
      if (interval) window.clearInterval(interval);
      if (timeout) window.clearTimeout(timeout);
      window.removeEventListener('openai:set_globals', handleOpenAiGlobals);
    };

    const finish = () => {
      const bridge = window.openai?.sendFollowUpMessage ? window.openai : undefined;
      if (!bridge && Date.now() < deadline) return;
      cleanup();
      resolve(bridge);
    };

    const handleOpenAiGlobals = (event: Event) => {
      const bridge = (event as OpenAiGlobalsEvent).detail?.openai;
      if (bridge?.sendFollowUpMessage && !window.openai) {
        window.openai = bridge;
      }
      finish();
    };

    window.addEventListener('openai:set_globals', handleOpenAiGlobals);
    interval = window.setInterval(finish, 50);
    timeout = window.setTimeout(finish, timeoutMs);
  });
}

function readToolText(value: unknown): string | undefined {
  if (!value) return undefined;
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    return value.map(readToolText).filter(Boolean).join('\n') || undefined;
  }
  if (typeof value !== 'object') return undefined;

  const record = value as Record<string, unknown>;
  if (typeof record.text === 'string') return record.text;
  if (typeof record.result === 'string') return record.result;
  if (typeof record.structuredContent === 'object') {
    const structured = record.structuredContent as Record<string, unknown>;
    if (typeof structured.result === 'string') return structured.result;
  }
  if (Array.isArray(record.content)) return readToolText(record.content);
  if (typeof record.mcp_tool_result === 'object') return readToolText(record.mcp_tool_result);
  if (typeof record.call_tool_result === 'object') return readToolText(record.call_tool_result);

  return undefined;
}

function isHostMessageRejected(value: unknown): boolean {
  return Boolean(value && typeof value === 'object' && (value as { isError?: unknown }).isError === true);
}

function formatOpenAiHostStatus(status: OpenAiHostStatus): string {
  const labels: Record<OpenAiHostStatus, string> = {
    checking: 'Checking',
    connected: 'Legacy bridge connected',
    unavailable: 'Not exposed',
  };

  return labels[status];
}

function formatHostAiStatus(status: HostAiStatus): string {
  const labels: Record<HostAiStatus, string> = {
    checking: 'Checking',
    connected: 'Host model connected',
    standalone: 'Standalone mode',
    unavailable: 'Host model unavailable',
  };

  return labels[status];
}

function formatApiChatStatus(status: ApiChatStatus): string {
  const labels: Record<ApiChatStatus, string> = {
    idle: 'Ready on demand',
    available: 'API answered',
    unavailable: 'Unavailable',
  };

  return labels[status];
}

function formatAssistantRuntime(runtime: AssistantRuntime): string {
  const labels: Record<AssistantRuntime, string> = {
    'ai-native-mcp-tool': 'AI Native MCP tool',
    'ai-native-host-model': 'AI Native host model',
    'ai-native-host-message': 'AI Native host message',
    'chrome-built-in-ai': 'Chrome Built-in AI',
    'server-api-chat': 'Server API chat',
    'deterministic-fallback': 'Deterministic fallback',
  };

  return labels[runtime];
}

function formatBuiltInAiStatus(status: BuiltInAiStatus): string {
  const labels: Record<BuiltInAiStatus, string> = {
    available: 'Available',
    checking: 'Checking',
    downloadable: 'Model downloadable',
    downloading: 'Model downloading',
    unavailable: 'Unavailable',
    unsupported: 'Not exposed',
  };

  return labels[status];
}
