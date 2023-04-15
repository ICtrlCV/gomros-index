<template>
  <div id="app">
    <div>
      <!--  导航栏  -->
      <el-row :gutter="24" style="margin-top: 1%;margin-bottom: 1%;">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="3">
          <img src="../../gomros-index/static/product/logo-small.png"
               style="width: 30%;margin-left: 20%;margin-top: -8%;margin-bottom: -10%">
        </el-col>
        <el-col :span="2">
          <button class="button-box" id="index-button" @click="routerToIndex()" ref="buttonShowCarousel">
            首页
          </button>
        </el-col>
        <el-col :span="3">
          <button class="button-box" @click="changeCarousel(1)" id="robot-operate-system-button"
                  ref="buttonShowCarousel">
            机器人操作系统
          </button>
        </el-col>
        <el-col :span="2">
          <button class="button-box" @click="changeCarousel(2)" id="move-robot-button" ref="buttonShowCarousel2">
            移动机器人
          </button>
        </el-col>
        <el-col :span="3">
          <button class="button-box" @click="changeCarousel(3)" id="GomRos-open_community-button"
                  ref="buttonShowCarousel3">
            GomRos开放平台
          </button>
        </el-col>
        <el-col :span="2">
          <button class="button-box" @click="changeCarousel(4)" id="corporate-button" ref="buttonShowCarousel4">
            生态合作
          </button>
        </el-col>
        <el-col :span="2">
          <button class="button-box" @click="changeCarousel(5)" id="about-button" ref="buttonShowCarousel5">
            关于我们
          </button>
        </el-col>
      </el-row>
      <!--  导航栏动画部分  -->
      <div class="div-carousel-style" ref="carouselStyle">
        <el-carousel :interval="5000" height="500px"
                     :indicator-position="'none'" ref="banner"
                     :autoplay="false" arrow="never">
          <el-carousel-item v-for="item in 5" :key="item">
            <!--      机器人操作系统      -->
            <div v-if="item===1">
              <el-row :gutter="24" style="height: 400px;background-color: white">
                <el-col :span="6" class="left-font-style" style="height:100%;border-right: 1px solid #f2f2f2">
                  <p style="margin-top: 20%;margin-right: 25%">机器人操作系统</p>
                </el-col>
                <el-col :span="10">
                  <el-row :gutter="24" style="width: 40%;height:400px;border-right: 1px solid #f2f2f2">
                    <el-col :span="12" class="center-font-style" id="system-introduce"
                            ref="systemIntroduce" @click="routerToRobotOperateSystem()"
                            style="padding-top: 32%;padding-left: 4%">
                      <a href="/#/robotOperateSystem" class="center-href-button" ref="hrefClose">系统介绍</a>
                    </el-col>
                    <el-col :span="12" style="padding-top: 32%;">
                      <img src="../static/img/index/u153p002.png" class="center-image"
                           ref="systemIntroduceImg" id="systemIntroduceImg">
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="8">
                  <img src="../static/img/index/u159.jpg" style="width: 100%;height: 400px;padding: 2px;">
                </el-col>
              </el-row>
              <el-row :gutter="24" style="height: 100px;background-color: white;border-top: 1px solid #f2f2f2">
                <el-col :span="8" class="bottom-font-style" style="padding-top: 2%">
                  安全开放的机器人操作系统
                </el-col>
                <el-col :span="8"><br></el-col>
                <el-col :span="8" class="bottom-font-style" ref="closeCarousel" style="padding-top: 2%">
                  机器人操作系统
                  <img src="../../gomros-index/static/img/index/u153p002.png" style="margin-left: 5%">
                </el-col>
              </el-row>
            </div>
            <!--      移动机器人      -->
            <div v-if="item===2">
              <el-row :gutter="24" style="height: 400px;background-color: white">
                <el-col :span="6" class="left-font-style" style="height: 100%;border-right: 1px solid #f2f2f2">
                  <p style="margin-top: 20%;margin-right: 25%">移动机器人</p>
                </el-col>
                <el-col :span="10">
                  <el-row :gutter="24">
                    <el-col :span="8" style="width: 40%;height: 400px;border-right: 1px solid #f2f2f2;padding: 0">
                      <el-row style="margin-top: 12%;margin-left: 4%">
                        <el-col :span="18" class="center-font-style" id="technology-introduce"
                                ref="technologyIntroduce" style="padding-top: 8%;">
                          <a href="/#/technology" class="center-href-button" ref="hrefClose2">
                            移动机器人技术介绍
                          </a>
                        </el-col>
                        <el-col :span="4" style="padding-top: 8%;">
                          <img src="../static/img/index/u153p002.png" class="center-image"
                               ref="technologyIntroduceImg" id="technologyIntroduceImg">
                        </el-col>
                      </el-row>
                      <el-row style="margin-top: 10%;margin-left: 4%">
                        <el-col :span="18" class="center-font-style" id="auxiliary-system"
                                ref="auxiliarySystem">
                          移动机器人配套系统
                        </el-col>
                        <el-col :span="4">
                          <img src="../static/img/index/u153p002.png" class="center-image"
                               ref="auxiliarySystemImg" id="auxiliarySystemImg">
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="14" style="height: 400px;">
                      <div id="rightDiv" class="center-font-style" ref="rightDiv"
                           style="padding-top: 100px;margin-left: 10%">
                        <el-row ref="cloudPlat" id="el-row-cloudPlat">
                          <a href="/#/cloudPlatform" class="center-href-button" ref="hrefClose3">
                            云平台
                          </a>
                        </el-row>
                        <el-row ref="dataPlat" id="el-row-dataPlat">
                          <a href="/#/dataPlatform" class="center-href-button" ref="hrefClose4">
                            移动机器人数据平台
                          </a>
                        </el-row>
                        <el-row ref="serviceSystem" id="el-row-serviceSystem">
                          <a href="/#/scenarioService" class="center-href-button" ref="hrefClose5">
                            场景服务软件系统
                          </a>
                        </el-row>
                        <el-row ref="hardwareSystem" id="el-row-hardwareSystem">
                          <a href="/#/hardwareDriver" class="center-href-button" ref="hrefClose6">
                            硬件控制及驱动系统
                          </a>
                        </el-row>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="8">
                  <img src="../static/img/index/u2.jpg" style="width: 100%;height: 400px;padding: 2px;">
                </el-col>
              </el-row>
              <el-row :gutter="24" style="height: 100px;background-color: white;border-top: 1px solid #f2f2f2">
                <el-col :span="8" class="bottom-font-style" style="padding-top: 2%">
                  移动机器人是自动执行工作的机器装置
                </el-col>
                <el-col :span="8"><br></el-col>
                <el-col :span="8" class="bottom-font-style" ref="closeCarousel2" style="padding-top: 2%">
                  移动机器人
                  <img src="../../gomros-index/static/img/index/u153p002.png" style="margin-left: 5%">
                </el-col>
              </el-row>
            </div>
            <!--      GomROS开放平台      -->
            <div v-if="item===3">
              <el-row :gutter="24" style="height: 400px;background-color: white">
                <el-col :span="6" class="left-font-style" style="height:100%;border-right: 1px solid #f2f2f2">
                  <p style="margin-top: 20%;margin-right: 18%">GomROS开放平台</p>
                </el-col>
                <el-col :span="10" style="height: 400px;padding: 0">
                  <el-row style="width: 40%;height: 100%;border-right: 1px solid #f2f2f2;">
                    <el-row :gutter="24" style="padding-top: 20%;padding-left: 12%">
                      <el-col :span="18" class="center-font-style" id="open-plat-introduce"
                              ref="openPlatIntroduce" style="text-align: left">
                        <a href="/#/openCommunity" class="center-href-button" ref="hrefClose7">开放平台介绍</a>
                      </el-col>
                      <el-col :span="4">
                        <img src="../static/img/index/u153p002.png" class="center-image"
                             ref="openPlatIntroduceImg" id="openPlatIntroduceImg">
                      </el-col>
                    </el-row>
                    <el-row :gutter="24" style="padding-top: 10%;padding-left: 12%">
                      <el-col :span="18" class="center-font-style" id="open-community"
                              ref="openCommunity" style="text-align: left">
                        <a href='http://124.70.86.111:8096/bbs/index/index' class="center-href-button" ref="hrefClose8">开发者社区</a>
                      </el-col>
                      <el-col :span="4">
                        <img src="../static/img/index/u153p002.png" class="center-image"
                             ref="openCommunityImg" id="openCommunityImg">
                      </el-col>
                    </el-row>
                  </el-row>
                </el-col>
                <el-col :span="8">
                  <img src="../static/img/index/u197.jpg" style="width: 100%;height: 400px;padding: 2px;">
                </el-col>
              </el-row>
              <el-row :gutter="24" style="height: 100px;background-color: white;border-top: 1px solid #f2f2f2">
                <el-col :span="8" class="bottom-font-style" style="padding-top: 2%">
                  安全开放的工业互联网平台
                </el-col>
                <el-col :span="8"><br></el-col>
                <el-col :span="8" class="bottom-font-style" ref="closeCarousel3" style="padding-top: 2%">
                  GomRos开放平台
                  <img src="../../gomros-index/static/img/index/u153p002.png" style="padding-left: 4%">
                </el-col>
              </el-row>
            </div>
            <!--      生态合作      -->
            <div v-if="item===4">
              <el-row :gutter="24" style="height: 400px;background-color: white">
                <el-col :span="6" class="left-font-style" style="height:100%;border-right: 1px solid #f2f2f2">
                  <p style="margin-top: 20%;margin-right: 25%">生态合作</p>
                </el-col>
                <el-col :span="10" style="height: 400px">
                  <el-row style="width: 40%;height: 100%;border-right: 1px solid #f2f2f2;">
                    <el-row :gutter="24" style="padding-top: 12%;padding-left: 12%">
                      <el-col :span="18" class="center-font-style" id="collaborative-dev-plat"
                              ref="collaborativeDevPlat" style="text-align: left">
                        <a href="/#/development" class="center-href-button" ref="hrefClose9">
                          协同研发平台
                        </a>
                      </el-col>
                      <el-col :span="4">
                        <img src="../static/img/index/u153p002.png" class="center-image"
                             ref="collaborativeDevPlatImg" id="collaborativeDevPlatImg">
                      </el-col>
                    </el-row>
                    <el-row :gutter="24" style="padding-top: 10%;padding-left: 12%">
                      <el-col :span="18" class="center-font-style" id="edu-train-cooperation"
                              ref="eduTrainCooperation" style="text-align: left">
                        <a href="/#/education" class="center-href-button" ref="hrefClose10">
                          教育培训合作
                        </a>
                      </el-col>
                      <el-col :span="4">
                        <img src="../static/img/index/u153p002.png" class="center-image"
                             ref="eduTrainCooperationImg" id="eduTrainCooperationImg">
                      </el-col>
                    </el-row>
                    <el-row :gutter="24" style="padding-top: 10%;padding-left: 12%">
                      <el-col :span="18" class="center-font-style" id="supplier-cooperation"
                              ref="supplierCooperation" style="text-align: left">
                        <a href="/#/supplier" class="center-href-button" ref="hrefClose11">
                          供应商合作
                        </a>
                      </el-col>
                      <el-col :span="4">
                        <img src="../static/img/index/u153p002.png" class="center-image"
                             ref="supplierCooperationImg" id="supplierCooperationImg">
                      </el-col>
                    </el-row>
                  </el-row>
                </el-col>
                <el-col :span="8">
                  <img src="../static/img/index/u215.png" style="width: 100%;height: 400px;padding: 2px;">
                </el-col>
              </el-row>
              <el-row :gutter="24" style="height: 100px;background-color: white;border-top: 1px solid #f2f2f2">
                <el-col :span="8" class="bottom-font-style" style="padding-top: 2%">
                  合作打造可持续发展的生态系统
                </el-col>
                <el-col :span="8"><br></el-col>
                <el-col :span="8" class="bottom-font-style" ref="closeCarousel4" style="padding-top: 2%">
                  生态合作
                  <img src="../../gomros-index/static/img/index/u153p002.png" style="padding-left: 4%">
                </el-col>
              </el-row>
            </div>
            <!--      关于我们      -->
            <div v-if="item===5">
              <el-row :gutter="24" style="height: 400px;background-color: white">
                <el-col :span="6" class="left-font-style" style="height:100%;border-right: 1px solid #f2f2f2">
                  <p style="margin-top: 20%;margin-right: 25%">关于我们</p>
                </el-col>
                <el-col :span="10" style="height: 400px">
                  <el-row style="width: 40%;height: 100%;border-right: 1px solid #f2f2f2;">
                    <el-row :gutter="24" style="padding-top: 20%;padding-left: 4%">
                      <el-col :span="12" class="center-font-style" id="enterprise-introduction"
                              ref="enterpriseIntroduction">
                        <a href="/#/corporateProfile" class="center-href-button" ref="hrefClose12">
                          企业简介
                        </a>
                      </el-col>
                      <el-col :span="12">
                        <img src="../static/img/index/u153p002.png" class="center-image"
                             ref="enterpriseIntroductionImg" id="enterpriseIntroductionImg">
                      </el-col>
                    </el-row>
                    <el-row :gutter="24" style="padding-top: 12%;padding-left: 4%">
                      <el-col :span="12" class="center-font-style" id="contact-us" ref="contactUs">
                        <a href="/#/about" class="center-href-button" ref="hrefClose13">
                          联系我们
                        </a>
                      </el-col>
                      <el-col :span="12">
                        <img src="../static/img/index/u153p002.png" class="center-image"
                             ref="contactUsImg" id="contactUsImg">
                      </el-col>
                    </el-row>
                  </el-row>

                </el-col>
                <el-col :span="8">
                  <img src="../static/img/index/u233.png" style="width: 100%;height: 400px;padding: 2px;">
                </el-col>
              </el-row>
              <el-row :gutter="24" style="height: 100px;background-color: white;border-top: 1px solid #f2f2f2">
                <el-col :span="8" class="bottom-font-style" style="padding-top: 2%">
                  企业发展历程介绍
                </el-col>
                <el-col :span="8">
                  <br>
                </el-col>
                <el-col :span="8" class="bottom-font-style" ref="closeCarousel5" style="padding-top: 2%">
                  关于我们
                  <img src="../../gomros-index/static/img/index/u153p002.png" style="padding-left: 4%">
                </el-col>
              </el-row>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <transition enter-active-class="animated">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import axios from "./router/http";
