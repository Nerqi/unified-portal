<template>
  <div class="wechatOpView-main">
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  name: 'wechatOpView',
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
  .wechatOpView-main{
    padding-top: 2rem;
    padding-left: 2rem;
    .img{
      width: 70%;
      height: 40rem;
      background-image: url(../../../assets/images/wechatOpView.png);
      background-repeat: no-repeat;
      background-size:100% 100%;
    }
  }
</style>
