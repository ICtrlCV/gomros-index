<template>
    <div id="open-community">
        <el-container id="top-img"
                      style="background-image: url(static/img/OpenCommunity/u967.jpg);
                  background-position: center;
                  background-size: cover;
                  height: 100%;
                  width: 100%">
            <el-row style="width: 100%;height:400px;">
                <el-col :span="15" style="height: 100%">
                    <el-row type="flex" justify="start" style="padding: 10px">
                        <el-col :span="3" style="padding-top: 50px;padding-left: 30px;margin-right: 80px">
                            <img src="../../static/img/MobileRobot/logo1.svg" style="width: 150px;height: 150px;">
                        </el-col>
                        <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
                            <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">GomROS</span>
                                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">工业基础软件</span>
                            </p>
                            <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">开放平台</span></p>
                            <p style="font-size: 30px;color: white;text-shadow: none;font-weight: bolder;margin-right: 30%">
                                提供智能机器人应用开放平台，支持全场景应用开发，助力合作伙伴快速完成机器人应用开发</p>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="9">
                    &nbsp;
                </el-col>
            </el-row>
        </el-container>

        <el-row>
            <el-carousel :interval="5000" height="740px" :indicator-position="'none'" style="margin-bottom: 10px">
                <el-carousel-item v-for="item in 3" :key="item">
                    <div v-if="item===1">
                        <el-row style="margin-left: 32%;margin-top: 2%">
                            <img src="../../static/img/OpenCommunity/u975.png" @click="showDialog(item)"
                                 style="width: 58%;height: 700px">
                        </el-row>
                    </div>
                    <div v-if="item===2">
                        <el-row style="margin-left: 20%;margin-top: 2%">
                            <img src="../../static/img/OpenCommunity/u981.png" @click="showDialog(item)"
                                 style="width: 80%;height: 700px">
                        </el-row>
                    </div>
                    <div v-if="item===3">
                        <el-row style="margin-left: 30%;">
                            <img src="../../static/img/OpenCommunity/u985.jpg" @click="showDialog(item)"
                                 style="width: 60%;height: 62%;">
                        </el-row>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </el-row>

        <el-container style="text-align: left;color: #0d64e8;font-size: 18px;background-color: rgba(242, 246, 250, 1)">
            <el-header style="font-size: 32px;text-align: center;margin-top: 2%">
                GomROS开发者社区
            </el-header>
            <el-main>
                <el-row :gutter="24">
                    <el-col :span="4">
                        <br>
                    </el-col>
                    <el-col :span="8">
                        <div class="bgc">
                            <br>
                            <el-row style="font-size: 32px;margin-left: 5%">
                                <el-col :span="2">
                                    <img src="static/img/Supplier/u1182.svg" style="width: 20px;">
                                </el-col>
                                <el-col :span="20">文章查看</el-col>
                                <el-col :span="2"><br></el-col>
                            </el-row>
                            <br>
                            <el-row>
                                <el-col :span="3">
                                    &nbsp;
                                </el-col>
                                <el-col :span="19">
                                    <el-button @click="(event)=>article(event)"
                                               style="font-size: 13px;
                             text-align: center;
                             border-color: #0d64e8;
                             color: #0d64e8;
                             width: 80px;
                             height: 20px;
                             padding: 0">
                                        查看详情
                                    </el-button>
                                </el-col>
                                <el-col :span="2">&nbsp;</el-col>
                            </el-row>
                            <br><br>
                        </div>
                        <div class="bgc">
                            <el-row style="background-color: rgba(242, 246, 250, 1)"><br></el-row>
                            <br>
                            <el-row style="font-size: 32px;margin-left: 5%;margin-top: 1%;">
                                <el-col :span="2">
                                    <img src="static/img/Supplier/u1182.svg" style="width: 20px;">
                                </el-col>
                                <el-col :span="20">开发文档</el-col>
                                <el-col :span="2"><br></el-col>
                            </el-row>
                            <br>
                            <el-row>
                                <el-col :span="3">&nbsp;</el-col>
                                <el-col :span="19">
                                    <el-button @click="(event)=>apiDocument(event)"
                                               style="font-size: 13px;text-align: center;border-color: #0d64e8;color: #0d64e8;width: 80px;height: 20px;padding: 0">
                                        查看详情
                                    </el-button>
                                </el-col>
                                <el-col :span="2">&nbsp;</el-col>
                            </el-row>
                            <br><br>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="bgc">
                            <br>
                            <el-row style="font-size: 32px;margin-left: 5%">
                                <el-col :span="2">
                                    <img src="static/img/Supplier/u1182.svg" style="width: 20px;">
                                </el-col>
                                <el-col :span="20">软件下载</el-col>
                                <el-col :span="2"><br></el-col>
                            </el-row>
                            <br>
                            <el-row style="padding-left: 5%">
                                <el-col :span="2">&nbsp;</el-col>
                                <el-col :span="20">
                                    <el-row>基于软件包的方式进行安装，方便开发者快速安装、快速体验。</el-row>
                                    <br>
                                    <el-row>GomROS版本：1.1版</el-row>
                                    <br>
                                    <el-row> 操作系统：Ubuntu</el-row>
                                    <br>
                                    <el-row>操作系统版本：Ubuntu 18.04+</el-row>
                                    <br>
                                    <el-row>
                                        <el-button @click="event=>softwareDownload(event)"
                                                   style="font-size: 13px;text-align: center;border-color: #0d64e8;color: #0d64e8;width: 80px;height: 20px;padding: 0">
                                            下载
                                        </el-button>
                                    </el-row>
                                </el-col>
                                <el-col :span="2">&nbsp;</el-col>
                            </el-row>
                            <br><br>
                        </div>
                    </el-col>
                    <el-col :span="2"><br></el-col>
                </el-row>
                <el-row><br></el-row>
            </el-main>
        </el-container>

        <div class="div-style">
            <el-row :gutter="24" >
                <el-col :span="0.5">
                    &emsp;
                </el-col>
                <el-col :span="5" class="left-style" >
                    <br><br><br><br><br>
                    GomROS开放平台
                    <br><br><br><br><br><br><br>
                </el-col>
                <el-col :span="0.5">
                    <br>
                </el-col>
                <el-col :span="18">
                    <el-row :gutter="24" class="top-style">
                        <el-col :span="6" class="median-font-size">
                            <br>
                            机器人操作系统
                        </el-col>
                        <el-col :span="18">
                            <el-row :gutter="24">
                                <el-col :span="6">
                                    &emsp;
                                </el-col>
                                <el-col :span="18" class="small-font-size" >
                                    <el-row style="margin-bottom: 15px">
                                        建筑智能机器人&emsp;隧道检测机器人&emsp;激光清洗机器人
                                    </el-row>
                                    <el-row style="margin-bottom: 15px">
                                        工业设备&emsp;搬运机器人&emsp;背负系列&emsp;顶升系列&emsp;叉车系列&emsp;物流运输线&emsp;牵引系列
                                    </el-row>
                                    <el-row>
                                        服务机器人&emsp;消毒机器人&emsp;送餐机器人&emsp;送药机器人&emsp;迎宾机器人
                                    </el-row>

                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        &emsp;
                    </el-row>
                    <el-row :gutter="24" class="center-style">
                        <el-col :span="6" class="median-font-size">
                            <br><br><br>
                            移动机器人
                        </el-col>
                        <el-col :span="18">
                            <el-row :gutter="24">
                                <el-col :span="6" class="center-font-size" style="margin-top: 20px">
                                    云平台
                                </el-col>
                                <el-col :span="18" class="small-font-size" >
                                    <el-row>
                                        云端管理控制&emsp;云端地图构建&emsp;云端定位计算&emsp;云端任务管理&emsp;云端路线规划
                                    </el-row>
                                    <el-row>
                                        云端数据分析&emsp;云端数据可视化&emsp;云端视觉识别&emsp;云端语音识别&emsp;云端广告推送&emsp;云端系统更新
                                    </el-row>
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="6" class="center-font-size">
                                    大数据平台
                                </el-col>
                                <el-col :span="18" class="small-font-size">
                                    <el-row>
                                        数据集成&emsp;数据存储&emsp;数据开发&emsp;数据治理&emsp;数据资产&emsp;数据服务
                                    </el-row>
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="6" class="center-font-size">
                                    场景服务软件系统
                                </el-col>
                                <el-col :span="18" class="small-font-size">
                                    <el-row>
                                        工业信息化系统&emsp;ERP&emsp;MES&emsp;WMS&emsp;WCS
                                    </el-row>
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="6" class="center-font-size" style="margin-top: 20px">
                                    硬件控制与驱动系统
                                </el-col>
                                <el-col :span="18" class="small-font-size">
                                    <el-row>
                                        高端装备零部件&emsp;机床&emsp;机械臂&emsp;编码器&emsp;读码器&emsp;工控机
                                    </el-row>
                                    <el-row>
                                        激光雷达&emsp;伺服电机&emsp;视觉系统&emsp;舵机&emsp;减速机
                                    </el-row>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        &emsp;
                    </el-row>
                    <el-row :gutter="24" class="bottom-style">
                        <el-col :span="6" class="median-font-size" style="margin-top: 1%">
                            <br>
                            供需合作
                        </el-col>
                        <el-col :span="18">
                            <el-row :gutter="24">
                                <el-col :span="6" class="center-font-size">
                                    协同研发合作
                                </el-col>
                                <el-col :span="18" class="small-font-size">
                                    项目研发合作&emsp;硬件研发合作&emsp;软件研发合作&emsp;平台研发合作&emsp;GomROS研发合作
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="6" class="center-font-size">
                                    供应商合作
                                </el-col>
                                <el-col :span="18" class="small-font-size">
                                    企业简介&emsp;合作流程&emsp;合作需求
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="6" class="center-font-size">
                                    教育培训合作
                                </el-col>
                                <el-col :span="18" class="small-font-size">
                                    培训&emsp;产品&emsp;校企合作&emsp;讲师合作&emsp;资源支持
                                </el-col>
                            </el-row>
                        </el-col>

                    </el-row>

                </el-col>
            </el-row>
        </div>


        <el-container style="width: 100%">
            <el-main style="background: #0d64e8;font-size: 30px;">
                <el-row :gutter="24" style="padding-top: 0;padding-bottom: 0">
                    <el-col :span="13"
                            style="color: white;text-align: left;font-size: 35px;font-weight: bolder;padding-left: 5%">
                        欢迎咨询移动机器人相关产品
                    </el-col>
                    <el-col :span="11" style="text-align: right;padding-right: 3%">
                        <el-button @click="routerToContact()"
                                   style="font-size: 30px;background-color: #0d64e8;border-color: white;color: white;">
                            联系我们
                        </el-button>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>

        <el-dialog :visible.sync="dialogVisible" width="80%" center>
            <img :src="imageList[currentIndex].url" style="max-width: 100%;">
        </el-dialog>
    </div>

