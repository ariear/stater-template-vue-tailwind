import { createRouter , createWebHistory } from "vue-router"
import Home from '../components/Home.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'text-gray-400'    // you can customize when route active here
})

export default router