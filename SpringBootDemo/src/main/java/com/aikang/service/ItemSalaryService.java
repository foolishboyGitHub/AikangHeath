package com.aikang.service;

import java.util.List;

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
	
	public List<ServiceSalary> getItemSalarysByHid(Integer hid){
		return itemSalaryMapper.getItemSalaryByHid(hid, Util.getConpnany_Name());
	}
	
	public boolean addSalaryRecordByHid(Integer hid, ServiceSalary[] record){
		itemSalaryMapper.deleteSalaryByHid(hid, Util.getConpnany_Name());
		Integer addnum = itemSalaryMapper.addSalaryByHid(hid, record, Util.getConpnany_Name());
		return addnum == record.length;
	}
}
