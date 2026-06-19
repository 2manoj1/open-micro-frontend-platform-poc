import type { MicroAppFramework, MicroAppRenderingMode, MicroAppRuntime, MicroAppStatus } from '@micro-frontend/platform-sdk'

export interface ShellPlatformConfig {
  shellName: string
  registryUrl?: string
  registryRevalidateSeconds: number
  errorLogEndpoint: string
  localAppsEnabled: boolean
  devViteReactRefresh: boolean
  localAppOrigins: Record<string, string>
  localAppEntryPaths: Record<string, string>
  localAppStylePaths: Record<string, string>
  localAppManifestPaths: Record<string, string>
}

export interface LocalMicroAppDefinition {
  id: string
  name: string
  description: string
  domain: string
  icon: string
  accent: string
  status: MicroAppStatus
  framework: MicroAppFramework
  rendering: MicroAppRenderingMode[]
  runtime: MicroAppRuntime
  version: string
  owner: string
  permissions: string[]
  entryPath?: string
  manifestPath?: string
  aiNative?: boolean
  mcp?: {
    tools?: string[]
    resources?: string[]
    prompts?: string[]
    eventNamespaces?: string[]
  }
}

const localRuntimeMode =
  process.env.NEXT_PUBLIC_MICRO_APP_RUNTIME_MODE ?? (process.env.NODE_ENV === 'production' ? 'bundled' : 'dev')
const useBundledLocalApps = localRuntimeMode !== 'dev'

export const shellPlatformConfig: ShellPlatformConfig = {
  shellName: process.env.NEXT_PUBLIC_PLATFORM_SHELL_NAME ?? 'Open Micro Platform',
  registryUrl: process.env.MICRO_APP_REGISTRY_URL,
  registryRevalidateSeconds: readNumber(process.env.MICRO_APP_REGISTRY_REVALIDATE_SECONDS, 60),
  errorLogEndpoint: process.env.NEXT_PUBLIC_MICRO_APP_ERROR_ENDPOINT ?? '/api/micro-app-errors',
  localAppsEnabled: process.env.MICRO_APP_LOCAL_APPS_ENABLED !== 'false',
  devViteReactRefresh: process.env.NEXT_PUBLIC_MICRO_APP_VITE_REFRESH
    ? process.env.NEXT_PUBLIC_MICRO_APP_VITE_REFRESH !== 'false'
    : !useBundledLocalApps,
  localAppOrigins: {
    customer: process.env.NEXT_PUBLIC_CUSTOMER_APP_ORIGIN ?? 'http://127.0.0.1:5173',
    billing: process.env.NEXT_PUBLIC_BILLING_APP_ORIGIN ?? 'http://127.0.0.1:5174',
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_APP_ORIGIN ?? 'http://127.0.0.1:5175',
    admin: process.env.NEXT_PUBLIC_ADMIN_APP_ORIGIN ?? 'http://127.0.0.1:5176',
    'ai-assistant': process.env.NEXT_PUBLIC_AI_ASSISTANT_APP_ORIGIN ?? 'http://127.0.0.1:5177',
    'vue-commerce': process.env.NEXT_PUBLIC_VUE_COMMERCE_APP_ORIGIN ?? 'http://127.0.0.1:5178',
    'angular-ops': process.env.NEXT_PUBLIC_ANGULAR_OPS_APP_ORIGIN ?? 'http://127.0.0.1:5179',
    'design-system': process.env.NEXT_PUBLIC_DESIGN_SYSTEM_APP_ORIGIN ?? 'http://127.0.0.1:5180',
  },
  localAppEntryPaths: {
    customer: process.env.NEXT_PUBLIC_CUSTOMER_APP_ENTRY_PATH ?? localEntryPath('customer', 'tsx'),
    billing: process.env.NEXT_PUBLIC_BILLING_APP_ENTRY_PATH ?? localEntryPath('billing', 'tsx'),
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_APP_ENTRY_PATH ?? localEntryPath('analytics', 'tsx'),
    admin: process.env.NEXT_PUBLIC_ADMIN_APP_ENTRY_PATH ?? localEntryPath('admin', 'tsx'),
    'ai-assistant': process.env.NEXT_PUBLIC_AI_ASSISTANT_APP_ENTRY_PATH ?? localEntryPath('ai-assistant', 'tsx'),
    'vue-commerce': process.env.NEXT_PUBLIC_VUE_COMMERCE_APP_ENTRY_PATH ?? localEntryPath('vue-commerce', 'ts'),
    'angular-ops': process.env.NEXT_PUBLIC_ANGULAR_OPS_APP_ENTRY_PATH ?? localEntryPath('angular-ops', 'ts'),
    'design-system': process.env.NEXT_PUBLIC_DESIGN_SYSTEM_APP_ENTRY_PATH ?? localEntryPath('design-system', 'ts'),
  },
  localAppStylePaths: {
    customer: process.env.NEXT_PUBLIC_CUSTOMER_APP_STYLE_PATH ?? localStylePath('customer'),
    billing: process.env.NEXT_PUBLIC_BILLING_APP_STYLE_PATH ?? localStylePath('billing'),
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_APP_STYLE_PATH ?? localStylePath('analytics'),
    admin: process.env.NEXT_PUBLIC_ADMIN_APP_STYLE_PATH ?? localStylePath('admin'),
    'ai-assistant': process.env.NEXT_PUBLIC_AI_ASSISTANT_APP_STYLE_PATH ?? localStylePath('ai-assistant'),
    'vue-commerce': process.env.NEXT_PUBLIC_VUE_COMMERCE_APP_STYLE_PATH ?? localStylePath('vue-commerce'),
    'angular-ops': process.env.NEXT_PUBLIC_ANGULAR_OPS_APP_STYLE_PATH ?? localStylePath('angular-ops'),
    'design-system': process.env.NEXT_PUBLIC_DESIGN_SYSTEM_APP_STYLE_PATH ?? localStylePath('design-system'),
  },
  localAppManifestPaths: {
    customer: process.env.NEXT_PUBLIC_CUSTOMER_APP_MANIFEST_PATH ?? '/manifest.json',
    billing: process.env.NEXT_PUBLIC_BILLING_APP_MANIFEST_PATH ?? '/manifest.json',
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_APP_MANIFEST_PATH ?? '/manifest.json',
    admin: process.env.NEXT_PUBLIC_ADMIN_APP_MANIFEST_PATH ?? '/manifest.json',
    'ai-assistant': process.env.NEXT_PUBLIC_AI_ASSISTANT_APP_MANIFEST_PATH ?? '/manifest.json',
    'vue-commerce': process.env.NEXT_PUBLIC_VUE_COMMERCE_APP_MANIFEST_PATH ?? '/manifest.json',
    'angular-ops': process.env.NEXT_PUBLIC_ANGULAR_OPS_APP_MANIFEST_PATH ?? '/manifest.json',
    'design-system': process.env.NEXT_PUBLIC_DESIGN_SYSTEM_APP_MANIFEST_PATH ?? '/manifest.json',
  },
}

