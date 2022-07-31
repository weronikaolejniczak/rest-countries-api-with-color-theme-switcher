/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // TODO: fix TS error
  // @ts-ignore
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
