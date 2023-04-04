<template>
  <div id="About">
    <el-container id="top-img"
                  style="background-image: url(static/img/Contact/u2074.jpg);
                  background-position: center;
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
                联系我们
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
              山东亚历山大智能科技有限公司<br>
              服务热线：13065039691
            </el-row>
          </el-main>
        </el-container>
      </el-main>
      <el-footer id="img-footer" style="background: #0d64e8;color: white;font-size: 30px">
        联系我们
      </el-footer>
    </el-container>
    <br>
    <br>
    <el-container>
      <div >
        <el-row :gutter="24">
          <el-col :span="2">
            <br>
          </el-col>
          <el-col :span="10">
            <img src="static/img/Contact/u3512.png"
                 style="width: 120%">
          </el-col>
          <el-col :span="2">
            <br>
          </el-col>
          <el-col :span="10">
            <div>
              <el-row :gutter="24" style="font-size: 26px">
                <el-col :span="2">
                  <br>
                </el-col>
                <el-col :span="22">
                  <br>
                  <br>
                  办公地址：山东省济南市历下区经十路13777号中润世纪城9号楼102
                  <br>
                  <br>
                  工作时间：周一至周日9:00-22:00
                  <br>
                  <br>
                  联系电话：13065039691
                  <br>
                  <br>
                  企业邮箱：xbc@alesmart.com
                  <br>
                  <br>
                  备案编号：鲁ICP备17053761号-1
                  <br><br>
                </el-col>

              </el-row>
            </div>
          </el-col>
          <el-col :span="1">
            <br>
            <br>
            <br>
          </el-col>
        </el-row>
      </div>
    </el-container>
    <el-row>
      <br>
      <br>
      <br>
      <br>
    </el-row>
    <el-container id="bottom">
      <el-main style="background: #0d64e8;font-size: 25px">
        <el-row :gutter="24">
          <el-col :span="10" style="color: white;text-align: left;font-size: 32px">
            欢迎致电我们:13065039691
          </el-col>
          <el-col :span="2">
          </el-col>
          <el-col :span="14" style="text-align: right;font-size: 20px">
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
      pagetitle: '',
      email: '',
      phone: '',
      address: '',
      formInline: {
        name: "",
        phone: "",
        company: "",
        email: "",
        content: ""
      },
      rules: {
        name: [
          {required: true, message: "请输入姓名", trigger: "blur"},
          {min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur"}
        ],
        phone: [{required: true, message: "请输入联系电话", trigger: "blur"}],
        email: [{required: true, message: "请输入联系邮箱", trigger: "blur"}],
        company: [
          {required: true, message: "请输入公司名称", trigger: "blur"}
        ],
        content: [{required: true, message: "请输入留言", trigger: "blur"}]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.createEntity();
          this.$refs[formName].resetFields();
        } else {
          this.$message({
            type: "error",
            message: "请检查填写要求"
          });
          return false;
        }
      });
    },
    createEntity() {
      axios
          .post("/message/CreateMessage", {
            Id: this.formInline.id,
            IsMess: false,
            Name: this.formInline.name,
            Phone: this.formInline.phone,
            Email: this.formInline.email,
            Company: this.formInline.company,
            Content: this.formInline.content
          })
          .then(response => {
            console.log(response.status);
            this.$message({
              type: "success",
              message: "留言成功!"
            });
          })
    }
  },
  created: function () {
    axios
        .get("/DataDictionary/GetDataDictionaryAll", {
          params: {
            key: "联系我们标题,邮箱,电话,地址"
          }
        })
        .then(response => {
          this.pagetitle = response.data[0].Content;
          this.email = response.data[1].Content;
          this.phone = response.data[2].Content;
          this.address = response.data[3].Content;
        })
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
