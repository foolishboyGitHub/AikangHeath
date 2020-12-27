package com.aikang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.Cron;
import com.aikang.Bean.CronTask;
import com.aikang.mapper.CronTaskMapper;

@Service
@Transactional
public class CronService {

	@Autowired      //注入mapper
	CronTaskMapper cronTaskMapper;
	
	public Cron getCron(){
		return cronTaskMapper.getACron();
	}
	
	public List<CronTask> getAllCronTasks(){
		return cronTaskMapper.getAllCronTask();
	}
}
