# Future-Ready Micro Frontend Platform Architecture (2026)

This document provides a comprehensive technical analysis of the **Open Micro Frontend Platform POC**. It examines the underlying architecture, the framework-neutral design system, the dynamic loading mechanism, asynchronous event-driven communication, error isolation strategies, and its unique integration with the **Model Context Protocol (MCP)** for AI-native execution.

---

## 🏗️ 1. Architecture Overview & Core Philosophy

Rather than relying on build-time coupling or proprietary bundler features (like Webpack Module Federation), this platform centers on **browser-native standards** and **manifest-driven orchestration**. 

```mermaid
graph TD
    subgraph Host Shell [Super App Shell - Next.js 16 / React 19]
        Registry[Async App Registry]
        Router[App Router Server Routing]
        Island[Suspense client-only Island]
        RscRender[RSC HTML Fragment Renderer]
        IframeRender[Iframe Renderer]
    end

    subgraph Platform SDK [@openmf/core]
        ClientSDK[client.ts / web-component wrappers]
        ShellSDK[shell.ts / loader & state machine]
        EventBus[event-bus.ts / CustomEvent fabric]
        McpApp[mcp-app.ts / MCP Apps bridge]
    end

    subgraph Self-Deployable Micro Apps [Independently Served Remotes]
        Customer[Customer CRM App - React / Port 5173]
        Billing[Billing App - React / Port 5174]
        Analytics[Analytics App - React / Port 5175]
        VueComm[Vue Commerce App - Vue 3 / Port 5178]
        AngOps[Angular Operations App - Angular 22 / Port 5179]
        StaticHTML[Knowledge Center - Static HTML Fragment]
    end

    Registry -->|Resolves metadata| ShellSDK
    ShellSDK -->|mounts web-component/module| Island
    ShellSDK -->|fetches HTML| RscRender
    ShellSDK -->|embeds| IframeRender

    Customer -->|Register Custom Element| ClientSDK
    Billing -->|Register Custom Element| ClientSDK
    VueComm -->|Register Custom Element| ClientSDK
    AngOps -->|Register Custom Element| ClientSDK

    ClientSDK -.->|Emits/Subscribes Events| EventBus
    Island -.->|Observes Events| EventBus
    
    StaticHTML -->|Fetched by Server Component| RscRender
```

### Core Philosophy
1. **Zero Bundler Coupling**: Apps can be built with Vite, Webpack, Esbuild, or Rspack. The shell consumes them via standard ES module imports or server-side fetches.
2. **Framework Agnosticism**: Micro apps run on React, Vue, Angular, Lit, Stencil, or even plain static HTML fragments.
3. **Decoupled Operations**: Each micro app team owns its deployment cycle, backend service (BFF), and release cadences. The shell only coordinates navigation, global authorization context, and overall policy.
4. **AI-Native Extension Path**: App metadata exposes tools, prompts, resources, and permissions, allowing the same micro app to be projected into an AI chat surface (e.g., ChatGPT, Claude) as an interactive Model Context Protocol (MCP) app.

---

## 📦 2. Platform SDK Structure (`@openmf/core`)

The SDK is packaged under `packages/platform-sdk` and exposes specialized subpaths depending on the consumer role (shell vs. client app):

| Subpath Entrypoint | Primary Responsibility | Key APIs |
| :--- | :--- | :--- |
| `@openmf/core/client` | Micro app initialization, registration, and communication. | `defineMicroAppElement()`, `emitMcpAppEvent()`, `registerWebMcpTool()`, `connectOfficialMcpAppRuntime()` |
| `@openmf/core/shell` | Client-side mounting orchestration, style management, and readiness checks. | `mountMicroApp()`, `waitForMicroAppReady()` |
| `@openmf/core/next` | Server-safe Next.js helpers, server rendering types. | Server-safe Next configuration transpilation setups |
| `@openmf/core/registry` | Centralized registry fetching, injectable resolvers, and schema validation. | `resolveMicroAppRegistry()`, `createMicroAppRegistry()`, `validateMicroAppConfig()` |
| `@openmf/core/event-bus` | Platform-wide event broker. | `eventBus` (global singleton), `PlatformEvents` |
| `@openmf/core/mcp-app` | Bridge communication with external AI hosts. | `createMcpAppBridge()`, `createMcpAppHtml()`, `createMcpAppResourceDescriptor()` |
| `@openmf/core/runtime-state` | Multi-phase loading state indicators. | `createMicroAppRuntimeState()`, `isMicroAppRuntimeBusy()` |
| `@openmf/core/observability` | Normalized error capturing and logging interfaces. | `reportMicroAppError()`, `createFetchLogger()` |

---

## 🔄 3. Integration & Rendering Models

The platform supports four different micro app runtime models, selected via the `runtime.type` configuration:

