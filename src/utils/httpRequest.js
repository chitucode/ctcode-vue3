import axios from "axios"
import _ from "lodash"

export default class HttpRequest {

    // 错误处理函数的集合, #号开头为私有属性
    #responseHandles = [];

    /**
     * 构造函数
     * @param {Object} options
     */
    constructor(options = {}) {
        this.request = axios.create(options);
        this.setupInterceptors();
    }

    /**
     * 外部添加响应错误处理的方法
     * @param {Function} callback 
     */
    useErrorHandles(callback) {
        if( typeof callback === "function" ) {
            this.#responseHandles.push(callback)
        }
    }

    // 请求错误处理
    reqErrorHandle() {
        return error => {
            return Promise.reject(error);
        }
    }

    // 响应的错误处理
    resErrorHandle() {
        return error => {
            this.#responseHandles.forEach(handle => {
                handle(error);
            });
        }
    }

    // 设置拦截器
    setupInterceptors() {
        this.request.interceptors.request.use(config => {
            // 通常情况会在这里添加公共请求头，比如Token
            // config.headers["Authorization"] = ACCESS_TOKEN
            return config;
        }, this.reqErrorHandle())

        // 响应拦截器
        this.request.interceptors.response.use((response) => {
            return response;
        }, this.resErrorHandle());
    }

    // 创建返回基于axios的请求方法
    createRequest() {
        return config => {
            const copyConfig = _.cloneDeep(config);

            return new Promise((resolve, reject) => {
                this.request(copyConfig).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            })
        } 
    }
}
