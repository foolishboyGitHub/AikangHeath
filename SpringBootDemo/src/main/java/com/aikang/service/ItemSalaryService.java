package com.aikang.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.ServiceSalary;
import com.aikang.mapper.ItemSalaryMapper;
import com.aikang.utils.Util;

@Service
@Transactional
public class ItemSalaryService {

	@Autowired
	ItemSalaryMapper itemSalaryMapper;
	
	public List<ServiceSalary> getItemSalarysByHid(Long hid){
		return itemSalaryMapper.getItemSalaryByHid(hid, Util.getConpnany_Name());
	}
	public ServiceSalary getItemSalarysByHidSid(Long sid, Long hid,  String company){
		return itemSalaryMapper.getItemSalarysByHidSid(sid, hid, company);
	}
	public boolean addSalaryRecordByHid(Long hid, ServiceSalary[] record){
		itemSalaryMapper.deleteSalaryByHid(hid, Util.getConpnany_Name());
		Integer addnum = itemSalaryMapper.addSalaryByHid(hid, record, Util.getConpnany_Name());
		return addnum == record.length;
	}
}
