/**
 * 调用request.ts中的request方法获得返回结果，处理错误并将错误继续抛出
 */
import request from "./request";
export const listAll = () => {
    return request({
        url: '/teacher/teachers',
        method: "GET"
    }).then((response) => {
        return response.data.data;
    });
};
export const listPage = (page, size, teacherQueryVo) => {
    // request < T = any, R = AxiosResponse < T >> (config: AxiosRequestConfig): Promise<R>;
    return request({
        url: '/teacher/teachers-page',
        method: "GET",
        params: Object.assign({ page: page, size: size }, teacherQueryVo)
    }).then((response) => {
        return response.data.data;
    });
    // return request({
    //     url: '/teacher/teachers',
    //     method: "GET"
    // }).then((response) => {
    //     return response.data;
    // }).catch((error) => {
    //     return Promise.reject(error);
    // })
};
// 注意：在自定义API中直接返回实际数据response.data
export const getById = (id) => {
    // ES6模板字符串
    let uri = `/teacher/${id}`;
    return request({
        url: uri,
        method: 'GET'
    }).then((response) => {
        return response.data.data;
    });
};
export const save = (teacher) => {
    return request({
        url: "/teacher",
        method: "POST",
        data: teacher
    }).then((response) => {
        return response.data.message;
    });
};
export const update = (teacher) => {
    return request({
        url: '/teacher',
        method: 'PUT',
        data: teacher
    }).then((response) => {
        return response.data.message;
    });
};
export const remove = (id) => {
    // ES6模板字符串
    let uri = `/teacher/${id}`;
    return request({
        url: uri,
        method: 'DELETE'
    }).then((response) => {
        return response.data.message;
    });
};
