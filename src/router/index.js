import Vue from 'vue'
import VueRouter from 'vue-router'
import MAin from '../views/Main'
import LOgin from '../views/Login/login'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MAin,
        // 路由重定向
        redirect: '/home',
        children: []
    },
    {
        path: '/login',
        name: 'login',
        component: LOgin,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})



export default router