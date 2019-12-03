<template>
  <div class="weChatNum">
    <Row>
      <Col span="8">
        <Card class="card-single" dis-hover>
          <p slot="title">消息通知</p>
          <p>推送系统公告，用户代办工单和告警等信息通知</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-double" dis-hover>
          <p slot="title">联调测试</p>
          <p>推送联调日报和联调任务等信息，推送实时报告，包括联调日报和缺陷日报，推送个人相关任务缺陷等信息</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-single" dis-hover>
          <p slot="title">我的周报</p>
          <p>推送需求、工时和资源周报，可查询历史周报</p>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span="8">
        <Card class="card-double" dis-hover>
          <p slot="title">我的任务</p>
          <p>推送个人相关代办工单任务及任务通知</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-single" dis-hover>
          <p slot="title">我的工单</p>
          <p>推送个人相关代办工单，展示工单内容，支持查询工单和工单申请，工单申请包括计划时间修改和账号申请</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-double" dis-hover>
          <p slot="title">我的日志</p>
          <p>支持录入工时日志，同步到PC端</p>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span="8">
        <Card class="card-single" dis-hover>
          <p slot="title">评价报表</p>
          <p>推送评价结果报表，可查询个人评价报表</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'weChatNum',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    //
  },
  methods: {
  }
}
</script>

<style lang="less">
  .weChatNum{
    font-size: 0.8em!important;
    height: 100%;
    .ivu-row{
      height: 33.33%;
      .ivu-col-span-8{
        height: 100%;
        .card-single{
          width: 100%;
          height: 100%;
          background-color:rgba(87, 92, 127, 1);
          color: #fff;
          p{
            color: #fff;
          }
        }
        .card-double{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
