import { loginApi } from "@/api/user";

const user = {
    namespaced: true,

    state: {
        // access token
        token: "",
        // 用户信息
        info: {}
    },

    getters: {},

    mutations: {
        SET_TOKEN (state, token) {
            state.token = token;
        },
        SET_INFO (state, user) {
            state.info = user;
        }
    },

    actions: {
        login ({ commit }, data) {
            return new Promise((resolve, reject) => {
                loginApi(data).then(res => {
                    const {data} = res.data;

                    if(data && data.token && data.user) {
                        // 把用户信息保存到state
                        commit("SET_TOKEN", data.token);
                        commit("SET_INFO", data.user);
                    }
                    
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            })
        }
    }
}

export default user;