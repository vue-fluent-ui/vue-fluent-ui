import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      root: resolve(__dirname, 'play'),
      plugins: [ vue() ],
      server: {
        open: '/'
      }
    }
  }
  // build 模式
  return {
    plugins: [
      vue(),
      dts({ insertTypesEntry: true, copyDtsFiles: false })
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es','cjs']
      },
      rollupOptions: {
        external: ['vue'],
        treeshake: false
      }
    }
  }
})
