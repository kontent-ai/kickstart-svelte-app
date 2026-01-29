/// <reference types="vite/client" />

// Allow importing global CSS files in TS for Svelte components
declare module "*.css" {
  const content: string;
  export default content;
}
