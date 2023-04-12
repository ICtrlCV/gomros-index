<template>
  <div id="data-platform">
    <el-container id="top-content">
      <el-row style="width: 100%;height: 400px">
        <el-col :span="15" style="background-color: #00192f;height: 100%">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col :span="3" style="padding-top: 50px;padding-left: 30px;margin-right: 80px">
              <img src="static/img/MobileRobot/u3.png" style="width: 150px;height: 150px;">
            </el-col>
            <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">移动机器人</span></p>
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">机器人数据平台</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">移动机器人基础服务系统</span></p>
              <p style="font-size: 28px;color: white;text-shadow: none;font-weight: bolder;margin-right: 10%">数据成为驱动经济增长的核心生产要素。
                大数据和云计算等技术的融合，推动了物联网的迅速发展，实现了人与人、人与物、物与物的互联互通，导致数据量呈现爆发式增长。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="9"
                style="height:100%;background-image: url(../../static/img/dataPlatform/u1629.jpg);background-size: cover">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer style="background-color: #0d64e8">
        <p style="margin-top: 10px;font-size: 32px;font-weight: bolder;color: white;margin-top: 10px;margin-bottom:0;margin-left: 5%">
          移动机器人数据安全</p>
      </el-footer>
    </el-container>

    <div style="margin-top: 50px;background-color: #f2f6fa">
      <!--    第一行 移动机器人数据安全  -->
      <el-row :gutter="20" type="flex" style="background-color: white;margin-top: 10px">
        <el-col :span="12" style="width:45%;margin-left: 6%;margin-right: 8%">
          <p style="font-size: 32px;font-weight: bolder;color: #0d64e8;margin-top: 0">移动机器人数据安全</p>
          <p style="font-size: 26px;font-weight: bolder;color: #0d64e8;margin-left: 2%">
            机器人配备了多种多样的传感器，在工作过程中可以搜集到很多的信息，包括视觉数据，语音数据，位置数据等，这些重要的隐私数据都需要得到保护。</p>
          <p style="font-size: 26px;font-weight: bolder;color: #0d64e8;margin-left: 2%">
            机器人系统需要完整的数据安全保障机制，既要求保证端到端的安全传输，也要保障在服务器端的安全存储。</p>
          <p style="font-size: 32px;font-weight: bolder;color: #0d64e8">保护用户的隐私数据的安全变得尤其重要。</p>
        </el-col>
        <el-col :span="8" style="align-content: center">
          <img class="img-box" src="static/img/dataPlatform/u1644.png" style="width: 90%;height: 85%;margin-top: 4%">
        </el-col>
      </el-row>

      <!--    第二行 移动机器人数据平台架构  -->
      <el-row :gutter="20" type="flex">
        <el-col style="width:100%;margin-left: 6%">
          <el-row>
            <p style="font-size: 32px;font-weight: bolder;color: #0d64e8">移动机器人数据平台架构</p>
          </el-row>
          <el-row>
            <img class="img-box" src="static/img/dataPlatform/u1645.png" style="width: 85%;height: 80%;margin-left: 5%">
          </el-row>
        </el-col>
      </el-row>

      <!--    第三行  移动机器人数据应用 -->
      <el-row style="background-color: white;margin-top: 1%">
        <el-col style="width:100%;margin-left: 6%;margin-bottom: 2%">
          <el-row>
            <p style="font-size: 32px;font-weight: bolder;color: #0d64e8">移动机器人数据应用</p>
          </el-row>
          <el-row :gutter="40" type="flex" style="margin-left: 4%">
            <el-col :span="4">
              <p style="font-size: 18px;font-weight: bolder">调度可视化展示</p>
              <img class="img-box" src="static/img/dataPlatform/u1655.png" style="width: 240px;height: 200px">
            </el-col>
            <el-col :span="4">
              <p style="font-size: 18px;font-weight: bolder">数据可视化展示</p>
              <img class="img-box" src="static/img/dataPlatform/u1647.png" style="width: 240px;height: 200px">
            </el-col>
            <el-col :span="4">
              <p style="font-size: 18px;font-weight: bolder">工厂可视化展示</p>
              <img class="img-box" src="static/img/dataPlatform/u1649.png" style="width: 240px;height: 200px">
            </el-col>
            <el-col :span="4">
              <p style="font-size: 18px;font-weight: bolder">虚拟仿真展示</p>
              <img class="img-box" src="static/img/dataPlatform/u1651.png" style="width: 240px;height: 200px">
            </el-col>
            <el-col :span="4">
              <p style="font-size: 18px;font-weight: bolder">高级排产展示</p>
              <img class="img-box" src="static/img/dataPlatform/u1653.png" style="width: 240px;height: 200px">
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第四行  数据采集及数据迭代 -->
      <el-row :gutter="20" type="flex">
        <el-col style="width:100%;margin-left: 6%;margin-bottom: 2%">
          <el-row>
            <p style="font-size: 32px;font-weight: bolder;color: #0d64e8">数据采集及数据迭代</p>
          </el-row>
          <el-row>
            <img class="img-box" src="static/img/dataPlatform/u1657.png"
                 style="width: 60%;height: 45%;margin-left: 15%">
          </el-row>
        </el-col>
      </el-row>s

      <!--      底部     -->
      <el-container id="bottom">
        <el-main style="background: #0d64e8;font-size: 30px;">
          <el-row :gutter="24" style="padding-top: 0;padding-bottom: 0">
            <el-col :span="13" style="color: white;text-align: left;font-size: 35px;font-weight: bolder;padding-left: 5%">
              欢迎咨询移动机器人数据平台相关产品
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
  name: "DataPlatform"
}
</script>

<style scoped>

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