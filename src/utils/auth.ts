// Authentication utilities
export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar: string;
}

export function setUserSession(user: User): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('isAuthenticated', 'true');
    }
}

export function getUserSession(): User | null {
    if (typeof window !== 'undefined') {
        const userStr = localStorage.getItem('user');
        const isAuthenticated = sessionStorage.getItem('isAuthenticated');

        if (userStr && isAuthenticated === 'true') {
            return JSON.parse(userStr);
        }
    }
    return null;
}

export function clearUserSession(): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        sessionStorage.removeItem('isAuthenticated');
    }
}

export function isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
        return sessionStorage.getItem('isAuthenticated') === 'true';
    }
    return false;
}