### A. Web Component (`web-component`)
* **Usage**: Ideal for complex SPA frameworks (React, Vue, Angular).
* **How it works**: The shell loads the ESM entrypoint, which registers a custom element (e.g., `<micro-billing-app>`). The shell creates the element, sets attributes (`data-tenant`, `data-version`, etc.), and appends it to the DOM.
* **SDK Helper**: 
  ```ts
  import { defineMicroAppElement } from '@openmf/core/client';
  
  defineMicroAppElement('micro-customer-app', {
    mount(host, context) {
      const root = ReactDOM.createRoot(host);
      root.render(<CustomerApp context={context} />);
      
      return () => {
        // Safe deferred unmounting to prevent StrictMode clashes
        setTimeout(() => root.unmount(), 0);
      };
    }
  });
  ```

### B. Module (`module`)
* **Usage**: For lightweight JS applications or custom scripts exporting entry points.
* **How it works**: The shell dynamically imports the remote ESM bundle (`import(entryUrl)`) and calls the exported `mount` function:
  ```ts
  export async function mount(container: HTMLElement, context: MicroAppContext) {
    container.innerHTML = `<div>Hello ${context.app.name}</div>`;
    return {
      unmount: () => { container.innerHTML = ''; }
    };
  }
  ```

### C. HTML Fragment (`html-fragment`)
* **Usage**: For static sites, SSG, SSR, or ISR fragments fetched server-side.
* **How it works**: The Next.js shell Server Component fetches the HTML fragment from the remote during React Server Components (RSC) execution, sanitizes it (or treats it as trusted), and streams it within a React `<Suspense>` boundary.
* **Static Site in RSC Example**: The *Knowledge Center* app in the POC renders a static HTML file served at `/static-micro-apps/knowledge.html` directly into the RSC layout, requiring zero client-side JS runtime footprint to display.

### D. Iframe (`iframe`)
* **Usage**: For high-risk, untrusted, or legacy applications that require strict security sandboxing.
* **How it works**: The shell wraps the remote URL in a fully sandboxed iframe (`<iframe sandbox="...">`), routing communications exclusively over structured JSON-RPC messages via `postMessage`.

---

## 📣 4. Asynchronous Communication Fabric

Communication inside the platform is built on an **event-driven, async architecture** using browser-native `CustomEvent` dispatching. Apps do not import code or share mutable business state.

```typescript
import { eventBus, PlatformEvents } from '@openmf/core/event-bus';

// 1. App-to-App / App-to-Shell publishing
eventBus.emit(PlatformEvents.SHOW_NOTIFICATION, 'billing-app', {
  message: 'Invoice paid successfully!',
  type: 'success'
});

// 2. Subscribing to platform events
const unsubscribe = eventBus.on(PlatformEvents.THEME_CHANGED, (event) => {
  const newTheme = event.payload.theme;
  updateTheme(newTheme);
});
```

### Event Routing
- **Local Tab**: Inside a single page, events are dispatched on the global `window` object as `'platform-event'` CustomEvents.
- **Enterprise Expansion (Production)**: Because the event transport is decoupled from the payload schema, the SDK event bus can easily bridge browser events to `BroadcastChannel` (cross-tab), WebSockets, or a cloud message gateway (Redis, Kafka, SNS/SQS) without modifying micro app code.

---

## 🤖 5. AI-Native & MCP (Model Context Protocol) Integration

The most forward-looking feature of this POC is its alignment with the **Model Context Protocol (MCP)**. Each micro app manifest acts as a capability surface declaration.

### Manifest Capabilities
A micro app declares its tools, prompts, resources, and namespaces:
```json
{
  "id": "ai-assistant",
  "name": "AI Assistant App",
  "aiNative": true,
  "mcp": {
    "tools": ["assistant.summarizeCase", "assistant.planWorkflow"],
    "resources": ["knowledge.article", "customer.profile"],
    "prompts": ["support-triage"],
    "eventNamespaces": ["ai.*", "mcp.tool.*"]
  }
}
```

### AI-Native Runtime Paths
The AI Assistant micro app demonstrates three AI integration patterns:
1. **Chrome Built-In AI**: Uses local `window.LanguageModel` (Gemini Nano) directly in the browser for edge-side client intelligence.
2. **WebMCP browser-agent tools**: Registers interactive tools directly with the browser agent through `document.modelContext` if the agent supports WebMCP.
3. **MCP Apps Standalone Resource**: Serves the app bundle at `/api/mcp/apps/{appId}/resource` as a standalone widget. This can be embedded inside ChatGPT or Claude using iframe sandboxing. The widget communicates with the parent LLM session using JSON-RPC `postMessage` requests (e.g., requesting user completions, calling tools, or pulling resources).

---

## 🛡️ 6. Failure Isolation & Observability

To prevent a single corrupted remote from bringing down the entire platform shell, the POC implements aggressive error isolation:

