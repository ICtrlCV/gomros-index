<template>
  <div id="scenario-service">
    <el-container id="top-content" style="height:400px;">
      <el-row style="width: 100%">
        <el-col :span="13" style="background-color: #010f1b">
          <el-row type="flex" justify="start" style="padding: 10px">
            <el-col :span="3" style="padding-top: 50px;padding-left: 30px;margin-right: 100px">
              <img src="static/img/MobileRobot/u3.png" style="width: 150px;height: 150px;">
            </el-col>
            <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 5px white">
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">移动机器人</span></p>
              <p><span style="font-size: 60px;color: #0D64E8;font-weight: bolder">场景服务系统</span>
                <span style="font-size: 20px;color: #0D64E8;font-weight: bolder">移动机器人基础服务系统</span></p>
              <p style="font-size: 30px;color: white;margin-right: 8%;text-shadow: none">
                场景服务系统是服务于各种应用场景，支撑各类管理系统的互联互通。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="11"
                style="height:100%;background-image: url(../../static/img/scenarioService/u1234.png);background-size: cover">
          &nbsp;
        </el-col>
      </el-row>
      <el-footer style="background-color: #0d64e8">
        <p style="font-size: 30px;font-weight: bolder;color: white;margin-top: 10px;margin-left: 3%">移动机器人场景服务系统</p>
      </el-footer>
    </el-container>

    <div style="margin-top: 10px;">
      <!--    第一行 机器人场景服务系统  -->
      <el-row :gutter="20" type="flex" style="background-color: white">
        <el-col :span="8" style="margin-top:2%;margin-left: 6%;margin-right: 8%">
          <p style="font-size: 30px;font-weight: bolder;color: #0d64e8">机器人场景服务系统</p>
          <p style="font-size: 25px;font-weight: bolder;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;移动机器人在执行任务时，需要调度系统进行任务分配及路径规划等支撑，同时需要对接各类管理系统进行资源调用或结果反馈。</p>
          <p style="font-size: 30px;font-weight: bolder;color: #0d64e8">让机器人集群能协调在一起工作，互相合作又互不影响，发挥出最大的效能。</p>
        </el-col>
        <el-col :span="12" style="align-content: center;margin-top: 5%">
          <el-row style="margin-bottom: 2px;text-align: center">
            <el-col :span="2">
              <p style="font-size: 20px;font-weight: bolder;margin-top: 2px;margin-bottom: 2px">ERP</p>
            </el-col>
            <el-col :span="3">
              <el-row>
                <img src="static/img/scenarioService/u1263p000.png">
              </el-row>
              <el-row>
                <img src="static/img/scenarioService/u1263p003.png">
              </el-row>
            </el-col>
            <el-col :span="2">
              <p style="font-size: 20px;font-weight: bolder;margin-top: 2px;margin-bottom: 2px">MES</p>
            </el-col>
            <el-col :span="3">
              <el-row>
                <img src="static/img/scenarioService/u1263p000.png">
              </el-row>
              <el-row>
                <img src="static/img/scenarioService/u1263p003.png">
              </el-row>
            </el-col>
            <el-col :span="2">
              <p style="font-size: 20px;font-weight: bolder;margin-top: 2px;margin-bottom: 2px">WMS</p>
            </el-col>
            <el-col :span="3">
              <el-row>
                <img src="static/img/scenarioService/u1263p000.png">
              </el-row>
              <el-row>
                <img src="static/img/scenarioService/u1263p003.png">
              </el-row>
            </el-col>
            <el-col :span="4">
              <p style="font-size: 20px;font-weight: bolder;margin-top: 2px;margin-bottom: 2px">AGV调度系统</p>
            </el-col>
          </el-row>
          <img class="img-box" src="static/img/scenarioService/u1257.png" style="width: 75%;height: 65%;">
        </el-col>
      </el-row>

      <!--    第二行 AGV调度系统  -->
      <el-row style="margin-bottom: 2%">
        <el-col style="width:100%;margin-left: 6%">
          <el-row>
            <p style="font-size: 30px;font-weight: bolder;color: #0d64e8">AGV调度系统</p>
          </el-row>
          <el-row style="text-align: left;height: 100%">
            <el-col :span="12" style="margin-left: 5%;margin-right: 2%">
              <p style="width: 80%;height:240px;padding: 5px;border:2px solid #0d64e8;">
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机器人调度系统，负责全部机器人的任务分配、调度及运行监控。调度系统采用基于深度强化学习的人工智能调度算法，
                实现了任务的最优分配、多机器人路径规划以及机器人交通管理。调度系统还负责监控机器人的运行状态，根据每个机器人的历史情况和当前状态，来决定是否需要进行具体项目的保养维护，
                并结合充电站的运行状态和当前的任务执行情况，合理的安排有需要的机器人进行自主充电，补充能源，并记录分析和汇总全部机器人的告警信息，及时通知运维人员，给出相应的检查和处理的建议，
                保障整个系统运行的可靠性。
                <br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在整个工厂生产制造过程中，AGV调度系统可以与MES(制造执行系统)、ERP内部管理系统等进行数据交换实现无缝对接。
                包括MES或ERP查询AGV调度系统中当前正在执行或排队等待执行的任务信息;MES或ERP向AGV调度系统下达任务信息，AGV调度系统向MES或ERP返回任务标识等。
              </p>
            </el-col>
            <el-col :span="8">
              <img class="img-box" src="static/img/scenarioService/u1269.gif" style="width: 75%;height: 60%;">
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第三行  WMS智能仓储管理系统 -->
      <el-row style="background-color: white">
        <el-col style="width:100%;margin-left: 6%;margin-bottom:2%">
          <el-row>
            <p style="font-size: 30px;font-weight: bolder;color: #0d64e8">WMS智能仓储管理系统</p>
          </el-row>
          <el-row style="text-align: left;height: 100%">
            <el-col :span="12" style="margin-left: 5%;margin-right: 2%">
              <p style="width: 80%;height:240px;padding: 5px;border:2px solid #0d64e8;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                WMS是仓库管理系统(Warehouse Management System) 的缩写，仓库管理系统是通过入库业务、出库业务、仓库调拨、库存调拨和虚仓管理等功能，对批次管理、物料对应、库存盘点、
                质检管理、虚仓管理和即时库存管理等功能综合运用的管理系统，有效控制并跟踪仓库业务的物流和成本管理全过程，实现或完善企业的仓储信息管理。该系统可以独立执行库存操作，
                也可与其他系统的单据和凭证等结合使用，可为企业提供更为完整企业物流管理流程和财务管理信息。
                <br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WMS是仓储管理系统，综合了入库管理、出库管理、物料对应、库存盘点、虚仓管理、库存统计等诸多功能，有效控制并跟踪仓库的物流，
                实现完善的企业仓储信息管理，并可以与EPR、MES、WCS等多种软件系统对接，更好地提高企业管理的深度和广度。
              </p>
            </el-col>
            <el-col :span="8">
              <img class="img-box" src="static/img/scenarioService/u1272.gif" style="width: 75%;height: 240px;">
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第四行  MES制造执行系统 -->
      <el-row style="margin-bottom: 2%">
        <el-col style="width:100%;margin-left: 6%">
          <el-row>
            <p style="font-size: 30px;font-weight: bolder;color: #0d64e8">MES制造执行系统</p>
          </el-row>
          <el-row style="text-align: left;height: 100%">
            <el-col :span="12" style="margin-left: 5%;margin-right: 2%">
              <p style="width: 80%;height:240px;padding: 5px;border:2px solid #0d64e8;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MES即制造执行系统（Manufacturing Execution System），它是一套面向制造企业车间执行层的生产信息化管理系统，
                可以为企业提供包括制造数据管理、计划排程管理、生产调度管理、库存管理、质量管理、人力资源管理、工作中心/设备管理等等多项管理模块。通过这些管理模块对整个车间制造过程进行优化管理，
                从而提高生产效率和质量。
                <br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MES从ERP得到生产指令，通过各类移动终端报工，搜集生产信息、设备信息和质量信息等相应生产信息。MES就相当于车间的中枢神经，
                连接各个部门，指引控制所有生产活动。又像管理者的眼睛般，帮助他们掌握工厂的一举一动。
              </p>
            </el-col>
            <el-col :span="8">
              <img class="img-box" src="static/img/scenarioService/u1276.gif" style="width: 75%;height: 60%;">
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第五行 ERP企业资源计划管理系统  -->
      <el-row style="background-color: white;margin-bottom: 2%">
        <el-col style="width:100%;margin-left: 6%;margin-bottom:2%">
          <el-row>
            <p style="font-size: 30px;font-weight: bolder;color: #0d64e8">ERP企业资源计划管理系统</p>
          </el-row>
          <el-row style="text-align: left;height: 100%">
            <el-col :span="12" style="margin-left: 5%;margin-right: 2%">
              <p style="width: 80%;height:240px;padding: 5px;border:2px solid #0d64e8;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERP是一种主要面向制造行业进行物质资源、资金资源和信息资源集成一体化管理的企业信息管理系统。ERP是一个以管理会计为核心可以提供跨地区、
                跨部门、甚至跨公司整合实时信息的企业管理软件。针对物资资源管理（物流）、人力资源管理（人流）、财务资源管理（财流）、信息资源管理（信息流）集成一体化的企业管理软件。
                <br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERP 系统的全局性管理和 MES 的精准化生产调度结合起来，进行统筹规划，能提升企业的管理信息化水平。ERP 系统和 MES
                之间的一体化运作和数据交互畅通成为企业高效化、精细化和智能化管理的基础。
              </p>
            </el-col>
            <el-col :span="8">
              <img class="img-box" src="static/img/scenarioService/u1279.gif" style="width: 75%;height: 60%;">
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--    第六行  数字化工厂管理系统 -->
      <el-row>
        <el-col style="width:100%;margin-left: 6%;margin-bottom:2%">
          <el-row>
            <p style="font-size: 30px;font-weight: bolder;color: #0d64e8">数字化工厂管理系统</p>
          </el-row>
          <el-row style="text-align: left;height: 100%">
            <el-col :span="8" style="margin-left: 9%;margin-right: 4%">
              <img class="img-box" src="static/img/scenarioService/u1403.png" style="width: 100%;height:400px;">
            </el-col>
            <el-col :span="8">
              <img class="img-box" src="static/img/scenarioService/u1280.png" style="width: 100%;height: 400px;">
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--      底部     -->
      <el-container id="bottom" style="width: 100%">
        <el-aside width="50px"><br></el-aside>
        <el-main style="background: #0d64e8;font-size: 30px;width: 100%">
          <el-row :gutter="24">
            <el-col :span="11" style="color: white;text-align: left;font-size: 35px;font-weight: bolder">
              欢迎咨询场景服务相关产品
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
export default {
  name: "ScenarioService"
}
</script>

<style scoped>

#scenario-service {
  background-color: #f2f6fa;
}

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