/**
 * Route helper utilities for proper path handling with base URL
 */

/**
 * Gets the configured base URL from Astro config
 */
export const getBaseUrl = (): string => {
    return import.meta.env.BASE_URL || '/';
};

/**
 * Constructs a route with the base URL prefix
 * @param path - The path relative to the base (e.g., '/login', '/dashboard')
 * @returns The complete path including base URL
 */
export const route = (path: string): string => {
    const base = getBaseUrl();
    // Remove leading slash from path if base already has trailing slash
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
    // Ensure base has trailing slash
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;

    return `${normalizedBase}${normalizedPath}`;
};

/**
 * Common routes used throughout the application
 */
export const routes = {
    home: () => getBaseUrl(),
    login: () => route('login'),
    dashboard: () => route('dashboard'),
    foro: () => route('foro'),
    servicios: () => route('servicios'),
    pagos: () => route('pagos'),
} as const;
