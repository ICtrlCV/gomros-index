<template>
  <div id="case-box">
    <el-container id="top-content"
                  style="height:400px;background-image: url(./static/robot_operate_system/u160.jpg);background-size: cover">
      <el-row type="flex" justify="start" style="padding: 10px">
        <el-col :span="3" style="padding-top: 50px;padding-left: 30px">
          <img src="static/robot_operate_system/u3.png" style="width: 150px;height: 150px;">
        </el-col>
        <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 8px #0D64E8">
          <el-row style="padding: unset">
            <p><span style="font-size: 60px;color: white">GomROS</span>
              <span style="font-size: 20px;color: white">工业基础软件</span></p>
          </el-row>
          <el-row style="padding: unset">
            <p><span style="font-size: 60px;color: white">机器人操作系统</span>
              <span style="font-size: 20px;color: white">机器人系统软件</span></p>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="padding: unset">
        <el-col :span="2" style="width: 240px;height: 200px"></el-col>
        <el-col :span="10">
          <p style="font-size: 35px;color: white">GomROS（句芒）是一款为机器人、自动化设备等高端智能装备提供的国产原创操作系统</p>
        </el-col>
        <el-col :span="3" style="height: 200px;width: 240px;"></el-col>
      </el-row>
      <br>
      <el-footer></el-footer>
    </el-container>

    <div>
      <el-row style="margin: unset">
        <el-col :span="10" style="align-content: center">
          <el-row :gutter="5" type="flex">
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u21.gif" style="width: 300px;height: 200px">
            </el-col>
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u702.gif" style="width: 300px;height: 200px">
            </el-col>
          </el-row>
          <el-row :gutter="5" type="flex">
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u27.gif" style="width: 300px;height: 200px">
            </el-col>
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u704.gif" style="width: 300px;height: 200px">
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12" style="margin-left: 80px">
          <h4>{{ '什么是机器人操作系统？' }}</h4>
          <p style="font-size: 30px">GomROS机器人操作系统</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是一组软件库和工具,能够帮助您快速构建机器人应用程序。从控制程序到先进算法的集合，并且借助强大的开发人员工具，让您可以快速搭建机器人项目。</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您需要的软件系统，我们已经给您封装好了，您可以随时调用。</p>
          <h5 @click="$router.push({ path: `/caseDetail/1` })">
            <i class="el-icon-caret-right"></i>更多
          </h5>
        </el-col>
      </el-row>
      <el-row>
        <img src="static/robot_operate_system/r01.jpg">
      </el-row>
      <hr/>
      <el-row style="margin: unset">
        <el-col :span="12" style="margin-left: 80px">
          <h4>{{ '为什么做机器人操作系统？' }}</h4>
          <p style="font-size: 30px">GomROS机器人操作系统</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在经历了2018年以来的&quot;卡脖子&quot;风波之后，以工业软件、基础软件为代表的核心技术，自主研发自主拥有知识产权的需求更为强烈。</p>
          <p style="font-size: 30px">欢迎您加入我们的开发者队伍，我们一起打造国产基础软件系统。</p>
          <h5 @click="$router.push({ path: `/caseDetail/1` })">
            <i class="el-icon-caret-right"></i>更多
          </h5>
        </el-col>
        <el-col :span="10" style="align-content: center">
          <el-row :gutter="5" type="flex">
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u779.png" style="width: 80%;height: 200px">
            </el-col>
          </el-row>
          <el-row :gutter="5" type="flex">
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u780.png" style="width: 80%;height: 200px">
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <hr/>
      <el-row style="margin: unset">
        <el-col :span="10" style="align-content: center">
          <el-row :gutter="5" type="flex">
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u800.gif" style="width: 300px;height: 200px">
            </el-col>
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u801.gif" style="width: 300px;height: 200px">
            </el-col>
          </el-row>
          <el-row :gutter="5" type="flex">
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u802.gif" style="width: 300px;height: 200px">
            </el-col>
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u803.gif" style="width: 300px;height: 200px">
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12" style="margin-left: 80px">
          <h4>{{ '机器人操作系统有哪些应用？' }}</h4>
          <p style="font-size: 30px">GomROS机器人操作系统</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可用于多种行业、可用于多种类型机器人开发、可用于各类硬件设备驱动和控制。</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GomROS可以帮助您快速完成机器人开发项目。</p>
          <h5 @click="$router.push({ path: `/robotOperateSystem` })">
            <i class="el-icon-caret-right"></i>更多
          </h5>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex">
        <el-col>
          <img src="static/robot_operate_system/u785.png" style="height:200px;width: 200px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u786.png" style="height:200px;width: 200px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u787.png" style="height:200px;width: 200px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u788.png" style="height:200px;width: 200px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u789.png" style="height:200px;width: 200px;">
        </el-col>
      </el-row>
      <el-row :gutter="5" type="flex">
        <el-col>
          <img src="static/robot_operate_system/u790.jpg" style="height:100px;width: 100px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u791.png" style="height:100px;width: 100px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u792.png" style="height:100px;width: 100px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u793.png" style="height:100px;width: 100px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u794.png" style="height:100px;width: 100px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u795.png" style="height:100px;width: 100px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u796.jpg" style="height:100px;width: 100px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u797.jpg" style="height:100px;width: 100px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u798.png" style="height:100px;width: 100px;">
        </el-col>
        <el-col>
          <img src="static/robot_operate_system/u799.jpg" style="height:100px;width: 100px;">
        </el-col>
      </el-row>
      <hr/>
      <el-row style="margin: unset">
        <el-col :span="12" style="margin-left: 80px">
          <h4>{{ '我们的应用案例' }}</h4>
          <p style="font-size: 30px">GomROS机器人操作系统</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的服务机器人和搬运机器人全部基于GomROS系统搭建。</p>
          <p style="font-size: 30px">参考我们的机器人开发项目。</p>
        </el-col>
        <el-col :span="10" style="align-content: center">
          <el-row :gutter="5" type="flex">
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u779.png" style="width: 80%;height: 200px">
            </el-col>
          </el-row>
          <el-row :gutter="5" type="flex">
            <el-col>
              <img class="img-box" src="static/robot_operate_system/u780.png" style="width: 80%;height: 200px">
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-container id="bottom">
        <el-aside width="50px"><br></el-aside>
        <el-main style="background: #0d64e8;font-size: 30px">
          <el-row :gutter="24">
            <el-col :span="11" style="color: white;text-align: left;font-size: 35px;font-weight: bolder">
              欢迎咨询GomRos系统相关专家获取解决方案
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="13" style="text-align: right;">
              <el-button @click="$router.push('/about')"
                         style="font-size: 30px; background-color: #0d64e8;border-color: white;color: white">
                联系我们
              </el-button>
            </el-col>
          </el-row>
        </el-main>
        <el-aside width="50px">
          <br>
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<script>
import axios from "../router/http";

