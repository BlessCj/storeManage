// api管理文件
import requests from "./request";

import mockRequest from "./mockRequest";
// http://gmall-h5-api.atguigu.cn 服务器
// 三级联动接口
// axios返回一个promise对象
export const reqCategoryList = () => requests(
    {
        url: '/product/getBaseCategoryList',
        method: 'get',
    }
)
// 暴露mock数据
// 模拟轮播图数据
export const reqListImages = () => mockRequest({
    url: '/banner',
    method: 'get'
})
// 模拟floor数据
export const reqListFloor = () => mockRequest.get('/floor')

// 获取search数据 post请求函数写法
// 客户端请求数据时，params传递时，没有数据时必须要是个空对象，不然会报错
// export const reqSearchInf = (params) => requests.post('/list',params)

// 对象写法
export const reqSearchInf = params => requests({ url: '/list', method: 'post', data: params })

// 获取detail页的数据
export const reqDetailInf = (skuId) => mockRequest({ url: `/item`, method: 'get'})

// 手机验证码获取数据
export const reqCodeMessage = (phone)=>requests.get(`/user/passport/sendCode/${phone}`)

// 注册按钮接口
export const reqRegisterCode = (data)=>requests({
    url:'/user/passport/register',
    data:data,
    method: 'post',
})
// 登录接口
export const reqLogin = (data)=>requests.post("/user/passport/login",data)

// 用户用token获取用户信息的接口（/api/user/passport/auth/getUserInfo）了
export const reqUserInf = ()=>requests.post('/user/passport/auth/getUserInfo')