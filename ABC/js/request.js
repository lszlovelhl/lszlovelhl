/**
 * 封装axios及错误处理
 *  封装axios
 *      封装axios，包括baseURL设置、统一错误处理、认证处理，以及支持请求拦截器和响应拦截器，以后可以加入各种功能
 */
import axios from 'axios';
// 全局默认配置
axios.defaults.baseURL = 'http://localhost:8080';
// 创建axios实例
const instance = axios.create({
    timeout: 6000,
    withCredentials: false,
    headers: {
        // 不支持缓存
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
    },
    // 默认值
    responseType: 'json',
    // 检查状态码并在响应拦截器中处理，2xx表示请求成功，其他都是失败
    // 系统默认的实现，可以不写
    validateStatus(status) {
        return status >= 200 && status < 300;
    },
});
// request拦截
instance.interceptors.request.use((config) => {
    // 认证处理
    return config;
}, (error) => {
    // 将错误继续抛出，由调用方处理error
    return Promise.reject(error);
});
// HTTPresponse拦截
instance.interceptors.response.use((response) => {
    // 只要接收到响应且HTTP状态码在[200, 300)范围的都这这里处理
    // const data = response.data;
    return response;
}, (error) => {
    // HTTP状态码不在[200, 300)范围，axios内部错误或者没有接收到请求时才执行
    if (error.response) {
        // HTTP状态码 HTTP响应头 返回数据
        const { status, headers, data } = error.response;
        // 如果是401表示用户需要登录，则通过路由跳转到登录页面
        if (status === 401) {
            // store.dispatch('FedLogOut').then(() => router.push({path: '/login'}));
        }
        // 服务端错误处理
        console.log(data);
    }
    else if (error.request) {
        // 请求发送后没有收到响应数据
        console.log(error.request.message);
    }
    else {
        // 请求未发送
        console.log(error.message);
    }
    // 将错误继续抛出，由调用方处理error
    return Promise.reject(new Error(error));
});
export default instance.request;
