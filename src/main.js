import { createApp } from 'vue'
import App from './App.vue'

// 导入路由对象
import router from "@/router/index"

// 完整导入Antd组件库
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 导入setup
import setup from "@/setup/index"

// 创建app
export const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(setup)
app.mount("#app");