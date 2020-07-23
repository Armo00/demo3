<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>谣言</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card>
            <el-link href="http://www.piyao.org.cn/2020-07/22/c_1210715049.htm" target="_blank" :underline="false">
                <h3>新疆一感染者怒烧公交？</h3>
                <pre class="word-type">2020年7月20日，网民举报马某（女，汉族，44岁，户籍地：昌吉州昌吉市）在其朋友圈内转发题为《20号上午！
新疆一感染者怒烧公交，活活烧死47死亡，现场惨叫惊天！！》的谣言信息...[详细]
来源：天山网    时间：2020-07-22</pre>
                <el-divider></el-divider>
            </el-link>

            <el-link href="http://www.piyao.org.cn/2020-07/22/c_1210715035.htm" target="_blank" :underline="false">
                <h3>为应对新冠肺炎疫情，香港将实施“禁足令”？</h3>
                <pre class="word-type">港府称，对于有谣言说为应对新冠肺炎疫情，政府可能在未来数天实施所谓“禁足令”，政府发言人今日（21日）
澄清绝无其事。[详细]
来源：环球网    时间：2020-07-22</pre>
                <el-divider></el-divider>
            </el-link>

            <el-link href="http://www.piyao.org.cn/2020-07/19/c_1210710105.htm" target="_blank" :underline="false">
                <h3>口罩有根5G天线能控制人并致癌？</h3>
                <pre class="word-type">“赶紧丢掉你的口罩！里面有根5G天线能控制你并且患上脑癌！”近日，美国社交媒体上广泛流传着这样的谬论，
这根5G天线到底是什么？[详细]
来源：环球网    时间：2020-07-19</pre>
                <el-divider></el-divider>
            </el-link>

            <el-link href="http://www.piyao.org.cn/2020-07/16/c_1210705642.htm" target="_blank" :underline="false">
                <h3>每天有几百人从国外飞回浙江避疫？</h3>
                <pre class="word-type">近日网传“国外华侨、华人中18岁以下小孩和老人，每天有500-700人飞回温州避疫”“这批人分别入住万和豪生等
酒店隔离14天，然后返回原籍居住”等不实内容，对酒店的日常经营造成了不利影响。[详细]
来源：浙江在线    时间：2020-07-16</pre>
                <el-divider></el-divider>
            </el-link>

            <el-link href="http://www.piyao.org.cn/2020-07/15/c_1210703869.htm" target="_blank" :underline="false">
                <h3>北京中考的防疫标准比高考低？</h3>
                <pre class="word-type">在7月14日下午举行的北京市新冠肺炎疫情防控工作新闻发布会上，市委教育工委副书记、市教委新闻发言人李奕
针对广大师生家长们关心的问题进行了解答。[详细]
来源：首都教育微信公众号    时间：2020-07-15</pre>
                <el-divider></el-divider>
            </el-link>

            <el-link href="http://www.piyao.org.cn/2020-07/08/c_1210693148.htm" target="_blank" :underline="false">
                <h3>治愈、康复后的新冠肺炎患者依然有传染性？</h3>
                <pre class="word-type">新华社北京7月7日电（记者阳娜、马晓冬）国家卫生健康委新冠肺炎医疗救治组专家、首都医科大学附属北京朝阳
医院副院长童朝晖在7日举行的北京市新冠肺炎疫情防控工作新闻发布会上介绍，新冠肺炎与其他病毒肺炎不同之处
在于传染性和传播性较强，但只要是早发现、早隔离、早治疗，95%左右的患者是可以治愈的。[详细]
来源：新华网    时间：2020-07-08</pre>
                <el-divider></el-divider>
            </el-link>

            <el-link href="http://www.piyao.org.cn/2020-07/02/c_1210686125.htm" target="_blank" :underline="false">
                <h3>新冠病毒变异了，武汉又有几十人中招？</h3>
                <pre class="word-type">7月1日，有武汉市民在小区业主群里发布消息称：“据说新冠病毒变异了，武汉又有几十人中招。”此消息不实，纯属
谣言。[详细]
来源：武汉市卫健委官方微博    时间：2020-07-02</pre>
                <el-divider></el-divider>
            </el-link>
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
        line-height: 2;
    }
</style>