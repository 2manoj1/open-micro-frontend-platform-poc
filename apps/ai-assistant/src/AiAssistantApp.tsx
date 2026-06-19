import { FormEvent, useState } from 'react';
import { emitMcpAppEvent } from '@micro-frontend/platform-sdk/client';

interface Message {
  role: 'assistant' | 'user';
  text: string;
}

export function AiAssistantApp() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'I can summarize app health, explain events, and suggest next actions across the platform.' },
  ]);
  const [draft, setDraft] = useState('Why did billing conversion dip?');

  function submit(event: FormEvent) {
    event.preventDefault();
    const prompt = draft.trim();
    if (!prompt) return;

    emitMcpAppEvent('MCP_TOOL_CALL_REQUESTED', 'ai-assistant', {
      tool: 'assistant.summarizeCase',
      prompt,
    });

    setMessages((current) => [
      ...current,
      { role: 'user', text: prompt },
      { role: 'assistant', text: 'Draft analysis: billing has 1 overdue enterprise invoice, analytics reports a 2% conversion dip, and the admin flag billing-autopay is disabled. Recommended action: enable a 25% rollout and notify account owners.' },
    ]);
    emitMcpAppEvent('MCP_TOOL_CALL_COMPLETED', 'ai-assistant', {
      tool: 'assistant.summarizeCase',
      resources: ['billing.invoice', 'analytics.funnel', 'admin.tenant'],
    });
    setDraft('');
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

      <div className="thread">
        {messages.map((message, index) => (
          <p className={message.role} key={`${message.role}-${index}`}>{message.text}</p>
        ))}
      </div>

      <form className="composer" onSubmit={submit}>
        <input value={draft} onChange={(event) => setDraft(event.target.value)} aria-label="Assistant prompt" />
        <button type="submit">Ask</button>
      </form>
    </section>
  );
}
