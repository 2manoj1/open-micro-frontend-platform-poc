import { createMcpAppResourceDescriptor } from '@openmf/core'
import { getMicroApps, resolveRelativeAppUrls } from '@/lib/micro-apps'
import { getPublicRequestOrigin } from '@/lib/request-origin'

export async function GET(request: Request) {
  const origin = getPublicRequestOrigin(request)
  const apps = await getMicroApps()

  return Response.json({
    protocol: 'mcp-apps',
    shell: 'open-micro-platform',
    apps: apps
      .filter((app) => app.capabilities?.mcpApps?.enabled)
      .map((app) => {
        const absoluteApp = resolveRelativeAppUrls(app, origin)
        const resourceUrl = new URL(`/api/mcp/apps/${absoluteApp.id}/resource`, origin).toString()
        const descriptor = createMcpAppResourceDescriptor(absoluteApp, {
          shellOrigin: origin,
          resourceUrl,
        })

        return {
          id: absoluteApp.id,
          name: absoluteApp.name,
          description: absoluteApp.description,
          framework: absoluteApp.framework,
          rendering: absoluteApp.rendering,
          app: absoluteApp,
          manifestUrl: new URL(`/api/mcp/apps/${absoluteApp.id}/manifest`, origin).toString(),
          resourceUrl,
          descriptor,
        }
      }),
  })
}
