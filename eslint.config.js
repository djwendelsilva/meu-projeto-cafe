import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  {
    files: ['**/*.{js,jsx}'],

    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    rules: {
      // Melhor regra para variáveis não usadas
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // Evita bugs com hooks
      'react-hooks/exhaustive-deps': 'warn',

      // Ajuda organização
      'no-console': 'warn',
    },
  },
])