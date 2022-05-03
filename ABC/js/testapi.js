import axios from 'axios';
// 从地址栏传递参数
axios.get('http://localhost:8080/teacher/teachers/')
    // 获取请求返回数据
    .then(response => {
    console.log(response.data);
})
    .catch(error => {
    // 捕获异常
    console.log(error);
});
/**
 * axios核心API
 */
axios({
// AxiosRequestConfig
})
    .then(function (response) {
    console.log(response);
})
    .catch(function (error) {
    console.log(error);
});
/**
 * axios(coonfig)配置参数
 *  url： 用于请求的服务器URL
 *  method： 创建请求时使用的方法
 *  params： 附加在URL中的请求数据，对应后端params
 *  data： 如果是JS对象默认发送JSON格式，只有"post","put","patch"才有data
 *  response.data： 响应数据默认是JSON格式
 *  response.status： 默认按响应状态码区分请求是否成功
 *  error： 三种不同类型的错误，每种有不同的error对象，只需处理服务端错误，其他错误给出提示消息即可
 */
// import axios from "axios"
axios({
    // `url` 用于请求的服务器URL
    // 通常是后端Controller中的方法配置的URL
    // 实际访问URL：baseURL + url
    url: 'http://bit.ly/2mTM3nY',
    // `method`是创建请求时使用的方法
    // HTTP请求方法 GET POST PUT DELETE
    method: 'get',
    // `params`是即将与请求一起发送的URL参数
    // target?id=123456&name=zs
    params: {
        id: 123456,
        name: 'lsz',
    },
    // `data`是作为请求主体被发送的数据，默认以JSON格式发送到服务端
    data: {
        firstName: 'Fred'
    },
    // `responseType`表示服务器响应的数据类型
    responseType: 'json' // default
}).then(function (response) {
    // `data` 由服务器提供的响应数据
    console.log(response.data);
    // `status` 来自服务器响应的HTTP状态码
    console.log(response.status);
    // `headers` 服务器响应的头
    console.log(response.headers);
}).catch(function (error) {
    if (error.response) {
        // 请求已发送，但服务器响应状态码不在2xx范围中
        console.log(error.response.status);
        console.log(error.response.headers);
        // 服务端返回的数据
        console.log(error.response.data);
    }
    else if (error.request) {
        // 请求已发送，但没有收到服务器响应
        // `error.request` 在浏览器中就是XMLHttpRequest对象
        console.log(error.request);
    }
    else {
        // 构建请求时出错，请求没有被发送
        console.log('Error', error.message);
    }
    console.log(error.config);
});
/**
 * axios别名方法
 *  使用别名方法时，url、method、data属性都不必在配置中指定
 */
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])
/**
 * 配置默认值
 *  可以指定axios配置的默认值
 */
// 全局的axios默认值
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 自定义实例默认值
const instance = axios.create({
    baseURL: 'https://api.example.com'
});
// 创建实例后更改配置
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
/**
 * 拦截器
 *  请求拦截器主要用于在请求发送之前添加认证头，响应拦截器主要在then或catch处理之前，用于认证处理和统一错误处理
 */
// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 在请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
