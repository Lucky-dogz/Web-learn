const fs = require("fs")

fs.readFile("./资料/成绩.txt", "utf8", function (err, dataStr) {
    if (err) {
        return console.log("读取文件失败！" + err.message);
    }
    // console.log("读取文件成功！" + dataStr);
    let arrOld = dataStr.split(" ")
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace("=", ': '))
    })
    // let result = dataStr.replace(" ", "")
    const newStr = arrNew.join('\r\n')
    console.log(newStr);
})
