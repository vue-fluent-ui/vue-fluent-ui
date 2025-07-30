import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const resolveConfig = {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@theme': resolve(__dirname, 'src/theme'),
      '@components': resolve(__dirname, 'src/components'),
      '@styles': resolve(__dirname, 'src/styles')
    }
  }
  // 开发模式
  if (command === 'serve') {
    return {
      root: resolve(__dirname, 'play'),
      plugins: [ vue() ],
      resolve: resolveConfig,
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
    resolve: resolveConfig,
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
