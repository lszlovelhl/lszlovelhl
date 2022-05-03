"use strict";
console.log("Hello!TyprScript");
alert("Hello!TypeScript");
/**
 * const和let作用域都是块范围，var作用域是全局
 * TS建议用const和let声明变量，不再使用var
 */
/**
 * let声明的变量可修改
 * const不能被更改 但可以修改引用对象中的内容
 * 相当于 Java中的final
 */
/**
 * let和const间优先选择使用const
 * 在全局环境中不应设置变量只应设置常量避免未来出错
 */
// var声明的变量没有局部作用域
// let声明的变量有局部作用域
{
    var a = 0;
    let b = 1;
}
console.log(a); // 0
// console.log(b) // not defined
// var可以声明多次
// let只能声明一次
var m = 1;
var m = 2;
let n = 3;
// let n = 4
console.log(m); // 2
// console.log(n); // 'n' has already been declared
// 声明后不允许改变
const PI = "3.1415926";
// PI = 3
// 一旦声明必须初始化
// const MY_AGE
// -------------------------------------------------------------
/**
 * TS包含的数据类型
 */
// 1.任意类型
//  any
//      声明为any的变量可以赋予任意类型的值
// 例：
let x = 1; // 数字
x = 'I am who I am'; // 字符串类型
x = false; // boolean布尔类型
// 2.数字类型
//  number
//      双精度64位浮点值，能用来表示整数和分数
// 例:
let binaryLiteral = 0b1010; // 二进制
let octalLiteral = 0o744; // 八进制
let decLiteral = 6; // 十进制
let haxLiteral = 0xf00d; // 十六进制
// 3.字符串类型
//  string
//      一个字符系列，使用单引号或双引号表示字符串类型，反引号 ` 用于定义多行文本和内嵌表达式
// 例：
let name1 = "asdfgh";
let years = 5;
let words = '您好，今年是${ name } 发布${ years + 1 } 周年';
// 4.布尔类型
//  boolean
//      表示逻辑值true和false
// 例：
let flag = true;
// 5.数组类型
//      声明变量位数组，在元素类型后面加上[]
// 例：
let arr1 = [1, 2];
//      使用数组泛型
// 例：
let arr2 = [1, 2];
// 6.元组
//      元组类型用来表示已知元素数量和类型的数组，各元素类型不需要相同，但对应位置的类型需要相同
// 例：
let x1;
x1 = ['asdfgh', 1]; // 运行正常
// x1 = [1, 'asdfgh']; // 报错
console.log(x1[0]); // 输出asdfgh
// 7.枚举
//  enum
//      枚举定义数值集合
// 例：
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Blue;
console.log(c);
// 8.void
//  void
//      用于标识方法返回值的类型，表明无返回值
// 例：
function hello() { alert("Hello!TS!"); }
hello();
// 9.null
//  null
//      表示对象值缺失
// 10.undefined
//      undefined
//          用于初始化变量为一个未定义的值
// 11.never
//  never
//      never是其他类型（包括null和undefined）的子类型，代表从不会出现的值
// ⚠️⚠️⚠️注意：TS和JS没有整数类型
// -------------------------------------------------------------
/**
 * TS是一门强类型语言，声明变量时需要同时声明变量的类型和初始值
 * 格式：let [变量名] : [类型] = 值;
 * JS格式：let 变量名 = 值;
 */
// 1.声明变量时未给初始值变量的值会被设置为undefined
// 2.TS遵循强类型，将不同的类型赋值给变量会编译错误
//      例：
let dName = 'jack';
// dName = 520; // 类型不匹配
// ⚠️注意：变量名不能使用name，会和DOM中window对象下的name属性重名
// 3.声明了变量初始值，但未指定类型，TS会根据初始值判断数据类型
//      let [变量名] = 值;
//      例：
let uname = 'asdfgh'; // 类型自动设置为string
// uname = 123; // 类型不匹配
/**
 * 联合类型Union Types
 * 通过管道( | )为变量设置多种类型，赋值时可根据所设置类型进行赋值
 * 语法：
 *      let 变量名 : 变量类型1 | 变量类型2 = 值;
 *          ⚠️注意：只能赋值指定类型，赋其他类型会报错
 * 应用场景：
 *      例如prompt函数有两种不同类型的返回值
 *          prompt(); --> 确定 ==> 用户输入的字符串 / 取消 ==> null
 *          易知不能用一种确定的返回类型接受数据，那么此时就可以使用联合类型
 *              let dName: string | null = prompt('请输入小狗名字:');
 *              console.log('hello' + dName);
 */
