/**
 * 文件系统（File System）
 *      ——通过Node来操作系统中的文件
 *      ——使用文件系统，需先引入fs模块，fs是核心模块
 */
//引入fs模块
var fs = require("fs")
// console.log(fs);
// 打开文件
var fd = fs.openSync("hello.txt", "w")
// 写入文件
fs.writeSync(fd, "1231232313")
// 关闭文件
fs.closeSync(fd)
