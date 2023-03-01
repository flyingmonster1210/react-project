import { Card, Button, Checkbox, Form, Input, message } from "antd"
import logo from '@/assets/logo.png'
import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'

import './index.scss'

function Login () {

  const { loginStore } = useStore()
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()
  async function onFinish (values) {
    await loginStore.getToken({
      // 传递到loginStore的getToken的mobile和code中
      mobile: values.username,
      code: values.password
    })
    console.log('Success:', values)
    message.success("successfully logged in")
    navigate('/', { replace: true }) // 跳转到首页，现在无论登陆是否成功都跳
  }


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (

    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={{
            remember: true,
            username: '13811111111',
            password: '246810'
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 5,
                message: 'Password should have at lease 5 charaters',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login