import {defineConfig} from '@rslib/core';
import {pluginUnpluginVue} from "rsbuild-plugin-unplugin-vue";

export default defineConfig({
    lib: [
        {
            format: 'esm',
            syntax: ['node 18'],
            dts: true,
        },
    ],
    output: {
        target: 'web',
    },
    plugins: [pluginUnpluginVue()],

});
