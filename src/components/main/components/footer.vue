<template>
  <div class="footer-layout">
    <div class="footer-layout-main">
      <div class="footer-main">
        <div class="footer-main-item">
          <p>软件产品</p>
          <a @click="showPage(3)">一级测试系统管理平台</a>
          <a @click="showPage(1)">评价管理系统</a>
          <a href="https://www.taobao.com/">容器管理系统</a>
          <a @click="showPage(4)">重点需求看板</a>
        </div>
        <div class="footer-main-item">
          <p>资料下载</p>
          <a @click="down('AIALM_handbook.doc')">测试开发平台操作手册</a>
          <a @click="down('INTEGRATE_HANDBOOK.doc')">联调管理操作手册</a>
          <a @click="down('WECHAT_HANDBOOK.doc')">微信企业号操作手册</a>
          <a @click="down('VPN_handbook.docx')">VPN使用手册</a>
        </div>
        <div class="footer-main-item">
          <p >联系我们</p>
          <a>邮箱：limian@asiainfo.com</a>
          <a>热线：23456789010</a>
        </div>
        <div class="footer-main-item" style="text-align: center">
          <p>企业微信号</p>
          <div class="img">
            <img src="../../../assets/images/conChatNum.png" class="footer-img"/>
          </div>
        </div>
        <div class="footer-main-item" style="text-align: center">
          <p>微信公众号</p>
          <div class="img">
            <img src="../../../assets/images/weChatNum.png" class="footer-img"/>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-main">
        <p><strong>一级开发测试平台 版权所有.</strong></p>
      </div>
    </div>
  </div>
</template>
<script>
  import services from '../../../api/services'
export default {
  name: 'FooterBar',
  props: {
  },
  data () {
    return {
    }
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    down(type) {
      const elemIF = document.createElement(`iframe`)
      elemIF.src = services.userManual.downAttach + '?action=downHandBook' + '&fileName=' + type + '&uid=liuchao'
      elemIF.style.display = `none`
      document.body.appendChild(elemIF)
    },
    showPage(num) {
      let access_token = this.$store.getters['user/getAccess_token'] || ''
      if (access_token) {
        if (num === 1) {
          let url = 'http://10.12.1.20:9094/estimate/#/login'
          window.location.href = url
        } else if (num === 2) {
          window.location.href = 'http://10.12.1.20:9094/PaaS/#/overview'
        } else if (num === 3) {
          window.location.href = 'http://10.12.1.20:9094/aialm/webframe/shdesktopui/WebAppFrameSet_new.jsp'
        } else if (num === 4) {
          window.location.href = 'http://10.12.1.20:9094/req_KANBAN'
        }
      } else {
        this.$Message.warning('还未登录！')
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>
<style lang="less">
  .footer-layout{
    height: 100%;
    width: 100%;
    .footer-layout-main{
      width: 100%;
      height: 85%;
      display: flex;
      justify-content: center;
      .footer-main{
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        .footer-main-item{
          width: 15rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          color: #f8f8f9;
          p{
            font-size: 1em;
            font-weight: bold;
          }
          a{
            color: white;
            font-size: 0.7em;
            margin-top: 0.5rem;
          }
          @media screen and (min-width: 3072px){
            p{
              font-size: 1rem;
              font-weight: bold;
            }
            a{
              color: white;
              font-size: 1rem;
              margin-top: 0.5rem;
            }
          }
          @media screen and (min-width: 4800px){
            p{
              font-size: 1.4rem;
              font-weight: bold;
            }
            a{
              color: white;
              font-size: 1.4rem;
              margin-top: 0.5rem;
            }
          }
          @media screen and (max-width: 1535px) {
            p{
              font-size: 0.6rem;
              font-weight: bold;
            }
            a{
              color: white;
              font-size: 0.6rem;
              margin-top: 0.6rem;
            }
          }
          .img{
            height: 100%;
            margin-top: 2px;
            .footer-img{
              height: 60%;
            }
          }
        }
      }
    }
    .footer-bottom{
      height: 15%;
      width: 100%;
      display: flex;
      justify-content: center;
      .footer-bottom-main{
        display: flex;
        justify-content: center;
        height: 100%;
        width: 80%;
        border-top: 1px solid #f8f8f9;
        p{
          font-size: 1em;
          font-weight: bold;
        }
        @media screen and (min-width: 3072px){
          p{
            font-size: 1.2rem;
          }
        }
        @media screen and (min-width: 4800px){
          p{
            font-size: 1.5rem;
          }
        }
        @media screen and (max-width: 1535px) {
          p{
            font-size: 0.6rem;
          }
        }
      }
    }
  }
</style>