// -------------------------------------------------------------
/**
 * 日期类型
 *      TS没有日期格式化的定制方法，故使用Day.js来实现日期格式化
 *      Day.js是一个极简的JS库，能为浏览器解析验证操作和显示日期和时间
 *          安装方法：
 *              sudo npm install dayjs
 */
// -------------------------------------------------------------
/**
 * 类型问题
 *  1.强制类型转换
 *      可以使用关键字 as 来进行强制类型转换
 *          例：
 *              我们获取到一个input元素，则它的类型为HTMLInputElement
 *              此时可以通过 as 关键字将Element类型转换为HTMLInputElement类型
 *                  let input = document.querySelector('input[type=text]') as HTMLInputElement;
 *                  console.log(input.value);
 *
 *                  // 也可用另一写法
 *                  let text = (input as HTMLInputElement).value;
 *      总结：使用 as 进行强制类型转换语法为：
 *          let a: typeA;
 *          let b = a as typeB;
 *
 *      也可使用 < > 运算符进行类型转换
 *          除了使用 as 关键字，还可以使用 < > 运算符来进行类型转换
 *              例：
 *                  let input = <HTMLInputElement>document.querySelector('input[type=text]');
 *                  console.log(input.value);
 *      总结：使用 < > 运算符进行强制类型转换的语法：
 *          let a: typeA;
 *          let b = <typeB>a;
 *
 *  2.undefined和null等赋值问题
 *      不能将类型 "string | undefined" 分配给类型"string"
 *      只要先判断数据不是undefined就能为string变量赋值
 *          例：
 *              let uname: string | null = prompt("是否输入内容?");
 *              // 报错：不能将类型"string | null" 分配给类型"string"
 */
let cname = uname;
//   正确写法：
if (uname != null) {
    let cname = uname;
}
// -------------------------------------------------------------
/**
 * 数据结构
 *  1.数组
 *  2.元组
 *  3.枚举
 *  4.Set
 *  5.Map
 */
/**
 * 数组
 *  JS中的数组内数据可以是任意类型
 *  TS中数组内数据必须是指定类型
 *      语法：
 *          var array_name[:datatype]; // 声明
 *          array_name = [val1, val2, val3]; // 初始化
 *          或者直接在声明时初始化：
 *              var array_name[:data type] = [val1, val2, val3]
 *      若声明时未设置类型会默认设置为 any 类型，初始化时根据第一个元素的类型来推断数组的类型
 *  还可以使用泛型的方式声明数组
 *      语法：
 *          let 数组名: Array<元素类型> = [值1, 值2]
 */
let arrTs = ['a', 'b', 'c'];
/**
 *  数组迭代
 *      可以用for语句循环输出数组的各元素：
 */
// 循环初始化数组元素
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
// 遍历数组
var sites = new Array("Google", "YaHoo", "Apple", "Amerzen");
for (var i = 0; i < sites.length; i++) {
    console.log(sites[i]);
}
/**
 *  数组在函数中的使用
 *      作为参数传递给函数
 */
var sites = new Array("Google", "YaHoo", "Apple", "Amerzen");
function disp1(arr_sites) {
    for (let i = 0; i < arr_sites.length; i++) {
        console.log(arr_sites[i]);
    }
}
disp1(sites);
/**
       作为函数的返回值
*/
function disp() {
    return new Array("Google", "YaHoo", "Apple", "Amerzen");
}
var sites = disp();
for (let i in sites) {
    console.log(sites[i]);
}
// -------------------------------------------------------------
/**
 * 元组
 *  数组种元素的数据类型都是相同的（类型为any的可以不同）
 *  元组中可以存储类型不同的元素
 *      元组声明：
 *          元组声明时要指定元素个数以及每个元素的类型
 *          语法：
 *              let 元组名: [类型1, 类型2, 类型3] = [值1, 值2, 值3];
 */
