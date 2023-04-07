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
              <p><span style="font-size: 60px"  class="font_basic">GomROS</span>
                <span class="font_basic">工业基础软件</span></p>
              <p><span style="font-size: 60px"  class="font_basic">机器人操作系统</span>
                <span  class="font_basic">机器人系统软件</span></p>
              <p id="top_explain">
                GomROS（句芒）是一款为机器人、自动化设备等高端智能装备提供的国产原创操作系统</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col id="top-bcr" :span="11">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer style="background-color: #0d64e8;">
        <p id="top-footer">什么是机器人操作系统？</p>
      </el-footer>
    </el-container>

    <div>
      <!--    第一行 什么是机器人操作系统  -->
      <el-row class="background_white">
        <el-col :span="10" style="margin-left: 80px">
          <p style="font-size: 30px;color: #0d64e8;font-weight: bolder">GomROS机器人操作系统</p>
          <p style="font-size: 25px;color: #0d64e8;font-weight: bolder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是一组软件库和工具,能够帮助您快速构建机器人应用程序。从控制程序到先进算法的集合，并且借助强大的开发人员工具，让您可以快速搭建机器人项目。</p>
          <p style="font-size: 30px;color: #0d64e8;font-weight: bolder">您需要的软件系统，我们已经给您封装好了，您可以随时调用。</p>
        </el-col>
        <el-col id="row-one" :span="10">
          <el-row :gutter="10" type="flex">
            <el-col
                style="width:100%;height:200px;background-image: url(static/img/MobileRobot/u21.gif);background-size: cover;margin-right: 2%">
              <el-col :span="9">
                &nbsp;
              </el-col>
              <el-col :span="8">
                <p style="width: 100%;text-align: center;background-color: #0d64e8;color: white;font-weight: bolder">
                  视觉识别算法</p>
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
                <p style="width: 100%;text-align: center;background-color: #0d64e8;color: white;font-weight: bolder">
                  路径规划算法</p>
              </el-col>
              <el-col :span="7">
                &nbsp;
              </el-col>
            </el-col>
          </el-row>
          <el-row :gutter="2" type="flex">
            <el-col
                style="width:100%;height:200px;background-image: url(static/img/MobileRobot/u27.gif);background-size: cover;margin-right: 2%">
              <el-col :span="8">
                &nbsp;
              </el-col>
              <el-col :span="8">
                <p style="width: 100%;text-align: center;background-color: #0d64e8;color: white;font-weight: bolder">
                  激光导航算法</p>
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
                <p style="width: 100%;text-align: center;background-color: #0d64e8;color: white;font-weight: bolder">
                  视觉避障算法</p>
              </el-col>
              <el-col :span="7">
                &nbsp;
              </el-col>
            </el-col>
            <!--            <el-col>-->
            <!--              <img class="img-box ro_img" src="static/img/MobileRobot/u27.gif">-->
            <!--            </el-col>-->
            <!--            <el-col>-->
            <!--              <img class="img-box ro_img" src="static/img/RobotOperateSystem/u704.gif">-->
            <!--            </el-col>-->
          </el-row>
        </el-col>

        <el-row>
          <img id="ro_down" src="static/img/RobotOperateSystem/r01.jpg">
        </el-row>
      </el-row>

      <!--    第二行 为什么做机器人操作系统  -->
      <el-footer style="background-color: #0d64e8;height: 80px">
        <p class="footer">为什么做机器人操作系统？</p>
      </el-footer>
      <el-row>
        <el-col id="row-two" :span="8">
          <p style="font-size: 30px;color: #0d64e8;font-weight: bolder">GomROS机器人操作系统</p>
          <p style="font-size: 20px;color: #0d64e8;font-weight: bolder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在经历了2018年以来的&quot;卡脖子&quot;风波之后，以工业软件、基础软件为代表的核心技术，自主研发自主拥有知识产权的需求更为强烈。</p>
          <p style="font-size: 30px;color: #0d64e8;font-weight: bolder">欢迎您加入我们的开发者队伍，我们一起打造国产基础软件系统。</p>
        </el-col>
        <el-col :span="6" style="margin-top: 2%">
          <img class="img-box row2_img" src="static/img/RobotOperateSystem/u779.png">
        </el-col>
        <el-col :span="6" style="margin-top: 2%">
          <img class="img-box row2_img" src="static/img/RobotOperateSystem/u780.png">
        </el-col>
      </el-row>

      <!--    第三行 机器人操作系统有哪些应用  -->
      <el-footer style="background-color: #0d64e8;height: 80px">
        <p class="footer">机器人操作系统有哪些应用？</p>
      </el-footer>
      <el-row style="padding-top: 2px">
        <el-col :span="10">
          <el-row style="margin-left: 3%;width: 100%">
            <p style="font-size: 30px;color: #0d64e8;font-weight: bolder">GomROS机器人操作系统</p>
            <p style="font-size: 20px;color: #0d64e8;font-weight: bolder">可用于多种行业、可用于多种类型机器人开发、可用于各类硬件设备驱动和控制。</p>
            <p style="font-size: 30px;color: #0d64e8;font-weight: bolder">GomROS可以帮助您快速完成机器人开发项目。</p>
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
      <el-footer style="background-color: #0d64e8;height: 80px">
        <p class="footer">我们的应用案例</p>
      </el-footer>
      <el-row>
        <el-col :span="6" style="margin-left: 80px">
          <p style="font-size: 30px;color: #0d64e8;font-weight: bolder">GomROS机器人操作系统</p>
          <p style="font-size: 20px;color: #0d64e8;font-weight: bolder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的服务机器人和搬运机器人全部基于GomROS系统搭建。</p>
          <br>
          <p style="font-size: 30px;color: #0d64e8;font-weight: bolder">参考我们的机器人开发项目</p>
        </el-col>
        <el-col :span="15" style="align-content: center;margin-left: 6%">
          <el-row :gutter="2" type="flex" style="height: 260px">
            <el-col :span="5" class="row4_sub"><br><br><br>软件系统</el-col>
            <el-row :gutter="10" type="flex" class="row4_border">
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u831.png" class="row4_img1">
                <p style="width: 100%;font-size: 15px;font-weight: bolder;color: #0d64e8;">云平台</p>
              </el-col>
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u822.png" class="row4_img1">
                <p style="width: 100%;font-size: 15px;font-weight: bolder;color: #0d64e8;">集群调度系统</p>
              </el-col>
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u820.png" class="row4_img1">
                <p style="width: 100%;font-size: 15px;font-weight: bolder;color: #0d64e8;">控制软件系统</p>
              </el-col>
            </el-row>
          </el-row>
        </el-col>
        <el-row :gutter="2" type="flex" style="width:100%;height: 260px;">
          <el-col :span="10">&nbsp;</el-col>
          <el-col :span="3" class="row4_sub"><br><br><br>产品应用</el-col>
          <el-row :span="10" class="row4_border">
            <img src="static/img/RobotOperateSystem/u809.png" class="row4_img2">
            <p>
              <span class="row4_p01">工业AMR</span>
              <span class="row4_p02">公共服务AVR</span>
              <span class="row4_p03">复合应用AMB</span>
            </p>
          </el-row>
        </el-row>
        <el-row :gutter="2" type="flex" style="height: 240px">
          <el-col :span="5">&nbsp;</el-col>
          <el-col :span="5" class="row4_sub"><br><br><br>硬件驱动/控制
          </el-col>
          <el-row :gutter="12" type="flex" class="row4_border">
            <el-col :span="8" style="text-align: center">
              <img src="static/img/RobotOperateSystem/u814.png" class="row4_img3">
              <p style="width: 100%;font-size: 15px;font-weight: bolder;color: #0d64e8;">激光雷达</p>
            </el-col>
            <el-col :span="8" style="text-align: center">
              <img src="static/img/RobotOperateSystem/u815.png" class="row4_img3">
              <p style="width: 100%;font-size: 15px;font-weight: bolder;color: #0d64e8;">3D视觉传感器</p>
            </el-col>
            <el-col :span="8" style="text-align: center">
              <img src="static/img/RobotOperateSystem/u816.png" class="row4_img3">
              <p style="width: 100%;font-size: 15px;font-weight: bolder;color: #0d64e8;">伺服电机</p>
            </el-col>
            <el-col :span="8" style="text-align: center">
              <img src="static/img/RobotOperateSystem/u817.png" class="row4_img3">
              <p style="width: 100%;font-size: 15px;font-weight: bolder;color: #0d64e8;">工控机</p>
            </el-col>
            <el-col :span="8" style="text-align: center">
              <img src="static/img/RobotOperateSystem/u818.png" class="row4_img3">
              <p style="width: 100%;font-size: 15px;font-weight: bolder;color: #0d64e8;">I/O系统</p>
            </el-col>
          </el-row>
        </el-row>
      </el-row>

      <!--      底部     -->
      <el-container id="bottom">
        <el-main id="bottom-main">
          <el-row :gutter="24" style="padding-top: 0;padding-bottom: 0">
            <el-col :span="13" id="bottom-text">
              欢迎咨询GomRos系统相关专家获取解决方案
            </el-col>
            <el-col :span="11" style="text-align: right;padding-right: 1%">
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
import '../../static/css/robotOperateSystem.css'
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

</style>
