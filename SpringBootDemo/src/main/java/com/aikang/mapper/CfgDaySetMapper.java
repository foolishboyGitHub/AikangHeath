package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.CfgDaySet;

public interface CfgDaySetMapper {

	CfgDaySet getDaySetConfig(@Param("company") String company);
	
	List<CfgDaySet> getAllDaySetConfigByCompanylist(@Param("companylist") List<String> companylist);
	
	int updateDaySetByIdSelective(@Param("record") CfgDaySet record, @Param("company") String company);
	
	int updateListSdxByIdsAtSomeCompany(@Param("record") List<CfgDaySet> record);
	
	int truncateDaySetConfig(@Param("company") String company);
	
	int insertDaySetConfig(@Param("record") CfgDaySet record, @Param("company") String company);
}
