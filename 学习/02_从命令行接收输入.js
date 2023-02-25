// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
/* question() 方法会显示第一个参数（即问题），并等待用户的输入。 
当按下回车键时，则它会调用回调函数。 */
// readline.question(`你叫什么名字?`, (name) => {
//     console.log(`你好${name}`);
//     readline.close
// })

const inquirer = require('inquirer')
var question = [{
    type: 'input',
    name: 'name',
    message: "What's your name?"
}]

inquirer.prompt(question).then(answers => {
    console.log(`Hello${answers['name']}!`);
})