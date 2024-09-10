import globals from 'globals'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            sourceType: 'module',
        },
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            // stylistic rules
            '@stylistic/comma-dangle': ['warn', 'always-multiline'],
            '@stylistic/comma-style': ['warn', 'last'],
            '@stylistic/eol-last': 'warn',
            '@stylistic/indent': [
                'warn',
                4,
                { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] },
            ],
            '@stylistic/key-spacing': [
                'warn',
                { afterColon: true, beforeColon: false, mode: 'minimum' },
            ],
            '@stylistic/keyword-spacing': [1, { after: true, before: true }],
            '@stylistic/no-extra-semi': 'warn',
            '@stylistic/no-floating-decimal': 'warn',
            '@stylistic/no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
            '@stylistic/no-trailing-spaces': 'warn',
            '@stylistic/one-var-declaration-per-line': 'warn',
            '@stylistic/quote-props': ['warn', 'consistent-as-needed'],
            '@stylistic/quotes': [
                'warn',
                'single',
                { allowTemplateLiterals: true, avoidEscape: true },
            ],
            '@stylistic/semi': ['warn', 'never'],
            '@stylistic/space-before-blocks': 'warn',
            '@stylistic/space-infix-ops': 'warn',
            '@stylistic/space-unary-ops': 'warn',
            '@stylistic/spaced-comment': [
                'warn',
                'always',
                { exceptions: ['-'] },
            ],
            '@stylistic/template-curly-spacing': 'off',

            // custom rules not specified in recommended
            'camelcase': 1,
            'curly': [2, 'all'],
            'default-case': 1,
            'dot-notation': 1,
            'eqeqeq': [1, 'smart'],
            'func-style': [1, 'declaration', { allowArrowFunctions: true }],
            'guard-for-in': 2,
            'new-cap': 2,
            'no-alert': 2,
            'no-console': [1, { allow: ['warn', 'error', 'info', 'table'] }],
            'no-constant-binary-expression': 1,
            'no-inner-declarations': 1,
            'no-multi-str': 1,
            'no-nested-ternary': 1,
            'no-shadow': 1,
            'no-unused-vars': 1,
            'no-use-before-define': 2,
            'no-var': 1,
            'prefer-const': 1,
            'radix': 1,
            'require-atomic-updates': 1,
            'vars-on-top': 1,
        },
    },
]
