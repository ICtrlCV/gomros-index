<template>
  <div id="cloud-platform">
    <el-container id="top-content"
                  style="height:400px;background-image: url(static/img/cloudPlatform/u265.jpg);background-size: contain">
      <el-row type="flex" justify="start" style="padding: 10px">
        <el-col :span="3" style="padding-top: 50px;padding-left: 30px">
          <img src="static/img/MobileRobot/u3.png" style="width: 150px;height: 150px;">
        </el-col>
        <el-col :span="20" style="margin-top: 5px;margin-left: 5px;text-shadow: 2px 2px 8px #0D64E8">
          <el-row style="padding: unset">
            <p><span style="font-size: 60px;color: white">移动机器人</span></p>
          </el-row>
          <el-row style="padding: unset">
            <p><span style="font-size: 60px;color: white">云平台</span>
              <span style="font-size: 20px;color: white">移动机器人基础服务平台</span></p>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="padding: unset">
        <el-col :span="2" style="width: 240px;height: 200px"></el-col>
        <el-col :span="10">
          <p style="font-size: 35px;color: white">云平台是为客户和合作伙伴提供软硬件一体的整体产品基础服务平台。</p>
        </el-col>
        <el-col :span="3" style="height: 200px;width: 240px;"></el-col>
      </el-row>
      <br>
      <el-footer></el-footer>
    </el-container>
    <div>
      <!--第一行-->
      <el-row :gutter="20" type="flex" style="margin: unset;background-color: white">
        <el-col :span="12" style="margin-left: 80px">
          <h4>{{ '移动机器人云平台' }}</h4>
          <p style="font-size: 30px">机器人云平台</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平台产品可实现运动控制、集群调度、视觉识别、语音识别等多种人机交互及管理控制功能。</p>
          <p style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以胜任多种复杂场景下的搬运协助、消毒展示、运输运送物品等需求。</p>
        </el-col>
        <el-col :span="10" style="align-content: center">
          <img class="img-box" src="static/img/cloudPlatform/u271.png" style="width: 95%;height: 400px">
        </el-col>
      </el-row>

      <!--第二行-->
      <el-row :gutter="50">
        <el-row style="margin: unset;border: unset">
          <p style="font-size: 30px;color: #0d64e8;font-weight: bolder;">平台优势</p>
        </el-row>
        <el-row style="text-align: center;width: 100%;">
          <el-col :span="3" style="border:5px solid #0d64e8;width: 240px">
            <el-row style="background-color: #0d64e8">
              <p style="font-weight: bolder;color: white;font-size: 25px">领先的技术</p>
            </el-row>
            <el-row>
              <div style="height: 180px">
                <p style="color: #0d64e8">我们平台拥有功能完备的机器学习模型，不断迭代优化，支持更先进的算法并且提供更高的算力，输出业界最前沿的研究成果。</p>
              </div>
            </el-row>
          </el-col>
          <el-col span="1">&nbsp;</el-col>
          <el-col :span="3" style="border:5px solid #0d64e8;;width: 240px">
            <el-row style="background-color: #0d64e8">
              <p style="font-weight: bolder;color: white;font-size: 25px">产品矩阵优势</p>
            </el-row>
            <el-row>
              <div style="height: 180px">
                <p style="color: #0d64e8">我们有10余款生态机器人产品，覆盖多种使用场景，向各行各业的客户提供硬件设备和服务，可定制，售后有保障的软硬件一体解决方案。</p>
              </div>
            </el-row>
          </el-col>
          <el-col span="1">&nbsp;</el-col>
          <el-col :span="3" style="border:5px solid #0d64e8;;width: 240px">
            <el-row style="background-color: #0d64e8">
              <p style="font-weight: bolder;color: white;font-size: 25px">灵活开放的生态</p>
            </el-row>
            <el-row>
              <div style="height: 180px">
                <p style="color: #0d64e8">二次开发灵活性强，第三方设备和应用可以快速接入，开放的开发者社区，学校人才聚集，聚集金融机构支持。</p>
              </div>
            </el-row>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="3" style="border:5px solid #0d64e8;;width: 240px">
            <el-row style="background-color: #0d64e8">
              <p style="font-weight: bolder;color: white;font-size: 25px">产品和数据支持</p>
            </el-row>
            <el-row>
              <div style="height: 180px">
                <p style="color: #0d64e8">平台有机器人调度系统、服务机器人管控系统、机器人操作控制软件系统、ERP系统、MES系统、WMS系统、WCS系统等产品及工具。</p>
                <p style="color: #0d64e8">积累大量历史数据、用于迭代更新系统。</p>
              </div>
            </el-row>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="3" style="border:5px solid #0d64e8;;width: 220px">
            <el-row style="background-color: #0d64e8">
              <p style="font-weight: bolder;color: white;font-size: 25px">一体化的服务</p>
            </el-row>
            <el-row>
              <div style="height: 180px">
                <p style="color: #0d64e8">为合作伙伴和客户提供，人机交互设计、软硬件管理控制软件，软硬件的产品订制开发，拥有强力的品牌价值保障。</p>
              </div>
            </el-row>
          </el-col>
        </el-row>
      </el-row>

      <!--      第三行     -->
      <el-row style="background-color: white">
        <el-row style="font-size: 30px;color: #0d64e8;font-weight: bolder;">平台产品功能</el-row>
        <el-row>
          <el-col :span="5">
            <el-row style="text-align: center">
              <img src="static/img/cloudPlatform/u299.svg">
              <img src="static/img/cloudPlatform/u300.svg">
              <p style="color: #0d64e8;font-size: 25px;font-weight: bolder;margin-top: 50px;">AI能力</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;视觉识别</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;运动控制</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;定位导航</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;语音交互</p>
            </el-row>
          </el-col>
          <el-col :span="0.5">
            <img src="static/img/cloudPlatform/u324.svg">
          </el-col>
          <el-col :span="5">
            <el-row style="text-align: center">
              <img src="static/img/cloudPlatform/u306.svg">
              <p style="color: #0d64e8;font-size: 25px;font-weight: bolder;">场景功能</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;物料搬运</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;室内运输</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;物品递送</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;商用清洁</p>
            </el-row>
          </el-col>
          <el-col :span="0.5">
            <img src="static/img/cloudPlatform/u324.svg">
          </el-col>
          <el-col :span="5">
            <el-row style="text-align: center">
              <img src="static/img/cloudPlatform/u312.svg">
              <p style="color: #0d64e8;font-size: 25px;font-weight: bolder;">管理功能</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;运动管理</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;任务管理</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;数据统计</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;状态监控</p>
            </el-row>
          </el-col>
          <el-col :span="0.5">
            <img src="static/img/cloudPlatform/u324.svg">
          </el-col>
          <el-col :span="5">
            <el-row style="text-align: center">
              <img src="static/img/cloudPlatform/u318.svg">
              <p style="color: #0d64e8;font-size: 25px;font-weight: bolder;">服务支持</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;定制产品支持</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;产品设计支持</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;产品优化改造支持</p>
              <p style="color: #0d64e8;font-size: 20px;font-weight: bolder;">·&nbsp;&nbsp;售后服务支持</p>
            </el-row>
          </el-col>
        </el-row>
      </el-row>

      <!--      第四行     -->
      <el-row>
        <el-row style="font-size: 30px;color: #0d64e8;font-weight: bolder;">平台产品系列</el-row>
        <el-row style="text-align: center">
          <el-tabs style="text-align: center; width: 92%;" :stretch="true">
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">产品设计</span>
              <el-row>
                <img src="static/img/MobileRobot/u124.png">
              </el-row>
              <el-row :gutter="180" type="flex">
                <el-col :span="3">&nbsp;</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">50kg</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">100kg</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">300kg</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">800kg</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">1000kg</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">3000kg</el-col>
                <el-col :span="3">&nbsp;</el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">顶升系列</span>
              <el-row>
                <img src="static/img/MobileRobot/u125.png">
              </el-row>
              <el-row :gutter="180" type="flex">
                <el-col :span="3">&nbsp;</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">300kg</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">600kg</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">600kg</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">1000kg</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">1500kg</el-col>
                <el-col :span="2" style="font-weight: bolder;font-size: 15px;color: #0d64e8">5000kg</el-col>
                <el-col :span="3">&nbsp;</el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">牵引系列</span>
              <el-row>
                <el-col :span="8">
                  <img src="static/img/cloudPlatform/u370.png" style="width: 50%;height: 150px;">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">200kg</p>
                </el-col>
                <el-col :span="8">
                  <img src="static/img/cloudPlatform/u368.png" style="width: 50%;height: 150px;">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">300kg</p>
                </el-col>
                <el-col :span="8">
                  <img src="static/img/cloudPlatform/u369.png" style="width: 50%;height: 150px;">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">500kg</p>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">叉车系列</span>
              <el-row>
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="8">
                  <img src="static/img/MobileRobot/u127.png">
                  <el-row>
                    <el-col :span="10">
                      <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">叉车</p>
                    </el-col>
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="10">
                      <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">中药送料叉车</p>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="4">
                  <img src="static/img/cloudPlatform/u385.png" style="height: 115px">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">前移式叉车</p>
                </el-col>
                <el-col :span="4">
                  <img src="static/img/cloudPlatform/u387.png" style="height: 115px;">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">托盘推高式叉车</p>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">特殊行业</span>
              <el-row>
                <img src="static/img/cloudPlatform/u397.png">
              </el-row>
              <el-row>
                <el-col :span="3">&nbsp;</el-col>
                <el-col :span="6">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">隧道探测</p>
                </el-col>
                <el-col :span="5">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">激光清洗</p>
                </el-col>
                <el-col :span="6">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">建筑机器人</p>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">服务系列</span>
              <el-row>
                <el-col :span="4">
                  <img src="static/img/cloudPlatform/u409.png" style="width: 200px;height: 200px;">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">精准喷雾消毒机器人</p>
                </el-col>
                <el-col :span="4">
                  <img src="static/img/cloudPlatform/u410.png" style="width: 200px;height: 200px;">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">紫外线喷雾消毒机器人</p>
                </el-col>
                <el-col :span="4">
                  <img src="static/img/cloudPlatform/u411.jpg" style="width: 200px;height: 200px;">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">喷雾消毒机器人</p>
                </el-col>
                <el-col :span="4">
                  <img src="static/img/cloudPlatform/u412.png" style="width: 200px;height: 200px;">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">送餐机器人</p>
                </el-col>
                <el-col :span="4">
                  <img src="static/img/cloudPlatform/u413.png" style="width: 200px;height: 200px;">
                  <p style="font-weight: bolder;font-size: 15px;color: #0d64e8">送药机器人</p>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-row>

      <!--      第五行     -->
      <el-row style="background-color: white">
        <el-row style="font-size: 30px;color: #0d64e8;font-weight: bolder;">应用场景</el-row>
        <el-row style="text-align: center">
          <el-tabs style="text-align: center; width: 92%;" :stretch="true">
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">物料搬运</span>
              <el-row :gutter="50" type="flex">
                <el-col :span="6">
                  <img src="static/img/cloudPlatform/u431.gif" style="width: 300px;height: 200px;">
                </el-col>
                <el-col :span="15" style="text-align: left">
                  <p style="font-weight: bolder;font-size: 20px;color: #0d64e8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AGV，即自动搬运车，也称智能搬运车，
                    在快递物流仓储这一应用最早、 最为成熟的领域，发挥着降低人力成本、提升效率与产量、改善员工的作业环境与强度等优势。在节约成本方面，AGV可以24小时不停歇工作，
                    在某些生产环节上 可以替代数百个劳动力，而且只需要1-2个人看管。在提高效率与产量方面，由于采用无人智能AGV，效率高，每一成品耗时相对固定，使得产量有稳定保障。
                    另外，AGV代替人工，可最大程度保障工人作业安全性。在某些危险作业工序中，更是承担着无可替代的角色。</p>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">仓储搬运</span>
              <el-row :gutter="50" type="flex">
                <el-col :span="6">
                  <img src="static/img/cloudPlatform/u441.gif" style="width: 300px;height: 200px;">
                </el-col>
                <el-col :span="15" style="text-align: left">
                  <p style="font-weight: bolder;font-size: 20px;color: #0d64e8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;仓库，仓库是智能搬运机器人应用很广泛的地方。
                    因为仓库是专门用来存放货物的地方，不管出库入库都需要转移，以前都是用人工叉车方式来转移和装卸，工作量很大、所需要的时间也比较长智能搬运机器人的出现提高了效率，
                    并且减少了人工转移的重担。</p>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">室内运输</span>
              <el-row :gutter="50" type="flex">
                <el-col :span="6">
                  <img src="static/img/cloudPlatform/u451.gif" style="width: 300px;height: 200px;">
                </el-col>
                <el-col :span="15" style="text-align: left">
                  <p style="font-weight: bolder;font-size: 20px;color: #0d64e8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;室内配送机器人作为无人配送领域主要产品，
                    依靠服务机器人三大技术，导航移动、运动控制、感知交互中最基础、最成熟和最稳定的导航移动技术、目前基本能够满足市场需求，后期在提高机器灵敏度和提升用户体验方面，
                    仍依赖运动控制，感知交互技术的提升。</p>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">商用清洁</span>
              <el-row :gutter="50" type="flex">
                <el-col :span="6">
                  <img src="static/img/cloudPlatform/u461.gif" style="width: 300px;height: 200px;">
                </el-col>
                <el-col :span="15" style="text-align: left">
                  <p style="font-weight: bolder;font-size: 20px;color: #0d64e8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前商用清洁机器人的应用场景以室内清洁为主导，
                    场景主要集中在办公楼和商场。如果从商用清洁市场的发展脉络，可清晰看到，伴随市场的孕育和新生，产品也经历了不同的迭代历程。</p>
                  <p style="font-weight: bolder;font-size: 20px;color: #0d64e8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    商用清洁机器人，主要应用于商超、医院、
                    写字楼等室内场景的清洗推尘,杀菌消毒等工作。</p>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">特殊行业</span>
              <el-row :gutter="50" type="flex">
                <el-col :span="6">
                  <img src="static/img/cloudPlatform/u471.gif" style="width: 300px;height: 200px;">
                </el-col>
                <el-col :span="15" style="text-align: left">
                  <p style="font-weight: bolder;font-size: 20px;color: #0d64e8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特种机器人是服务于人类的各种先进机器人。
                    虽然相比于服务机器人和工业机器人，特种机器人显得“默默无闻”，但近年来随着特种机器人快速发展，它开始在我国国民经济各行各业中崭露头角。</p>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="font-size: 18px;font-weight: bolder">医疗运送</span>
              <el-row :gutter="50" type="flex">
                <el-col :span="6">
                  <img src="static/img/cloudPlatform/u481.gif" style="width: 300px;height: 200px;">
                </el-col>
                <el-col :span="15" style="text-align: left">
                  <p style="font-weight: bolder;font-size: 20px;color: #0d64e8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;医疗机器人属于服务机器人中的特种服务机器人分类，
                    是指应用于医院、诊所的医疗或辅助医疗的半自主或全自主工作的机器人，它能够完成有益于人类健康的服务工作，但不包括从事生产活动的设备。具体可分为手术机器人、康复机器人、
                    辅助机器人以及医疗服务机器人四大类。</p>
                  <p style="font-weight: bolder;font-size: 20px;color: #0d64e8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    医疗机器人在我国医疗领域的普及率处于较低水平。
                    在政策利好、老龄化加剧、消费群体增加和产业化发展提速等综合因素影响下，中国医疗机器人市场高速发展。</p>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-row>

      <!--      第六行 -云平台架构图    -->
      <el-row>
        <el-row style="font-size: 30px;color: #0d64e8;font-weight: bolder;">云平台架构图</el-row>
        <el-row :gutter="40" type="flex" style="text-align: center">
          <el-col :span="1" style="background-color: #0d64e8;margin-left:5%;margin-right: 10px">
            <p style="font-size: 30px;color: white;font-weight: bolder;margin-top: 500%">智能云平台</p>
          </el-col>
          <el-col :span="20">
            <el-row :gutter="20" type="flex" style="background-color: white">
              <el-col :span="4">
                <p style="font-weight: bolder">行业解决方案</p>
                <p style="font-weight: bolder">行业智能应用</p>
              </el-col>
              <el-col :span="4">
                <p style="font-weight: bolder;background-color: #f2f6fa">医药行业</p>
                <p style="font-weight: bolder;background-color: #f2f6fa">智能搬运</p>
              </el-col>
              <el-col :span="4">
                <p style="font-weight: bolder;background-color: #f2f6fa">汽车行业</p>
                <p style="font-weight: bolder;background-color: #f2f6fa">智能存储</p>
              </el-col>
              <el-col :span="4">
                <p style="font-weight: bolder;background-color: #f2f6fa">电子制造</p>
                <p style="font-weight: bolder;background-color: #f2f6fa">智能物流</p>
              </el-col>
              <el-col :span="4">
                <p style="font-weight: bolder;background-color: #f2f6fa">电商行业</p>
                <p style="font-weight: bolder;background-color: #f2f6fa">智能配送</p>
              </el-col>
              <el-col :span="4">
                <p style="font-weight: bolder;background-color: #f2f6fa;width: 90%;">…</p>
                <p style="font-weight: bolder;background-color: #f2f6fa;width: 90%;">…</p>
              </el-col>
            </el-row>
            <el-row style="width:100%;height: 5px;padding: 10px"></el-row>
            <el-row :gutter="5" type="flex" style="background-color: white">
              <el-col :span="2" style="margin-right: 4%">
                <p style="font-size:25px;font-weight: bolder"><br>平台云</p>
              </el-col>
              <el-col>
                <p>
                  <el-col :span="5"
                          style="font-weight: bolder;background-color: #f2f6fa;width: 48%;margin-right: 2%">场景服务系统
                  </el-col>
                  <el-col :span="5" style="font-weight: bolder;background-color: #f2f6fa;width: 48%">业务信息系统</el-col>
                </p>
                <p>
                  <el-col :span="5" style="font-weight: bolder;background-color: #f2f6fa;width: 22%;margin-right: 4%">
                    远程管理
                  </el-col>
                  <el-col :span="5" style="font-weight: bolder;background-color: #f2f6fa;width: 22%;margin-right: 2%">
                    远程控制
                  </el-col>
                  <el-col :span="5" style="font-weight: bolder;background-color: #f2f6fa;width: 22%;margin-right: 4%">
                    业务数据对接
                  </el-col>
                  <el-col :span="5" style="font-weight: bolder;background-color: #f2f6fa;width: 22%">业务指标管控</el-col>
                </p>
                <p>
                  <el-col :span="5"
                          style="font-weight: bolder;background-color: #f2f6fa;width: 48%;margin-right: 2%">管理平台
                  </el-col>
                  <el-col :span="5" style="font-weight: bolder;background-color: #f2f6fa;width: 48%">业务平台</el-col>
                </p>
                <p style="font-weight: bolder;background-color: #f2f6fa;width: 98%;">基础云平台</p>
              </el-col>
            </el-row>
            <el-row style="height: 5px;padding: 10px"></el-row>
            <el-row :gutter="10" type="flex" style="background-color: white;text-align: center">
              <el-col :span="2" style="margin-right: 4%">
                <p style="font-size:25px;font-weight: bolder"><br>智能云</p>
              </el-col>
              <el-col :span="6">
                <p style="font-weight: bolder;background-color: #f2f6fa">感知层</p>
                <p style="font-weight: bolder;background-color: #f2f6fa">能力层</p>
                <p style="font-weight: bolder;background-color: #f2f6fa;height: 60px"><br>基础层</p>
              </el-col>
              <el-col :span="10">
                <p style="font-weight: bolder;background-color: #f2f6fa">环境感知交互</p>
                <p>
                  <el-col :span="8"
                          style="font-weight: bolder;background-color: #f2f6fa;width: 30%;margin-right: 5%">运动控制
                  </el-col>
                  <el-col :span="8" style="font-weight: bolder;background-color: #f2f6fa;width: 30%;margin-right: 5%">
                    视觉
                  </el-col>
                  <el-col :span="8" style="font-weight: bolder;background-color: #f2f6fa;width: 30%">语言</el-col>
                </p>
                <p style="font-weight: bolder;background-color: #f2f6fa">深度学习平台</p>
                <p>
                  <el-col :span="5"
                          style="font-weight: bolder;background-color: #f2f6fa;width: 45%;margin-right: 10%">数据
                  </el-col>
                  <el-col :span="5" style="font-weight: bolder;background-color: #f2f6fa;width: 45%">算力</el-col>
                </p>
              </el-col>
              <el-col :span="6">
                <p style="font-size:25px;font-weight: bolder;background-color: #f2f6fa;height:78%;width: 90%;margin-top: 15px"><br>安全
                </p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-row>

      <!--      第七行     -->
      <el-row style="background-color: white">
        <el-row style="font-size: 30px;color: #0d64e8;font-weight: bolder;">行业合作伙伴</el-row>
        <el-row style="text-align: center" :gutter="40" type="flex">
          <el-col :span="5.5" style="background-color: #f2f6fa">
            <p style="font-weight: bolder;font-size: 20px">泛汽车制造行业</p>
            <img src="static/img/cloudPlatform/u557.png" style="width: 310px;height: 300px;">
          </el-col>
          <el-col :span="0.5">&nbsp;</el-col>
          <el-col :span="5.5" style="background-color: #f2f6fa">
            <p style="font-weight: bolder;font-size: 20px">泛流程生产行业</p>
            <img src="static/img/cloudPlatform/u561.png" style="width: 310px;height: 300px;">
          </el-col>
          <el-col :span="0.5">&nbsp;</el-col>
          <el-col :span="5.5" style="background-color: #f2f6fa">
            <p style="font-weight: bolder;font-size: 20px">泛电力配套行业</p>
            <img src="static/img/cloudPlatform/u563.png" style="width: 310px;height: 300px;">
          </el-col>
          <el-col :span="0.5">&nbsp;</el-col>
          <el-col :span="6" style="background-color: #f2f6fa">
            <p style="font-weight: bolder;font-size: 20px">专业机器人生产及集成合作伙伴</p>
            <el-col>
              <el-row>
                <img src="static/img/cloudPlatform/u565.png" style="width: 250px;height: 110px;">
              </el-row>
              <el-row>
                <el-col :span="8">
                  <img src="static/img/cloudPlatform/u566.png">
                </el-col>
                <el-col :span="8">
                  <img src="static/img/cloudPlatform/u567.png">
                </el-col>
              </el-row>
              <el-row>
                <img src="static/img/cloudPlatform/u568.png" style="width: 200px;height: 50px;">
              </el-row>
            </el-col>
          </el-col>
        </el-row>
      </el-row>

      <!--      底部     -->
      <el-container id="bottom" style="width: 100%">
        <el-aside width="50px"><br></el-aside>
        <el-main style="background: #0d64e8;font-size: 30px">
          <el-row :gutter="24">
            <el-col :span="11" style="color: white;text-align: left;font-size: 35px;font-weight: bolder">
              欢迎咨询云平台相关产品
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
  name: "CloudPlatform"
}
</script>

<style scoped>
#cloud-platform {
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
  color: #0d64e8;
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