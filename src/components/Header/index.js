import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import logoImg from '../../assets/img/logo.jpg'
import defaultAvatar from '../../assets/img/defaultAvatar.jpg'

import { CaretDownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, message } from 'antd';

export default function Header() {
    const navigate = useNavigate()
    const [avatar, setAvatar] = useState(defaultAvatar)
    const [username, setUsername] = useState("游客")

    // 等效挂载和更新
    useEffect(() => {
        let usernameTemp = localStorage.getItem("username")
        let avatarTemp = localStorage.getItem("avatar")
        // 昵称
        if (usernameTemp) setUsername(usernameTemp)
        // 头像
        if (avatarTemp) setAvatar("http://47.93.114.103:6688/" + avatarTemp)
    }, [])

    const signOut = () => {
        localStorage.clear() //清除localStorage的数据
        message.success('退出成功,即将返回登录页')
        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }

    const menu = (
        <Menu>
            <Menu.Item key={1} icon={<SmileOutlined />}>修改资料</Menu.Item>
            <Menu.Divider />
            <Menu.Item key={2} icon={<SmileOutlined />} onClick={signOut}>
                退出登录
            </Menu.Item>
        </Menu >
    );
    return (
        <header>
            <img src={logoImg} alt="" className='header_left' />
            <div className='header_right'>
                <Dropdown overlay={menu} >
                    <a className='ant-dropdown-link' href=' ' onClick={(e) => e.preventDefault()}>
                        <Space>
                            <img src={avatar} alt="" className='avatar' />
                            <span>{username}</span>
                            <CaretDownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </header>
    )
}