export default {
  data() {
    return {
      pagetitle: '',
      tbdata: []
    };
  },
  methods: {
    getdataall() {
      // var sessiondata = JSON.parse(sessionStorage.getItem("caseData"));
      // if (sessiondata != null) {
      //   this.tbdata = sessiondata;
      // } else {
      axios
          .get("/cases/GetCasesAll")
          .then(response => {
            this.tbdata = response.data;
            //sessionStorage.setItem("caseData", JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      // }
    }
  },
  created: function () {
    this.getdataall();
    axios
        .get("/DataDictionary/GetDataDictionaryAll", {
          params: {
            key: "经典案例标题"
          }
        })
        .then(response => {
          this.pagetitle = response.data[0].Content;
        })
        .catch(function (error) {
          console.log(error);
        });
  }
};
</script>

<style scoped>
#case-box {
  background-color: #f2f6fa;
}
#content-box {
  width: 85%;
  margin: 0 auto;
  background: #fff url(../../static/waitanbg.png) no-repeat bottom center;
}

.img-box img:hover {
  animation: pulse 1s;
}

.img-box {
  text-align: center;
}

.el-row {
  padding: 2% 4%;
  animation: flipInX 1s;
}

.el-col h4 {
  font-size: 40px;
  color: #0D64E8;
  transition: 0.4s;
}

.el-col h5:hover {
  color: #e13834;
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

.el-col h5 {
  font-size: 18px;
  color: #808080;
  cursor: pointer;
}
</style>