import message from "element-ui/packages/message";

export default {
  name: "App",
  data() {
    return {
      circleUrl: "../../gomros-index/static/product/logo-small.png",
      appurl: '',
      transitionName: '',
      activeIndex: '/',
      hrefdata: [
        [
          {
            href: "/goto",
            text: "走进GomRos"
          },
          {
            href: "/goto",
            text: "发展历程"
          },
          {
            href: "/goto",
            text: "GomRos文化"
          },
          {
            href: "/goto",
            text: "资质荣誉"
          },
          {
            href: "/goto",
            text: "合作伙伴"
          }
        ],
        [
          {
            href: "/news",
            text: "新闻资讯"
          },
          {
            href: "/news",
            text: "公司新闻"
          },
          {
            href: "/news",
            text: "行业动态"
          }
        ],
        [
          {
            href: "/product",
            text: "产品中心"
          }
        ],
        [
          {
            href: "/case",
            text: "经典案例"
          },
          {
            href: "/recruitment",
            text: "诚聘英才"
          },
          {
            href: "/study",
            text: "学习模块"
          },
          {
            href: "/opencommunity",
            text: "开放平台介绍"

          }
        ],
        [
          {
            href: "/help",
            text: "帮助中心"
          },
        ],
        [
          {
            href: '/about',
            text: "关于我们"
          },
          {
            href: '/contact',
            text: "联系我们"
          },
          {
            href: '/corporateprofile',
            text: "企业简介"
          },
          {
            href: '/development',
            text: "协同研发平台"
          },
          {
            href: '/education',
            text: "教育培训合作"
          },
          {
            href: 'supplier',
            text: "供应商合作"
          },
          {
            href: '/honor',
            text: "荣耀"
          },
        ]
      ]
    };
  },
  methods: {
    changeCarousel(index) {
      this.$refs.banner.setActiveItem(index - 1)
    },
    routerToIndex() {
      const buttonShowCarousel = this.$refs.buttonShowCarousel;
      console.log(buttonShowCarousel)
      this.$router.push('/index')
    },
    routerToRobotOperateSystem() {
      this.$router.push('/robotOperateSystem')
      console.log("robotOperateSystem")
    },
    routerToTechnology() {
      this.$router.push('/technology')
      console.log("technology")
    },
    routerToCloudPlatform() {
      this.$router.push('/cloudPlatform')
    },
    routerToDataPlatform() {
      this.$router.push('/dataPlatform')
    },
    routerToScenarioService() {
      this.$router.push('/scenarioService')
    },
    routerToHardwareDriver() {
      this.$router.push('/hardwareDriver')
    },
    routerToOpencommunity() {
      this.$router.push('/openCommunity')
    },
    routerToDevelopment() {
      this.$router.push('/development')
    },
    routerToEducation() {
      this.$router.push('/education')
    },
    routerToSupplier() {
      this.$router.push('/supplier')
    },
    routerToCorporateprofile() {
      this.$router.push('/corporateProfile')
    },
    routerToAbout() {
      this.$router.push('/about')
    },


  },
  mounted() {
    this.$nextTick(() => {
      const systemIntroduce = this.$refs.systemIntroduce[0].$el;
      const systemIntroduceImg = this.$refs.systemIntroduceImg[0];
      const technologyIntroduce = this.$refs.technologyIntroduce[0].$el;
      const technologyIntroduceImg = this.$refs.technologyIntroduceImg[0];
      const auxiliarySystem = this.$refs.auxiliarySystem[0].$el;
      const auxiliarySystemImg = this.$refs.auxiliarySystemImg[0];
      const openPlatIntroduce = this.$refs.openPlatIntroduce[0].$el;
      const openPlatIntroduceImg = this.$refs.openPlatIntroduceImg[0];
      const openCommunity = this.$refs.openCommunity[0].$el;
      const openCommunityImg = this.$refs.openCommunityImg[0];
      const collaborativeDevPlat = this.$refs.collaborativeDevPlat[0].$el;
      const collaborativeDevPlatImg = this.$refs.collaborativeDevPlatImg[0];
      const eduTrainCooperation = this.$refs.eduTrainCooperation[0].$el;
      const eduTrainCooperationImg = this.$refs.eduTrainCooperationImg[0];
      const supplierCooperation = this.$refs.supplierCooperation[0].$el;
      const supplierCooperationImg = this.$refs.supplierCooperationImg[0];
      const enterpriseIntroduction = this.$refs.enterpriseIntroduction[0].$el;
      const enterpriseIntroductionImg = this.$refs.enterpriseIntroductionImg[0];
      const contactUs = this.$refs.contactUs[0].$el;
      const contactUsImg = this.$refs.contactUsImg[0];
      const rightDiv = this.$refs.rightDiv[0];
      const cloudPlat = this.$refs.cloudPlat[0].$el;
      const dataPlat = this.$refs.dataPlat[0].$el;
      const serviceSystem = this.$refs.serviceSystem[0].$el;
      const hardwareSystem = this.$refs.hardwareSystem[0].$el;
      const carouselStyle = this.$refs.carouselStyle;
      const buttonShowCarousel = this.$refs.buttonShowCarousel;
      const buttonShowCarousel2 = this.$refs.buttonShowCarousel2;
      const buttonShowCarousel3 = this.$refs.buttonShowCarousel3;
      const buttonShowCarousel4 = this.$refs.buttonShowCarousel4;
      const buttonShowCarousel5 = this.$refs.buttonShowCarousel5;
      const closeCarousel = this.$refs.closeCarousel[0].$el;
      const closeCarousel2 = this.$refs.closeCarousel2[0].$el;
      const closeCarousel3 = this.$refs.closeCarousel3[0].$el;
      const closeCarousel4 = this.$refs.closeCarousel4[0].$el;
      const closeCarousel5 = this.$refs.closeCarousel5[0].$el;
      const hrefClose = this.$refs.hrefClose[0];
      const hrefClose2 = this.$refs.hrefClose2[0];
      const hrefClose3 = this.$refs.hrefClose3[0];
      const hrefClose4 = this.$refs.hrefClose4[0];
      const hrefClose5 = this.$refs.hrefClose5[0];
      const hrefClose6 = this.$refs.hrefClose6[0];
      const hrefClose7 = this.$refs.hrefClose7[0];
      const hrefClose8 = this.$refs.hrefClose8[0];
      const hrefClose9 = this.$refs.hrefClose9[0];
      const hrefClose10 = this.$refs.hrefClose10[0];
      const hrefClose11 = this.$refs.hrefClose11[0];
      const hrefClose12 = this.$refs.hrefClose12[0];
      const hrefClose13 = this.$refs.hrefClose13[0];
      // console.log(hrefClose2)
      // 触发方法
      systemIntroduce.addEventListener("mouseover", () => {
        systemIntroduce.style.color = "#0d64e8"
        systemIntroduceImg.style.display = "block"
      })
      systemIntroduce.addEventListener("mouseout", () => {
        systemIntroduce.style.color = "#7F7F7F"
        systemIntroduceImg.style.display = "none"
      })
      technologyIntroduce.addEventListener("mouseover", () => {
        technologyIntroduce.style.color = "#0d64e8"
        technologyIntroduceImg.style.display = "block"
      })
      technologyIntroduce.addEventListener("mouseout", () => {
        technologyIntroduce.style.color = "#7F7F7F"
        technologyIntroduceImg.style.display = "none"
      })
      auxiliarySystem.addEventListener("mouseover", () => {
        auxiliarySystem.style.color = "#0d64e8"
        auxiliarySystemImg.style.display = "block"
        rightDiv.style.display = "block"
        rightDiv.style.textAlign = "left"

      })
      auxiliarySystem.addEventListener("mouseout", () => {
        auxiliarySystem.style.color = "#7F7F7F"
        auxiliarySystemImg.style.display = "none"
      })
      openPlatIntroduce.addEventListener("mouseover", () => {
        openPlatIntroduce.style.color = "#0d64e8"
        openPlatIntroduceImg.style.display = "block"
      })
      openPlatIntroduce.addEventListener("mouseout", () => {
        openPlatIntroduce.style.color = "#7F7F7F"
        openPlatIntroduceImg.style.display = "none"
      })
      openCommunity.addEventListener("mouseover", () => {
        openCommunity.style.color = "#0d64e8"
        openCommunityImg.style.display = "block"
      })
      openCommunity.addEventListener("mouseout", () => {
        openCommunity.style.color = "#7F7F7F"
        openCommunityImg.style.display = "none"
      })
      collaborativeDevPlat.addEventListener("mouseover", () => {
        collaborativeDevPlat.style.color = "#0d64e8"
        collaborativeDevPlatImg.style.display = "block"
      })
      collaborativeDevPlat.addEventListener("mouseout", () => {
        collaborativeDevPlat.style.color = "#7F7F7F"
        collaborativeDevPlatImg.style.display = "none"
      })
      eduTrainCooperation.addEventListener("mouseover", () => {
        eduTrainCooperation.style.color = "#0d64e8"
        eduTrainCooperationImg.style.display = "block"
      })
      eduTrainCooperation.addEventListener("mouseout", () => {
        eduTrainCooperation.style.color = "#7F7F7F"
        eduTrainCooperationImg.style.display = "none"
      })
      supplierCooperation.addEventListener("mouseover", () => {
        supplierCooperation.style.color = "#0d64e8"
        supplierCooperationImg.style.display = "block"
      })
      supplierCooperation.addEventListener("mouseout", () => {
        supplierCooperation.style.color = "#7F7F7F"
        supplierCooperationImg.style.display = "none"
      })
      enterpriseIntroduction.addEventListener("mouseover", () => {
        enterpriseIntroduction.style.color = "#0d64e8"
        enterpriseIntroductionImg.style.display = "block"
      })
      enterpriseIntroduction.addEventListener("mouseout", () => {
        enterpriseIntroduction.style.color = "#7F7F7F"
        enterpriseIntroductionImg.style.display = "none"
      })
      contactUs.addEventListener("mouseover", () => {
        contactUs.style.color = "#0d64e8"
        contactUsImg.style.display = "block"
      })
      contactUs.addEventListener("mouseout", () => {
        contactUs.style.color = "#7F7F7F"
        contactUsImg.style.display = "none"
      })
      cloudPlat.addEventListener("mouseover", () => {
        auxiliarySystemImg.style.display = "block"
      })
      cloudPlat.addEventListener("mouseout", () => {
        auxiliarySystemImg.style.display = "none"
      })
      dataPlat.addEventListener("mouseover", () => {
        auxiliarySystemImg.style.display = "block"
      })
      dataPlat.addEventListener("mouseout", () => {
        auxiliarySystemImg.style.display = "none"
      })
      serviceSystem.addEventListener("mouseover", () => {
        auxiliarySystemImg.style.display = "block"
      })
      serviceSystem.addEventListener("mouseout", () => {
        auxiliarySystemImg.style.display = "none"
      })
      hardwareSystem.addEventListener("mouseover", () => {
        auxiliarySystemImg.style.display = "block"
      })
      hardwareSystem.addEventListener("mouseout", () => {
        auxiliarySystemImg.style.display = "none"
      })
      buttonShowCarousel.addEventListener("click", () => {
        carouselStyle.style.display = "block"
      })
      buttonShowCarousel2.addEventListener("click", () => {
        carouselStyle.style.display = "block"
      })
      buttonShowCarousel3.addEventListener("click", () => {
        carouselStyle.style.display = "block"
      })
      buttonShowCarousel4.addEventListener("click", () => {
        carouselStyle.style.display = "block"
      })
      buttonShowCarousel5.addEventListener("click", () => {
        carouselStyle.style.display = "block"
      })
      closeCarousel.addEventListener("click", () => {
        carouselStyle.style.display = "none"
      })
      closeCarousel2.addEventListener("click", () => {
        carouselStyle.style.display = "none"
      })
      closeCarousel3.addEventListener("click", () => {
        carouselStyle.style.display = "none"
      })
      closeCarousel4.addEventListener("click", () => {
        carouselStyle.style.display = "none"
      })
      closeCarousel5.addEventListener("click", () => {
        carouselStyle.style.display = "none"
      })
      hrefClose.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose2.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose3.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose4.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose5.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose6.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose7.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose8.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose9.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose10.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose11.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose12.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })
      hrefClose13.addEventListener("click", () => {
        carouselStyle.style.display = "none"
        rightDiv.style.display = "none"
      })


    });
  },
};
</script>

