/* eslint-disable no-extra-boolean-cast */
import { defineConfig, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';

import { viteMockServe } from 'vite-plugin-mock';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    base: './',
    plugins: [
      react(),
      // mock
      viteMockServe({
        mockPath: 'mock',
        localEnabled: !!process.env.USE_MOCK,
        prodEnabled: !!process.env.USE_CHUNK_MOCK,
        logger: false, 
        supportTs: true
      }),
      visualizer()
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src'
        }
      ]
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    }
  };
});