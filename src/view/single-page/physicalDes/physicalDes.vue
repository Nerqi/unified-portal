<template>
  <div class="physicalDes-main">
    <div class="title">请使用IE或360浏览器登录<a style="color: rgb(0, 29, 255); cursor:pointer" href="https://www.taobao.com/">一级系统测试管理平台</a></div>
    <div class="main">
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>物理机申请流程：</h3></div>
              <div>进入我的工作区--资源申请--物理资源申请，填写申请信息，<p style="color: #ff9b51">所属域类型选择核心域或DMZ域</p>，点击提交</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批完成，向申请人发送邮件及sudo账号密码</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>申请人可自行修改密码，密码规则为大小写字符数字和!#$%^&*_-+等特殊字符，不少于8位</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>ROOT密码申请流程：</h3></div>
              <div>进入我的工作区--资源申请--ROOT密码申请，填写申请信息，<p style="color: #ff9b51">密码有效期为7天</p>，点击提交</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批完成，向申请人发送邮件及root密码</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>root密码有效期为7天，到期后，自动更新root密码，用户可重新申请root密码</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>责任人变更流程：</h3></div>
              <div>进入我的工作区--资源申请--物理机责任人变更，查询出需要变更责任人的机器，选择责任人提交审批</div>
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
              <div>在我的工作区--资源申请--物理机责任人变更页面可查询工单流转进度</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'physicalDes',
  components: {
  },
  data () {
    return {
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
  .physicalDes-main{
    width: 100%;
    height: 100%;
    padding: 1rem;
    font-size: 1em;
    .title{
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      background-image: url(../../../assets/images/main-title.png);
      background-repeat: no-repeat;
      background-size:100% 100%;
      margin-bottom: 1rem;
    }
    .main{
      height: 90%;
      .ivu-row{
        height: 20%;
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
    .physicalDes-main{
      font-size: 0.9em;
    }
  }
</style>
