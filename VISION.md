# Vision: Future-Ready Micro Frontends for 2030

This project explores a simple idea: the next generation of frontend platforms should not be coupled to one bundler, one framework, one deployment pipeline, or one runtime surface.

Modern product teams are moving toward hybrid frontends:

- Web apps that run inside a normal browser shell.
- Widgets that can run inside AI chat surfaces.
- Assistant apps that receive context from a chatbot or MCP host.
- Static, SSR, SSG, ISR, RSC, and CSR experiences living together.
- Teams that own their UI, BFF, APIs, data, telemetry, and release cycle.

The shell should compose these experiences. It should not own every app's build.

## Architecture Principles

1. **Manifest-first discovery**
   Every app is discovered through metadata: id, version, owner, runtime URL, permissions, capabilities, rendering modes, and MCPApps declarations.

2. **No build-time coupling**
   The shell does not compile remote apps into its own bundle. Apps can be loaded through browser-native Web Components, ESM mount functions, HTML fragments, or iframes.

3. **Framework-neutral app ownership**
   A micro app can be React, Vue, Angular, Lit, Stencil, static HTML, SSR content, or a hosted isolated experience.

4. **Minimal global state**
   The shell can pass stable platform context such as auth, theme, locale, tenant, and feature flags. Business state should remain app-owned or event-driven.

5. **Async event fabric**
   Shell-to-app and app-to-app communication should use asynchronous events. Local browser events work for in-page communication. A production platform can bridge those events to Redis, SNS/SQS, Kafka, WebSocket, BroadcastChannel, or an API gateway.

6. **AI-native by design**
   Apps should be able to declare tools, resources, prompts, and event namespaces so they can run in a normal web shell or inside an MCPApps-compatible AI host.

7. **Failure isolation**
   One broken app should not take down the shell. Runtime errors should render a fallback, emit an `app:error` event, and log enough metadata for the owning team.

8. **Self-deployable teams**
   Each app team owns deployment, rollback, BFF, observability, and release cadence. The platform team owns registry, policy, composition, auth context, and shared event contracts.

## Why Not Webpack Module Federation?

Webpack Module Federation is powerful when teams want runtime module sharing inside a webpack-oriented system. This project is aimed at a different future:

- Runtimes should not require webpack.
- Micro apps should be deployable as URLs and manifests.
- Next.js RSC, static fragments, iframe isolation, and non-React apps should be first-class.
- AI hosts should be able to discover app capabilities without understanding a bundler graph.

This is not anti-Module-Federation. It is a standards-first alternative for teams that value independent deployment, browser-native contracts, and AI-native metadata over shared build runtime coupling.

## Why Not Only single-spa?

single-spa is a mature orchestration layer for mounting multiple frontend apps in a browser. This project borrows the spirit of independent apps, but focuses on:

- Next.js App Router and RSC compatibility.
- Server-rendered HTML fragment remotes.
- Static/SSG/ISR content as micro apps.
- MCPApps-style tool/resource/prompt metadata.
- A publishable SDK split for shell, client, registry, event bus, and observability.
- A platform architecture where the app registry can become the control plane.

## MCPApps Direction

An MCPApps-capable micro app should be able to declare:

- Tools it can execute.
- Resources it can expose.
- Prompts it can provide.
- Event namespaces it emits or consumes.
- Permissions and owner metadata.

When launched in a browser shell, the app can fetch from its own BFF and render normal UI. When launched in a chatbot or AI host, the host can provide context, data, and tool responses through the same manifest and event contracts.

That is the main long-term idea: a micro app becomes a portable capability surface, not only a route inside a website.

## 2030 Readiness Checklist

- Browser-native runtime contracts.
- No required webpack Module Federation.
- RSC, SSR, SSG, ISR, CSR, static, and iframe paths.
- Async events instead of shared mutable business state.
- Configurable registry, app origins, logging, and cache policy.
- App-owned BFF and deployment lifecycle.
- Shell-owned policy, navigation, auth context, theme, and composition.
- MCPApps-style capability metadata.
- Error fallback and observability by default.
- Publishable TypeScript SDK with subpath exports.

This POC is not the final product. It is a working foundation for an open-source library that can grow into a standards-first micro frontend platform.
