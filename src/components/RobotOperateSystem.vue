<template>
  <div id="robot-box">
    <el-container id="top-container">
      <el-row id="top-outline">
        <el-col id="top-bc" :span="13">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col id="company-logo" :span="3">
              <img src="static/img/MobileRobot/u3.png" class="cl-img">
            </el-col>
            <el-col id="tc-text" :span="20">
              <p><span style="font-size: 60px" class="font_basic">GomROS</span>
                <span class="font_basic">工业基础软件</span></p>
              <p><span style="font-size: 60px" class="font_basic">机器人操作系统</span>
                <span class="font_basic">机器人系统软件</span></p>
              <p id="top_explain">
                GomROS（句芒）是一款为机器人、自动化设备等高端智能装备提供的国产原创操作系统</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col id="top-bcr" :span="11">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer id="top-footer">
        <p id="tf-text">什么是机器人操作系统？</p>
      </el-footer>
    </el-container>

    <div>
      <!--    第一行 什么是机器人操作系统  -->
      <el-row class="background_white">
        <el-col :span="10" style="margin-left: 80px">
          <p id="ro-text1">GomROS机器人操作系统</p>
          <p id="ro-text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是一组软件库和工具,能够帮助您快速构建机器人应用程序。从控制程序到先进算法的集合，
            并且借助强大的开发人员工具，让您可以快速搭建机器人项目。</p>
          <p id="ro-text3">您需要的软件系统，我们已经给您封装好了，您可以随时调用。</p>
        </el-col>
        <el-col id="row-one" :span="10">
          <el-row :gutter="10" type="flex">
            <el-col
                style="width:100%;height:200px;background-image: url(static/img/MobileRobot/u21.gif);
                background-size: cover;margin-right: 2%">
              <el-col :span="9">
                &nbsp;
              </el-col>
              <el-col :span="8">
                <p id="ro_img1_text">视觉识别算法</p>
              </el-col>
              <el-col :span="7">
                &nbsp;
              </el-col>
            </el-col>
            <el-col style="background-image: url(static/img/RobotOperateSystem/u702.gif);background-size: cover">
              <el-col :span="8">
                &nbsp;
              </el-col>
              <el-col :span="8">
                <p id="ro_img2_text">路径规划算法</p>
              </el-col>
              <el-col :span="7">
                &nbsp;
              </el-col>
            </el-col>
          </el-row>
          <el-row :gutter="10" type="flex">
            <el-col
                style="width:100%;height:200px;background-image: url(static/img/MobileRobot/u27.gif);
                background-size: cover;margin-right: 2%">
              <el-col :span="8">
                &nbsp;
              </el-col>
              <el-col :span="8">
                <p id="ro_img3_text">激光导航算法</p>
              </el-col>
              <el-col :span="7">
                &nbsp;
              </el-col>
            </el-col>
            <el-col style="background-image: url(static/img/RobotOperateSystem/u704.gif);background-size: cover">
              <el-col :span="8">
                &nbsp;
              </el-col>
              <el-col :span="8">
                <p id="ro_img4_text">视觉避障算法</p>
              </el-col>
              <el-col :span="7">
                &nbsp;
              </el-col>
            </el-col>
          </el-row>
        </el-col>
        <el-row>
          <img id="ro_down" src="static/img/RobotOperateSystem/r01.jpg">
        </el-row>
      </el-row>

      <!--    第二行 为什么做机器人操作系统  -->
      <el-footer class="sub_title">
        <p class="footer">为什么做机器人操作系统？</p>
      </el-footer>
      <el-row>
        <el-col id="row-two" :span="8">
          <p id="rt_text1">GomROS机器人操作系统</p>
          <p id="rt_text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在经历了2018年以来的&quot;卡脖子&quot;风波之后，以工业软件、
            基础软件为代表的核心技术，自主研发自主拥有知识产权的需求更为强烈。</p>
          <p id="rt_text3">欢迎您加入我们的开发者队伍，我们一起打造国产基础软件系统。</p>
        </el-col>
        <el-col :span="6" style="margin-top: 2%">
          <img class="img-box row2_img" src="static/img/RobotOperateSystem/u779.png">
        </el-col>
        <el-col :span="6" style="margin-top: 2%">
          <img class="img-box row2_img" src="static/img/RobotOperateSystem/u780.png">
        </el-col>
      </el-row>

      <!--    第三行 机器人操作系统有哪些应用  -->
      <el-footer class="sub_title">
        <p class="footer">机器人操作系统有哪些应用？</p>
      </el-footer>
      <el-row id="row3">
        <el-col :span="10">
          <el-row id="row3_text">
            <p id="row3_text1">GomROS机器人操作系统</p>
            <p id="row3_text2">可用于多种行业、可用于多种类型机器人开发、可用于各类硬件设备驱动和控制。</p>
            <p id="row3_text3">GomROS可以帮助您快速完成机器人开发项目。</p>
          </el-row>
          <el-row :gutter="5" type="flex" style="margin-left: 2%">
            <el-col>
              <img class="img-box row3_img3" src="static/img/RobotOperateSystem/u800.gif">
            </el-col>
            <el-col>
              <img class="img-box row3_img3" src="static/img/RobotOperateSystem/u801.gif">
            </el-col>
            <el-col>
              <img class="img-box row3_img3" src="static/img/RobotOperateSystem/u802.gif">
            </el-col>
            <el-col>
              <img class="img-box row3_img3" src="static/img/RobotOperateSystem/u803.gif">
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="20" type="flex" style="margin-left: 18%;margin-top: 10%;">
            <el-col>
              <img src="static/img/RobotOperateSystem/u785.png" class="row3_img1">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u786.png" class="row3_img1">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u787.png" class="row3_img1">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u788.png" class="row3_img1">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u789.png" class="row3_img1">
            </el-col>
          </el-row>
          <el-row :gutter="5" type="flex" style="margin-left: 5%">
            <el-col>
              <img src="static/img/RobotOperateSystem/u790.jpg" class="row3_img2">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u791.png" class="row3_img2">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u792.png" class="row3_img2">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u793.png" class="row3_img2">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u794.png" class="row3_img2">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u795.png" class="row3_img2">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u796.jpg" class="row3_img2">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u797.jpg" class="row3_img2">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u798.png" class="row3_img2">
            </el-col>
            <el-col>
              <img src="static/img/RobotOperateSystem/u799.jpg" class="row3_img2">
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第四行  我们的应用案例 -->
      <el-footer class="sub_title">
        <p class="footer">我们的应用案例</p>
      </el-footer>
      <el-row>
        <el-col :span="6" style="margin-left: 80px">
          <p id="row4_text1">GomROS机器人操作系统</p>
          <p id="row4_text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的服务机器人和搬运机器人全部基于GomROS系统搭建。</p>
          <br>
          <p id="row4_text3">参考我们的机器人开发项目</p>
        </el-col>
        <el-col :span="15" class="row4_right">
          <el-row :gutter="2" type="flex" id="row4_right_row1">
            <el-col :span="5" class="row4_sub"><br><br><br>软件系统</el-col>
            <el-row :gutter="10" type="flex" class="row4_border">
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u831.png" class="row4_img1">
                <p id="r4right_r1text1">云平台</p>
              </el-col>
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u822.png" class="row4_img1">
                <p id="r4right_r1text2">集群调度系统</p>
              </el-col>
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u820.png" class="row4_img1">
                <p id="r4right_r1text3">控制软件系统</p>
              </el-col>
            </el-row>
          </el-row>
        </el-col>
        <el-row :gutter="2" type="flex" id="row4_right_row2">
          <el-col :span="10">&nbsp;</el-col>
          <el-col :span="3" class="row4_sub"><br><br><br>产品应用</el-col>
          <el-row :span="10" class="row4_border">
            <img src="static/img/RobotOperateSystem/u809.png" class="row4_img2">
            <p>
              <span class="r4right_r2text1">工业AMR</span>
              <span class="r4right_r2text2">公共服务AVR</span>
              <span class="r4right_r2text3">复合应用AMB</span>
            </p>
          </el-row>
        </el-row>
        <el-row :gutter="2" type="flex" style="height: 240px">
          <el-col :span="5">&nbsp;</el-col>
          <el-col :span="5" class="row4_sub"><br><br><br>硬件驱动/控制
          </el-col>
          <el-row :gutter="12" type="flex" class="row4_border">
            <el-col :span="8">
              <img src="static/img/RobotOperateSystem/u814.png" class="row4_img3">
              <p id="r4right_r3text1">激光雷达</p>
            </el-col>
            <el-col :span="8">
              <img src="static/img/RobotOperateSystem/u815.png" class="row4_img3">
              <p id="r4right_r3text2">3D视觉传感器</p>
            </el-col>
            <el-col :span="8">
              <img src="static/img/RobotOperateSystem/u816.png" class="row4_img3">
              <p id="r4right_r3text3">伺服电机</p>
            </el-col>
            <el-col :span="8">
              <img src="static/img/RobotOperateSystem/u817.png" class="row4_img3">
              <p id="r4right_r3text4">工控机</p>
            </el-col>
            <el-col :span="8">
              <img src="static/img/RobotOperateSystem/u818.png" class="row4_img3">
              <p id="r4right_r3text5">I/O系统</p>
            </el-col>
          </el-row>
        </el-row>
      </el-row>

      <!--      底部     -->
      <el-container id="bottom">
        <el-main id="bottom-main">
          <el-row :gutter="24" id="bottom-row">
            <el-col :span="13" id="bottom-text">
              欢迎咨询GomRos系统相关专家获取解决方案
            </el-col>
            <el-col :span="11" id="bottom-bt">
              <el-button id="bottom-button" @click="$router.push('/about')">
                联系我们
              </el-button>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

