/**
 * Micro Frontend Platform SDK
 * Shared utilities for shell and micro apps
 */

export * from './event-bus.js';
export * from './html-fragment.js';
export * from './mcp-app.js';
export * from './micro-app.js';
export * from './observability.js';
export * from './registry.js';
export * from './runtime-state.js';
export * from './web-mcp.js';

import type { MicroAppConfig } from './micro-app.js';

export type AppRegistry = MicroAppConfig;

/**
 * Get auth token from session storage
 */
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem('auth_token');
}

/**
 * Set auth token
 */
export function setAuthToken(token: string): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem('auth_token', token);
}

/**
 * Clear auth token
 */
export function clearAuthToken(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem('auth_token');
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return !!getAuthToken();
}

/**
 * Mock user data - in production would come from API
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export function getCurrentUser(): User | null {
  const token = getAuthToken();
  if (!token) return null;

  // Mock user based on token
  return {
    id: '1',
    name: 'John Demo',
    email: 'john@example.com',
    role: 'admin',
  };
}

/**
 * Register a micro app
 */
export function registerMicroApp(app: AppRegistry): void {
  if (typeof window === 'undefined') return;

  const registry = window.__MICRO_APPS_REGISTRY__ || [];
  registry.push(app);
  window.__MICRO_APPS_REGISTRY__ = registry;
}

/**
 * Get all registered micro apps
 */
export function getRegisteredApps(): AppRegistry[] {
  if (typeof window === 'undefined') return [];
  return window.__MICRO_APPS_REGISTRY__ || [];
}

declare global {
  interface Window {
    __MICRO_APPS_REGISTRY__?: AppRegistry[];
    __PLATFORM_SDK__?: typeof import('./event-bus.js');
  }
}
