export type AppEnvironment = 'development' | 'test' | 'production';

export interface AppConfig {
  env: AppEnvironment;
  apiBaseUrl: string;
  appName: string;
}

export const getAppConfig = (): AppConfig => {
  const env = (import.meta as any).env?.MODE ?? 'development';

  return {
    env,
    apiBaseUrl:
      (import.meta as any).env?.VITE_API_BASE_URL ?? 'http://localhost:3000',
    appName: (import.meta as any).env?.VITE_APP_NAME ?? 'Nx Platform',
  };
};
