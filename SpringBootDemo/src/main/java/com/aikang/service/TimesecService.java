package com.aikang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.SpeTimesec;
import com.aikang.mapper.PlanWorkMapper;
import com.aikang.mapper.SpeTimesecMapper;

@Service
@Transactional(rollbackFor=Exception.class)
public class TimesecService {

	@Autowired
	SpeTimesecMapper speTimesecMapper;
	
	@Autowired
	PlanWorkMapper planWorkMapper;
	
	public List<SpeTimesec> getAllSpeTimesecList(String company)
	{
		return speTimesecMapper.getAllSpetimesecs(company);
	}
	public List<SpeTimesec> getAllTypeSpetimesecs(int type, String company)
	{
		return speTimesecMapper.getAllTypeSpetimesecs(type, company);
	}
	public SpeTimesec getAllSpeTimesecList(Long id, String company)
	{
		return speTimesecMapper.getAllSpetimesecByID(id, company);
	}
	
	public int insertSpeTimesec( SpeTimesec record, String company)
	{
		return speTimesecMapper.insertSpeTimesec(record, company);
	}
	
	public int updateSpeTimesecByIDSelective(SpeTimesec record, String company)
	{
		return speTimesecMapper.updateSpeTimesecByIDSelective(record, company);
	}
	
	public int delSpeTimesecByID( SpeTimesec record, String company)
	{
		planWorkMapper.deleteWorkExtraBytmid(record.getId(), company);
		
		return speTimesecMapper.delSpeTimesec(record.getId(), company);
	}
}
