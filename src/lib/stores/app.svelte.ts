export const appConfig = $state({
  environmentId: import.meta.env.VITE_ENVIRONMENT_ID || '',
  apiKey: import.meta.env.VITE_DELIVERY_API_KEY || ''
});