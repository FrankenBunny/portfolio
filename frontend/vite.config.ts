import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // List of plugins
  plugins: [react()],
  // Base public path when served (in prod or dev)
  base: "/",
  // Object for build preview options
  preview: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  // Object for server options
  server: {
    watch: {
      usePolling: true,
    },
    port: 3000,
    strictPort: true,
    host: true,
  },
});
