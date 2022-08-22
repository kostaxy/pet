import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import AppointmentsPage from "@/pages/AppointmentsPage";
import EmployeePage from "@/pages/EmployeePage";

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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;