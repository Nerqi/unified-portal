<template>
  <div class="register">
    <div class="login-form">
      <Form class="form">
        <div class="login-info-title">
          <h2>账号注册</h2>
        </div>
        <FormItem>
          <Row type="flex" justify="end">
            <Col span="21">
              <Select placeholder="请选择所属项目组">
                <Option v-for="item in projectList" :value="item.name" :key="item.key">{{ item.name }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row type="flex" justify="end">
            <Col span="21">
              <Select placeholder="请选择所属组织">
                <Option v-for="item in orgList" :value="item.name" :key="item.key">{{ item.name }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row type="flex" justify="end">
            <Col span="21">
              <Input placeholder="请输入用户名"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row type="flex" justify="end">
            <Col span="21" >
              <Input placeholder="设置账号"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row type="flex" justify="end">
            <Col span="21">
              <Select placeholder="请选择角色">
                <Option v-for="item in roleList" :value="item.name" :key="item.key">{{ item.name }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row type="flex" justify="end">
            <Col span="21" >
              <Select placeholder="请选择岗位(可多选)" multiple>
                <Option v-for="item in stationList" :value="item.name" :key="item.key">{{ item.name }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row type="flex" justify="end">
            <Col span="21">
              <Input placeholder="请输入身份证号"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row type="flex" justify="end">
            <Col span="21">
              <Input placeholder="请输入邮箱"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row type="flex" justify="end">
            <Col span="21">
              <Input placeholder="请输入手机号码"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem class="login-info-footer">
          <Button type="primary" class="login-info-footer-btn" @click="submit">注册</Button>
        </FormItem>
      </Form>
      <div class="form-right">
        <p class="loginNavToThree"  @click="loginNavToThree">没有所属项目？立即新增</p>
        <p class="loginText" style="margin-top: 150px">账号命名规则：</p>
        <p class="loginText">1）如果中文名称为2个字，应该为中文名称全拼</p>
        <p class="loginText">2）如果中文名称超过2个字，应该取姓全拼，名取每个字汉语拼音首字母</p>
        <p class="loginText">3）如果账号重名，可以在账号后面加上数字后缀</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      toHome:true
    }
  },
  computed: {
    projectList() {
      return [ { 'name': '一级测试开发平台', 'key': 1 }, { 'name': '内容计费', 'key': 2 }, { 'name': '4A', 'key': 3 }, { 'name': '网状网', 'key': 4 } ]
    },
    orgList() {
      return [ { 'name': '亚信四组（一级测试开发平台）', 'key': 1 }, { 'name': '亚信九组（内容计费）', 'key': 2 }, { 'name': '4A', 'key': 3 }, { 'name': '网状网', 'key': 4 } ]
    },
    roleList() {
      return [ { 'name': '局方负责人', 'key': 1 }, { 'name': '开发组长', 'key': 2 }, { 'name': '测试人员', 'key': 3 }, { 'name': '编码人员', 'key': 4 }, { 'name': '发布人员', 'key': 5 }, { 'name': '资源管理员', 'key': 6 }, { 'name': '联调负责人', 'key': 7 }, { 'name': '联调测试人员', 'key': 8 }, { 'name': '需求人员', 'key': 9 } ]
    },
    stationList() {
      return [ { 'name': '部门员工', 'key': 1 }, { 'name': '部门领导', 'key': 2 }, { 'name': '集成商领导', 'key': 3 }, { 'name': '集成商员工', 'key': 4 }, { 'name': '融合团队', 'key': 5 }, { 'name': '运维', 'key': 6 }, { 'name': '联调负责人', 'key': 7 }, { 'name': '联调测试人员', 'key': 8 } ]
    }
  },
  methods: {
    loginNavToThree() {
      this.$emit('loginNav', 3)
    },
    submit() {
      this.$Message.success({
        content: '尊敬的用户，您已完成账号注册信息的填写，工单编号***************，审批通过后，账号信息以邮件形式发送到您的邮箱，请及时关注邮箱！',
        duration: 0,
        closable: true
      })
      //  this.$emit('loginNav', 1)
       this.$emit('toHome',this.toHome)
    }
  }
}
</script>

<style lang="less">
  .register{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-form{
      width: 35%;
      background-color: white;
      display: flex;
      .form{
        width: 60%;
        .login-info-title{
          margin-bottom: 1rem;
          margin-top: 1rem;
          margin-left: 1rem;
          text-align: center;
        }
        .login-info-footer{
          width: 100%;
          .ivu-form-item-content{
            display: flex;
            flex-direction: row-reverse;
            width: 100%;
            .login-info-footer-btn{
              width: 87.36%;
              font-size: medium
            }
          }
        }
      }
      .form-right{
        width: 40%;
        margin-left: 10px;
        .loginNavToThree{
          font-size: 15px;
          color: #2d8cf0;
          cursor: pointer;
          margin-top: 70px;
        }
        .loginText{
          font-size: 10px;
          color: red;
        }
      }
    }
  }
</style>
