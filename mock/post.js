const Mock = require('mockjs')

export default [
    {
        url: '/api/posts',
        method: 'GET',
        response: () => {
            return Mock.mock({
                code: 0,
                message: 'ok',
                type: 'success',
                'data|10': [
                    {
                        id: '@integer(0, 100)',
                        title: '@cparagraph( 2 )',
                        create_time: "@date('yyyy-MM-dd')",
                        author: '@cname()'
                    }
                ]
            })
        }
    }
]