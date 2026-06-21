export type WebMcpInputSchema = {
  type: 'object';
  properties?: Record<string, unknown>;
  required?: string[];
};

export interface WebMcpToolDefinition<TInput = Record<string, unknown>> {
  name: string;
  description: string;
  inputSchema: WebMcpInputSchema;
  execute: (input: TInput) => unknown | Promise<unknown>;
  readOnlyHint?: boolean;
  untrustedContentHint?: boolean;
}

export interface WebMcpRegisterOptions {
  signal?: AbortSignal;
  exposedTo?: string[];
}

export interface WebMcpRegistration {
  supported: boolean;
  unregister: () => void;
}

interface WebMcpModelContext {
  registerTool: (tool: WebMcpToolDefinition, options?: WebMcpRegisterOptions) => unknown;
}

declare global {
  interface Document {
    modelContext?: WebMcpModelContext;
  }
}

export function isWebMcpAvailable(documentRef: Document | undefined = getDocument()): boolean {
  return typeof documentRef?.modelContext?.registerTool === 'function';
}

export function registerWebMcpTool<TInput = Record<string, unknown>>(
  tool: WebMcpToolDefinition<TInput>,
  options: WebMcpRegisterOptions = {},
  documentRef: Document | undefined = getDocument()
): WebMcpRegistration {
  if (!isWebMcpAvailable(documentRef)) {
    return {
      supported: false,
      unregister: () => {},
    };
  }

  const controller = options.signal ? undefined : new AbortController();
  const signal = options.signal ?? controller?.signal;

  try {
    documentRef!.modelContext!.registerTool(tool as WebMcpToolDefinition, {
      ...options,
      signal,
    });

    return {
      supported: true,
      unregister: () => controller?.abort(),
    };
  } catch (error) {
    console.error(`[Platform SDK] WebMCP registration for tool "${tool.name}" failed:`, error);
    return {
      supported: false,
      unregister: () => {},
    };
  }
}

function getDocument(): Document | undefined {
  return typeof document === 'undefined' ? undefined : document;
}
