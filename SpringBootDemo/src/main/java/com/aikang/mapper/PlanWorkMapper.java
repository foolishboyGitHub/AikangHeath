package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.PlanWork;
import com.aikang.Bean.WorkExtra;

public interface PlanWorkMapper {

	List<PlanWork> getAllPlanWorks(@Param("company") String company);
	
	List<PlanWork> getAllPlanWorksAtWorkExtra(@Param("tmname") String tmname, @Param("company") String company);
	
	List<PlanWork> getAllPlanWorksByCompanylist(@Param("companylist") List<String> companylist, @Param("state_1") Integer state_1, @Param("state_2") Integer state_2);
	
	List<PlanWork> getAllWorkExtraPlanWorksByCompanylist(@Param("companylist") List<String> companylist, @Param("state_1") Integer state_1, @Param("state_2") Integer state_2);
	
	List<PlanWork> getPlanWorksInIds(@Param("ids") List<Long> ids);
	
	PlanWork getPlanWorkById(@Param("id") Long id, @Param("company") String company);
	
	PlanWork getPlanWorkByHid(@Param("hid") Long hid, @Param("company") String company);
	
	int truncatePlanWorks(@Param("company") String company);
    
    int addPlanWorks(@Param("record") PlanWork[] record, @Param("company") String company);
    
    int updatePlanWorksByIdSelective(@Param("record") PlanWork record, @Param("id") Integer id, @Param("company") String company);
    
    int updatePlanWorksByHidSelective(@Param("record") PlanWork record, @Param("hid") Long hid, @Param("company") String company);
    
    int updateListPlanWorksByHidSelective(@Param("record") List<PlanWork> record, @Param("company") String company);
    
    int updateNoCompanyAllListPlanWorksByHidSelective(@Param("record") List<PlanWork> record);
    
    
    //////////////////////////以下是加班设置///////////////////////
    int addNewWorkExtraRecord(@Param("record") WorkExtra record, @Param("company") String company);
    
    List<WorkExtra> getWorkExtraByHid(@Param("hid") Long hid, @Param("company") String company);
    
    WorkExtra getWorkExtraByHidAndTmname(@Param("hid") Long hid, @Param("tmname") String tmname, @Param("company") String company);
    
    WorkExtra getWorkExtraByHidAndTmid(@Param("hid") Long hid, @Param("tmid") Long tmid, @Param("company") String company);
    
    int updateWorkExtraIsworkByhidAndTmid(@Param("record") WorkExtra record, @Param("company") String company);
    
    int updateAddWorkExtraIsworkRoundByhidAndTmid(@Param("record") WorkExtra record, @Param("company") String company);
    
    int SetWorkExtraRoundOrigByIfRlastdatePass(@Param("nowdate") String nowdate, @Param("nowdateset") String nowdateset, @Param("rounde") Integer rounde);
    
    int deleteWorkExtraByHidAndTmname(@Param("record") WorkExtra record, @Param("company") String company);
    
    int deleteWorkExtraBytmid(@Param("tmid") Long tmid, @Param("company") String company);
}
