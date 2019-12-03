<template>
  <div class="addProject">
    <div class="login-form">
      <Form>
        <div class="login-info-title">
          <h2>新增项目组</h2>
        </div>
        <FormItem>
          <Row>
            <Col span="16"  offset="4">
              <Input placeholder="请输入项目组名称"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="16"  offset="4">
              <Select placeholder="请选择所属部门">
                <Option v-for="item in projectList" :value="item.name" :key="item.key">{{ item.name }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="16"  offset="4">
              <Input placeholder="请输入用户姓名"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="16"  offset="4">
              <Input placeholder="请输入手机号码"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="16"  offset="4">
              <Input placeholder="请输入邮箱"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem class="login-info-footer">
          <Button type="primary" class="login-info-footer-btn" @click="submit">提交</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addProject',
  data () {
    return {
    }
  },
  computed: {
    projectList() {
      return [ { 'name': '支撑组', 'key': 1 }, { 'name': '亚信四组', 'key': 2 }, { 'name': '亚信一组', 'key': 3 }, { 'name': 'HP', 'key': 4 }, { 'name': '卓望', 'key': 5 } ]
    }
  },
  methods: {
    submit() {
      this.$Message.success({
        content: '尊敬的用户，您提交了一条新增项目组的申请工单，工单编号为************，审批结果将以邮件形式发送到您的邮箱，请注意查收！',
        duration: 5,
        closable: true
      })
      this.$emit('loginNav', 2)
    }
  }
}
</script>

<style lang="less">
  .addProject{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-form{
      width: 30%;
      background-color: white;
      .loginNavToThree{
        color: #2d8cf0;
        cursor: pointer;
      }
      .login-info-title{
        margin-bottom: 1rem;
        margin-top: 1rem;
        text-align: center;
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
