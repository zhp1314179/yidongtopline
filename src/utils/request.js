import axios from 'axios'
import jsonBig from 'json-bigint' // 引入处理大数字
import store from '@/store'
// 默认的接口地址 使用复制一个axios方法
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})
// 处理大数字
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (err) {
    return {}
  }
}]
// 请求拦截器
request.interceptors.request.use(function (config) {
  const { user } = store.state
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
},
function (error) {
  return Promise.reject(error)
}

)
// 响应拦截器
request.interceptors.response.use(function (response) {
  return response
},
function (error) {
  // 请求刷新token
  return Promise.reject(error)
})

export default request
