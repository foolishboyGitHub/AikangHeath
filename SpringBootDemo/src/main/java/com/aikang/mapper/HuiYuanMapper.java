package com.aikang.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.HuiYuan;
import com.aikang.Bean.HuiYuanTradeRecord;
import com.aikang.Bean.HuiYuanType;
import com.aikang.Bean.WorkExtraSalaryRecord;

public interface HuiYuanMapper {

	HuiYuanType getHuiYuanTypeByID(@Param("id") long id);
	
	HuiYuanType getHuiYuanTypeByTypename(@Param("company") String company, @Param("typename") String typename);
	
	HuiYuanType getHuiYuanTypeByTypenameEx(@Param("company") String company, @Param("typename") String typename, @Param("id") long id);
	
	HuiYuanType getHuiYuanTypeByRechargeam(@Param("company") String company, @Param("rechargeam") double rechargeam);
	
	HuiYuanType getHuiYuanTypeByRechargeamEx(@Param("company") String company, @Param("rechargeam") double rechargeam, @Param("id") long id);
	
	List<HuiYuanType> getAllCompanyHuiYuanTypes(@Param("company") String company);
	
	List<HuiYuanType> getAllEnableCompanyHuiYuanTypes(@Param("company") String company, @Param("enable") int enable);
	
	Map<String, Object> getAllCompanyHuiYuanTypeNum(@Param("company") String company);
	
	Integer insertHuiYuanType(@Param("record") HuiYuanType record); 
	
	Integer updateHuiYuanTypeByPrimaryKeySelective(@Param("record") HuiYuanType record); 
	
	Integer updateHuiYuanTypeEnableByID(@Param("record") HuiYuanType record);
	
	Integer deleteHuiYuanTypeByID(@Param("id") long id);
	
	
	HuiYuan getHuiYuanByID(@Param("id") long id);
	
	HuiYuan getHuiYuanByCardid(@Param("cardid") String cardid, @Param("company") String company);
	
	HuiYuan getHuiYuanByPhonecodeAndType(@Param("phonecode") String phonecode, @Param("typeseriid") String typeseriid, @Param("company") String company);
	
	List<HuiYuan> getHuiYuanByPhonecode(@Param("phonecode") String phonecode,  @Param("company") String company);
	
	List<HuiYuan> getAllCompanyHuiYuans(@Param("company") String company, @Param("start") int start, @Param("pagesize") int pagesize);
	
	List<HuiYuan> QueryHuiYuanByInfokey(@Param("company") String company, @Param("key") String key);
	
	Map<String, Object> getAllCompanyHuiYuanNum(@Param("company") String company);
	
	Integer insertHuiYuan(@Param("record") HuiYuan record);
	
	Integer updateHuiYuanByPrimaryKeySelective(@Param("record") HuiYuan record); 
	
	
	
	
	
	//会员交易记录相关
	Map<String, Object> queryHuiYuanTradeSummarySpanDay(@Param("query") Map<String, Integer> query, @Param("company") String company);

	HuiYuanTradeRecord getHuiYuanTradeRecordByID(@Param("id") long id);
	
	Integer insertHuiYuanTradeRecord(@Param("record") HuiYuanTradeRecord record);
	
	Integer updateHuiYuanTradeRecordByPrimaryKeySelective(@Param("record") HuiYuanTradeRecord record);
	
	
	

	//办卡充值提成相关
	WorkExtraSalaryRecord getWorkExtraSalaryRecordByID(@Param("id") long id);
	
	Integer insertWorkExtraSalaryRecordArray(@Param("record") WorkExtraSalaryRecord[] record);
	
	Integer updateWorkExtraSalaryRecordByPrimaryKeySelective(@Param("record") WorkExtraSalaryRecord record);
	
}
