import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//����ȫ����ʽ��
import './assets/css/global.css'

import axios from 'axios'
// ���������·��

axios.defaults.baseURL = ''
Vue.prototype.$http = axios


Vue.config.productionTip = false

//����echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
import Message from 'element-ui'
Vue.prototype.$message = Message

//�����й���ͼ
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
