module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        "no-extend-native": "warn",
        'prettier/prettier': [
            'error',
            {
                tabWidth: 2,
                useTabs: false,
                singleQuote: true,
                semi: true,
                bracketSpacing: true,
                arrowParens: 'always',
                trailingComma: 'all',
                bracketSameLine: true,
                printWidth: 100,
                endOfLine: 'off',
            },
        ],
    },
    settings: {
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
    },
}