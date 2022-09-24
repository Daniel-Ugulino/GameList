import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import UpdateView from '../views/UpdateView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/create',
        name: 'create',
        component: CreateView
    },
    {
        path: '/update',
        name: 'update',
        component: UpdateView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router