<template>
  <Layout class="layout">
    <Header :style="{height: headerHeight}">
      <HeaderBar :type="type"></HeaderBar>
    </Header>
    <Content class="content" :style="{height: fullHeight}">
      <div class="login">
        <div class="login-form">
          <Form>
            <Row style="margin-top: 1rem">
              <Col span="12" style="padding-left: 2rem; font-size: 30px">登陆</Col>
              <Col span="12"><h5 style="color: #348EED; cursor: pointer">没有账号？立即注册</h5></Col>
            </Row>
            <Row style="margin-top: 1rem; text-align: center">
              <Col span="12" offset="6">
                <FormItem>
                  <Input></Input>
                </FormItem>
              </Col>
            </Row>
            <Row style="margin-top: 1rem; text-align: center">
              <Col span="12" offset="6">
                <FormItem>
                  <Input></Input>
                </FormItem>
              </Col>
            </Row>
            <Row style="margin-top: 1rem; text-align: center">
              <Col span="12" offset="6">
                <FormItem>
                  <Input></Input>
                </FormItem>
              </Col>
            </Row>
            <Row style="margin-top: 1rem; text-align: center">
              <Col span="12" offset="6">
                <Button type="primary">Primary</Button>
              </Col>
            </Row>
          </Form>
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
    .login{
      height: 100%;
      width: 100%;
      background-image: url("../../assets/images/loginForm.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
     justify-content: center;
      .login-form{
        width: 25%;
        background-color: white;
        .ivu-row{
          display: flex;
          align-items: center;
        }
      }
    }
  }
</style>
