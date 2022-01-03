import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state: {
        user: null,
        isLoggedIn: false
    },
    mutations: {
        login(state, user) {
            state.user = user
            state.isLoggedIn = true
        },
        logoff(state) {
            state.user = null
            state.isLoggedIn = false
        }
    },
    actions: {
        logoff({ commit }) {
            commit('logoff')
            console.log("slm")
        },
        login({ commit }, user) {
            commit('login', user)
        }
    }
})