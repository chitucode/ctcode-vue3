import HttpRequest from "@/utils/httpRequest"

function useRequest() {
    const httpRequest = new HttpRequest({
        // 你的axios基准路径, https://vitejs.dev/guide/env-and-mode.html
        baseURL: import.meta.env.MODE === "development" ? "" : "http://127.0.0.1:5000"
    });
    // 自定义异步请求错误处理
    httpRequest.useErrorHandles(error => {
        console.log(error.response)
    })
    return httpRequest.createRequest();
}
// request请求方法
export const request = useRequest();

function setupRequest(app) {
    // 绑定$request属性到Vue原型，类似Vue.prototype。
    app.config.globalProperties.$request = request;
}

const setup = {
    install(app) {
        setupRequest(app);
    }
}

export default setup;