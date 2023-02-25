var express = require('express');
var router = express.Router();

router.get('/students', function getStudents(req, res) {
    const students = [
        { id: '001', name: 'tom', age: 18 },
        { id: '002', name: 'jerry', age: 19 },
        { id: '003', name: 'tony', age: 120 },
    ]
    res.send({
        status: 0,
        message: '获取用户列表数据成功',
        data: students
    })
});

router.get('/getlunbo', (request, response) => {
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

/* router.get('/getNews', (req, res) => {								   		//定义路由
    (async () => {
        try {
            const response = await got('https://news.baidu.com/');   //想抓取的网址
            let $ = cheerio.load(response.body)                      //获取网址的DOM结构
            let result = $('#pane-news li a')                        //想抓取的部位
            let news = []                                            //定义新闻数组
            result.each((index, item) => {                           //循环抓取的内容
                news.push($(item).text())                            //循环添加到数组中 
            })
            res.send(news)                                           //显示在页面上
        } catch (error) {
            console.log(error);
        }
    })();
}) */

router.get('/getgoods', (request, response) => {
    // response.setHeader('Access-Control-Allow-Origin', '*')
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

module.exports = router;
