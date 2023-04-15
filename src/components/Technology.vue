<template>
  <div id="Supplier" style="color: #0D64E8">
    <el-container id="top-img">
      <el-row style="width: 100%;height: 400px">
        <el-col :span="15" style="background-color: #010954;height: 100%">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col :span="3" style="margin-right: 80px">
              <img src="static/img/MobileRobot/logo1.svg" style="width: 240px;height: 240px;">
            </el-col>
            <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">GomROS</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">工业基础软禁</span></p>
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">移动机器人</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">移动机器人介绍</span></p>
              <p style="font-size: 25px;color: white;text-shadow: none;font-weight: bolder;margin-right: 10%">
                移动机器人，是一个集环境感知、动态决策与规划、行为控制与执行等多功能于一体的综合系统。它集中了传感器技术、信息处理、电子工程、
                计算机工程、自动化控制工程以及人工智能等多学科的研究成果，代表机电一体化的最高成就，是目前科学技术发展最活跃的领域之一。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="9"
                style="height:100%;background-image: url(static/img/Technology/u2.jpg);background-size: cover">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer id="img-footer" style="background: #0d64e8;color: white;font-size: 30px;height: 100%;">
        <el-row :gutter="24" style="text-align: center;font-size: 32px;margin-bottom: 5px">
          <el-col :span="8" style="color: #FFFFFF">
            <div>
              <el-row>
                <el-button @click="changeCarousel(0)"
                           style="font-size: 32px;background-color: #0d64e8;color: white;border-color: #0d64e8;font-weight: bolder">
                  车载系统
                </el-button>
              </el-row>
              <el-row style="font-size: 18px;font-weight: bolder">
                环境感知系统 数据处理系统 控制系统 输入输出系统
              </el-row>
            </div>
          </el-col>
          <el-col :span="8" style="color: #0d64e8;background-color: white">
            <div>
              <el-row>
                <el-button @click="changeCarousel(1)"
                           style="font-size: 32px;background-color: white;color: #0d64e8;border-color: white;font-weight: bolder">
                  云平台系统
                </el-button>
              </el-row>
              <el-row style="font-size: 18px;font-weight: bolder">
                智能管控 数据分析 数据处理 互联互通
              </el-row>
            </div>
          </el-col>
          <el-col :span="8" style="color: #FFFFFF">
            <div>
              <el-row>
                <el-button @click="changeCarousel(2)"
                           style="font-size: 32px;background-color: #0d64e8;color: white;border-color: #0d64e8;font-weight: bolder">
                  场景服务系统
                </el-button>
              </el-row>
              <el-row style="font-size: 18px;font-weight: bolder">
                调度系统 任务处理系统 手机APP
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>

    <el-carousel :interval="5000" arrow="always" :autoplay="true" style="height: 800px;" ref="banner">
      <el-carousel-item v-for="item in 3" :key="item" style="height: 800px">
        <div v-if="item===1" style="text-align: center;font-weight: bold;width: 100%;">
          <el-row :gutter="24" class="container">
            <el-col :span="8">
              <div style="background-image: url(../../static/img/Technology/u17.png);
                  background-position: center;
                  background-size: cover;
                  background-color: rgba(0,0,0,0.533);
                  width: 640px;
                  height: 400px;
                  text-align: left;">
                <el-row><br></el-row>
                <el-row>
                  <p style="margin-left: 2%;width: 280px;color: white;font-size: 32px;background-color: #0d64e8;font-weight: bolder">
                    GomRos车载系统</p>
                  <p style="margin-left: 2%;width: 380px;color: white;font-size: 18px;background-color: #0d64e8;font-weight: bolder">
                    GomRos车载系统可适配各大品牌电子元器件</p>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <img src="../../static/img/Technology/u20.gif"
                   style="width: 640px;height: 400px;background-color: rgba(0,0,0,0.533);">
            </el-col>
            <el-col :span="8">
              <div>
                <el-row :gutter="24" class="container">
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u22.png"
                         style="width: 320px;height: 200px;background-color: rgba(0,0,0,0.533);">
                  </el-col>
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u23.png"
                         style="width: 320px;height: 200px;background-color: rgba(0,0,0,0.533);">
                  </el-col>
                </el-row>
                <el-row :gutter="24" class="container">
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u21.png"
                         style="width: 320px;height: 200px;background-color: rgba(0,0,0,0.533);">
                  </el-col>
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u24.png"
                         style="width: 320px;height: 200px;background-color: rgba(0,0,0,0.533);">
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="container">
            <el-col :span="8">
              <div style="background-image: url(static/img/Technology/u18.jpg);
                  background-position: center;
                  background-size: cover;
                  width: 640px;
                  height: 400px;
                  text-align: left;
                  background-color: rgba(0,0,0,0.533)"
              >
                <el-row><br></el-row>
                <el-row>
                  <p style="margin-left: 2%;width: 390px;color: white;font-size: 32px;background-color: #0d64e8;font-weight: bolder">
                    GomRos数据处理系统</p>
                  <p style="margin-left: 2%;width: 340px;color: white;font-size: 18px;background-color: #0d64e8;font-weight: bolder">
                    GomRos 自动数据处理，自动输出结果</p>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <img src="../../static/img/Technology/u25.gif"
                   style="width: 640px;height: 400px;background-color: rgba(0,0,0,0.533)">
            </el-col>
            <el-col :span="8">
              <div>
                <el-row :gutter="24" class="container">
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u26.png"
                         style="width: 320px;height: 200px;background-color: rgba(0,0,0,0.533)">
                  </el-col>
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u31.jpeg"
                         style="width: 320px;height: 200px;background-color: rgba(0,0,0,0.533)">
                  </el-col>
                </el-row>
                <el-row :gutter="24" class="container">
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u30.png"
                         style="width: 320px;height: 200px;background-color: rgba(0,0,0,0.533)">
                  </el-col>
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u32.png"
                         style="width: 320px;height: 200px;background-color: rgba(0,0,0,0.533)">
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>

        <div v-if="item===2"
             style="font-size: 18px;font-weight: bold;margin: 20px;padding-left: 1%;padding-right: 1%">
          <el-row :gutter="24">
            <el-col :span="8"
                    style="border-bottom: 2px dashed;border-right: 2px dashed;padding-bottom: 1%;padding-right: 1%">
              <el-row :gutter="24">
                <el-col :span="10" style="width: 55%;padding-top: 4%">
                  <el-row style="font-size: 32px">机器人云管控平台</el-row>
                  <el-row style="font-size: 15px"> GomROS远程管理控制</el-row>
                </el-col>
                <el-col :span="6">&nbsp;</el-col>
                <el-col :span="8" style="padding-left: 12%;padding-top: 0;">
                  <div
                      style="width:160px;height:120px;background-image: url(static/img/Technology/u70.svg);background-size: cover;text-align: center">
                    <br>
                    <p style="color: white">远程控制</p>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="24" type="flex">
                <el-col :span="8">
                  <img src="../../static/img/Technology/u73.png" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="8" style="margin-left: 50px">
                  <img src="../../static/img/Technology/u72.jpg" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="6" style="text-align: center;">
                  &nbsp;
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col :span="16">
                  <br>机器人云端远程控制管理
                </el-col>
                <el-col :span="8"><br></el-col>
              </el-row>
            </el-col>
            <el-col :span="8"
                    style="border-right: 2px dashed;border-bottom: 2px dashed;padding-bottom: 1%;padding-right: 1%;padding-left: 1%">
              <el-row :gutter="24">
                <el-col :span="10" style="width: 59%;padding-top: 4%">
                  <el-row style="font-size: 32px">云端地图管理</el-row>
                  <el-row style="font-size: 15px">GomROS 云端地图构建 云端定位计算</el-row>
                </el-col>
                <el-col :span="6">
                  <br>
                </el-col>
                <el-col :span="8" style="padding-left: 8%;padding-top: 0">
                  <div
                      style="width:160px;height:120px;background-image: url(static/img/Technology/u84.svg);background-size: cover;text-align: center">
                    <br>
                    <p style="color: white;background-color: #0d64e8">云端地图构建</p>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="24" type="flex">
                <el-col :span="8">
                  <img src="../../static/img/Technology/u31.jpeg" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="8" style="margin-left: 50px">
                  <img src="../../static/img/Technology/u90.jpg" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="8" style="text-align: center">&nbsp;</el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col :span="16">
                  <br>机器人云端云端地图管理 云端定位管理
                </el-col>
                <el-col :span="8">
                  <br>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="8" style="border-bottom: 2px dashed;padding-bottom: 1%;padding-left: 1%">
              <el-row :gutter="24">
                <el-col :span="10" style="width: 59%;padding-top: 4%">
                  <el-row style="font-size: 32px">云端任务管理</el-row>
                  <el-row style="font-size: 15px">GomRos 云端任务管理 云端线路规划</el-row>
                </el-col>
                <el-col :span="6">
                  <br>
                </el-col>
                <el-col :span="8" style="padding-left: 12%;padding-top: 0">
                  <div
                      style="width:160px;height:120px;background-image: url(static/img/Technology/u98.svg);background-size: cover;text-align: center">
                    <br>
                    <p style="color: white;background-color: #0d64e8">云端任务管理</p>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="24" type="flex">
                <el-col :span="8">
                  <img src="../../static/img/Technology/u103.png" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="8" style="margin-left: 50px">
                  <img src="../../static/img/Technology/u104.jpg" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="8">
                  &nbsp;
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col :span="16">
                  <br>机器人云端任务管理 云端线路规划管理
                </el-col>
                <el-col :span="8">
                  <br>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8" style="border-right: 2px dashed;padding-top: 1%;padding-right: 1%">
              <el-row :gutter="24">
                <el-col :span="10" style="width: 59%;padding-top: 4%">
                  <el-row style="font-size: 32px">云端数据分析</el-row>
                  <el-row style="font-size: 15px">GomRos 云端数据分析 数据可视化展示</el-row>
                </el-col>
                <el-col :span="6"><br></el-col>
                <el-col :span="8" style="padding-left: 8%;padding-top: 0;">
                  <div
                      style="width:160px;height:120px;background-image: url(static/img/Technology/u75.svg);background-size: cover;text-align: center">
                    <br>
                    <el-row style="height: 20px;margin-top: 5px">
                      <el-col :span="6">&nbsp;
                      </el-col>
                      <el-col :span="12">
                        <p style="width: 100%;color:white;background-color: #0d64e8">数据分析</p>
                      </el-col>
                      <el-col :span="6">
                        &nbsp;
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="24" type="flex">
                <el-col :span="8">
                  <img src="static/img/Technology/u78.png" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="8" style="margin-left: 50px">
                  <img src="static/img/Technology/u79.png" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="6" style="text-align: center">
                  &nbsp;
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col :span="16">
                  <br>机器人云端数据分析数据展示
                </el-col>
                <el-col :span="8">
                  <br>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="8" style="border-right: 2px dashed;padding-top: 1%;padding-right: 1%">
              <el-row :gutter="24">
                <el-col :span="10" style="width: 59%;padding-top: 4%">
                  <el-row style="font-size: 32px">云端识别交互</el-row>
                  <el-row style="font-size: 15px">GomRos 云端视觉识别 云端语音识别</el-row>
                </el-col>
                <el-col :span="6"><br></el-col>
                <el-col :span="8" style="padding-left: 8%;padding-top: 0;">
                  <div
                      style="width:160px;height:120px;background-image: url(static/img/Technology/u91.svg);background-size: cover;text-align: center">
                    <br>
                    <el-row style="height: 20px">
                      <el-col :span="2">&nbsp;
                      </el-col>
                      <el-col :span="18">
                        <p style="width: 100%;color:white;background-color: #0d64e8">交互模型部署</p>
                      </el-col>
                      <el-col :span="1">
                        &nbsp;
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="24" type="flex">
                <el-col :span="8">
                  <img src="static/img/Technology/u30.png" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="8" style="margin-left: 50px">
                  <img src="static/img/Technology/u97.png" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="6">
                  &nbsp;
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col :span="16"><br>机器人视觉识别 语音识别</el-col>
                <el-col :span="8"><br></el-col>
              </el-row>
            </el-col>
            <el-col :span="8" style="padding-top: 1%">
              <el-row :gutter="24">
                <el-col :span="10" style="width: 59%;padding-top: 4%">
                  <el-row style="font-size: 32px">云端更新推送</el-row>
                  <el-row style="font-size: 15px">GomRos 广告内容推送 云端系统更新</el-row>
                </el-col>
                <el-col :span="6"><br></el-col>
                <el-col :span="8" style="padding-left: 10%;padding-top: 0;">
                  <div
                      style="width:160px;height:120px;background-image: url(static/img/Technology/u110.svg);background-size: cover;text-align: center">
                    <br>
                    <el-row style="height: 20px">
                      <el-col :span="2">&nbsp;
                      </el-col>
                      <el-col :span="18">
                        <p style="width: 100%;color:white;background-color: #0d64e8">推送更新</p>
                      </el-col>
                      <el-col :span="1">
                        &nbsp;
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="24" type="flex">
                <el-col :span="8">
                  <img src="static/img/Technology/u112.png" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="8" style="margin-left: 50px">
                  <img src="static/img/Technology/u113.gif" style="width: 180px;height: 160px;">
                </el-col>
                <el-col :span="6" style="text-align:center">&nbsp;</el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col :span="16"><br> 机器人广告更新 系统更新</el-col>
                <el-col :span="8"><br></el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>

        <div v-if="item===3" style="font-weight: bolder">
          <el-row :gutter="24">
            <el-col :span="8">
              <div style="background-image: url(static/img/Technology/u43.jpg);
                  background-position: center;
                  background-size: cover;
                  width: 640px;
                  height: 400px;
                  text-align: left;"
              >
                <el-row><br></el-row>
                <el-row>
                  <p style="margin-left: 2%;width: 240px;color: white;font-size: 32px;background-color: #0d64e8;font-weight: bolder">
                    多场景服务系统</p>
                  <p style="margin-left: 2%;width: 260px;color: white;font-size: 18px;background-color: #0d64e8;font-weight: bolder">
                    GomRos-满足各行业业务需求</p>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <el-row style="width: 640px" class="container">
                <img src="../../static/img/Technology/u50.jpg"
                     style="width: 640px;height: 400px">
              </el-row>
            </el-col>
            <el-col :span="8">
              <el-row style="width: 640px" class="container">
                <img src="../../static/img/Technology/u55.png"
                     style="width: 640px;height: 400px">
              </el-row>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">
              <div style="background-image: url(static/img/Technology/u44.jpg);
                  background-position: center;
                  background-size: cover;
                  width: 640px;
                  height: 400px;
                  text-align: left;"
              >
                <el-row><br></el-row>
                <el-row>
                  <p style="margin-left: 2%;width: 220px;color: white;font-size: 32px;background-color: #0d64e8;font-weight: bolder">
                    Pc/手机/车载</p>
                  <p style="margin-left: 2%;width: 300px;color: white;font-size: 18px;background-color: #0d64e8;font-weight: bolder">
                    GomRos-满足各类显示操控客户端</p>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <el-row style="width: 640px" class="container">

                <img src="../../static/img/Technology/u51.png"
                     style="width: 640px;height: 400px">
              </el-row>
            </el-col>
            <el-col :span="8">
              <el-row style="width: 640px" class="container">
                <img src="../../static/img/Technology/u57.png"
                     style="width: 640px;height: 400px">
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-carousel-item>
    </el-carousel>

    <el-container>
      <el-main>
        <el-row><br><br></el-row>
        <el-row :gutter="24">
          <el-col :span="5" style="color: #0d64e8;text-align: center;font-weight: bold;margin-left: 2%;padding-right: 0">
            <div style="font-size: 72px">GomRos</div>
            <div style="font-size: 32px;text-align: left;margin-left: 30%">机器人产品应用</div>
          </el-col>
          <el-col :span="9">
            <img src="../../static/img/Technology/u117.svg"
                 style="width: 100%;height: 370px;margin-left:0;margin-right: 0">
          </el-col>
          <el-col :span="9">
            <img src="../../static/img/Technology/u120.png" style="width: 100%;height: 382px;margin-top: -5px">
          </el-col>
        </el-row>
        <el-row><br><br></el-row>
        <el-row>
          <div>
            <el-row :gutter="24">
              <el-col :span="5" style="color: #0d64e8;text-align: center;font-weight: bold;margin-left: 2%;padding-right: 0">
                <div style="font-size: 72px">GomRos</div>
                <div style="font-size: 32px;text-align: left;margin-left: 30%">我们的产品</div>
              </el-col>
              <el-col :span="5">
                <img src="../../static/img/Technology/u126.png">
              </el-col>
              <el-col :span="12">
                <img src="../../static/img/Technology/u123.png">
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="3" style="margin-left: 4%">
                <img src="../../static/img/Technology/u127.png" style="width: 100%">
              </el-col>
              <el-col :span="4">
                <img src="../../static/img/Technology/u128.png" style="width: 80%;">
              </el-col>
              <el-col :span="16">
                <div>
                  <el-row :gutter="24">
                    <el-col :span="20">
                      <img src="../../static/img/Technology/u124.png">
                    </el-col>
                    <el-col :span="2">
                      <br>
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="16">
                      <img src="../../static/img/Technology/u125.png">
                    </el-col>
                    <el-col :span="8">
                      <br>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-row>
      </el-main>
    </el-container>

    <el-container id="bottom">
      <el-main style="background: #0d64e8;font-size: 30px;">
        <el-row :gutter="24" style="padding-top: 0;padding-bottom: 0">
          <el-col :span="13" style="color: white;text-align: left;font-size: 35px;font-weight: bolder;padding-left: 5%">
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
  </div>
</template>

<script>
import axios from "../router/http";

export default {
  name: "About",
  data() {
    return {
      title: "",
      // 是否显示弹出层
      open: false,
      // 表单参数
      form: {},
      rules: {}
    };
  },
  methods: {
    changeCarousel(index) {
      this.$refs.banner.setActiveItem(index)
    },
    routerToContact() {
      this.$router.push('/about')
    },
  },
};
</script>
<style scoped>
#content-box h1,
#content-box h3 {
  text-align: center;
  font-weight: 400;
  color: #1767a1;
}

p {
  color: #444444;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

/*.el-carousel__container {*/
/*height: auto;*/
/*}*/

/*.el-carousel__item:nth-child(2n) {*/
/*  background-color: #99a9bf;*/
/*}*/

/*.el-carousel__item:nth-child(2n+1) {*/
/*  background-color: #d3dce6;*/
/*}*/

/*//轮播图*/
::v-deep(.el-carousel) {
  width: 100%;
}

img {
  height: 100%;
  display: block;
  margin: auto;
}

.el-main {
  overflow-x: hidden;
}

.container {
  position: relative;
}

.container::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
