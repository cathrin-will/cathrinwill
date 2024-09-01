import type { Config } from 'jest'
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig: Config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!@octokit/core).+\\.js$',
        '/node_modules/(?!@lordicon/react).+\\.js$',
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
            babelConfig: 'babel.config.js',
        },
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
}

module.exports = createJestConfig(customJestConfig)
