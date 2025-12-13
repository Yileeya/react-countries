import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import {defineConfig, globalIgnores} from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            prettierConfig
        ],
        plugins: {
            'prettier': prettierPlugin
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            'prettier/prettier': 'error',

            // --- React Hooks & Refresh ---
            'react-hooks/exhaustive-deps': 'error', // 設置為 error 來強制修正依賴項
            'react-refresh/only-export-components': 'warn',

            // --- 程式碼品質與 Best Practices ---
            'eqeqeq': 'error', // 強制使用 ===
            'no-console': ['warn', {allow: ['warn', 'error']}], // 允許 console.warn/error，但不允許 console.log

            // --- TypeScript 規則 ---
            // 關閉 JS 內建的 no-unused-vars，改用 TS 插件提供的版本
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_', // 允許變數名稱以下劃線開頭時可以不使用
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_'
                }
            ],
            '@typescript-eslint/no-explicit-any': 'warn', // 警告使用 any

            // 在 React/TS 專案中常見的覆寫
            '@typescript-eslint/explicit-module-boundary-types': 'off'
        }
    }
]);
