import axios from 'axios'
// http request 封装请求头拦截器
const HttpPlugin = {
  install: (Vue) => {
    Vue.prototype.$http = axios
  }
}
axios.interceptors.request.use(config => {
  console.log('request')
  console.log(config)
 // 添加请求拦截器实现逻辑...
  // 若是有做鉴权token , 就给头部带上token
  // let token = storage.get('cmi-token')
  // if (token) {
  //   config.headers.Authorization = token
  // } else {
  //   // 未登录跳转到登录页面
  //   router.replace('/', () => {
  //     // onComplete
  //     TMessage.warning('请登录后访问...', 2)
  //   }, () => {
  //     // onAbort
  //   })
  // }
  // 请求方式
  // let method = config.method.toLowerCase();
  // if (method === 'get' || method === 'delete') {
  //   Object.assign(config.params, {
  //     "test": "testVAl"
  //   });
  // }
  return config
}, error => {
  return Promise.reject(error)
})

// http response 封装后台返回拦截器
axios.interceptors.response.use(response => {
  // console.log(response)
// 当返回信息为未登录或者登录失效的时候重定向为登录页面
  //   if (response.data.code == 'W_100004' || response.data.message == '用户未登录或登录超时，请登录！') {
  //     router.push({
  //       path: "/",
  //       querry: {
  //         redirect: router.currentRoute.fullPath
  //       } //从哪个页面跳转
  //     })
  //   }
  if (typeof response.data === 'string') {
    return JSON.parse(response.data)
  } else {
    return response
  }
}, error => {
  // if (error.response) {
  //   switch (error.response.status) {
  //     case 401:
  //       router.replace({
  //         path: 'login',
  //         query: { redirect: router.currentRoute.fullPath },
  //       })
  //   }
  // }
  return Promise.reject(error)
})
export {
  HttpPlugin
}
