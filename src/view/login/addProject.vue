<template>
  <div class="addProject">
    <div class="login-form">
      <Form ref="addProjectForm" :model="addProjectForm" :rules="addProjectFormRule">
        <div class="login-info-title">
          <h2>新增项目组</h2>
        </div>
        <FormItem prop="groupName">
          <Row>
            <Col span="16"  offset="4">
              <Input placeholder="请输入项目组名称" v-model="addProjectForm.groupName"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="departmentId">
          <Row>
            <Col span="16"  offset="4">
              <Select placeholder="请选择所属部门"  v-model="addProjectForm.departmentId">
                <Option v-for="item in projectList" :value="item.departmentId" :key="item.departmentId">{{ item.departmentName }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="staffName">
          <Row>
            <Col span="16"  offset="4">
              <Input placeholder="请输入用户姓名" v-model="addProjectForm.staffName"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="phone">
          <Row>
            <Col span="16"  offset="4">
              <Input placeholder="请输入手机号码" v-model="addProjectForm.phone"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="email">
          <Row>
            <Col span="16"  offset="4">
              <Input placeholder="请输入邮箱" v-model="addProjectForm.email"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem class="login-info-footer">
          <Button type="primary" class="login-info-footer-btn" @click="submit('addProjectForm')">提交</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  import services from '../../api/services'
export default {
  name: 'addProject',
  data () {
    return {
      projectList: [],
      addProjectForm: {
        groupName: '',
        staffName: '',
        departmentId: '',
        phone: '',
        email: ''
      },
      addProjectFormRule: {
        groupName: [
          { required: true, message: '请输入项目组名称', trigger: 'blur' }
        ],
        staffName: [
          { required: true, message: '请输入申请人姓名', trigger: 'blur' }
        ],
        departmentId: [
          { required: true, message: '请选择项目组所属部门', trigger: 'change', type: 'number' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: this.$publicFunc.validatephone }
        ],
        email: [
          { required: true, message: '请输入电子邮箱', trigger: 'blur' },
          { validator: this.$publicFunc.validaEmails }
        ]
      }
    }
  },
  computed: {},
  mounted() {
    this.getDepartments()
  },
  methods: {
    getDepartments() {
      this.$http.get(services.login.getDepartments).then(res => {
        if (res && res.data && res.data.objects) {
          this.projectList = res.data.objects
        }
      })
    },
    submit(addProjectForm) {
      this.$refs[addProjectForm].validate((valid) => {
        if (valid) {
          let formData = new FormData()
          formData.append('groupName', this.addProjectForm.groupName)
          formData.append('staffName', this.addProjectForm.staffName)
          formData.append('departmentId', this.addProjectForm.departmentId)
          formData.append('phone', this.addProjectForm.phone)
          formData.append('email', this.addProjectForm.email)
          this.$http.post(services.login.createGroup, formData).then(res => {
            if (res.data.success) {
              this.$Message.success({
                content: '尊敬的用户，您提交了一条新增项目组的申请工单，工单编号为' + res.data.msg + '，审批结果将以邮件形式发送到您的邮箱，请注意查收！',
                duration: 0,
                closable: true
              })
              // this.$emit('loginNav', 2)
              this.$router.push({ path: 'home' })
            } else {
              this.$Message.error('新增失败，请联系管理员!')
            }
          })
        } else {
          this.$Message.warning('请完善项目组信息!')
        }
      })
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
