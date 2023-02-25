/**
 * @说明
 * Buffer（缓冲区）
 *     —— Buffer的结构和数组很像，操作的方法也和数组类似
 *     —— 数组中不能存储二进制文件，Buffer是专门用来存储二进制数据
 */

var str = "Hello Buffer"
var buf = Buffer.from(str)

var buf2 = Buffer.alloc(10)
buf2[0] = 88
buf2[1] = 300
buf2[2] = 0xaa //16进制

// console.log(buf2);
var buf3 = Buffer.from("玛卡巴卡！")
console.log(buf3.toString());