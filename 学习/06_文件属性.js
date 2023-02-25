// 异步访问文件属性
const fs = require('fs')
fs.stat("01_输出到命令行.js", (err, stats) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(stats.size);
    stats.isFile() //true
    stats.isDirectory() //false
    stats.isSymbolicLink() //false
    stats.size //1024000 //= 1MB
})

// 同步访问文件属性
try {
    const stats = fs.statSync("01_输出到命令行.js")
} catch (err) {
    console.log(err);
}
