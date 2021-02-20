import Index from "@/views/index.vue";

export const routes = [

    // 首页
    {
        path: "/",
        name: "index",
        component: Index,
        meta: {}
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue")
    }
]