import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '../pages/homepage/index.vue'
import Login from '../pages/login/index.vue'
import Characters from '../pages/characters/index.vue'
import HowToPlay from '../pages/rules/basicRules/howtoplay.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'homePage',
            component: HomePage,
            children: [
                {
                    path: '/characters',
                    name: 'characters',
                    component: Characters,
                },
                {
                    path: 'howtoplay',
                    name: 'howtoplay',
                    component: HowToPlay,
                },
            ],
        },
        {path: '/login', name: 'login', component: Login},
    ],
})

export default router
