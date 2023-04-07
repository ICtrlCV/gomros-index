<template>
  <div id="Supplier" style="color: #0D64E8">
    <el-container id="top-img">
      <el-row style="width: 100%;height:400px;">
        <el-col :span="15" style="background-color: rgba(115,120,123,1);height: 100%">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col :span="3" style="padding-top: 50px;padding-left: 30px;margin-right: 80px">
              <img src="static/img/MobileRobot/u3.png" style="width: 150px;height: 150px;">
            </el-col>
            <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">GomROS</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">工业基础软件</span></p>
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">生态合作</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">供应商合作</span></p>
              <p style="font-size: 30px;color: white;text-shadow: none;font-weight: bolder;margin-right: 28%">共同开发，共同创造，发展长期的，信赖的合作关系</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="9"
                style="height:100%;background-image: url(static/img/Supplier/ccc__u2459.jpg);background-size: cover">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer style="background-color: #0d64e8">
        <p style="font-size: 30px;font-weight: bolder;color: white;margin-top: 10px;margin-bottom:0;margin-left: 5%">供应商合作</p>
      </el-footer>
    </el-container>

    <el-container>
      <el-header>
        <br>
        <br>
      </el-header>
      <el-container>
        <el-aside width="100px">
          <br>
        </el-aside>
        <el-main style="text-align: left;height: 100%;width: 100%">
          <div>
            <el-row :gutter="24">
              <el-col :span="15"
                      style="border-style: ridge;border-color: #f2f6fa;border-width: thin"
                      class="introduction"
                      >
                <div>
                  <el-row>
                    <br>
                  </el-row>
                  <el-row :gutter="24" style="font-size: 32px">
                    <el-col :span="1">
                      <img src="static/img/Supplier/u1182.svg" style="width: 20px;">
                    </el-col>
                    <el-col :span="22">
                      简介
                    </el-col>
                    <el-col :span="1">
                      <br>
                    </el-col>
                  </el-row>
                  <el-row :gutter="24">
                    <el-col :span="1">
                      <br>
                    </el-col>
                    <el-col :span="22">
                      <br>
                      <br>
                      山东亚历山大智能科技有限公司坐落于山东省济南市，比邻千佛山，眺望大明
                      湖。公司以工业4.0的自动化解决方案为核心技术，长期致力于智能装备、智能
                      检测系统等相关的自动化生产线、仓储物流系统、群控移动机器人、工业机器
                      人及生产活动管控软件、辅助教研平台等数字化高端智能装备系统的研发制造。
                      <br><br><br><br><br><br><br><br>
                    </el-col>
                    <el-col :span="1">
                      <br>
                      <br>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="1">
                <br>
              </el-col>
              <el-col :span="8">
                <div>
                  <el-row :gutter="24">
                    <div >
                      <div class="brief" style="border-style: ridge;border-color: #f2f6fa;border-width: thin;">
                        <br>
                        <el-row :gutter="24" style="font-size: 32px;margin-left: 2px">
                          <el-col :span="2">
                            <img src="../../static/img/Supplier/u1182.svg" style="width: 20px;">
                          </el-col>
                          <el-col :span="20" >
                            理念
                          </el-col>
                          <el-col :span="2">
                            <br>
                          </el-col>
                        </el-row>
                        <el-row :gutter="24" style="margin-left: 1%">
                          <el-col :span="2">
                            <br>
                          </el-col>
                          <el-col :span="20">
                            <br>
                            资源共享，合作共赢
                          </el-col>
                          <el-col :span="2"></el-col>
                        </el-row>
                        <el-row>
                          <el-row>
                            <br>
                            <br>
                          </el-row>
                        </el-row>
                      </div>
                      <div>
                        <br>
                      </div>
                      <div class="apply"
                          style="border-style: ridge;border-color: #f2f6fa;border-width: thin">
                        <el-row :gutter="24" style="font-size: 32px;margin-left: 2px">
                          <br>
                          <el-col :span="2">
                            <img src="../../static/img/Supplier/u1182.svg" style="width: 20px;">
                          </el-col>
                          <el-col :span="20" >
                            申请合作
                          </el-col>
                          <el-col :span="2">
                            <br>
                          </el-col>
                        </el-row>
                        <el-row :gutter="24">
                          <el-col :span="2">
                            <br>
                          </el-col>
                          <el-col :span="20">
                            <br>
                            <el-button class="applyButton"
                                style="background-color: rgba(242, 246, 250, 1);color: #0d64e8;margin-left:5%"
                                       @click="submitForm" >申请合作</el-button>
                          </el-col>
                          <el-col :span="2">
                          </el-col>
                        </el-row>
                        <el-row>
                          <br>
                        </el-row>
                      </div>
                    </div>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-main>
        <el-aside width="100px">
          <br>
        </el-aside>
      </el-container>
    </el-container>
    <el-container style="text-align: left;background-color: #f2f6fa">
      <el-aside width="100px"></el-aside>
      <el-main>
        <el-row :gutter="24" style="font-size: 32px">
          <el-col :span="1">
            <img src="../../static/img/Supplier/u1182.svg" style="width: 20px;">
          </el-col>
          <el-col :span="20">
            合作流程
          </el-col>
          <el-col :span="2"></el-col>
        </el-row>
        <el-row style="margin-top: 30px;margin-bottom: 30px">
            <div class="">
                <el-steps :active="5" align-center>
                    <el-step title="" description="信息填报"></el-step>
                    <el-step title="" description="资质审核"></el-step>
                    <el-step title="" description="意向洽谈"></el-step>
                    <el-step title="" description="现场考察"></el-step>
                    <el-step title="" description="商务合作"></el-step>
                </el-steps>
            </div>
        </el-row>
      </el-main>
      <el-aside width="100px"></el-aside>
    </el-container>
    <br>
    <el-container style="color: #0D64E8">
      <el-aside width="100px"></el-aside>
      <el-container>
        <el-header>
          <el-row :gutter="24">
            <el-col :span="1">
              <img src="../../static/img/Supplier/u1182.svg" style="width: 20px;">
            </el-col>
            <el-col :span="23" style="font-size: 32px">
              合作需求
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-row :gutter="24">
            <el-col :span="2">
              <img src="../../static/img/Supplier/u2659.svg" class="el-image__inner" >
            </el-col>
            <el-col :span="5">
              <div>
                <el-row style="font-size: 20px;font-weight: bolder">感知系统</el-row>
                <el-row style="font-size: 18px">视觉系统、激光雷达、超声波雷达、红外传感器、力觉传感器、触觉传感器、等感知传感器。</el-row>
                <el-row>
                  <el-button style="background-color: #2372EA;color: white" @click="submitForm" >申请合作</el-button>
                </el-row>
              </div>
            </el-col>
            <el-col :span="1">
              <br>
            </el-col>
            <el-col :span="2">
              <img src="../../static/img/Supplier/u2666.svg" class="el-image__inner">
            </el-col>
            <el-col :span="5">
              <div>
                <el-row style="font-size: 20px;font-weight: bolder">驱动系统</el-row>
                <el-row style="font-size: 18px">伺服电机、减速器、进步电机、舵机、脚轮、等驱动系统配件。</el-row>
                <br>
                <el-row>
                  <el-button style="background-color: #2372EA;color: white" @click="submitForm" >申请合作</el-button>
                </el-row>
              </div>
            </el-col>
            <el-col :span="1">
              <br>
            </el-col>
            <el-col :span="2">
              <img src="../../static/img/Supplier/u2673.svg" class="el-image__inner">
            </el-col>
            <el-col :span="5">
              <div>
                <el-row style="font-size: 20px;font-weight: bolder">控制系统</el-row>
                <el-row style="font-size: 18px">工控机系统、电机控制模块、位姿控制模块、电源控制模块、等各种控制模块。
                </el-row>
                <el-row><br></el-row>
                <el-row>
                  <el-button style="background-color: #2372EA;color: white" @click="submitForm" >申请合作</el-button>
                </el-row>
              </div>
            </el-col>
            <el-col :span="1">
              <br>
            </el-col>
          </el-row>
          <el-row :gutter="24"></el-row>
          <el-row :gutter="24">
            <el-col :span="2">
              <img src="../../static/img/Supplier/u2681.svg" class="el-image__inner">
            </el-col>
            <el-col :span="5">
              <div>
                <el-row style="font-size: 20px;font-weight: bolder">GomROS系统</el-row>
                <el-row style="font-size: 18px">视觉识别、语音识别、运动控制、导航定位系统、等机器人软件控制系统。</el-row>
                <br>
                <el-row>
                  <el-button style="background-color: #2372EA;color: white" @click="submitForm" >申请合作</el-button>
                </el-row>
              </div>
            </el-col>
            <el-col :span="1">
              <br>
            </el-col>
            <el-col :span="2">
              <img src="../../static/img/Supplier/u2688.svg" class="el-image__inner">
            </el-col>
            <el-col :span="5">
              <div>
                <el-row style="font-size: 20px;font-weight: bolder">场景服务系统</el-row>
                <el-row style="font-size: 18px">调度系统、WMS智能仓储管理系统、MES制造执行系统、ERP企业资源计划管理系统、等数字化管理系统。</el-row>
                <el-row>
                  <el-button style="background-color: #2372EA;color: white" @click="submitForm" >申请合作</el-button>
                </el-row>
              </div>
            </el-col>
            <el-col :span="1">
              <br>
            </el-col>
            <el-col :span="2">
              <img src="../../static/img/Supplier/u2695.svg" class="el-image__inner">
            </el-col>
            <el-col :span="5">
              <div>
                <el-row style="font-size: 20px;font-weight: bolder">云平台识别算法</el-row>
                <el-row style="font-size: 18px">视觉避障识别算法、视觉定位导航算法、语音识别算法、运动控制算法等先进算法系统。</el-row>
                <el-row>
                  <el-button style="background-color: #2372EA;color: white" @click="submitForm" >申请合作</el-button>
                </el-row>
              </div>
            </el-col>
            <el-col :span="1">
              <br>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-aside width="100px"></el-aside>
    </el-container>
    <el-container id="bottom">
      <el-main style="background: #0d64e8;font-size: 25px">
        <el-row :gutter="24">
          <el-col :span="10" style="color: white;text-align: left">
            欢迎咨询供应商合作相关产品
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

    <!-- 添加或修改供应商合作-供应商合作申请对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="1200px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" style="font-size: 14px">
        <el-form-item
            style="font-size: larger;
            color: #0d64e8;
            text-align: center"
            label-width="0px">
          <h1>
            供应商合作申请
          </h1>
        </el-form-item>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人姓名" prop="applicantName">
              <el-input v-model="form.applicantName" placeholder="请输入申请人姓名" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位名称" prop="companyName">
              <el-input v-model="form.companyName" placeholder="请输入单位名称" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="合作方向" prop="cooperationDirection">
              <el-input v-model="form.cooperationDirection" placeholder="请输入合作方向" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人职务" prop="applicantJob">
              <el-input v-model="form.applicantJob" placeholder="请输入申请人职务" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系电话" prop="telephone">
              <el-input v-model="form.telephone" placeholder="请输入联系电话" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系邮箱" prop="mail">
              <el-input v-model="form.mail" placeholder="请输入联系邮箱" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <br>
          <br>
          <br>
        </el-row>
        <el-row :gutter="24">
          <el-form-item label="合作需求" prop="demand">
            <el-input v-model="form.demand" type="textarea" :rows="4" placeholder="请输入内容" />
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import axios from "../router/http";
import icon from "element-ui/packages/icon";

