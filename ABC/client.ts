
import { listAll, listPage, getById, save, update, remove } from "./api";
import {R, PageVo, Teacher, TeacherQueryVo} from "./model";

// listAll().then(data => {
//     // 获取请求返回数据
//     console.log(data);
// }).catch((error) => {
//     // 错误处理
// });

listAll().then((result: Teacher[]) => { // 获取请求返回数据
    for(const teacher of result){
        console.log(teacher.name);
    }
});

// 创建一个原生的js对象，使用接口进行类型约束
let teacherQueryVo: TeacherQueryVo = {name: "王"};
// 执行接口函数
listPage(1, 2, teacherQueryVo).then((result: PageVo<Teacher>) => {
    console.log(result.pages);
    for(const teacher of result.dataList){
        console.log(teacher.name);
    }
});

/**
 * 如果getById()没有找到对象，则result为null，则result.name会抛出null异常
 *      TS使用了两个新语言特性：可选链和空值合并运算符，优雅解决此问题
 *          如果遇到null或undefined，可选链可以立即停止某些表达式的运行，可选链的核心是新的 ?. 运算符，它用于可选的属性访问
 *          可选链的三种常用方式：
 *              obj?.prop  // 属性访问
 *              obj?.[expr]  // 可选元素访问
 *              func?.(...args)  // Optional function or method call
 *          空值合并是TS的新特性，使用一个独特的操作符 ?? ，当一个表达式返回为null或undefined时，它作为默认值或“回落”值
 *          // null value
 *          null || 20 // returns 20
 *          null ?? 20 // returns 20
 *          // undefined value
 *          undefined || 20 // returns 20
 *          undefined ?? 20 // returns 20
 *          // boolean
 *          true ?? 10 // returns true
 *          false ?? 10 // returns false
 *          // NaN
 *          NaN ?? 20 // returns NaN
 *          // empty string
 *          '' ?? 5 // returns ''
 */
// 改进代码如下
// 当没有返回对象时，会返回常量字符串‘数据为空’
getById("1189390295668469762").then(resq => {
    console.log(resq?.intro??'数据为空');
});

// 判断axios返回的JSON对象中属性的数据类型
getById("1").then((result: Teacher) => {
    console.log(typeof result.id === "string"); // true
    console.log(typeof result.name === "string"); // true
    console.log(typeof result.intro === "string"); // true
    console.log(typeof result.career === "string"); // true
    console.log(typeof result.level === "number"); // true
    console.log(typeof result.avatar === "string"); // true
    console.log(typeof result.sort === "number"); // true
    console.log(typeof result.deleted === "boolean"); // true
    
})

var teacher: Teacher = {
    name: '赵六',
    intro: '',
    career: '',
    level: 1,
    avatar: '',
    sort: 1,
    deleted: "0"
}
// 执行保存接口
save(teacher).then((result: string) => {
    console.log(result);
});

var teacher: Teacher = {
    id: '1404010314584784898',
    name: '赵六1',
    intro: '',
    career: '',
    level: 1,
    avatar: '',
    sort: 1,
    deleted: "0"
}
// 执行更新接口
update(teacher).then((result: string) => {
    console.log(result);
});

remove('1404010314584784898').then((result: string) => {
    console.log(result);
});

/**
 * 日期解析
 *      JSON中不允许日期对象，如果需要包含日期，需要写为字符串再转换为日期对象
 */
// 字符串转日期
var text = '{"name":"Bill Gates", "birth":"1955-10-28", "city": "Seattle"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
// 还可使用JSON.parse()的第二个参数
var obj = JSON.parse(text, function(key, value){
    if(key == "birth"){
        return new Date(value);
    }else{
        return value;
    }
});