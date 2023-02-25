/* const x = 1
const y = 2
const z = 3
console.count(
    'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
    'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
    'y 的值为 ' + y + ' 且已经检查了几次？'
) */

//元素计数
/* const oranges = ['橙子', '橙子', '苹果']
const apples = ['苹果']
oranges.forEach(fruit => {
    console.count(fruit)
})
apples.forEach(fruit => {
    console.count(fruit)
}) */


/* const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
    console.time('doSomething()')
    //做点事，并测量所需的时间。
    doSomething()
    console.timeEnd('doSomething()')
}
measureDoingSomething() */

/* const chalk = require('chalk')
console.log(chalk.yellow('你好')) */

// 创建进度条
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 100 }) //10步的进度条，100ms一步
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
        clearInterval(timer)
    }
}, 100)