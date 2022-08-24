import {createStore} from "vuex";

export default createStore({
    state: {
        isAuth: localStorage.getItem('isAuth') ? JSON.parse(localStorage.getItem('isAuth')) : false,
        currentLogin: localStorage.getItem('currentLogin') ? localStorage.getItem('currentLogin') : '',
        currentRole: localStorage.getItem('currentRole') ? localStorage.getItem('currentRole') : ''
    },
    getters: {

    },
    mutations: {
        loginUser(state, user){
            localStorage.setItem('isAuth',true)
            localStorage.setItem('currentLogin',user.login)
            localStorage.setItem('currentRole',user.role)

            state.isAuth = JSON.parse(localStorage.getItem('isAuth'));
            state.currentLogin = localStorage.getItem('currentLogin');
            state.currentRole = localStorage.getItem('currentRole');
        },
        logout(state) {
            localStorage.setItem('isAuth',false)
            localStorage.setItem('currentLogin','')
            localStorage.setItem('currentRole','')

            state.isAuth = JSON.parse(localStorage.getItem('isAuth'));
            state.currentLogin = localStorage.getItem('currentLogin');
            state.currentRole = localStorage.getItem('currentRole');
        }
    },
    actions: {

    }
})