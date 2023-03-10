import React, { useEffect, useState } from 'react'
import './less/list/list.less'
import { ArticleListApi, ArticleDelApi } from '../request/api';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Space, Table, Button, message } from 'antd';

export default function List() {
    const [article, setArticle] = useState([
        {
            key: '1',
            titleArr: [],
            date: "123"
        },
    ])
    const navigate = useNavigate()
    // 分页配置
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 })

    // 封装请求,这里是全部请求回来一次性渲染完毕
    const getArticleList = (current, pageSize) => {
        // 不带参数默认全部返回
        ArticleListApi({
            num: current,
            count: pageSize
        }).then(res => {
            if (res.errCode === 0) {
                let newArr = JSON.parse(JSON.stringify(res.data.arr)) //深拷贝
                // 处理数据
                const arr = newArr.map(item => {
                    item["titleArr"] = [item.title, item.subTitle, item.id]
                    item.key = item.id
                    item.date = moment(item.date).format("YYYY-MM-DD hh:mm:ss")
                    delete item.title
                    delete item.subTitle
                    delete item.id
                    return item
                })
                arr.sort((a, b) => {
                    return b.key - a.key
                })
                setArticle(arr)
            } else {
                message.error(res.message)
            }
        })
    }

    // 请求文章列表,只请求一次
    useEffect(() => {
        getArticleList()
    }, [])

    // 分页
    const pageChange = (pagination) => {
        console.log(pagination);
        setPagination({
            current: pagination.current,
            pageSize: pagination.pageSize
        })
    }

    // 编辑
    const editArticle = (key) => {
        // 把文章id带过去
        navigate('/edit/' + key)
    }

    // 删除
    const deleteArticle = (key) => {
        // 把文章id带过去
        ArticleDelApi({ id: key }).then(res => {
            if (res.errCode === 0) {
                getArticleList()
                message.success(res.message)
            } else {
                message.error(res.message)
            }
        }).catch(err => {
            console.log(err);
        })
    }

    // 表格列
    const columns = [
        {
            dataIndex: 'titleArr',
            key: 'titleArr',
            width: "60%",
            render: (text) => (
                <div>
                    <a className='article_name'
                        href={`http://codesohigh.com:8765/article/${text[2]}`}
                        target="_blank" rel="noreferrer">{text[0]}</a>
                    <p style={{ color: "#999" }}>{text[1]}</p>
                </div>
            )
        },
        {
            dataIndex: 'date',
            key: 'date',
            render: date => (
                <p>
                    {date}
                </p>
            )
        },
        {
            key: 'action',
            render: (text, record) => {
                return (
                    <Space size="middle">
                        <Button type='primary' onClick={() => { editArticle(text.key) }}>编辑</Button>
                        <Button type='danger' onClick={() => { deleteArticle(text.key) }}>删除</Button>
                    </Space>
                )
            }
        }
    ];

    return (
        <div className='list_table'>
            <Table
                showHeader={false}
                dataSource={article}
                columns={columns}
                size="small"
                onChange={pageChange}
                pagination={pagination} />
        </div>
    )
}
