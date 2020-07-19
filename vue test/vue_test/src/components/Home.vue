<template>
    <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="" alt="">
                <span>疫情可视化</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- 页面主体区 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="200px">Aside</el-aside>
            <!-- 右侧内容主体 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        methods: {
            logout() {
                window.sessionStorage.clear(); // 清空token
                this.$router.push('/login'); // 重定向到登录页
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