import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { AuthComponent } from '@/components/AuthComponent'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'

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
            }>
            <Route index element={<Home />}></Route>
            <Route path='/article' element={<Article />}></Route>
            <Route path='/publish' element={<Publish />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
