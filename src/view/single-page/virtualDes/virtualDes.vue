<template>
  <div class="virtualDes-main">
    <div class="title">请使用IE或360浏览器登录<a style="color: rgb(189, 78, 78);; cursor:pointer" href="https://www.taobao.com/">一级系统测试管理平台</a></div>
    <div class="main">
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>虚拟机申请流程：</h3></div>
              <div>进入我的工作区--资源申请--虚拟机申请，填写申请信息，填写请查看注意事项</div>
              <p style="color: #5656ff; cursor:pointer" @click="modal=true">注意事项</p>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>选择审批人员，提交审批，申请进度可以查看我的工作区--资源申请--虚拟机申请菜单，查询申请单，双击可查看具体进度</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批通过后，发邮件通知申请人，申请完后，请按照安全管理制度修改ROOT密码</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>虚拟机存储变更流程：</h3></div>
              <div>在我的工作区--资源申请--虚拟机申请查看存储变更申请单进度</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>存储申请完成后，可以登录主机，通过fdisk -l命令查看新加的存储，然后根据需求格式化存储，挂载到指定目录</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批拒绝，申请人需要修改正确信息后，再次提交审批</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>责任人变更流程：</h3></div>
              <div>进入资源管理--虚拟资源管理，查询出需要变更责任人的机器，点击申请，选择责任人变更或批量变更，选择责任人提交审批</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>责任人变更只能选择机器所在的项目组的人员</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>在我的工作区--资源申请--虚拟机申请页面可查询工单流转进度</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>虚拟机镜像变更：</h3></div>
              <div>进入资源管理--虚拟资源管理页面，选择一台虚拟机，点击操作--镜像变更，选择需要变更的镜像</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>操作进度查看我的工作区--资源申请--虚拟机申请，查询申请单，双击查看进度详情</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>正常情况下，镜像变更5分钟完成，如果变更的主机有外挂在，请在重做完系统完成后，将主机的IP地址邮件发给虚拟机管理员（dongcw@asiainfo.com）</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>虚拟机扩容流程：</h3></div>
              <div>进入资源管理--虚拟资源管理页面，选择需要扩展的虚拟机，点击操作--关机</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>关机后，点击申请--模板变更，选择模板</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>在我的工作区--资源申请--虚拟机申请查看申请单进度，完成后，可以开机</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <Modal title="注意事项" v-model="modal" footer-hide>
      <p>1、名称：填写项目组简称+主机申请目的或部署服务简称，字符不要太多</p>
      <p>2、时间：不能超过一年，到期后可续期</p>
      <p>3、集群：没有特殊需求选择cluster</p>
      <p>4、L3网络：确保选择的网段有足够用IP，不够会提示申请失败</p>
      <p>5、IP地址：用于特殊需求需要指定IP地址，一般情况不需要填写</p>
      <p>6、cpu/内存：选择需要的cpu和内存的组合配置</p>
      <p>6、cpu/内存：选择需要的cpu和内存的组合配置</p>
      <p>7、磁盘：不选择数据盘大小，默认申请的系统只有50G，若默认磁盘大小不够，可以选择数据盘，主机申请完成后，需要手动格式化分区，挂载磁盘</p>
      <p>8、描述：填写申请虚拟机的原因，需要具体些，理由不充分有可能会被拒绝</p>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'virtualDes',
  components: {
  },
  data () {
    return {
      modal: false
    }
  },
  mounted () {
    //
  },
  methods: {
  }
}
</script>

<style lang="less">
  .virtualDes-main{
    font-size: 1em;
    height: 100%;
    width: 100%;
    padding: 1rem;
    .title{
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      background-image: url(../../../assets/images/talkingdata.png);
      background-repeat: no-repeat;
      background-size:100% 100%;
      margin-bottom: 1rem;
    }
    .main{
      height: 90%;
      .ivu-row{
        height: 17%;
        .ivu-col-span-8{
          height: 100%;
        }
      }
      .row-single{
        margin-top: 1rem;
        .main-item{
          width: 95%;
          background-color: rgba(212, 174, 165, 0.2);
          display: flex;
        }
      }
      .row-double{
        margin-top: 1rem;
        .main-item{
          width: 95%;
          background-color: #bcd9f1;
          display: flex;
        }
      }
      .center-row{
        display: flex;
        justify-content: center;
      }
      .right-row{
        display: flex;
        flex-direction: row-reverse;
      }
      .left-row{
        display: flex;
        flex-direction: row;
      }
      .main-text{
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
        .main-text-title{
          display: flex;
        }
      }
      .main-icon{
        width: 20%;
        color: #58adfb;
        font-size: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media screen and (min-width: 3072px){
    .virtualDes-main{
      font-size: 0.9em;
    }
  }
</style>
