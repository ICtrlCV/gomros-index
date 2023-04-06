<template>
  <div id="education">
    <el-container id="top-img">
      <el-row style="width: 100%;height:400px;">
        <el-col :span="15" style="background-color: #435b7f;height: 100%">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col :span="3" style="padding-top: 50px;padding-left: 30px;margin-right: 80px">
              <img src="static/img/MobileRobot/u3.png" style="width: 150px;height: 150px;">
            </el-col>
            <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">GomROS</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">工业基础软件</span></p>
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">生态合作</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">教育培训合作</span></p>
              <p style="font-size: 30px;color: white;text-shadow: none;font-weight: bolder;margin-right: 28%">致力于培养GomROS开发人才，与合作伙伴共建生态，促进行业发展。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="9"
                style="height:100%;background-image: url(../../static/img/Education/ccc__u2048.jpg);background-size: cover">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer style="background-color: #0d64e8">
        <p style="font-size: 30px;font-weight: bolder;color: white;margin-top: 10px;margin-bottom:0;margin-left: 5%">移动机器人硬件驱动及控制系统</p>
      </el-footer>
    </el-container>


    <el-container>
      <el-aside width="100px">
        <br>
      </el-aside>
      <el-main>
        <div style="color: white;text-align: center">
          <el-row>
            <el-col
                style="width: 50%;
                background-image: url(static/img/Education/u2063.jpg);
                  background-position: center;
                  background-size: cover;
                  height: 300px;
                  ">
              <div>
                <br>
                <br>
                <br>
                <br>
                <el-row>
                  培训
                </el-row>
                <el-row>
                  面向客户提供GomROS平台应用培训
                </el-row>
                <el-row>
                  <el-button
                      @click="trainForm()"
                      style="background-color: white;color: black;border-color: #4e5559">
                    申请合作
                  </el-button>
                </el-row>
              </div>
            </el-col>
            <el-col
                style="width: 50%;
                background-image: url(static/img/Education/u2074.jpg);
                background-size: cover;
                height: 300px;">
              <div>
                <br>
                <br>
                <br>
                <br>
                <el-row>
                  校企合作
                </el-row>
                <el-row>
                  协同创新，助力院校开设GomROS相关课程
                  及专业，加速推进机器人产业人才培养。
                </el-row>
                <el-row>
                  <el-button
                      @click="schoolForm()"
                      style="background-color: white;color: black;border-color: #4e5559">
                    申请合作
                  </el-button>
                </el-row>
              </div>
            </el-col>
          </el-row>
