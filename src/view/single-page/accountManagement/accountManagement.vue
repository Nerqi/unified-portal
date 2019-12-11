<template>
  <div class="accountManagement-main">
    <div class="title">
      请使用IE或360浏览器登录
      <a style="color: rgb(0, 29, 255); cursor:pointer" @click="showPage(3)">一级系统测试管理平台</a>
    </div>
    <div class="main">
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title">
                <h3>账号注册流程</h3>
              </div>
              <div>（请在本系统首页注册）</div>
              <div>进入系统登录页面，点击登录/注册按钮，点击立即注册，填写相关信息，提交申请</div>
            </div>
            <div class="main-icon">
              <Icon type="ios-arrow-forward" />
            </div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批完成后，发邮件通知注册申请人账号和初始密码</div>
            </div>
            <div class="main-icon">
              <Icon type="ios-arrow-forward" />
            </div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>若注册时，没有可选的项目组，可点击新增项目组，项目组申请完成，邮件通知申请人，然后再进行账号注册申请</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title">
                <h3>账号申请流程</h3>
              </div>
              <div>在我的工作区--账号管理--账号申请页面，填写相关信息，提交审批</div>
            </div>
            <div class="main-icon">
              <Icon type="ios-arrow-forward" />
            </div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批完成后，邮件通知申请人及账号所有者</div>
            </div>
            <div class="main-icon">
              <Icon type="ios-arrow-forward" />
            </div>
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
              <div class="main-text-title">
                <h3>账号变更流程</h3>
              </div>
              <div>在我的工作区--账号管理--账号变更页面，显示当前登录账号的所有账号信息</div>
            </div>
            <div class="main-icon">
              <Icon type="ios-arrow-forward" />
            </div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>可变更内容包括：姓名、邮箱、电话、身份证、项目组、组织</div>
            </div>
            <div class="main-icon">
              <Icon type="ios-arrow-forward" />
            </div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批通过后，邮件通知申请人</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title">
                <h3>账号注销流程</h3>
              </div>
              <div>在我的工作区--账号管理--账号销户页面，选择人员，可批量注销</div>
            </div>
            <div class="main-icon">
              <Icon type="ios-arrow-forward" />
            </div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>填写销户原因，提交审批</div>
            </div>
            <div class="main-icon">
              <Icon type="ios-arrow-forward" />
            </div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批通过后，邮件通知申请人</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accountManagement',
  components: {},
  data() {
    return {}
  },
  mounted() {
    //
  },
  methods: {
    showPage(num) {
      let access_token = this.$store.getters['user/getAccess_token'] || ''
      if (access_token) {
        this.$publicFunc.showPage(num)
      } else {
        this.$Message.warning('还未登录！')
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>

<style lang="less">
.accountManagement-main {
  height: 100%;
  width: 100%;
  padding: 1rem;
  .title {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background-image: url(../../../assets/images/main-title.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-bottom: 1rem;
  }
  .main {
    height: 90%;
    .ivu-row {
      height: 20%;
      .ivu-col-span-8 {
        height: 100%;
      }
    }
    .row-single {
      margin-top: 1rem;
      .left-row {
        background-color: #d8dde0;
      }
      .center-row {
        background-color: #caced0;
      }
      .right-row {
         background-color: #caced0db;
      }
      .main-item {
        width: 100%;
        display: flex;
      }
    }
    .row-double {
      margin-top: 1rem;
      .left-row {
        background-color: #DEF5FB;
      }
      .center-row {
        background-color:#D2EFFB ;
      }
      .right-row {
        background-color: #caecf6 ;
      }

      .main-item {
        width: 100%;
        // background-color: #bcd9f1;
        display: flex;
      }
    }
    .center-row {
      display: flex;
      justify-content: center;
    }
    .right-row {
      display: flex;
      flex-direction: row-reverse;
    }
    .left-row {
      display: flex;
      flex-direction: row;
    }
    .main-text {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
      .main-text-title {
        display: flex;
      }
    }
    .main-icon {
      width: 20%;
      color: #58adfb;
      font-size: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
