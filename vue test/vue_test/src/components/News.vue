<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新闻</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card class="box-card">
            <div class="demo-input-suffix">
                <el-link href="https://finance.sina.com.cn/china/gncj/2020-07-23/doc-iivhvpwx7036664.shtml" target="_blank" :underline="false">
                    <h3>国家卫健委：肉类加工企业做好禽畜肉类的源头管控</h3>
                    <pre class="word-type">各省、自治区、直辖市及新疆生产建设兵团应对新型冠状病毒肺炎疫情联防联控机制（领导小组、指挥部）：[详细]
2020-07-23 14:14:37  标签：新冠肺炎</pre>
                    <el-divider></el-divider>
                </el-link>

                <el-link href="https://k.sina.com.cn/article_1645705403_621778bb02000q70v.html?from=news&subch=onews" target="_blank" :underline="false">
                    <h3>希腊政府重启新冠疫情简报会 将每周举行一次</h3>
                    <pre class="word-type">据欧联网援引希腊欧联通讯社报道，因应疫情发展，希腊当局于21日傍晚重启疫情简报会，公布希腊一周内的疫情各
项数据以及最新情况。[详细]
2020年07月23日 14:06  标签：新冠肺炎 希腊</pre>
                    <el-divider></el-divider>
                </el-link>

                <el-link href="https://k.sina.com.cn/article_5641375955_1504090d302000prih.html?cre=tianyi&mod=pcpager_news&loc=1&r=9&rfunc=91&tj=none&tr=9" target="_blank" :underline="false">
                    <h3>印度议员：新冠不是疾病是惩罚，想要摆脱疫情只有祈求上帝宽恕</h3>
                    <pre class="word-type">据新德里电视台7月22日报道，印度萨马杰瓦迪党（Samajwadi Party）议员沙菲古尔·拉赫曼（ Shafiqur Rahman ）
声称，“新冠肺炎不是疾病，是上帝对我们所犯下罪行进行的惩罚。”[详细]
2020年07月22日 17:17  标签：新冠肺炎 印度</pre>
                    <el-divider></el-divider>
                </el-link>

                <el-link href="https://news.sina.com.cn/w/2020-07-22/doc-iivhuipn4486585.shtml?cre=tianyi&mod=pcpager_news&loc=25&r=9&rfunc=91&tj=none&tr=9" target="_blank" :underline="false">
                    <h3>特朗普呼吁美国人戴口罩 时隔3月重启记者会为哪般？</h3>
                    <pre class="word-type">距离上次特朗普就新冠疫情召开记者会，已经过去快三个月了。自从上次记者会上特朗普主张注射消毒水杀灭病毒后，
出于选情考量，特朗普暂停举行疫情记者会。[详细]
2020-07-23 14:14:37  标签：新冠肺炎 美国</pre>
                    <el-divider></el-divider>
                </el-link>

                <el-link href="https://news.sina.com.cn/c/2020-07-21/doc-iivhvpwx6552061.shtml" target="_blank" :underline="false">
                    <h3>疫情下，个人隐私进入“裸奔”时代？</h3>
                    <pre class="word-type">中国抗击新型冠状病毒疫情，不同于任何其他国家。其令世人关注的成绩和特点是，在武汉暴发疫情后，利用各种手段
收集患者、感染者、密切接触者乃至几乎每个人的信息，以追踪技术定位传染源并加以切断...[详细]
2020-07-21 07:39:32  标签：新冠肺炎</pre>
                    <el-divider></el-divider>
                </el-link>

                <el-link href="https://news.sina.com.cn/c/xl/2020-07-20/doc-iivhvpwx6359122.shtml" target="_blank" :underline="false">
                    <h3>防疫常态化 习近平要求时刻绷紧这根弦</h3>
                    <pre class="word-type">新冠肺炎疫情发生以来，习近平总书记高度重视，多次召开会议、听取汇报，作出一系列重要指示，反复强调“决不能
前功尽弃”。央视网《联播+》特梳理习近平总书记相关论述，与您共同凝聚打赢疫情防控阻击战的磅礴力量，不获全
胜决不轻言成功。[详细]
2020-07-19 21:26:46  标签：新冠肺炎</pre>
                    <el-divider></el-divider>
                </el-link>

                <el-link href="https://news.sina.com.cn/w/2020-07-16/doc-iivhvpwx5618869.shtml" target="_blank" :underline="false">
                    <h3>巴西总统确诊新冠一周后再次进行检测 结果仍为阳性</h3>
                    <pre class="word-type">当地时间15日，在新冠病毒检测呈阳性的一周后，巴西总统博索纳罗宣布其于14日晚间再进行新冠病毒检测的结果仍为
阳性。[详细]
2020-07-16 05:36:27  标签：新冠肺炎 巴西</pre>
                    <el-divider></el-divider>
                </el-link>
            </div>
            <div class="block">
                <el-pagination layout="prev, pager, next"
                               :total="20">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
    .word-type {
        font-family: Arial;
        line-height:2;
    }
</style>