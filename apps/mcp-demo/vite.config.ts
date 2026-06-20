import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  define: {
    'process.env.NODE_ENV': JSON.stringify(command === 'build' ? 'production' : 'development'),
  },
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom/client'],
  },
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'McpDemoApp',
      formats: ['es'],
      fileName: () => 'mcp-demo-app.js',
    },
    codeSplitting: false,
    target: 'esnext',
    minify: 'esbuild',
  },
  server: {
    host: '127.0.0.1',
    port: 5181,
    cors: true,
    allowedHosts: ['.manojmukherjee.co.in'],
  },
  preview: {
    port: 5181,
    cors: true,
    allowedHosts: ['.manojmukherjee.co.in'],
  },
}));
