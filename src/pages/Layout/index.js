import { Layout, Menu, Popconfirm } from 'antd'
import { HomeOutlined, DiffOutlined, EditOutlined, LogoutOutlined } from '@ant-design/icons'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import './index.scss'
import { useEffect } from 'react'
import { useStore } from '@/store'

const { Header, Sider } = Layout

const GeekLayout = () => {
  const { userStore, loginStore } = useStore()
  useEffect(() => {
    userStore.getUserInfo()
  }, [userStore])
  // console.log(userStore.userInfo.name)

  const location = useLocation()
  // console.log('location', location)

  const navigate = useNavigate()
  const confirm = () => {
    loginStore.clearToken()
    navigate('/login', { replace: true })
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm
              onConfirm={confirm}
              title="是否确认退出？"
              okText="退出"
              cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[location.pathname]}
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={[
              {
                key: '/',
                icon: <HomeOutlined />,
                label: <Link to={'/'}>数据概览</Link>
              },
              {
                key: '/article',
                icon: <DiffOutlined />,
                label: <Link to={'/article'}>内容管理</Link>
              },
              {
                key: '/publish',
                icon: <EditOutlined />,
                label: <Link to={'/publish'}>发布文章</Link>
              },
            ]}
          >
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(GeekLayout)