.el-row {
  padding: 2% 4%;
  /*animation: flipInX 1s;*/
}

.el-col h4 {
  font-size: 40px;
  color: #0d64e8;
  transition: 0.4s;
}

.el-col p {
  color: #484848;
  font-size: 15px;
  transition: 0.4s;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}

.el-col p:hover {
  color: #14679f;
}

#top-outline {
  width: 100%;
  padding: 0;
  height: 400px;
}

#top-bc {
  background-color: #36353b;
  height: 100%;
}

#company-logo {
  padding-top: 50px;
  padding-left: 30px;
  margin-right: 80px;
}

.cl-img {
  width: 150px;
  height: 150px;
}

#tc-text {
  margin-top: 5px;
  margin-left: 20px;
  text-shadow: 2px 2px 5px white;
}

.font_basic {
  font-size: 18px;
  color: #0D64E8;
  font-weight: bolder;
}

#top_explain {
  font-size: 28px;
  color: white;
  text-shadow: none;
  font-weight: bolder;
  margin-right: 10%;
}

#top-bcr {
  height: 100%;
  background-image: url(../../static/img/MobileRobot/u160.jpg);
  background-size: cover;
}

#top-footer {
  background-color: #0d64e8;
}

#tf-text {
  font-size: 30px;
  font-weight: bolder;
  color: white;
  margin-top: 10px;
  margin-bottom: 0;
  margin-left: 7%;
  height: 100px;
}

