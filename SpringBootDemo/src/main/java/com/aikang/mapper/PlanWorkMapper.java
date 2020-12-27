package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.PlanWork;

public interface PlanWorkMapper {

	List<PlanWork> getAllPlanWorks(@Param("company") String company);
	
	PlanWork getPlanWorkById(@Param("id") Integer id, @Param("company") String company);
	
	PlanWork getPlanWorkByHid(@Param("hid") Integer hid, @Param("company") String company);
	
	int truncatePlanWorks(@Param("company") String company);
    
    int addPlanWorks(@Param("record") PlanWork[] record, @Param("company") String company);
    
    int updatePlanWorksByIdSelective(@Param("record") PlanWork record, @Param("id") Integer id, @Param("company") String company);
    
    int updatePlanWorksByHidSelective(@Param("record") PlanWork record, @Param("hid") Integer hid, @Param("company") String company);
    
    int updateListPlanWorksByHidSelective(@Param("record") List<PlanWork> record, @Param("company") String company);
}