export default {
  name: "About",
    computed: {
        icon() {
            return icon
        }
    },
  data() {
    return {
      title: "",
      // 是否显示弹出层
      open: false,
      // 表单参数
      form: {},
      rules: {
        applicantName: [
          { required: true, message: "申请人姓名不能为空", trigger: "blur" },
          {min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur"}
        ],
        companyName: [
          { required: true, message: "单位名称不能为空", trigger: "blur" },
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        cooperationDirection: [
          { required: true, message: "合作方向不能为空", trigger: "blur" },
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        applicantJob: [
          { required: true, message: "申请人职务不能为空", trigger: "blur" },
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        telephone: [
          { required: true, message: "联系电话不能为空", trigger: "blur" },
          {max: 11, message: "长度最大为 11 字符", trigger: "blur"}
        ],
        mail: [
          { required: true, message: "联系邮箱不能为空", trigger: "blur" },
          {max: 255, message: "长度 最大为 255 个字符", trigger: "blur"}
        ],
      }
    };
  },
  methods: {
    routerToContact() {
      this.$router.push('/about')
    },
    submitForm(){
      this.open=true;
      this.$refs['form'].validate(valid => {
        if (valid){
          axios.post('http://localhost:8080/system/supplier',this.form).
          then(response=> {
                console.log("response:",response)
                // this.info = response;
                if (response !=null && response.status===200){
                  this.$alert("提交成功");
                  this.status=response.status;
                  this.open=false;
                  this.reset();
                }
              }
          ).catch(error => {
                console.log(error),
                    this.$message({
                      type:'error',
                      message:error+''
                    })
              }

          )
        }
      })
    },
    cancel(){
      this.open = false;
      this.reset();
    },
    reset(){
      this.form = {
        id: null,
        formId: null,
        applicantName: null,
        companyName: null,
        cooperationDirection: null,
        applicantJob: null,
        telephone: null,
        mail: null,
        demand: null,
        source: null,
        isHandle: null,
        isDelete: null,
        createTime: null,
        createBy: null,
        updateTime: null,
        updateBy: null
      };
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
.introduction:hover{
  background-color: rgba(242, 246, 250, 1);
}
.brief:hover{
  background-color: rgba(242, 246, 250, 1);
}
.apply:hover{
  background-color: rgba(242, 246, 250, 1);
}
.apply:hover{
  background-color: rgba(242, 246, 250, 1);
}
.applyButton:hover{
  background-color: #2372EA;
  color: white;
}
.el-main {
    overflow-x: hidden;
}
::v-deep .el-step__icon{
    width: 50px;
    height: 50px;
    margin-bottom: 60px;
}
.el-image__inner {
    border-radius: 50%;
    border: 1px solid #375EA0;
    padding: 20px;
}
</style>
