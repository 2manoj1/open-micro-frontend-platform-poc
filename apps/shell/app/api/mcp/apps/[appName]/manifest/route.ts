import { createMcpAppResourceDescriptor } from '@openmf/core'
import { getMicroApp } from '@/lib/micro-apps'
import { getPublicRequestOrigin } from '@/lib/request-origin'

interface RouteContext {
  params: Promise<{ appName: string }>
}

export async function GET(request: Request, context: RouteContext) {
  const { appName } = await context.params
  const app = await getMicroApp(appName)

  if (!app) {
    return Response.json({ error: `Unknown micro app: ${appName}` }, { status: 404 })
  }

  if (!app.capabilities?.mcpApps?.enabled) {
    return Response.json({ error: `${app.name} does not expose MCP Apps capabilities` }, { status: 400 })
  }

  const origin = getPublicRequestOrigin(request)

  return Response.json(
    createMcpAppResourceDescriptor(app, {
      shellOrigin: origin,
      resourceUrl: new URL(`/api/mcp/apps/${app.id}/resource`, origin).toString(),
    })
  )
}
