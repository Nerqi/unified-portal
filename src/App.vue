<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    // window.onbeforeunload = function (e) {
    //   console.dir('lalallalalla')
    //   localStorage.clear()
    //   sessionStorage.clear()
    // }
  }
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  margin: 0;
  padding: 0;
  font-size: 1em !important;
}
#app {
  .size;
}
@media screen and (min-width: 3072px) {
  html,body{
    font-size: 1.5em !important;
  }
}
@media screen and (min-width: 4800px) {
  html,body{
    font-size: 1.8em !important;
  }
}
@media screen and (max-width: 1535px) {
  html,body{
    font-size: 12px !important;
  }
}
</style>
