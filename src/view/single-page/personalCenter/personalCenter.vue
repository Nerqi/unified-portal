<template>
  <div class="personalCenter">
    <div class="personal">
      <div class="personal-left">
        <div class="avatar">
          <Icon type="ios-contact-outline" class="avatar-icon"/>
        </div>
        <div class="user-info">
          <div class="user-info-main">
          <p>账号：{{username}}</p>
          <p>电话：{{billId}}</p>
          <p>邮箱：{{email}}</p>
          </div>
        </div>
      </div>
      <div class="personal-right">
        <div class="orderNum-item">
          <p>待办工单</p>
          <div class="circle">{{todoOrderCount}}</div>
        </div>
        <div class="orderNum-item">
          <p>我的资源</p>
          <div class="circle">{{resCount}}</div>
        </div>
        <div class="orderNum-item">
          <p>需求总量</p>
          <div class="circle">{{reqCount}}</div>
        </div>
        <div class="orderNum-item">
          <p>重点需求</p>
          <div class="circle">{{impReqCount}}</div>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order-left">
        <div class="order-left-title">
          <label @click="order_nav = 1">待办工单<p>{{todoOrderCount}}</p></label>
          <!--<label @click="order_nav = 2">待完结工单<p>0</p></label>-->
        </div>
        <div class="order-left-main">
          <ul class="list-group" v-for="(item, index) in order_list" :key="index">
            <li class="list-group-item" @click="showPage(3)">
              {{item.objTag}} | {{item.objName}} |  {{item.taskName}} | {{item.createTime}}
            </li>
          </ul>
        </div>
      </div>
      <div class="order-right">
        <div class="order-right-title">
          <label>系统公告</label>
        </div>
        <div class="order-right-main">
          <ul class="list-group">
            <li class="list-group-item">
              <h4>{{pubTime}} 一级系统测试管理平台系统更新公告</h4>
              <ul v-for="(item, index) in system_notice_list" :key="index">
                <li>
                  {{item}}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="tabs-title">
        <label @click="table_nav = 1">资源告警</label>
        <label @click="table_nav = 2">需求告警</label>
        <label @click="table_nav = 3">重点需求信息</label>
        <label @click="table_nav = 4">物理机使用统计表</label>
        <label @click="table_nav = 5">虚拟机使用统计表</label>
        <label @click="table_nav = 6">在建需求信息</label>
      </div>
      <div class="tabs-main">
        <ul class="list-group" v-if="table_nav === 1" v-for="(item, index) in resource_alarm_list" :key="index">
          <li class="list-group-item">
            <Icon type="md-warning" v-if="item.priority === '1'" style="color: red;font-size: 2rem"/>
            <Icon type="md-warning" v-if="item.priority === '2'" style="color: rgb(229, 111, 52);font-size: 2rem"/>
            <Icon type="md-warning" v-if="item.priority === '3'" style="color: #ffaa2a;font-size: 2rem"/>
            <Icon type="md-warning" v-if="item.priority === '4'" style="color: #f6f117;font-size: 2rem"/>
            <label>{{item.priority}}</label>
            <p style=" margin-left: 3rem;">{{item.name}}  |  {{item.ip}}  |  {{item.monitorContent}}  |  {{item.monitorDate}}  |  {{item.duration}}</p>
          </li>
        </ul>
        <ul class="list-group" v-if="table_nav === 2" v-for="(item, index) in demand_alarm_list" :key="index">
          <li class="list-group-item">
            <p>{{item.alertTime}} {{item.alertType}} ： {{item.reqTag}} | {{item.reqName}} : {{item.alertContent}}</p>
          </li>
        </ul>
        <div class="personalCenter-ivu-table-row">
          <Table v-if="table_nav === 3" :columns="important_columns" :data="important_data" border @on-row-click="showPage(4)"></Table>
        </div>
        <!-- <iframe  v-if="table_nav === 3" src="https://www.taobao.com/" width="100%" height="98%" frameborder="0" scrolling="auto"></iframe> -->
        <Table v-if="table_nav === 4" :columns="physical_columns" :data="physical_data" border></Table>
        <div class="virtual-columns-get" v-if="table_nav === 5">
          <p>项目组：</p>
          <Select style="width:200px" v-model="groupId" @on-change="groupIdChange" placeholder="请选择项目组">
            <Option v-for="item in projectList" :value="item.groupId" :key="item.groupId">{{ item.groupName }}</Option>
          </Select>
        </div>
        <Table v-if="table_nav === 5" :columns="virtual_columns" :data="virtual_data" border></Table>
        <Table v-if="table_nav === 6" :columns="demand_info_columns" :data="demand_info_data" border></Table>
      </div>
    </div>
  </div>
</template>

