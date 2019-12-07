import { setToken } from '@/libs/util'
export default {
  namespaced: true,
  state: {
    username: null,
    access_token: localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null
    // param: null
    // token: getToken(),
  },
  mutations: {
    access_token (state, data) {
      state.access_token = data
      localStorage.setItem('access_token', JSON.stringify(data))
      // console.dir('store~~~~~~~~' + JSON.stringify(data))
      setToken(data)
    }
  },
  getters: {
    getAccess_token: (state) => {
      const cache = localStorage.getItem('access_token')
      let cacheData = null
      if (cache) {
        cacheData = JSON.parse(cache)
      }
      if (state.access_token) {
        return state.access_token
      } else {
        return cacheData
      }
    }
  },
  actions: {
    access_token (context, access_token) {
      context.commit('access_token', access_token)
    }
  }
}
