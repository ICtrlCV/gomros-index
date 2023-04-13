<template>
  <div id="development" style="background: white;">
    <el-container id="top-img" style="background-image: url(../../static/abouttop.jpg);">
      <el-row style="width: 100%;height:400px;">
        <el-col :span="15" style="height: 100%">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col :span="3" style="padding-top: 50px;padding-left: 30px;margin-right: 80px">
              <img src="static/img/MobileRobot/u3.png" style="width: 150px;height: 150px;">
            </el-col>
            <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">GomROS</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">工业基础软件</span></p>
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">生态合作</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">协同发展平台</span></p>
              <p style="font-size: 28px;color: white;text-shadow: none;font-weight: bolder;margin-right: 30%">
                构建工业互联网时代绿色生态系统，携手合作伙伴加速数字化发展，塑造可持续发展的未来。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="9">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer style="background-color: #0d64e8">
        <p style="font-size: 32px;font-weight: bolder;color: white;margin-top: 10px;margin-bottom:0;margin-left: 5%">
          协同研发平台</p>
      </el-footer>
    </el-container>
    <el-container id="pain-shot" style="height: 600px;font-weight: bolder">
      <el-header
          style="text-align: center;
          height: 200px;
          font-size: 32px;
          color: #0D64E8;
          line-height: 200px;">
        企业研发痛点
      </el-header>
      <el-main style="text-align: center;color:#0D64E8;">
        <el-row :gutter="24">
          <el-col :span="3">
            <br>
          </el-col>
          <el-col :span="6" class="cost" style="border-style: solid;border-color: #eeeeee">
            <div>
              <br>
              <br>
            </div>
            <div>
              <el-row>
                <img src="static/img/Development/u1802.svg">
              </el-row>
              <el-row><br></el-row>
              <el-row style="font-size: 24px">成本高</el-row>
              <el-row style="font-size: 18px">软硬件研发投入高</el-row>
              <el-row style="font-size: 18px">自建团队成本高</el-row>
              <el-row style="font-size: 18px">多系统集成维护成本高</el-row>
            </div>
            <div>
              <br>
              <br>
              <br>
            </div>
          </el-col>
          <el-col :span="6" class="efficient" style="border-style: solid;border-color: #eeeeee">
            <div>
              <br>
              <br>
            </div>
            <div>
              <el-row>
                <img src="static/img/Development/u1813.svg">
              </el-row>
              <el-row><br></el-row>
              <el-row style="font-size: 24px">效率低</el-row>
              <el-row style="font-size: 18px">产品设计标准化低，复用率低</el-row>
              <el-row style="font-size: 18px">产品数据积累低，应用难</el-row>
              <el-row style="font-size: 18px">设计协调难，专家评审难</el-row>
            </div>
            <div>
              <br>
              <br>
              <br>
            </div>
          </el-col>
          <el-col :span="6" class="manage" style="border-style: solid;border-color: #eeeeee">
            <div>
              <br>
              <br>
            </div>
            <div>
              <el-row>
                <img src="static/img/Development/u1823.svg">
              </el-row>
              <el-row><br></el-row>
              <el-row style="font-size: 24px">管理难</el-row>
              <el-row style="font-size: 18px">版本管理混乱，迭代不及时</el-row>
              <el-row style="font-size: 18px">人员变动带来的产品不稳定</el-row>
              <el-row style="font-size: 18px">产品缺乏安全稳定运行保障</el-row>
            </div>
            <div>
              <br>
              <br>
              <br>
            </div>
          </el-col>
          <el-col :span="3">
            <br>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-container id="our-advantage" style="background: #f2f6fa">
      <el-header style="text-align: center">
        <el-row
            style="text-align: center;line-height: normal;color: #0D64E8;margin-top: 2%;margin-bottom: 2%;font-size:32px;font-weight: bolder">
          我们的优势
        </el-row>
      </el-header>
      <el-main>
        <br>
        <br>
        <el-row :gutter="24">
          <el-col :span="4">
            <br>
          </el-col>
          <el-col :span="16" style="font-size: 20px;">
            <el-tabs style="text-align: center;" :stretch="true">
              <el-tab-pane>
                <span slot="label" style="font-size: 18px;">产品设计</span>
                <br>
                <el-row :gutter="24">
                  <el-col :span="8">
                    <img src="../../static/img/Development/u1955.jpg"
                         style="width: 400px;height: 280px;">
                  </el-col>
                  <el-col :span="14" style="text-align: left;margin-left: 6%;margin-top: 2%">
                    <div style="color: #2372EA;">
                      <el-row style="font-size: 24px;font-weight: bolder">
                        用心
                      </el-row>
                      <el-row style="font-size: 16px">
                        用心关注产品使用价值、关注质量与细节；关怀合作企业与团队，创造出能够体现企业对用户的关爱的好产品。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        专注
                      </el-row>
                      <el-row style="font-size: 16px">
                        以结果为导向，专注于如何做得更好，创造出有特色、有核心竞争力的好产品。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        创新
                      </el-row>
                      <el-row style="font-size: 16px">
                        不断探索、超越，突破创新局限，创造出富有创新性的好产品。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        简化
                      </el-row>
                      <el-row style="font-size: 16px">
                        以简单应用体现深度设计思想，追求极简的用户体验，创造出令团队和客户感到骄傲的好产品。
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label" style="font-size: 18px">产品研发</span>
                <br>
                <el-row :gutter="24">
                  <el-col :span="8">
                    <img src="../../static/img/Development/u1965.jpg"
                         style="width: 400px;height: 280px;">
                  </el-col>
                  <el-col :span="14" style="text-align: left;margin-left: 6%">
                    <div style="color: #2372EA;margin-left: 1%">
                      <el-row style="font-size: 24px;font-weight: bolder">
                        团队稳定
                      </el-row>
                      <el-row style="font-size: 16px;">
                        我们拥有一支长期稳定的研发团队，技术经验及技术规范都已形成标准文档，确保能够稳定规范的输出产品。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        目标专注
                      </el-row>
                      <el-row style="font-size: 16px;">
                        我们的团队成员目标保持专注，每个参与成员的核心关注力都在产品的开发阶段，全体成员目标保持一致。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        保持工作节奏
                      </el-row>
                      <el-row style="font-size: 16px;">
                        我们的团队成员必须以可持续的节奏工作，平衡项目前后的工作量。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        跨组织合作
                      </el-row>
                      <el-row style="font-size: 16px;">
                        我们开发团队包括架构师、开发工程师、测试人员、数据库管理员和UI设计师等，团队成员必须能够跨职能组合。
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label" style="font-size: 18px">
                  产品生产
                </span>
                <br>
                <el-row :gutter="24">
                  <el-col :span="8">
                    <img src="../../static/img/Development/u1975.jpeg"
                         style="width: 400px;height: 280px;">
                  </el-col>
                  <el-col :span="14" style="text-align: left;margin-left: 6%">
                    <div style="color: #2372EA;margin-left: 1%">
                      <el-row style="font-size: 24px;font-weight: bolder">
                        高品质
                      </el-row>
                      <el-row style="font-size: 16px;">
                        对产品的检查上要做到全方位的检查，细心、认真，不要放过一丝一毫的空间，严格落实日常质量管理体系及标准。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        低成本
                      </el-row>
                      <el-row style="font-size: 16px;">
                        1、消除车间浪费，提升生产效率。<br>
                        2、降低计划性损失，提升效率。<br>
                        3、生产管制运作，相互配合，避免等待。<br>
                        4、运用绩效指标改善法，提升效率。<br>
                        5、用MES系统实现工厂可视化管理。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        交期快
                      </el-row>
                      <el-row style="font-size: 16px;">
                        确保产品计划详尽，辅助部门沟通衔接顺畅。
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label" style="font-size: 18px">数据平台</span>
                <br>
                <el-row :gutter="24">
                  <el-col :span="8">
                    <img src="../../static/img/Development/u1985.png"
                         style="width: 400px;height: 280px;">
                  </el-col>
                  <el-col :span="14" style="text-align: left;margin-left: 6%;margin-top: 2%">
                    <div style="color: #2372EA;margin-left: 1%">
                      <el-row style="font-size: 24px;font-weight: bolder">
                        感知
                      </el-row>
                      <el-row style="font-size: 16px;">
                        实时捕捉业务动态，监控经营趋势，发现经营问题。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        策略
                      </el-row>
                      <el-row style="font-size: 16px;">
                        沉淀运营管理经验，形成场景卡片，从而实现运营管理能力的自动化。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        指挥
                      </el-row>
                      <el-row style="font-size: 16px;">
                        将管理决策和任务自动化下达到各业务系统，形成自动运营管理闭环。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        决策
                      </el-row>
                      <el-row style="font-size: 16px;">
                        基于丰富的算法模型及精准的推演能力，帮助管理层掌握科学的决策方法。
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label" style="font-size: 18px">场景服务</span>
                <br>
                <el-row :gutter="24">
                  <el-col :span="8">
                    <img src="../../static/img/Development/u1995.jpg"
                         style="width: 400px;height: 280px;">
                  </el-col>
                  <el-col :span="14" style="text-align: left;margin-left: 6%;margin-top: 1%">
                    <div style="color: #2372EA;margin-left: 1%">
                      <el-row style="font-size: 24px;font-weight: bolder">
                        调度
                      </el-row>
                      <el-row style="font-size: 16px;">
                        负责全部机器人的任务分配、调度及运行监控。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        智能仓储管理
                      </el-row>
                      <el-row style="font-size: 16px;">
                        可为企业提供更为完整企业物流管理流程和财务管理信息。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        制造执行系统
                      </el-row>
                      <el-row style="font-size: 16px;">
                        可以为企业提供包括制造数据管理、计划排程管理、生产调度管理、库存管理、质量管理、人力资源管理、工作中心/设备管理等等多项管理模块。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        资源计划管理
                      </el-row>
                      <el-row style="font-size: 16px;">
                        ERP是一种主要面向制造行业进行物质资源、资金资源和信息资源集成一体化管理的企业信息管理系统
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="云平台" name="sixth">
                <span slot="label" style="font-size: 18px">云平台</span>
                <br>
                <el-row :gutter="24">
                  <el-col :span="8">
                    <img src="../../static/img/Development/u2005.jpg"
                         style="width: 400px;height: 280px;">
                  </el-col>
                  <el-col :span="14" style="text-align: left;margin-left: 6%">
                    <div style="color: #2372EA;margin-left: 1%">
                      <el-row style="font-size: 24px;font-weight: bolder">
                        领先的技术
                      </el-row>
                      <el-row style="font-size: 16px;">
                        我们平台拥有功能完备的机器学习模型，不断迭代优化，支持更先进的算法并且提供更高的算力，输出业界最前沿的研究成果。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        产品矩阵优势
                      </el-row>
                      <el-row style="font-size: 16px;">
                        我们有10余款生态机器人产品，覆盖多种使用场景，向各行各业的客户提供硬件设备和服务，可定制，售后有保障的软硬件一体解决方案。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        灵活开放的生态
                      </el-row>
                      <el-row style="font-size: 16px;">
                        二次开发灵活性强，第三方设备和应用可以快速接入，开放的开发者社区，学校人才聚集，聚集金融机构支持。
                      </el-row>
                      <el-row style="font-size: 24px;font-weight: bolder">
                        产品和数据支持
                      </el-row>
                      <el-row style="font-size: 16px;">
                        平台有机器人调度系统、服务机器人管控系统、机器人操作控制软件系统、ERP系统、MES系统、WMS系统、WCS系统等产品及工具、积累大量历史数据、用于迭代更新系统。
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <br>
    <br>
    <el-container id="form-button">
      <el-aside width="150px">
        <br>
      </el-aside>
      <el-main
          style="text-align: center;
          background-image: url(static/img/Development/u2008.jpg);
          background-position: center;
          background-size: cover;
          height: 100%;
          width: 100%"
      >
        <div>
          <h1 style="color: white;font-size: 72px">协同研发平台</h1>
        </div>
        <h1 style="color: white;text-align: center">
          <el-button @click="openDialog()"
                     style="background: #0d64e8;color: white;font-size: 28px">
            <b>
              申请合作
            </b>
          </el-button>
        </h1>
      </el-main>
      <el-aside width="150px">
        <br>
      </el-aside>
    </el-container>
    <br>
    <el-container style="width: 100%">
      <el-main style="background: #0d64e8;font-size: 30px;">
        <el-row :gutter="24" style="padding-top: 0;padding-bottom: 0">
          <el-col :span="13" style="color: white;text-align: left;font-size: 35px;font-weight: bolder;padding-left: 5%">
            欢迎咨询协同研发平台相关产品
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

    <el-dialog :title="title" :visible.sync="open" width="800px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" style="text-align: center">
        <el-form-item
            style="font-size: larger;
            color: #0d64e8;
            text-align: center"
            label-width="0px">
          <h1>
            合作申请
          </h1>
        </el-form-item>
        <el-form-item label="企业名称" prop="companyName">
          <el-input v-model="form.companyName" placeholder="请输入企业名称"/>
        </el-form-item>
        <el-form-item label="姓名" prop="userName">
          <el-input v-model="form.userName" placeholder="请输入姓名"/>
        </el-form-item>
        <el-form-item label="手机号" prop="telephone">
          <el-input v-model="form.telephone" placeholder="请输入手机号"/>
        </el-form-item>
        <el-form-item label="邮箱" prop="mail">
          <el-input v-model="form.mail" placeholder="请输入邮箱"/>
        </el-form-item>
        <el-form-item label="合作项目说明" prop="description">
          <el-input v-model="form.description" type="textarea" :rows="4" placeholder="请输入内容"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel()">取 消</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>

