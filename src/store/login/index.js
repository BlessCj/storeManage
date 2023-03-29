import { reqLogin } from '@/api'

const state = {
    token: ""
}
const mutations = {
    GETINFO(state, val) {
        state.token = val
    }
}
const actions = {
    async getLogin({ commit }, val) {
        const res = await reqLogin(val)
        // console.log(res);
        if (res.code == 200) {
            commit('GETINFO', res.data.token)
            return "ok"
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