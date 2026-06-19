# MCP Apps ChatGPT Test

This repo can expose any configured micro app as an MCP App for ChatGPT, Claude, or another compliant MCP Apps host.

## Local Services

Start the production-style Podman stack:

```bash
pnpm podman:up
```

Start the MCP Apps server for the AI Assistant app:

```bash
PUBLIC_SHELL_ORIGIN=http://127.0.0.1:3001 \
PUBLIC_MCP_ORIGIN=https://ai-assistant.manojmukherjee.co.in \
PUBLIC_APP_BASE_DOMAIN=manojmukherjee.co.in \
MCP_APPS_HOST_PROFILE=portable \
MCP_APPS_ENABLED=ai-assistant \
pnpm mcp:apps
```

Local verification:

```bash
curl http://127.0.0.1:8787/healthz
curl http://127.0.0.1:8787/apps
```

MCP endpoint:

```text
http://127.0.0.1:8787/mcp
```

Public ChatGPT endpoint after Cloudflare Tunnel:

```text
https://ai-assistant.manojmukherjee.co.in/mcp
```

Public Claude endpoint after Cloudflare Tunnel:

```text
https://ai-assistant.manojmukherjee.co.in/mcp
```

## Cloudflare Tunnel

One-time login:

```bash
cloudflared tunnel login
```

Create a named tunnel:

```bash
cloudflared tunnel create open-micro-platform-mcp
```

Update `cloudflare/mcp-apps-tunnel.yml` if Cloudflare created a credentials file with a UUID filename. The `tunnel:` value can be the tunnel name or UUID.

Create DNS routes:

```bash
cloudflared tunnel route dns open-micro-platform-mcp ai-assistant.manojmukherjee.co.in
```

Run the tunnel:

```bash
pnpm mcp:tunnel
```

The tunnel config routes:

- `https://ai-assistant.manojmukherjee.co.in/mcp` to the MCP Apps server on port `8787`
- `https://ai-assistant.manojmukherjee.co.in/mcp/claude` to the MCP Apps server on port `8787`
- `https://ai-assistant.manojmukherjee.co.in/mcp/openai` to the MCP Apps server on port `8787`
- `https://ai-assistant.manojmukherjee.co.in/ai-assistant-app.js` to the AI Assistant micro app on port `5177`
- `https://ai-assistant.manojmukherjee.co.in/ai-assistant-app.css` to the AI Assistant micro app on port `5177`

## ChatGPT Plus

In ChatGPT connectors / MCP configuration, add:

```text
https://ai-assistant.manojmukherjee.co.in/mcp
```

Ask:

```text
Open the AI Assistant App
```

The MCP server registers:

- `open_micro_app_ai-assistant`
- `assistant_summarizeCase`
- `assistant_planWorkflow`
- `assistant_invokeTool`
- `list_open_micro_apps`
- `ui://micro-app/ai-assistant` with MIME type `text/html;profile=mcp-app`

MCP Apps `_meta.ui.permissions` is intentionally emitted as a dict/object. Keep platform auth scopes such as `ai:invoke` in the app manifest; only browser sandbox capabilities such as `clipboardWrite`, `camera`, `microphone`, or `geolocation` belong in MCP UI permissions.

MCP Apps `_meta.ui.domain` is host-specific. The default `/mcp` endpoint omits standard `ui.domain` for Claude compatibility and emits OpenAI's compatibility alias `_meta["openai/widgetDomain"]` for ChatGPT submission. Use `/mcp/openai` only when you explicitly want standard `ui.domain`; use `/mcp/claude` when you want the Claude-safe profile.

The AI Assistant widget connects through the official MCP Apps client runtime when it is mounted inside an AI host. User questions use this order:

- MCP Apps host model through `sampling/createMessage`
- Chrome built-in AI / Gemini Nano through `window.LanguageModel`
- deterministic local fallback for demos and offline runtimes

## Expose Another Micro App

Make sure the app has `mcp` metadata in `apps/shell/lib/platform-config.ts`.

Enable it at deploy time:

```bash
MCP_APPS_ENABLED=ai-assistant,billing,customer pnpm mcp:apps
```

Add Cloudflare host/path routes for each app subdomain. The same micro app remains usable as:

- standalone deployed app
- runtime remote inside the Next.js shell
- MCP Apps iframe resource inside an AI host
