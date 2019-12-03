<template>
  <Layout class="layout">
    <Header :style="{height: headerHeight}">
      <HeaderBar :type="type"></HeaderBar>
    </Header>
    <Content class="content" :style="{height: fullHeight}">
        <Carousel class="content-swip" v-model="carouselValue" loop autoplay :autoplaySpeed="autoplaySpeed" trigger="click" arrow="always">
          <CarouselItem class="demo-carousel">
            <div class="img-xys1" :style="{height: imgHeight}">
              <div class="img-xys1-text">
                <h1 style="margin-top: 4rem">需求管理</h1>
                <h1 style="margin-top: 1.5rem; margin-left: 2rem">开发管理</h1>
                <h1 style="margin-top: 1.5rem; margin-left: 4rem">工时管理</h1>
                <h1 style="margin-top: 1.5rem; margin-left: 6rem">版本管理</h1>
                <h1 style="margin-top: 1.5rem; margin-left: 8rem">资源管理</h1>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem class="demo-carousel">
            <div class="img-xys2" :style="{height: imgHeight}">
              <!--<div class="img-xys2-text">-->
                <!--<h1 style="margin-left: 8rem">统计分析</h1>-->
                <!--<h1 style="margin-left: 12rem">综合评价</h1>-->
              <!--</div>-->
            </div>
          </CarouselItem>
          <CarouselItem class="demo-carousel">
            <div class="img-xys3" :style="{height: imgHeight}">
              <div class="img-xys3-text">
                <h1 style="margin-left: 8rem">资源融合管理</h1>
                <h3 style="margin-left: 8rem"> 测试资源集中化管理、合理分配、监控预警</h3>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem class="demo-carousel">
            <div class="img-xys4" :style="{height: imgHeight}">
              <div class="img-xys4-text">
                <h1 style="margin-left: 30rem">服务开放</h1>
                <h1 style="margin-left: 60rem; margin-top: 8rem">移动办公</h1>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      <div class="content-main">
        <div class="content-main-item">
          <div>
            <img src="../../assets/images/loginNum1.png" class="img-content"/>
          </div>
          <p>集中化开发管理，开发阶段全流程及交付物管理</p>
        </div>
        <div class="content-main-item">
          <div>
            <img src="../../assets/images/loginNum2.png" class="img-content"/>
          </div>
          <p>软件质量保障，统计分析，综合评价</p>
        </div>
        <div class="content-main-item">
          <div>
            <img src="../../assets/images/loginNum3.png" class="img-content"/>
          </div>
          <p>提供云化和容器化资源，满足测试所需</p>
        </div>
        <div class="content-main-item">
          <div>
            <img src="../../assets/images/loginNum4.png" class="img-content"/>
          </div>
          <p>同时支持瀑布开发和敏捷开发两种模式</p>
        </div>
      </div>
    </Content>
    <Footer :style="{height: foooterHeight}">
      <FooterBar></FooterBar>
    </Footer>
  </Layout>
</template>

<script>
import HeaderBar from '../../components/main/components/header'
import FooterBar from '../../components/main/components/footer'
export default {
  components: {
    HeaderBar,
    FooterBar
  },
  data () {
    return {
      type: 'login',
      carouselValue: 0,
      autoplaySpeed: 3000,
      fullHeight: document.documentElement.clientHeight + 'px',
      imgHeight: (document.documentElement.clientHeight * (65 / 100)) + 'px',
      // headerHeight: (document.documentElement.clientHeight * (1 / 15)) + 'px',
      headerHeight: 5 + 'rem',
      foooterHeight: (document.documentElement.clientHeight * (3 / 10)) + 'px'
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
  .layout{
    .content{
      .content-swip{
        width: 100%;
        height: 65%;
        .demo-carousel{
          .img-xys1{
            background-image: url("../../assets/images/swip1.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            .img-xys1-text{
              height: 100%;
              width: 50%;
              color: white;
            }
          }
          .img-xys2{
            background-image: url("../../assets/images/swip2.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 100%;
            padding-top: 1rem;
            .img-xys2-text{
              height: 100%;
              width: 50%;
              color: white;
            }
          }
          .img-xys3{
            background-image: url("../../assets/images/swip3.jpg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 100%;
            padding-top: 1rem;
            .img-xys3-text{
              height: 100%;
              width: 50%;
              color: white;
            }
          }
          .img-xys4{
            background-image: url("../../assets/images/swip4.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 100%;
            padding-top: 5rem;
            .img-xys4-text{
              height: 100%;
              width: 100%;
              color: white;
            }
          }
        }
      }
      .content-main{
        height: 35%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        .content-main-item{
          height: 100%;
          width: 20rem;
          margin-right: 6rem;
          margin-left: 6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          .img-content{
            height: 6rem;
          }
        }
      }
    }
  }
</style>
