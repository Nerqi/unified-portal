<template>
  <div class="resourceManagement-main">
    <Row>
      <Col span="8" class="left-row">
        <div class="main-item">
          <div class="img1"></div>
          <div class="text">
            <h2>物理资源</h2>
            <p>物理资源包括小型机，X86，Sun主机等，各系统利旧的主机统一纳入测试平台，满足各系统的测试需求</p>
          </div>
        </div>
      </Col>
      <Col span="8" class="center-row">
        <div class="main-item">
          <div class="img2"></div>
          <div class="text">
            <h2>虚拟资源</h2>
            <p>支持多种操作系统，多种规格的虚拟机申请，虚拟机自动创建，同时支持虚拟机一键更换镜像，规格变更，存储增加等</p>
          </div>
        </div>
      </Col>
      <Col span="8" class="right-row">
        <div class="main-item">
          <div class="img3"></div>
          <div class="text">
            <h2>存储资源</h2>
            <p>存储资源管理磁盘阵列，SATA和SAS存储，支持网络共享存储，对存储资源进行申请和分配，并对存储系统进行实时备份，保证数据安全</p>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="8" class="left-row">
        <div class="main-item">
          <div class="img4"></div>
          <div class="text">
            <h2>网络策略</h2>
            <p>提供内网、承载网和公网网络访问方式</p>
          </div>
        </div>
      </Col>
      <Col span="8" class="center-row">
        <div class="main-item">
          <div class="img5"></div>
          <div class="text">
            <h2>资源监控</h2>
            <p>对资源的使用率，读写速度等进行监控，可实时查看监控报表，并设定阈值，当通过预警阈值时，则发送告警邮件。定期生成监控数据，发送监控周报</p>
          </div>
        </div>
      </Col>
      <Col span="8" class="right-row">
        <div class="main-item">
          <div class="img6"></div>
          <div class="text">
            <h2>IP资源</h2>
            <p>对测试域的IP资源进行管理，并设有DMZ域主机资源和IP地址，支持浮IP地址申请</p>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'resourceManagement',
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
  .resourceManagement-main {
    height: 100%;
    width: 100%;

    .ivu-row {
      height: 45%;

      .ivu-col-span-8 {
        height: 100%;
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;

        .main-item {
          height: 100%;
          width: 65%;

          .img1 {
            height: 50%;
            width: 100%;
            background-image: url(../../../assets/images/resource1.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .img2 {
            height: 50%;
            width: 100%;
            background-image: url(../../../assets/images/resource2.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .img3 {
            height: 50%;
            width: 100%;
            background-image: url(../../../assets/images/resource3.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .img4 {
            height: 50%;
            width: 100%;
            background-image: url(../../../assets/images/resource4.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .img5 {
            height: 50%;
            width: 100%;
            background-image: url(../../../assets/images/resource5.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .img6 {
            height: 50%;
            width: 100%;
            background-image: url(../../../assets/images/resource6.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }

          .text {
            padding-left: 1rem;
            height: 50%;
            width: 100%;
            background-color: #f4f1f1;

            p {
              margin-top: 1rem;
            }
          }

          @media screen and (min-width: 3072px) {
            .text {
              p {
                font-size: 1.2rem !important;
              }
            }
          }
          @media screen and (min-width: 4800px) {
            .text {
              p {
                font-size: 1.5rem !important;
              }
            }
          }
          @media screen and (max-width: 1535px) {
            .text {
              p {
                font-size: 0.9rem !important;
              }
            }
          }
        }
      }
    }
  }
</style>
