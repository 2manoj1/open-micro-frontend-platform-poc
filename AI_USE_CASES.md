# AI Native Use Cases

This POC treats every micro app as a portable capability surface. The same app can run in the Next.js shell, a PWA, a browser tab with agent tools, or an MCP Apps host.

## 1. Browser Shell AI Copilot

The AI Assistant app runs as a normal Web Component micro app at:

```text
/dashboard/ai-assistant
```

In this mode the shell owns navigation, auth, theme, registry, and layout. The app owns its UI and assistant logic.

The assistant uses a layered runtime strategy:

- MCP Apps runtime: in Claude, ChatGPT, or another MCP Apps host, the SDK first attempts host model sampling through `@modelcontextprotocol/ext-apps`, then falls back to `app.sendMessage({ role: "user", content: [...] })` so the Ask is handled by the AI-native host conversation.
- Legacy host message bridge: only when an older ChatGPT Apps surface exposes `window.openai.sendFollowUpMessage()`, the widget uses that compatibility path. It does not use `window.openai.callTool()` as the Ask answer path.
- Chrome built-in AI: in a normal browser, the app tries `window.LanguageModel` when Chrome exposes the Prompt API and the model is available.
- Server API chat: when host and browser AI are unavailable, the app calls `/api/ai-assistant/chat`. This can use OpenAI, Anthropic, Gemini, or the local demo rules engine.
- Event bus: every request emits `mcp:tool-call-requested` and `mcp:tool-call-completed`.

This keeps the micro app useful in Chrome, Safari, Firefox, CI, and AI-hosted iframe contexts.

OpenMF does not fork the MCP Apps standard. `@openmf/core/mcp-standard` re-exports the official framework-neutral View API (`App`, `PostMessageTransport`), Host API (`AppBridge`), Server helpers (`registerAppTool`, `registerAppResource`, `getUiCapability`), schemas, constants, and host style helpers from `@modelcontextprotocol/ext-apps`. `connectOfficialMcpAppRuntime()` is the opinionated micro-app convenience wrapper on top.

The visible demo use case is billing conversion triage. Ask:

```text
Why did billing conversion dip?
```

The app correlates billing, analytics, admin flags, and customer health signals, then labels the runtime that handled the request: AI Native host model, AI Native host message, Chrome Built-in AI, or Server API chat.

The Ask flow is intentionally progressive:

1. MCP Apps host sampling, for the most native ChatGPT/Claude-style answer when the host allows the widget to call the model.
2. MCP Apps `ui/message`, for sending the user question into the AI-native host conversation when sampling is not exposed.
3. Chrome Built-in AI, for standalone or shell usage when `LanguageModel` is available.
4. `/api/ai-assistant/chat`, for production-safe server AI or the local demo rules engine.

## 2. Chrome Built-In AI

Chrome built-in AI lets a web app perform AI tasks without deploying its own model service. In this POC, the AI Assistant checks:

```ts
await LanguageModel.availability({ languages: ['en'] })
```

If the API returns `available`, the app creates a session and prompts the local model. If the API is unsupported, unavailable, downloading, or fails at runtime, the app falls back without breaking the shell.

This is useful for:

- private client-side summaries
- local triage over already visible app state
- low-latency user assistance
- offline-friendly or edge-friendly experiences

## 3. WebMCP Browser-Agent Tools

WebMCP is for frontend, tab-bound agent actions. The SDK exposes:

```ts
import { registerWebMcpTool } from '@openmf/core/client'

registerWebMcpTool({
  name: 'assistant_summarize_platform_health',
  description: 'Summarize the currently visible Open Micro Platform dashboard health signals.',
  inputSchema: {
    type: 'object',
    properties: {
      question: { type: 'string' },
    },
  },
  execute: async ({ question }) => ({
    question,
    summary: 'Billing has one overdue enterprise invoice and analytics conversion dipped 2%.',
  }),
  readOnlyHint: true,
})
```

When `document.modelContext` exists, the browser agent can discover and call the tool. When it does not exist, registration becomes a no-op.

Use WebMCP when:

- the user is already on your website
- the agent should operate on live tab state
- the tool depends on DOM/session context
- actions should be ephemeral and scoped to the current browser visit

## 4. MCP Apps Portable UI

MCP Apps is for AI hosts that render interactive HTML UI in a sandboxed iframe. The shell exposes:

```text
GET /api/mcp/apps
GET /api/mcp/apps/ai-assistant/manifest
GET /api/mcp/apps/ai-assistant/resource
```

The resource route returns standalone HTML that imports the app's JS/CSS bundle, mounts the Web Component, and forwards app events to the host over `postMessage`.

In public AI-native mode the same app also calls:

```text
POST /api/ai-assistant/chat
```

That endpoint is exposed by both the Next.js shell and the MCP Apps server. This matters because the iframe may be hosted on the micro app domain while the shell API lives elsewhere.

Use MCP Apps when:

- the app should render inside Claude or another MCP Apps-capable host
- the UI should live beside the AI conversation
- the app needs host-provided tools, resources, prompt context, or user-approved capabilities
- the micro app should be portable beyond your own shell

## 5. Why This SDK Helps

The SDK gives app teams one contract:

- `defineMicroAppElement()` for framework-neutral Web Component delivery
- `emitMcpAppEvent()` for async event-driven communication
- `initializeMcpAppBridge()` and `callMcpHostTool()` for AI-host communication
- `registerWebMcpTool()` for browser-agent tools
- `createMcpAppHtml()` and `createMcpAppResourceDescriptor()` for shell-generated MCP Apps resources

The goal is not to replace every AI SDK. The goal is to make micro apps portable across:

- normal web shell
- PWA
- standalone deployment
- browser-agent tab
- MCP Apps iframe host
- future AI-native frontend containers

## 6. Production Notes

- Gate sensitive WebMCP tools with clear descriptions, schemas, read-only hints, and user confirmation.
- Treat MCP Apps descriptors as public contracts. Version them and test them.
- Use cache-busted or hashed remote JS/CSS URLs for AI hosts because widgets can stay open for a long time.
- Keep app-to-app communication async and observable.
- Keep auth, tenant, theme, locale, and feature flags shell-owned.
- Use Chrome built-in AI only as an optional runtime path. Always provide a server API fallback.

## 7. Optional Server AI Providers

The server API chat fallback works without keys by using a deterministic demo rules engine. To connect a real provider, configure:

```bash
AI_ASSISTANT_API_PROVIDER=openai
OPENAI_API_KEY=...
AI_ASSISTANT_OPENAI_MODEL=...
```

or:

```bash
AI_ASSISTANT_API_PROVIDER=anthropic
ANTHROPIC_API_KEY=...
AI_ASSISTANT_ANTHROPIC_MODEL=...
```

or:

```bash
AI_ASSISTANT_API_PROVIDER=gemini
GEMINI_API_KEY=...
AI_ASSISTANT_GEMINI_MODEL=...
```
