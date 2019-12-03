<template>
  <div class="personalCenter">
    <div class="personal">
      <div class="personal-left">
        <div class="avatar">
          <Icon type="ios-contact-outline" class="avatar-icon"/>
        </div>
        <div class="user-info">
          <div class="user-info-main">
          <p>账号：ADMINISTRATOR</p>
          <p>电话：13487859874</p>
          <p>邮箱：admin@aialm.com</p>
          </div>
        </div>
      </div>
      <div class="personal-right">
        <div class="orderNum-item">
          <p>待办工单</p>
          <div class="circle">6</div>
        </div>
        <div class="orderNum-item">
          <p>我的资源</p>
          <div class="circle">0</div>
        </div>
        <div class="orderNum-item">
          <p>需求总量</p>
          <div class="circle">148</div>
        </div>
        <div class="orderNum-item">
          <p>重点需求</p>
          <div class="circle">5</div>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order-left">
        <div class="order-left-title">
          <label @click="order_nav = 1">待办工单<p>6</p></label>
          <!--<label @click="order_nav = 2">待完结工单<p>0</p></label>-->
        </div>
        <div class="order-left-main">
          <ul class="list-group" v-for="(item, index) in order_list" :key="index">
            <li class="list-group-item">
              {{item.A}} | {{item.B}} |  {{item.C}} | {{item.D}}
            </li>
          </ul>
        </div>
      </div>
      <div class="order-right">
        <div class="order-right-title">
          <label>系统公告</label>
        </div>
        <div class="order-right-main">
          <ul class="list-group" v-for="(item, index) in system_notice_list" :key="index">
            <li class="list-group-item">
              <div>{{item.A}}</div>
              <ul v-for="(child_item, child_index) in item.children" :key="child_index">
                <li>
                  {{child_item}}
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
            <Icon type="md-warning" v-if="item.F === '灾难告警'" style="color: red;font-size: 2rem"/>
            <Icon type="md-warning" v-if="item.F === '一般严重'" style="color: rgb(229, 111, 52);font-size: 2rem"/>
            <Icon type="md-warning" v-if="item.F === '严重告警'" style="color: #ffaa2a;font-size: 2rem"/>
            <Icon type="md-warning" v-if="item.F === '普通告警'" style="color: #f6f117;font-size: 2rem"/>
            <label>{{item.F}}</label>
            <p style=" margin-left: 3rem;">{{item.A}}  |  {{item.B}}  |  {{item.C}}  |  {{item.D}}  |  {{item.E}}</p>
          </li>
        </ul>
        <ul class="list-group" v-if="table_nav === 2" v-for="(item, index) in demand_alarm_list" :key="index">
          <li class="list-group-item">
            <p>{{item.A}}  ： {{item.B}}</p>
          </li>
        </ul>
        <Table v-if="table_nav === 3" :columns="important_columns" :data="important_data" border></Table>
        <!-- <iframe  v-if="table_nav === 3" src="https://www.taobao.com/" width="100%" height="98%" frameborder="0" scrolling="auto"></iframe> -->
        <Table v-if="table_nav === 4" :columns="physical_columns" :data="physical_data" border></Table>
        <Table v-if="table_nav === 5" :columns="virtual_columns" :data="virtual_data" border></Table>
        <Table v-if="table_nav === 6" :columns="demand_info_columns" :data="demand_info_data" border></Table>
      </div>
    </div>
  </div>
</template>

<script>
import demo_list from './listDemo'
export default {
  name: 'personalCenter',
  components: {
  },
  data () {
    return {
      order_nav: 1,
      table_nav: 1
    }
  },
  computed: {
    order_list() {
      if (this.order_nav === 1) {
        return demo_list.todo_order_list
      }
      if (this.order_nav === 2) {
        return demo_list.tofinish_order_list
      }
    },
    system_notice_list() {
      return demo_list.system_notice_list
    },
    resource_alarm_list() {
      return demo_list.resource_alarm_list
    },
    demand_alarm_list() {
      return demo_list.demand_alarm_list
    },
    physical_columns() {
      return demo_list.physical_columns
    },
    physical_data() {
      return demo_list.physical_data
    },
    virtual_columns() {
      return demo_list.virtual_columns
    },
    virtual_data() {
      return demo_list.virtual_data
    },
    demand_info_columns() {
      return demo_list.demand_info_columns
    },
    demand_info_data() {
      return demo_list.demand_info_data
    },
    important_columns() {
       return demo_list.important_columns
    },
    important_data() {
      return demo_list.important_data
    }
  },
  mounted () {
    console.dir(this.system_notice_list)
  },
  methods: {
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
