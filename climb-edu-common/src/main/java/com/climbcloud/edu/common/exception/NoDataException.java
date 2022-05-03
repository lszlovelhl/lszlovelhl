package com.climbcloud.edu.common.exception;

import com.climbcloud.edu.common.base.ResultCode;

/**
 * @ClassName NoDataException
 * @auther lsz1310225074@iCloud.com
 * @Description TODO
 * @date 2022/4/21 19:13
 * @Version 1.0
 */
// 未找到数据异常，返回状态码404
public class NoDataException extends ApplicationException {
    public NoDataException() {
        super(ResultCode.NOT_FOUND);
    }

    public NoDataException(String message) {
        super(ResultCode.NOT_FOUND, message);
    }

    public NoDataException(Throwable cause) {
        super(ResultCode.NOT_FOUND, cause);
    }

    public NoDataException(String message, Throwable cause) {
        super(ResultCode.NOT_FOUND, message, cause);
    }

//    public NoDataException(ResultCode resultCode) {
//        super(resultCode);
//    }
//
//    public NoDataException(ResultCode resultCode, String message) {
//        super(resultCode, message);
//    }
//
//    public NoDataException(ResultCode resultCode, Throwable cause) {
//        super(resultCode, cause);
//    }
//
//    public NoDataException(ResultCode resultCode, String message, Throwable cause) {
//        super(resultCode, message, cause);
//    }
}
