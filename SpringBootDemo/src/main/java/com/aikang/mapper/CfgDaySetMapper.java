package com.aikang.mapper;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.CfgDaySet;

public interface CfgDaySetMapper {

	CfgDaySet getDaySetConfig(@Param("company") String company);
	
	int updateDaySetByIdSelective(@Param("record") CfgDaySet record, @Param("company") String company);
	
	int truncateDaySetConfig(@Param("company") String company);
	
	int insertDaySetConfig(@Param("record") CfgDaySet record, @Param("company") String company);
}
