import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user';
import permissionApi from './mockServeData/permission';
/*
记录用于生成响应数据的函数。当拦截到匹配 rurl 的 Ajax 请求时，
函数 function(options) 将被执行，并把执行结果作为响应数据返回。
*/
/* 路径可以随便写，只要和data.js里面的路径一致就行，表示从哪里请求数据，
即使哪里都没有,目的是拦截请求再传回自己的数据 */
Mock.mock('/homes/getData', homeApi.getStatisticalData)
// 添加用户
Mock.mock(/user\/add/, 'post', userApi.createUser)
// 更新用户
Mock.mock(/user\/edit/, 'post', userApi.updateUser)
// 删除用户
Mock.mock(/user\/del/, 'get', userApi.deleteUser)
// 得到用户列表
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
// 登录获取菜单权限
Mock.mock(/permission\/getMenu/, 'get', permissionApi.getMenu)
