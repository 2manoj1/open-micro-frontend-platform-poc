# Micro Frontend Platform POC - MVP Summary

## Status

This repository is now an MVP-ready proof of concept for a future-ready micro frontend platform:

- Next.js `16.2.9` shell with App Router, RSC routes, Suspense boundaries, and client runtime islands
- Publishable SDK package under `packages/platform-sdk`
- Seven independently runnable Vite micro apps across React, Vue, and Angular
- Static HTML fragment remote rendered through the shell's RSC path
- No webpack Module Federation or build-time app coupling
- Framework-neutral runtime contracts for React, Vue, Angular, static, SSR, SSG, ISR, iframe, and custom remotes
- AI-native app slot demonstrated by the AI Assistant micro app
- MCPApps-compatible direction through manifest-first discovery, injectable runtime registries, and MCP-oriented event bus channels
- Configurable runtime error fallback and logging path for every independently owned app
- Open-source vision docs for why this exists beyond single-spa and webpack Module Federation

## What Runs

The shell registry currently includes:

| App | Port / Source | Runtime | Rendering |
|---|---:|---|---|
| Customer App | `5173` | Web Component | CSR |
| Billing App | `5174` | Web Component | CSR |
| Analytics App | `5175` | Web Component | CSR |
| Admin App | `5176` | Web Component | CSR |
| AI Assistant App | `5177` | Web Component | CSR |
| Vue Commerce App | `5178` | Web Component | CSR |
| Angular Operations App | `5179` | Web Component | CSR |
| Knowledge Center | Shell static asset | HTML Fragment | RSC / SSG / Static |

Each micro app owns its build, styles, manifest, runtime server, and deployment lifecycle. The shell only needs registry metadata and runtime URLs.

## SDK Shape

The reusable platform SDK is split by consumer:

- `@micro-frontend/platform-sdk/client`: micro app helpers such as `defineMicroAppElement` and event emission.
- `@micro-frontend/platform-sdk/shell`: shell runtime helpers for loading, mounting, registry resolution, and HTML fragments.
- `@micro-frontend/platform-sdk/next`: server-safe Next.js facade for shell teams.
- `@micro-frontend/platform-sdk/registry`: injectable registry sources for inline, async, local, or remote JSON manifests.
- `@micro-frontend/platform-sdk/event-bus`: browser-native CustomEvent bus.

The SDK is prepared for npm publishing later. The current package emits ESM and TypeScript declarations to `dist/`, supports subpath exports, and passes `pnpm --filter @micro-frontend/platform-sdk pack --dry-run`.

## Communication Model

The shell can pass stable context such as auth, tenant, theme, locale, feature flags, permissions, and shell origin at mount time.

After mount, communication is async and event-driven:

- shell to app
- app to shell
- app to app
- app to AI host
- AI host to app

The MVP uses browser `CustomEvent`. A production deployment can bridge the same event schema to BroadcastChannel, WebSocket, Redis, SNS/SQS, Kafka, or an API gateway.

## Architecture Proof Points

| Requirement | MVP Status | Implementation |
|---|---|---|
| Self-deployable apps | Done | Each remote can run on its own Vite server or be deployed to an app domain/CDN |
| No webpack MFE | Done | Runtime ESM, Web Components, HTML fragments, and iframe contracts |
| React/Vue/Angular capable | Done | Browser-native custom element and `mount(container, context)` contracts |
| RSC compatible | Done | Next.js Server Component route fetches and renders trusted HTML fragments |
| SSR/SSG/ISR path | Done | `html-fragment` remotes can be fetched server-side with cache/revalidate policy |
| CSR path | Done | Client dynamic island mounts runtime web components or ESM modules |
| AI-native app support | Done | AI Assistant micro app is registered, served, mounted, and styled |
| Framework proof | Done | React, Vue 3, and Angular 22 remotes all mount through the same shell SDK path |
| MCPApps direction | Done | Manifest-first registry, tools, resources, prompts, event namespaces, permissions, versions, URLs, and injectable discovery |
| Error isolation | Done | Runtime island and HTML fragment fallback surfaces log failures without taking down the shell |
| Configurable platform | Done | Registry URL, app origins, registry refresh, local apps, Vite refresh, and log endpoint are centralized |
| Publishable SDK direction | Done | Workspace SDK has exports, build output, declarations, and dry-run package validation |
| Open-source presentation polish | Done | Shell, dashboard, detail pages, and micro apps use a consistent MVP visual system |
| Vision and FAQ | Done | Root docs explain 2030 readiness, MCPApps direction, single-spa comparison, and MFE comparison |

## Verification

Commands verified locally:

```bash
pnpm lint
pnpm build
pnpm --filter @micro-frontend/platform-sdk pack --dry-run
```

Runtime route sweep verified:

- `/`
- `/dashboard`
- `/dashboard/customer`
- `/dashboard/billing`
- `/dashboard/analytics`
- `/dashboard/admin`
- `/dashboard/ai-assistant`
- `/dashboard/knowledge`

The sweep confirmed expected UI text, visible app rendering, no visible Next.js error overlay, and no material browser console errors.

## Production Direction

For a production launch, replace local URLs with immutable versioned manifests from an app registry service. The registry can be backed by DynamoDB, Edge Config, Redis, S3, or a custom control plane. Each app team can independently ship its UI, BFF, APIs, observability, and rollback strategy while the shell owns composition, policy, navigation, auth context, and platform-level services.

The next natural step is to extract package docs, examples, and API references so `packages/platform-sdk` can become an npm package without changing the current runtime architecture.
