package com.aikang.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.CfgDaySet;
import com.aikang.Bean.HuiYuan;
import com.aikang.Bean.HuiYuanTradeRecord;
import com.aikang.Bean.HuiYuanType;
import com.aikang.Bean.User;
import com.aikang.Bean.WorkExtraSalaryRecord;
import com.aikang.mapper.CfgDaySetMapper;
import com.aikang.mapper.HuiYuanMapper;
import com.aikang.utils.DateUtil;
import com.aikang.utils.Util;

@Service
@Transactional(rollbackFor=Exception.class)
public class HuiYuanService {

	@Autowired
	HuiYuanMapper huiYuanMapper;
	
	@Autowired  
	CfgDaySetMapper cfgDaySetMapper;
	
	public HuiYuanType getHuiYuanTypeByID(long id){
		return huiYuanMapper.getHuiYuanTypeByID(id);
	}
	public HuiYuanType getHuiYuanTypeByTypename(String company, String typename){
		return huiYuanMapper.getHuiYuanTypeByTypename(company, typename);
	}
	public HuiYuanType getHuiYuanTypeByTypenameEx(String company, String typename, long id){
		return huiYuanMapper.getHuiYuanTypeByTypenameEx(company, typename, id);
	}
	public HuiYuanType getHuiYuanTypeByRechargeam(String company, double rechargeam){
		return huiYuanMapper.getHuiYuanTypeByRechargeam(company, rechargeam);
	}
	public HuiYuanType getHuiYuanTypeByRechargeamEx(String company, double rechargeam, long id){
		return huiYuanMapper.getHuiYuanTypeByRechargeamEx(company, rechargeam, id);
	}
	public List<HuiYuanType> getAllCompanyHuiYuanTypes(String company){
		return huiYuanMapper.getAllCompanyHuiYuanTypes(company);
	}
	public List<HuiYuanType> getAllEnableCompanyHuiYuanTypes(String company, int enable){
		return huiYuanMapper.getAllEnableCompanyHuiYuanTypes(company, enable);
	}
	public Map<String, Object> getAllCompanyHuiYuanTypeNum(String company){
		return huiYuanMapper.getAllCompanyHuiYuanTypeNum(company);
	}
	public Map<String, Object> getAllCompanyHuiYuanNum(String company){
		return huiYuanMapper.getAllCompanyHuiYuanNum(company);
	}
	public Integer insertHuiYuanType(HuiYuanType record){
		return huiYuanMapper.insertHuiYuanType(record);
	}
	
	public Integer updateHuiYuanTypeByPrimaryKeySelective(HuiYuanType record){
		return huiYuanMapper.updateHuiYuanTypeByPrimaryKeySelective(record);
	}
	
	public Integer updateHuiYuanTypeEnableByID(HuiYuanType record){
		return huiYuanMapper.updateHuiYuanTypeEnableByID(record);
	}
	
	public Integer deleteHuiYuanTypeByID(long id){
		return huiYuanMapper.deleteHuiYuanTypeByID(id);
	}
	
	
	///////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////
	////////////////////////////下面是会员////////////////////////////
	
	
	public HuiYuan getHuiYuanByID(long id){
		return huiYuanMapper.getHuiYuanByID(id);
	}
	
	public HuiYuan getHuiYuanByCardid(String cardid, String company){
		return huiYuanMapper.getHuiYuanByCardid(cardid, company);
	}
	
	public HuiYuan getHuiYuanByPhonecodeAndType(String phonecode, String typeseriid, String company){
		return huiYuanMapper.getHuiYuanByPhonecodeAndType(phonecode, typeseriid, company);
	}
	
	public List<HuiYuan> getHuiYuanByPhonecode(String phonecode, String company){
		return huiYuanMapper.getHuiYuanByPhonecode(phonecode, company);
	}
	
	public List<HuiYuan> getAllCompanyHuiYuans(String company, int start, int pagesize){
		return huiYuanMapper.getAllCompanyHuiYuans(company, start, pagesize);
	}
	
