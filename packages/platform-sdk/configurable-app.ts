import { defineMicroAppElement, platformAppConfigs } from './client.js';
import type { MicroAppFramework, MicroAppRenderingMode } from './micro-app.js';

export interface PlatformAppTool {
  description: string;
  inputSchema: any;
  execute: (args: any) => Promise<any> | any;
}

export interface PlatformAppResource {
  description: string;
  mimeType?: string;
  read: (uri: string) => Promise<any> | any;
}

export interface PlatformAppPrompt {
  description: string;
  arguments?: Array<{ name: string; description?: string; required?: boolean }>;
  execute: (args: any) => Promise<any> | any;
}

export interface PlatformAppOptions {
  id: string;
  name: string;
  description?: string;
  version?: string;
  owner?: string;
  domain?: string;
  icon?: string;
  accent?: string;
  framework: MicroAppFramework;
  rendering?: MicroAppRenderingMode[];
  tagName: string;
  mcp?: boolean; // Default to false
  
  mount: (
    container: HTMLElement,
    context: any
  ) => void | (() => void | Promise<void>) | any;
  
  tools?: Record<string, PlatformAppTool>;
  resources?: Record<string, PlatformAppResource>;
  prompts?: Record<string, PlatformAppPrompt>;
}

export function definePlatformApp(options: PlatformAppOptions) {
  if (typeof window === 'undefined') {
    // If called in a non-browser environment, just return the options
    return { options };
  }

  // Register options in the global map for connectedCallback to pick up
  platformAppConfigs.set(options.tagName.toLowerCase(), options);

  // Define the Custom Element for micro app mounting
  const customElementClass = defineMicroAppElement(options.tagName, {
    mount(container, context) {
      return options.mount(container, context);
    }
  }, {
    observedAttributes: ['data-theme', 'data-tenant', 'data-locale']
  });

  return {
    options,
    customElementClass
  };
}
