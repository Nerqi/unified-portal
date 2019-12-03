<template>
  <div class="containerService">
    <Row>
      <Col span="8">
        <Card class="card-single">
          <p slot="title">资源视图</p>
          <p>提供网络视图，容器库运行视图，镜像库视图，物理节点视图，监控汇总视图及告警视图</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-double">
          <p slot="title">集群管理</p>
          <p>支持对容器进行集群管理，支持集群的切换，支持对集群应用系统进行逻辑分组和应用系统的管理操作，支持根据项目对物理节点进行分组管理</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-single">
          <p slot="title">应用管理</p>
          <p>支持应用配置，包括用用部署方式，环境参数，应用容器和资源等内容；支持根据项目对应用进行分组管理，支持对应用增加、停止、删除、修改和查看等操作；支持应用自动部署调度，应用自动伸缩，应用水平扩展等操作</p>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span="8">
        <Card class="card-double">
          <p slot="title">集群资源管理</p>
          <p>提供网络管理，根据应用系统，源/目标应用创建网络策略，更改，移除等功能；支持根据设置好的网络策略实现自动部署</p>
          <p>提供存储管理，支持对应用分配的共享存储进行扩容</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-single">
          <p slot="title">镜像管理</p>
          <p>支持镜像本地上传，编辑等功能，支持镜像自动部署和自动分发到所有节点功能</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-double">
          <p slot="title">外带应用管理</p>
          <p>支持导入本地创建的应用，支持将创建的应用策略进行分析转化，支持将创建的应用导入的历史记录查询</p>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span="8">
        <Card class="card-single">
          <p slot="title">监控告警管理</p>
          <p>提供物理节点监控，容器监控，应用监控，网络监控</p>
          <p>提供告警阈值、级别，监控对象的配置和告警呈现</p>
        </Card>
      </Col>
      <Col span="8">
        <Card class="card-double">
          <p slot="title">操作审计</p>
          <p>支持对容器、物理节点、应用、网络、存储相关的日志信息记录和查看，支持记录对容器、物理节点、应用、网络、存储相关的所有操作的审计</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'containerService',
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
  .containerService{
    font-size: 0.8em!important;
    height: 100%;
    .ivu-row{
      height: 33.33%;
      .ivu-col-span-8{
        height: 100%;
        .card-single{
          width: 100%;
          height: 100%;
          box-shadow: 6px 10px 20px 12px rgba(0, 0, 0, 0.3);
        }
        .card-double{
          width: 100%;
          height: 100%;
          background-color:rgba(87, 92, 127, 1);
          p{
            color: #fff;
          }
        }
      }
    }
  }
</style>
