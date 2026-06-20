export * as McpAppsSdk from '@modelcontextprotocol/ext-apps';
export * as McpAppsServer from '@modelcontextprotocol/ext-apps/server';
export * as McpAppsHost from '@modelcontextprotocol/ext-apps/app-bridge';

export {
  App,
  PostMessageTransport,
  ProtocolWithEvents,
  RESOURCE_MIME_TYPE,
  RESOURCE_URI_META_KEY,
  applyDocumentTheme,
  applyHostFonts,
  applyHostStyleVariables,
  getDocumentTheme,
} from '@modelcontextprotocol/ext-apps';

export {
  EXTENSION_ID,
  getUiCapability,
  registerAppResource,
  registerAppTool,
} from '@modelcontextprotocol/ext-apps/server';

export {
  AppBridge,
  buildAllowAttribute,
  getToolUiResourceUri,
  isToolVisibilityAppOnly,
  isToolVisibilityModelOnly,
} from '@modelcontextprotocol/ext-apps/app-bridge';

export type * from '@modelcontextprotocol/ext-apps';
export type * from '@modelcontextprotocol/ext-apps/server';
export type * from '@modelcontextprotocol/ext-apps/app-bridge';
