import {createStore} from "vuex";

export default createStore({
    state: {
        isAuth: false,
        currentLogin: '',
        currentRole: ''
    },
    getters: {

    },
    mutations: {
        loginUser(state, user){
            state.isAuth = true
            state.currentLogin = user.login;
            state.currentRole = user.role;
        },
        logout(state) {

            state.isAuth = false
            state.currentLogin = ''
            state.currentRole = ''
        }
    },
    actions: {

    }
})