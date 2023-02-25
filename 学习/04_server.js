const http = require('http'); //引入http模块

const hostname = '127.0.0.1' //主机名
const port = 3000 //端口

const server = http.createServer((req, res) => {
    // console.log(req);
    res.statusCode = 200 //表明成功响应
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})



server.listen(port, hostname, () => {
    // console.log(process.exitCode);
    console.log(`Server running at http://${hostname}:${port}/`);
})

//3秒后结束服务器
/* setTimeout(() => {

    process.exit()
}, 3000); */