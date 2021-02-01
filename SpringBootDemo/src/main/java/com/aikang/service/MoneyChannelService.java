package com.aikang.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.GukePayChannelRecord;
import com.aikang.Bean.MoneyChannel;
import com.aikang.mapper.MoneyChannelMapper;

@Service
@Transactional
public class MoneyChannelService {
	
	@Autowired
	MoneyChannelMapper moneyChannelMapper;
	
	public MoneyChannel getCompanyMoneyChannelByChannelName(String channelname, Double price, String company){
		return moneyChannelMapper.getCompanyMoneyChannelByChannelName(channelname, price, company);
	}
	
	public int addMoneyChannel(MoneyChannel record){
		MoneyChannel mc = moneyChannelMapper.getCompanyMoneyChannelByChannelName(record.getChannelname(), record.getBlockbillprice(), record.getCompany());
		if(mc!=null){
			return -1;
		}
		return moneyChannelMapper.addMoneyChannel(record);
	}
	
	public int updateMoneyChannelByIDSelective(MoneyChannel record){
		return moneyChannelMapper.updateMoneyChannelByIDSelective(record);
	}
	
	public int addMoneyChannelRecord(GukePayChannelRecord record){
		return moneyChannelMapper.addMoneyChannelRecord(record);
	}
}
