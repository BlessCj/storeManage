import Vue from 'vue'
import App from './App.vue'
// 引入全局组件 全局组件放在component下 多次使用可注册为全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 引入路由
import router from '@/router'
// 图片懒加载
import VueLazyload from 'vue-lazyload'
// 引入vuex
import store from '@/store'


// 注册全局组件:组件名，哪个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component("Carousel",Carousel)
Vue.component('Pagination',Pagination)
import loadimage from "@/assets/preload.jpg"
Vue.use(VueLazyload,{
    
    loading: loadimage,
  })

Vue.config.productionTip = false
// 引入mock数据
import "@/mock/mockServe"

//全局引入轮播图样式
import "swiper/css/swiper.css" 

new Vue({
    render: h => h(App),
    //注册
    router,
    store,
    beforeCreate(){
        // 全局事件总线
        Vue.prototype.$bus = this
    }
}).$mount('#app')