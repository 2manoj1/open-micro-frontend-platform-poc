import {
  createMicroAppRegistry,
  fetchMicroAppRegistry,
  type MicroAppConfig,
  type MicroAppRegistry,
} from '@micro-frontend/platform-sdk'
import { localMicroAppDefinitions, shellPlatformConfig, type LocalMicroAppDefinition } from '@/lib/platform-config'

export async function getMicroAppRegistry(): Promise<MicroAppRegistry> {
  const localApps = shellPlatformConfig.localAppsEnabled ? localMicroAppDefinitions.map(toMicroAppConfig) : []

  if (!shellPlatformConfig.registryUrl) {
    return createMicroAppRegistry(localApps)
  }

  const remoteApps = await fetchMicroAppRegistry(shellPlatformConfig.registryUrl, {
    next: { revalidate: shellPlatformConfig.registryRevalidateSeconds },
  })

  return createMicroAppRegistry([...localApps, ...remoteApps])
}

export async function getMicroApps(): Promise<MicroAppConfig[]> {
  return (await getMicroAppRegistry()).list()
}

export async function getMicroApp(appName: string): Promise<MicroAppConfig | undefined> {
  return (await getMicroAppRegistry()).get(appName)
}

function toMicroAppConfig(definition: LocalMicroAppDefinition): MicroAppConfig {
  const origin = shellPlatformConfig.localAppOrigins[definition.id]
  const entryPath = shellPlatformConfig.localAppEntryPaths[definition.id] ?? definition.entryPath ?? '/src/main.tsx'
  const stylePath = shellPlatformConfig.localAppStylePaths[definition.id]
  const manifestPath = shellPlatformConfig.localAppManifestPaths[definition.id] ?? definition.manifestPath ?? '/manifest.json'
  const entryUrl = resolveAppUrl(definition, origin, entryPath)
  const styleUrls = stylePath ? [resolveAppUrl(definition, origin, stylePath)] : undefined
  const manifestUrl = resolveAppUrl(definition, origin, manifestPath)

  return {
    id: definition.id,
    name: definition.name,
    description: definition.description,
    domain: definition.domain,
    icon: definition.icon,
    accent: definition.accent,
    status: definition.status,
    framework: definition.framework,
    rendering: definition.rendering,
    entryUrl,
    manifestUrl,
    runtime: definition.runtime,
    styleUrls,
    version: definition.version,
    owner: definition.owner,
    permissions: definition.permissions,
    capabilities: {
      aiNative: definition.aiNative,
      mcpApps: {
        enabled: Boolean(definition.mcp),
        protocolVersion: '2026-06-18-demo',
        manifestUrl,
        tools: definition.mcp?.tools ?? [],
        resources: definition.mcp?.resources ?? [],
        prompts: definition.mcp?.prompts ?? [],
        eventNamespaces: definition.mcp?.eventNamespaces ?? [],
      },
      eventBus: {
        channels: definition.mcp?.eventNamespaces ?? [`${definition.id}.*`],
      },
      observability: {
        errorEndpoint: shellPlatformConfig.errorLogEndpoint,
        logLevel: 'info',
      },
    },
    dev:
      definition.runtime.type === 'web-component' && definition.framework === 'react'
        ? { viteReactRefresh: shellPlatformConfig.devViteReactRefresh }
        : undefined,
    componentTag: definition.runtime.type === 'web-component' ? definition.runtime.tagName : undefined,
    url: entryUrl,
  }
}

function resolveAppUrl(definition: LocalMicroAppDefinition, origin: string | undefined, path: string): string {
  if (definition.runtime.type === 'html-fragment' || definition.runtime.type === 'iframe') {
    return definition.runtime.url
  }

  if (!origin) {
    throw new Error(`No local origin configured for micro app "${definition.id}"`)
  }

  return new URL(path, origin).toString()
}
