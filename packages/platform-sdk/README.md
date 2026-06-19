# @micro-frontend/platform-sdk

Framework-neutral runtime SDK for self-deployable micro apps.

This SDK is designed for shell teams and app teams that want micro frontends without webpack Module Federation as a required runtime. Apps are discovered through manifests and mounted through browser-native or URL-based contracts.

## Supported Runtime Contracts

- Web Component: React, Vue, Angular Elements, Lit, Stencil, or plain Custom Elements.
- ESM module: export `mount(container, context)`.
- HTML fragment: static, SSR, SSG, ISR, or RSC-compatible shell rendering.
- iframe: full-document isolation for separately hosted apps.

## Entry Points

```ts
import { mountMicroApp } from '@micro-frontend/platform-sdk/shell'
import { defineMicroAppElement } from '@micro-frontend/platform-sdk/client'
import { createMicroAppRegistry } from '@micro-frontend/platform-sdk/registry'
import { createMicroAppRuntimeState, waitForMicroAppReady } from '@micro-frontend/platform-sdk/runtime-state'
import { eventBus, PlatformEvents } from '@micro-frontend/platform-sdk/event-bus'
import { createMcpAppBridge, createMcpAppHtml } from '@micro-frontend/platform-sdk/mcp-app'
import { registerWebMcpTool } from '@micro-frontend/platform-sdk/web-mcp'
import { reportMicroAppError } from '@micro-frontend/platform-sdk/observability'
```

## Micro App Example

```ts
import { defineMicroAppElement, emitMcpAppEvent } from '@micro-frontend/platform-sdk/client'

defineMicroAppElement('micro-orders-app', {
  mount(host, context) {
    host.innerHTML = `<strong>${context.app.name}</strong>`

    emitMcpAppEvent('MCP_TOOL_CALL_REQUESTED', context.app.id, {
      tool: 'orders.search',
    })

    return () => {
      host.replaceChildren()
    }
  },
})
```

## Shell Example

```ts
import { createMicroAppRuntimeState, mountMicroApp, waitForMicroAppReady } from '@micro-frontend/platform-sdk/shell'

setRuntimeState(createMicroAppRuntimeState(appConfig, 'loading-assets'))
await mountMicroApp(appConfig, container, {
  shellOrigin: window.location.origin,
  attributes: {
    'data-theme': 'dark',
    'data-tenant': 'acme',
  },
})
setRuntimeState(createMicroAppRuntimeState(appConfig, 'mounting'))
await waitForMicroAppReady(container)
setRuntimeState(createMicroAppRuntimeState(appConfig, 'ready'))
```

## Runtime States

The SDK exposes a small runtime state model so every shell can show consistent loading, success, empty, and error UI instead of a blank surface.

Supported phases:

- `idle`
- `resolving`
- `loading-assets`
- `mounting`
- `ready`
- `empty`
- `error`
- `unmounted`

Use `waitForMicroAppReady()` after client-side mounting to keep a loading state visible until the remote app has produced renderable content or a timeout raises a controlled error.

## MCPApps Capability Metadata

Apps can declare:

- tools
- resources
- prompts
- event namespaces
- platform scopes on the app manifest
- MCP sandbox browser permissions as a dict/object, for example `{ clipboardWrite: {} }`
- owner and version metadata

This lets the same app act as a web micro frontend and an AI-native capability surface.

## MCP Apps Bridge

The SDK includes an optional bridge for hosts that render apps in a sandboxed iframe and communicate with JSON-RPC over `postMessage`.

```ts
import { callMcpHostTool, initializeMcpAppBridge } from '@micro-frontend/platform-sdk/client'

const bridge = initializeMcpAppBridge({ source: 'orders' })

bridge.notify('ui/ready', { appId: 'orders' })

await callMcpHostTool('orders.search', {
  query: 'overdue invoices',
})
```

Shells can generate an iframe-ready HTML resource from the same app manifest:

```ts
import { createMcpAppHtml, createMcpAppResourceDescriptor } from '@micro-frontend/platform-sdk/mcp-app'

const descriptor = createMcpAppResourceDescriptor(app, {
  shellOrigin: 'https://shell.example.com',
  resourceUrl: 'https://shell.example.com/api/mcp/apps/orders/resource',
})

const html = createMcpAppHtml(app, {
  shellOrigin: 'https://shell.example.com',
})
```

## WebMCP Tools

For browser agents, micro apps can register tab-bound WebMCP tools. Registration is a no-op when the browser does not expose `document.modelContext`.

```ts
import { registerWebMcpTool } from '@micro-frontend/platform-sdk/client'

const registration = registerWebMcpTool({
  name: 'orders_summarize',
  description: 'Summarize visible order health for the current tenant.',
  inputSchema: {
    type: 'object',
    properties: {
      timeframe: { type: 'string' },
    },
  },
  execute: async ({ timeframe }) => ({
    timeframe,
    summary: 'Two orders need follow-up.',
  }),
  readOnlyHint: true,
})

registration.unregister()
```

## Status

This package is POC/MVP ready. Treat the API as experimental until a `1.0.0` release.
