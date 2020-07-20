import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import echartTest from '../components/echartTest.vue'
import Welcome from '../components/Welcome.vue'
import Map from '../components/Map.vue'
import Chart from '../components/Chart.vue'
import News from '../components/News.vue'
import Rumors from '../components/Rumors.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        {
            path: '/home', component: Home, redirect: '/welcome', children: [
                { path: '/welcome', component: Welcome },
                { path: '/map', component: Map },
                { path: '/chart', component: Chart },
                { path: '/news', component: News },
                { path: '/rumors', component: Rumors }]
        },
        { path: '/eTest', component: echartTest}
    ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数，表示放行
    //      next() 放行    next('/login') 强制跳转到login页面
    if (to.path == '/login') return next();
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token');
    // 没有token，强制跳转登录页
    if (!tokenStr) return next('/login');
    next();
})

export default router
