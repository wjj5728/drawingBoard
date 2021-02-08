import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
const pathResolve = (pathStr: string): string => {
  return resolve(__dirname, '.', pathStr);
};
// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': pathResolve('./src'),
  },
  optimizeDeps: {
    include: ['element-plus/lib/locale/lang/zh-cn'],
  },
  plugins: [vue(), vueJsx()],
});