.img-box {
  text-align: center;
}

.background_white {
  background-color: white;
}

#ro-text1 {
  font-size: 30px;
  color: #0d64e8;
  font-weight: bolder;
}

#ro-text2 {
  font-size: 25px;
  color: #0d64e8;
  font-weight: bolder;
}

#ro-text3 {
  font-size: 30px;
  color: #0d64e8;
  font-weight: bolder;
}

#row-one {
  align-content: center;
  margin-left: 5%;
}

#ro_img1_text {
  width: 100%;
  text-align: center;
  background-color: #0d64e8;
  color: white;
  font-weight: bolder;
}

#ro_img2_text {
  width: 100%;
  text-align: center;
  background-color: #0d64e8;
  color: white;
  font-weight: bolder;
}

#ro_img3_text {
  width: 100%;
  text-align: center;
  background-color: #0d64e8;
  color: white;
  font-weight: bolder;
}

#ro_img4_text {
  width: 100%;
  text-align: center;
  background-color: #0d64e8;
  color: white;
  font-weight: bolder;
}

#ro_down {
  margin-left: 5%;
  width: 90%
}

.sub_title {
  background-color: #0d64e8;
  height: 80px
}

.footer {
  font-size: 30px;
  font-weight: bolder;
  color: white;
  margin-left: 3%;
  padding-top: 10px;
}

