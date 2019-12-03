<template>
  <div class="land">
    <div class="login-form">
      <Form>
        <Row class="login-info-title">
          <Col span="15" class="login-info-title-left">登陆</Col>
          <Col span="9"><h5 class="login-info-title-right" @click="loginNavToSecond">没有账号？立即注册</h5></Col>
        </Row>
        <FormItem>
          <Row>
            <Col span="16" offset="4">
              <Input placeholder="请输入用户名"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="16" offset="4">
              <Input placeholder="请输入密码"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="10" offset="4">
              <Input placeholder="请输入验证码"></Input>
            </Col>
            <Col span="5" offset="1">
              <Button v-if="requestCodeFlag === false" @click="getVerificationCode">获取验证码</Button>
              <span v-if="requestCodeFlag === true && !codeUrl">获取中...</span>
              <img :src="codeUrl" v-if="codeUrl" @click="getVerificationCode"/>
            </Col>
          </Row>
        </FormItem>
        <FormItem class="login-info-footer">
          <Button type="primary" class="login-info-footer-btn" @click="submit">登陆</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'land',
  data () {
    return {
      codeUrl: '',
      requestCodeFlag: false
    }
  },
  methods: {
    /* 获取验证码 **/
    getVerificationCode() {
      this.requestCodeFlag = true
      this.codeUrl = ''
      setTimeout(() => {
        this.codeUrl = 'res.img'
      }, 500)
    },
    loginNavToSecond() {
      this.$emit('loginNav', 2)
    },
    submit() {
      this.$Message.success({
        content: '登陆成功',
        duration: 3,
        closable: true
      })
      this.$router.push({ name: 'userGuide' })
    }
  }
}
</script>

<style lang="less">
  .land{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-form{
      width: 25%;
      background-color: white;
      .login-info-title{
        margin-bottom: 1rem;
        margin-top: 1rem;
        .login-info-title-left{
          padding-left: 2rem;
          font-size: 30px
        }
        .login-info-title-right{
          color: #348EED;
          cursor: pointer
        }
      }
      .login-info-footer{
        text-align: center;
        .login-info-footer-btn{
          width: 66.56%;
          font-size: medium
        }
      }
    }
  }
</style>
