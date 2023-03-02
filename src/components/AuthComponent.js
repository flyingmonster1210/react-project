// 1. 判断token是否存在
//     a. 存在，直接渲染 
//     b. 不存在，重定向到登录

import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"

// 高阶组件：一个组件是另一组件的参数传入，最后返回新组件
// 这里children就是一个组件
function AuthComponent ({ children }) {
  const token = getToken()
  if (token) {
    return <>{children}</>
  }
  else {
    return <Navigate to='/login' replace></Navigate>
  }
}

export {
  AuthComponent
}

// 用法：
// <AuthComponent> <Layout /> </AuthComponent>
// 如果登录了，则相当于渲染 <> <Layout /> </>
// 否则，相当于执行 <Navigate to='/login' replace></Navigate>