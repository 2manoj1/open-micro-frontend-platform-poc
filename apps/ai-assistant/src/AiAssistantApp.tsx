import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  callMcpHostTool,
  connectOfficialMcpAppRuntime,
  emitMcpAppEvent,
  initializeMcpAppBridge,
  isWebMcpAvailable,
  type OfficialMcpAppRuntime,
  registerWebMcpTool,
} from '@micro-frontend/platform-sdk/client';

interface Message {
  role: 'assistant' | 'user';
  text: string;
}

type BuiltInAiStatus = 'checking' | 'available' | 'downloadable' | 'downloading' | 'unavailable' | 'unsupported';
type HostAiStatus = 'checking' | 'connected' | 'standalone' | 'unavailable';
type OpenAiHostStatus = 'checking' | 'connected' | 'unavailable';
type OpenAiGlobalsEvent = Event & { detail?: { openai?: OpenAiWidgetBridge } };

interface ChromeLanguageModelSession {
  prompt: (input: string) => Promise<string>;
  destroy?: () => void;
}

interface ChromeLanguageModel {
  availability: (options?: { languages?: string[] }) => Promise<BuiltInAiStatus>;
  create: (options?: { signal?: AbortSignal }) => Promise<ChromeLanguageModelSession>;
}

interface OpenAiWidgetBridge {
  callTool?: (name: string, args?: Record<string, unknown>) => Promise<unknown>;
  sendFollowUpMessage?: (params: { prompt: string; scrollToBottom?: boolean }) => Promise<unknown>;
  setWidgetState?: (state: Record<string, unknown>) => void;
}

declare global {
  interface Window {
    LanguageModel?: ChromeLanguageModel;
    openai?: OpenAiWidgetBridge;
  }
}

const fallbackAnalysis =
  'Draft analysis: billing has 1 overdue enterprise invoice, analytics reports a 2% conversion dip, and the admin flag billing-autopay is disabled. Recommended action: enable a 25% rollout and notify account owners.';

