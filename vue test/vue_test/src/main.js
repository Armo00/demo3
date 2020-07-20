import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入全局样式表
import './assets/css/global.css'


import axios from 'axios'
// 配置请求根路径

axios.defaults.baseURL = ''
Vue.prototype.$http = axios


Vue.config.productionTip = false

//导入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


//导入中国地图
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')