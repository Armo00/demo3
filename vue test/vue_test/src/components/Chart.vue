<template>
    <el-form>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>疫情图表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 第一行三个输入框 -->
            <el-form :inline="true">
                <el-form-item label="疫苗投放数量：">
                    <el-input placeholder="请输入内容" v-model="input1" clearable class="inputBox"></el-input>
                </el-form-item>
                <el-form-item label="疫苗投放周期：" label-width="135px">
                    <el-input placeholder="请输入内容" v-model="input2" clearable class="inputBox"></el-input>
                </el-form-item>
                <el-form-item label="疫苗的有效性：" label-width="135px">
                    <el-input placeholder="请输入内容" v-model="input3" clearable class="inputBox"></el-input>
                </el-form-item>
            </el-form>
            <!-- 第二行 动态增减表单项 -->
            <el-form ref="controlLevelForm" :model="controlLevelForm" label-width="110px">
                <el-form-item v-for="(domain, index) in controlLevelForm.domains"
                              :label="'管制级别' + index + '：'"
                              :key="domain.key"
                              :prop="'domains.' + index + '.value'">
                    <el-select v-model="domain.value" placeholder="请选择" class="inputBox">
                        <el-option label="级别一" value="1"></el-option>
                        <el-option label="级别二" value="2"></el-option>
                        <el-option label="级别三" value="3"></el-option>
                    </el-select>
                    <el-date-picker v-model="domain.date1" type="date" placeholder="选择起始日期" class="dateBox"></el-date-picker>
                    <el-date-picker v-model="domain.date2" type="date" placeholder="选择结束日期" class="dateBox"></el-date-picker>
                    <el-button type="danger" @click.prevent="removeDomain(domain)" class="btns">删除</el-button>
                </el-form-item>
                <!-- 增减表单项 -->
                <el-form-item>
                    <el-button @click="addDomain">新增管制级别</el-button>
                    <el-button @click="resetForm('controlLevelForm')">重置管制级别</el-button>
                    <el-button type="primary" @click="submitForm('controlLevelForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                input1: '',
                input2: '',
                input3: '',
                
                controlLevelForm: {
                    domains: [{
                        value: '',
                        date1: '',
                        date2: ''
                    }]
                }
            }
        },

        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.controlLevelForm.domains.indexOf(item)
                if (index !== -1) {
                    this.controlLevelForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.controlLevelForm.domains.push({
                    value: '',
                    key: Date.now()
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .inputBox {
        width: 150px;
    }
    .btns {
        margin-left:10px;
    }
    .dateBox {
        margin-left: 30px;
        width: 200px;
    }
</style>