import axios from "axios";
import {regexp} from "autoprefixer/lib/utils";

export default {
  name: "About",
  data() {
    return {
      pagetitle: '',
      email: '',
      phone: '',
      response: '',
      address: '',
      status: 0,
      formInline: {
        name: "",
        phone: "",
        company: "",
        email: "",
        content: ""
      },
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      fromObject: {
        companyName: null,
        userName: null,
        telephone: null,
        mail: null,
        description: null,
      },
      //表单数据
      form: {},
      rules: {
        companyName: [
          {required: true, message: "企业名称不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        userName: [
          {required: true, message: "姓名不能为空", trigger: "blur"},
          {min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur"}
        ],
        telephone: [
          {required: true, message: "手机号不能为空", trigger: "blur"},
          {max: 11, message: "长度最大为 11 位", trigger: "blur"}
        ],
      }
    };
  },
  methods: {
    cancel() {
      this.open = false;
      this.reset();
    },
    reset() {
      this.form = {
        companyName: null,
        userName: null,
        telephone: null,
        mail: null,
        description: null,
      };
    },
    routerToContact() {
      this.$router.push('/about')
    },
    openDialog() {
      this.open = true;
      this.reset();
    },
    submitForm() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          axios.post('http://localhost:8080/forminfo/development', this.form).then(response => {
                if (response != null && response.status === 200) {
                  this.$alert("期待与您的合作！");
                  // this.status = response.status;
                  this.open = false;
                }
              }
          ).catch(error => {
                // console.log(error),
                this.$message({
                  type: 'error',
                  message: error + ''
                })
              }
          )
        }
      })
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

.cost:hover {
  background-color: rgba(242, 246, 250, 1);
}

.efficient:hover {
  background-color: rgba(242, 246, 250, 1);
}

.manage:hover {
  background-color: rgba(242, 246, 250, 1);
}
</style>
