<template>
  <div id="robot-box">
    <el-container id="top-content" style="height:350px;">
      <el-row style="width: 100%;padding:unset">
        <el-col :span="16" style="background-color: #36353b;height:350px;">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col :span="3" style="padding-top: 50px;padding-left: 30px;margin-right: 100px">
              <img src="static/img/MobileRobot/u3.png" style="width: 150px;height: 150px;">
            </el-col>
            <el-col :span="15" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">GomROS</span>
                <span style="font-size: 20px;color: #0D64E8;font-weight: bolder">工业基础软件</span></p>
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">机器人操作系统</span>
                <span style="font-size: 20px;color: #0D64E8;font-weight: bolder">机器人系统软件</span></p>
              <p style="font-size: 30px;color: white;height:100%;margin-right: 5%;text-shadow: none">
                GomROS（句芒）是一款为机器人、自动化设备等高端智能装备提供的国产原创操作系统</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8"
                style="height:350px;background-image: url(../../static/img/MobileRobot/u160.jpg);background-size: contain">
          &nbsp;
        </el-col>
      </el-row>
    </el-container>

    <div>
      <!--    第一行   -->
      <el-row style="background-color: white">
        <el-col :span="10" style="align-content: center;margin-left: 5%">
          <el-row :gutter="2" type="flex">
            <el-col>
              <img class="img-box" src="static/img/MobileRobot/u21.gif" style="width: 95%;height: 80%">
            </el-col>
            <el-col>
              <img class="img-box" src="static/img/RobotOperateSystem/u702.gif" style="width: 95%;height: 80%">
            </el-col>
          </el-row>
          <el-row :gutter="2" type="flex">
            <el-col>
              <img class="img-box" src="static/img/MobileRobot/u27.gif" style="width: 95%;height: 80%">
            </el-col>
            <el-col>
              <img class="img-box" src="static/img/RobotOperateSystem/u704.gif" style="width: 95%;height: 80%">
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="10" style="margin-left: 80px">
          <h4>{{ '什么是机器人操作系统？' }}</h4>
          <p style="font-size: 30px">GomROS机器人操作系统</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是一组软件库和工具,能够帮助您快速构建机器人应用程序。从控制程序到先进算法的集合，并且借助强大的开发人员工具，让您可以快速搭建机器人项目。</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您需要的软件系统，我们已经给您封装好了，您可以随时调用。</p>
        </el-col>
        <el-row>
          <img src="static/img/RobotOperateSystem/r01.jpg" style="margin-left: 5%;width: 90%">
        </el-row>
      </el-row>

      <!--    第二行   -->
      <el-row style="margin: unset">
        <el-col :span="12" style="margin-left: 8%;margin-right: 8%;width: 45%">
          <h4>{{ '为什么做机器人操作系统？' }}</h4>
          <p style="font-size: 30px">GomROS机器人操作系统</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在经历了2018年以来的&quot;卡脖子&quot;风波之后，以工业软件、基础软件为代表的核心技术，自主研发自主拥有知识产权的需求更为强烈。</p>
          <p style="font-size: 30px">欢迎您加入我们的开发者队伍，我们一起打造国产基础软件系统。</p>
        </el-col>
        <el-col :span="8" style="align-content: center">
          <el-row :gutter="5" type="flex">
            <el-col>
              <img class="img-box" src="static/img/RobotOperateSystem/u779.png" style="width: 80%;height: 200px">
            </el-col>
          </el-row>
          <el-row :gutter="5" type="flex">
            <el-col>
              <img class="img-box" src="static/img/RobotOperateSystem/u780.png" style="width: 80%;height: 200px">
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第三行   -->
      <el-row style="background-color: white">
        <el-col>
          <el-row>
            <el-col :span="10">
              <h4>{{ '机器人操作系统有哪些应用？' }}</h4>
              <p style="font-size: 30px">GomROS机器人操作系统</p>
              <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可用于多种行业、可用于多种类型机器人开发、可用于各类硬件设备驱动和控制。</p>
              <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GomROS可以帮助您快速完成机器人开发项目。</p>
            </el-col>
            <el-col :span="8">
              <el-row :gutter="10" type="flex" style="margin-left: 45%;margin-top: 25%">
                <el-col>
                  <img src="static/img/RobotOperateSystem/u785.png" style="height:80px;width: 80px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u786.png" style="height:80px;width: 80px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u787.png" style="height:80px;width: 80px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u788.png" style="height:80px;width: 80px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u789.png" style="height:80px;width: 80px;">
                </el-col>
              </el-row>
              <el-row :gutter="5" type="flex" style="margin-left: 20%">
                <el-col>
                  <img src="static/img/RobotOperateSystem/u790.jpg" style="height:60px;width: 60px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u791.png" style="height:60px;width: 60px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u792.png" style="height:60px;width: 60px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u793.png" style="height:60px;width: 60px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u794.png" style="height:60px;width: 60px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u795.png" style="height:60px;width: 60px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u796.jpg" style="height:60px;width: 60px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u797.jpg" style="height:60px;width: 60px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u798.png" style="height:60px;width: 60px;">
                </el-col>
                <el-col>
                  <img src="static/img/RobotOperateSystem/u799.jpg" style="height:60px;width: 60px;">
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row :gutter="5" type="flex" style="margin-left: 6%">
            <el-col>
              <img class="img-box" src="static/img/RobotOperateSystem/u800.gif" style="width: 75%;height: 80%">
            </el-col>
            <el-col>
              <img class="img-box" src="static/img/RobotOperateSystem/u801.gif" style="width: 75%;height: 80%">
            </el-col>
            <el-col>
              <img class="img-box" src="static/img/RobotOperateSystem/u802.gif" style="width: 75%;height: 80%">
            </el-col>
            <el-col>
              <img class="img-box" src="static/img/RobotOperateSystem/u803.gif" style="width: 75%;height: 80%">
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第四行   -->
      <el-row>
        <el-col :span="8" style="margin-left: 80px">
          <h4>{{ '我们的应用案例' }}</h4>
          <p style="font-size: 30px">GomROS机器人操作系统</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的服务机器人和搬运机器人全部基于GomROS系统搭建。</p>
          <p style="font-size: 30px">参考我们的机器人开发项目。</p>
        </el-col>
        <el-col :span="14" style="align-content: center">
          <el-row :gutter="2" type="flex" style="height: 300px">
            <el-col :span="5" style="text-align: center;font-size: 25px;font-weight: bolder"><br><br><br>软件系统</el-col>
            <el-row :gutter="10" type="flex" style="text-align: center;border:5px dashed lightblue;width: 100%;">
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u831.png" style="width: 95%;height: 85%">
                <p style="width:100%;font-size:20px;font-weight: bolder">云平台</p>
              </el-col>
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u822.png" style="width: 95%;height: 85%">
                <p style="width:100%;font-size:20px;font-weight: bolder">集群调度系统</p>
              </el-col>
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u820.png" style="width: 95%;height: 85%">
                <p style="width:100%;font-size:20px;font-weight: bolder">控制软件系统</p>
              </el-col>
            </el-row>
          </el-row>
          <el-row :gutter="2" type="flex" style="height: 300px">
            <el-col :span="6" style="text-align: center;font-size: 25px;font-weight: bolder"><br><br><br>产品应用</el-col>
            <el-row :span="10" style="text-align: center;border:5px dashed lightblue;width: 200%">
              <img src="static/img/RobotOperateSystem/u809.png" style="height:90%;width: 100%;">
              <p>
                <span
                    style="width:100%;font-size:20px;font-weight: bolder;margin-left:6%;margin-right: 20%">工业AMR</span>
                <span style="width:100%;font-size:20px;font-weight: bolder;margin-right: 20%">公共服务AVR</span><span
                  style="width:100%;font-size:20px;font-weight: bolder;">复合应用AMB</span>
              </p>
            </el-row>
          </el-row>
          <el-row :gutter="2" type="flex" style="height: 240px">
            <el-col :span="5" style="text-align: center;font-size: 25px;font-weight: bolder"><br><br><br>硬件驱动/控制
            </el-col>
            <el-row :gutter="12" type="flex"
                    style="text-align: center;border:5px dashed lightblue;width: 100%;">
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u814.png" style="width: 95%;height: 60%">
                <p style="width:100%;font-size:20px;font-weight: bolder">激光雷达</p>
              </el-col>
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u815.png" style="width: 95%;height: 60%">
                <p style="width:100%;font-size:20px;font-weight: bolder">3D视觉传感器</p>
              </el-col>
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u816.png" style="width: 95%;height: 60%">
                <p style="width:100%;font-size:20px;font-weight: bolder">伺服电机</p>
              </el-col>
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u817.png" style="width: 95%;height: 60%">
                <p style="width:100%;font-size:20px;font-weight: bolder">工控机</p>
              </el-col>
              <el-col :span="8" style="text-align: center">
                <img src="static/img/RobotOperateSystem/u818.png" style="width: 95%;height: 60%">
                <p style="width:100%;font-size:20px;font-weight: bolder">I/O系统</p>
              </el-col>
            </el-row>
          </el-row>
        </el-col>
      </el-row>

      <el-container id="bottom" style="width: 100%">
        <el-aside width="50px"><br></el-aside>
        <el-main style="background: #0d64e8;font-size: 30px">
          <el-row :gutter="24">
            <el-col :span="11" style="color: white;text-align: left;font-size: 35px;font-weight: bolder">
              欢迎咨询GomRos系统相关专家获取解决方案
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="13" style="text-align: right;">
              <el-button @click="$router.push('/about')"
                         style="font-size: 30px; background-color: #0d64e8;border-color: white;color: white">
                联系我们
              </el-button>
            </el-col>
          </el-row>
        </el-main>
        <el-aside width="50px">
          <br>
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<script>
import axios from "../router/http";

</script>

<style scoped>
#robot-box {
  background-color: #f2f6fa;
}

.img-box img:hover {
  /*animation: pulse 1s;*/
}

.img-box {
  text-align: center;
}

.el-row {
  padding: 2% 4%;
  /*animation: flipInX 1s;*/
}

.el-col h4 {
  font-size: 40px;
  color: #0d64e8;
  transition: 0.4s;
}

.el-col h5:hover {
  color: #e13834;
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

.el-col h5 {
  font-size: 18px;
  color: #808080;
  cursor: pointer;
}

.el-button :hover {
  background-color: white;

}
</style>