</template>

<script>
import axios from "../router/http";
import {auto} from "html-webpack-plugin/lib/chunksorter";

export default {
    name: "Education",
    data() {
        return {
            imageList: [
                {url: '../../static/img/OpenCommunity/u975.png'},
                {url: '../../static/img/OpenCommunity/u981.png'},
                {url: '../../static/img/OpenCommunity/u985.jpg'},
            ],
            dialogVisible: false,
            currentIndex: 1,
        };
    },
    methods: {
        showDialog(index) {
            console.log(index)
            this.dialogVisible = true
            this.currentIndex = index - 1
        },
        article(event) {
            let target = event.target;
            if (target.nodeName === "BUTTON" || target.nodeName === "SPAN") {
                target.parentNode.blur();
            }
            target.blur();
            window.open('http://124.70.86.111:8096/bbs/index/postList', '_blank', 'noopener,noreferrer');
        },
        apiDocument(event) {
            let target = event.target;
            if (target.nodeName === "BUTTON" || target.nodeName === "SPAN") {
                target.parentNode.blur();
            }
            target.blur();
            window.open('http://124.70.86.111:8096/bbs/index/document', '_blank', 'noopener,noreferrer');
        },
        softwareDownload(event) {
            let target = event.target;
            if (target.nodeName === "BUTTON" || target.nodeName === "SPAN") {
                target.parentNode.blur();
            }
            target.blur();
            window.open('http://124.70.86.111:8096/bbs/index/download', '_blank', 'noopener,noreferrer');
        },
        routerToContact() {
            this.$router.push('/about')
        },
        auto() {
            return auto
        },
    },
};
</script>
<style scoped>
#about {
    background-color: rgb(20, 103, 159);
}

