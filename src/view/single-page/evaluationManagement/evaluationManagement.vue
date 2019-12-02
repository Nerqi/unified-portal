<template>
  <div class="evaluationManagement-main">
    <Row>
      <Col span="8">
        <Card class="card-single" dis-hover>
          <p slot="title">评价结果报表</p>
          <p>支持对评价结果报表的查询和导出，查询菜单为评价结果管理--报表管理</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-double" dis-hover>
          <p slot="title">评价统计视图</p>
          <p>展示周期时长内的需求数，工时总量，消耗工时，未完成的需求数，支持对各项目组得分排名，工时消耗情况，需求完成数，需求完成情况和周期类报表的查询，菜单为评价结果管理--统计视图</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-single" dis-hover>
          <p slot="title">评价结果推送</p>
          <p>支持推送评价结果到微信企业号，可在微信端查看评价结果报表和统计视图</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'evaluationManagement',
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
  .evaluationManagement-main{
    font-size: 0.8em!important;
    height: 100%;
    .ivu-row{
      height: 30%;
      .ivu-col-span-8{
        height: 100%;
        .card-single{
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .card-double{
          width: 100%;
          height: 100%;
          background-color: #d2e7fd;
          cursor: pointer;
        }
      }
    }
  }
</style>
