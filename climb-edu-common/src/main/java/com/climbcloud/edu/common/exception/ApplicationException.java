package com.climbcloud.edu.common.exception;

import com.climbcloud.edu.common.base.ResultCode;

/**
 * @ClassName ApplicationException
 * @auther lsz1310225074@iCloud.com
 * @Description TODO
 * @date 2022/4/21 19:00
 * @Version 1.0
 */
// 异常类中消息优先级：message > cause.getMessage() > ResultCode
public class ApplicationException extends RuntimeException{
    private final ResultCode resultCode;
    public ApplicationException(String message){
        super(message);
        this.resultCode = ResultCode.UNKNOWN;
    }
    public ApplicationException(Throwable cause){
        super(cause);
        this.resultCode = ResultCode.UNKNOWN;
    }
    public ApplicationException(String message, Throwable cause){
        super(message,cause);
        this.resultCode = ResultCode.UNKNOWN;
    }
    public ApplicationException(ResultCode resultCode){
        super(resultCode.getMessage());
        this.resultCode = resultCode;
    }
    public ApplicationException(ResultCode resultCode, String message){
        super(message);
        this.resultCode = resultCode;
    }
    public ApplicationException(ResultCode resultCode, Throwable cause){
        super(cause);
        this.resultCode = resultCode;
    }
    public ApplicationException(ResultCode resultCode, String message, Throwable cause){
        super(message, cause);
        this.resultCode = resultCode;
    }
    public ResultCode getResultCode(){
        return resultCode;
    }
}
