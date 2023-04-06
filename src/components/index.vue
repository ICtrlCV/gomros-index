<template>
  <div id="index">
    <div class="section" style="background-image: url(static/img/Home/u2927.gif);
background-size: cover">
      <el-container style="color: #0D64E8;font-size: 72px;font-weight: bolder">
        <el-header>
          <br>
        </el-header>
        <el-container
            style="color: #0D64E8;font-size: 72px;font-weight: bolder;
              text-shadow: 2px 2px 8px white;text-align: left;">
          <el-aside width="50px">
            <br>
          </el-aside>
          <el-main>
            <el-row style="">
              山东亚历山大智能科技有限公司
            </el-row>
            <el-row :gutter="24">
              <el-col :span="8">
                GomROS平台
              </el-col>
              <el-col :span="12" style="font-size: 24px">
                <div>
                  <el-row>
                    <br>
                  </el-row>
                  <el-row>
                    <br>
                  </el-row>
                  <el-row>
                    工业基础软件
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row style="text-align: left;color: white;font-size: 32px;text-shadow: none">
              让机器人开发更简单
            </el-row>
          </el-main>
          <el-aside width="50px">
            <br>
          </el-aside>
        </el-container>
        <el-row>
          <br><br><br><br>
        </el-row>
        <el-footer style="color: white;font-size: 24px;text-align: center" height="240px">
          <el-row :gutter="24">
            <el-col :span="8">
              <div class="robotSystem">
                <el-row><br></el-row>
                <el-row style="font-size: 24px">机器人操作系统</el-row>
                <el-row>GomROS（句芒）是一款为机器人、自动化设</el-row>
                <el-row>备等高端智能装备提供的国产原创操作系统。</el-row>
                <el-row><br><br></el-row>
                <div class="robotSystemIn"
                     style="background-image: url(static/img/index/u159.jpg);">
                  <el-row><br><br></el-row>
                  <el-row style="font-size: 24px">机器人操作系统</el-row>
                  <el-row>GomROS（句芒）是一款为机器人、自动化设</el-row>
                  <el-row>备等高端智能装备提供的国产原创操作系统。</el-row>
                  <el-row style="text-decoration: underline"
                          onclick="window.location.href='/#/robotOperateSystem'">
                    查看详情
                  </el-row>
                  <el-row><br></el-row>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="moveRobot" >
                <el-row><br></el-row>
                <el-row style="font-size: 24px">移动机器人</el-row>
                <el-row>移动机器人，是一个集环境感知、动态决策与规</el-row>
                <el-row>划、行为控制与执行等多功能于一体的综合系统。</el-row>
                <el-row><br><br></el-row>
                <div class="moveRobotIn"
                     style="background-image: url(static/img/index/u2.jpg);">
                  <el-row><br></el-row>
                  <el-row style="font-size: 24px">移动机器人</el-row>
                  <el-row>移动机器人，是一个集环境感知、动态决策与规</el-row>
                  <el-row>划、行为控制与执行等多功能于一体的综合系统。</el-row>
                  <el-row
                      style="text-decoration: underline"
                          onclick="window.location.href='/#/technology'">
                    查看详情
                  </el-row>
                  <el-row><br><br></el-row>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="openPlat" >
                <el-row><br></el-row>
                <el-row style="font-size: 24px" onclick="window.location.href='/#/opencommunity'">GomROS开放平台
                </el-row>
                <el-row>提供智能机器人应用开放平台，支持全场景应</el-row>
                <el-row>用开发，助力合作伙伴快速完成机器人应用开发。</el-row>
                <el-row><br><br></el-row>
                <div class="openPlatIn"
                     style="background-image: url(static/img/index/u197.jpg);">
                  <el-row><br></el-row>
                  <el-row style="font-size: 24px">GomROS开放平台</el-row>
                  <el-row>提供智能机器人应用开放平台，支持全场景应</el-row>
                  <el-row>用开发，助力合作伙伴快速完成机器人应用开发。</el-row>
                  <el-row style="text-decoration: underline"
                          onclick="window.location.href='/#/opencommunity'">
                    查看详情
                  </el-row>
                  <el-row><br><br></el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </div>


    <div style="background-color: rgba(51, 51, 51, 0.847058823529412);">
      <el-container>
        <el-header>
          <br>
        </el-header>
        <el-aside>
          <br>
        </el-aside>
          <div class="showPage">
            <div class="platForm">
              云平台
              <div class="platFormIn">
                <el-row>
                  云平台是为客户和合作伙伴提供软硬件一体的整体产品基础服务平台
                </el-row>
                <el-row style="text-decoration: underline;text-align: center"
                        onclick="window.location.href='/#/cloudPlatform'">
                  查看详情
                </el-row>
              </div>
            </div>
            <div class="dataPlat">
              <h4 style="margin-top: 450px">数据平台</h4>
              <div class="dataPlatIn">
                <el-row>
                  数据成为驱动经济增长的核心生产要素。大数据和云计算等技术的融合，推动了物联网的迅速发展，实现了人与人、人与物、物与物的互联互通，导致数据量呈现爆发式增长。
                </el-row>
                <el-row style="text-decoration: underline;text-align: center"
                        onclick="window.location.href='/#/dataPlatform'">
                  查看详情
                </el-row>
              </div>
            </div>
            <div class="serviceSystem">
              服务场景系统
              <div class="serviceSystemIn">
                <el-row>
                  场景服务系统是服务于各种应用场景，支撑各类管理系统的互联互通。
                </el-row>
                <el-row style="text-decoration: underline;text-align: center"
                        onclick="window.location.href='/#/scenarioService'">
                  查看详情
                </el-row>
              </div>
            </div>
            <div class="hardware">
              <h4 style="margin-top: 450px">硬件控制及驱动系统</h4>
              <div class="hardwareIn">
                <el-row>
                  一个机器人最主要的控制量就是控制机器人的移动，无论是自身的移动还是手臂等关节的移动，所以机器人驱动器中最根本的问题就是控制电机。
                </el-row>
                <el-row style="text-decoration: underline;text-align: center"
                        onclick="window.location.href='/#/hardwareDriver'">
                  查看详情
                </el-row>
              </div>
            </div>
          </div>

        <el-aside>
          <br>
        </el-aside>
      </el-container>
      <br>
      <br>
      <br>
    </div>
    <el-container style="background-color: rgba(51, 51, 51, 0.196078431372549);">
      <el-header>
        <br>
      </el-header>
      <el-container>
        <el-aside width="50px">
          <br>
        </el-aside>
        <el-main>
          <div class="section"
               style="font-size: 32px;font-weight: bolder;color: #0d64e8;text-align: center">
            <el-row style="text-align: left">
              我们的平台优势
            </el-row>
            <el-row :gutter="24">
              <el-col :span="4">
                <br>
              </el-col>
              <el-col :span="16">
