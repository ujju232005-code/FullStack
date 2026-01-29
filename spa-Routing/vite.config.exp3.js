import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: '.',
    build: {
        outDir: 'dist/exp3'
    },
    resolve: {
        alias: {
            '/src': '/experiments/experiment3'
        }
    }
});
