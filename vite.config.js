import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 导入jsx插件
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx({})
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		}
	}
})
