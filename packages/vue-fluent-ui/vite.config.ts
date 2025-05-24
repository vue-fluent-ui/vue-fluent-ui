import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
      include: ['src'],
      // 是否包含Vue组件的类型声明
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      // 指定入口文件
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueFluentUI',
      fileName: (format) => `vue-fluent-ui.${format}.js`,
      // 添加 es 和 cjs 格式
      formats: ['es', 'cjs']
    },
    // 启用 minify 以减小文件体积
    minify: true,
    // 将每个组件作为单独的 chunk 输出
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        // 输出每个组件为单独的文件，实现按需加载
        preserveModules: true,
        preserveModulesRoot: 'src',
        // 设置导出模式为命名导出，避免 .default 问题
        exports: 'named'
      }
    }
  }
})
