package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.SpeTimesec;

public interface SpeTimesecMapper {

	List<SpeTimesec> getAllSpetimesecs(@Param("company") String company);
	
	List<SpeTimesec> getAllTypeSpetimesecs(@Param("type") Integer type, @Param("company") String company);
	
	List<SpeTimesec> getAllTypeSpetimesecAtSometime(@Param("type") Integer type, @Param("nowdate1") String nowdate1, @Param("nowdate2") String nowdate2, @Param("company") String company);
	
	List<SpeTimesec> getAllTypeSpetimesecAtSometimeInCompanylist(@Param("type") Integer type, @Param("nowdate1") String nowdate1, @Param("nowdate2") String nowdate2, @Param("companylist") List<String> companylist);
	
	SpeTimesec getAllSpetimesecByID(@Param("id") Long id,@Param("company") String company);
	
	int insertSpeTimesec(@Param("record") SpeTimesec record, @Param("company") String company);
	
	int updateSpeTimesecByIDSelective(@Param("record") SpeTimesec record, @Param("company") String company);
	
	int delSpeTimesec(@Param("id") Long id, @Param("company") String company);
}
