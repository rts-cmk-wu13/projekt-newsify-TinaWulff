import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // så @ = src/
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/style/colors" as *;
        @use "@/style/resets" as *;
        `

        
      }
    }
  }
})
