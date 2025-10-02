/// <reference types="vitest/config" />

import {defineConfig} from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'node:path'

// https://vitest.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    plugins: [vue()],
    test: {
        // 支持内联测试
        includeSource: ['src/**/*.{js,ts,vue}'],
        // 测试环境
        environment: 'jsdom',
        // 其他测试配置
        globals: true,
    },
    // 在测试时定义 import.meta.vitest
    define: {
        'import.meta.vitest': 'undefined',
    }
})
