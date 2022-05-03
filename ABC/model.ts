// 通用返回类型，对应后端的R类型
export interface R<T>{
    code: string
    message: string
    data: T
}
// 分页结果，对应后端的分页VO
export interface PageVo<T>{
    // 当前页码
    currentPage: number
    // 每页条数
    pageSize: number
    // 总条数
    total: number
    // 数据列表
    dataList: T[]
    // 总页数
    pages: number
}

// 实际返回data的类型
// 注意： 新增时id值由服务端自动生成
// id是超大整数，JS有精度问题，所以使用string表示
export interface Teacher{
    id?: string
    name: string
    intro: string
    career: string
    level: number
    avatar: string
    sort: number
    deleted: string
}

// 查询条件  注意： 条件是可选的，故变量名后有个？
export interface TeacherQueryVo{
    name?: string
    level?: number
    joinDateBegin?: string
    joinDateEnd?: string
}