<!--          <el-row>-->
<!--            <br>-->
<!--          </el-row>-->
          <el-row>
            <el-col
                style="width: 50%;
                background-image: url(static/img/Education/u2085.jpg);
                background-size: cover;
                height: 300px;">
              <div>
                <br>
                <br>
                <br>
                <br>
                <el-row>
                  产品
                </el-row>
                <el-row>
                  面向客户提供更多GomROS产品及服务，期待更多合作伙伴加入我们
                </el-row>
                <el-row>
                  <el-button
                      @click="productForm()"
                      style="background-color: white;color: black;border-color: #4e5559">
                    申请合作
                  </el-button>
                </el-row>
              </div>
            </el-col>
            <el-col
                style="width: 50%;
                background-image: url(static/img/Education/u2095.jpg);
                background-size: cover;
                height: 300px">
              <div>
                <br>
                <br>
                <br>
                <br>
                <el-row>
                  讲师合作
                </el-row>
                <el-row>
                  热衷知识传播并致力于在机器人领域发展的个人或组织加入。
                </el-row>
                <el-row>
                  <el-button
                      @click="lecturerForm()"
                      style="background-color: white;color: black;border-color: #4e5559">
                    申请合作
                  </el-button>
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

    <el-container style="background-color: #f2f6fa">
      <el-header style="text-align: center;color: #0d64e8">
        <h1><b>我们的资源支持</b></h1>
        <br>
      </el-header>
      <el-aside width="200px"></el-aside>
      <el-main style="color: #0d64e8;">
        <br>
        <div>
          <el-row :gutter="24" style="text-align: center;line-height: normal">
            <el-col :span="6">
              <img src="static/img/Education/u2438.png"
                   style="width: 280px;height: 170px">
            </el-col>
            <el-col :span="6">
              <img src="static/img/Education/u2439.jpg"
                   style="width: 280px;height: 170px">
            </el-col>
            <el-col :span="6">
              <img src="static/img/Education/u2440.jpg"
                   style="width: 280px;height: 170px">
            </el-col>
            <el-col :span="6">
              <img src="static/img/Education/u2441.jpg"
                   style="width: 280px;height: 170px">
            </el-col>
          </el-row>
          <el-row :gutter="24" style="text-align: center;font-size: 18px; ">
            <el-col :span="6">
              <b>
                学习资源
              </b>
            </el-col>
            <el-col :span="6">
              <b>
                专家讲师
              </b>
            </el-col>
            <el-col :span="6">
              <b>
                项目实践
              </b>
            </el-col>
            <el-col :span="6">
              <b>
                就业支持
              </b>
            </el-col>
          </el-row>
          <el-row :gutter="24" style="text-align: center;font-size: 14px">
            <el-col :span="6">
              我们有丰富的学习资源，用于帮助我们的合作伙伴快速学习使用GomROS平台。
            </el-col>
            <el-col :span="6">
              我们有经验丰富的专家讲师辅导我们的合作伙伴，迅速吸收理解所学知识。
            </el-col>
            <el-col :span="6">
              我们很多项目合作开发，合作伙伴对于高质量人才有强烈需求。
            </el-col>
            <el-col :span="6">
              我们有丰富的学习资源，用于帮助我们的合作伙伴快速学习使用GomROS平台。
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-aside width="200px"></el-aside>
    </el-container>
    <el-container id="bottom">

      <el-main style="background: #0d64e8;font-size: 25px">
        <el-row :gutter="24">
          <el-col :span="10" style="color: white;text-align: left">
            欢迎咨询教育培训合作相关产品
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


    <!--培训对话框-->
    <el-dialog :title="title" :visible.sync="trainOpen" width="1200px" append-to-body>
      <el-form ref="trainform" :model="trainform" :rules="trainRules" label-width="100px" style="text-align: center">
        <el-form-item
            style="font-size: larger;
            color: #0d64e8;
            text-align: center"
            label-width="0px">
          <h1>
            培训申请
          </h1>
        </el-form-item>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人姓名" prop="applicantName">
              <el-input v-model="trainform.applicantName" placeholder="请输入申请人姓名"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所在行业" prop="industry">
              <el-input v-model="trainform.industry" placeholder="请输入所在行业"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位名称" prop="companny">
              <el-input v-model="trainform.companny" placeholder="请输入单位名称"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人职务" prop="applicantJob">
              <el-input v-model="trainform.applicantJob" placeholder="请输入申请人职务"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系电话" prop="telephone">
              <el-input v-model="trainform.telephone" placeholder="请输入联系电话"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系邮箱" prop="mail">
              <el-input v-model="trainform.mail" placeholder="请输入联系邮箱"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <br><br><br><br><br>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="举办城市" prop="city">
              <el-input v-model="trainform.city" placeholder="请输入举办城市"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="举办场地" prop="local">
              <el-input v-model="trainform.local" placeholder="请输入举办场地"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="举办时间" prop="date">
              <el-input v-model="trainform.date" placeholder="请输入举办时间"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="举办主题" prop="theme">
              <el-input v-model="trainform.theme" placeholder="请输入举办主题"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="培训规模" prop="scale">
              <el-input v-model="trainform.scale" placeholder="请输入培训规模"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="培训受众" prop="audiences">
              <el-input v-model="trainform.audiences" placeholder="请输入培训受众"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="培训需求" prop="demand">
            <el-input v-model="trainform.demand" type="textarea" :rows="4" placeholder="请输入内容"/>
          </el-form-item>
        </el-row>
      </el-form>
      <br><br>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="trainForm()">确 定</el-button>
        <el-button @click="trainCancel()">取 消</el-button>
      </div>
    </el-dialog>

    <!--    校企合作对话框-->
    <el-dialog :title="title" :visible.sync="schoolOpen" width="1200px" append-to-body>
      <el-form ref="schoolform" :model="schoolform" :rules="schoolRules" label-width="100px" style="text-align: center">
        <el-form-item
            style="font-size: larger;
            color: #0d64e8;
            text-align: center"
            label-width="0px">
          <h1>
            高校合作申请
          </h1>
        </el-form-item>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人姓名" prop="applicantName">
              <el-input v-model="schoolform.applicantName" placeholder="请输入申请人姓名"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="高校名称" prop="schoolName">
              <el-input v-model="schoolform.schoolName" placeholder="请输入高校名称"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="专业名称" prop="majorName">
              <el-input v-model="schoolform.majorName" placeholder="请输入专业名称"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人职务" prop="applicantJob">
              <el-input v-model="schoolform.applicantJob" placeholder="请输入申请人职务"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系电话" prop="telephone">
              <el-input v-model="schoolform.telephone" placeholder="请输入联系电话"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系邮箱" prop="mail">
              <el-input v-model="schoolform.mail" placeholder="请输入联系邮箱"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <br><br><br>
        </el-row>
        <el-row :gutter="24">
          <el-form-item label="合作需求" prop="demand">
            <el-input v-model="schoolform.demand" type="textarea" :rows="4" placeholder="请输入内容"/>
          </el-form-item>
        </el-row>
      </el-form>
      <br><br><br><br>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="schoolForm()">确 定</el-button>
        <el-button @click="schoolCancel()">取 消</el-button>
      </div>
    </el-dialog>
    <!--产品对话框-->
    <el-dialog :title="title" :visible.sync="productOpen" width="1200px" append-to-body>
      <el-form ref="productform" :model="productform" :rules="productRules" label-width="100px"
               style="text-align: center">
        <el-form-item
            style="font-size: larger;
            color: #0d64e8;
            text-align: center"
            label-width="0px">
          <h1>
            产品合作申请
          </h1>
        </el-form-item>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人名称" prop="applicantName">
              <el-input v-model="productform.applicantName" placeholder="请输入申请人名称"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="合作项目" prop="project">
              <el-input v-model="productform.project" placeholder="请输入合作项目"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位名称" prop="companyName">
              <el-input v-model="productform.companyName" placeholder="请输入单位名称"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人职务" prop="applicantJob">
              <el-input v-model="productform.applicantJob" placeholder="请输入申请人职务"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系电话" prop="telephone">
              <el-input v-model="productform.telephone" placeholder="请输入联系电话"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系邮箱" prop="mail">
              <el-input v-model="productform.mail" placeholder="请输入联系邮箱"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <br><br><br>
        </el-row>
        <el-row :gutter="24">
          <el-form-item label="产品需求" prop="demand">
            <el-input v-model="productform.demand" type="textarea" :rows="4" placeholder="请输入内容"/>
          </el-form-item>
        </el-row>
      </el-form>
      <br><br><br>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="productForm">确 定</el-button>
        <el-button @click="productCancel()">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 添加或修改教育培训合作-讲师申请对话框 -->
    <el-dialog :title="title" :visible.sync="lectureOpen" width="1200px" append-to-body>
      <el-form ref="lecturerform" :model="lecturerform" :rules="lecturerRules" label-width="100px">
        <el-form-item
            style="font-size: larger;
            color: #0d64e8;
            text-align: center"
            label-width="0px">
          <h1>
            讲师申请
          </h1>
        </el-form-item>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人姓名" prop="applicantName">
              <el-input v-model="lecturerform.applicantName" placeholder="请输入申请人姓名"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="申请人性别" prop="applicantSex">
              <el-input v-model="lecturerform.applicantSex" placeholder="请输入申请人性别"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位名称" prop="companyName">
              <el-input v-model="lecturerform.companyName" placeholder="请输入单位名称"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人职务" prop="applicantJob">
              <el-input v-model="lecturerform.applicantJob" placeholder="请输入申请人职务"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系电话" prop="telephone">
              <el-input v-model="lecturerform.telephone" placeholder="请输入联系电话"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系邮箱" prop="mail">
              <el-input v-model="lecturerform.mail" placeholder="请输入联系邮箱"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="申请人学历" prop="educationBackgroud">
              <el-input v-model="lecturerform.educationBackgroud" placeholder="请输入申请人学历"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="出生日期" prop="birthTime">
              <el-date-picker clearable
                              v-model="lecturerform.birthTime"
                              type="date"
                              value-format="yyyy-MM-dd"
                              placeholder="请选择出生日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="专业方向" prop="major">
              <el-input v-model="lecturerform.major" placeholder="请输入专业方向"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <br><br><br>
        </el-row>
        <el-row :gutter="24">
          <el-form-item label="个人信息" prop="information">
            <el-input v-model="lecturerform.information" type="textarea" :rows="4" placeholder="请输入内容"/>
          </el-form-item>
        </el-row>
      </el-form>
      <br><br><br><br>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="lecturerForm()">确 定</el-button>
        <el-button @click="lecturerCancel()">取 消</el-button>
      </div>
    </el-dialog>

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
</style>
