import axios from './axios'

// 获取菜单权限接口
export const getMenu = (param) => {
    return axios.request({
        url: '/permission/getMenu',
        methods: 'post',
        data: param
    })
}
// 获取数据接口
export const getData = () => {
    return axios.request({
        url: '/homes/getData',
        methods: 'get'
    })
}
// 获取用户接口
export const getUser = (params => {
    return axios.request({
        url: '/user/getUser',
        methods: 'get',
        params,
    })
})