package com.climbcloud.edu.common.handler;

import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.reflection.MetaObject;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * @ClassName MyMetaObjectHandler
 * @auther lsz1310225074@iCloud.com
 * @Description TODO
 * @date 2022/4/21 19:18
 * @Version 1.0
 */
@Slf4j
@Component// 交给Spring管理
public class MyMetaObjectHandler implements MetaObjectHandler {
    // 使用mp实现添加操作执行
    @Override
    public void insertFill(MetaObject metaObject){
        // 起始版本3.3.3(推荐)
        this.strictInsertFill(metaObject, "gmtCreate", LocalDateTime::now, LocalDateTime.class);
        this.strictInsertFill(metaObject, "gmtModified", LocalDateTime::now, LocalDateTime.class);
    }
    // 使用mp实现更新操作执行
    @Override
    public void updateFill(MetaObject metaObject){
        this.strictUpdateFill(metaObject, "gmtModified", LocalDateTime::now, LocalDateTime.class);
    }
}
