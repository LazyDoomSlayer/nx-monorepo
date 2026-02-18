export const isDev = () => (import.meta as any).env?.MODE === 'development';

export const isProd = () => (import.meta as any).env?.MODE === 'production';
