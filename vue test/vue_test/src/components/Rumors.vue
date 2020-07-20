<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>谣言</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card class="box-card">
            <div class="demo-input-suffix">
                Card
            </div>
        </el-card>

    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
</style>