<template>
  <div id="CorporateProfile">
    <el-container id="top-img">
      <el-row style="width: 100%;height:400px;">
        <el-col :span="15" style="background-color: #345771;height: 100%">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col :span="3" style="padding-top: 50px;padding-left: 30px;margin-right: 80px">
              <img src="static/img/MobileRobot/u3.png" style="width: 150px;height: 150px;">
            </el-col>
            <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">GomROS</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">工业基础软件</span></p>
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">关于我们</span></p>
              <p style="font-size: 30px;color: white;text-shadow: none;font-weight: bolder;margin-right: 28%">
                山东亚历山大智能科技有限公司</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="9"
                style="height:100%;background-image: url(static/img/CorporateProfile/u233.png);background-size: cover">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer style="background-color: #0d64e8">
        <p style="font-size: 30px;font-weight: bolder;color: white;margin-top: 10px;margin-bottom:0;margin-left: 5%">
          公司介绍</p>
      </el-footer>
    </el-container>
    <el-container>
      <el-main style="color: #0D64E8;font-size: 18px">
        <el-row :gutter="24" style="margin-left: 5%;margin-top: 1%">
          <el-col :span="12">
            <el-row>
              山东亚历山大智能科技有限公司坐落于山东省济南市，比邻千佛山，眺望大明湖。公司以工业4.0的自动化解决方案为
              核心技术，长期致力于智能装备、智能检测系统等相关的自动化生产线、仓储物流系统、群控移动机器人、工业机器人
              及生产活动管控软件、辅助教研平台等数字化高端智能装备系统的研发制造。
            </el-row>
            <br>
            <el-row>
              智能装备方面，公司产品涵盖烟草物流输送生产线、异形电子元件插件生产线、木工家具生产线、机床自动上下料设
              备、钣金生产自动化输送线、胶管试压清洗设备、高压及超高压液压系统、中药生产智能管控体系、工程机械领域胶管/
              硬管/油缸生产等。智能检测系统方面，公司研发了发动机活塞无损高速检测装备、玻璃纤维无人质检实验室、农机关键
              部件检测台、中药生产在线性状参数检测技术、激光/视觉检测技术、工程机械静音试验台、压路机/平地机性能测试平
              台等。仓储物流系统方面，公司拥有立体库、龙门库、拆/码垛机器人、高速堆垛机、高速穿梭车等设计成熟的产品。机器
              人产品应用方面，公司自主研发了集成SLAM、激光、视觉、磁条等多种导航方式的高精度群控AGV系统、智能调度软
              件和云平台，AGV有效载荷涵盖10kg-5T范围。公司集成工业机器人，设计了大范围激光清洗机器人、超厚板自动焊接
              机器人、核电系统巡检机器人等产品。生产管控软件方面，公司开发了针对离散型、流程型、混合型等多种生产模式企
              业的车间物联网系统、信息采集系统、MES、ANDON、WCS、工时核算软件、智能配送系统及6D临境式交互维修培
              训和总控指挥系统等。
            </el-row>
            <br>
            <el-row>
              在中国产业转型升级发展的关键阶段提供核心装备支撑，为企业提供全方位的解决方案，帮助企业提高管理水平和生产能力，
              使企业在激烈的市场竞争中始终坚持竞争力，实现企业快速、未定地发展，引领中国制造业转型升级。
            </el-row>
            <el-row style="text-align: center;margin-top: 3%">
              <img src="static/img/CorporateProfile/u3294.png">
            </el-row>
          </el-col>
          <el-col :span="8" style="margin-left: 6%;margin-top: 3%">
            <img src="static/img/CorporateProfile/u233.png" style="width: 700px;height: 120%">
          </el-col>
        </el-row>
        <el-row :gutter="24" style="background-color: #f2f6fa;margin-top: 1%">
          <el-col :span="12" style="margin-left: 5%;margin-bottom: 2%">
            <el-row style="font-size: 32px;font-weight: bold;margin-top: 3%">科研实力</el-row>
            <br>
            <el-row>
              公司与山东大学、山东省科学院、哈工大等科研机构围绕智能制造领域技术深入合作，近3年来先后获得国家、省级科
              技项目20余项，其中2020年承担科技部“科技助力经济2020”重点专项、2017年获批“山东省重大科技创新工程”基于云
              架构的生产物流智能配送AGV系统研发及示范应用项目，经费300万元。公司与中广核、中烟等央企及世界500强等企
              业建立了长期稳定的共同科研公关技术服务纽带关系，获得授权发明专利20余项，软件著作权14项。
            </el-row>
            <br>
            <el-row>
              公司研发的玻纤无人质检实验室为全球玻纤行业首套机器人质检系统，大跨距重载高速轮胎码垛机和国VI活塞微细
              缺陷涡流探伤系统为国产首套，打破了国外垄断，为国家及企业创造了巨大社会效益和经济价值。
            </el-row>
            <br><br>
            <el-row style="margin-left: 1%">
              <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="权威授权" name="first">
                  <div>
                    <el-row :gutter="24">
                      <el-col :span="8" style="color: #D9001B;font-weight: bold">
                        <div>
                          <el-row><br></el-row>
                          <el-row>ISO9001认证企业</el-row>
                          <el-row><br></el-row>
                          <el-row>获高新技术企业称号</el-row>
                          <el-row><br></el-row>
                          <el-row>获泰山产业领军人才支持</el-row>
                          <el-row><br></el-row>
                          <el-row>获济南市“专精特新”企业称号</el-row>
                        </div>
                      </el-col>
                      <el-col :span="5">
                        <br><br><img src="static/img/Contact/u3345.png">
                      </el-col>
                      <el-col :span="4">
                        <br><br><img src="static/img/Contact/u3344.png">
                      </el-col>
                      <el-col :span="3">
                        <br><img src="static/img/Contact/u3346.png">
                      </el-col>
                      <el-col :span="34">
                        <br><img src="static/img/Contact/u3347.png">
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="荣誉和奖励" name="second">
                  <div>
                    <el-row :gutter="24">
                      <el-col :span="12" style="color: #D9001B;font-weight: bold">
                        <div>
                          <el-row><br></el-row>
                          <el-row>国家科技部“科技助力经济2020”重点专项</el-row>
                          <el-row><br></el-row>
                          <el-row>中国机械工业科学技术奖科技进步二等奖</el-row>
                          <el-row><br></el-row>
                          <el-row>济南市移动机器人技术重点实验室</el-row>
                          <el-row><br></el-row>
                          <el-row>山东智能机器人产业技术创新战略联盟理事会成员</el-row>
                        </div>
                      </el-col>
                      <el-col :span="3">
                        <br>
                        <img src="static/img/Contact/u3359.png">
                      </el-col>
                      <el-col :span="2">
                        <br>
                        <img src="static/img/Contact/u3360.png">
                      </el-col>
                      <el-col :span="3">
                        <br><br><br>
                        <img src="static/img/Contact/u3361.png">
                      </el-col>
                      <el-col :span="4">
                        <br><br><br>
                        <img src="static/img/Contact/u3362.png">
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-row>
          </el-col>
          <el-col :span="8" style="margin-left: 3%;margin-top: 4%">
            <img src="static/img/CorporateProfile/u3338.png" style="width: 700px;height: 100%">
          </el-col>
        </el-row>
        <el-row :gutter="24" style="margin-top: 2%">
          <el-col :span="4" style="font-size: 40px;font-weight: bold;margin-left: 5%">
            发展历程
          </el-col>
          <el-col :span="12" style="margin-top: 3%">
            <img src="static/img/CorporateProfile/u3367.png" style="width: 120%;height: 95%">
          </el-col>
          <el-col :span="6">
            <br>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-row style="background-color: #f2f6fa">
      <el-row style="text-align: left;color:#0d64e8;font-size: 40px;font-weight: bold;margin-top: 2%;margin-left: 5%">
        客户和合作伙伴
      </el-row>
      <el-row style="margin-left: 8%;margin-top: 2%">
        <img src="static/img/CorporateProfile/u3153.png" style="width: 90%;margin-bottom: 2%">
      </el-row>
    </el-row>

    <el-container style="width: 100%">
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

export default {
  name: "About",
  data() {
    return {
      activeName: 'first',
      rules: {}
    };
  },
  methods: {
    routerToContact() {
      this.$router.push('/about')
    },
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
</style>
