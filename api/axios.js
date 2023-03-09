import axios from 'axios'
import config from '../config/index'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
    constructor() {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl, //   根路径/api/
            header: {}      //请求头
        }
        return config
    }
    // 拦截器
    interceptors(axios) {
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error)
        })

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            console.log("数据请求成功!", response, 'response');
            // 在响应数据做些什么
            return response
        }, function (error) {
            console.log("数据请求失败!", error, 'error');
            // 对响应错误做些什么
            return Promise.reject(error)
        })
    }
    request(options) {
        // 创建axios实例
        const instance = axios.create()
        // 添加基础路径以及请求头header到options里
        options = { ...this.getInsideConfig(), ...options }
        // 给实例添加拦截器
        this.interceptors(instance)
        // 返回axios
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)