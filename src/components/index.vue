<template>
  <div id="index">
    <div class="section"
         style="background-image: url(static/img/Home/u2927.gif);background-size: cover;filter: grayscale(10%);height: 867px">
      <el-container style="color: #0D64E8;font-size: 72px;font-weight: bolder">
        <el-container
            style="color: #0D64E8;font-size: 72px;font-weight: bolder;text-shadow: 4px 2px 5px rgba(255,255,255,1);text-align: left;">
          <el-main>
            <el-row :gutter="24">
              <el-col :span="18" style="margin-top: 8%;margin-left: 8%">
                <p style="color: #0d64e8;margin-top: 0;margin-bottom: 0">山东亚历山大智能科技有限公司</p>
                <p style="margin-top: 0;margin-bottom: 0;padding-top: 1%"><span style="color: #0d64e8">GomROS平台</span>
                  <span style="color: #0d64e8;font-size: 24px">工业基础软件</span>
                </p>
                <p style="color: white;font-size: 32px;text-shadow: none;margin-top: 0;margin-bottom: 0">让机器人开发更简单</p>
              </el-col>
              <el-col :span="9" style="font-size: 24px">&nbsp;</el-col>
            </el-row>
          </el-main>
        </el-container>
        <el-footer
            style="height:22%;color: white;font-size: 24px;text-align: center;margin-top: 14%;padding-left: 0;padding-right: 0">
          <el-row>
            <el-col :span="8">
              <div class="robotSystem">
                <el-row style="padding-top: 8%">机器人操作系统</el-row>
                <el-row style="font-size: 18px;padding-top: 2%;width: 78%;padding-left: 16%;padding-bottom: 7%">
                  GomROS（句芒）是一款为机器人、自动化设备等高端智能装备提供的国产原创操作系统。
                </el-row>
                <div class="robotSystemIn"
                     style="background-image: url(static/img/index/u159.jpg);filter: grayscale(20%)">
                  <el-row style="padding-top: 12%">机器人操作系统</el-row>
                  <el-row style="font-size: 18px;width: 80%;padding-left: 15%;padding-top: 4%">
                    GomROS（句芒）是一款为机器人、自动化设备等高端智能装备提供的国产原创操作系统。
                  </el-row>
                  <el-row style="font-size: 18px;padding-top: 4%;cursor: pointer"
                          onclick="window.location.href='/#/robotOperateSystem'">
                    查看详情 →
                  </el-row>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="moveRobot">
                <el-row style="padding-top: 8%">移动机器人</el-row>
                <el-row style="font-size: 18px;padding-top: 2%;width: 82%;padding-left: 15%;padding-bottom: 7%">
                  移动机器人，是一个集环境感知、动态决策与规划、行为控制与执行等多功能于一体的综合系统。
                </el-row>
                <div class="moveRobotIn"
                     style="background-image: url(static/img/index/u2.jpg);filter: grayscale(50%)">
                  <el-row style="padding-top: 12%">移动机器人</el-row>
                  <el-row style="font-size: 18px;width: 80%;padding-left: 15%;padding-top: 4%">
                    移动机器人，是一个集环境感知、动态决策与规划、行为控制与执行等多功能于一体的综合系统。
                  </el-row>
                  <el-row style="font-size: 18px;padding-top: 4%;cursor: pointer"
                          onclick="window.location.href='/#/technology'">
                    查看详情 →
                  </el-row>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="openPlat">
                <el-row style="padding-top: 8%">GomROS开放平台</el-row>
                <el-row style="font-size: 18px;padding-top: 2%;width: 82%;padding-left: 15%;padding-bottom: 7%">
                  提供智能机器人应用开放平台，支持全场景应用开发，助力合作伙伴快速完成机器人应用开发。
                </el-row>
                <div class="openPlatIn"
                     style="background-image: url(static/img/index/u197.jpg);filter: grayscale(50%)">
                  <el-row style="padding-top: 12%">GomROS开放平台</el-row>
                  <el-row style="font-size: 18px;width: 84%;padding-left: 15%;padding-top: 4%">
                    提供智能机器人应用开放平台，支持全场景应用开发，助力合作伙伴快速完成机器人应用开发。
                  </el-row>
                  <el-row style="font-size: 18px;padding-top: 4%;cursor: pointer"
                          onclick="window.location.href='/#/opencommunity'">
                    查看详情 →
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </div>

    <div style="background-color: rgba(51, 51, 51, 0.847058823529412)">
      <el-container>
        <div ref="showPage" class="showPage">
          <div ref="platForm" class="platForm">
            <h4 style="margin-top: 350px">云平台</h4>
            <div class="platFormIn">
              <el-row>
                云平台是为客户和合作伙伴提供软硬件一体的整体产品基础服务平台
              </el-row>
              <el-row style="cursor:pointer;text-align: center;padding-top: 25%"
                      onclick="window.location.href='/#/cloudPlatform'">
                查看详情 →
              </el-row>
            </div>
          </div>
          <div ref="dataPlat" class="dataPlat">
            <h4 style="margin-top: 350px">数据平台</h4>
            <div class="dataPlatIn">
              <el-row>
                数据成为驱动经济增长的核心生产要素。大数据和云计算等技术的融合，推动了物联网的迅速发展，实现了人与人、人与物、物与物的互联互通，导致数据量呈现爆发式增长。
              </el-row>
              <el-row style="cursor:pointer;text-align: center;padding-top: 25%"
                      onclick="window.location.href='/#/dataPlatform'">
                查看详情 →
              </el-row>
            </div>
          </div>
          <div ref="serviceSystem" class="serviceSystem">
            <h4 style="margin-top: 350px">服务场景系统</h4>
            <div class="serviceSystemIn">
              <el-row>
                场景服务系统是服务于各种应用场景，支撑各类管理系统的互联互通。
              </el-row>
              <el-row style="cursor:pointer;text-align: center;padding-top: 25%"
                      onclick="window.location.href='/#/scenarioService'">
                查看详情 →
              </el-row>
            </div>
          </div>
          <div ref="hardware" class="hardware">
            <h4 style="margin-top: 350px">硬件控制及驱动系统</h4>
            <div class="hardwareIn">
              <el-row>
                一个机器人最主要的控制量就是控制机器人的移动，无论是自身的移动还是手臂等关节的移动，所以机器人驱动器中最根本的问题就是控制电机。
              </el-row>
              <el-row style="cursor:pointer;text-align: center;padding-top: 25%"
                      onclick="window.location.href='/#/hardwareDriver'">
                查看详情 →
              </el-row>
            </div>
          </div>
        </div>
      </el-container>
    </div>
    <el-container style="background-color: rgba(51, 51, 51, 0.196078431372549);">
      <el-container>
        <el-main>
          <div class="section"
               style="font-size: 32px;font-weight: bolder;color: #0d64e8;text-align: center">
            <el-row style="text-align: left;margin-top: 2%;margin-left: 5%">我们的平台优势</el-row>
            <el-row>
              <img src="../../static/img/Home/u3075.png"
                   style="padding-top: 2%;width: 60%;height: 650px;filter: brightness(0.8)">
            </el-row>
            <el-row style="text-align: left;margin-top: 4%;margin-left: 5%">客户和合作伙伴</el-row>
            <el-row :gutter="24">
              <img src="../../static/img/Home/u3153.png"
                   style="padding-top: 2%;padding-bottom:1%;width: 65%;height: 400px;filter: brightness(0.9)">
            </el-row>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <el-container id="bottom">
      <el-main style="background: #0d64e8;font-size: 30px;">
        <el-row :gutter="24" style="padding-top: 0;padding-bottom: 0">
          <el-col :span="13" style="color: white;text-align: left;font-size: 35px;font-weight: bolder;padding-left: 5%">
            欢迎致电我们
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
    routerToContact() {
      this.$router.push('/about')
    },
    auto() {
      return auto
    },
  },
  mounted() {
    const showPage = this.$refs.showPage;
    const platForm = this.$refs.platForm;
    const dataPlat = this.$refs.dataPlat;
    const serviceSystem = this.$refs.serviceSystem;
    const hardware = this.$refs.hardware;
    // 在这里对 showPage 进行操作
    platForm.addEventListener("mouseover", () => {
      showPage.style.backgroundImage = "url(\"../../static/img/Home/u264.jpg\")"
    })
    platForm.addEventListener("mouseout", () => {
      showPage.style.backgroundImage = "url(\"../../static/img/Home/u3090.gif\")"
    })
    dataPlat.addEventListener("mouseover", () => {
      showPage.style.backgroundImage = "url(\"../../static/img/Home/u1634.jpg\")"
    })
    dataPlat.addEventListener("mouseout", () => {
      showPage.style.backgroundImage = "url(\"../../static/img/Home/u3090.gif\")"
    })
    serviceSystem.addEventListener("mouseover", () => {
      showPage.style.backgroundImage = "url(\"../../static/img/Home/u1240.png\")"
    })
    serviceSystem.addEventListener("mouseout", () => {
      showPage.style.backgroundImage = "url(\"../../static/img/Home/u3090.gif\")"
    })
    hardware.addEventListener("mouseover", () => {
      showPage.style.backgroundImage = "url(\"../../static/img/Home/u1420.jpg\")"
    })
    hardware.addEventListener("mouseout", () => {
      showPage.style.backgroundImage = "url(\"../../static/img/Home/u3090.gif\")"
    })
  }
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

