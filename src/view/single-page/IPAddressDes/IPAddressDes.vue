<template>
  <div class="IPAddressDes-main">
    <div class="title">请使用IE或360浏览器登录<a style="color: rgb(0, 29, 255); cursor:pointer" href="https://www.taobao.com/">一级系统测试管理平台</a></div>
    <div class="main">
      <Row class="row-single">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>内网IP申请流程：</h3></div>
              <div>进入我的工作区--资源申请--IP地址申请，填写申请信息</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>开始/结束时间：IP申请有效期不能超过一年，到期后可续期申请</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>IP地址段：根据IP数量选择数量多的IP地址段</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row class="row-double">
        <Col span="8" class="left-row">
          <div class="main-item">
            <div class="main-text">
              <div class="main-text-title"><h3>公网IP及策略申请流程：</h3></div>
              <div>进入我的工作区--DMZ域公网申请--DMZ域公网IP申请，填写申请信息</div>
              <p style="color: #5656ff; cursor:pointer" @click="modal=true">注意事项</p>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="center-row">
          <div class="main-item">
            <div class="main-text">
              <div>审批完成，邮件通知申请人，若想开通策略，可在我的工作区--DMZ域公网申请--DMZ域公网IP策略开通申请，下载模板</div>
            </div>
            <div class="main-icon"><Icon type="ios-arrow-forward" /></div>
          </div>
        </Col>
        <Col span="8" class="right-row">
          <div class="main-item">
            <div class="main-text">
              <div>根据提示填写模板信息，填写后，上传到系统，提交审批，请不要更改模板格式，以免上传失败</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <Modal title="注意事项" v-model="modal" footer-hide>
      <h3 style="color: #b6520a">公网策略申请前需要先申请公网ip，且只有dmz域主机才可以申请映射的公网ip</h3>
      <p style="margin-top: 20px">一、、字段填写说明</p>
      <p>1、绿色背景标识的字段为必填项。</p>
      <p>2、填写“源地址”字段时，请包括源主机的真实IP、虚拟IP。</p>
      <p>3、“源地址对应防火墙的映射IP”字段，为选填项；若源地址在途经防火墙时，产生了映射IP，请填写。</p>
      <p>4、“目的地址对应防火墙的映射IP”字段，为选填项；若目的地址在途经防火墙时，产生了映射IP，请填写。</p>
      <p>5、请根据网络访问方向及策略用途填写，端口应最小化，缺省可不填；目的端口应根据实际需要填写，如20-21 ftp。</p>
      <p>6、请根据网络设备所在域或系统分子表填写，一张表只填写一类域间访问策略信息，如信息港核心域至博瑞琪核心域。</p>
      <p>7、策略单中写明是承载网或公网访问策略</p>
      <p>8、请业务平台统一网络申请接口人，接口人如有问题请及时联系各系统网络工程师或集团网络工程师咨询。</p>
      <p style="margin-top: 20px">二、IP地址接入策略申请及开通期间，你公司作为一级运营支撑系统的一个生产接入机构，需满足以下条件：</p>
      <p>1、在开通期间，若由你方申请开通的IP或端口发起的网络攻击，你方承担一切责任。</p>
      <p>2、若网络方案发生变更，需重新提交申请。</p>
      <p>3、申请工单须在申请开通时间前的三个工作日前提交。</p>
      <p>4、工单发起方需对所填信息清楚、对内容把关，因信息错误引起的时间延误等，由工单发起方负责。</p>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'IPAddressDes',
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
  .IPAddressDes-main{
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
    .IPAddressDes-main{
      font-size: 0.9em;
    }
  }
</style>
