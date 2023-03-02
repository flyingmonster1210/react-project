import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './pages/Layout'
import { AuthComponent } from '@/components/AuthComponent'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import './App.css'

function App () {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建对应关系 */}
          <Route
            path='/'
            element={
              <AuthComponent>
                <Layout />
              </AuthComponent>
            }></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