export function AiAssistantApp() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'I can summarize app health, explain events, and suggest next actions across the platform.' },
  ]);
  const [draft, setDraft] = useState('Why did billing conversion dip?');
  const [builtInAiStatus, setBuiltInAiStatus] = useState<BuiltInAiStatus>('checking');
  const [hostAiStatus, setHostAiStatus] = useState<HostAiStatus>('checking');
  const [openAiHostStatus, setOpenAiHostStatus] = useState<OpenAiHostStatus>('checking');
  const [webMcpSupported, setWebMcpSupported] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const officialMcpRuntimeRef = useRef<OfficialMcpAppRuntime>();

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
      setOpenAiHostStatus(window.openai?.callTool ? 'connected' : 'unavailable');
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

    const assistantResponse = await generateAssistantResponse(prompt);

    setMessages((current) => [
      ...current,
      { role: 'user', text: prompt },
      { role: 'assistant', text: assistantResponse },
    ]);
    emitMcpAppEvent('MCP_TOOL_CALL_COMPLETED', 'ai-assistant', {
      tool: 'assistant.summarizeCase',
      resources: ['billing.invoice', 'analytics.funnel', 'admin.tenant'],
      runtime: hostAiStatus === 'connected' ? 'mcp-host-model' : builtInAiStatus === 'available' ? 'chrome-built-in-ai' : 'deterministic-fallback',
    });
    setDraft('');
    setIsThinking(false);
  }

  async function generateAssistantResponse(prompt: string): Promise<string> {
    const openAiToolResult = await callOpenAiHostTool(prompt);
    if (openAiToolResult) return openAiToolResult;

    const hostRuntime = officialMcpRuntimeRef.current;
    if (hostRuntime?.status === 'connected') {
      try {
        await hostRuntime.updateModelContext(
          'Open Micro Platform context: Billing has one overdue enterprise invoice, analytics reports a 2% conversion dip, and the admin flag billing-autopay is disabled.'
        );

        const response = await hostRuntime.requestHostCompletion(
          [
            'Answer this as the Open Micro Platform AI Assistant.',
            'Be concise, operational, and use the known cross-app context.',
            `User question: ${prompt}`,
          ].join('\n'),
          'You are running inside an MCP Apps widget. Use the AI host model to answer from the provided platform context.'
        );

        if (response.trim()) return response.trim();
      } catch {
        // Fall through to browser-native and deterministic runtimes.
      }
    }

    if (builtInAiStatus !== 'available' || !window.LanguageModel) {
      return [
        'AI host runtime was not available to this widget, so I could not call the host model directly.',
        fallbackAnalysis,
      ].join(' ');
    }

    let session: ChromeLanguageModelSession | undefined;
    try {
      session = await window.LanguageModel.create();
      return await session.prompt(
        [
          'You are the Open Micro Platform AI Assistant.',
          'Answer as a concise platform operator.',
          'Use this known context: Billing has one overdue enterprise invoice, analytics reports a 2% conversion dip, and the admin flag billing-autopay is disabled.',
          `User question: ${prompt}`,
        ].join('\n')
      );
    } catch {
      return fallbackAnalysis;
    } finally {
      session?.destroy?.();
    }
  }

  return (
    <section className="micro-app-container">
      <header className="micro-app-header">
        <span>AI Platform</span>
        <h1>Assistant Workspace</h1>
        <p>Local POC assistant flow for platform triage and cross-app context.</p>
      </header>

      <div className="insights">
        <article>
          <strong>3</strong>
          <span>Signals correlated</span>
        </article>
        <article>
          <strong>Low</strong>
          <span>Risk level</span>
        </article>
        <article>
          <strong>0 ms</strong>
          <span>External API latency</span>
        </article>
      </div>

      <div className="mcp-panel" aria-label="MCPApps capabilities">
        <span>MCPApps SDK</span>
        <strong>assistant.summarizeCase</strong>
        <p>Emits `mcp:tool-call-requested` and `mcp:tool-call-completed` on the shared event bus.</p>
      </div>

      <div className="ai-runtime-grid" aria-label="AI runtime capabilities">
        <article>
          <span>ChatGPT Apps bridge</span>
          <strong>{formatOpenAiHostStatus(openAiHostStatus)}</strong>
          <p>When ChatGPT exposes `window.openai`, Ask calls the MCP tool through the host and renders the returned tool data.</p>
        </article>
        <article>
          <span>MCP host AI</span>
          <strong>{formatHostAiStatus(hostAiStatus)}</strong>
          <p>When rendered inside ChatGPT, Claude, or another MCP Apps host, asks the host model before local browser fallback.</p>
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
      </div>

      <div className="thread">
        {messages.map((message, index) => (
          <p className={message.role} key={`${message.role}-${index}`}>{message.text}</p>
        ))}
      </div>

      <form className="composer" onSubmit={submit}>
        <input value={draft} onChange={(event) => setDraft(event.target.value)} aria-label="Assistant prompt" />
        <button type="submit" disabled={isThinking}>{isThinking ? 'Thinking' : 'Ask'}</button>
      </form>
    </section>
  );
}

async function callOpenAiHostTool(prompt: string): Promise<string | undefined> {
  const bridge = await waitForOpenAiBridge();
  if (!bridge?.callTool) return undefined;

  try {
    const result = await bridge.callTool('assistant_summarizeCase', { prompt });
    const text = readToolText(result);
    if (text) return text;

    await bridge.sendFollowUpMessage?.({
      prompt: `Answer inside the conversation using the AI Assistant context: ${prompt}`,
      scrollToBottom: true,
    });
    return 'I sent this question to the ChatGPT host conversation. The host response will appear in the chat thread.';
  } catch {
    return undefined;
  }
}

async function waitForOpenAiBridge(timeoutMs = 1_500): Promise<OpenAiWidgetBridge | undefined> {
  if (window.openai?.callTool) return window.openai;

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
      const bridge = window.openai?.callTool ? window.openai : undefined;
      if (!bridge && Date.now() < deadline) return;
      cleanup();
      resolve(bridge);
    };

    const handleOpenAiGlobals = (event: Event) => {
      const bridge = (event as OpenAiGlobalsEvent).detail?.openai;
      if (bridge?.callTool && !window.openai) {
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

function formatOpenAiHostStatus(status: OpenAiHostStatus): string {
  const labels: Record<OpenAiHostStatus, string> = {
    checking: 'Checking',
    connected: 'Host tool bridge connected',
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
