<template>
    <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="../assets/logo.png" alt="" height="60px">
                <span>疫情可视化</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- 页面主体区 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse ? '64px' : '200px'">
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <!-- 侧边栏菜单区域 -->
                <el-menu background-color="#333744"
                         text-color="#fff"
                         active-text-color="#409EFF"
                         :collapse="isCollapse"
                         :collapse-transition="false">
                    <el-menu-item index="1" @click="goMap">
                        <!-- 图标 -->
                        <i class="el-icon-map-location"></i>
                        <!-- 文本 -->
                        <span slot="title">导航一</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="goChart">
                        <i class="el-icon-s-data"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="goNews">
                        <i class="el-icon-s-comment"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="goRumors">
                        <i class="el-icon-reading"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <!-- 右侧内容主体 -->
            <el-main>
                <!-- 疫情地图页面 -->
                <div v-show="mapPage">
                    疫情地图
                    <div id="myChartChina" :style="{width: '1000px', height: '1000px'}"></div>
                </div>

                <!-- 图表页面 -->
                <div v-show="chartPage">
                    图表
                </div>

                <!-- 新闻页面 -->
                <div v-show="newsPage">
                    新闻
                </div>

                <!-- 谣言页面 -->
                <div v-show="rumorsPage">
                    谣言
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                mapPage: true,
                chartPage: false,
                newsPage: false,
                rumorsPage: false,

                // 是否折叠
                isCollapse: false
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            logout() {
                window.sessionStorage.clear(); // 清空token
                this.$router.push('/login'); // 重定向到登录页
            },

            // 点击按钮，切换菜单的折叠与展开
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            },

            goMap() {
                this.hideAll(),
                this.mapPage = true
            },
            goChart() {
                this.hideAll(),
                this.chartPage = true
            },
            goNews() {
                this.hideAll(),
                this.newsPage = true
            },
            goRumors() {
                this.hideAll(),
                this.rumorsPage = true
            },
            hideAll() {
                this.mapPage = false,
                this.chartPage = false,
                this.newsPage = false,
                this.rumorsPage = false
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                var myChartContainer = document.getElementById('myChartChina');
                var resizeMyChartContainer = function () {
                    myChartContainer.style.width = (document.body.offsetWidth / 2) + 'px'//页面一半的大小
                }
                resizeMyChartContainer();
                var myChartChina = this.$echarts.init(myChartContainer);

                function randomData() {
                    return Math.round(Math.random() * 5);
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
        }
    };
</script>

<style lang="less" scoped>
    .home-container{
        height:100%;
    }
    .el-header {
        background-color: #373D41;
        display:flex;
        justify-content:space-between;
        padding-left:0;
        align-items:center;
        color:#fff;
        font-size:25px;
        >div{
                display:flex;
                align-items:center;
                span{
                        margin-left:15px;
                    }
            }
    }
    .el-aside{
        background-color:#333744;
        .el-menu{
                    border-right:none;
                    .el-menu-item{
                                     i{
                                          margin-right:15px;
                                      }
                                 }
                }
    }

    .el-main{
        background-color:#EAEDF1;
        
    }

    .toggle-button{
        background-color:#4A5064;
        font-size:10px;
        line-height:24px;
        color:#fff;
        text-align:center;
        letter-spacing:0.2em;
        cursor:pointer;
    }
</style>