import { resolve } from 'path';
// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 导入jsx插件
import vueJsx from '@vitejs/plugin-vue-jsx'
// 按需加载样式插件
import styleImport from 'vite-plugin-style-import';
// 导入viteMock
import { viteMockServe } from 'vite-plugin-mock';

//export default defineConfig({
export default ({ command }) => {
	return {
		plugins: [
			vue(),
			vueJsx({}),
			styleImport({
				libs: [{
					libraryName: 'ant-design-vue',
					esModule: true,
					resolveStyle: (name) => {
						return `ant-design-vue/es/${name}/style/css`;
					},
				}]
			}),
			viteMockServe({
				supportTs: false,
				mockPath: 'mock',
				localEnabled: command === 'serve'
			}),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			}
		}
	}
}
//})
