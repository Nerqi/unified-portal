<template>
  <div class="storageDes-main">
    <div class="title">请使用IE或360浏览器登录<a style="color: #5656ff; cursor:pointer" href="https://www.taobao.com/">一级系统测试管理平台</a></div>
    <div class="main">
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>磁盘阵列申请流程：</h3></div>
              <div>进入我的工作区--资源申请--物理资源申请页面，填写相关信息</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>申请主机IP：点击选择，查询IP，选择I信息双击即可</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批完成，发邮件通知申请人</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>云存储申请流程：</h3></div>
              <div>华为的物理机可挂载云存储，进入我的工作区--资源申请--云存储申请页面，填写相关信息，提交审批</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>在综合查询--工单查询查看云存储申请进度，工单类型选择云存储，双击工单查看进度，根据备注里的信息进行操作</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'storageDes',
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
  .storageDes-main{
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
      color: #ffffff;
      background-image: url(../../../assets/images/talkingdata.png);
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
    .storageDes-main{
      font-size: 0.9em;
    }
  }
</style>
