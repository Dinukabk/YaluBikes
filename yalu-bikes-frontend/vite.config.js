import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL || 'http://localhost:3001',
          changeOrigin: true,
          secure: false
        }
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'production',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            i18n: ['react-i18next', 'i18next'],
            utils: ['axios', 'lodash']
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "./src/styles/_variables.scss";
            @import "./src/styles/_mixins.scss";
          `
        }
      }
    },
    define: {
      'process.env': {}
    }
  };
});