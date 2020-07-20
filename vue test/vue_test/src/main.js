import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
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
import Message from 'element-ui'
Vue.prototype.$message = Message

//导入中国地图
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
