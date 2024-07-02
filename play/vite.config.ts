import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3333
  },
  resolve: {
    alias: [
      {
        find: '@hyun-ds/',
        replacement: path.resolve(__dirname, '../packages/')
      }  
    ]
  },
  plugins: [vue()]
})