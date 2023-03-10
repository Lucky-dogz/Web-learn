import React, { useEffect, useState } from 'react'
import { Button, PageHeader, Modal, Form, Input, message } from 'antd';

import moment from 'moment';
import MyEditor from '../components/MyEditor';
import { ArticleAddApi, ArticleSearchApi, ArticleUpdateApi } from '../request/api';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    const navigate = useNavigate()
    // 日期
    const [date] = useState(moment(Date.now()).format("YYYY-MM-DD hh:mm:ss"))
    // 对话框开关
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 文章数据
    const [article, setArticle] = useState({
        title: "Hello World!",       //标题
        subTitle: "", //副标题
    })
    // 文章内容，单独提出来
    const [content, setContent] = useState();
    // 拿到Form组件
    const [Myform] = Form.useForm();
    // 获取页面收到的参数：id
    const params = useParams()

    // 挂载
    useEffect(() => {
        if (params.id) {
            ArticleSearchApi(params).then(res => {
                if (res.errCode === 0) {
                    setArticle({
                        title: res.data.title,
                        subTitle: res.data.subTitle,
                        id: res.data.id
                    })
                    setContent(res.data.content)
                }
            })
        } else {
            setContent("")
        }
    }, [])

    // 保存文章
    const saveArticle = () => { }

    // 展示对话框，初始化input框内容
    const showModal = () => {
        setIsModalOpen(true)
        Myform.setFieldsValue({
            Title: article.title,
            subTitle: article.subTitle
        });
    };

    // 提交,分两种情况：更新和添加
    const handleOk = () => {
        Myform
            .validateFields() //校验表单
            .then(values => {
                let { Title, subTitle } = values
                let newArticle = {
                    title: Title,       //标题
                    subTitle: subTitle, //副标题
                    content: content    //内容
                }
                if (params.id) {
                    // 如果是更新文章
                    newArticle.id = article.id
                    ArticleUpdateApi(newArticle).then(res => {
                        // console.log(newArticle, res);
                        if (res.errCode === 0) {
                            navigate('/list')
                            message.success(res.message)
                        } else {
                            message.error(res.message)
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
                }
                else {
                    // 如果是写新文章
                    ArticleAddApi(newArticle).then(res => {
                        if (res.errCode === 0) {
                            message.success(res.message)
                            navigate('/list')
                        } else {
                            message.error(res.message)
                        }
                    })
                }

                Myform.resetFields() //重置表单
                setIsModalOpen(false);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            })
    };

    // 获取文章内容
    const getContent = (data) => {
        setContent(data)
        // console.log("@", data);
    }

    // 取消
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    if (content !== undefined) {
        return (
            <div className="site-page-header-ghost-wrapper">
                {/* 页头 */}
                <PageHeader
                    ghost={false}
                    onBack={params.id ? () => window.history.back() : null}
                    title="文章编辑"
                    subTitle={"当前日期：" + date}
                    extra={[
                        <Button key="1" onClick={saveArticle}>保存文章</Button>,
                        <Button key="2" type="primary" onClick={showModal}>提交文章</Button>,
                    ]}
                ></PageHeader>

                {/* 对话框 */}
                <Modal title="填写文章信息"
                    open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                    cancelText="取消" okText="确认">
                    {/* 表单 */}
                    <Form
                        form={Myform}
                        name="basic"
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 20,
                        }}
                        autoComplete="on"
                    >
                        <Form.Item
                            label="标题"
                            name="Title"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入标题',
                                },
                            ]}
                        >
                            <Input placeholder='请输入标题' />
                        </Form.Item>

                        <Form.Item
                            label="副标题"
                            name="subTitle"
                            rules={[
                                {
                                    required: false,
                                    message: '请输入副标题',
                                },
                            ]}
                        >
                            <Input placeholder='请输入副标题' />
                        </Form.Item>

                    </Form>
                </Modal>

                {/* 编辑器 */}
                <MyEditor getContent={getContent} content={content} />
            </div>
        )
    } else {
        return (<div>loading</div>)
    }
}
