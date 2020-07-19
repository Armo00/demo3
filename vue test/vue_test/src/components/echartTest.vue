<template>
    <div>
        <div id="chartEle1" style="height: 400px;margin: 0 auto;width: 50%"></div>
        <el-button type="info" @click="logout">退出</el-button>
        11111
        <div id="myChartChina" :style="{width: '1000px', height: '1000px'}"></div>
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
        methods: {

            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                var myChartContainer = document.getElementById('myChartChina');
                var resizeMyChartContainer = function () {
                    myChartContainer.style.width = (document.body.offsetWidth /2) + 'px'//页面一半的大小
                }
                resizeMyChartContainer();
                var myChartChina = this.$echarts.init(myChartContainer);

                function randomData() {
                    return Math.round(Math.random() *5);
                }
                // 绘制图表
                var optionMap = {
                    tooltip: {},
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['']
                    },
                    visualMap: {
                        min: 0,
                        max: 200,
                        left: '10%',
                        top: 'bottom',
                        text: ['高', '低'],
                        calculable: true,
                        color: ['#0b50b9', '#c3e2f4']
                    },
                    selectedMode: 'single',
                    series: [
                        {
                            name: '',
                            type: 'map',
                            mapType: 'china',
                            itemStyle: {
                                normal: {
                                    borderColor: 'rgba(0, 0, 0, 0.2)'
                                },
                                emphasis: {
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    shadowBlur: 20,
                                    borderWidth: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },
                            showLegendSymbol: true,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                { name: '北京', value: randomData() },
                                { name: '天津', value: randomData() },
                                { name: '上海', value: randomData() },
                                { name: '重庆', value: randomData() },
                                { name: '河北', value: randomData() },
                                { name: '河南', value: randomData() },
                                { name: '云南', value: randomData() },
                                { name: '辽宁', value: randomData() },
                                { name: '黑龙江', value: randomData() },
                                { name: '湖南', value: randomData() },
                                { name: '安徽', value: randomData() },
                                { name: '山东', value: randomData() },
                                { name: '新疆', value: randomData() },
                                { name: '江苏', value: randomData() },
                                { name: '浙江', value: randomData() },
                                { name: '江西', value: randomData() },
                                { name: '湖北', value: randomData() },
                                { name: '广西', value: randomData() },
                                { name: '甘肃', value: randomData() },
                                { name: '山西', value: randomData() },
                                { name: '内蒙古', value: randomData() },
                                { name: '陕西', value: randomData() },
                                { name: '吉林', value: randomData() },
                                { name: '福建', value: randomData() },
                                { name: '贵州', value: randomData() },
                                { name: '广东', value: randomData() },
                                { name: '青海', value: randomData() },
                                { name: '西藏', value: randomData() },
                                { name: '四川', value: randomData() },
                                { name: '宁夏', value: randomData() },
                                { name: '海南', value: randomData() },
                                { name: '台湾', value: randomData() },
                                { name: '香港', value: randomData() },
                                { name: '澳门', value: randomData() }
                            ]
                        }
                    ]
                }

                myChartChina.setOption(optionMap);
                window.onresize = function () {
                    resizeMyChartContainer();
                    myChartChina.resize();
                }
            },
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
</style>