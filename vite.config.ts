import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), svgr()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@components': path.resolve(__dirname, './src/components'),
            '@api': path.resolve(__dirname, './src/api'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
        }
    }
});
