/**
 * Micro Frontend Platform SDK
 * Shared utilities for shell and micro apps
 */
export * from './event-bus.js';
export * from './html-fragment.js';
export * from './micro-app.js';
export * from './observability.js';
export * from './registry.js';
/**
 * Get auth token from session storage
 */
export function getAuthToken() {
    if (typeof window === 'undefined')
        return null;
    return sessionStorage.getItem('auth_token');
}
/**
 * Set auth token
 */
export function setAuthToken(token) {
    if (typeof window === 'undefined')
        return;
    sessionStorage.setItem('auth_token', token);
}
/**
 * Clear auth token
 */
export function clearAuthToken() {
    if (typeof window === 'undefined')
        return;
    sessionStorage.removeItem('auth_token');
}
/**
 * Check if user is authenticated
 */
export function isAuthenticated() {
    return !!getAuthToken();
}
export function getCurrentUser() {
    const token = getAuthToken();
    if (!token)
        return null;
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
export function registerMicroApp(app) {
    if (typeof window === 'undefined')
        return;
    const registry = window.__MICRO_APPS_REGISTRY__ || [];
    registry.push(app);
    window.__MICRO_APPS_REGISTRY__ = registry;
}
/**
 * Get all registered micro apps
 */
export function getRegisteredApps() {
    if (typeof window === 'undefined')
        return [];
    return window.__MICRO_APPS_REGISTRY__ || [];
}
