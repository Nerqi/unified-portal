import { setToken } from '@/libs/util'
export default {
  namespaced: true,
  state: {
    username: null,
    token: null,
    param: localStorage.getItem('param') ? localStorage.getItem('param') : null
    // param: null
    // token: getToken(),
  },
  mutations: {
    param (state, data) {
      state.param = data
      localStorage.setItem('param', JSON.stringify(data))
      // console.dir('store~~~~~~~~' + JSON.stringify(data))
      setToken(JSON.stringify(data))
    }
  },
  getters: {
    getParam: (state) => {
      const cache = localStorage.getItem('param')
      let cacheData = null
      if (cache) {
        cacheData = JSON.parse(cache)
      }
      if (state.param) {
        return state.param
      } else {
        return cacheData
      }
    }
  },
  actions: {
    param (context, param) {
      context.commit('param', param)
    }
  }
}
