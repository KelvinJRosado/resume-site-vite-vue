import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default [
    eslint.configs.all,
    ...tseslint.configs.strict,
    ...pluginVue.configs['flat/recommended'],
    eslintConfigPrettier,
    { ignores: ['dist/'] },
    {
        files: ['src/**/*.ts', 'src/**/*.vue', '*.ts', '*.vue', '*.js'],
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
            },
        },
        rules: {
            'capitalized-comments': 'off',
            'no-console': 'off',
            'no-magic-numbers': 'off',
            'no-plusplus': 'off',
            'no-useless-assignment': 'off',
            'no-var': 'warn',
            'prefer-const': 'warn',
            'sort-imports': 'off',
            'vue/attribute-hyphenation': 'off',
            'vue/order-in-components': 'off',
        },
    },
];
