import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,  // Ensure HMR is enabled
    watch: {
      usePolling: true, // Sometimes polling helps in Docker containers
    },
  },
})
