/**
 * Micro Frontend Platform SDK
 * Shared utilities for shell and micro apps
 */
export * from './event-bus.js';
export * from './html-fragment.js';
export * from './micro-app.js';
export * from './observability.js';
export * from './registry.js';
import type { MicroAppConfig } from './micro-app.js';
export type AppRegistry = MicroAppConfig;
/**
 * Get auth token from session storage
 */
export declare function getAuthToken(): string | null;
/**
 * Set auth token
 */
export declare function setAuthToken(token: string): void;
/**
 * Clear auth token
 */
export declare function clearAuthToken(): void;
/**
 * Check if user is authenticated
 */
export declare function isAuthenticated(): boolean;
/**
 * Mock user data - in production would come from API
 */
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
export declare function getCurrentUser(): User | null;
/**
 * Register a micro app
 */
export declare function registerMicroApp(app: AppRegistry): void;
/**
 * Get all registered micro apps
 */
export declare function getRegisteredApps(): AppRegistry[];
declare global {
    interface Window {
        __MICRO_APPS_REGISTRY__?: AppRegistry[];
        __PLATFORM_SDK__?: typeof import('./event-bus.js');
    }
}
//# sourceMappingURL=index.d.ts.map