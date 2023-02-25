const path = require('path')

const notes = '/users/joe/notes.txt'

path.dirname(notes) // /users/joe
path.basename(notes) // notes.txt
console.log(path.extname(notes)); // .txt

// 获取不带扩展名的文件名
path.basename(notes, path.extname(notes)) //notes

