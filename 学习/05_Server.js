const express = require('express')
const app = express()

/* 
app.use((request, response, next) => {
    console.log('有人请求服务器1了');
    console.log('请求来自于', request.get('Host'));
    // console.log('请求的地址',request.url);
    next()
}) */

app.get('/api/students', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const students = [
        { id: '001', name: 'tom', age: 18 },
        { id: '002', name: 'jerry', age: 19 },
        { id: '003', name: 'tony', age: 120 },
    ]
    response.send(students)
})

app.get('/api/getlunbo', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const students = {
        "status": 0,
        "message": [
            {
                "id": 1,
                "url": "http://www.itcast.cn/subject/phoneweb/index.html",
                "img": "http://m.itheima.com/images/slidead/mobile/20191213180241750x410.jpg"
            },
            {
                "id": 2,
                "url": "http://www.itcast.cn/subject/phoneweb/index.html",
                "img": "http://m.itheima.com/images/slidead/mobile/20191210154717750-410.jpg"
            },
            {
                "id": 3,
                "url": "http://www.itcast.cn/subject/phoneweb/index.html",
                "img": "http://m.itheima.com/images/slidead/mobile/20190327135101750x410-%E4%BC%A0%E6%99%BA%E9%BB%91%E9%A9%AC%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B9%BB%E7%81%AF.jpg"
            }
        ]
    }
    response.send(students)
})

app.get('/api/getgoods', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const students = {
        "status": 0,
        "message": [
            {
                "id": 87,
                "title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
                "add_time": "2015-04-19T16:51:03.000Z",
                "zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
                "click": 0,
                "img_url": "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
                "sell_price": 2195,
                "market_price": 2499,
                "stock_quantity": 60
            }
        ]
    }
    response.send(students)
})

app.listen(4000, (err) => {
    if (!err) console.log('正在监听4000端口');
})