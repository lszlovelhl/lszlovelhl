package com.climbcloud.edu.common.base;

import lombok.Data;

import java.util.List;
import java.util.Map;

/**
 * @author xlz
 * @date 2022/2/21 16:00
 */
@Data
public class PageVO<T> {
	// 数据列表
    private List<T> dataList;
	// 每页条数
    private Integer pageSize;
	// 总条数
    private Long total;
	// 当前页面
    private Integer currentPage;
    private boolean isFirstPage;  // 是否为第一页
    private boolean isLastPage;   // 是否为最后一页
}