	public Integer insertHuiYuan(HuiYuan record, List<User> users, HuiYuanType hyt) throws ParseException{
		Date date = new Date();
		CfgDaySet cds = cfgDaySetMapper.getDaySetConfig(Util.getConpnany_Name());
		int daynum = DateUtil.getDaynumByCds(cds);
		String seriid = hyt.getSdx()+""+date.getTime() +"000"+ Util.randomString(8);
		
		int h = huiYuanMapper.insertHuiYuan(record);
		
		HuiYuanTradeRecord hytr = new HuiYuanTradeRecord();
		hytr.setCompany(record.getCompany());
		hytr.setHyid(record.getId());
		hytr.setHyname(record.getHycname());
		hytr.setHyseriid(record.getSeriid());
		hytr.setTrademoney(hyt.getRechargeam());
		hytr.setTradetype(0);
		hytr.setTradename("办卡");
		hytr.setSeriid(seriid);
		hytr.setWorkerid(Util.getCurrentUser().getId());
		hytr.setWorkername(Util.getCurrentUser().getName());
		hytr.setDaynum(daynum);
		hytr.setRecdate(record.getCreatedate());
		
		int hr = huiYuanMapper.insertHuiYuanTradeRecord(hytr);
		
		if(hyt.getGiftam() > 0){
			seriid = hyt.getSdx()+""+date.getTime() +"000"+ Util.randomString(8);
			HuiYuanTradeRecord hytrz = new HuiYuanTradeRecord();
			hytrz.setCompany(record.getCompany());
			hytrz.setHyid(record.getId());
			hytrz.setHyname(record.getHycname());
			hytrz.setHyseriid(record.getSeriid());
			hytrz.setTrademoney(hyt.getGiftam());
			hytrz.setTradetype(6);
			hytrz.setTradename("办卡赠送");
			hytrz.setSeriid(seriid);
			hytrz.setWorkerid(Util.getCurrentUser().getId());
			hytrz.setWorkername(Util.getCurrentUser().getName());
			hytrz.setDaynum(daynum);
			hytrz.setRecdate(record.getCreatedate());
			
			int hrz = huiYuanMapper.insertHuiYuanTradeRecord(hytrz);
		}
		
		int w = 0;
    	if(hyt.getCsalary() > 0 && users.size() > 0)
    	{
        	
			
			
			
			WorkExtraSalaryRecord[] wes = new WorkExtraSalaryRecord[users.size()];
			double salary = hyt.getCsalary() / wes.length;
			for(int i=0; i<users.size(); i++){
				seriid = hyt.getSdx()+""+date.getTime() +"000"+ Util.randomString(8);
				wes[i] = new WorkExtraSalaryRecord();
				wes[i].setCompany(record.getCompany());
				wes[i].setRecdate(record.getCreatedate());
				wes[i].setSeriid(seriid);
				wes[i].setSalarymoney(salary);
				wes[i].setWorkid(users.get(i).getId());
				wes[i].setWorkname(users.get(i).getName());
				wes[i].setSalaryname("办卡提成");
				wes[i].setSalarytype(0);
				wes[i].setTypeid(record.getId());
				wes[i].setTypeseriid(record.getSeriid());
				wes[i].setDaynum(daynum);
			}
			w = huiYuanMapper.insertWorkExtraSalaryRecordArray(wes);
	    	
    	}
    	
    	if(h != 1){
			return -1;
		}
    	if(hr != 1){
    		return -2;
    	}
    	if(w != users.size()){
    		return -3;
    	}
		return 1;
	}
	
