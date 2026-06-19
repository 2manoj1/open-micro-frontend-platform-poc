import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  define: {
    'process.env.NODE_ENV': JSON.stringify(command === 'build' ? 'production' : 'development'),
  },
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'DesignSystemApp',
      formats: ['es'],
      fileName: () => 'design-system-app.js',
    },
    target: 'esnext',
    minify: 'esbuild',
  },
  server: {
    host: '127.0.0.1',
    port: 5180,
    cors: true,
    allowedHosts: ['.manojmukherjee.co.in'],
  },
  preview: {
    port: 5180,
    cors: true,
    allowedHosts: ['.manojmukherjee.co.in'],
  },
}));
