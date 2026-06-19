import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command }) => ({
  define: {
    'process.env.NODE_ENV': JSON.stringify(command === 'build' ? 'production' : 'development'),
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'VueCommerceApp',
      formats: ['es'],
      fileName: () => 'vue-commerce-app.js',
    },
    target: 'esnext',
    minify: 'esbuild',
  },
  server: {
    host: '127.0.0.1',
    port: 5178,
    cors: true,
  },
  preview: {
    port: 5178,
    cors: true,
  },
}));