//    例：
let tup1 = ['asdf', 18, true];
let mytuple1 = [10, 'asdf'];
mytuple1[0] = 120;
mytuple1[1] = "asdf";
//    ⚠️注意：元素的类型和值是一一对应的
//    let mytuple2: [number, number] = [10, "asdf"]; // 报错类型不匹配
/**      访问元组：
*          元组中元素使用索引来访问，从零开始，最后一个为n-1
*          语法：
*/ let mytuple3 = [10, "asdf"]; // 创建元组
console.log(mytuple3[0]);
console.log(mytuple3[1]);
/**
 * 枚举
 *  枚举声明语法
 *      枚举项一般用英文和数字，值一般用整型数字
 *          enum 枚举名{
 *              枚举项1 = 枚举值1,
 *              枚举项2 = 枚举值2,
 *              ...      ...
 *          }
 *      例：
 *          enum GunType{
 *              M416 = 1,
 *              AK47 = 2,
 *              Goza = 3
 *          }
 *      默认枚举值自动生成从零开始的枚举值
 *          enum 枚举名{
 *              枚举值1,
 *              枚举值2,
 *              ...
 *          }
 *      例：
 *          enum GunType{
 *              M416, // --> 0
 *              AK47, // --> 1
 *              Goza  // --> 2
 *          }
 */
//  应用场景：例：性别标识（男1， 女2， 未知3）
// 声明性别枚举
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["Unknown"] = 3] = "Unknown";
})(Gender || (Gender = {}));
// 创建用户性别变量
let userSex = Gender.Boy;
// 判断变量中的性别是否为Boy
if (userSex == Gender.Boy) {
    console.log(userSex); // 1
}
else {
    console.log(userSex); // 2 or 3
}
// -------------------------------------------------------------
/**
 * Set
 *  集合Set允许将不同的数据存储到列表中
 *  ⚠️⚠️⚠️注意：集合中的数据只出现一次
 */
// 集合Set
var mySet = new Set([1, 2, 3, 4]); // Set(4) {1, 2, 3, 4}
for (let e of mySet) {
    console.log(e);
}
// 添加值
mySet.add(5);
// 检查值是否存在
console.log(mySet.has(3));
// 返回集合大小
console.log(mySet.size);
// 集合中删除一个值
console.log(mySet.delete(4));
// 清空Set
mySet.clear();
// -------------------------------------------------------------
/**
 * Map
 *  Map对象保存键值对，且能够记忆键的原始插入顺序
 */
let myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);
for (let e of myMap) {
    console.log(e[0] + "==>" + e[1]);
}
// 设置 Map 对象
myMap.set("Google", "value3");
// 设置键对应的值
console.log(myMap.get("key2")); // 2
// 判断 Map 中是否包含键对应的值
console.log(myMap.has("key2")); // true
// 返回Map对象键/值对的数量
console.log(myMap.size); // 3
// 删除Google
console.log(myMap.delete("Google")); // true
console.log(myMap);
// 移除Map对象的所有键/值对
myMap.clear(); // 清除Map
console.log(myMap);
// -------------------------------------------------------------
/**
 * 函数
 *  函数返回值与传参
 *      TS函数必须有返回类型，无返回类型时使用void
 *          // 返回值类型
 *          function 函数名(): 返回值类型{
 *          }
 *          let 变量名: 变量类型 = 函数名();
 *
 *          // 形参类型
 *          // 实参和形参类型和数量都要一致
 *          function 函数名(形参1: 类型, 形参2: 类型): 返回值类型{
 *          }
 *          let 变量名: 变量类型 = 函数名(实参1, 实参2);
 */
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
/**
 * 可选参数
 *  如果在TS里定义了参数，则必须传入这些参数，除非将参数设置为可选
 *  可选参数使用问号标识?
 *      可选参数：
 *          function 函数名(形参 ? : 类型): 返回值类型{
 *          }
 */
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob"); // 正确
// let result2 = buildName("Bob", "Adams", "Sr."); // 错误，参数过多
let result3 = buildName("Bob", "Adams"); // 正确
/**
 * 注意‼️：可选参数必须跟在必须参数后面，如果都是可选参数就没有顺序关系
 */