export const localMicroAppDefinitions: LocalMicroAppDefinition[] = [
  {
    id: 'customer',
    name: 'Customer App',
    description: 'Customer profiles, lifecycle health, and account activity.',
    domain: 'CRM',
    icon: 'Users',
    accent: 'emerald',
    status: 'Ready',
    framework: 'react',
    rendering: ['csr'],
    runtime: { type: 'web-component', tagName: 'micro-customer-app' },
    version: '1.0.0',
    owner: 'Growth Platform',
    permissions: ['customers:read', 'customers:write'],
    mcp: {
      resources: ['customer.profile', 'customer.timeline'],
      eventNamespaces: ['customer.*', 'mcp.resource.*'],
    },
  },
  {
    id: 'billing',
    name: 'Billing App',
    description: 'Invoices, payment states, and revenue operations.',
    domain: 'Finance',
    icon: 'CreditCard',
    accent: 'blue',
    status: 'Ready',
    framework: 'react',
    rendering: ['csr'],
    runtime: { type: 'web-component', tagName: 'micro-billing-app' },
    version: '1.0.0',
    owner: 'Revenue Platform',
    permissions: ['billing:read', 'payments:write'],
    mcp: {
      tools: ['billing.createInvoice', 'billing.retryPayment'],
      resources: ['billing.invoice'],
      eventNamespaces: ['billing.*', 'mcp.tool.*'],
    },
  },
  {
    id: 'analytics',
    name: 'Analytics App',
    description: 'Product metrics, traffic trends, and event telemetry.',
    domain: 'Insights',
    icon: 'ChartNoAxesCombined',
    accent: 'violet',
    status: 'Ready',
    framework: 'react',
    rendering: ['csr'],
    runtime: { type: 'web-component', tagName: 'micro-analytics-app' },
    version: '1.0.0',
    owner: 'Data Platform',
    permissions: ['analytics:read'],
    mcp: {
      resources: ['analytics.dashboard', 'analytics.funnel'],
      eventNamespaces: ['analytics.*', 'mcp.resource.*'],
    },
  },
  {
    id: 'admin',
    name: 'Admin App',
    description: 'Tenant controls, feature rollout, and platform governance.',
    domain: 'Operations',
    icon: 'ShieldCheck',
    accent: 'fuchsia',
    status: 'Beta',
    framework: 'react',
    rendering: ['csr'],
    runtime: { type: 'web-component', tagName: 'micro-admin-app' },
    version: '0.9.0',
    owner: 'Platform Admin',
    permissions: ['admin:read', 'flags:write'],
    mcp: {
      tools: ['admin.auditPolicy', 'admin.updateFeatureFlag'],
      resources: ['admin.tenant', 'admin.auditLog'],
      eventNamespaces: ['admin.*', 'mcp.tool.*'],
    },
  },
  {
    id: 'ai-assistant',
    name: 'AI Assistant App',
    description: 'Copilot-style triage, summarization, and workflow guidance.',
    domain: 'AI',
    icon: 'Bot',
    accent: 'cyan',
    status: 'Preview',
    framework: 'react',
    rendering: ['csr'],
    runtime: { type: 'web-component', tagName: 'micro-ai-assistant-app' },
    version: '0.8.0',
    owner: 'AI Platform',
    permissions: ['ai:invoke', 'knowledge:read'],
    aiNative: true,
    mcp: {
      tools: ['assistant.summarizeCase', 'assistant.planWorkflow', 'assistant.invokeTool'],
      resources: ['knowledge.article', 'customer.profile', 'billing.invoice'],
      prompts: ['support-triage', 'release-risk-review'],
      eventNamespaces: ['ai.*', 'mcp.tool.*', 'mcp.prompt.*', 'mcp.resource.*'],
    },
  },
  {
    id: 'vue-commerce',
    name: 'Vue Commerce App',
    description: 'Vue 3 commerce runtime island for orders, revenue, and segment operations.',
    domain: 'Commerce',
    icon: 'ShoppingCart',
    accent: 'green',
    status: 'Ready',
    framework: 'vue',
    rendering: ['csr'],
    runtime: { type: 'web-component', tagName: 'micro-vue-commerce-app' },
    version: '1.0.0',
    owner: 'Commerce Platform',
    permissions: ['commerce:read', 'orders:read'],
    mcp: {
      tools: ['commerce.publishInsight'],
      resources: ['commerce.segment', 'commerce.order'],
      eventNamespaces: ['commerce.*', 'mcp.resource.*'],
    },
  },
  {
    id: 'angular-ops',
    name: 'Angular Operations App',
    description: 'Angular 22 operations runtime island for incidents, workflows, and execution health.',
    domain: 'Operations',
    icon: 'Activity',
    accent: 'red',
    status: 'Ready',
    framework: 'angular',
    rendering: ['csr'],
    runtime: { type: 'web-component', tagName: 'micro-angular-ops-app' },
    version: '1.0.0',
    owner: 'Operations Platform',
    permissions: ['ops:read', 'workflows:write'],
    mcp: {
      tools: ['ops.publishWorkflow', 'ops.remediateIncident'],
      resources: ['ops.incident', 'ops.workflow'],
      eventNamespaces: ['ops.*', 'mcp.tool.*'],
    },
  },
  {
    id: 'design-system',
    name: 'Design System Contract',
    description: 'Shell-owned Tailwind-ready design tokens consumed once across every micro app.',
    domain: 'Platform',
    icon: 'Palette',
    accent: 'blue',
    status: 'Ready',
    framework: 'web-component',
    rendering: ['csr'],
    runtime: { type: 'web-component', tagName: 'micro-design-system-app' },
    version: '1.0.0',
    owner: 'Platform Design',
    permissions: ['design-system:read'],
    mcp: {
      resources: ['design.tokens', 'design.contract'],
      eventNamespaces: ['design-system.*', 'theme.*'],
    },
  },
  {
    id: 'knowledge',
    name: 'Knowledge Center',
    description: 'Static SSG content fetched by the shell and rendered through an RSC-compatible HTML fragment.',
    domain: 'Content',
    icon: 'BookOpen',
    accent: 'slate',
    status: 'Ready',
    framework: 'static',
    rendering: ['rsc', 'ssg', 'static'],
    runtime: {
      type: 'html-fragment',
      url: '/static-micro-apps/knowledge.html',
      cache: 'force-cache',
      revalidate: 300,
    },
    version: '1.0.0',
    owner: 'Content Platform',
    permissions: ['content:read'],
    entryPath: '/static-micro-apps/knowledge.html',
    manifestPath: '/static-micro-apps/knowledge.html',
    mcp: {
      resources: ['knowledge.article', 'knowledge.runbook'],
      prompts: ['explain-platform-contract'],
      eventNamespaces: ['content.*', 'mcp.resource.*'],
    },
  },
]

function localEntryPath(appId: string, extension: 'ts' | 'tsx'): string {
  return useBundledLocalApps ? `/${appId}-app.js` : `/src/main.${extension}`
}

function localStylePath(appId: string): string {
  return useBundledLocalApps ? `/${appId}-app.css` : ''
}

function readNumber(value: string | undefined, fallback: number): number {
  if (!value) return fallback
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}
