import Vue from "vue"

import Vuex from "vuex"
// 使用
Vue.use(Vuex)

import home from './home'
import search from './search'
import detail from './detail'
import register from './register'
import login from './login'
import user from './user'
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        register,
        login,
        user
    }
    
})