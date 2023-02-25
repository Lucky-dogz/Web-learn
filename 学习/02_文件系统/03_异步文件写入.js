/**
 * 异步文件写入
 *     ——异步调用的方法，结果都是通过回调函数返回的
 */

var fs = require('fs')

fs.open('hello2.txt', "w", function (err, fd) {
    // console.log(arguments);//打印回调函数参数
    console.log(fd);
    if (!err) {
        //如果没出错
        fs.write(fd, "这是异步写入的内容", function (err) {
            if (!err) {
                console.log("写入成功~~");
            } else {
                console.log(err);
            }
            fs.close(fd, function (err) {
                if (err) console.log(err);
            })
        })
        // console.log(fd);
    } else {
        console.log(err);
    }
})


