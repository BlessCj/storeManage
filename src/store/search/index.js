
import {reqSearchInf} from "@/api"


// state存储数据
const state ={
    infoList:{}
}
// 修改state数据唯一手段
const mutations = {
    GETINF(state,val){
        state.infoList = val
    }
}
// 处理action,可以处理异步请求数据，传给mutations处理
const actions = {
    // serach请求数据
   async getSearchInf({commit},val){
        const res = await reqSearchInf(val)
        // console.log(res.data)
        if(res.code === 200) commit('GETINF',res.data)
    }
}
// 相当于计算属性，可对state数据进行加工处理，更加方便的使用数据
const getters = {
    attrsList(state){
        // 请求失败返回空数组
        return state.infoList.attrsList || []
    },
    goodsList(state) {
        return state.infoList.goodsList || []
    },
    trademarkList(state) {
        return state.infoList.trademarkList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}