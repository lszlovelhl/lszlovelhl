// 正则
const numberRegexp = /^[0-9]+$/;
export default function(s: string){
    // 长度等于5且全是数字
    return s.length === 5 && numberRegexp.test(s);
}