<style lang="less">
@import "./../static/css/public.min.css";

body {
  padding: 0;
  margin: 0;
}

html,
body,
div,
span,
iframe,
blockquote,
pre,
a,
address,
big,
cite,
code,
del,
em,
font,
img,
ins,
small,
strong,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend {
  margin: 0;
  padding: 0;
}

html,
body,
div,
p,
a,
h1,
h2,
h3,
h4,
h5,
li,
ol,
ul,
strong,
span {
  font-family: "微软雅黑";
}

li,
ol,
ul {
  list-style: none outside;
}

:focus {
  outline: 0;
}

a img {
  border: 0;
}

a {
  text-decoration: none;
}

img {
  vertical-align: middle;
}

table {
  empty-cells: show;
}

ins {
  text-decoration: none;
}

del {
  text-decoration: line-through;
}

em {
  font-style: normal;
}

button::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner {
  border: 0;
  padding: 0;
}

a {
  transition: color 0.4s ease-in-out;
  -moz-transition: color 0.4s ease-in-out;
  -webkit-transition: color 0.4s ease-in-out;
  -o-transition: color 0.4s ease-in-out;
}

* {
  font-family: "Helvetica";
  box-sizing: border-box;
}

.page-top {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center center;
}

.page-top h1 {
  margin: 0;
  line-height: 500px;
  text-align: center;
  color: #fff;
  font-size: 45px;
  font-weight: 400;
}

