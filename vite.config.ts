import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      emitCss: true,
    }),
    cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'MyPlugin',
      fileName: () => 'my-plugin.js',
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    },
    cssCodeSplit: false,
    minify: 'terser',
    sourcemap: false
  }
});