#content-box {
    width: 85%;
    background: #fff url(../../static/waitanbg.png) no-repeat bottom center;
    margin: 0 auto;
    padding-top: 100px;
}

#content-box h1,
#content-box h3 {
    text-align: center;
    font-weight: 400;
    color: #1767a1;
}

.require-box {
    border: 1px solid #1767a1;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}

/*.el-carousel__item h3 {*/
/*  color: #475669;*/
/*  font-size: 14px;*/
/*  opacity: 0.75;*/
/*  line-height: 200px;*/
/*  margin: 0;*/
/*}*/

/*.el-carousel__item:nth-child(2n) {*/
/*  background-color: #99a9bf;*/
/*}*/

/*.el-carousel__item:nth-child(2n+1) {*/
/*  background-color: #d3dce6;*/
/*}*/
.bgc {
    background-color: white;
}

.bgc:hover {
    background-color: rgba(223, 235, 251, 1);
}

.div-style {
    font-weight: bolder;
    background-color: rgba(242, 242, 242, 1);
    width: 100%;
    margin-bottom: 20px;
}

.left-style {
    background-color: rgba(209, 222, 237, 1);
    color: #0D64E8;
    font-size: 36px;
    text-align: center;
    vertical-align: center;

}

.top-style {
    background-color: rgba(223, 235, 251, 1);
    color: #234D95;
    /*font-size: 28px;*/
    text-align: left;
}

.center-style {
    color: #0D64E8;
    background-color: rgba(209, 222, 237, 1);
}

.bottom-style {
    background-color: rgba(223, 235, 251, 1);
    color: #234D95;
}

.median-font-size {
    font-size: 28px;
}

.center-font-size {
    font-size: 20px;
    margin-bottom: 30px;
    margin-top: 5px;
}

.small-font-size {
    font-size: 16px;
    margin-bottom: 15px;
    margin-top: 10px;
}
</style>