.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.pos_r {
  position: relative;
}

.pos_a {
  position: absolute;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.overh {
  overflow: hidden;
}

.line-group {
  > h3 {
    font-size: 34px;
    font-weight: normal;
    color: #333333;
    text-align: center;
    margin: 20px 0;
  }
}

.top-cover {
  padding-top: 9%;
  text-align: center;
  position: absolute;
  top: 0;
  width: 100%;
  min-width: 1320px;

  h1 {
    font-size: 42px;
    color: #fff;
  }

  span {
    width: 165px;
    height: 1px;
    background-color: #fff;
    display: block;
    margin: 16px auto 0;
  }

  p {
    font-size: 22px;
    color: #fff;
    margin-top: 32px;
    display: block;
  }
}

.el-menu-item {
  font-size: 16px !important;
}

.copyright {
  background: #125688;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
</style>

<style scoped>
.toppost {
  position: absolute;
  z-index: 999;
  width: 100% !important;
}

.el-menu {
  border-bottom: none;
  width: 100%;
}

.el-menu-item a {
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
}

.bottombox {
  width: 100%;
  overflow: hidden;
  background-color: rgb(23, 103, 161);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 1.4% 3%;
}

.bottombox ul {
  float: left;
  list-style: none;
  padding: 0 1.5%;
  min-height: 216px;
}

.bottombox ul:nth-of-type(1) {
  margin-left: 5%;
}

.bottombox ul li:first-child {
  margin-bottom: 10px;
}

.bottombox ul li:first-child a:after {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background: #fff;
}

.bottombox ul:nth-child(6) {
  border-right: 0;
}

.bottombox ul:nth-child(6) li:first-child {
  margin: 0;
}

.bottombox ul li {
  line-height: 36px;
}

.bottombox ul li:first-child a {
  font-size: 20px;
  color: #d4edff;
}

.bottombox ul li a {
  text-decoration: none;
  color: #f7f7f7;
  font-weight: 300;
}

.bottombox ul li a:hover {
  color: #89d0f9;
}

.bottomercode {
  width: 170px;
  position: absolute;
  right: 10%;
  margin-top: 10px;
  padding: 15px;
  background: #fff;
  border: 2px solid #125688;
}

.topdoli {
  float: right;
  line-height: 60px;
  margin-right: 6%;
}

.topdoli a {
  text-decoration: none;
  color: #808080;
  font-weight: 300;
}

.button-box {
  color: black;
  background-color: white;
  width: 100%;
  font-size: 15px;
  border: none;
}


.left-font-style {
  font-weight: 700;
  font-style: normal;
  color: #D7D7D7;
  font-size: 32px;
  text-align: right;
}

.center-font-style {
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  color: #7F7F7F;
  /*text-align: center;*/
  line-height: normal;
  margin-bottom: 10px;

}

.div-carousel-style {
  position: absolute;
  background-color: white;
  color: black;
  width: 100%;
  z-index: 5;
  height: 500px;
  display: none;
  border-top: 1px solid #f2f2f2
}

.center-image {
  margin-left: -5%;
}

#index-button:hover {
  color: #0d64e8;
}

#robot-operate-system-button:hover {
  color: #0d64e8;
}

