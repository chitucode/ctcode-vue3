import { createRouter, createWebHistory } from "vue-router"
import { routes } from "./router.config"

const router = createRouter({
    // 使用history路由, 如果需要hash路由则使用createWebHashHistory
    history: createWebHistory(), 
    routes
});

export default router;