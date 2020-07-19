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