#move-robot-button:hover {
  color: #0d64e8;
}

#GomRos-open_community-button:hover {
  color: #0d64e8;
}

#corporate-button:hover {
  color: #0d64e8;
}

#about-button:hover {
  color: #0d64e8;
}

#systemIntroduceImg {
  display: none;
}

#technologyIntroduceImg {
  display: none;
}

#auxiliarySystemImg {
  display: none;
}

#openPlatIntroduceImg {
  display: none;
}

#openCommunityImg {
  display: none;
}

#collaborativeDevPlatImg {
  display: none;
}

#eduTrainCooperationImg {
  display: none;
}

#supplierCooperationImg {
  display: none;
}

#enterpriseIntroductionImg {
  display: none;
}

#contactUsImg {
  display: none;
}

#el-row-cloudPlat {
  margin-bottom: 6%;
}

#el-row-dataPlat {
  margin-bottom: 6%;
}

#el-row-serviceSystem {
  margin-bottom: 6%;
}

#el-row-hardwareSystem {
  margin-bottom: 10px
}

#el-row-cloudPlat:hover {
  color: #0d64e8;
}

#el-row-dataPlat:hover {
  color: #0d64e8;
}

#el-row-serviceSystem:hover {
  color: #0d64e8;
}

#el-row-hardwareSystem:hover {
  color: #0d64e8;
}