p {
  color: #444444;
}

.require-box {
  border: 1px solid #1767a1;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

.robotSystem:hover .robotSystemIn {
  /*display: block;*/
  opacity: 1;
}

.robotSystemIn {
  /*display: none;*/
  opacity: 0;
  transition: opacity 0.5s ease;
  background-color: grey;
  background-size: 100% auto;
  height: 300px;
  position: absolute;
  width: 100%;
  bottom: 0;

}

.moveRobot:hover .moveRobotIn {
  /*display: block;*/
  opacity: 1;
}

.moveRobotIn {
  /*display: none;*/
  opacity: 0;
  transition: opacity 0.5s ease;
  background-color: grey;
  background-size: 100% auto;
  height: 300px;
  position: absolute;
  width: 100%;
  bottom: 0;
}

.openPlat:hover .openPlatIn {
  /*display: block;*/
  opacity: 1;
}

.openPlatIn {
  /*display: none;*/
  opacity: 0;
  transition: opacity 0.5s ease;
  background-color: grey;
  background-size: 100% auto;
  height: 300px;
  position: absolute;
  width: 100%;
  bottom: 0;
}

.openPlat {
  border: 1px solid #7f7f7f;
  position: relative;
}

.moveRobot {
  border: 1px solid #7f7f7f;
  position: relative;
}

.robotSystem {
  border: 1px solid #7f7f7f;
  position: relative;
}


.platFormIn {
  display: none;
  margin-top: 50px;
  margin-left: 25%;
  width: 50%;
  font-size: 20px;
  text-align: left;
  margin-bottom: 30%;
}

.platForm:hover .platFormIn {
  display: block;
  /*height: 500px;*/
}

.platForm:hover ~ .showPage {
  background-image: url("../../static/img/Home/u264.jpg");
}

.dataPlat:hover ~ .showPage {
  background-image: url("../../static/img/Home/u1634.jpg");
}

.serviceSystem:hover ~ .showPage {
  background-image: url("../../static/img/Home/u1240.png");
}

.hardware:hover ~ .showPage {
  background-image: url("../../static/img/Home/u1420.jpg");
}

.dataPlatIn {
  display: none;
  margin-top: 50px;
  margin-left: 25%;
  width: 50%;
  font-size: 20px;
  text-align: left;
}

.dataPlat:hover .dataPlatIn {
  display: block;
}

.serviceSystemIn {
  display: none;
  margin-top: 50px;
  margin-left: 25%;
  width: 50%;
  font-size: 20px;
  text-align: left;
}

.serviceSystem:hover .serviceSystemIn {
  display: block;
}

.hardwareIn {
  display: none;
  margin-top: 50px;
  margin-left: 25%;
  width: 50%;
  font-size: 20px;
  text-align: left;
}

.hardware:hover .hardwareIn {
  display: block;
}

.dataPlat {
  display: inline;
  float: left;
  width: 25%;
  height: 1000px;
  background-color: rgba(51, 51, 51, 0.70);
}


.serviceSystem {
  display: inline;
  float: left;
  width: 25%;
  height: 1000px;
}

.hardware {
  display: inline;
  float: right;
  width: 25%;
  height: 1000px;
  background-color: rgba(51, 51, 51, 0.70);
}

.showPage {
  /*background-image: url(./static/img/Home/u3090.gif);*/
  background-image: url("../../static/img/Home/u3090.gif");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  font-size: 35px;
  font-weight: bolder;
  color: white;
  /*width: 80%;*/
  background-repeat: no-repeat;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 4%;
  margin-bottom: 4%;
}

.platForm {
  display: inline;
  float: left;
  width: 25%;
  height: 1000px;
}
</style>
