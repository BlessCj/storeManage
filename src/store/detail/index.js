import {reqDetailInf} from '@/api'

const state = {
    detailInf:{}
}
const mutations = {
    GETINFO(state,val){
        state.detailInf = val
    }
}
const actions = {
   async getDetailInf({commit},val){
      const res = await reqDetailInf(val)
      if(res.code == 200) commit('GETINFO',res.data)
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}