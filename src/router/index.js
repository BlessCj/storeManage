import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes.js"
import store from '@/store'
Vue.use(VueRouter)

// 重写push和replace方法，避免链式编程重复传递数据/点击按钮多次跳转同一页面报错了
// 先保存原有的方法
let originPush = VueRouter.prototype.push

let originReplace = VueRouter.prototype.replace

// 重写
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) originPush.call(this, location, resolve, reject)
    else originPush.call(this, location, () => {}, () => {})
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) originReplace.call(this, location, resolve, reject)
    else originReplace.call(this, location, () => {}, () => {})
}
let router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { y: 0 }
    }
})
router.beforeEach(async (to, from, next)=>{
    next()
  let token = store.state.login.token
  let user = store.state.user.token
  if(token){
    // 登陆了不在允许进入登录和注册页面
    if(to.path=="/login"||to.path=="/register"){
        next('/')
    }
   else{
    // 其他页面
     if(user){
        next()
     }
     else {
      try {
        // 没有数据先请求数据
        await store.dispatch('getTokenInf')
        next()
      } catch (error) {
        // token失效重新请求失败重新获取
       next('/login')

      }
     }
   }
  }else {

  }
  
})
export default router