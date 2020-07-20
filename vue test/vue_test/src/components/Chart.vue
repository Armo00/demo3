<template>
    <el-form>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>疫情图表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card class="box-card">
            <el-form>
                <el-row :gutter="20">
                    <el-col :span="3" class="title">疫苗投放数量：</el-col>
                    <el-col :span="4" class="title">
                        <el-input placeholder="请输入内容"
                                  v-model="input1"
                                  clearable>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="3" class="title">疫苗投放周期：</el-col>
                    <el-col :span="4" class="title">
                        <el-input placeholder="请输入内容"
                                  v-model="input2"
                                  clearable>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="3" class="title">疫苗的有效性：</el-col>
                    <el-col :span="4" class="title">
                        <el-input placeholder="请输入内容"
                                  v-model="input3"
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
                <el-row>
                    <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'管制级别' + index+'：'" class="title">
                        <el-input placeholder="请选择" v-model="domain.value"></el-input>
                        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                        <el-button @click="addDomain">新增管制级别</el-button>
                        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                    </el-form-item>
                </el-row>
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
                dynamicValidateForm: {
                    domains: [{
                        value: ''
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
                var index = this.dynamicValidateForm.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
                    value: '',
                    key: Date.now()
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .title {
        line-height: 50px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 40px;
    }
    .bg-purple {
        background: #e5e9f2;
    }
</style>