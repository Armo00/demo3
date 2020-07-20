<template>
    <div>
        <div id="chartEle1" style="height: 400px;margin: 0 auto;width: 50%"></div>
        <el-button type="info" @click="logout">退出</el-button>
        11111
        <div class="map_Box">
            <div id="myChartChina" :style="{width: '100%', height: '800px'}" class="chinaMap"></div>
        </div>
            
    </div>
    
    

</template>

<script>
    export default {
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            this.Chart1 = this.$echarts.init(document.getElementById('chartEle1')) //重点
            this.setChartOption()

            this.drawLine();
        },
        data() {
            return {
                currentStatus: {
                    name: '当前感染人数',
                    data: [
                        { name: '北京', value: 116 },
                        { name: '天津', value: 5 },
                        { name: '上海', value: 20 },
                        { name: '重庆', value: 1 },
                        { name: '河北', value: 2 },
                        { name: '河南', value: 2 },
                        { name: '云南', value: 0 },
                        { name: '辽宁', value: 8 },
                        { name: '黑龙江', value: 0 },
                        { name: '湖南', value: 0 },
                        { name: '安徽', value: 0 },
                        { name: '山东', value: 6 },
                        { name: '新疆', value: 30 },
                        { name: '江苏', value: 1 },
                        { name: '浙江', value: 2 },
                        { name: '江西', value: 0 },
                        { name: '湖北', value: 0 },
                        { name: '广西', value: 1 },
                        { name: '甘肃', value: 0 },
                        { name: '山西', value: 1 },
                        { name: '内蒙古', value: 12 },
                        { name: '陕西', value: 3 },
                        { name: '吉林', value: 0 },
                        { name: '福建', value: 2 },
                        { name: '贵州', value: 0 },
                        { name: '广东', value: 14 },
                        { name: '青海', value: 0 },
                        { name: '西藏', value: 0 },
                        { name: '四川', value: 7 },
                        { name: '宁夏', value: 0 },
                        { name: '海南', value: 0 },
                        { name: '台湾', value: 7 },
                        { name: '香港', value: 579 },
                        { name: '澳门', value: 0 }
                    ],
                },
                totalStatus: {
                    name: '累计感染人数',
                    data: [
                        { name: '北京', value: 929 },
                        { name: '天津', value: 203 },
                        { name: '上海', value: 733 },
                        { name: '重庆', value: 583 },
                        { name: '河北', value: 349 },
                        { name: '河南', value: 1276 },
                        { name: '云南', value: 188 },
                        { name: '辽宁', value: 164 },
                        { name: '黑龙江', value: 947 },
                        { name: '湖南', value: 1019 },
                        { name: '安徽', value: 991 },
                        { name: '山东', value: 798 },
                        { name: '新疆', value: 106 },
                        { name: '江苏', value: 655 },
                        { name: '浙江', value: 1270 },
                        { name: '江西', value: 932 },
                        { name: '湖北', value: 68135 },
                        { name: '广西', value: 255 },
                        { name: '甘肃', value: 167 },
                        { name: '山西', value: 201 },
                        { name: '内蒙古', value: 250 },
                        { name: '陕西', value: 322 },
                        { name: '吉林', value: 155 },
                        { name: '福建', value: 364 },
                        { name: '贵州', value: 147 },
                        { name: '广东', value: 1659 },
                        { name: '青海', value: 18 },
                        { name: '西藏', value: 1 },
                        { name: '四川', value: 602 },
                        { name: '宁夏', value: 75 },
                        { name: '海南', value: 171 },
                        { name: '台湾', value: 454 },
                        { name: '香港', value: 1885 },
                        { name: '澳门', value: 46 }
                    ],
                }
            }
        },
        methods: {


            
            logout() {
                window.sessionStorage.clear(); // 清空token
                this.$router.push('/login'); // 重定向到登录页
            },
            setChartOption() {
                let option = {
                    title: {
                        text: 'echarts使用测试',
                        subtext: '纯属虚构'
                        // x:'center'
                    },
                    color: ['#3398DB'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            barWidth: '60%',
                            data: [10, 52, 200, 334, 390, 330, 220]
                        }
                    ]
                };
                this.Chart1.setOption(option, true);
                //setOption：设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过它完成，ECharts会合并新的参数和数据，然后刷新图表。
            }
            
        }
    };
</script>

<style lang="less" scoped>
    .home-container{
        height:100%;
    }
    .el-header {
        background-color: #373D41;
    }
    .el-aside{
        background-color:#333744;
    }
    .el-main{
        background-color:#EAEDF1;
    }
    .chinaMap {
        border: 3px solid #333744;
        transform: translate(20%,0%);
    }
    .map_Box {
        border: 5px solid #333744;
        height:1500px;
        width:2500px;

    }
</style>