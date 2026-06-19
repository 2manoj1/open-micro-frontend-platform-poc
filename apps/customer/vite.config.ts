import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  define: {
    'process.env.NODE_ENV': JSON.stringify(command === 'build' ? 'production' : 'development'),
  },
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'CustomerApp',
      formats: ['es'],
      fileName: () => 'customer-app.js',
    },
    target: 'esnext',
    minify: 'esbuild',
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    cors: true,
  },
  preview: {
    port: 5173,
    cors: true,
  },
}));
