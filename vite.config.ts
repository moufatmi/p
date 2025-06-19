// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: 'https://moussabfatmi.me/',
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    port: 3000,
    strictPort: true
  },
  preview: {
    port: 4173,
    strictPort: true
  }
})
