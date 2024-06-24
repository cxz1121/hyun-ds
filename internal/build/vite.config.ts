import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ROOT, ENTRY, OUTPUT } from '../build-constants'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: ENTRY,
      formats: ['es', 'cjs', 'umd', 'iife'],
      name: 'HyunDs',
      fileName(format, fileName) {
        return `${fileName}.${format}.js`
      }
    },
    outDir: OUTPUT,
    rollupOptions: {
      output: {
        exports: 'named', /** Disable warning for default imports */
        globals: {
          vue: 'Vue'
        }
      },
      external: ['vue']
    }
  }
})