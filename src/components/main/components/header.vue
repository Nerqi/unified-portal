<template>
  <div class="header-layout">
    <div class="header-left">
      <div class="header-left-img"></div>
      <div class="divider"><Divider type="vertical"> </Divider></div>
      <p class="header-p"><strong>一级开发测试平台</strong></p>
    </div>
    <div class="header-menu">
      <a @click="skip()">首页</a>
      <a @click="showPage(3)">一级系统测试管理平台</a>
      <a @click="showPage(1)">评价管理系统</a>
      <a @click="showPage(5)">容器管理系统</a>
      <a @click="showPage(4)">重点需求看板</a>
      <a @click="showPage(6)">DevOps</a>
      <a @click="showPage(7)">电子看板</a>
    </div>
    <div class="header-right">
      <Dropdown @on-click="handleSelect" trigger="hover" @on-visible-change="visivle" v-if="access_token">
        <Icon type="ios-list" style="cursor:pointer;" size="35" color="#128af6"/>
        <DropdownMenu slot="list" v-for="item in menu_list" :key="item.menu_url">
          <DropdownItem v-if="!item.children_list" :name="item.menu_url" ref="list">{{item.menu_name}}</DropdownItem>
          <Dropdown placement="right-start" :name="item.menu_url" v-if="item.children_list">
            <DropdownItem>
              {{item.menu_name}}
              <Icon type="ios-arrow-forward"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list">
              <DropdownItem class="DropdownItemChild" :name="item_child.menu_url" v-for="(item_child) in item.children_list" :key="item_child.menu_url" ref="list">{{item_child.menu_name}}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownMenu>
      </Dropdown>
      <!-- 生产环境注销掉><-->
      <!--<Poptip trigger="hover" placement="bottom-end">-->
        <!--<Icon style="cursor:pointer;" type="ios-volume-up" :color="type === 'login'? 'white' : '#128af6'"/>-->
        <!--<div class="content-main" slot="content">-->
          <!--<ul class="list-group">-->
            <!--<li class="list-group-item">-->
              <!--<h4>{{pubTime}} 一级系统测试管理平台系统更新公告</h4>-->
              <!--<ul v-for="(item, index) in system_notice_list" :key="index">-->
                <!--<li>-->
                  <!--{{item}}-->
                <!--</li>-->
              <!--</ul>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</Poptip>-->
      <Button type="primary" v-if="!access_token" @click="skip('login')" style="margin-right: 1rem; font-size: 0.5em">登录/注册</Button>
      <Icon style="cursor:pointer;" type="md-add-circle" color="#128af6" v-if="access_token" @click="skip('addProject')"/>
      <Icon type="md-person" color="#128af6" v-if="access_token"/>
      <p v-if="access_token" style="font-size: 0.5em">{{user_info}}( {{groupName}} )</p>
      <Icon style="cursor:pointer;" type="ios-power" color="#128af6" v-if="access_token" @click="confirm"/>
    </div>
  </div>
</template>
<script>
  import Menu from '../menu'
  // import demo_list from './listDemo'
  import services from '../../../api/services'
  export default {
    name: 'HeaderBar',
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        newRoute: '',
        tmp_menu_list: [],
        selected: false,
        user_info: '',
        groupName: '',
        system_notice_list: [],
        pubTime: ''
      }
    },
    computed: {
      menu_list() {
        return Menu
      },
      access_token() {
        return this.$store.getters['user/getAccess_token'] || ''
      }
    },
    watch: {
      '$route' (newRoute) {
        this.newRoute = newRoute
      }
    },
    mounted() {
      if (this.access_token) {
        this.getUserInfo()
        this.getGroupInfo()
      }
      // this.getVersionDeclaration() // 生产环境注销
      // this.tmp_menu_list = this.menu_list
    },
    methods: {
      getUserInfo() {
        this.$http.get(services.personalCenter.getUserInfo).then(res => {
          if (res && res.data) {
            this.user_info = res.data.employeeName
          }
        })
      },
      getGroupInfo() {
        this.$http.get(services.personalCenter.getGroupInfo).then(res => {
          if (res && res.data) {
            this.groupName = res.data[0].groupName
          }
        })
      },
      getVersionDeclaration() {
        this.$http.get(services.header.getHeaderVersionDeclaration + '?action=getVersionDeclaration').then(res => {
          if (res && res.data && res.data.result === 'Y' && res.data.logs) {
            this.pubTime = res.data.pubTime
            this.system_notice_list = res.data.logs
          } else {
            this.pubTime = ''
            this.system_notice_list = []
            this.$Message.warning(res.data.message)
          }
        })
      },
      skip(type) {
        if (type) {
          this.$router.push({ name: type })
        } else {
          let access_token = this.$store.getters['user/getAccess_token'] || ''
          if (access_token) {
            this.$router.push({ name: 'home' })
          } else {
            this.$router.push({ name: 'home' })
          }
        }
      },
      handleSelect (name) {
        this.$router.push({ name: name })
      },
      visivle(e) {
        if (e === true) {
          if (!this.newRoute) {
            this.$refs.list[0].selected = true
          }
          if (this.newRoute && this.$refs.list && this.$refs.list.length) {
            for (let i = 0; i < this.$refs.list.length; i++) {
              if (this.$refs.list[i].name && this.newRoute.name) {
                if (this.newRoute.name === this.$refs.list[i].name) {
                  this.$refs.list[i].selected = true // 目前控制台报错，原因，此组件不支持直接修改源代码里面的值，必须从通过prop来传参，后期优化
                } else {
                  this.$refs.list[i].selected = false
                }
              }
            }
          }
        }
      },
      confirm () {
        this.$Modal.confirm({
          title: '确认退出？',
          onOk: () => {
            this.$Message.info('成功退出')
            this.$router.push({ name: 'home' })
            this.$store.dispatch('user/access_token', '')
            localStorage.clear()
            sessionStorage.clear()
          },
          onCancel: () => {
            this.$Message.info('已取消退出')
          }
        })
      },
      showPage(num) {
        let access_token = this.$store.getters['user/getAccess_token'] || ''
        if (access_token) {
          if (num === 6) { // DevOps
            let tmp = 'loginName=null&password=6CB63DC5E23D8F30BC937BB8D36AD620&checkCode=FSAD'
            this.$http.post(services.DevOpsLogin.paas, tmp).then(res => {
              this.$publicFunc.showPage(num)
            }).catch(e => {
              this.$router.push({ name: 'login' })
            })
          }
          if (num === 7) { // 电子看板
            let tmp = {
              email: 'asdasd@asdfad',
              imageValue: 'dsfc',
              password: '3MlKoFxstIerVft4v0dkEw=='
            }
            this.$http.post(services.DevOpsLogin.dzkb, tmp).then(res => {
              this.$publicFunc.showPage(num)
            }).catch(e => {
              this.$router.push({ name: 'login' })
            })
          }
          if (num !== 6 && num !== 7) {
            this.$publicFunc.showPage(num)
          }
        } else {
          this.$Message.warning('还未登录！')
          this.$router.push({ name: 'login' })
        }
      }
    }
  }
</script>
<style lang="less">
  .ivu-dropdown{
    line-height: normal;
  }
  .ivu-menu-submenu-title > i, .ivu-menu-submenu-title span > i {
    margin-right: 2px !important;
  }
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
      width: 55%;
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
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: white;
      font-size: 1.5em;
      .content-main{
        color: #000c17;
        /*h3{*/
          /*margin-top: 0.3rem;*/
        /*}*/
        /*li{*/
          /*cursor: pointer;*/
        /*}*/
      }
    }
  }
</style>
