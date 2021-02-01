package com.aikang.mapper;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.RoundsConfig;

public interface RoundsConfigMapper {

	RoundsConfig getRoundsConfig(@Param("company") String company);
	
	int truncateRoundsConfig(@Param("company") String company);
	
	int insertRoundsConfig(@Param("record") RoundsConfig record, @Param("company") String company);
	
	int updateRoundsConfigByIDSelective(@Param("record") RoundsConfig record, @Param("company") String company);
}
