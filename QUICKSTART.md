# Quick Start

Run the full Micro Frontend Platform POC locally.

## Prerequisites

- Node.js 20.9+ recommended for the current Next.js line
- pnpm 10+

## Install

```bash
pnpm install
```

## Start Everything

```bash
pnpm dev:all
```

The shell starts on `http://localhost:3000` when available. If another Next dev server is already running, Next will print the actual port, such as `http://localhost:3001`.

Micro app ports:

- Customer: `http://127.0.0.1:5173`
- Billing: `http://127.0.0.1:5174`
- Analytics: `http://127.0.0.1:5175`
- Admin: `http://127.0.0.1:5176`
- AI Assistant: `http://127.0.0.1:5177`
- Vue Commerce: `http://127.0.0.1:5178`
- Angular Operations: `http://127.0.0.1:5179`
- Design System Contract: `http://127.0.0.1:5180`

Open the shell, go to `/dashboard`, and launch any registered micro app.

## Start With Docker Compose

```bash
pnpm docker:up
```

Podman users can run the same topology with:

```bash
pnpm podman:up
```

Open `http://localhost:3001`.

Docker Compose builds each micro app independently, serves built ESM assets through Vite preview, and configures the shell to load production-style entry files such as `/customer-app.js`.

## Configure

Local defaults are centralized in `apps/shell/lib/platform-config.ts` and can be overridden with environment variables:

- `MICRO_APP_REGISTRY_URL`: remote registry endpoint for self-deployed teams.
- `MICRO_APP_LOCAL_APPS_ENABLED=false`: disable bundled local demo apps.
- `NEXT_PUBLIC_MICRO_APP_ERROR_ENDPOINT`: client runtime error logger, default `/api/micro-app-errors`.
- `NEXT_PUBLIC_*_APP_ORIGIN`: remote origins for each demo app.

The registry metadata includes MCPApps capabilities, event bus channels, and observability configuration per app.

## Communication Model

The shell can pass stable context during mount:

- auth/session
- tenant
- theme
- locale
- feature flags
- permissions
- shell origin

After mount, communication should be async and event-driven. The SDK uses browser `CustomEvent` today. The same event contract can later be bridged to BroadcastChannel, WebSocket, Redis, SNS/SQS, Kafka, or an API gateway.

Avoid direct imports between micro apps. Avoid shared mutable business state. Keep global state small and platform-owned.

## Verify

```bash
pnpm build
pnpm lint
```

`pnpm build` builds the Next shell and all seven Vite micro apps. `pnpm lint` runs the shell TypeScript no-emit check.

## Key Files

- `apps/shell/lib/micro-apps.ts`: app registry metadata, ESM URLs, manifests, permissions, and component tags
- `apps/shell/app/dashboard/page.tsx`: registry dashboard
- `apps/shell/app/dashboard/[appName]/page.tsx`: Server Component route using Suspense
- `apps/shell/components/micro-app-island.tsx`: client-only runtime island
- `apps/shell/components/html-fragment-micro-app.tsx`: RSC HTML fragment renderer
- `apps/shell/components/iframe-micro-app.tsx`: iframe renderer for isolated apps
- `packages/platform-sdk/micro-app.ts`: framework-neutral loader SDK
- `packages/platform-sdk/registry.ts`: injectable registry SDK
- `apps/*/public/manifest.json`: deployable micro app manifest contract
- `apps/*/src/main.tsx`: Web Component registration
- `packages/platform-sdk/event-bus.ts`: CustomEvent-based platform event bus

## Add Another Micro App

1. Create a new Vite React app under `apps/your-app`.
2. Register a custom element in `src/main.tsx`.
3. Add `public/manifest.json`.
4. Add the app entry to `apps/shell/lib/micro-apps.ts`.
5. Add the package to the root `dev:all` and `build` filters if needed.

React, Vue, and Angular apps can either expose a Web Component or export a `mount(container, context)` function from their ESM entry.

Static, SSR, SSG, and ISR apps can be registered as `html-fragment` or `iframe` remotes. The included `knowledge` app demonstrates a static HTML fragment fetched and rendered through the shell's RSC path.

Micro app teams should import `defineMicroAppElement` from `@micro-frontend/platform-sdk/client`. Shell teams should use the registry and render contracts from `@micro-frontend/platform-sdk/shell` or `@micro-frontend/platform-sdk/next`.

Runtime failures are caught by the shell island fallback, emitted as `app:error`, and posted to the configured logger endpoint so the owning team can triage its remote independently.

## AI / MCPApps Mode

The AI Assistant app demonstrates MCPApps-style behavior:

- declares tools, resources, prompts, and event namespaces in registry metadata
- emits `mcp:tool-call-requested`
- emits `mcp:tool-call-completed`

In a normal web shell, apps can call their own BFF. In an AI host, a future adapter can provide context, data, and tool results through the same manifest and event contracts.
