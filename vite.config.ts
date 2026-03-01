import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/h5/',
  // 使用默认 publicDir=public，保证编译产物结构与之前一致
  build: {
    outDir: '../public/h5',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.3',
        changeOrigin: true,
      },
      '/assets/upload': {
        target: 'http://127.0.0.3',
        changeOrigin: true,
      },
    },
  },
});
