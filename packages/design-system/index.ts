export const designSystemContract = {
  name: 'Open Micro Design System',
  version: '1.0.0',
  tokenPrefix: '--omf',
  singleton: true,
  owner: 'Platform Design',
} as const;

export type DesignSystemContract = typeof designSystemContract;

export const designSystemComponents = {
  header: {
    tagName: 'omf-platform-header',
    description: 'Runtime shell header delivered by the design-system remote.',
  },
  footer: {
    tagName: 'omf-platform-footer',
    description: 'Runtime shell footer delivered by the design-system remote.',
  },
  showcase: {
    tagName: 'micro-design-system-app',
    description: 'Design token and component contract showcase app.',
  },
} as const;

export type DesignSystemComponents = typeof designSystemComponents;

export function getDesignSystemComponentTag(component: keyof DesignSystemComponents): string {
  return designSystemComponents[component].tagName;
}
