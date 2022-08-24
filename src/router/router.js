import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import AppointmentsPage from "@/pages/AppointmentsPage";
import EmployeePage from "@/pages/EmployeePage";
import LoginPage from "@/pages/LoginPage";

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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;