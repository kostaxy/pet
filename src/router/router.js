import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import AppointmentsPage from "@/pages/AppointmentsPage";
import EmployeePage from "@/pages/EmployeePage";
import LoginPage from "@/pages/LoginPage";
import store from '@/store/index.js';


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/appointments',
        component: AppointmentsPage
    },
    {
        path: '/employee',
        component: EmployeePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    },
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);

    if (authRequired && !store.state.isAuth) {

        return '/login';
    }
})

export default router;