<template>
  <div class="devWorkflowManagement-main">
    <Row>
      <Col span="6">
        <div @click="typeChange('demand')" class="click">
          <Card class="card-single">
            <p slot="title">需求管理</p>
            <p>与需求管理平台对接，接收需求管理平台下发的子任务单，进行需求流程的管理</p>
          </Card>
        </div>
      </Col>
      <Col span="6">
        <div @click="typeChange('workHour')" class="click">
          <Card class="card-double">
            <p slot="title">工时管理</p>
            <p>采用三类工时管理，，支持录入工时，记录每人每类工时的消耗和工作内容，统计需求实际消耗工时</p>
            <div class="card-route" @click="skip('workloadManagement')">核算工时流程查看</div>
          </Card>
        </div>
      </Col>
      <Col span="6">
        <div @click="typeChange('document')" class="click">
          <Card class="card-single">
            <p slot="title">文档管理</p>
            <p>满足审计要求，各系统以需求为单位按阶段上传文档，对文档进行全周期管理</p>
          </Card>
        </div>
      </Col>
      <Col span="6">
        <div @click="typeChange('version')" class="click">
          <Card class="card-double">
            <p slot="title">版本管理</p>
            <p>实现上线版本关联需求和发布包，并通过代码自动打包，实现上线版本发布包管理</p>
            <div class="card-route" @click="skip('userManual')">具体操作查看手册</div>
          </Card>
        </div>
      </Col>
    </Row>
    <div class="tap-main">
      <div class="demand-management" v-if="type === 'demand'"></div>
      <div class="workHour-management" v-if="type === 'workHour'"></div>
      <div class="document-management" v-if="type === 'document'"></div>
      <div class="version-management" v-if="type === 'version'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'devWorkflowManagement',
  components: {
  },
  data () {
    return {
      type: 'demand'
    }
  },
  mounted () {
    //
  },
  methods: {
    skip(name) {
      this.$router.push({ name: name })
    },
    typeChange(name) {
      this.type = name
    }
  }
}
</script>

<style lang="less">
  .devWorkflowManagement-main{
    height: 100%;
    font-size: 0.8em!important;
    .ivu-row{
      height: 30%;
      .ivu-col-span-6{
        height: 100%;
        .click{
          height: 100%;
          .card-single{
            width: 100%;
            height: 100%;
            box-shadow: 13px -20px 20px 20px rgba(0, 0, 0, 0.3);
            cursor: pointer;
          }
          .card-double{
            width: 100%;
            height: 100%;
            background-color:rgba(87, 92, 127, 1);
            box-shadow: 15px -20px 14px 20px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            p{
              color: #fff;
            }
          }
        }
      }
    }
    .card-route{
      position: absolute;
      bottom: 12px;
      color: #57a3f3;
      cursor: pointer;
    }
    .tap-main{
      height: 70%;
      width: 100%;
      text-align: center;
      .demand-management{
        height: 95%;
        width: 100%;
        background-image: url("../../../assets/images/devWorkflow1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .workHour-management{
        height: 95%;
        width: 100%;
        background-image: url("../../../assets/images/devWorkflow2.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .document-management{
        height: 95%;
        width: 100%;
        background-image: url("../../../assets/images/devWorkflow3.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .version-management{
        height: 95%;
        width: 100%;
        background-image: url("../../../assets/images/devWorkflow4.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }
  }
</style>
