import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        { path: '/home', component: Home }
    ]
})

// ����·�ɵ�������
router.beforeEach((to, from, next) => {
    // to ��Ҫ���ʵ�·��
    // from ������ĸ�·����ת����
    // next ��һ����������ʾ����
    //      next() ����    next('/login') ǿ����ת��loginҳ��
    if (to.path == '/login') return next();
    // ��ȡtoken
    const tokenStr = window.sessionStorage.getItem('token');
    // û��token��ǿ����ת��¼ҳ
    if (!tokenStr) return next('/login');
    next();
})

export default router
