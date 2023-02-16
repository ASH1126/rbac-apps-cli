import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../components/adminComp.vue'

const routes = [
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: Login,
    // },
    {
        path: '/',
        name: 'Admin',
        component: Admin,
    },

]

const router = createRouter({ history: createWebHistory(), routes })
export default router