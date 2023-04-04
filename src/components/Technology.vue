<template>
  <div id="Supplier" style="color: #0D64E8">
    <el-container id="top-img"
                  style="background-image: url(static/img/Technology/u2.jpg);
                  background-position: top;
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
                <!--                <br>工业基础软件-->
              </el-col>
            </el-row>
            <el-row :gutter="10" type="flex">
              <el-col :span="6" style="font-size:60px">
                移动机器人
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
              移动机器人，是一个集环境感知、动态决策与规划、行为控制与执行等<br>
              多功能于一体的综合系统。它集中了传感器技术、信息处理、电子工<br>
              程、计算机工程、自动化控制工程以及人工智能等多学科的研究成果<br>
              ，代表机电一体化的最高成就，是目前科学技术发展最活跃的领域之一
            </el-row>
          </el-main>
        </el-container>
      </el-main>
      <el-footer id="img-footer" style="background: #0d64e8;color: white;font-size: 30px;height: 100%">
        <el-row :gutter="24" style="text-align: center;font-size: 32px">
          <el-col :span="8" style="color: #FFFFFF">
            <div>
              <el-row>
                <el-button @click="changeCarousel(0)"
                           style="font-size: 32px;background-color: #0d64e8;color: white;border-color: #0d64e8 ">
                  车载系统
                </el-button>
                <br>
              </el-row>
              <el-row style="font-size: 18px">
                环境感知系统 数据处理系统 控制系统 输入输出系统
              </el-row>
            </div>
          </el-col>
          <el-col :span="8" style="color: #0d64e8;background-color: white">
            <div>
              <el-row>
                <el-button @click="changeCarousel(1)"
                           style="font-size: 32px;background-color: white;color: #0d64e8;border-color: white ">
                  云平台系统
                </el-button>

              </el-row>
              <el-row style="font-size: 18px">
                智能管控 数据分析 数据处理 互联互通
              </el-row>
            </div>
          </el-col>
          <el-col :span="8" style="color: #FFFFFF">
            <div>
              <el-row>
                <el-button @click="changeCarousel(2)"
                           style="font-size: 32px;background-color: #0d64e8;color: white;border-color: #0d64e8 ">
                  场景服务系统
                </el-button>

              </el-row>
              <el-row style="font-size: 18px">
                调度系统 任务处理系统 手机APP
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
    <el-carousel :interval="5000" arrow="always" :autoplay="true" style="height: 800px" ref="banner">
      <!--      <el-carousel :interval="5000" arrow="always" style="height: 800px;filter: brightness(0.6)" >-->
      <el-carousel-item v-for="item in 3" :key="item" style="height: 800px">
        <div v-if="item===1" style="text-align: center;font-weight: bold">
          <el-row :gutter="24">
            <el-col :span="8">
              <div style="background-image: url(static/img/Technology/u17.png);
                  background-position: center;
                  background-size: cover;
                  width: 640px;
                  height: 400px;
                  text-align: left;
                  "
              >
                <el-row><br></el-row>
                <el-row style="color: red;font-size: 32px">GomRos车载系统</el-row>
                <el-row style="color: red;font-size: 18px">GomRos 车载系统可适配各大品牌电子元器件</el-row>
              </div>
              <!--                            <img src="../../static/img/Technology/u17.png"-->
              <!--                                 style="width: 640px;height: 400px">-->
            </el-col>
            <el-col :span="8">
              <img src="../../static/img/Technology/u20.gif"
                   style="width: 640px;height: 400px">
            </el-col>
            <el-col :span="8">
              <div>
                <el-row :gutter="24">
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u22.png"
                         style="width: 320px;height: 200px">
                  </el-col>
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u23.png"
                         style="width: 320px;height: 200px">
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u21.png"
                         style="width: 320px;height: 200px">
                  </el-col>
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u24.png"
                         style="width: 320px;height: 200px">
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">
              <div style="background-image: url(static/img/Technology/u18.jpg);
                  background-position: center;
                  background-size: cover;
                  width: 640px;
                  height: 400px;
                  text-align: left;"
              >
                <el-row><br></el-row>
                <el-row style="color: white;font-size: 32px">GomRosss数据处理系统</el-row>
                <el-row style="color: white;font-size: 18px">GomRos 自动数据处理，自动输出结果</el-row>
              </div>
              <!--              <img src="../../static/img/Technology/u18.jpg"-->
              <!--                   style="width: 640px;height: 400px">-->
            </el-col>
            <el-col :span="8">
              <img src="../../static/img/Technology/u25.gif"
                   style="width: 640px;height: 400px">
            </el-col>
            <el-col :span="8">
              <div>
                <el-row :gutter="24">
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u26.png"
                         style="width: 320px;height: 200px">
                  </el-col>
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u31.jpeg"
                         style="width: 320px;height: 200px">
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u30.png"
                         style="width: 320px;height: 200px">
                  </el-col>
                  <el-col :span="12">
                    <img src="../../static/img/Technology/u32.png"
                         style="width: 320px;height: 200px">
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>


        <div v-if="item===2" style="font-size: 18px;font-weight: bold">
          <div>
            <el-row :gutter="24">
              <el-col :span="8">
                <div style="border-bottom: 4px dashed;border-right: 4px dashed">
                  <el-row :gutter="24">
                    <el-col :span="10">
                      <div>
                        <el-row style="font-size: 32px"> 云端远程控制</el-row>
                        <el-row> GomROS远程管理控制</el-row>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <br>
                    </el-col>
                    <el-col :span="8">
                      <img src="static/img/Technology/u70.svg"
                           style="width: 160px;height: 120px">
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <img src="static/img/Technology/u73.png"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="8">
                      <img src="static/img/Technology/u72.jpg"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="8" style="text-align: center">
                      远程控制
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="16">
                      <br>机器人云端远程控制管理
                    </el-col>
                    <el-col :span="8">
                      <br>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="8">
                <div style="border-right: 4px dashed;border-bottom: 4px dashed">
                  <el-row :gutter="24">
                    <el-col :span="10">
                      <div>
                        <el-row style="font-size: 32px">
                          云端地图管理
                        </el-row>
                        <el-row>
                          GomROS 云端地图构建 云端定位计算
                        </el-row>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <br>
                    </el-col>
                    <el-col :span="8">
                      <img src="static/img/Technology/u84.svg"
                           style="width: 160px;height: 120px">
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <img src="static/img/Technology/u31.jpeg"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="8">
                      <img src="static/img/Technology/u90.jpg"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="8" style="text-align: center">
                      地图构建
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="16">
                      <br>机器人云端云端地图管理 云端定位管理
                    </el-col>
                    <el-col :span="8">
                      <br>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="8">
                <div style="border-bottom: 4px dashed;">
                  <el-row :gutter="24">
                    <el-col :span="10">
                      <div>
                        <el-row style="font-size: 32px">
                          云端任务管理
                        </el-row>
                        <el-row>
                          GomRos 云端任务管理 云端线路规划
                        </el-row>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <br>
                    </el-col>
                    <el-col :span="8">
                      <img src="static/img/Technology/u98.svg"
                           style="width: 160px;height: 120px">
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <img src="static/img/Technology/u103.png"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="8">
                      <img src="static/img/Technology/u104.jpg"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="8" style="text-align: center">
                      任务管理
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
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="8">
                <div style="border-right: 4px dashed">
                  <el-row :gutter="24">
                    <el-col :span="10">
                      <div>
                        <el-row style="font-size: 32px">
                          云端数据分析
                        </el-row>
                        <el-row>
                          GomRos 云端数据分析 数据可视化展示
                        </el-row>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <br>
                    </el-col>
                    <el-col :span="8">
                      <img src="static/img/Technology/u75.svg"
                           style="width: 160px;height: 120px">
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="10">
                      <img src="static/img/Technology/u78.png"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="6">
                      <img src="static/img/Technology/u79.png"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="8" style="text-align: center">
                      数据分析
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
                </div>
              </el-col>
              <el-col :span="8">
                <div style="border-right: 4px dashed">
                  <el-row :gutter="24">
                    <el-col :span="10">
                      <div>
                        <el-row style="font-size: 32px">
                          云端识别交互
                        </el-row>
                        <el-row>
                          GomRos 云端视觉识别 云端语音识别
                        </el-row>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <br>
                    </el-col>
                    <el-col :span="8">
                      <img src="static/img/Technology/u91.svg"
                           style="width: 160px;height: 120px">
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="10">
                      <img src="static/img/Technology/u30.png"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="6">
                      <img src="static/img/Technology/u97.png"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="8" style="text-align: center">
                      交互模型部署
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="16">
                      <br>机器人视觉识别 语音识别
                    </el-col>
                    <el-col :span="8">
                      <br>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="8">
                <div>
                  <el-row :gutter="24">
                    <el-col :span="10">
                      <div>
                        <el-row style="font-size: 32px">
                          云端更新推送
                        </el-row>
                        <el-row>
                          GomRos 广告内容推送 云端系统更新
                        </el-row>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <br>
                    </el-col>
                    <el-col :span="8">
                      <img src="static/img/Technology/u110.svg"
                           style="width: 160px;height: 120px">
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <img src="static/img/Technology/u112.png"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="8">
                      <img src="static/img/Technology/u113.gif"
                           style="width: 200px;height: 180px">
                    </el-col>
                    <el-col :span="8" style="text-align:center">
                      推送更新
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="16">
                      <br> 机器人广告更新 系统更新
                    </el-col>
                    <el-col :span="8">
                      <br>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>


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
                <el-row style="color: white;font-size: 32px">多场景服务系统</el-row>
                <el-row style="color: white;font-size: 18px">GomRos-满足各行业业务需求</el-row>
              </div>
              <!--              <img src="../../static/img/Technology/u43.jpg"-->
              <!--                   style="width: 640px;height: 400px">-->
            </el-col>
            <el-col :span="8">
              <img src="../../static/img/Technology/u50.jpg"
                   style="width: 640px;height: 400px">
            </el-col>
            <el-col :span="8">
              <img src="../../static/img/Technology/u55.png"
                   style="width: 640px;height: 400px">
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
                <el-row style="color: white;font-size: 32px">Pc/手机/车载</el-row>
                <el-row style="color: white;font-size: 18px">GomRos-满足各类显示操控客户端</el-row>
              </div>
              <!--              <img src="../../static/img/Technology/u44.jpg"-->
              <!--                   style="width: 640px;height: 400px">-->
            </el-col>
            <el-col :span="8">
              <img src="../../static/img/Technology/u51.png"
                   style="width: 640px;height: 400px">
            </el-col>
            <el-col :span="8">
              <img src="../../static/img/Technology/u57.png"
                   style="width: 640px;height: 400px">
            </el-col>
          </el-row>
        </div>
      </el-carousel-item>
    </el-carousel>


    <el-container>

      <el-main>
        <el-row style="background-color: rgba(242, 246, 250, 1)"><br><br></el-row>
        <el-row :gutter="24" style="background-color: rgba(242, 246, 250, 1)">
          <el-col :span="5" style="color: #0d64e8;text-align: center;font-weight: bold;">
            <div style="font-size: 72px">GomRos</div>
            <div style="font-size: 32px">机器人产品应用</div>
          </el-col>
          <el-col :span="10">
            <img src="../../static/img/Technology/u117.svg">
          </el-col>
          <el-col :span="7">
            <img src="../../static/img/Technology/u120.png" >
          </el-col>
          <el-col :span="2">
            <br>
          </el-col>
        </el-row>
        <el-row style="background-color: rgba(242, 246, 250, 1)"><br><br></el-row>
        <el-row><br></el-row>
        <el-row><br></el-row>
        <el-row>
          <div>
            <el-row :gutter="24">
              <el-col :span="5" style="color: #0d64e8;text-align: center;font-weight: bold">
                <div style="font-size: 72px">GomRos</div>
                <div style="font-size: 32px">我们的产品</div>
              </el-col>
              <el-col :span="1">
                <br>
              </el-col>
              <el-col :span="5">
                <img src="../../static/img/Technology/u126.png">
              </el-col>
              <el-col :span="13">
                <img src="../../static/img/Technology/u123.png">
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="4">
                <img src="../../static/img/Technology/u127.png" style="width: 100%">
              </el-col>
              <el-col :span="4">
                <img src="../../static/img/Technology/u128.png">

              </el-col>
              <el-col :span="16">
                <div>
                  <el-row :gutter="24">
                    <el-col :span="2">
                      <br>
                    </el-col>
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

</style>
