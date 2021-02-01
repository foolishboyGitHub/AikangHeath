package com.aikang.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.WBillItem;

public interface WBillItemMapper {

	List<Map<String, Object>> getCompanyHuiYuanSpandWBillItemByseriid(@Param("id") Long id, @Param("company") String company);
	
	Map<String, Object> queryBillSummarySpanDay(@Param("query") Map<String, Integer> query, @Param("company") String company);
	
	List<Map<String, Object>> queryAllWorksServiceSpanDay(@Param("query") Map<String, Integer> query, @Param("company") String company);
	
	List<Map<String, Object>> queryAllWorksDetailsSpanDay(@Param("query") Map<String, Integer> query, @Param("company") String company);
	
	List<Map<String, Object>> queryXiaoFeiJiLuSpanDay(@Param("query") Map<String, Integer> query, @Param("company") String company);
	
	WBillItem getCompanyBillItemById(@Param("id") Long id, @Param("company") String company);
	
	Integer insertWBillItems(@Param("record") WBillItem[] record);
	
	Integer updateByPrimaryKeySelective(@Param("record") WBillItem record);
	
	Integer deleteWBillItemByID(@Param("id") Long id);
}
