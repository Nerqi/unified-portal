<template>
  <div class="userGuide">
    <Row>
      <Col span="8">
        <Card class="card-single">
          <p slot="title">账号管理</p>
          <p>系统提供账号注册、账号申请、账号变更和账号注销操作。若您没有系统账号，可直接进行账号注册，或由他人登录系统后进行账号申请，账号申请、变更和注销需登录一级系统测试管理平台进行操作</p>
          <p>操作菜单：我的工作区--账号管理 </p>
          <div class="card-route" @click="skip('accountManagement')">操作详情查看 --》</div>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-double">
          <p slot="title">VPN账号管理</p>
          <p>登录VPN账号后可以使用测试资源，若您没有VPN账号，可以登录一级系统测试管理平台申请VPN账号，也可对已有VPN账号进行变更、注销操作</p>
          <p>操作菜单：我的工作区--VPN账号管理</p>
          <div class="card-route" @click="skip('url-vpnManagementDes')">操作详情查看 --》</div>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-single">
          <p slot="title">资源管理</p>
          <p>资源管理提供主机（物理机和虚拟机）、存储（云存储和磁盘阵列）、IP地址等资源申请，同时提供对各类资源的监控和告警服务，用户可以登录一级系统测试管理平台进行申请</p>
          <div class="card-route" @click="skip('resourceManagement')">操作详情查看 --》</div>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span="8">
        <Card class="card-double">
          <p slot="title">项目注册</p>
          <p>在账号注册时没有可选的项目组，可以申请注册项目组</p>
          <p>登录系统后，在右上角“+”菜单也可以注册项目组</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-single">
          <p slot="title">虚拟机管理</p>
          <p>系统支持虚拟机责任人对虚拟机进行一系列操作，包括虚拟机申请，续期，责任人变更，存储盘变更，镜像变更，开机，关机，重启等操作，需登录一级系统测试管理平台操作，操作步骤请在使用手册中下载资源操作手册，或点击下面链接查看</p>
          <div class="card-route" @click="skip('url-virtualDes')">操作详情查看 --》</div>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-double">
          <p slot="title">需求管理</p>
          <p>系统和需求管理平台对接，支持从需求管理平台接收任务单，并对任务单的开发测试上线及工时等信息管理，同时将开发结果反馈给需求管理平台，操作步骤请在使用手册中下载操作手册，或点击下面链接查看</p>
          <div class="card-route" @click="skip('devWorkflowManagement')">操作详情查看 --》</div>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span="8">
        <Card class="card-single">
          <p slot="title">一测平台微信企业号</p>
          <p>扫描企业微信二维码关注企业微信号并绑定平台账号，自动发送消息通知，支持移动办工，同时会定期推送各类报表</p>
          <div class="card-route">
            <Tooltip placement="top-start">
              <p>企业号二维码</p>
              <div slot="content">
                <img src="../../../assets/images/conChatNum.png" class="card-route-img"/>
              </div>
            </Tooltip>
            <p @click="skip('wechatOpView')">操作说明查看 --》</p>
          </div>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-double">
          <p slot="title">重点需求看板</p>
          <p>对各项目组重点需求的进度展示，并提供超时预警</p>
          <div class="card-route" @click="skip('windowOpen')">点击链接跳转到看板 --》</div>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-single">
          <p slot="title">一测平台微信公众号</p>
          <p>测试平台微信公众号会定期推送月度报表及各种技术文章，欢迎您的关注</p>
          <div class="card-route">
            <Tooltip placement="top-start">
              <p>公众号二维码</p>
              <div slot="content">
                <img src="../../../assets/images/weChatNum.png" class="card-route-img"/>
              </div>
            </Tooltip>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'userGuide',
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
    skip(name) {
      if (name) {
        if (name === 'windowOpen') {
          window.location = 'https://www.taobao.com/'
        } else {
          this.$router.push({ name: name })
        }
      }
    }
  }
}
</script>

<style lang="less">
.userGuide{
  font-size: 0.8em!important;
  height: 100%;
  .ivu-row{
    height: 33.33%;
    .ivu-col-span-8{
      height: 100%;
      .card-single{
        width: 100%;
        height: 100%;
        box-shadow: 6px 10px 20px 12px rgba(0, 0, 0, 0.3);
      }
      .card-double{
        width: 100%;
        height: 100%;
        background-color: #d2e7fd;
      }
    }
  }
  .card-route{
    position: absolute;
    bottom: 12px;
    width: 80%;
    color: #0000ff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    .card-route-img{
      height: 8rem;
    }
  }
}
@media screen and (min-width: 3072px) {
  .ivu-card-head p, .ivu-card-head-inner{
    font-size: 1.2rem!important;
    height: 40px;
    line-height: 40px;
  }
  .ivu-card-body p{
    font-size: 1.2rem!important;
  }
  .card-route{
    font-size: 1.2rem!important;
  }
}
@media screen and (min-width: 4800px) {
  .ivu-card-head p, .ivu-card-head-inner{
    font-size: 1.6rem!important;
    height: 40px;
    line-height: 40px;
  }
  .ivu-card-body p{
    font-size: 1.6rem!important;
  }
  .card-route{
    font-size: 1.6rem!important;
  }
}
@media screen and (max-width: 1535px) {
  .ivu-card-head p, .ivu-card-head-inner{
    font-size: 9px!important;
    height: 10px;
    line-height: 10px;
  }
  .ivu-card-body p{
    font-size: 9px!important;
  }
  .card-route{
    font-size: 9px!important;
  }
}
</style>
