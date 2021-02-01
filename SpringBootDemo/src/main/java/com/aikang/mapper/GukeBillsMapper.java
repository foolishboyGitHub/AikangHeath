package com.aikang.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.GukeBills;
import com.aikang.Bean.GukePayTradeRecord;
import com.aikang.Bean.GukeShopings;


public interface GukeBillsMapper {
	
	List<GukeShopings> getShopDataByGukeID(@Param("GukeID") long GukeID, @Param("company") String company, @Param("workstate1") int workstate1, @Param("workstate2") int workstate2);
	
	List<GukeShopings> getShopDataByGukeIDSortByBillNumber(@Param("GukeID") long GukeID, @Param("company") String company, @Param("workstate1") int workstate1, @Param("workstate2") int workstate2);
	
	List<GukeShopings> getCompanyShopDataSortByBillNumber(@Param("company") String company, @Param("workstate1") int workstate1, @Param("workstate2") int workstate2);
	
	List<Map<String, Object>> getShopDataByGukeIDGroup(@Param("GukeID") long GukeID, @Param("company") String company, @Param("workstate1") int workstate1, @Param("workstate2") int workstate2);
	
	List<GukeShopings> getShopDataByBillNumberAndCompany(@Param("billnumber") String billnumber, @Param("company") String company);
	
	GukeShopings getShopDataBySerinumberAndCompany(@Param("serinumber") String serinumber, @Param("company") String company);
	
	List<GukeShopings> getShopDataByBillNumber(@Param("billnumber") String billnumber);

	GukeShopings getShopDataByID(@Param("id") long id);
	
	Integer insertShopData(@Param("record") GukeShopings record);
	
	Integer insertShopDataList(@Param("record") GukeShopings[] record);
	
	Integer updateShopListBillNumberByIdSelective(@Param("record") List<GukeShopings> record);
	
	Integer updateShopByPrimaryKeySelective(@Param("record") GukeShopings record);
	
	Integer deleteShopDataByID(@Param("id") long id);
	
	Integer deleteShopDataByIDAndGID(@Param("id") long id, @Param("GukeID") long GukeID);
	
	Integer deleteShopDataByGID(@Param("GukeID") long GukeID, @Param("workstate") int workstate, @Param("paystate") int paystate);
	
	List<GukeShopings> getHistorygetShopDataByGukeIDSortByBillNumber(@Param("GukeID") long GukeID, @Param("company") String company, @Param("workstate1") int workstate1, @Param("workstate2") int workstate2);
	
	List<GukeShopings> getHistorygetShopDataDetailByGukeIDAndBillNumber(@Param("GukeID") long GukeID, @Param("company") String company, @Param("billnumber") String billnumber, @Param("workstate1") int workstate1, @Param("workstate2") int workstate2);
	
	List<Map<String, Object>> getSimpHistoryShopDataByGukeIDAndGroupSortByDate(@Param("GukeID") long GukeID,  @Param("company") String company);
	
	
	
	
	
	
	
	
	////////////////下面的没啥用
	
	List<GukeBills> getAllWBillItem();
	
	List<GukeBills> getBillItemsByKid(@Param("kid") Integer kid);
	
	Integer insertWBillItems(@Param("record") GukeBills[] record);
	
	Integer updateByPrimaryKeySelective(@Param("record") GukeBills record);
	
	Integer deleteShopDataBybillnumber(@Param("billnumber") String billnumber, @Param("company") String company);
	
	Integer insertShopDataListToRecord(@Param("record") List<GukeShopings> record);
	
	Integer insertGukePayTradeRecord(@Param("record") GukePayTradeRecord record);
}

