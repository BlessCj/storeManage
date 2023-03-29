// 二次封装axios
import store from "@/store"
import axios from "axios"
// 引入进度条
import nProgress from "nprogress"
// 引入进度条样式
import "nprogress/nprogress.css"
// 用create创建一个实例对象
// request就是axios ,只是换了一件衣服
const requests = axios.create({
        // 会在发送请求地址的前面默认加上api
        baseURL: "/mock",
        // 请求超时时间
        timeout: 5000
    })
    // 请求拦截器:在发送请求前，请求拦截器检测到，可以正在请求前发送一些信息
requests.interceptors.request.use((config) => {
    console.log(store.state.login.token);
        if(store.state.login.token){
            config.headers.token = store.state.login.token
        }
        // config里面的headers属性比较重要
        // 进度条开始
        nProgress.start()
        return config
    })
// 响应拦截器：服务器响应回来一些数据后，可以先干一些事情
requests.interceptors.response.use(
    (res) => {
        // 进度条结束
        nProgress.done()
        return res.data
    },
    (err) => {
        return Promise.reject(new Error("fail"))
    }
)
export default requests