/**
 * 默认值
 *  带有默认值的参数，本身就是可选参数
 *      // 默认值
 *      function 函数名(形参1: 类型 = 默认值1, 形参2: 类型 = 默认值2): 返回值类型{
 *      }
 *
 * 函数调用
 *  调用：
 *      不传递实参：
 *          函数名(); --编译后--> 函数名(默认值1, 默认值2);
 *      传1个实参：
 *          函数名(实参1)； ----> 函数名(实参1, 默认值2);
 *      传2个实参：
 *          函数名(实参1, 实参2); ----> 函数名(实参1, 实参2);
 *      只传第二个实参：
 *          函数名(undefined, 实参2); ----> 函数名(默认值1, 实参2);
 */
function buildName1(firstName1, lastName1 = "asd") {
    if (lastName1)
        return firstName1 + " " + lastName1;
    else
        return firstName1;
}
let result4 = buildName1("Bob"); // 正确
console.log(result4); // Bob asd
// -------------------------------------------------------------
/**
 * 箭头函数（Lambda函数）
 *  箭头函数提供了一整更加简洁的函数书写方式，通常用于匿名函数的定义
 *  函数只有一行语句：
 *      ([param1, param2, ..., param n]) => statement;
 */
// 以下实例声明了 lambda 表达式函数，函数返回两个数的和
var foo = (x) => 10 + x;
console.log(foo(100)); // 输出结果为110
/**
// 函数是一个语句块
([param1, param2, ..., param n]) => {
    // 代码块
}
*/
// 声明了 lambda 表达式函数，返回两个数的和
var foo1 = (x) => {
    x = 10 + x;
    console.log(x);
};
foo1(100);
/**
 * 也可以不指定函数的参数类型，通过函数内来推定参数的类型
 */
var func = (x) => {
    if (typeof x == "number") {
        console.log(x + "是一个数字");
    }
    else if (typeof x == "string") {
        console.log(x + "是一个字符串");
    }
};
func(12);
func("Tom");
/**
 * 单个参数()是可选的
 */
var display = (x) => {
    console.log("输出为" + x);
};
display(12);
/**
 * 无参数时可以设置空括号
 */
var disp2 = () => {
    console.log("Function invoked");
};
disp2();
/**
 * 语句
 *  for-of循环
 */
let someArray = [1, "string", false];
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
/**
 * 函数语句示例
 */
// if语句
let score = 75;
if (score >= 90) {
    console.log("90+");
}
else if (score >= 80) {
    console.log("80-89");
}
else if (score >= 70) {
    console.log("70-79");
}
else if (score >= 60) {
    console.log("60-69");
}
else {
    console.log("60以下");
}
// 三目表达式
let num = 10;
console.log((num > 5) ? "是" : "否");
//switch语句
let season = 1;
switch (season) {
    case 1:
        console.log("春");
        break;
    case 2:
        console.log("夏");
        break;
    case 3:
        console.log("秋");
        break;
    case 4:
        console.log("冬");
        break;
    default:
        console.log("没有匹配结果");
        break;
}
// 循环
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let condition = true;
while (condition) {
    console.log("while语句换行了");
    break;
}
do {
    console.log("do...while语句执行了");
} while (!condition);
// 数组
let array1 = [1, 2, 3, 4, 5];
for (var i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}
let array2 = new Array(1, 2, 3, 4, 5);
// 数组后面添加元素
array2.push(6);
console.log(array2);
// 数组前添加元素
array2.unshift(0);
console.log(array2);
// 删除数组最后一个元素
array2.pop();
console.log(array2);
// 删除数组前面的第一个元素
array2.shift();
console.log(array2);
// -------------------------------------------------------------
/**
 * 解构赋值表达式
 *  ES6允许从数组和对象中提取值，并对变量进行赋值，成为解构赋值
 */
// 数组解构
//传统
let a1 = 1, b = 2, c1 = 3;
console.log(a1, b, c1);
// ES6
let [x2, y, z] = [1, 2, 3];
console.log(x2, y, z);
let [, , third] = ["foo", "bar", "baz"];
console.log(third);
let [m1, , n1] = [1, 2, 3];
console.log(m1);
console.log(n1);
let [head, ...tail] = [1, 2, 3, 4];
console.log(head);
console.log(tail);
/**
 * 不完全解构
 *  等号左侧的模式只匹配等号右边数组中的一部分内容
 */
