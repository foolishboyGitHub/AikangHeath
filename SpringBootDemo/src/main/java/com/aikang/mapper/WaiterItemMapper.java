package com.aikang.mapper;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.WaiterItem;

import java.util.List;

public interface WaiterItemMapper {

	List<WaiterItem> getAllWaiterItem(@Param("company") String company);
	
	List<WaiterItem> getWaiterItemsByHid(@Param("hid") Integer hid, @Param("company") String company);
	
	Integer insertWaiterItem(@Param("record") WaiterItem[] record,@Param("company") String company);
	
	Integer updateCheckCodeByDayidAndHid(@Param("dayid") Integer dayid, @Param("hid") Integer hid, @Param("checkcode") String checkcode, @Param("company") String company);
	
	Integer updateWaiterStateListByIdSelective(@Param("record") List<WaiterItem> record,@Param("company") String company);
	
	Integer updateByPrimaryKeySelective(@Param("record") WaiterItem record,@Param("company") String company);
	
	WaiterItem getCompanyWaiterItemById(@Param("id") Integer id, @Param("company") String company);
	
	List<WaiterItem> getCompanyWaiterItemByIds(@Param("ids") List<Long> ids, @Param("company") String company);
	
	List<WaiterItem> getCompanyWaiterItemByDayidAndHid(@Param("dayid") Integer dayid, @Param("hid") Integer hid, @Param("company") String company);
	
	Integer deleteWaiterItemByID(@Param("id") Integer id,@Param("company") String company);
	
	Integer deleteWaiterItemByIds(@Param("ids") List<Long> ids,@Param("company") String company);
}
