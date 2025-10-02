import {defineConfig} from '@rslib/core';
import {pluginUnpluginVue} from 'rsbuild-plugin-unplugin-vue';
import {pluginSass} from '@rsbuild/plugin-sass';
import {resolve} from "node:path";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    lib: [
        {
            format: 'esm',
            dts: true,
            output: {
                minify: false,
            },
        },
    ],
    output: {
        target: 'web',
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    plugins: [pluginUnpluginVue(), pluginSass()],
    source: {
        // 在生产构建时移除内联测试代码
        define: {
            'import.meta.vitest': 'undefined',
        },
    },
});
