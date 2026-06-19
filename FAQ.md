# FAQ

## Is this architecture useful for 2030?

It is designed for the direction frontend platforms are moving: hybrid rendering, independent deployments, AI-native workflows, and apps that can run outside a normal browser shell. No architecture can guarantee 2030, but browser-native contracts, manifests, async events, and framework neutrality are safer long-term bets than coupling every team to one bundler runtime.

## Can this become a reusable npm package?

Yes. The SDK already has a publishable shape:

- ESM output.
- TypeScript declarations.
- Subpath exports.
- Client SDK.
- Shell SDK.
- Next.js facade.
- Registry helpers.
- Event bus.
- Observability helpers.

Before a public npm launch, the next steps are API review, semantic versioning policy, examples, tests, security notes, and a stable package name.

## Why build this when webpack Module Federation exists?

Module Federation solves runtime module sharing for webpack-based systems. This project solves a different problem: independently deployed apps discovered by manifest, loaded through standards-friendly runtime contracts, and able to support RSC, static fragments, iframes, Web Components, ESM modules, and MCPApps metadata.

Use Module Federation when shared runtime modules are the product goal. Use this pattern when independent deployment, cross-framework support, and AI-host portability matter more.

## Why build this when single-spa exists?

single-spa is excellent browser-side orchestration. This project focuses on a broader platform shape:

- Next.js shell with RSC support.
- HTML fragment remotes for SSR, SSG, ISR, and static content.
- Manifest-driven app registry.
- MCPApps-style capabilities.
- Event bus and observability contracts inside a publishable SDK.
- A path for apps to run in both browser shells and AI hosts.

## Does every micro app need to be a Web Component?

No. Web Components are the preferred default because React, Vue, Angular Elements, Lit, Stencil, and plain JavaScript can all target them. The SDK also supports ESM `mount(container, context)`, HTML fragments, and iframes.

## How does shell-to-app communication work?

The shell can pass stable context during mount:

- app metadata
- shell origin
- auth/tenant/theme attributes
- permissions
- runtime configuration

For ongoing communication, the platform should use async events instead of direct imports or shared mutable business state.

## How does micro-app-to-micro-app communication work?

Apps emit events through the SDK event bus. In the browser this uses `CustomEvent`. At production scale, the same contract can be bridged to BroadcastChannel, WebSocket, Redis, SNS/SQS, Kafka, or an API gateway. The event contract stays stable even when the transport changes.

## What global state should the shell own?

Keep it minimal:

- auth session
- tenant
- theme
- locale
- feature flags
- navigation context
- platform notifications

Business state should usually stay inside the app that owns the domain, or move through explicit events/API calls.

## How does this support MCPApps?

Each app can declare MCPApps-style capabilities in its manifest:

- tools
- resources
- prompts
- event namespaces
- permissions

The same app can run in the normal shell or inside an AI host that understands those capabilities. In a chatbot host, the host can provide context and data. In a normal web app, the app can use its own BFF.

## Can an app run inside ChatGPT, Claude, or another AI host?

That is the vision. This POC does not claim direct production integration with every AI host today. It prepares the contract: manifest metadata, tools, resources, prompts, permissions, and async events. A future MCPApps adapter can map those contracts into any host that supports that style of app runtime.

## How are runtime errors handled?

The shell catches remote loading failures and renders a fallback surface. It emits `app:error` and posts structured logs to the configured endpoint. HTML fragment failures also render a server-side fallback. The owning team gets app id, source, owner, runtime, entry URL, and error details.

## Does this replace BFFs?

No. Each app can still own its BFF. The shell should not become a mega-BFF. The shell can pass auth/platform context; the app can fetch domain data from its own BFF or receive host-provided context in an AI runtime.

## Is this production ready?

It is MVP/POC ready. For production, add:

- registry service with immutable versioned manifests
- auth and permission enforcement
- content security policy and URL allowlists
- signed manifests
- event schema validation
- automated tests
- release/version policy
- observability backend
- app onboarding CLI or templates

## What is the simplest mental model?

The shell is a platform. Micro apps are self-deployable capability surfaces. The registry is the control plane. The event bus is the communication fabric. MCPApps metadata makes those surfaces available to both web users and AI hosts.
