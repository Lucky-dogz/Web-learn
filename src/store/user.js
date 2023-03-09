// 存储关于用户的数据和操作
import Cookie from 'js-cookie'
export default {
    namespaced: true,//开启命名空间
    state: {
        token: ''
    },
    mutations: {
        // 创建token
        setToken(state, val) {
            state.token = val
            // 设置浏览器的Cookie的token
            Cookie.set('token', val)
        },
        // 删除token
        clearToken(state) {
            state.token = ''
            // 删除浏览器的Cookie的token
            Cookie.remove('token')
        },
        // 读取token
        getToken(state) {
            state.token = state.token || Cookie.get('token')
        }
    }
}