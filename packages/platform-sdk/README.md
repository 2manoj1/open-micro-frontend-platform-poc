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
import { eventBus, PlatformEvents } from '@micro-frontend/platform-sdk/event-bus'
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
import { mountMicroApp } from '@micro-frontend/platform-sdk/shell'

await mountMicroApp(appConfig, container, {
  shellOrigin: window.location.origin,
  attributes: {
    'data-theme': 'dark',
    'data-tenant': 'acme',
  },
})
```

## MCPApps Capability Metadata

Apps can declare:

- tools
- resources
- prompts
- event namespaces
- permissions
- owner and version metadata

This lets the same app act as a web micro frontend and an AI-native capability surface.

## Status

This package is POC/MVP ready. Treat the API as experimental until a `1.0.0` release.