<!--                <img src="static/img/Home/u3075.png" style="width: 1800px;height:600px;filter: brightness(0.8)">-->
                <img src="static/img/Home/u3075.png" style="width: 80%;height: 60%;filter: brightness(0.8)">
              </el-col>
              <el-col :span="4">
                <br>
              </el-col>
            </el-row>
            <el-row>
              <br>
              <br>
            </el-row>
            <el-row style="text-align: left">
              客户和合作伙伴
            </el-row>
            <el-row :gutter="24">
              <el-col :span="4">
                <br>
              </el-col>
              <el-col :span="16">
                <img src="static/img/Home/u3153.png" style="width: 90%">
              </el-col>
              <el-col :span="4">
                <br>
              </el-col>
            </el-row>
            <el-row>
              <br>
              <br>
            </el-row>
          </div>
        </el-main>
        <el-aside width="50px">
          <br>
        </el-aside>
      </el-container>
    </el-container>
    <el-container id="bottom">
      <el-main style="background: #0d64e8;font-size: 25px">
        <el-row :gutter="24">
          <el-col :span="10" style="color: white;text-align: left">
            欢迎致电我们
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
import {auto} from "html-webpack-plugin/lib/chunksorter";

export default {
  name: "Education",
  data() {
    return {
      trainOpen: false,
      schoolOpen: false,
      productOpen: false,
      lectureOpen: false,
      title: "",
      //培训表单
      trainform: {},
      //校企合作表单
      schoolform: {},
      //产品表单
      productform: {},
      //讲师合作
      lecturerform: {},
      trainRules: {
        applicantName: [
          {required: true, message: "申请人姓名不能为空", trigger: "blur"},
          {min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur"}
        ],
        industry: [
          {required: true, message: "所在行业不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        companny: [
          {required: true, message: "单位名称不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        applicantJob: [
          {required: true, message: "申请人职务不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        telephone: [
          {required: true, message: "联系电话不能为空", trigger: "blur"},
          {max: 11, message: "长度最大为 11 位", trigger: "blur"}
        ],
        mail: [
          {required: true, message: "联系邮箱不能为空", trigger: "blur"},
          {min: 5, max: 255, message: "长度在 5 到 255 个字符", trigger: "blur"}
        ],
        city: [
          {required: true, message: "举办城市不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        local: [
          {required: true, message: "举办场地不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        date: [
          {required: true, message: "举办时间不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        theme: [
          {required: true, message: "举办主题不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        scale: [
          {required: true, message: "培训规模不能为空", trigger: "blur"},
          {min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur"}
        ],
        audiences: [
          {required: true, message: "培训受众不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
      },
      schoolRules: {
        applicantName: [
          {required: true, message: "申请人姓名不能为空", trigger: "blur"},
          {min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur"}
        ],
        schoolName: [
          {required: true, message: "高校名称不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        majorName: [
          {required: true, message: "专业名称不能为空", trigger: "blur"},
          {min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur"}
        ],
        applicantJob: [
          {required: true, message: "申请人职务不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        telephone: [
          {required: true, message: "联系电话不能为空", trigger: "blur"},
          {max: 11, message: "长度最大为 11 位", trigger: "blur"}
        ],
        mail: [
          {required: true, message: "联系邮箱不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
      },
      productRules: {
        applicantName: [
          {required: true, message: "申请人名称不能为空", trigger: "blur"},
          {min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur"}
        ],
        project: [
          {required: true, message: "合作项目不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        companyName: [
          {required: true, message: "单位名称不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        applicantJob: [
          {required: true, message: "申请人职务不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        telephone: [
          {required: true, message: "联系电话不能为空", trigger: "blur"},
          {max: 11, message: "长度最大为 11 位", trigger: "blur"}
        ],
        mail: [
          {required: true, message: "联系邮箱不能为空", trigger: "blur"},
          {min: 2, max: 255, message: "长度在 2 到 255 个字符", trigger: "blur"}
        ],
      },
      lecturerRules: {
        applicantName: [
          {required: true, message: "申请人姓名不能为空", trigger: "blur"},
          {min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur"}
        ],
        applicantSex: [
          {required: true, message: "申请人性别不能为空", trigger: "change"},
          {max: 4, message: "长度最大 4 个字符", trigger: "blur"}
        ],
        companyName: [
          {required: true, message: "单位名称不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        applicantJob: [
          {required: true, message: "申请人职务不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
        telephone: [
          {required: true, message: "联系电话不能为空", trigger: "blur"},
          {max: 11, message: "长度最大为 11 位", trigger: "blur"}
        ],
        mail: [
          {required: true, message: "联系邮箱不能为空", trigger: "blur"},
          {min: 2, max: 255, message: "长度在 2 到 255 个字符", trigger: "blur"}
        ],
        educationBackgroud: [
          {required: true, message: "申请人学历不能为空", trigger: "blur"},
          {min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur"}
        ],
        birthTime: [
          {required: true, message: "出生日期不能为空", trigger: "blur"},
        ],
        major: [
          {required: true, message: "专业方向不能为空", trigger: "blur"},
          {min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur"}
        ],
      },
    };
  },
  methods: {
    trainCancel() {
      this.trainOpen = false;
      this.trainReset();
    },
    schoolCancel() {
      this.schoolOpen = false;
      this.productReset();
    },
    productCancel() {
      this.productOpen = false;
      this.schoolReset();
    },
    lecturerCancel() {
      this.lectureOpen = false;
      this.lectureReset();
    },
    trainReset() {
      this.trainform = {
        id: null,
        formId: null,
        applicantName: null,
        industry: null,
        companny: null,
        applicantJob: null,
        telephone: null,
        mail: null,
        city: null,
        local: null,
        date: null,
        theme: null,
        scale: null,
        audiences: null,
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
    productReset() {
      this.productform = {
        id: null,
        formId: null,
        applicantName: null,
        project: null,
        companyName: null,
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
    schoolReset() {
      this.schoolform = {
        id: null,
        formId: null,
        applicantName: null,
        schoolName: null,
        majorName: null,
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
    lectureReset() {
      this.lecturerform = {
        id: null,
        formId: null,
        applicantName: null,
        applicantSex: null,
        companyName: null,
        applicantJob: null,
        telephone: null,
        mail: null,
        educationBackgroud: null,
        birthTime: null,
        major: null,
        information: null,
        source: null,
        isHandle: null,
        isDelete: null,
        createTime: null,
        createBy: null,
        updateTime: null,
        updateBy: null
      };
    },
    //培训按钮
    trainForm() {
      this.trainOpen = true;
      this.$refs['trainform'].validate(valid => {
        if (valid) {
          axios.post('http://localhost:8080/system/train', this.trainform).then(response => {
                console.log("response:", response)
                if (response != null && response.status === 200) {
                  this.$alert("提交成功");
                  this.status = response.status;
                  this.trainOpen = false;
                  this.trainReset();
                }
              }
          ).catch(error => {
                console.log(error),
                    this.$message({
                      type: 'error',
                      message: error + '  出现未知错误请联系管理员'
                    })
              }
          )
        }
      })
    },
    //校企合作按钮
    schoolForm() {
      this.schoolOpen = true;
      this.$refs['schoolform'].validate(valid => {
        if (valid) {
          axios.post('http://localhost:8080/system/school', this.schoolform).then(response => {
                console.log("response:", response)
                if (response != null && response.status === 200) {
                  this.$alert("提交成功");
                  this.status = response.status;
                  this.schoolOpen = false;
                  this.schoolReset();
                }
              }
          ).catch(error => {
                console.log(error),
                    this.$message({
                      type: 'error',
                      message: error + '  出现未知错误请联系管理员'
                    })
              }
          )
        }
      })
    },
    //产品按钮
    productForm() {
      this.productOpen = true;
      this.$refs['productform'].validate(valid => {
        if (valid) {
          axios.post('http://localhost:8080/system/product', this.productform).then(response => {
                console.log("response:", response)
                if (response != null && response.status === 200) {
                  this.$alert("提交成功");
                  this.status = response.status;
                  this.productOpen = false;
                  this.productReset();
                }
              }
          ).catch(error => {
                console.log(error),
                    this.$message({
                      type: 'error',
                      message: error + '  出现未知错误请联系管理员'
                    })
              }
          )
        }
      })
    },
    //讲师按钮
    lecturerForm() {
      this.lectureOpen = true;
      this.$refs['lecturerform'].validate(valid => {
        if (valid) {
          axios.post('http://localhost:8080/system/lecturer', this.lecturerform).then(response => {
                console.log("response:", response)
                if (response != null && response.status === 200) {
                  this.$alert("提交成功");
                  this.status = response.status;
                  this.lectureOpen = false;
                  this.lectureReset();
                }
              }
          ).catch(error => {
                console.log(error),
                    this.$message({
                      type: 'error',
                      message: error + '  出现未知错误请联系管理员'
                    })
              }
          )
        }
      })
    },
    routerToContact() {
      this.$router.push('/about')
    },
    auto() {
      return auto
    },
  },
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

.robotSystem:hover .robotSystemIn {
  display: block;
}

.robotSystemIn {
  display: none;
  background-color: grey;
  background-size: 100% auto;
  height: 300px;
  position: absolute;
  width: 100%;
  bottom: 0;

}

.moveRobot:hover .moveRobotIn {
  display: block;

}

.moveRobotIn {
  display: none;
  background-color: grey;
  background-size: 100% auto;
  height: 300px;
  position: absolute;
  width: 100%;
  bottom: 0;
}

.openPlat:hover .openPlatIn {
  display: block;
}

.openPlatIn {
  display: none;
  background-color: grey;
  background-size: 100% auto;
  height: 300px;
  position: absolute;
  width: 100%;
  bottom: 0;
}
.openPlat{
  border: 2px solid white;
  position: relative;
}
.moveRobot{
  border: 2px solid white;
  position: relative;
}
.robotSystem{
  border: 2px solid white;
  position: relative;
}




.platFormIn {
  display: none;
  margin-top: 50px;
  margin-left: 150px;
  width: 300px;
  font-size: 25px;
  text-align: left;
}

.platForm:hover .platFormIn {
  display: block;
  /*height: 500px;*/
}

.platForm:hover ~ .showPage {
  background-image: url("../../static/img/Home/u264.jpg");
}

.dataPlat:hover ~ .showPage {
  background-image: url("../../static/img/Home/u1634.jpg");
}
.serviceSystem:hover ~ .showPage {
  background-image: url("../../static/img/Home/u1240.png");
}
.hardware:hover ~ .showPage {
  background-image: url("../../static/img/Home/u1420.jpg");
}

.dataPlatIn {
  display: none;
  margin-top: 50px;
  margin-left: 150px;
  width: 300px;
  font-size: 25px;
  text-align: left;
}

.dataPlat:hover .dataPlatIn {
  display: block;
}

.serviceSystemIn {
  display: none;
  margin-top: 50px;
  margin-left: 150px;
  width: 300px;
  font-size: 25px;
  text-align: left;
}

.serviceSystem:hover .serviceSystemIn {
  display: block;
}

.hardwareIn {
  display: none;
  margin-top: 50px;
  margin-left: 150px;
  width: 300px;
  font-size: 25px;
  text-align: left;

}

.hardware:hover .hardwareIn {
  display: block;
}

.dataPlat {
  display: inline;
  float: left;
}



.serviceSystem {
  display: inline;
  float: left;
}

.hardware {
  display: inline;
  float: right;
}
.showPage{
  /*background-image: url(./static/img/Home/u3090.gif);*/
  background-image: url("../../static/img/Home/u3090.gif");
  background-size: cover;
  font-size: 40px;
  font-weight: bolder;
  color: white;
  text-align: center;
  width: 2400px;
  height: 1000px;
  margin: auto;
}
.platForm {
  display: inline;
  float: left;
  width: 600px;
  margin-top: 450px;

}
.dataPlat{
  width: 600px;
  height:1000px;
  background-color: rgba(51, 51, 51, 0.70);

}
.serviceSystem{
  width: 600px;
  height: 100%;
  margin-top: 450px;

}
.hardware{
  width: 600px;
  height: 1000px;
  background-color: rgba(51, 51, 51, 0.70);

}
</style>
