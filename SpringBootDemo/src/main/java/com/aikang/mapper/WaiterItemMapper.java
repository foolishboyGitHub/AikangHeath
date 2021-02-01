package com.aikang.mapper;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.WaiterItem;

import java.util.List;

public interface WaiterItemMapper {

	List<WaiterItem> getAllWaiterItem(@Param("company") String company);
	
	List<WaiterItem> getWaiterItemsByHid(@Param("hid") Long hid, @Param("company") String company);
	
	Integer insertWaiterItem(@Param("record") WaiterItem[] record,@Param("company") String company);
	
	Integer updateCheckCodeByDayidAndHid(@Param("dayid") Integer dayid, @Param("hid") Long hid, @Param("checkcode") String checkcode, @Param("company") String company);
	
	Integer updateWaiterStateListByIdSelective(@Param("record") List<WaiterItem> record,@Param("company") String company);
	
	Integer updateByPrimaryKeySelective(@Param("record") WaiterItem record,@Param("company") String company);
	
	Integer updatePayStateListByIdSelective(@Param("record") List<WaiterItem> record, @Param("company") String company);
	
	Integer updateListHidByIdsAtSomeCompany(@Param("record") List<WaiterItem> record);
	
	Integer updateAllHasPayAndPassTimeItem(			
			@Param("ordertype_1") Integer ordertype_1,
			@Param("ordertype_2") Integer ordertype_2,
			@Param("paystate") Integer paystate,
			@Param("nowdate") String nowdate, 
			@Param("workstate_1") Integer workstate_1, 
			@Param("workstate_2") Integer workstate_2,
			@Param("workstate_3") Integer workstate_3) ;
	
	WaiterItem getCompanyWaiterItemById(@Param("id") Long id, @Param("company") String company);
	
	List<WaiterItem> getCompanyWaiterItemByIds(@Param("ids") List<Long> ids, @Param("company") String company);
	
	List<WaiterItem> getAllNoHidWaiterItemByDateStr(@Param("startdate") String startdate, @Param("enddate") String enddate);
	
	List<WaiterItem> getAllHasPayAndPassFinishYjTime(@Param("paystate") Integer paystate, @Param("nowdate") String nowdate, @Param("workstate_1") Integer workstate_1, @Param("workstate_2") Integer workstate_2);
	
	List<WaiterItem> getCompanyWaiterItemByDayidAndHid(@Param("dayid") String dayid, @Param("hid") Long hid, @Param("company") String company);
	
	List<WaiterItem> getCompanyWaiterItemByBillnumber(@Param("billnumber") String billnumber, @Param("company") String company);
	
	Integer deleteWaiterItemByID(@Param("id") Long id,@Param("company") String company);
	
	Integer copyItemToReceiveTableByID(@Param("id") Long id,@Param("company") String company);
	
	
	Integer deleteWaiterItemByIds(@Param("ids") List<Long> ids);
}
