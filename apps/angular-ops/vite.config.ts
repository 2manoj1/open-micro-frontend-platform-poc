import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  define: {
    'process.env.NODE_ENV': JSON.stringify(command === 'build' ? 'production' : 'development'),
  },
  plugins: [angular()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'AngularOpsApp',
      formats: ['es'],
      fileName: () => 'angular-ops-app.js',
    },
    target: 'esnext',
    minify: 'esbuild',
  },
  server: {
    host: '127.0.0.1',
    port: 5179,
    cors: true,
  },
  preview: {
    port: 5179,
    cors: true,
  },
}));