let [d, e] = [1, 2, 3];
console.log(d);
console.log(e);
// 对象解构
let user = {
    name3: "Helen",
    age: 18
};
// 传统
let name2 = user.name3;
let age1 = user.age;
console.log(name2, age1);
// ES6
let { name3, age } = user; // 注意：解构的变量必须是user中的属性
console.log(name3, age);
// -------------------------------------------------------------
/**
 * 模板字符串
 *  模板字符串相当于加强版的字符串，使用反引号
 *  除了作为普通字符串还可用于定义多行字符串，还可以再字符串中加入变量和表达式
 */
// 多行字符串
let string1 = `Hey,
can you stop angry now?`;
console.log(string1);
// 字符串插入变量和表达式，变量名写在${}中，其中可以放入JS表达式
let name4 = "Mike";
let age2 = 27;
let info = `My Name is ${name4}, I am ${age2 + 1} years old next year.`;
console.log(info);
// 字符串中调用函数
function f() {
    return "have fun!";
}
let string2 = `Game start, ${f()}`;
console.log(string2);
// -------------------------------------------------------------
/**
 * 类和对象
 *  对象
 */
// 声明对象简写
const age3 = 12;
const name5 = "Amy";
// 传统JS对象定义，此方式不用事先定义类
const person1 = {
    age: age3,
    name6: name5
};
console.log(person1.age);
// ES6 如果对象名与变量名相同，可以省略变量名
// 即 age3相当于age: age3
const person2 = {
    age3,
    name5
};
console.log(person2);
/**
 * 定义方法简写
 */
// 传统
const person3 = {
    sayHi: function () {
        console.log("Hi");
    }
};
person3.sayHi();
// ES6方法不需要function
const person4 = {
    sayHi() {
        console.log("Hi");
    }
};
person4.sayHi();
/**
 * 对象拓展运算符
 *  拓展运算符(...)用于取出参数对象所有可遍历属性并拷贝到当前对象
 */
// 拷贝对象
let person5 = {
    name7: "Amy",
    age4: 15
};
// {...person5}想弹雨{name7: "Amy", age4: 15}
let someone = Object.assign({}, person5);
console.log(someone);
// 合并对象
let age5 = {
    age6: 15
};
let name8 = {
    name9: "Amy"
};
// {...age5, ...name8}相当于{ age5: 15, name8: "Amy"}
let person6 = Object.assign(Object.assign({}, age5), name8);
console.log(person6);
// -------------------------------------------------------------
/**
 * 类
 *  TS支持面向对象的所有特性如类、接口等
 *  TS类定义方式如下：
 *      class class_name{
 *          类作用域
 *      }
 *  定义类的关键字为class，后面紧跟类名，类包含以下模块（即类的数据成员）:
 *      字段：
 *          字段是类中声明的变量，表示对象的有关数据
 *      构造函数：
 *          类实例化时调用，可为类的对象分配内存
 *      方法：
 *          对象要执行的操作
 */
// 创建对象
class City {
    constructor(cName, cLevel) {
        // 构造函数做初始化
        this.cName = cName;
        this.cLevel = cLevel;
    }
    about() {
        // 成员方法定义在类中
        console.log(`兄得，你跳[${this.cName}]的危险系数为[${this.cLevel}]`);
    }
}
let c2 = new City('P城', 1);
console.log(c2.cName); // 访问变量
c2.about(); //调用方法
/**
 * 以下实例声明了类Car，包含字段engine，构造函数早实例化后初始化字段engine
 * this关键字表示当前类实例化的对象，注意：构造函数参数名与字段名相同this,engine表示类的字段
 * 类中定义了一个方法diap()
 */
class Car {
    // 构造函数
    constructor(engine) {
        this.engine = engine;
    }
    // 方法
    disp() {
        console.log("发动机为:" + this.engine);
    }
}
let obj = new Car("宝马");
// 属性访问
console.log(obj.engine);
// 方法调用
obj.disp();
// -----------------------------------------------
/**
 * 访问控制修饰符
 *  访问控制修饰符用来保护对类、变量、方法和构造方法的访问
 *      public（默认）：
 *          公有，可以在任何地方被访问
 *      protected：
 *          受保护，可以被其自身及其子类和父类访问
 *      private：
 *          私有，只能被其定义所在的类访问
 */
