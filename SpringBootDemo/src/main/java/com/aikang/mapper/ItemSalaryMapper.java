package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.ServiceSalary;
import com.aikang.Bean.WaiterItem;

public interface ItemSalaryMapper {

	List<ServiceSalary> getItemSalaryByHid(@Param("hid") Long hid,@Param("company") String company);
	
	List<ServiceSalary> getItemSalarysByWaitItems(@Param("record") List<WaiterItem> record,@Param("company") String company);
	
	ServiceSalary getItemSalarysByHidSid(@Param("sid") Long sid, @Param("hid") Long hid, @Param("company") String company);
	
	Integer deleteSalaryByHid(@Param("hid") Long hid, @Param("company") String company);
	
	Integer addSalaryByHid(@Param("hid") Long hid, @Param("record") ServiceSalary[] record, @Param("company") String company);
}
