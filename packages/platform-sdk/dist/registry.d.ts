import type { MicroAppConfig } from './micro-app.js';
export interface MicroAppValidationIssue {
    path: string;
    message: string;
}
export declare class MicroAppValidationError extends Error {
    readonly issues: MicroAppValidationIssue[];
    constructor(issues: MicroAppValidationIssue[]);
}
export type MicroAppRegistrySource = MicroAppConfig[] | (() => MicroAppConfig[] | Promise<MicroAppConfig[]>) | {
    type: 'inline';
    apps: MicroAppConfig[];
} | {
    type: 'url';
    url: string;
    init?: RequestInit;
};
export interface MicroAppRegistry {
    list: () => MicroAppConfig[];
    get: (id: string) => MicroAppConfig | undefined;
    has: (id: string) => boolean;
}
export declare function resolveMicroAppRegistry(source: MicroAppRegistrySource): Promise<MicroAppRegistry>;
export declare function createMicroAppRegistry(apps: MicroAppConfig[]): MicroAppRegistry;
export declare function fetchMicroAppRegistry(url: string, init?: RequestInit): Promise<MicroAppConfig[]>;
export declare function assertMicroAppRegistry(apps: MicroAppConfig[]): void;
export declare function validateMicroAppRegistry(apps: MicroAppConfig[]): MicroAppValidationIssue[];
export declare function validateMicroAppConfig(app: MicroAppConfig, path?: string): MicroAppValidationIssue[];
//# sourceMappingURL=registry.d.ts.map