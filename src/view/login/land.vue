<template>
  <div class="land">
    <div class="login-form">
      <Form ref="loginForm" :model="loginForm" :rules="loginFormRule" :label-width="80">
        <Row class="login-info-title">
          <Col span="15" class="login-info-title-left">登录</Col>
          <Col span="9"><h5 class="login-info-title-right" @click="loginNavToSecond">没有账号？立即注册</h5></Col>
        </Row>
        <FormItem prop="username">
          <Row>
            <Col span="16">
              <Input placeholder="请输入用户名" v-model="loginForm.username"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="password">
          <Row>
            <Col span="16">
              <Input placeholder="请输入密码" v-model="loginForm.password"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="code">
          <Row>
            <Col span="10">
              <Input placeholder="请输入验证码" v-model="loginForm.code"></Input>
            </Col>
            <Col span="5" offset="1">
              <Button v-if="requestCodeFlag === false" @click="getVerificationCode">获取验证码</Button>
              <span v-if="requestCodeFlag === true && !codeUrl">获取中...</span>
              <img :src="codeUrl" v-if="codeUrl" @click="getVerificationCode"/>
            </Col>
          </Row>
        </FormItem>
        <FormItem class="login-info-footer">
          <Button type="primary" class="login-info-footer-btn" @click="submit('loginForm')">登录</Button>
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
      requestCodeFlag: false,
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      loginFormRule: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
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
    submit(loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          this.$Message.success({
            content: '登录成功',
            duration: 3,
            closable: true
          })
          let param = 1
          this.$store.dispatch('user/param', param)
          this.$router.push({ name: 'userGuide' })
        } else {
          this.$Message.warning('请完善登录信息!')
        }
      })
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
          cursor: pointer;
          margin-top: 10px;
        }
      }
      .login-info-footer{
        .login-info-footer-btn{
          width: 66.56%;
          font-size: medium
        }
      }
    }
  }
</style>