#row-two {
  margin-left: 3%;
  margin-right: 5%;
  width: 40%;
}

#rt_text1 {
  font-size: 30px;
  color: #0d64e8;
  font-weight: bolder;
}

#rt_text2 {
  font-size: 20px;
  color: #0d64e8;
  font-weight: bolder;
}

#rt_text3 {
  font-size: 30px;
  color: #0d64e8;
  font-weight: bolder;
}

.row2_img {
  width: 80%;
  height: 200px;
}

#row3 {
  padding-top: 2px;
}

#row3_text {
  margin-left: 3%;
  width: 100%;
}

#row3_text1 {
  font-size: 30px;
  color: #0d64e8;
  font-weight: bolder;
}

#row3_text2 {
  font-size: 20px;
  color: #0d64e8;
  font-weight: bolder;
}

#row3_text3 {
  font-size: 30px;
  color: #0d64e8;
  font-weight: bolder;
}

.row3_img1 {
  height: 100px;
  width: 100px;
}

.row3_img2 {
  height: 80px;
  width: 80px;
}

.row3_img3 {
  width: 95%;
  height: 100%;
}

#row4_text1 {
  font-size: 30px;
  color: #0d64e8;
  font-weight: bolder;
}

#row4_text2 {
  font-size: 20px;
  color: #0d64e8;
  font-weight: bolder;
}

#row4_text3 {
  font-size: 30px;
  color: #0d64e8;
  font-weight: bolder;
}

.row4_right {
  align-content: center;
  margin-left: 6%;
}

#row4_right_row1 {
  height: 260px;
}

#r4right_r1text1 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  color: #0d64e8;
}

#r4right_r1text2 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  color: #0d64e8;
}

#r4right_r1text3 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  color: #0d64e8;
}

#row4_right_row2 {
  width: 100%;
  height: 260px;
}

.row4_sub {
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: #0d64e8;
}

.row4_border {
  text-align: center;
  border: 2px dashed dodgerblue;
  width: 100%;
}

.row4_img1 {
  width: 95%;
  height: 85%;
}

.r4right_r2text1 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  margin-left: 5%;
  margin-right: 28%;
  padding-bottom: 10px;
  color: #0d64e8;
}

.r4right_r2text2 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  margin-right: 25%;
  color: #0d64e8;
}

.r4right_r2text3 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  color: #0d64e8;

}

.row4_img2 {
  height: 90%;
  width: 90%;
  padding-left: 1%;
  padding-right: 1%;
}

.row4_img3 {
  width: 95%;
  height: 80%;
}

#r4right_r3text1 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  color: #0d64e8;
}

#r4right_r3text2 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  color: #0d64e8;
}

#r4right_r3text3 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  color: #0d64e8;
}

#r4right_r3text4 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  color: #0d64e8;
}

#r4right_r3text5 {
  width: 100%;
  font-size: 15px;
  font-weight: bolder;
  color: #0d64e8;
}

#bottom {
  width: 100%;
}

#bottom-main {
  background: #0d64e8;
  font-size: 30px;
}

#bottom-row {
  padding-top: 0;
  padding-bottom: 0;
}

#bottom-text {
  color: white;
  text-align: left;
  font-size: 35px;
  font-weight: bolder;
  padding-left: 5%;
}

#bottom-bt {
  text-align: right;
  padding-right: 1%;
}

#bottom-button {
  font-size: 30px;
  background-color: #0d64e8;
  border-color: white;
  color: white;
}

</style>
