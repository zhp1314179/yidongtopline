import axios from 'axios'
// 默认的接口地址 使用复制一个axios方法
const request = axios.crated({
  baseURL: 'http://ttapi.research.itcast.cn/'
})
// 请求拦截器
request.interceptors.request.use(function (config) {
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
  return Promise.reject(error)
})
export default request
