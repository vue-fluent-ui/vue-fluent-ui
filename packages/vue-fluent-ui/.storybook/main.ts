import {createRequire} from 'node:module';
import {dirname, join} from 'node:path';
import type {StorybookConfig} from 'storybook-vue3-rsbuild';

const require = createRequire(import.meta.url);

function getAbsolutePath(value: string) {
    return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-onboarding',
        {
            name: getAbsolutePath('storybook-addon-rslib'),
        },
    ],
    framework: {
        // @ts-ignore
        name: getAbsolutePath('storybook-vue3-rsbuild'),
        options: {},
    },
    typescript: {
        check: true,
    },
};

// noinspection JSUnusedGlobalSymbols
export default config;
