import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '../pages/homepage/index.vue'
import Login from '../pages/login/index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'homepage', component: HomePage},
        {path: '/login', name: 'login', component: Login},
    ],
})

export default router
