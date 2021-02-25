import { request } from "@/setup"

export function loginApi(data) {
    return request({
        url: "/api/login",
        method: "POST",
        data
    })
}