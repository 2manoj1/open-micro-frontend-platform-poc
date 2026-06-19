import { FormEvent, useEffect, useState } from 'react';
import {
  callMcpHostTool,
  emitMcpAppEvent,
  initializeMcpAppBridge,
  isWebMcpAvailable,
  registerWebMcpTool,
} from '@micro-frontend/platform-sdk/client';

interface Message {
  role: 'assistant' | 'user';
  text: string;
}

type BuiltInAiStatus = 'checking' | 'available' | 'downloadable' | 'downloading' | 'unavailable' | 'unsupported';

interface ChromeLanguageModelSession {
  prompt: (input: string) => Promise<string>;
  destroy?: () => void;
}

interface ChromeLanguageModel {
  availability: (options?: { languages?: string[] }) => Promise<BuiltInAiStatus>;
  create: (options?: { signal?: AbortSignal }) => Promise<ChromeLanguageModelSession>;
}

declare global {
  interface Window {
    LanguageModel?: ChromeLanguageModel;
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
  const [webMcpSupported, setWebMcpSupported] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    const bridge = initializeMcpAppBridge({ source: 'ai-assistant' });
    bridge.notify('ui/ready', {
      appId: 'ai-assistant',
      tools: ['assistant.summarizeCase', 'assistant.planWorkflow', 'assistant.invokeTool'],
    });

    return () => bridge.dispose();
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
    void callMcpHostTool('assistant.summarizeCase', { prompt }).catch(() => undefined);

    const assistantResponse = await generateAssistantResponse(prompt);

    setMessages((current) => [
      ...current,
      { role: 'user', text: prompt },
      { role: 'assistant', text: assistantResponse },
    ]);
    emitMcpAppEvent('MCP_TOOL_CALL_COMPLETED', 'ai-assistant', {
      tool: 'assistant.summarizeCase',
      resources: ['billing.invoice', 'analytics.funnel', 'admin.tenant'],
      runtime: builtInAiStatus === 'available' ? 'chrome-built-in-ai' : 'deterministic-fallback',
    });
    setDraft('');
    setIsThinking(false);
  }

  async function generateAssistantResponse(prompt: string): Promise<string> {
    if (builtInAiStatus !== 'available' || !window.LanguageModel) {
      return fallbackAnalysis;
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
