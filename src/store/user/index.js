import { reqUserInf } from '@/api'

const state = {
    userList:localStorage.getItem('Token')
}
const mutations = {
    // GETINFO(state, val) {
    //     state.userList = val
    // }
}
const actions = {
    async getTokenInf({ commit }) {
        const res = await reqUserInf()
        if(res.code == 208){
            localStorage.setItem('Token',"123456")
        }
        // console.log(res)
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}