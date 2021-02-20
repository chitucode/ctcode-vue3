import { createApp } from 'vue'
import App from './App.vue'

// 导入路由对象
import router from "@/router/index"

// createApp(App).mount('#app')

// 创建app
const app = createApp(App);
app.use(router);
app.mount("#app");
