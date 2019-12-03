<template>
  <Layout class="layout">
    <Header :style="{height: headerHeight}">
      <HeaderBar :type="type"></HeaderBar>
    </Header>
    <!--<div>{{fullWidth}}</div>-->
    <Layout>
      <Sider class="sider" :style="{height: fullHeight, minWidth: menuWidth}">
        <Menu theme="light" width="auto" ref="menu" @on-select="handleSelect" :active-name="activeName" :open-names="openName" accordion>
          <div v-for="item in menu_list" :key="item.menu_url">
            <MenuItem v-if="!item.children_list" :name="item.menu_url"><Icon :type="item.menu_icon" />{{item.menu_name}}</MenuItem>
            <Submenu :name="item.menu_url" v-if="item.children_list">
              <template slot="title">
                <Icon :type="item.menu_icon" />
                {{item.menu_name}}
              </template>
              <MenuItem :name="item_child.menu_url" v-for="(item_child) in item.children_list" :key="item_child.menu_url"> {{item_child.menu_name}}</MenuItem>
            </Submenu>
          </div>
        </Menu>
      </Sider>
      <Content style="background-color: #ffffff;" :style="{height: fullHeight}">
        <router-view></router-view>
      </Content>
    </Layout>
    <Footer :style="{height: foooterHeight}">
      <FooterBar></FooterBar>
    </Footer>
  </Layout>
</template>
<script>
  import HeaderBar from './components/header'
  import FooterBar from '../../components/main/components/footer'
  import Menu from './menu'
  export default {
    name: 'Main',
    components: {
      HeaderBar,
      FooterBar
    },
    data () {
      return {
        type: 'main',
        activeName: '',
        openName: [],
        fullHeight: (document.documentElement.clientHeight + 50) + 'px',
        menuWidth: (document.documentElement.clientWidth * (4 / 30)) + 'px',
        // headerHeight: (document.documentElement.clientHeight * (2 / 15)) + 'px',
        headerHeight: 5 + 'rem',
        foooterHeight: (document.documentElement.clientHeight * (3 / 10)) + 'px',
        fullWidth: document.documentElement.clientWidth + 'px'
      }
    },
    computed: {
      menu_list() {
        return Menu
      }
    },
    watch: {
      '$route' (newRoute) {
        let tmp = newRoute.name.split('-')
        if (tmp[0] === 'url') {
          this.openName = ['url']
        } else {
          this.openName = []
        }
        this.$nextTick(() => this.$refs.menu.updateOpened())
        if (newRoute.name !== 'accountManagement' && newRoute.name !== 'resourceManagement' && newRoute.name !== 'demandManagement') {
          this.activeName = newRoute.name
        }
      }
    },
    created() {
      this.activeName = 'userGuide'
    },
    mounted () {},
    methods: {
      handleSelect (name) {
        this.$router.push({ name: name })
      }
    }
  }
</script>
<style lang="less">
  .layout{
    width: 100%;
    .ivu-layout-header {
      background: #021d37;
      padding: 0!important;
    }
    .ivu-layout-sider {
      background: #fff;
    }
    .ivu-layout-footer {
      background: #001529;
      padding: 24px 50px;
      color: #515a6e;
    }
    .ivu-menu {
      font-size: 1rem!important;
    }
    .ivu-menu-item {
      font-size: 1rem!important;
    }
    @media screen and (min-width: 3072px) {
      .ivu-menu {
        font-size: 1.5rem!important;
      }
      .ivu-menu-item {
        font-size: 1.5rem!important;
      }
    }
    @media screen and (min-width: 4800px) {
      .ivu-menu {
        font-size: 1.9rem!important;
      }
      .ivu-menu-item {
        font-size: 1.9rem!important;
      }
    }
  }
</style>
