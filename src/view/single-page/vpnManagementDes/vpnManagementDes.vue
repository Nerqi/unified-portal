<template>
  <div class="vpnManagementDes-main">
    <div class="title">请使用IE或360浏览器登录<a style="color: rgb(0, 29, 255); cursor:pointer" @click="showPage(3)">一级系统测试管理平台</a></div>
    <div class="main">
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>VPN账号申请流程：</h3></div>
              <div>进入我的工作区--VPN账号管理--VPN账号新增，填写申请信息</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>申请人：本人申请和他人申请，选择他人申请，是替他人申请，需填写他人全部信息</div>
              <div> 使用期限：选择长期使用，不需要填写结束时间</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批完成，发送邮件通知申请人账号密码，及VPN使用手册</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>VPN账号变更流程：</h3></div>
              <div>进入我的工作区--VPN账号管理--VPN账号变更，填写申请信息</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>可变更信息包括：账号的单位类型，单位名称，工作单位，MAC地址，手机号，邮箱，变更，IP地址</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>可以为他人申请变更，申请人选择他人申请即可</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>VPN账号注销流程：</h3></div>
              <div>进入我的工作区--VPN账号管理--VPN账号注销，填写申请信息</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>申请人：本人注销和他人注销，选择他人注销，需要先选择要注销的账号，选择账号后，其他信息默认填写为该账号信息</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>提交审批，审批完成，邮件通知申请人</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>VPN账号批量申请流程：</h3></div>
              <div>进入我的工作区--VPN账号管理--VPN账号批量申请，可批量新增、变更和注销账号</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>进入页面，下载模板，填写模板信息，其中申请类型选择新增时，不需要填写账号名称，选择变更和注销时，必须填写账号名称</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>模板必填项填写完成，上传模板，提交审批，模板格式不可更改</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vpnManagementDes',
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
  .vpnManagementDes-main{
    height: 100%;
    width: 100%;
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
      .row-double{
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
    .vpnManagementDes-main{
      font-size: 0.9em;
    }
  }
</style>
