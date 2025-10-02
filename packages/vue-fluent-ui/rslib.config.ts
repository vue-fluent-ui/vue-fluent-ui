import {defineConfig} from '@rslib/core';
import {pluginUnpluginVue} from 'rsbuild-plugin-unplugin-vue';
import {pluginSass} from '@rsbuild/plugin-sass';
import {resolve} from 'node:path';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    lib: [
        {
            format: 'esm',
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
});
