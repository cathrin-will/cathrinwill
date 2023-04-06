import type { StorybookConfig } from '@storybook/nextjs'
const path = require('path')

const config: StorybookConfig = {
    stories: [
        '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../scripts/*.stories.mdx',
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        '@etchteam/storybook-addon-status',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config: any, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve(__dirname, '../components'),
            '@atoms': path.resolve(__dirname, '../lib/atoms'),
            '@lib': path.resolve(__dirname, '../lib'),
            '@hooks': path.resolve(__dirname, '../lib/hooks'),
            '@config': path.resolve(__dirname, '../lib/config'),
            '@layouts': path.resolve(__dirname, '../layouts'),
        }
        return config
    },
}
export default config
