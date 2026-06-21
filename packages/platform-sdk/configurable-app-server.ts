import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import { join } from 'node:path';
import * as fs from 'node:fs';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createMcpAppHtml } from './mcp-app.js';
import type { PlatformAppOptions } from './configurable-app.js';
import { z } from 'zod';

export interface StandaloneServerConfig {
  port?: number;
  staticDir?: string;
  mcpPath?: string;
}

// Create a standalone server for a single configurable micro app
export function createPlatformAppServer(options: PlatformAppOptions) {
  const mcpServer = new McpServer(
    {
      name: options.name,
      version: options.version ?? '1.0.0',
    },
    {
      capabilities: {
        logging: {},
        resources: {},
        tools: {},
      },
    }
  );

  // Register tools
  if (options.tools) {
    for (const [name, tool] of Object.entries(options.tools)) {
      mcpServer.registerTool(
        name,
        {
          title: name,
          description: tool.description,
          inputSchema: (tool.inputSchema ?? { type: 'object' }) as any,
        },
        async (args: any) => {
          try {
            const result = await tool.execute(args);
            return {
              content: [
                {
                  type: 'text' as const,
                  text: typeof result === 'string' ? result : JSON.stringify(result, null, 2),
                },
              ],
            };
          } catch (error: any) {
            return {
              content: [
                {
                  type: 'text' as const,
                  text: `Error executing tool ${name}: ${error?.message ?? error}`,
                },
              ],
              isError: true,
            };
          }
        }
      );
    }
  }

  // Register resources
  if (options.resources) {
    for (const [name, resource] of Object.entries(options.resources)) {
      const uri = `${options.id}://resources/${name}`;
      mcpServer.registerResource(
        name,
        uri,
        {
          description: resource.description,
          mimeType: resource.mimeType ?? 'application/json',
        },
        async (uriParams: any) => {
          try {
            const result = await resource.read(uriParams.uri);
            return {
              contents: [
                {
                  uri: uriParams.uri,
                  mimeType: resource.mimeType ?? 'application/json',
                  text: typeof result === 'string' ? result : JSON.stringify(result, null, 2),
                },
              ],
            };
          } catch (error: any) {
            throw new Error(`Error reading resource ${name}: ${error?.message ?? error}`);
          }
        }
      );
    }
  }

  // Register prompts
  if (options.prompts) {
    for (const [name, prompt] of Object.entries(options.prompts)) {
      mcpServer.registerPrompt(
        name,
        {
          description: prompt.description,
          arguments: prompt.arguments,
        } as any,
        async (args: any) => {
          try {
            const result = await prompt.execute(args);
            return {
              messages: [
                {
                  role: 'user',
                  content: {
                    type: 'text' as const,
                    text: typeof result === 'string' ? result : JSON.stringify(result, null, 2),
                  },
                },
              ],
            };
          } catch (error: any) {
            throw new Error(`Error executing prompt ${name}: ${error?.message ?? error}`);
          }
        }
      );
    }
  }

  return {
    mcpServer,
    async handleRequest(req: IncomingMessage, res: ServerResponse, staticDir?: string, mcpPath = '/mcp') {
      const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);
      
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'content-type, authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

      if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
      }

      if (req.method === 'GET' && url.pathname === '/healthz') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ ok: true, app: options.id, mcpEnabled: Boolean(options.mcp) }));
        return;
      }

      if (req.method === 'GET' && url.pathname === '/manifest.json') {
        const manifest = {
          id: options.id,
          name: options.name,
          version: options.version ?? '1.0.0',
          componentTag: options.tagName,
          entry: `/${options.id}-app.js`,
          styleUrls: [`/${options.id}-app.css`],
          permissions: [],
          mcp: options.mcp ? {
            tools: options.tools ? Object.keys(options.tools) : [],
            resources: options.resources ? Object.keys(options.resources) : [],
            prompts: options.prompts ? Object.keys(options.prompts) : [],
          } : undefined
        };
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(manifest, null, 2));
        return;
      }

      if (req.method === 'GET' && (url.pathname === '/resource' || url.pathname === `/apps/${options.id}/resource`)) {
        const appPublicOrigin = process.env.PUBLIC_MCP_ORIGIN ?? `http://${req.headers.host ?? '127.0.0.1:8788'}`;
        const microAppConfig: any = {
          id: options.id,
          name: options.name,
          description: options.description ?? '',
          framework: options.framework,
          rendering: options.rendering ?? ['csr'],
          entryUrl: `${appPublicOrigin}/${options.id}-app.js`,
          manifestUrl: `${appPublicOrigin}/manifest.json`,
          runtime: { type: 'web-component', tagName: options.tagName },
          styleUrls: [`${appPublicOrigin}/${options.id}-app.css`],
          version: options.version ?? '1.0.0',
          owner: options.owner ?? '',
          permissions: [],
          capabilities: {
            aiNative: true,
            mcpApps: {
              enabled: Boolean(options.mcp),
              tools: options.tools ? Object.keys(options.tools) : [],
              resources: options.resources ? Object.keys(options.resources) : [],
              prompts: options.prompts ? Object.keys(options.prompts) : [],
            }
          }
        };

        const html = createMcpAppHtml(microAppConfig, {
          shellOrigin: appPublicOrigin,
          resourceOrigin: appPublicOrigin,
        });

        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        res.end(html);
        return;
      }

      if (options.mcp && req.method === 'POST' && url.pathname === mcpPath) {
        const bodyChunks: any[] = [];
        req.on('data', (chunk: any) => bodyChunks.push(chunk));
        req.on('end', async () => {
          try {
            const bodyText = Buffer.concat(bodyChunks).toString('utf8');
            const body = bodyText ? JSON.parse(bodyText) : undefined;
            
            const transport = new StreamableHTTPServerTransport({
              sessionIdGenerator: undefined
            });

            await mcpServer.connect(transport);
            await transport.handleRequest(req, res, body);

            res.on('close', () => {
              void transport.close();
            });
          } catch (e: any) {
            console.error('[configurable-app-server] MCP handling failed', e);
            if (!res.headersSent) {
              res.writeHead(500, { 'content-type': 'application/json' });
              res.end(JSON.stringify({ jsonrpc: '2.0', error: { code: -32603, message: e?.message ?? String(e) }, id: null }));
            }
          }
        });
        return;
      }

      // Serve static assets
      if (req.method === 'GET' && staticDir) {
        let normalizedPath = url.pathname;
        if (normalizedPath === '/') {
          res.writeHead(302, { Location: '/resource' });
          res.end();
          return;
        }

        let filePath = join(staticDir, normalizedPath);
        if (!filePath.startsWith(staticDir)) {
          res.writeHead(403);
          res.end('Forbidden');
          return;
        }

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = normalizedPath.split('.').pop() ?? '';
          const mimeTypes: Record<string, string> = {
            js: 'application/javascript; charset=utf-8',
            css: 'text/css; charset=utf-8',
            html: 'text/html; charset=utf-8',
            json: 'application/json; charset=utf-8',
            png: 'image/png',
            jpg: 'image/jpeg',
            svg: 'image/svg+xml'
          };

          res.writeHead(200, { 'content-type': mimeTypes[ext] ?? 'application/octet-stream' });
          res.end(fs.readFileSync(filePath));
          return;
        }
      }

      res.writeHead(404);
      res.end('Not Found');
    }
  };
}

