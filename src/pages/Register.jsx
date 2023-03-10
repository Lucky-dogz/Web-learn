import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './less/register/register.less'
import logoImg from '../assets/img/logo.jpg'
import { RegisterApi } from '../request/api';

import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export default function Register() {
    // 路由的一个hook
    const navigate = useNavigate()

    // 提交表单
    const onFinish = (values) => {
        RegisterApi({
            username: values.username,
            password: values.password
        }).then(res => {
            console.log(res);
            if (res.errCode === 0) {
                message.success(res.message);
                // 跳回登录页
                setTimeout(() => { navigate('/login') }, 1500);
            } else {
                message.error(res.message)
            }
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <div className="register">
            <div className='register_box'>
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

                    {/* 确认密码 */}
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password size='large' prefix={<LockOutlined className='icon' />} placeholder="请再次输入密码" />
                    </Form.Item>

                    <Form.Item>
                        <Link to="/login" className='registe'>已有账号？立即登录</Link>
                    </Form.Item>

                    {/* 注册 */}
                    <Form.Item>
                        <Button size='large' type="primary" block htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