	public Integer huiyuanCardRechage(double money, double zsmoney, HuiYuan record, List<User> users, HuiYuanType hyt) throws ParseException{
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = new Date();
		String dstr = ft.format(date.getTime());
		CfgDaySet cds = cfgDaySetMapper.getDaySetConfig(Util.getConpnany_Name());
		int daynum = DateUtil.getDaynumByCds(cds);
		String seriid = hyt.getSdx()+""+date.getTime() +"000"+ Util.randomString(8);
		
		int h = huiYuanMapper.updateHuiYuanByPrimaryKeySelective(record);
		
		HuiYuanTradeRecord hytr = new HuiYuanTradeRecord();
		hytr.setCompany(record.getCompany());
		hytr.setHyid(record.getId());
		hytr.setHyname(record.getHycname());
		hytr.setHyseriid(record.getSeriid());
		hytr.setTrademoney(money);
		hytr.setTradetype(1);
		hytr.setTradename("充值");
		hytr.setSeriid(seriid);
		hytr.setWorkerid(Util.getCurrentUser().getId());
		hytr.setWorkername(Util.getCurrentUser().getName());
		hytr.setDaynum(daynum);
		hytr.setRecdate(dstr);
		
		int hr = huiYuanMapper.insertHuiYuanTradeRecord(hytr);
		
		if(zsmoney >= 0){
			HuiYuanTradeRecord hytrz = new HuiYuanTradeRecord();
			hytrz.setCompany(record.getCompany());
			hytrz.setHyid(record.getId());
			hytrz.setHyname(record.getHycname());
			hytrz.setHyseriid(record.getSeriid());
			hytrz.setTrademoney(zsmoney);
			hytrz.setTradetype(6);
			hytrz.setTradename("充值赠送");
			hytrz.setSeriid(seriid);
			hytrz.setWorkerid(Util.getCurrentUser().getId());
			hytrz.setWorkername(Util.getCurrentUser().getName());
			hytrz.setDaynum(daynum);
			hytrz.setRecdate(dstr);
			
			int hrz = huiYuanMapper.insertHuiYuanTradeRecord(hytrz);
		}
		
		
		int w = 0;
    	if(hyt.getRsalary() > 0 && users.size() > 0)
    	{
        	
			WorkExtraSalaryRecord[] wes = new WorkExtraSalaryRecord[users.size()];
			double salary = hyt.getCsalary() / wes.length;
			for(int i=0; i<users.size(); i++){
				seriid = hyt.getSdx()+""+date.getTime() +"000"+ Util.randomString(8);
				wes[i] = new WorkExtraSalaryRecord();
				wes[i].setCompany(record.getCompany());
				wes[i].setRecdate(dstr);
				wes[i].setSeriid(seriid);
				wes[i].setSalarymoney(salary);
				wes[i].setWorkid(users.get(i).getId());
				wes[i].setWorkname(users.get(i).getName());
				wes[i].setSalaryname("充值提成");
				wes[i].setSalarytype(1);
				wes[i].setTypeid(record.getId());
				wes[i].setTypeseriid(record.getSeriid());
				wes[i].setDaynum(daynum);
			}
			w = huiYuanMapper.insertWorkExtraSalaryRecordArray(wes);
	    	
    	}
    	
    	if(h != 1){
			return -1;
		}
    	if(hr != 1){
    		return -2;
    	}
    	if(w != users.size()){
    		return -3;
    	}
    	
		return 1;
	}
	public Integer updateHuiYuanByPrimaryKeySelective(HuiYuan record){
		return huiYuanMapper.updateHuiYuanByPrimaryKeySelective(record);
	}
	
	public List<HuiYuan> QueryHuiYuanByInfokey(String company, String key){
		return huiYuanMapper.QueryHuiYuanByInfokey(company, key);
	}
	
	public Map<String, Object> queryHuiYuanTradeSummarySpanDay(Map<String, Integer> query, String company){
		return huiYuanMapper.queryHuiYuanTradeSummarySpanDay(query, company);
	}
	public HuiYuanTradeRecord getHuiYuanTradeRecordByID(long id){
		return huiYuanMapper.getHuiYuanTradeRecordByID(id);
	}
	
	public Integer insertHuiYuanTradeRecord(HuiYuanTradeRecord record){
		return huiYuanMapper.insertHuiYuanTradeRecord(record);
	}
	
	public Integer updateHuiYuanTradeRecordByPrimaryKeySelective(HuiYuanTradeRecord record){
		return huiYuanMapper.updateHuiYuanTradeRecordByPrimaryKeySelective(record);
	}
	
	
	public WorkExtraSalaryRecord getWorkExtraSalaryRecordByID(long id)
	{
		return huiYuanMapper.getWorkExtraSalaryRecordByID(id);
	}
	
	public Integer insertWorkExtraSalaryRecordArray(WorkExtraSalaryRecord[] record){
		return huiYuanMapper.insertWorkExtraSalaryRecordArray(record);
	}
	
	public Integer updateWorkExtraSalaryRecordByPrimaryKeySelective(WorkExtraSalaryRecord record){
		return huiYuanMapper.updateWorkExtraSalaryRecordByPrimaryKeySelective(record);
	}
	
}
