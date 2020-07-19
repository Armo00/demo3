<template>
    <div>
        <div id="chartEle1" style="height: 400px;margin: 0 auto;width: 50%"></div>
        <el-button type="info" @click="logout">退出</el-button>
    </div>
    

</template>

<script>
    export default {
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            this.Chart1 = this.$echarts.init(document.getElementById('chartEle1')) //重点
            this.setChartOption()
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
</style>