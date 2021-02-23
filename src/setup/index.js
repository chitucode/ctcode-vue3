import HttpRequest from "@/utils/httpRequest"

function setupRequest(app) {
    const httpRequest = new HttpRequest({
        // 你的axios基准路径, https://vitejs.dev/guide/env-and-mode.html
        baseURL: import.meta.env.MODE === "development" ? "" : "http://127.0.0.1:5000"
    });

    // 自定义异步请求错误处理
    // httpRequest.useErrorHandles(error => {
    //     console.log(error.response)
    // })

    // 绑定$request属性到Vue原型，类似Vue.prototype。
    app.config.globalProperties.$request = httpRequest.createRequest();
}

const setup = {
    install(app) {
        setupRequest(app);
    }
}

export default setup;