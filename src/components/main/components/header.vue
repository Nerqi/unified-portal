<template>
  <div class="header-layout">
    <div class="header-left">
      <div class="header-left-img"></div>
      <div class="divider"><Divider type="vertical"> </Divider></div>
      <p class="header-p"><strong>一级开发测试平台</strong></p>
    </div>
    <div class="header-menu">
      <a @click="skip('home')">首页</a>
      <a href="https://www.taobao.com/">一级系统测试管理平台</a>
      <a href="https://www.taobao.com/">评价管理系统</a>
      <a href="https://www.taobao.com/">容器管理系统</a>
      <a href="https://www.taobao.com/">重点需求看板</a>
      <a href="https://www.taobao.com/">Devops</a>
    </div>
    <div class="header-right">
      <Dropdown @on-click="handleSelect" trigger="hover" @on-visible-change="change">
        <Icon type="ios-list" style="cursor:pointer;" size="35" color="#128af6" v-if="type === 'main'"/>
        <DropdownMenu slot="list" v-for="item in menu_list" :key="item.menu_url">
          <DropdownItem v-if="!item.children_list" :name="item.menu_url" :selected="item.selected">{{item.menu_name}}</DropdownItem>
          <Dropdown placement="right-start" :name="item.menu_url" v-if="item.children_list">
            <DropdownItem>
              {{item.menu_name}}
              <Icon type="ios-arrow-forward"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list">
              <DropdownItem :name="item_child.menu_url" v-for="(item_child) in item.children_list" :key="item_child.menu_url" :selected="item_child.selected">{{item_child.menu_name}}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownMenu>
      </Dropdown>
      <Poptip trigger="hover">
        <Icon style="cursor:pointer;" type="ios-volume-up" color="#white" v-if="type === 'login'"/>
        <div class="content-main" slot="content">
          <h3>2019-10-19</h3>
          <p @click="showModel(true)">一级系统测试管理平台上线通知</p>
          <h3>2019-10-19</h3>
          <p @click="showModel(true)">评价管理系统上线通知</p>
        </div>
      </Poptip>
      <Button type="primary" v-if="type === 'login'" @click="skip('login')" style="margin-right: 1rem; font-size: 0.5em">登陆/注册</Button>
      <Poptip trigger="hover">
        <Icon style="cursor:pointer;" type="ios-volume-up" color="#128af6" v-if="type === 'main'"/>
        <div class="content-main" slot="content">
          <h3>2019-10-19</h3>
          <p @click="showModel(true)">一级系统测试管理平台上线通知</p>
          <h3>2019-10-19</h3>
          <p @click="showModel(true)">评价管理系统上线通知</p>
        </div>
      </Poptip>
      <Icon style="cursor:pointer;" type="md-add-circle" color="#128af6" v-if="type === 'main'" @click="skip('addProject')"/>
      <Icon type="md-person" color="#128af6" v-if="type === 'main'"/>
      <p v-if="type === 'main'" style="font-size: 0.5em">测试账号（集团一级系统)</p>
      <Icon style="cursor:pointer;" type="ios-power" color="#128af6" v-if="type === 'main'" @click="skip('home')"/>
    </div>
    <Modal v-model="model" @on-cancel="showModel(false)" footer-hide>
      <p style="margin-top: 1rem">一级系统测试管理平台于2019-10-30 20:00进行升级上线，请勿进行任何操作！</p>
      <p style="margin-top: 1rem">一级系统测试管理平台本次上线新增IP到期提醒</p>
      <p style="margin-top: 1rem">一级系统测试管理平台本次上线新增云存储到期提醒</p>
    </Modal>
  </div>
</template>
<script>
  // import services from '../../../api/services'
  import Menu from '../menu'
  export default {
    name: 'HeaderBar',
    props: {
      type: {
        type: String,
        default: '',
        newRoute: '',
        tmp_menu_list: ''
      }
    },
    data () {
      return {
        model: false
      }
    },
    computed: {
      menu_list() {
        return Menu
      }
    },
    watch: {
      '$route' (newRoute) {
        // this.newRoute = newRoute
      }
    },
    mounted() {},
    methods: {
      skip(type) {
        this.$router.push({ name: type })
        // let tmp = {
        //   phoneNum: '13596459384'
        // }
        // this.$http.post(services.getValidation.getValidation, tmp).then(res => {}) // demo接口
      },
      showModel(value) {
        this.model = value
      },
      handleSelect (name) {
        this.$router.push({ name: name })
      },
      change() {
        // console.dir(this.newRoute)
        // console.dir(this.menu_list)
        // this.tmp_menu_list = this.menu_list
        // console.dir(this.tmp_menu_list)
        // for (let i = 0; i < this.tmp_menu_list.length; i++) {
        //   if (this.tmp_menu_list[i].menu_url === this.newRoute.name) {
        //     this.tmp_menu_list[i].selected = true
        //     return
        //   }
        //   if (this.tmp_menu_list[i].children_list && this.tmp_menu_list[i].children_list.length) {
        //     for (let j = 0; j < this.tmp_menu_list[i].children_list.length; i++) {
        //       if (this.tmp_menu_list[i].children_list[j].menu_url === this.newRoute.name) {
        //         this.tmp_menu_list[i].children_list[j].selected = true
        //         return
        //       }
        //     }
        //   }
        // }
      }
    }
  }
</script>
<style lang="less">
  .header-layout{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .header-left{
      width: 25%;
      height: 100%;
      display: flex;
      margin-left: 0.5rem;
      align-items: center;
      .header-left-img{
        height: 5rem;
        width: 5rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        background-image: url(../../../assets/images/yidong.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .divider{
        height: 100%;
        width: 5%;
        display: flex;
        align-items: center;
        .ivu-divider{
          height: 85%!important;
        }
      }
      .header-p{
        width: 75%;
        font-size: 1.5rem;
        color: white;
        margin-left: 1rem;
      }
      @media screen and (min-width: 3072px){
        .header-p{
          font-size: 1.7rem;
        }
      }
      @media screen and (min-width: 4800px){
        .header-p{
          font-size: 1.9rem;
        }
      }
      @media screen and (max-width: 1535px) {
        .header-p{
          font-size: 1rem;
        }
      }
    }
    .header-menu{
      display: flex;
      align-items: center;
      flex-direction: row;
      height: 100%;
      width: 50%;
      a{
        font-size: 1rem;
        margin-left: 2rem;
        color: white;
      }
      @media screen and (min-width: 3072px){
        a{
          font-size: 1.2rem;
        }
      }
      @media screen and (min-width: 4800px){
        a{
          font-size: 1.5rem;
        }
      }
      @media screen and (max-width: 1535px) {
        a{
          font-size: 0.6rem;
        }
      }
    }
    .header-right{
      height: 100%;
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: white;
      font-size: 1.5em;
      .content-main{
        color: #000c17;
        h3{
          margin-top: 0.3rem;
        }
        p{
          cursor: pointer;
        }
      }
    }
  }
</style>
