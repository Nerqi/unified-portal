<template>
  <div class="userManual-main">
    <p>提供关于一级开发测试平台各系统使用的操作手册，点击文档名称可下载查看</p>
    <div class="userManual-down">
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('LOGIN_handbook.doc')"/>测试开发平台登录手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('AIALM_handbook.doc')"/>测试开发平台操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('INTEGRATE_HANDBOOK.doc')"/>联调管理操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('VpnClientManual.rar')"/>VPN使用手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('RESOURCE_HANDBOOK.doc')"/>资源管理操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('WECHAT_HANDBOOK.doc')"/>微信企业号操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('jenkinsPackage.docx')"/>自动打包操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('codeManageManual.zip')"/>代码管理操作手册</p>
      <p><Icon type="md-cloud-download" size="30" style="cursor:pointer; margin-right: 10px" @click="down('cosmicAccountWorkload.docx')"/>核算工作量录入操作手册</p>
    </div>
  </div>
</template>

<script>
  import services from '../../../api/services'
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
      const elemIF = document.createElement(`iframe`)
      elemIF.src = services.userManual.downAttach + '?action=downHandBook' + '&fileName=' + type + '&uid=liuchao'
      elemIF.style.display = `none`
      document.body.appendChild(elemIF)
      // this.$http.post(services.userManual.downAttach + '?action=downHandBook' + '&fileName=' + type + '&uid=liuchao', { responseType: 'arraybuffer' }).then(res => {
      //   let fileName = decodeURI(res.headers['content-disposition'].split(';')[1].split('=')[1]) // 获取浏览器response header中的文件名
      //   let blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=UTF-8' })
      //   if ('msSaveOrOpenBlob' in navigator) {
      //     // ie使用的下载方式
      //     window.navigator.msSaveOrOpenBlob(blob, fileName)
      //   } else {
      //     let url = URL.createObjectURL(blob)
      //     let link = document.createElement('a')
      //     link.style.display = 'none'
      //     link.href = url
      //     link.setAttribute('download', fileName)
      //     document.body.appendChild(link)
      //     link.click()
      //   }
      // })
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
