import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import WindiCSS from 'vite-plugin-windicss'
import VueTypeImports from 'vite-plugin-vue-type-imports'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages(), WindiCSS(),VueTypeImports(),],
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(__dirname, 'src') + '/$1',
      },
    ],
  },
})