1. **Vite React Refresh Isolation**: Vite's React Fast Refresh preamble is loaded isolated-per-remote to prevent development hot-module replacement (HMR) variables from leaking globally.
2. **Runtime Error Boundary**: Client islands wrap the custom element initialization in window-level error event listeners (`error` and `unhandledrejection`). If an app throws a runtime crash, the shell isolates the failure, unmounts the element, and displays a controlled fallback.
3. **Server-Side Fallback**: Server-rendered HTML fragments are wrapped in React `Suspense` and server error boundaries. If the fetch for a static segment fails or times out, the shell route displays a failure indicator while keeping the header, sidebar, and other apps intact.
4. **Structured Logs**: Failures emit an `app:error` event and log details (app ID, source file, stack trace, and owner) to a central observability endpoint `/api/micro-app-errors`.

---

## 🛠️ 7. Guide: Creating and Registering a Future Micro App

To demonstrate the extensible nature of the SDK, here is a step-by-step guide for creating and registering a new micro app.

### Step 1: Initialize the Micro App (Vite React example)
Create a new directory `apps/orders/` and add a `package.json` matching the workspace:
```json
{
  "name": "@micro-frontend/orders-app",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --port 5181",
    "build": "vite build",
    "preview": "vite preview --port 5181"
  },
  "dependencies": {
    "react": "19.2.7",
    "react-dom": "19.2.7",
    "@openmf/core": "workspace:*"
  },
  "devDependencies": {
    "vite": "8.0.16"
  }
}
```

### Step 2: Configure `vite.config.ts` for Library Output
Configure Vite to output an ES module bundle without bundling React, leveraging the shell's runtime globals or exporting a Web Component directly:
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.tsx',
      formats: ['es'],
      fileName: 'orders-app'
    },
    minify: 'esbuild'
  }
});
```

### Step 3: Write the Custom Element Entry (`src/main.tsx`)
Use the SDK client wrapper to register the app:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineMicroAppElement } from '@openmf/core/client';
import { OrdersDashboard } from './OrdersDashboard';
import './app.css';

defineMicroAppElement('micro-orders-app', {
  mount(host, context) {
    const root = ReactDOM.createRoot(host);
    root.render(<OrdersDashboard context={context} />);
    
    return () => {
      setTimeout(() => root.unmount(), 0);
    };
  }
});
```

### Step 4: Add the Deployable Manifest (`public/manifest.json`)
Provide the platform metadata contract:
```json
{
  "id": "orders",
  "name": "Orders App",
  "version": "1.0.0",
  "owner": "Logistics Team",
  "framework": "react",
  "entryUrl": "/orders-app.js",
  "manifestUrl": "/manifest.json",
  "runtime": {
    "type": "web-component",
    "tagName": "micro-orders-app"
  },
  "rendering": ["csr"],
  "permissions": ["orders:read", "orders:write"],
  "mcp": {
    "tools": ["orders.list", "orders.details"],
    "resources": ["orders.receipt"],
    "eventNamespaces": ["orders.*"]
  }
}
```

### Step 5: Register the App in the Shell Registry
Add the new metadata definition to the static configurations in [platform-config.ts](file:///Users/apple/Downloads/micro-frontend-platform-poc/apps/shell/lib/platform-config.ts):
```ts
// 1. Add port mapping to localAppOrigins / localAppEntryPaths
orders: process.env.NEXT_PUBLIC_ORDERS_APP_ORIGIN ?? 'http://127.0.0.1:5181'

// 2. Append the definition to the localMicroAppDefinitions array:
{
  id: 'orders',
  name: 'Orders App',
  description: 'Logistics operations, order lists, and shipments.',
  domain: 'Logistics',
  icon: 'Package',
  accent: 'indigo',
  status: 'Ready',
  framework: 'react',
  rendering: ['csr'],
  runtime: { type: 'web-component', tagName: 'micro-orders-app' },
  version: '1.0.0',
  owner: 'Logistics Team',
  permissions: ['orders:read', 'orders:write'],
  mcp: {
    tools: ['orders.list', 'orders.details'],
    resources: ['orders.receipt'],
    eventNamespaces: ['orders.*']
  }
}
```

Add your app to the root `package.json` scripts (`dev:all`, `build`) so it participates in standard workspace commands.
Run `pnpm install` and `pnpm dev:all` to see your new micro app rendered, dynamic island-mounted, and completely integrated into the platform dashboard!

---

## 🚀 8. Verification Results

This setup was verified locally with the following outcomes:
* **Production Build Integrity**: `pnpm build` successfully compiles all modules, including Next.js, the shared `@openmf/core` platform SDK, and all micro apps (React, Vue, Angular, Design-System).
* **Workspace Lints**: `pnpm lint` yields zero type errors across all packages.
* **E2E Playwright Sweep**: All 12 dynamic routes (including custom element mount points for React, Vue, Angular, static HTML fragments, and dashboard views) loaded and completed successfully within screenshots suite tests:
  ```text
  Running 12 tests using 1 worker
  [1/12] tests/screenshots.spec.ts:20:9 › Platform Screenshots › /
  ...
  [12/12] tests/screenshots.spec.ts:20:9 › Platform Screenshots › /dashboard/knowledge
    12 passed (10.2s)
  ```
