import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        dts({insertTypesEntry: true, copyDtsFiles: false})
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['vue'],
            treeshake: false,
            output: {
                exports: 'named'
            }
        }
    },

    // 添加 Vitest 配置以支持内联测试
    test: {
        includeSource: ['src/**/*.{js,ts,vue}']
    },

    // 只在生产构建时禁用 import.meta.vitest
    define: {
        'import.meta.vitest': process.env.NODE_ENV === 'production' ? 'undefined' : 'import.meta.vitest',
    }
})
