package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.Cron;
import com.aikang.Bean.CronTask;

public interface CronTaskMapper {

	Cron getACron();
	
	List<CronTask> getAllCronTask(); 
	
	Integer addCronTask(@Param("record") CronTask record);
	
	Integer addListCronTask(@Param("record") CronTask[] record);
	
	Integer deleteCronTaskByID(@Param("id") Integer id);
	
	Integer updateCronTaskByIDSelective(@Param("record") CronTask record);
}
