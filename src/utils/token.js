// 对token的操作
// 因为用户在登录时token需要一直保留着

const key = 'pc-key'

// 1. 保存
const setToken = (token) => {
  return window.localStorage.setItem(key, token)
}

// 2. 读取
const getToken = () => {
  return window.localStorage.getItem(key)
}

// 3. 删除
const removeToken = () => {
  return window.localStorage.removeItem(key)
}

export {
  setToken,
  getToken,
  removeToken
}