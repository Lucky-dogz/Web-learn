import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './less/login/login.less'
import logoImg from '../assets/img/logo.jpg'
import { LoginApi } from '../request/api';

import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export default function Login() {
    const navigate = useNavigate()

    // 提交表单
    const onFinish = (values) => {
        LoginApi({
            username: values.username,
            password: values.password
        }).then(res => {
            if (res.errCode === 0) {
                message.success(res.message)
                // 存储数据
                localStorage.setItem('avatar', res.data.avatar)
                localStorage.setItem('cms-token', res.data['cms-token'])
                localStorage.setItem('editable', res.data.editable)
                localStorage.setItem('player', res.data.player)
                localStorage.setItem('username', res.data.username)
                setTimeout(() => { navigate('/list') }, 1500);
            } else {
                message.error(res.message)
            }
        })
    };

    return (
        <div className="login">
            <div className='login_box'>
                <img src={logoImg} alt="" />
                <Form
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    {/* 用户名 */}
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input size='large' prefix={<UserOutlined className='icon' />} placeholder="请输入用户名" />
                    </Form.Item>

                    {/* 密码 */}
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password size='large' prefix={<LockOutlined className='icon' />} placeholder="请输入密码" />
                    </Form.Item>

                    {/* 跳转注册 */}
                    <Form.Item>
                        <Link to="/register" className='registe'>还没账号？立即注册</Link>
                    </Form.Item>

                    {/* 登录 */}
                    <Form.Item>
                        <Button size='large' type="primary" block htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
