<template>
  <div class="renewalDes-main">
    <div class="title">请使用IE或360浏览器登录<a style="color: rgb(189, 78, 78); cursor:pointer" href="https://www.taobao.com/">一级系统测试管理平台</a></div>
    <div class="main">
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>资源续期流程：</h3></div>
              <div>进入我的工作区--资源申请--资源续期，申请类型包括物理主机，磁盘阵列，云存储，ip地址</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>选择申请类型，按条件查询出资源结果，在列表中选择要续期的资源，选择续期后时间，时间不能超过当前到期时间一年</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>注意：选择磁盘阵列续期时，限制选择同一申请单的记录进行续期</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>虚拟机续期流程：</h3></div>
              <div>进入资源管理--虚拟资源管理页面，查询出虚拟机，选择虚拟机，点击申请--虚拟机续期选项</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>在弹出的续期窗口选择结束时间，结束时间不能超过当前到期时间一年</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批进程可以在我的工作区--资源申请--虚拟机申请中查看</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>资源释放流程：</h3></div>
              <div>对于申请的资源，包括物理机、虚拟机、IP地址、云存储、磁盘阵列，在资源到期前可以申请资源释放</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>在我的工作区--资源申请--资源释放页面，可以对物理机、IP地址、磁盘阵列和云存储申请释放</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>在资源管理--虚拟资源管理页面，查询虚拟机，点击申请--释放，对虚拟机进行释放申请</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>资源到期提醒：</h3></div>
              <div>对于申请的资源，包括物理机、虚拟机、IP地址、云存储、磁盘阵列，在资源到期前和到期当天会发邮件提醒用户</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>资源回收：</h3></div>
              <div>对于已到期未续期的资源，资源管理员将进行资源回收，并发邮件通知资源所有者</div>
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
  name: 'renewalDes',
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
  .renewalDes-main{
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
    .renewalDes-main{
      font-size: 0.9em;
    }
  }
</style>
