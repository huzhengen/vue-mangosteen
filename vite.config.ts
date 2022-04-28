import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://www.npmjs.com/package/@vitejs/plugin-vue-jsx
import vueJsx from '@vitejs/plugin-vue-jsx'
import { svgstore } from './src/vite_plugins/svgstore'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      transformOn: true,
      mergeProps: true,
    }),
    svgstore(),
  ],
})
