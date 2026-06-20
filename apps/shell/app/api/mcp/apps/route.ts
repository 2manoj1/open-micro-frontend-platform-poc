import { createMcpAppResourceDescriptor } from '@openmf/core'
import { getMicroApps } from '@/lib/micro-apps'
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
        const resourceUrl = new URL(`/api/mcp/apps/${app.id}/resource`, origin).toString()
        const descriptor = createMcpAppResourceDescriptor(app, {
          shellOrigin: origin,
          resourceUrl,
        })

        return {
          id: app.id,
          name: app.name,
          description: app.description,
          framework: app.framework,
          rendering: app.rendering,
          app,
          manifestUrl: new URL(`/api/mcp/apps/${app.id}/manifest`, origin).toString(),
          resourceUrl,
          descriptor,
        }
      }),
  })
}
