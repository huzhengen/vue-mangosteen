import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://www.npmjs.com/package/@vitejs/plugin-vue-jsx
import vueJsx from '@vitejs/plugin-vue-jsx'
import { svgstore } from './src/vite_plugins/svgstore'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3001, //指定端口号
    open: true,
    hmr: {
      clientPort: 1534, // 修改ws端口的地方
    },
    proxy: {
      '/api/v1': {
        target: 'http://121.196.236.94:3000/',
      }
    }
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      transformOn: true,
      mergeProps: true,
    }),
    svgstore(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
})