// 下面变量str1为public，str2为private，可以访问实例str1，访问str2会报错
class Encapsulate {
    constructor() {
        this.str1 = "hello";
        this.str2 = "world";
    }
}
var obj1 = new Encapsulate();
console.log(obj1.str1);
// console.log(obj1.str2); // str2私有，无法访问
/**
 * static关键字
 *  static用于定义类的数据成员（属性和方法）为静态，静态成员可直接通过类名调用
 */
class StaticMem {
    static disp() {
        console.log("num值为" + StaticMem.num);
    }
}
// 初始化静态变量
StaticMem.num = 12;
// 调用静态方法
StaticMem.disp();
/**
 * 类继承
 *  类继承使用关键字extends，子类除不能继承父类私有成员 （方法和属性） 和构造参数外其他都能继承
 *  TS一次只能继承一个类，不支持继承多个类，但TS支持多重继承（A extends B，B extends C）
 *  类继承后子类可对父类方法重新定义，称为方法的重写，super关键字是对父类的直接引用，可以引用父类的属性和方法
 */
class PrinterClass {
    doPrint() {
        console.log("父类的 doPrint() 方法");
    }
}
class StringPrinter extends PrinterClass {
    doPrint() {
        // 调用父类的函数
        super.doPrint();
        console.log("子类的 doPrint() 方法");
    }
}
// 实现接口的类必须实现接口中的方法
// 定义羊类实现接口
class Sheep {
    eat() {
        console.log("I'm eat grass");
    }
}
// 定义老虎实现接口
class Tiger {
    eat() {
        console.log("I'm eat meat");
    }
}
// 定义一个函数，参数使用接口类型
function myfunc(a) {
    a.eat();
}
// 传入不同的对象可以有不同的结果输出（多态应用）
myfunc(new Sheep());
myfunc(new Tiger());
// 接口作为方法的参数类型声明
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
// 传入的参数必须满足接口声明的参数的所有属性
let p1 = { firstName: "Jane", lastName: "User" };
//将函数返回的内容写入网页中
document.write(greeter(p1));
// 静态初始化方式创建一个对象，必须要给对象的所有成员变量赋值
var Iobj = { v1: 12, v2: 23 };
// 输出
console.log("value 1:" + Iobj.v1 + "value 2:" + Iobj.v2);
// -----------------------------------------------
/**
 * 泛型
 *  示例
 *      泛型时参数化的类型，一般用来限制集合的内容
 */
/**
 *      例：
 *          声明一个数组
 */
class Person7 {
    // 构造函数
    constructor(uname) {
        this.uname = uname;
    }
}
class Employee {
    // 构造函数
    constructor(uname, age) {
        this.uname = uname;
        this.age = age;
    }
}
var workers = []; // 指定数组只能放Person类型的元素
workers[0] = new Person7("zhangsan");
workers[1] = new Employee("lisi", "23");
/**
 * 函数泛型
 *  TS使用了类型变量来声明函数，他是一种特殊的变量，只用于表示类型而不是值
 *  例子中给identity添加了类型变量T用于捕获用户传入的类型，还可使用T作为返回值类型
 */
function identity(arg) {
    return arg;
}
// 有两种方法使用泛型函数，一种是传入所有的参数，包括类型参数
let output1 = identity("myString");
// 这里明确指定了T是string类型，使用<>括起来
// 第二种方法更普遍，利用了类型推倒，编译器会根据传入参数自动确定类型
let output2 = identity("myString");
function identity1(arg) {
    return arg;
}
let myIdentity = identity1;
/**
 * 泛型类
 *  泛型类使用<>括起泛型类型，跟在类名后
 */
class GenericNumber {
    constructor(zeroValue) {
        this.zeroValue = zeroValue;
    }
    add(x) {
        return x;
    }
}
// 指定泛型创建对象
let myGenericNumber = new GenericNumber(5);
// 可以看到成员属性的类型已经被自动推导和设置了
myGenericNumber.zeroValue = 0;
// ----------------------------------------------
