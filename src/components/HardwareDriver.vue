<template>
  <div id="hardware-driver">
    <el-container id="top-content">
      <el-row style="width: 100%;height:400px;">
        <el-col :span="15" style="background-color: #222325;height: 100%">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col :span="3" style="margin-right: 80px">
              <img src="static/img/MobileRobot/logo1.svg" style="width: 240px;height: 240px;">
            </el-col>
            <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">移动机器人</span></p>
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">硬件驱动及控制系统</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">移动机器人基础服务系统</span></p>
              <p style="font-size: 28px;color: white;text-shadow: none;font-weight: bolder">
                一个机器人最主要的控制量就是控制机器人的移动，无论是自身的移动还是手臂等关节的移动，所以机器人驱动器中最根本的问题就是控制电机。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="9"
                style="height:100%;background-image: url(../../static/img/hardwareDriver/u1415.jpg);background-size: cover">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer style="background-color: #0d64e8">
        <p style="font-size: 32px;font-weight: bolder;color: white;margin-top: 10px;margin-bottom:0;margin-left: 5%">
          移动机器人硬件驱动及控制系统</p>
      </el-footer>
    </el-container>

    <div>
      <!--    第一行  机器人硬件驱动及控制系统 -->
      <el-row :gutter="20" type="flex">
        <el-col :span="10" style="margin-top:1%;margin-left: 6%;margin-right: 8%">
          <p style="font-size: 32px;font-weight: bolder;color: #0d64e8">机器人硬件驱动及控制系统</p>
          <p style="font-size: 26px;font-weight: bolder;color: #0d64e8;margin-left: 2%">
            由于工业机器人关节的执行器为电机，所以获得电机的良好控制效果是非常重要的，要想获得优良的电机控制性能，
            就需要高性能的交流伺服驱动系统，因此研制高性能的交流伺服驱动系统是工业机器人的关键技术之一。
          </p>
          <p style="font-size: 32px;font-weight: bolder;color: #0d64e8">我们必须自力更生，掌握高性能移动机器人的关键技术，并在原来的基础上有所创新。</p>
        </el-col>
        <el-col :span="8" style="align-content: center;margin-top: 5%">
          <img class="img-box" src="static/img/hardwareDriver/u1431.jpg" style="width: 85%;height: 70%;">
        </el-col>
      </el-row>

      <!--    第二行  机器人控制系统 -->
      <el-row style="background-color: white">
        <el-col style="width:100%;margin-left: 6%;margin-bottom:2%">
          <el-row>
            <p style="font-size: 32px;font-weight: bolder;color: #0d64e8">机器人控制系统</p>
          </el-row>
          <el-row style="text-align: left;height: 100%">
            <el-col :span="8" style="margin-left: 1%;margin-right: 2%">
              <p style="font-size: 18px;color: #0d64e8">
                机器人控制系统一般分为四部分组成，输入、输出、控制元件和算法
              </p>
              <p style="font-size: 18px;color: #0d64e8">
                输入：激光雷达、毫米波雷达、红外、超声波雷达、摄像头、陀螺仪
              </p>
              <p style="font-size: 18px;color: #0d64e8">
                输出：伺服电机、进步电机、舵机
              </p>
              <p style="font-size: 18px;color: #0d64e8">
                控制元件：工控机、模拟量控制、I/O量控制
              </p>
              <p style="font-size: 18px;color: #0d64e8">
                算法：速度控制、位置控制、绕障控制、轨迹校正等算法
              </p>
            </el-col>
            <el-col :span="13">
              <el-row>
                <el-col :span="2">
                  <p style="font-weight: bolder;font-size: 22px">输出：</p>
                </el-col>
                <el-col :span="15" style="width: 90%;border:2px dashed dodgerblue;padding: 10px">
                  <el-row :gutter="100" type="flex">
                    <el-col :span="3">
                      <img src="static/img/RobotOperateSystem/u816.png" style="width: 100px;height: 70px;">
                    </el-col>
                    <el-col :span="3">
                      <img src="static/img/hardwareDriver/u1453.png" style="width: 100px;height: 70px;">
                    </el-col>
                    <el-col :span="3">
                      <img src="static/img/hardwareDriver/u1454.png" style="width: 100px;height: 70px;">
                    </el-col>
                    <el-col :span="3">
                      <img src="static/img/hardwareDriver/u1455.png" style="width: 100px;height: 70px;">
                    </el-col>
                    <el-col :span="3">
                      <img src="static/img/hardwareDriver/u1456.png" style="width: 100px;height: 70px;">
                    </el-col>
                    <el-col :span="2">
                      <img src="static/img/hardwareDriver/u142403.png" style="width: 100px;height: 50px;">
                    </el-col>
                    <el-col :span="3">
                      <img src="static/img/hardwareDriver/u1466.png" style="width: 100px;height: 70px;">
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="4">
                  <img src="static/img/hardwareDriver/u142401.png" style="width: 30px;height: 20px;">
                </el-col>
                <el-col :span="12">&nbsp;</el-col>
              </el-row>
              <el-row>
                <el-col :span="2">
                  <p style="font-weight: bolder;font-size: 22px">控制：</p>
                </el-col>
                <el-col :span="5" style="width: 15%;border:2px dashed dodgerblue;padding: 10px">
                  <img src="static/img/RobotOperateSystem/u817.png" style="width: 110px;height: 70px;">
                </el-col>
                <el-col :span="1.5" style="margin-left: 5px">
                  <p>
                    <span><img src="static/img/hardwareDriver/u142403.png" style="width: 50px;height: 15px;"></span><br>
                    <span style="font-weight: bolder;font-size: 20px">算法：</span><br>
                    <span><img src="static/img/hardwareDriver/u142402.png" style="width: 50px;height: 15px;"></span>
                  </p>
                </el-col>
                <el-col :span="15" style="width: 68%;border:2px dashed dodgerblue;padding: 10px">
                  <el-row :gutter="50" type="flex">
                    <el-col :span="4">
                      <img src="static/img/hardwareDriver/u1447.png" style="width: 100px;height: 70px;">
                    </el-col>
                    <el-col :span="4">
                      <img src="static/img/hardwareDriver/u1448.png" style="width: 100px;height: 70px;">
                    </el-col>
                    <el-col :span="4">
                      <img src="static/img/hardwareDriver/u1449.png" style="width: 100px;height: 70px;">
                    </el-col>
                    <el-col :span="4">
                      <img src="static/img/hardwareDriver/u1450.png" style="width: 100px;height: 70px;">
                    </el-col>
                    <el-col :span="2">
                      <img src="static/img/hardwareDriver/u142403.png" style="width: 50px;height: 25px;">
                      <img src="static/img/hardwareDriver/u142402.png" style="width: 50px;height: 25px;">
                    </el-col>
                    <el-col :span="4">
                      <img src="static/img/hardwareDriver/u142404.png" style="width: 100px;height:70px;">
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="4">
                  <img src="static/img/hardwareDriver/u142401.png" style="width: 30px;height: 20px;">
                </el-col>
                <el-col :span="12">&nbsp;</el-col>
              </el-row>
              <el-row>
                <el-col :span="2">
                  <p style="font-weight: bolder;font-size: 22px">输入：</p>
                </el-col>
                <el-col :span="15" style="width: 90%;border:2px dashed dodgerblue;padding: 10px">
                  <el-row :gutter="50" type="flex">
                    <el-col :span="4">
                      <img src="static/img/MobileRobot/u24.png" style="width: 120px;height: 70px;">
                    </el-col>
                    <el-col :span="4">
                      <img src="static/img/MobileRobot/u26.png" style="width: 120px;height: 70px;">
                    </el-col>
                    <el-col :span="4">
                      <img src="static/img/hardwareDriver/u1440.png" style="width: 120px;height: 70px;">
                    </el-col>
                    <el-col :span="4">
                      <img src="static/img/hardwareDriver/u1441.png" style="width: 120px;height: 70px;">
                    </el-col>
                    <el-col :span="4">
                      <img src="static/img/hardwareDriver/u1442.png" style="width: 120px;height: 70px;">
                    </el-col>
                    <el-col :span="4">
                      <img src="static/img/hardwareDriver/u1446.png" style="width: 80px;height: 50px;">
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第三行 机器人硬件驱动系统  -->
      <el-row>
        <el-col style="width:100%;margin-left: 6%;margin-bottom:2%">
          <el-row>
            <p style="font-size: 32px;font-weight: bolder;color: #0d64e8">机器人硬件驱动系统</p>
          </el-row>
          <el-row style="text-align: left;height: 100%">
            <el-col :span="8" style="width: 30%;margin-left: 1%;margin-right: 8%">
              <p style="font-size: 18px;color: #0d64e8">
                机器人控制系统可以驱动大部分厂家的设备，测距设备、2D测距设备、3D传感器、音频/语音识别设备、摄像机、扭矩/触摸传感器、位姿传感器、电源、速度、无线射频传感器、和 IO 接口等设备
              </p>
            </el-col>
            <el-col :span="13">
              <el-row style="margin-left: 3%">
                <el-col :span="3" style="width: 28%;text-align: center">
                  <el-row style="background-color: #0d64e8">
                    <p style="text-align: center;font-weight: bolder;color: white;font-size: 32px;margin: 10px">视觉设备</p>
                  </el-row>
                  <el-row style="border:2px dashed dodgerblue">
                    <p style="text-align: center;font-weight: bolder;font-size: 18px">单目相机</p>
                    <p style="text-align: center;font-weight: bolder;font-size: 18px">双目相机</p>
                    <p style="text-align: center;font-weight: bolder;font-size: 18px">深度相机</p>
                  </el-row>
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="3" style="width: 28%;text-align: center">
                  <el-row style="background-color: #0d64e8">
                    <p style="text-align: center;font-weight: bolder;color: white;font-size: 32px;margin: 10px">测距设备</p>
                  </el-row>
                  <el-row style="border:2px dashed dodgerblue">
                    <p style="text-align: center;font-weight: bolder;font-size: 18px">超声波雷达</p>
                    <p style="text-align: center;font-weight: bolder;font-size: 18px">激光雷达</p>
                    <p style="text-align: center;font-weight: bolder;font-size: 18px">毫米波雷达</p>
                  </el-row>
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="3" style="width: 28%;text-align: center">
                  <el-row style="background-color: #0d64e8">
                    <p style="text-align: center;font-weight: bolder;color: white;font-size: 32px;margin: 10px">驱动设备</p>
                  </el-row>
                  <el-row style="border:2px dashed dodgerblue">
                    <p style="text-align: center;font-weight: bolder;font-size: 18px">伺服电机</p>
                    <p style="text-align: center;font-weight: bolder;font-size: 18px">进步电机</p>
                    <p style="text-align: center;font-weight: bolder;font-size: 18px">直流无刷电机</p>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第四行 硬件设备合作开发  -->
      <el-row style="background-color: white">
        <el-col style="width:100%;margin-left: 6%;margin-bottom:2%">
          <el-row>
            <p style="font-size: 32px;font-weight: bolder;color: #0d64e8">硬件设备合作开发</p>
          </el-row>
          <el-row style="text-align: left;height: 100%">
            <el-col :span="8" style="width: 30%;margin-left: 1%;margin-right: 8%">
              <p style="font-size: 18px;color: #0d64e8">硬核研发团队，工程师团队成员均来自国内外顶尖高校和科研机构，掌握机器人领域的专业知识和核心技术。
                致力于为用户带来体验卓越、灵敏智能又具有超高性价比的移动机器人产品。
              </p>
            </el-col>
            <el-col :span="13" style="text-align: center;margin-left: 2.5%">
              <el-row :gutter="40" type="flex">
                <el-col :span="6" style="padding-left: 0;padding-right: 0">
                  <img src="static/img/hardwareDriver/u1493.png" style="width: 105%;height: 100%;">
                </el-col>
                <el-col :span="6" style="margin-left: 5%;padding-left: 0;padding-right: 0">
                  <img src="static/img/hardwareDriver/u1492.png" style="width: 105%;height: 100%;">
                </el-col>
                <el-col :span="6" style="margin-left: 5%;padding-left: 0;padding-right: 0">
                  <img src="static/img/hardwareDriver/u1491.png" style="width: 105%;height: 100%;">
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第五行 硬件设备支持  -->
      <el-row :gutter="20" type="flex" style="height: 400px">
        <el-col :span="8" style="margin-top:2%;margin-left: 6%;margin-right: 2%">
          <p style="font-size: 32px;font-weight: bolder;color: #0d64e8">硬件设备支持</p>
          <p style="font-size: 18px;color: #0d64e8;margin-left: 2%">机器人控制系统可适配各大品牌配件</p>
        </el-col>
        <el-col :span="13" style="align-content: center;margin-top: 4%;margin-left: 5%">
          <img class="img-box" src="static/img/hardwareDriver/u1498.png" style="width: 91%;height: 95%;">
        </el-col>
      </el-row>

      <!--      底部     -->
      <el-container style="width: 100%">
        <el-main style="background: #0d64e8;font-size: 30px;">
          <el-row :gutter="24" style="padding-top: 0;padding-bottom: 0">
            <el-col :span="13"
                    style="color: white;text-align: left;font-size: 35px;font-weight: bolder;padding-left: 5%">
              欢迎咨询硬件驱动及控制系统相关产品
            </el-col>
            <el-col :span="11" style="text-align: right;padding-right: 3%">
              <el-button @click="$router.push('/about')"
                         style="font-size: 30px;background-color: #0d64e8;border-color: white;color: white;">
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
export default {
  name: "HardwareDriver"
}
</script>

<style scoped>
#hardware-driver {
  background-color: #f2f6fa;
}

.img-box img:hover {
  animation: pulse 1s;
}

.img-box {
  text-align: center;
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