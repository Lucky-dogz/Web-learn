function promiseClick() {
    // 定义一个Promise对象
    // 有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var num = Math.ceil(Math.random() * 20)
            console.log('随机数生成的值: ', num);
            if (num <= 10) {
                resolve(num) //成功
            } else {
                reject('数字大于10即将执行失败回调') //失败
            }
        }, 2000)
    })
    return p
}

// 类似一个回调
promiseClick().then(
    function (data) {
        console.log('resolved成功回调');
        console.log('成功回调接收的值：', data);
    },
    function (reason) {
        console.log('rejected失败回调');
        console.log('失败执行回调抛出失败原因：', reason);
    }
)/* .catch(function (reason, data) {
    console.log('catch到rejected失败回调');
    console.log('catch失败执行回调抛出失败原因：', reason);
}) */

promiseClick()