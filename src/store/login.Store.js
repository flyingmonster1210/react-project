import { makeAutoObservable } from 'mobx'
import { http, setToken, getToken, removeToken } from '@/utils'

class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  // 这里getToken是模拟后端接口，模拟从后端接受登录验证数据
  // mobile和code都是后端定死的参数，不能变
  getToken = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile, code
    })
    // console.log('login', res.data)
    this.token = res.data.token // 只是把token存入内存
    setToken(this.token) // 把token存入本地存储器
  }

  clearToken = () => {
    this.token = ''
    removeToken()
  }
}

export default LoginStore