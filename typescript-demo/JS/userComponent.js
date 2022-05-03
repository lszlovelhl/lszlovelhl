// getList()
// save()

import { getList, save } from "./userApi.js"

getList()
save()

// 变量导入
import num from "../JS/OneTwoThree.js";
console.log(num);

import validate from "../outputs/StaticZipCodeValidator.js";
let strings = ["Hello", "98052", "101"];
// 使用导入的函数
strings.forEach(s => {
    console.log(`"${s}" ${validate(s) ? "匹配" : "不匹配"}`);
});

// 类导入
import validator from "../outputs/ZipCodeValidator";
let myValidator = new validator();
strings.forEach(s => {
    console.log(`"${s}" ${myValidator.isAcceptable(s) ? "匹配" : "不匹配"}`);
});

// 混合导入
import add, {name10} from "../outputs/add.js";
console.log(add(1, 2));
console.log(name10);
// add表示默认导出的函数，name10表示命令式导出的name10