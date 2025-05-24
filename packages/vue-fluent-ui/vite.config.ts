import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({

      insertTypesEntry: true,
      copyDtsFiles: false
    })
  ],
  build: {
    watch: {
      include: 'src/**/*',
      exclude: 'node_modules/**'
    },
    lib: {
      // 指定入口文件
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es','cjs']
    },

    rollupOptions: {
      external: ['vue'],
      treeshake: false,
    }
  }
})
