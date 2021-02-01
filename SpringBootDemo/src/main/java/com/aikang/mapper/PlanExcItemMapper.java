package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.PlanExcItem;


public interface PlanExcItemMapper {

	List<PlanExcItem> getAllPlanExcItems(@Param("company") String company);
	
	List<PlanExcItem> getPlanExcItemsByHid(@Param("hid") Long hid, @Param("company") String company);
	
	int deleteExcItemByHid(@Param("hid") Long hid, @Param("company") String company);
    
    int addExcItemByList(@Param("record") PlanExcItem[] record, @Param("company") String company);
}