<script>
import demo_list from './listDemo'
import services from '../../../api/services'
export default {
  name: 'personalCenter',
  components: {
  },
  data () {
    return {
      order_nav: 1,
      table_nav: 1,
      username: '',
      billId: '',
      email: '',
      impReqCount: '',
      reqCount: '',
      todoOrderCount: '',
      resCount: '',
      order_list: [],
      system_notice_list: [],
      pubTime: '',
      resource_alarm_list: [],
      demand_alarm_list: [],
      physical_data: [],
      virtual_data: [],
      demand_info_data: [],
      projectList: [],
      groupId: ''
    }
  },
  computed: {
    physical_columns() {
      return demo_list.physical_columns
    },
    virtual_columns() {
      return demo_list.virtual_columns
    },
    demand_info_columns() {
      return demo_list.demand_info_columns
    },
    important_columns() {
       return demo_list.important_columns
    }
  },
  mounted () {
    this.getUserInfo()
    this.getGroupInfo()
    this.getReqCountInfo()
    this.getMacCountInfo()
    this.getUndoOrder()
    this.getVersionDeclaration()
    this.getResMonitor()
    this.getReqAler()
    this.getImportReq()
    this.getHostReport()
    this.getConstructReq()
  },
  methods: {
    groupIdChange() {
      this.getVirReport()
    },
    getUserInfo() {
      this.$http.get(services.personalCenter.getUserInfo).then(res => {
        if (res && res.data) {
          this.username = res.data.username
          this.billId = res.data.billId
          this.email = res.data.email
        }
      })
    },
    getGroupInfo() {
      this.$http.get(services.personalCenter.getGroupInfo).then(res => {
        if (res && res.data) {
          this.projectList = res.data
          this.groupId = this.projectList[0].groupId
          this.getVirReport()
        }
      })
    },
    getReqCountInfo() {
      this.$http.get(services.personalCenter.getReqCountInfo + '?action=getReqCountInfo').then(res => {
        if (res && res.data && res.data.result === 'Y') {
          this.impReqCount = res.data.impReqCount
          this.reqCount = res.data.reqCount
          this.todoOrderCount = res.data.todoOrderCount
        } else {
          this.impReqCount = ''
          this.reqCount = ''
          this.todoOrderCount = ''
          this.$Message.warning(res.data.message)
        }
      })
    },
    getMacCountInfo() {
      this.$http.get(services.personalCenter.getMacCountInfo + '?action=getMacCountInfo').then(res => {
        if (res && res.data && res.data.result === 'Y') {
          this.resCount = res.data.resCount
        } else {
          this.resCount = ''
          this.$Message.warning(res.data.message)
        }
      })
    },
    getUndoOrder() {
      this.$http.get(services.personalCenter.getUndoOrder + '?action=getUndoOrder').then(res => {
        if (res && res.data && res.data.result === 'Y' && res.data.orders) {
          this.order_list = res.data.orders
        } else {
          this.order_list = []
          this.$Message.warning(res.data.message)
        }
      })
    },
    getVersionDeclaration() {
      this.$http.get(services.personalCenter.getVersionDeclaration + '?action=getVersionDeclaration').then(res => {
        if (res && res.data && res.data.result === 'Y' && res.data.logs) {
          this.pubTime = res.data.pubTime
          this.system_notice_list = res.data.logs
        } else {
          this.pubTime = ''
          this.system_notice_list = []
          this.$Message.warning(res.data.message)
        }
      })
    },
    getResMonitor() {
      this.$http.get(services.personalCenter.getResMonitor + '?action=getResMonitor').then(res => {
        if (res && res.data && res.data.result === 'Y' && res.data.rows) {
          this.resource_alarm_list = res.data.rows
        } else if (res && res.data && res.data.result === 'N') {
          this.resource_alarm_list = []
          this.$Message.warning(res.data.message)
        } else {
          this.resource_alarm_list = []
          this.$Message.warning('服务调用出错或无内容返回')
        }
      })
    },
    getReqAler() {
      this.$http.get(services.personalCenter.getResMonitor + '?action=getReqAler').then(res => {
        if (res && res.data && res.data.result === 'Y' && res.data.alerts) {
          this.demand_alarm_list = res.data.alerts
        } else if (res && res.data && res.data.result === 'N') {
          this.demand_alarm_list = []
          this.$Message.warning(res.data.message)
        } else {
          this.demand_alarm_list = []
          this.$Message.warning('服务调用出错或无内容返回')
        }
      })
    },
    getImportReq() {
      this.$http.get(services.personalCenter.getImportReq + '?action=getImportReq').then(res => {
        if (res && res.data && res.data.result === 'Y' && res.data.reqs) {
          this.important_data = res.data.reqs
        } else if (res && res.data && res.data.result === 'N') {
          this.important_data = []
          this.$Message.warning(res.data.message)
        } else {
          this.important_data = []
          this.$Message.warning('服务调用出错或无内容返回')
        }
      })
    },
    getHostReport() {
      let page = 1
      let size = 500
      this.$http.get(services.personalCenter.getHostReport + '?action=getHostReport' + '&page=' + page + '&size=' + size).then(res => {
        if (res && res.data && res.data.result === 'Y' && res.data.data) {
          this.physical_data = res.data.data
        } else if (res && res.data && res.data.result === 'N') {
          this.physical_data = []
          this.$Message.warning(res.data.message)
        } else {
          this.physical_data = []
          this.$Message.warning('服务调用出错或无内容返回')
        }
      })
    },
    getVirReport() {
      let page = 1
      let rows = 500
      if (this.groupId) {
        let group = this.groupId
        this.$http.get(services.personalCenter.getVirReport + '?action=getVirReport' + '&page=' + page + '&rows=' + rows + '&group=' + group).then(res => {
          if (res && res.data && res.data.result === 'Y' && res.data.rows) {
            this.virtual_data = res.data.rows
          } else if (res && res.data && res.data.result === 'N') {
            this.virtual_data = []
            this.$Message.warning(res.data.message)
          } else {
            this.virtual_data = []
            this.$Message.warning('服务调用出错或无内容返回')
          }
        })
      }
    },
    getConstructReq() {
      this.$http.get(services.personalCenter.getConstructReq + '?action=getConstructReq').then(res => {
        if (res && res.data && res.data.result === 'Y' && res.data.reqs) {
          this.demand_info_data = res.data.reqs
        } else if (res && res.data && res.data.result === 'N') {
          this.demand_info_data = []
          this.$Message.warning(res.data.message)
        } else {
          this.demand_info_data = []
          this.$Message.warning('服务调用出错或无内容返回')
        }
      })
    },
    showPage(num) {
      let access_token = this.$store.getters['user/getAccess_token'] || ''
      if (access_token) {
        this.$publicFunc.showPage(num)
      } else {
        this.$Message.warning('还未登录！')
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>

<style lang="less">
  .personalCenter{
    height: 100%;
    width: 100%;
    padding: 0.5rem;
    .personal{
      height: 25%;
      width: 100%;
      display: flex;
      .personal-left{
        height: 100%;
        width: 40%;
        display: flex;
        margin-right: 1rem;
        background-color: #f4f1f1;
        .avatar{
          height: 100%;
          width: 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
        }
        .user-info{
          height: 100%;
          width: 60%;
          display: flex;
          align-items: center;
        }
      }
      .personal-right{
        height: 100%;
        width: 60%;
        display: flex;
        background-color: #f4f1f1;
        .orderNum-item{
          height: 100%;
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          p{
            margin-bottom: 1rem;
            font-weight: bold;
          }
          .circle{
            width: 30%;
            height: 30%;
            border-radius: 50px;
            line-height:100px;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #000000;
            font-weight: bold;
          }
        }
      }
    }
    .order{
      height: 25%;
      width: 100%;
      display: flex;
      padding-top: 0.5rem;
      .order-left{
        height: 100%;
        width: 60%;
        margin-right: 1rem;
        .order-left-title{
          height: 15%;
          width: 100%;
          background-color: #f4f1f1;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-weight: bold;
          label{
            margin-left: 1rem;
            display: flex;
            cursor: pointer;
            p{
              margin-left: 0.5rem;
            }
          }
        }
        .order-left-main{
          height: 85%;
          width: 100%;
          background: white;
          overflow-y:auto;
          border: 1px solid #f4f1f1;
          .list-group{
            font-size: 0.8em;
            margin-left: 1rem;
            .list-group-item{
              margin-top: 0.5rem;
              cursor: pointer;
            }
          }
        }
      }
      .order-right{
        height: 100%;
        width: 40%;
        .order-right-title{
          height: 15%;
          width: 100%;
          background-color: #f4f1f1;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-weight: bold;
          label{
            margin-left: 1rem;
            display: flex;
            cursor: pointer;
            p{
              margin-left: 0.5rem;
            }
          }
        }
        .order-right-main{
          height: 85%;
          width: 100%;
          background: white;
          overflow-y:auto;
          border: 1px solid #f4f1f1;
          .list-group{
            font-size: 0.8em;
            margin-left: 1rem;
            .list-group-item{
              margin-top: 0.5rem;
            }
          }
        }
      }
    }
    .tabs{
      height: 50%;
      width: 100%;
      padding-top: 0.5rem;
      .tabs-title{
        height: 10%;
        width: 100%;
        background-color: #f4f1f1;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        label{
          margin-left: 1rem;
          display: flex;
          cursor: pointer;
          p{
            margin-left: 0.5rem;
          }
        }
      }
      .tabs-main{
        height: 90%;
        width: 100%;
        background: white;
        overflow-y:auto;
        border: 1px solid #f4f1f1;
        .personalCenter-ivu-table-row{
          .ivu-table-row{
            cursor: pointer;
          }
        }
        .virtual-columns-get{
          height: 2rem;
          padding-top: 0.5rem;
          margin-bottom: 1rem;
          padding-left: 0.5rem;
          display: flex;
        }
        .list-group{
          font-size: 0.8em;
          margin-left: 1rem;
          .list-group-item{
            margin-top: 0.5rem;
            display: flex;
            align-items: center;
            lable{
              font-size: 1.1em;
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
    ul{
      list-style: none;
    }
    li{
      list-style: none;
    }
  }
</style>
