<template>
    <el-form>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>疫情图表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 选择区域 -->
            <el-form-item label="选择地区：">
                <el-select v-model="select" placeholder="请选择" class="inputBox">
                    <el-option v-for="item in options"
                               :key="item.select"
                               :label="item.label"
                               :value="item.select">
                    </el-option>
                </el-select>
            </el-form-item>
            

            <!-- 折线图区域 -->
            <div>
                <div class="chartbox0">
                    <div id="infoChart" style="height: 400px;margin: 0 auto;width: 100%;">
                    </div>
                </div>
                <div class="chartboxA">
                    <div id="chartEle1" style="height: 400px;margin: 0 auto;width: 100%;"></div>
                </div>
                <div class="chartboxB">
                    <div id="chartEle2" style="height: 400px;margin: 0 auto;width: 100%;"></div>
                </div>
            </div>

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
                options: [
                    { select: '选项1', label: '上海' },
                    { select: '选项2', label: '北京' },
                    { select: '选项3', label: '天津' },
                    ],
                select: '',

                input1: '',
                input2: '',
                input3: '',
                
                controlLevelForm: {
                    domains: [{
                        value: '',
                        date1: '',
                        date2: ''
                    }]
                },
                charData: {
                    dateDate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179],
                    realTotalData: [25, 28, 28, 32, 36, 49, 51, 60, 103, 125, 170, 241, 330, 478, 643, 891, 1146, 1530, 2042, 2649, 3273, 3994, 4738, 5911, 6993, 8094, 9415, 10851, 12557, 14378, 16153, 18266, 20674, 22908, 24758, 27354, 29776, 32532, 36156, 39035, 41675, 44519, 47248, 49902, 52097, 53781, 55465, 57131, 58672, 59970, 61555, 62874, 64204, 65649, 67022, 67863, 68799, 69725, 70547, 71284, 71876, 72382, 72841, 73299, 73791, 74196, 74737, 75122, 75600, 75937, 76225, 76415, 76604, 76786, 76984, 77210, 77348, 77450, 77586, 77711, 77838, 77935, 78020, 78145, 78262, 78389, 78504, 77635, 77744, 77825, 77895, 77978, 78042, 78147, 78236, 78362, 78450, 78558, 78664, 78729, 78785, 78845, 78905, 78939, 79016, 79126, 79204, 79268, 79324, 79401, 79488, 79533, 79566, 79594, 79621, 79644, 79668, 79682, 79701, 79708, 79715, 79722, 79736, 79740, 79746, 79757, 79767, 79774, 79786, 79791, 79802, 79807, 79812, 79824, 79824, 79831, 79842, 79848, 79853, 79864, 79875, 79882, 79887, 79895, 79903, 79905, 79913, 79922, 79926, 79944, 79949, 79963, 79968, 79969, 79982, 79990, 79997, 80007, 80015, 80026, 80044, 80054, 80068, 80087, 80102],
                    realIncData: [25, 3, 0, 4, 4, 13, 2, 9, 43, 22, 45, 71, 89, 148, 165, 248, 255, 384, 512, 607, 624, 721, 744, 1173, 1082, 1101, 1321, 1436, 1706, 1821, 1775, 2113, 2408, 2234, 1850, 2596, 2422, 2756, 3624, 2879, 2640, 2844, 2729, 2654, 2195, 1684, 1684, 1666, 1541, 1298, 1585, 1319, 1330, 1445, 1373, 841, 936, 926, 822, 737, 592, 506, 459, 458, 492, 405, 541, 385, 478, 337, 288, 190, 189, 182, 198, 226, 138, 102, 136, 125, 127, 97, 85, 125, 117, 127, 115, -869, 109, 81, 70, 83, 64, 105, 89, 126, 88, 108, 106, 65, 56, 60, 60, 34, 77, 110, 78, 64, 56, 77, 87, 45, 33, 28, 27, 23, 24, 14, 19, 7, 7, 7, 14, 4, 6, 11, 10, 7, 12, 5, 11, 5, 5, 12, 0, 7, 11, 6, 5, 11, 11, 7, 5, 8, 8, 2, 8, 9, 4, 18, 5, 14, 5, 1, 13, 8, 7, 10, 8, 11, 18, 10, 14, 19, 15],
                    projectedTotalData: [227, 289, 360, 441, 535, 643, 769, 915, 1083, 1276, 1499, 1755, 2047, 2382, 2763, 3196, 3687, 4243, 4869, 5573, 6362, 7242, 8221, 9304, 10499, 11811, 13242, 14797, 16476, 18279, 20202, 22239, 24382, 26622, 28944, 31333, 33773, 36244, 38729, 41207, 43659, 46068, 48416, 50689, 52875, 54963, 56945, 58816, 60572, 62213, 63739, 65151, 66454, 67651, 68747, 69749, 70661, 71491, 72243, 72924, 73540, 74096, 74597, 75048, 75454, 75819, 76147, 76441, 76705, 76942, 77155, 77345, 77516, 77669, 77806, 77949, 78079, 78198, 78306, 78406, 78497, 78580, 78657, 78728, 78794, 78855, 78912, 78965, 79015, 79062, 79106, 79147, 79186, 79224, 79259, 79293, 79326, 79357, 79387, 79416, 79445, 79472, 79499, 79525, 79550, 79575, 79599, 79623, 79647, 79670, 79693, 79715, 79738, 79760, 79782, 79803, 79825, 79846, 79868, 79889, 79910, 79931, 79952, 79972, 79993, 80014, 80034, 80055, 80075, 80096, 80116, 80136, 80157, 80177, 80197, 80217, 80238, 80258, 80278, 80298, 80318, 80338, 80358, 80378, 80399, 80419, 80439, 80459, 80479, 80499, 80519, 80539, 80559, 80579, 80599, 80619, 80639, 80659, 80679, 80699, 80719, 80739, 80759, 80779, 80799, 80819, 80839, 80859, 80879, 80899, 80919, 80939, 80959, 80979, 80999, 81019, 81039, 81059, 81079],
                    projectedIncData: [227, 62, 71, 81, 94, 108, 126, 146, 168, 193, 223, 256, 292, 335, 381, 433, 491, 556, 626, 704, 789, 880, 979, 1083, 1195, 1312, 1431, 1555, 1679, 1803, 1923, 2037, 2143, 2240, 2322, 2389, 2440, 2471, 2485, 2478, 2452, 2409, 2348, 2273, 2186, 2088, 1982, 1871, 1756, 1641, 1526, 1412, 1303, 1197, 1096, 1002, 912, 830, 752, 681, 616, 556, 501, 451, 406, 365, 328, 294, 264, 237, 213, 190, 171, 153, 137, 143, 130, 119, 108, 100, 91, 83, 77, 71, 66, 61, 57, 53, 50, 47, 44, 41, 39, 38, 35, 34, 33, 31, 30, 29, 29, 27, 27, 26, 25, 25, 24, 24, 24, 23, 23, 22, 23, 22, 22, 21, 22, 21, 22, 21, 21, 21, 21, 20, 21, 21, 20, 21, 20, 21, 20, 20, 21, 20, 20, 20, 21, 20, 20, 20, 20, 20, 20, 20, 21, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
                },
                

            }
        },
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            this.Chart0 = this.$echarts.init(document.getElementById('infoChart')) //echart2
            this.setChartOption0()
            this.Chart1 = this.$echarts.init(document.getElementById('chartEle1')) //echart1
            this.setChartOption()
            this.Chart2 = this.$echarts.init(document.getElementById('chartEle2')) //echart2
            this.setChartOption2()
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
            },
            setChartOption0() {
                var maleCount = 717118675;
                var femaleCount = 680596325;
                let option = {
                    title: {
                        text: '选定区域人口情况',
                        subtext: '总人口: ' + String(Math.round((maleCount + femaleCount)/10000))+'万人'
                        // x:'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    
                    series: [
                        {
                            name: '性别',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: [0, '30%'],

                            label: {
                                position: 'inner'
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                { value: maleCount, name: '男性',},
                                { value: femaleCount, name: '女性' },
                            ]
                        },
                        {
                            name: '年龄',
                            type: 'pie',
                            radius: ['40%', '55%'],
                            label: {
                              
                            },
                            data: [
                                { value: Math.round(maleCount * 0.178), name: '男0-15' },
                                { value: Math.round(maleCount * 0.649), name: '男16-59' },
                                { value: Math.round(maleCount * 0.173), name: '男>60' },                            
                                { value: Math.round(femaleCount * 0.173), name: '女>60' },
                                { value: Math.round(femaleCount*0.649), name: '女16-59' },
                                { value: Math.round(femaleCount * 0.178), name: '女0-15' },                                                                
                            ]
                        }
                    ]
                };

                this.Chart0.setOption(option, true);
            },
            setChartOption() {
                let option = {
                    title: {
                        text: '累计感染情况分析',
                        subtext: 'Data From Strategic Homeland Intervention Enforcement and Logistics Division'
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
                    xAxis: {
                        type: 'category',
                        data: this.charData.dateDate,
                       },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '累计感染人数',
                            data: this.charData.realTotalData,
                            type: 'line',
                            color: '#FF8C00',
                            smooth: true
                        },
                        {
                            name: '预期累计感染人数',
                            type: 'line',
                            data: this.charData.projectedTotalData,
                            smooth: true,
                            
                        },
                    ]
                };

                this.Chart1.setOption(option, true);
                //setOption：设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过它完成，ECharts会合并新的参数和数据，然后刷新图表。
            },
            setChartOption2() {
                let option = {
                    title: {
                        text: '新增情况分析',
                        subtext: 'Powered By J.A.R.V.I.S.'
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
                    xAxis: {
                        type: 'category',
                        data: this.charData.dateDate,
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '累计新增感染人数',
                            data: this.charData.realIncData,
                            type: 'line',
                            smooth: true,
                            color: '#FF8C00'
                        },
                        {
                            name: '预期新增感染人数',
                            type: 'line',
                            data: this.charData.projectedIncData,
                            smooth: true,
                            
                        },
                    ]
                };

                this.Chart2.setOption(option, true);
                //setOption：设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过它完成，ECharts会合并新的参数和数据，然后刷新图表。
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
    .chartbox0 {
        border: 3px solid #333744;
        width: 30%;
        height: 400px;
        display: inline-block;
        
    }
    .chartboxA {
        border: 3px solid #333744;
        width: 33%;
        display: inline-block;
        transform: translate(2%,0%);
    }
    .chartboxB {
        border: 3px solid #333744;
        width: 33%;
        
        display: inline-block;
        transform: translate(5%,0%);
    }
</style>