<template>
  <div id="About">
    <el-container id="top-img">
      <el-row style="width: 100%;height:400px;">
        <el-col :span="15" style="background-color: #adaaa7;height: 100%">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col :span="3" style="padding-top: 50px;padding-left: 30px;margin-right: 80px">
              <img src="static/img/MobileRobot/u3.png" style="width: 150px;height: 150px;">
            </el-col>
            <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">GomROS</span>
                <span style="font-size: 18px;color: #0D64E8;font-weight: bolder">工业基础软件</span></p>
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">联系我们</span></p>
              <p style="font-size: 30px;color: white;text-shadow: none;font-weight: bolder;margin-right: 28%">
                山东亚历山大智能科技有限公司
                <br>服务热线：13065039691</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="9"
                style="height:100%;background-image: url(static/img/Contact/u2074.jpg);background-size: cover;filter: grayscale(60%)">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer style="background-color: #0d64e8">
        <p style="font-size: 30px;font-weight: bolder;color: white;margin-top: 10px;margin-bottom:0;margin-left: 5%">
          联系我们</p>
      </el-footer>
    </el-container>
    <br>
    <br>
    <el-container>
      <div>
        <el-row :gutter="24">
          <el-col :span="2">
            <br>
          </el-col>
          <el-col :span="10">
            <img src="static/img/Contact/u3512.png" style="width: 100%;margin-top: 5%;">
          </el-col>
          <el-col :span="10" style="margin-left: 5%;margin-top: 3%;">
            <el-row :gutter="24" style="font-size: 20px;font-weight: bolder">
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

    <el-container style="width: 100%">
      <el-main style="background: #0d64e8;font-size: 30px;">
        <el-row :gutter="24" style="padding-top: 0;padding-bottom: 0">
          <el-col :span="13" style="color: white;text-align: left;font-size: 35px;font-weight: bolder;padding-left: 5%">
            欢迎致电我们:13065039691
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

export default {
  name: "About",
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

.require-box {
  border: 1px solid #1767a1;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}
</style>
