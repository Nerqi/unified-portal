<template>
  <div class="userManual-main">
    <p>提供关于一级开发测试平台各系统使用的操作手册，点击文档名称可下载查看</p>
    <div class="userManual-down">
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('warning')"/>测试开发平台登录手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('warning')"/>测试开发平台操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('warning')"/>联调管理操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('warning')"/>VPN使用手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('warning')"/>资源管理操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('warning')"/>微信企业号操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('warning')"/>自动打包操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('warning')"/>代码管理操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('warning')"/>核算工作量录入操作手册</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userManual',
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
    down(type) {
      this.$Message[type]({
        background: true,
        content: '还未提供下载接口，目前无法下载~~'
      })
    }
  }
}
</script>

<style lang="less">
  .userManual-main{
    width: 100%;
    margin-top: 2rem;
    margin-left: 10rem;
    .userManual-down{
      margin-top: 2rem;
      p{
        margin-bottom: 1rem;
      }
    }
  }
</style>
