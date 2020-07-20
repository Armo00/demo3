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
                <el-row :gutter="20">
                    <el-col :span="3" class="title">疫苗投放数量：</el-col>
                    <el-col :span="4" class="title">
                        <el-input placeholder="请输入内容"
                                  v-model="input"
                                  clearable>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="3" class="title">疫苗投放周期：</el-col>
                    <el-col :span="4" class="title">
                        <el-input placeholder="请输入内容"
                                  v-model="input"
                                  clearable>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="3" class="title">疫苗的有效性：</el-col>
                    <el-col :span="4" class="title">
                        <el-input placeholder="请输入内容"
                                  v-model="input"
                                  clearable>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="3" class="title">管制级别：</el-col>
                    <div class="title">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                            <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                    </div>

                </el-row>
                
            </div>
        </el-card>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                input:''
            }
        }

    }
</script>

<style lang="less" scoped>
    .title {
        line-height: 50px;
    }
</style>