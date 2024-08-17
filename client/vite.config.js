import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // add jsdom to vite
    environment: 'jsdom',
    setupFiles: './test/setup.js',
  }
})
