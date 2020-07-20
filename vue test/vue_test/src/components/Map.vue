<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>疫情地图</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card class="box-card">
            <div class="demo-input-suffix">
                <div id="myChartChina" :style="{width: '100%', height: '800px'}" class="chinaMap"></div>
            </div>
        </el-card>

    </div>
</template>

<script>
    export default {
        mounted() {

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


            drawLine(showData) {
                // 基于准备好的dom，初始化echarts实例
                var myChartContainer = document.getElementById('myChartChina');
                var resizeMyChartContainer = function () {
                    myChartContainer.style.width = (document.body.offsetWidth / 1.5) + 'px'//页面一半的大小
                }
                resizeMyChartContainer();
                var myChartChina = this.$echarts.init(myChartContainer);

                function randomData() {
                    return Math.round(Math.random() * 5);
                }
                // 绘制图表
                var optionMap = {
                    title: {
                        text: '全国疫情数据',
                        subtext: 'Developed By NEXT Aerospace',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            //定义一个res变量来保存最终返回的字符结果,并且先把地区名称放到里面
                            var res = params.name + '<br />';
                            //定义一个变量来保存series数据系列
                            var myseries = optionMap.series;
                            //循环遍历series数据系列
                            for (var i = 0; i < myseries.length; i++) {
                                //在内部继续循环series[i],从data中判断：当地区名称等于params.name的时候就将当前数据和名称添加到res中供显示
                                for (var k = 0; k < myseries[i].data.length; k++) {
                                    //console.log(myseries[i].data[k].name);
                                    //如果data数据中的name和地区名称一样
                                    if (myseries[i].data[k].name == params.name) {
                                        //将series数据系列每一项中的name和数据系列中当前地区的数据添加到res中
                                        res += myseries[i].name + ':' + myseries[i].data[k].value + '<br />';
                                    }
                                }
                            }
                            return res;
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['当前感染人数', '累计感染人数']
                    },
                    visualMap: {
                        min: 0,
                        max: 2000,
                        left: '10%',
                        top: 'bottom',
                        text: ['高', '低'],
                        calculable: true,
                        color: ['#DC143C', '#F0FFFF']
                    },
                    selectedMode: 'single',
                    series: [
                        {
                            name: this.currentStatus.name,
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
                            data: this.currentStatus.data,
                        },
                        {
                            name: this.totalStatus.name,
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
                            data: this.totalStatus.data,
                        },

                    ]
                }

                myChartChina.setOption(optionMap);
                window.onresize = function () {
                    resizeMyChartContainer();
                    myChartChina.resize();
                }
            },
           
        }

    }
</script>

<style lang="less" scoped>
    .chinaMap {
        border: 3px solid #333744;
        transform: translate(0%,0%);
    }
</style>