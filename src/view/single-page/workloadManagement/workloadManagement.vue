<template>
  <div class="workloadManagement-main">
    <Row>
      <Col span="6">
        <Card class="card-single" dis-hover>
          <p slot="title">工作量初步预估</p>
          <p>需求确定后，通过需求改造量初步分析，对需要的工作量进行预估，并录入系统</p>
        </Card>
      </Col>
      <Col span="6">
        <Card class="card-double" dis-hover>
          <p slot="title">工作量功能点核算</p>
          <p>通过功能点估算法，计算每个需求的功能点个数，根据各系统不同的调整系数，计算核算工作量</p>
        </Card>
      </Col>
      <Col span="6">
        <Card class="card-single" dis-hover>
          <p slot="title">实际工作量录入</p>
          <p>通过录入工作日志，记录每个人每类工时的消耗和工作内容，统计需求实际消耗工时</p>
        </Card>
      </Col>
      <Col span="6">
        <Card class="card-double" dis-hover>
          <p slot="title">工作量后评估</p>
          <p>对三类工作量进行对比分析估算每个系统平均生产率分析需求工时各阶段消耗分析工作量变化，以图表形式展示</p>
        </Card>
      </Col>
    </Row>
    <div class="tap-main">
      <div class="img"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workloadManagement',
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
  .workloadManagement-main{
    font-size: 0.8em!important;
    height: 100%;
    .ivu-row{
      height: 30%;
      .ivu-col-span-6{
        height: 100%;
        .card-single{
          width: 100%;
          height: 100%;
          background-color:rgba(87, 92, 127, 1);
          color: #fff;
          box-shadow: 13px -20px 20px 20px rgba(0, 0, 0, 0.3);
           p{
            color: #fff;
          }
        }
        .card-double{
          width: 100%;
          height: 100%;
          box-shadow: 15px -20px 14px 20px rgba(0, 0, 0, 0.3);
          cursor: pointer;        
        }
      }
    }
    .tap-main{
      height: 70%;
      width: 100%;
      text-align: center;
      .img{
        height: 95%;
        width: 100%;
        background-image: url("../../../assets/images/workloadMgt1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }
  }
</style>
