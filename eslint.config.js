import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.all,
  ...tseslint.configs.strict,
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  { ignores: ['dist/', 'docs/'] },
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
      'max-statements': 'off',
      'no-console': 'off',
      'no-inline-comments': 'off',
      'no-magic-numbers': 'off',
      'no-plusplus': 'off',
      'no-useless-assignment': 'off',
      'no-var': 'warn',
      'one-var': 'off',
      'prefer-const': 'warn',
      'sort-imports': 'off',
      'sort-keys': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/order-in-components': 'off',
      'vue/v-on-event-hyphenation': 'off',
    },
  },
];
