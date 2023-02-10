import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: bodyComp,
    // },
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: Login,
    // },
    {
        path: '/admin',
        name: 'Dashboard',
        component: Dashboard,
    },

]

const router = createRouter({ history: createWebHistory(), routes })
export default router