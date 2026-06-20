# @openmf/core

Framework-neutral SDK for manifest-driven, self-deployable, AI-native micro frontends without webpack Module Federation.

The SDK gives shell teams and app teams a small standards-first contract:

- Web Components for React, Vue, Angular, Lit, Stencil, or plain Custom Elements.
- ESM remotes with `mount(container, context)`.
- HTML fragments for static, SSR, SSG, ISR, and RSC-compatible shell rendering.
- iframe isolation for full-document remotes.
- Async event bus, runtime state, error reporting, and no-white-screen loading states.
- MCP Apps and WebMCP adapters so the same app can run in a web shell, standalone, PWA, or AI-native host.

## Install

```bash
npm install @openmf/core
```

This package is ESM-first and ships TypeScript declarations for every subpath export.

## Entry Points

```ts
import { createMicroAppRegistry } from '@openmf/core/registry'
import { mountMicroApp } from '@openmf/core/shell'
import { defineMicroAppElement } from '@openmf/core/client'
import { createMcpAppHtml } from '@openmf/core/mcp-app'
import { createMicroAppRuntimeState, waitForMicroAppReady } from '@openmf/core/runtime-state'
import { eventBus, PlatformEvents } from '@openmf/core/event-bus'
```

The root import re-exports the stable SDK modules:

```ts
import { mountMicroApp, createMcpAppResourceDescriptor } from '@openmf/core'
import { App, registerAppTool } from '@openmf/core/mcp-standard'
```

## Micro App Contract

```ts
import { defineMicroAppElement, emitMcpAppEvent } from '@openmf/core/client'

defineMicroAppElement('micro-orders-app', {
  mount(host, context) {
    host.innerHTML = `<strong>${context.app.name}</strong>`

    emitMcpAppEvent('MCP_TOOL_CALL_REQUESTED', context.app.id, {
      tool: 'orders.search',
    })

    return () => host.replaceChildren()
  },
})
```

Any framework can own the implementation behind the custom element. The shell only depends on the runtime manifest and browser-native loading contract.

## Shell Contract

```ts
import { createMicroAppRuntimeState, mountMicroApp, waitForMicroAppReady } from '@openmf/core/shell'

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

`waitForMicroAppReady()` waits for an explicit `micro-app:ready` event or visible rendered content, including shadow DOM. If the app never paints, the shell can show a controlled error fallback instead of a white screen.

## Registry Validation

```ts
import { createMicroAppRegistry, validateMicroAppRegistry } from '@openmf/core/registry'

const issues = validateMicroAppRegistry(apps)
if (issues.length) {
  console.error(issues)
}

const registry = createMicroAppRegistry(apps)
```

The registry validates required manifest fields, runtime configuration, duplicate ids, and rendering metadata before shell code tries to mount a remote.

## MCP Apps

OpenMF wraps the official MCP Apps SDK instead of replacing it. Use `@openmf/core/mcp-standard` when you need direct access to the standard API surface:

```ts
import {
  App,
  AppBridge,
  PostMessageTransport,
  RESOURCE_MIME_TYPE,
  getUiCapability,
  registerAppResource,
  registerAppTool,
} from '@openmf/core/mcp-standard'
```

That module re-exports the framework-neutral View APIs, Host bridge APIs, Server helpers, schemas, constants, and host style helpers from `@modelcontextprotocol/ext-apps`. The higher-level OpenMF runtime below is a convenience layer for micro apps that want common defaults.

```ts
import { connectOfficialMcpAppRuntime } from '@openmf/core/client'

const runtime = await connectOfficialMcpAppRuntime({
  name: 'Orders App',
  version: '1.0.0',
  capabilities: {
    sampling: {},
    serverTools: {},
    modelContext: {},
  },
  handlers: {
    onToolInput(input) {
      console.log('Host started the tool call', input)
    },
    onToolResult(result) {
      console.log('Host returned tool data', result)
    },
    onHostContextChanged(context) {
      console.log('Theme, locale, display mode, or tool context changed', context)
    },
  },
})

if (runtime.status === 'connected') {
  await runtime.updateModelContext('Visible tenant has two overdue invoices.')
  const answer = await runtime.requestHostCompletion('Summarize the risk.')
  await runtime.sendHostMessage('Add this risk summary to the chat thread.')
  await runtime.callServerTool('orders_refreshVisibleRows', { tenantId: 'acme' })
  await runtime.readServerResource('orders://tenant/acme')
  await runtime.openLink('https://docs.example.com/orders')
  await runtime.requestDisplayMode('fullscreen')
}
```

Register lifecycle handlers before `connect()` is called. `connectOfficialMcpAppRuntime()` does that for you when handlers are passed in options, which prevents hosts from hiding the iframe while waiting on one-shot tool input/result notifications. A good app runtime order is: host sampling when the widget needs the AI answer back in UI, `sendHostMessage()` when the user expects the AI-native chat thread to answer, browser AI when available, and a server API fallback for every other environment. Use `callServerTool()` for structured app data/actions, not as the primary Ask-to-LLM path.

Shells can expose the same app as an MCP Apps HTML resource:

```ts
import { createMcpAppHtml, createMcpAppResourceDescriptor } from '@openmf/core/mcp-app'

const descriptor = createMcpAppResourceDescriptor(app, {
  shellOrigin: 'https://shell.example.com',
  resourceUrl: 'https://shell.example.com/api/mcp/apps/orders/resource',
})

const html = createMcpAppHtml(app, {
  shellOrigin: 'https://shell.example.com',
})
```

MCP UI permissions are emitted as objects, for example `{ clipboardWrite: {} }`, which keeps the package compatible with current MCP Apps host validation.

## WebMCP Tools

```ts
import { registerWebMcpTool } from '@openmf/core/client'

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

Registration is a no-op when the browser does not expose `document.modelContext`.

## Production Notes

- Use bundled remote assets for production and preview, not Vite `/src/main.*` dev entries.
- Keep design-system code either shared through runtime contracts or peer dependencies; do not rely on webpack singleton behavior.
- Prefer hashed or versioned asset URLs for AI hosts and long-lived iframes.
- Treat HTML fragments as trusted content and enforce CSP/resource domains at the shell boundary.
- Emit runtime errors to the shell logger and render an error fallback for every remote surface.

## Publish Check

```bash
pnpm --filter @openmf/core validate
```

This runs type-checking, builds `dist`, and performs `pnpm pack --dry-run` so you can inspect exactly what npm would receive.

## Status

`0.x` is experimental while the manifest schema and MCP Apps adapters settle. The architecture is designed for Next.js RSC/SSR/SSG/ISR shells, CSR micro apps from any framework, and AI-native hosts that support MCP Apps-style interactive surfaces.
