package com.aikang.mapper;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.GukePayChannelRecord;
import com.aikang.Bean.MoneyChannel;

public interface MoneyChannelMapper {

	Integer addMoneyChannel(@Param("record") MoneyChannel record);
	
	MoneyChannel getCompanyMoneyChannelByChannelName(@Param("channelname") String channelname, @Param("price") Double price, @Param("company") String company);

	Integer updateMoneyChannelByIDSelective(@Param("record") MoneyChannel record);
	
	
	Integer addMoneyChannelRecord(@Param("record") GukePayChannelRecord record);
}
