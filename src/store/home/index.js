// 引入接口使用
import { reqCategoryList,reqListImages,reqListFloor } from '@/api/index'
// state存储数据
const state = {
    categoryList: [],
    listImages:[],
    listFloor:[]
}
// 修改state唯一手段
const mutations = {
    // 修改三级列表数据
    GETCATEGORYLIST(state,value){
        // console.log(value);
        state.categoryList = value
    },
    // 修改轮播图数据
    GETLISTIMG(state,value) {
        // console.log(value,"iamge信息");
        state.listImages = value
    },
    // 修改楼层数据
    GETFLOORLIST(state,val){
        state.listFloor = val
    }
    
}
// 处理action,可以处理异步请求数据，传给mutations处理
const actions = {
    async getCategoryList({ commit }) {
        // await返回promise成功的数据
        let result = await reqCategoryList()
        if (result.code === 200) commit('GETCATEGORYLIST',result.data)
    },
    // 将banners数据提交给mutations
   async getListImages({ commit }){
        let res = await reqListImages()
        // console.log(res);
        if (res.code === 200) commit('GETLISTIMG',res.data)
    },
     // 将floor数据提交给mutations
   async getListFloor({commit}) {
        let res = await reqListFloor()
        if(res.code === 200) commit('GETFLOORLIST',res.data)
    }
}
// 相当于计算属性，可对state进行加工处理
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}