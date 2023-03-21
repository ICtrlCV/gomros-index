<template>
  <div id="open-community">
    <el-container id="top-img"
                  style="background-image: url(static/img/OpenCommunity/u967.jpg);
                  background-position: center;
                  background-size: cover;
                  height: 100%;
                  width: 100%">
      <el-main>
        <el-container id="img-text">
          <el-aside width="100px">
            <br>
            <br>
            <img src="static/img/Development/u3.png">
          </el-aside>
          <el-main style="width: 100%;color: #0D64E8;text-shadow: 2px 2px 8px white">
            <el-row :gutter="10" type="flex">
              <el-col :span="6" style="font-size:60px">
                GomROS
              </el-col>
              <el-col :span="4" style="font-size: 15px">
                <br>
                <br>工业基础软件
              </el-col>
            </el-row>
            <el-row :gutter="10" type="flex">
              <el-col :span="6" style="font-size:60px">
                开放平台
              </el-col>
              <el-col :span="4" style="font-size: 15px">
                <br>
                <!--                <br>协同发展平台-->
              </el-col>
            </el-row>
            <el-row>
              <br>
            </el-row>
            <el-row style="color: white;font-size: 30px;text-shadow: none">
              提供智能机器人应用开放平台，支持全场景应用开<br>
              发，助力合作伙伴快速完成机器人应用开发
            </el-row>
          </el-main>
        </el-container>
      </el-main>
    </el-container>

    <el-row>
      <el-carousel :interval="5000" height="1000px">
        <el-carousel-item v-for="item in 3" :key="item">
          <div v-if="item===1" style="width: 900px;height: 800px;">
            <br>
            <br>
            <el-row :gutter="24">
              <el-col :span="14">
                <br>
              </el-col>
              <el-col :span="10">
                <img src="static/img/OpenCommunity/u975.png" style="text-align: center">
              </el-col>
            </el-row>
          </div>
          <div v-if="item===2" >
              <br>
              <br>
            <el-row :gutter="24">
              <el-col :span="4">
                <br>
              </el-col>
              <el-col :span="8">
                <img src="static/img/OpenCommunity/u981.png" style="width: 1400px;height: 800px">
              </el-col>
              <el-col :span="12">
                  <br>
              </el-col>
            </el-row>

          </div>
          <div v-if="item===3" >
            <br>
            <br>
            <el-row :gutter="24">
              <el-col :span="6">
                <br>
              </el-col>
              <el-col :span="10">
                <img src="static/img/OpenCommunity/u985.jpg" style="width: 900px;height: 800px;">
              </el-col>
              <el-col :span="8"></el-col>
            </el-row>
          </div>
        </el-carousel-item>
      </el-carousel>
      <br>
    </el-row>

    <el-container style="text-align: left;color: #0d64e8;font-size: 18px;background-color: rgba(242, 246, 250, 1)">
      <el-header style="font-size: 32px;font-weight: bolder;text-align: center">
        <br>
        GomROS开发者社区
        <br>
      </el-header>
      <el-row><br></el-row>
      <el-row><br></el-row>
      <el-row><br></el-row>
      <el-main>
        <el-row :gutter="24">
          <el-col :span="4">
            <br>
          </el-col>
          <el-col :span="8">
            <div style="background-color: white">
              <el-row style="font-size: 32px;font-weight: bolder">
                &nbsp;&nbsp;文章查看
              </el-row>
              <el-row>
                &nbsp;&nbsp;&nbsp;
                <el-button @click="article()"
                           style="font-size: 13px;text-align: center;border-color: #0d64e8;color: #0d64e8">查看详情
                </el-button>
              </el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row style="font-size: 32px;font-weight: bolder">
                &nbsp;&nbsp;开发文档
              </el-row>
              <el-row>
                &nbsp;&nbsp;&nbsp;
                <el-button
                    @click="apiDocument()"
                    style="font-size: 13px;text-align: center;border-color: #0d64e8;color: #0d64e8">查看详情
                </el-button>
              </el-row>
              <el-row><br></el-row>
            </div>
          </el-col>
          <el-col :span="10">
            <div style="background-color: white">
              <el-row style="font-size: 32px;font-weight: bolder">&nbsp;&nbsp;软件下载</el-row>
              <el-row> &nbsp;&nbsp;&nbsp; 基于软件包的方式进行安装，方便开发者快速安装、快速体验。</el-row>
              <el-row><br></el-row>
              <el-row> &nbsp;&nbsp;&nbsp; GomROS版本：1.1版</el-row>
              <el-row><br></el-row>
              <el-row> &nbsp;&nbsp;&nbsp; 操作系统：Ubuntu</el-row>
              <el-row><br></el-row>
              <el-row> &nbsp;&nbsp;&nbsp; 操作系统版本：Ubuntu 18.04+</el-row>
              <el-row><br></el-row>
              <el-row>
                <el-row>
                  &nbsp;&nbsp;&nbsp;
                  <el-button
                      @click="softwareDownload()"
                      style="font-size: 13px;text-align: center;border-color: #0d64e8;color: #0d64e8">下载
                  </el-button>
                </el-row>
              </el-row>
            </div>
          </el-col>
          <el-col :span="2">
            <br>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <el-row><br></el-row>
    <el-row><br></el-row>
    <el-row><br></el-row>
    <el-row><br></el-row>

    <el-container>
      <el-header>
        <br>
      </el-header>
      <el-main>
        <div style="color: #0d64e8;font-weight: bolder">
          <el-row :gutter="24">
            <el-col :span="6" style="font-size: 36px;background-color: rgba(209, 222, 237, 1)">
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              GomROS开放平台
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
              <el-row><br></el-row>
            </el-col>
            <el-col :span="1">
              <br>
            </el-col>
            <el-col :span="17">
              <div>
                <el-row :gutter="24" style="background-color: rgba(209, 222, 237, 1)">
                  <el-col :span="6" style="font-size: 28px;background-color: rgba(209, 222, 237, 1)">
                    <el-row><br></el-row>
                    机器人操作系统
                    <el-row><br></el-row>
                  </el-col>
                  <el-col :span="1">
                    <br>
                  </el-col>
                  <el-col :span="5">
                    <br>
                  </el-col>
                  <el-col :span="12" style="background-color: rgba(209, 222, 237, 1)">
                    <div style="font-size: 16px">
                      <el-row><br></el-row>
                      <el-row>
                        建筑智能机器人&nbsp;&nbsp;隧道检测机器人&nbsp;&nbsp; 激光清洗机器人
                      </el-row>
                      <el-row><br></el-row>
                      <el-row>
                        工业设备&nbsp;&nbsp; 搬运机器人 &nbsp;&nbsp;背负系列 &nbsp;&nbsp;顶升系列&nbsp;&nbsp; 叉车系列
                        &nbsp;&nbsp;物流运输线 &nbsp;&nbsp;牵引系列
                      </el-row>
                      <el-row><br></el-row>
                      <el-row>
                        服务机器人 &nbsp;&nbsp;消毒机器人 &nbsp;&nbsp;送餐机器人 &nbsp;&nbsp;送药机器人&nbsp;&nbsp;
                        迎宾机器人
                      </el-row>
                      <el-row><br></el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row><br></el-row>
                <el-row :gutter="24" style="background-color: rgba(209, 222, 237, 1)">
                  <el-col :span="6" style="font-size: 28px">
                    <el-row><br></el-row>
                    <el-row><br></el-row>
                    移动机器人
                    <el-row><br></el-row>
                    <el-row><br></el-row>
                    <el-row><br></el-row>
                  </el-col>
                  <el-col :span="1">
                    <br>
                  </el-col>
                  <el-col :span="5">
                    <div style="font-size: 20px;">
                      <el-row><br></el-row>
                      <el-row><br></el-row>
                      <el-row> 云平台</el-row>
                      <el-row><br></el-row>
                      <el-row> 大数据平台</el-row>
                      <el-row><br></el-row>
                      <el-row> 场景服务软件系统</el-row>
                      <el-row><br></el-row>
                      <el-row> 硬件控制与驱动系统</el-row>
                      <el-row><br></el-row>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <el-row>
                      <div style="font-size: 16px">
                        <el-row><br></el-row>
                        <el-row><br></el-row>
                        <el-row>
                          云端管理控制&nbsp;&nbsp;云端地图构建&nbsp;&nbsp;云端定位计算&nbsp;&nbsp;云端任务管理&nbsp;云端路线规划
                        </el-row>
                        <el-row>
                          云端数据分析&nbsp;&nbsp;云端数据可视化&nbsp;&nbsp;云端视觉识别&nbsp;&nbsp;云端语音识别&nbsp;&nbsp;云端广告推送&nbsp;&nbsp;云端系统更新
                        </el-row>
                      </div>
                    </el-row>
                    <el-row><br></el-row>
                    <el-row>
                      数据集成&nbsp;&nbsp;数据存储&nbsp;&nbsp;数据开发 &nbsp;&nbsp;数据治理&nbsp;&nbsp;数据资产&nbsp;&nbsp;数据服务
                    </el-row>
                    <el-row><br></el-row>
                    <el-row>
                      工业信息化系统 &nbsp;&nbsp;ERP&nbsp;&nbsp; MES &nbsp;&nbsp; WMS &nbsp;&nbsp;WCS
                    </el-row>
                    <el-row><br></el-row>
                    <el-row>
                      <div>
                        <el-row>
                          高端装备零部件&nbsp;&nbsp; 机床 &nbsp;&nbsp; 机械臂 &nbsp;&nbsp; 编码器 &nbsp;&nbsp;读码器
                          &nbsp;&nbsp; 工控机
                        </el-row>
                        <el-row>
                          激光雷达&nbsp;&nbsp; 伺服电机 &nbsp;&nbsp;视觉系统 &nbsp;&nbsp;舵机 &nbsp;&nbsp;减速机
                        </el-row>
                      </div>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row><br></el-row>
                <el-row :gutter="24" style="background-color: rgba(209, 222, 237, 1)">
                  <el-col :span="6" style="font-size: 28px">
                    <br>
                    供需合作
                  </el-col>
                  <el-col :span="1">
                    <br>
                  </el-col>
                  <el-col :span="5">
                    <div style="font-size: 20px;">
                      <el-row><br></el-row>
                      <el-row>协同研发合作</el-row>
                      <el-row><br></el-row>
                      <el-row>供应商合作</el-row>
                      <el-row><br></el-row>
                      <el-row>教育培训合作</el-row>
                      <el-row><br></el-row>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div style="font-size: 16px">
                      <el-row><br></el-row>
                      <el-row :gutter="24">
                        项目研发合作 &nbsp;&nbsp; 硬件研发合作 &nbsp;&nbsp; 软件研发合作 &nbsp;&nbsp; 平台研发合作
                        &nbsp;&nbsp; GomROS研发合作
                      </el-row>
                      <el-row><br></el-row>
                      <el-row><br></el-row>
                      <el-row :gutter="24">
                        企业简介 &nbsp;&nbsp;合作流程 &nbsp;&nbsp;合作需求
                      </el-row>
                      <el-row><br></el-row>
                      <el-row :gutter="24">
                        培训&nbsp;&nbsp; 产品 &nbsp;&nbsp;校企合作 &nbsp;&nbsp;讲师合作 &nbsp;&nbsp;资源支持
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>


    <el-container id="bottom">

      <el-main style="background: #0d64e8;font-size: 25px">
        <el-row :gutter="24">
          <el-col :span="10" style="color: white;text-align: left">
            欢迎咨询移动机器人相关产品
          </el-col>
          <el-col :span="2">
          </el-col>
          <el-col :span="14" style="text-align: right;font-size: 20px">
            <el-button @click="routerToContact()"
                       style="background-color: #0d64e8;border-color: white;color: white">
              联系我们
            </el-button>
          </el-col>
        </el-row>
      </el-main>
      <el-aside style="background-color: #0d64e8" width="100px">
        <br>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import axios from "../router/http";
import {auto} from "html-webpack-plugin/lib/chunksorter";

export default {
  name: "Education",
  data() {
    return {};
  },
  methods: {
    article() {
      alert("文章查看")
    },
    apiDocument() {
      alert("开发文档")
    },
    softwareDownload() {
      alert("软件下载")
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

/*p {*/
/*  color: #444444;*/
/*}*/

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
</style>
