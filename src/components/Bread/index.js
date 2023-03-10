import React, { useEffect, useState } from 'react'
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';

export default function Bread() {
    const [breadName, setBreadName] = useState('')
    const { pathname } = useLocation() //解构
    useEffect(() => {
        let key = pathname.split('/')[1]
        console.log(pathname.slice(pathname.indexOf('/') + 1));
        switch (key) {
            case "home":
                setBreadName('')
                break;
            case "list":
                setBreadName('列表页')
                break;
            case "edit":
                setBreadName('编辑文章')
                break;
            case "means":
                setBreadName('修改资料')
                break;
            case "info":
                setBreadName('文章详情')
                break;
            default:
                break;
        }
    }, [pathname])

    return (
        <Breadcrumb style={{ height: "30px", lineHeight: "30px" }}>
            <Breadcrumb.Item href="/">
                <HomeOutlined />
            </Breadcrumb.Item>

            <Breadcrumb.Item href={pathname}>
                {breadName}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}
