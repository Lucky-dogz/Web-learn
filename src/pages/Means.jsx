import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { ChangeUserDataApi, GetUserDataApi } from '../request/api';
import './less/means/means.less'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// 上传验证
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    // 是否为图片
    if (!isJpgOrPng) {
        message.error('只能上传JPG/PNG文件!');
    }

    // 限制图片大小为200KB
    const isLt2M = file.size / 1024 / 1024 / 1024 < 200;
    if (!isLt2M) {
        message.error('图片不得大于200KB!');
    }

    return isJpgOrPng && isLt2M;
};

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

// 修改资料
function Means(props) {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        avatar: "default_avatar.jpg",
        password: "",
        username: localStorage.getItem('username')
    })
    // 转圈圈
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    // 表单提交
    const onFinish = (values) => {
        const { password, username } = values
        if (username !== sessionStorage.getItem('username') && password.trim() !== "") {
            // 服务器问题，只能修改密码
            ChangeUserDataApi({
                password: password
            }).then(res => {
                if (res.errCode === 0) {
                    message.success(res.message)
                    setTimeout(() => {
                        localStorage.clear()
                        navigate('/login')
                    }, 1000);
                } else {
                    message.error(res.message)
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
            message.error("密码不能为空")
        }
    };

    // 初始化表单内容
    useEffect(() => {
        GetUserDataApi().then(res => {
            if (res.errCode === 0) {
                // console.log(res);
                setUserData(res.data)
                // 存到sessionStorage
                sessionStorage.setItem('username', res.data.username)
            } else {
                message.error(res.message)
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])

    // 提交
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            const avatar = info.file.response.data.filePath
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
                // 存储图片名称
                localStorage.setItem("avatar", avatar)
                props.addKey()
            });
        }
    };

    // 上传按钮
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    return (
        <div className='means'>
            <div className='myform'>
                <Form
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    initialValues={{
                        username: userData.username,
                        password: userData.password
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="修改用户名"
                        name="username"
                    >
                        <Input placeholder='请输入新用户名' />
                    </Form.Item>

                    <Form.Item
                        label="修 改 密 码"
                        name="password"
                    >
                        <Input.Password placeholder='请输入新密码' />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ float: "right", margin: "10px" }}>
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <p>点击下方修改头像</p>
            <div className='myupload'>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="/api/upload"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                    headers={{ "cms-token": localStorage.getItem("cms-token") }}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                                width: '100%',
                            }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
            </div>
        </div >
    )
}

// 修改Header里维护的一个key,以此刷新Header页面
const mapDispatchToProps = (dispatch) => {
    return {
        addKey() {
            const action = { type: "ADD_KEY" }
            dispatch(action)
        }
    }
}

// 变成容器组件
export default connect(null, mapDispatchToProps)(Means)
