import { reqCodeMessage, reqRegisterCode } from '@/api'

const state = {
    detailInf: ""
}
const mutations = {
    GETINFO(state, val) {
        state.detailInf = val
    }
}
const actions = {
    async getCodeMessage({ commit }, val) {
        const res = await reqCodeMessage(val)
       
        // console.log(res);
        if (res.code == 200) {
            commit('GETINFO', res.data)
            return "ok"
        }
        else {
            return Promise.reject(new Error('fail'))
        }
    },
    // 必须二个参数
    async getRegisterCode(context,val) {
        console.log(val);
        const res = await reqRegisterCode(val)
        console.log(res);
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}