# MCP Testing in ChatGPT and Claude

This guide verifies the Open Micro Platform MCP server, MCP Apps resources, Cloudflare routing, and host-specific setup for ChatGPT/OpenAI and Claude.

## Endpoints

Use these public HTTPS endpoints for cloud clients:

- ChatGPT/OpenAI: `https://ai-assistant.manojmukherjee.co.in/mcp/openai`
- ChatGPT alternate: `https://ai-assistant.manojmukherjee.co.in/mcp/chatgpt`
- Claude: `https://ai-assistant.manojmukherjee.co.in/mcp/claude`
- Generic MCP: `https://ai-assistant.manojmukherjee.co.in/mcp`

Related public app URLs:

- Shell dashboard: `https://shell.manojmukherjee.co.in/dashboard`
- Shell MCP demo: `https://shell.manojmukherjee.co.in/dashboard/mcp-demo`
- MCP demo bundle: `https://mcp-demo.manojmukherjee.co.in/mcp-demo-app.js`
- MCP demo manifest: `https://mcp-demo.manojmukherjee.co.in/manifest.json`

## Preflight

Run the full automated check:

```bash
pnpm mcp:check
```

For a local-only check against local ports:

```bash
pnpm mcp:check:local
```

Manual checks:

```bash
curl -fsS https://ai-assistant.manojmukherjee.co.in/healthz
curl -fsS https://ai-assistant.manojmukherjee.co.in/apps
curl -fsS "https://ai-assistant.manojmukherjee.co.in/apps/mcp-demo/resource?fresh=1"
curl -fsS "https://mcp-demo.manojmukherjee.co.in/mcp-demo-app.js?fresh=1" -o /dev/null -w "%{http_code}\n"
```

Expected:

- Health returns `ok: true`.
- Apps returns all 10 apps.
- MCP demo resource contains public Cloudflare asset URLs.
- MCP demo resource does not contain `localhost` or `127.0.0.1` in cloud mode.
- MCP demo JS returns `200`.

Initialize check:

```bash
curl -sS -X POST https://ai-assistant.manojmukherjee.co.in/mcp/openai \
  -H 'content-type: application/json' \
  -H 'accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"manual-check","version":"1.0.0"}}}'
```

Expected: HTTP `200` with MCP `capabilities` and `serverInfo`.

## ChatGPT

Use:

```text
https://ai-assistant.manojmukherjee.co.in/mcp/openai
```

Recommended test flow:

1. Add a custom MCP connector in ChatGPT developer/connectors setup using the endpoint above.
2. Or use OpenAI API Playground: Tools -> Add -> MCP Server, then paste the endpoint.
3. Start a new ChatGPT conversation.
4. Select the connector from the tools list.
5. Prompt:

```text
Use the Open Micro Platform MCP app. List the available micro apps, then open the MCP Apps SDK Demo and run the native AI flow.
```

Targeted prompts:

```text
Show me the MCP Apps SDK Demo communication trace.
```

```text
Run the billing conversion dip investigation and show the generated UI.
```

Expected:

- ChatGPT discovers the MCP tools/resources.
- The MCP demo UI resource loads inside the host iframe.
- The UI imports assets from `https://mcp-demo.manojmukherjee.co.in`.
- After tool metadata changes, Settings -> Connectors -> Refresh updates the connector metadata.

## Claude

For Claude Code:

```bash
claude mcp add --transport http open-micro-platform https://ai-assistant.manojmukherjee.co.in/mcp/claude
claude mcp list
```

Then ask Claude:

```text
Use the open-micro-platform MCP server. List available apps and inspect the MCP Apps SDK Demo.
```

Claude API / Workbench-style config:

```json
{
  "mcp_servers": [
    {
      "type": "url",
      "url": "https://ai-assistant.manojmukherjee.co.in/mcp/claude",
      "name": "open-micro-platform"
    }
  ],
  "tools": [
    {
      "type": "mcp_toolset",
      "mcp_server_name": "open-micro-platform"
    }
  ]
}
```

Expected:

- Claude connects over remote HTTP.
- Tool listing succeeds.
- Claude can call MCP tools and reference MCP resources.
- Full embedded UI validation should be done in ChatGPT or another MCP Apps-compatible UI host.

## MCP Inspector

Use the inspector for protocol-level testing:

```bash
npx @modelcontextprotocol/inspector
```

Choose:

- Transport: `Streamable HTTP`
- URL: `https://ai-assistant.manojmukherjee.co.in/mcp/openai` or `https://ai-assistant.manojmukherjee.co.in/mcp/claude`

Validate:

- `initialize`
- `tools/list`
- `resources/list`
- `prompts/list`
- MCP demo tool calls

## Cloudflare Tunnel

The named tunnel config lives at `cloudflare/mcp-apps-tunnel.yml`.

Run it directly:

```bash
pnpm mcp:tunnel
```

On macOS, keep it alive for testing with the LaunchAgent created at:

```text
~/Library/LaunchAgents/com.openmicroplatform.mcp-cloudflared.plist
```

Useful checks:

```bash
cloudflared tunnel info open-micro-platform-mcp
launchctl print gui/$(id -u)/com.openmicroplatform.mcp-cloudflared
tail -f /tmp/open-micro-platform-mcp-cloudflared.log
```

## References

- OpenAI Apps SDK MCP server: https://developers.openai.com/apps-sdk/build/mcp-server
- OpenAI ChatGPT connector testing: https://developers.openai.com/apps-sdk/deploy/connect-chatgpt
- OpenAI MCP Apps compatibility: https://developers.openai.com/apps-sdk/mcp-apps-in-chatgpt
- Claude Code remote HTTP MCP setup: https://code.claude.com/docs/en/mcp
- Claude MCP connector API config: https://platform.claude.com/docs/en/agents-and-tools/mcp-connector
