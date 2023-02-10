import { createRouter, createWebHistory } from 'vue-router'
import Body from '../components/bodyComp.vue'

const routes = [
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: Login,
    // },
    {
        path: '/',
        name: 'Body',
        component: Body,
    },

]

const router = createRouter({ history: createWebHistory(), routes })
export default router