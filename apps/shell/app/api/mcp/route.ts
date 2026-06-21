import { createUnifiedMcpServer, executeMcpMessage } from '@openmf/core/configurable-app-server';
import { getMicroApps } from '@/lib/micro-apps';
import { getPublicRequestOrigin } from '@/lib/request-origin';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const origin = getPublicRequestOrigin(request);
  const apps = await getMicroApps();

  return Response.json({
    status: 'online',
    message: 'Open Micro Platform Unified MCP Server Gateway is running',
    shellOrigin: origin,
    appsCount: apps.length,
    appsList: apps.map(app => app.id),
    mcpEndpoint: new URL('/api/mcp', origin).toString()
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const apps = await getMicroApps();
    
    const serverName = 'open-micro-platform-shell-gateway';
    const server = createUnifiedMcpServer(apps, serverName);
    const response = await executeMcpMessage(server, body);
    
    return Response.json(response ?? {
      jsonrpc: '2.0',
      error: { code: -32603, message: 'No response from MCP Server' },
      id: body.id ?? null
    });
  } catch (error: any) {
    console.error('[Shell MCP Endpoint] Failed to handle MCP request:', error);
    return Response.json({
      jsonrpc: '2.0',
      error: { code: -32603, message: error?.message ?? String(error) },
      id: null
    }, { status: 500 });
  }
}
