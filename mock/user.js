const Mock = require('mockjs')

export default [
    {
        url: '/api/login',
        method: 'POST',
        response: ({ body }) => {
            if(body.username === "admin" && body.password === "admin") {
                return Mock.mock({
                    code: 0,
                    message: 'ok',
                    type: 'success',
                    data: {
                        token: "@paragraph( 18 )",
                        user: {
                            id: '@integer(0, 100)',
                            realname: '@cname( 4 )',
                            role: 'administrator'
                        }
                    }
                })
            } else {
                return {
                    code: 1,
                    message: "fail",
                    type: "error",
                    data: null
                }
            }
        }
    }
]