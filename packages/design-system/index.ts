export const designSystemContract = {
  name: 'Open Micro Design System',
  version: '1.0.0',
  tokenPrefix: '--omf',
  singleton: true,
  owner: 'Platform Design',
} as const;

export type DesignSystemContract = typeof designSystemContract;
