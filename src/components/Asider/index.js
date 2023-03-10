import React, { useEffect, useState } from 'react';

import { EditOutlined, FileSearchOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Aside() {

    const navigate = useNavigate()
    const location = useLocation()
    const [CurrentKey, setCurrentKey] = useState("home")

    // 点击菜单
    const onClick = (e) => {
        navigate('/' + e.key)
        setCurrentKey(e.key)
    };

    useEffect(() => {
        // 保存刷新前页面路由
        let path = location.pathname
        let key = path.split('/')[1]
        // 刷新后跳转到上次的路由
        setCurrentKey(key)
    }, [CurrentKey, location])

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem('主页', 'home', <FileSearchOutlined />),
        getItem('查看文章列表', 'list', <FileSearchOutlined />, [
            getItem('文章详情', 'list/info'),
        ]),
        getItem('文章编辑', 'edit', <EditOutlined />),
        getItem('修改资料', 'means', <SettingOutlined />),
    ];
    return (
        <div>
            <Menu
                onClick={onClick}
                style={{
                    width: 200,
                }}
                selectedKeys={[CurrentKey]}
                mode="inline"
                items={items}
                className='aside'
                theme='dark'
            />
        </div>
    )
}
