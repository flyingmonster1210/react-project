// 封装axios
import axios from 'axios'
import { getToken } from './token'
import { history } from './history'

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// 添加请求拦截器
// 一般是get和post，所有的request都自动添加token
http.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  if (error.response.status === 401) { // 401一般是token过时了，或者得到无效token
    // 此时并非在react context中，而是在js代码里，于组件没有关系
    // 所以不能直接通过useNavigate来跳转，要用history
    history.push('/login')
  }
  return Promise.reject(error)
})

export { http }