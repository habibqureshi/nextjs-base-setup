import { SortCriteria } from '@/app/types/settings';

export const ENDPOINTS = {
    AUTH: {
        LOGIN: '/api/v1/auth/login',
        REGISTER: '/auth/register',
        LOGOUT: '/auth/logout',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
    },
    USERS: '/users',
    ORDERS: '/orders',
    PRODUCTS: '/products',
    CATEGORIES: '/categories',
    BRANDS: '/brands',
    SETTINGS: {
        LIST: (page: number = 1, size: number = 10, sortCriteria: SortCriteria[] = [
            { field: "key", sortOrder: 1 },
            { field: "createdTs", sortOrder: 0 }
        ]) => `/api/v1/applicationSettings?page=${page}&size=${size}&sortCriteria=${encodeURIComponent(JSON.stringify(sortCriteria))}`,
        UPDATE: (id: number) => `/settings/${id}`,
    },
};