.button-box {
  background-color: white;
  width: 100%;
  font-size: 18px;
  border: none;
  font-weight: 700;
  color: #7F7F7F;
  font-style: normal;
}


/*.left-font-style {*/
/*  font-weight: 700;*/
/*  font-style: normal;*/
/*  color: #D7D7D7;*/
/*  font-size: 32px;*/
/*  text-align: right;*/
/*}*/

.center-font-style {
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  color: #7F7F7F;
  text-align: center;
  line-height: normal;
  margin-bottom: 10px;
  position: relative;

}

.bottom-font-style {
  font-style: normal;
  font-weight: 400;
  color: #0d64e8;
  font-size: 18px;
  text-align: center;
  margin-top: 0;
}

/*.div-carousel-style {*/
/*  position: absolute;*/
/*  background-color: white;*/
/*  color: black;*/
/*  width: 100%;*/
/*  z-index: 5;*/
/*  height: 300px*/
/*}*/

.center-image {
  margin-left: -5%;
}

#index-button:hover {
  color: #0d64e8;
}

#robot-operate-system-button:hover {
  color: #0d64e8;
}

#move-robot-button:hover {
  color: #0d64e8;
}

#GomRos-open_community-button:hover {
  color: #0d64e8;
}

#corporate-button:hover {
  color: #0d64e8;
}

#about-button:hover {
  color: #0d64e8;
}

#rightDiv {
  display: none;
}

.center-href-button {
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  color: #7F7F7F;
  line-height: normal;
  background-color: white;
  border: none;
}

a:hover {
  color: #0d64e8;
}
</style>