// Start a native Node HTTP standalone server
export function startPlatformAppServer(options: PlatformAppOptions, config: StandaloneServerConfig = {}) {
  const port = config.port ?? Number(process.env.PORT ?? 8787);
  const staticDir = config.staticDir ?? join(process.cwd(), 'dist');
  const mcpPath = config.mcpPath ?? '/mcp';
  
  const serverWrapper = createPlatformAppServer(options);
  const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    serverWrapper.handleRequest(req, res, staticDir, mcpPath).catch(err => {
      console.error('[Platform Standalone Server] Request handling error:', err);
      if (!res.headersSent) {
        res.writeHead(500);
        res.end('Internal Server Error');
      }
    });
  });

  server.listen(port, () => {
    console.log(`[Platform Standalone Server] "${options.name}" started successfully!`);
    console.log(`- Local URL:   http://localhost:${port}`);
    console.log(`- Health Check: http://localhost:${port}/healthz`);
    console.log(`- Manifest:    http://localhost:${port}/manifest.json`);
    console.log(`- App UI:      http://localhost:${port}/resource`);
    if (options.mcp) {
      console.log(`- MCP Endpoint: http://localhost:${port}${mcpPath} (Streamable HTTP Transport)`);
    }
  });

  return server;
}

// Create a unified MCP server for the shell (multi-app registration)
export function createUnifiedMcpServer(apps: any[], serverName = 'open-micro-platform-unified-mcp') {
  const server = new McpServer(
    {
      name: serverName,
      version: '1.0.0',
    },
    {
      capabilities: {
        logging: {},
        resources: {},
        tools: {},
      },
    }
  );

  // Register list open micro apps tool
  server.registerTool(
    'list_open_micro_apps',
    {
      title: 'List Open Micro Platform Apps',
      description: 'List micro apps currently registered in the platform shell.',
      inputSchema: {},
    },
    async () => ({
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(
            apps.map((app) => ({
              id: app.id,
              name: app.name,
              version: app.version,
              owner: app.owner,
              framework: app.framework,
              rendering: app.rendering,
              tools: app.capabilities?.mcpApps?.tools ?? [],
              resources: app.capabilities?.mcpApps?.resources ?? [],
              prompts: app.capabilities?.mcpApps?.prompts ?? [],
            })),
            null,
            2
          ),
        },
      ],
    })
  );

  // Register each individual app as an open_micro_app_<id> tool and its capabilities
  for (const app of apps) {
    const isMcpEnabled = app.capabilities?.mcpApps?.enabled;
    if (!isMcpEnabled) continue;

    const appIdClean = app.id.replace(/[^a-zA-Z0-9_-]/g, '_');
    const resourceUri = app.capabilities?.mcpApps?.manifestUrl 
      ? `ui://micro-app/${app.id}` 
      : `${app.id}://resource`;

    // 1. Tool to open the app UI
    server.registerTool(
      `open_micro_app_${appIdClean}`,
      {
        title: `Open ${app.name}`,
        description: `Load ${app.name} interactive UI inside the AI host.`,
        inputSchema: {
          prompt: z.string().optional().describe('Optional context/goal to pass to the micro app UI.'),
        } as any,
      },
      async ({ prompt }: { prompt?: string }) => {
        return {
          content: [
            {
              type: 'text' as const,
              text: `${app.name} is ready. Resource UI available at ${resourceUri}`,
            },
            {
              type: 'resource_link' as const,
              uri: resourceUri,
              name: `${app.id}-widget`,
              title: app.name,
              mimeType: 'text/html;profile=mcp-app',
              description: `${app.name} interactive interface`,
            } as any
          ],
        };
      }
    );

    // 2. Register individual tools from capabilities list
    const tools = app.capabilities?.mcpApps?.tools ?? [];
    for (const toolName of tools) {
      const toolNameClean = toolName.replace(/[^a-zA-Z0-9_-]/g, '_');
      
      server.registerTool(
        toolNameClean,
        {
          title: toolName,
          description: `AI-native capability exposed by ${app.name}.`,
          inputSchema: {
            prompt: z.string().optional().describe('Input parameter for the tool.'),
          } as any,
        },
        async ({ prompt }: { prompt?: string }) => {
          return {
            content: [
              {
                type: 'text' as const,
                text: `Proxying tool execution to ${app.name}: ${toolName} with input "${prompt ?? ''}"`,
              },
            ],
          };
        }
      );
    }
  }

  return server;
}

export async function executeMcpMessage(server: McpServer, request: any): Promise<any> {
  return new Promise(async (resolve) => {
    let resolved = false;
    
    const transport = {
      onclose: undefined as (() => void) | undefined,
      onerror: undefined as ((error: Error) => void) | undefined,
      onmessage: undefined as ((message: any) => void | Promise<void>) | undefined,
      
      async start() {},
      async send(message: any) {
        if (!resolved) {
          resolved = true;
          resolve(message);
        }
      },
      async close() {}
    };

    await server.connect(transport);
    
    const timeout = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve({
          jsonrpc: '2.0',
          error: { code: -32603, message: 'MCP execution timed out' },
          id: request.id ?? null
        });
      }
    }, 5000);

    if (transport.onmessage) {
      try {
        await transport.onmessage(request);
      } catch (err: any) {
        clearTimeout(timeout);
        if (!resolved) {
          resolved = true;
          resolve({
            jsonrpc: '2.0',
            error: { code: -32603, message: err?.message ?? String(err) },
            id: request.id ?? null
          });
        }
      }
    }
  }).then(async (res) => {
    await server.close();
    return res;
  });
}
