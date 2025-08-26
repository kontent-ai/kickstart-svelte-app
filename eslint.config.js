import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import svelte from 'eslint-plugin-svelte'

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  ...svelte.configs['flat/recommended'],
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
)
