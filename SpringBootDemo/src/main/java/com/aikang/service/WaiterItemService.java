package com.aikang.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.CfgDaySet;
import com.aikang.Bean.CronTask;
import com.aikang.Bean.GukeShopings;
import com.aikang.Bean.HuiYuan;
import com.aikang.Bean.HuiYuanTradeRecord;
import com.aikang.Bean.HuiYuanType;
import com.aikang.Bean.PlanWork;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.RoundsConfig;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.ServiceSalary;
import com.aikang.Bean.SpeTimesec;
import com.aikang.Bean.User;
import com.aikang.Bean.WBillItem;
import com.aikang.Bean.WaiterItem;
import com.aikang.Bean.WrokingItem;
import com.aikang.mapper.CfgDaySetMapper;
import com.aikang.mapper.CronTaskMapper;
import com.aikang.mapper.GukeBillsMapper;
import com.aikang.mapper.HuiYuanMapper;
import com.aikang.mapper.ItemSalaryMapper;
import com.aikang.mapper.PlanWorkMapper;
import com.aikang.mapper.RoundsConfigMapper;
import com.aikang.mapper.ServiceItemMapper;
import com.aikang.mapper.SpeTimesecMapper;
import com.aikang.mapper.WBillItemMapper;
import com.aikang.mapper.WaiterItemMapper;
import com.aikang.utils.DateUtil;
import com.aikang.utils.PlanworkUtil;
import com.aikang.utils.Util;
import com.aikang.utils.WaiterStateUtil;
import com.aikang.utils.WorkStateUtil;

@Service
@Transactional(rollbackFor=Exception.class)
public class WaiterItemService {

	@Autowired
	WaiterItemMapper waiterItemMapper;
	
	@Autowired
	WBillItemMapper  wbillItemMapper;
	
	
	@Autowired      //注入mapper
	CronTaskMapper cronTaskMapper;
	
	@Autowired  
	CfgDaySetMapper cfgDaySetMapper;
	
	@Autowired
	PlanWorkMapper planWorkMapper;
	
	@Autowired
	ServiceItemMapper serviceItemMapper;
	
	@Autowired
	RoundsConfigMapper roundsConfigMapper;
	
	@Autowired
	ItemSalaryMapper itemSalaryMapper;
	
	@Autowired
	GukeBillsMapper gukeBillsMapper;
	
	@Autowired
	SpeTimesecMapper speTimesecMapper;
	
	@Autowired
	HuiYuanMapper huiYuanMapper;
	
	@Autowired
	GukeBillsService gukeBillsService;
	
	
	public List<WaiterItem> getAllWaiterItem(){
		return waiterItemMapper.getAllWaiterItem(Util.getConpnany_Name());
	}
	
	public List<WaiterItem> getWaiterItemsByHid(Long hid){
		return waiterItemMapper.getWaiterItemsByHid(hid, Util.getConpnany_Name());
	}
	public WaiterItem getWaiterItemsById(Long id){
		return waiterItemMapper.getCompanyWaiterItemById(id, Util.getConpnany_Name());
	}
	int updateWaiterItemListWorkStateByIdSelective(List<WaiterItem> record){
		return waiterItemMapper.updateWaiterStateListByIdSelective(record, Util.getConpnany_Name());
	}
	public Integer insertWaiterItem(WaiterItem[] record) throws ParseException{
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	CfgDaySet cds = cfgDaySetMapper.getDaySetConfig(Util.getConpnany_Name());
    	
    	//判断是否是同一天
    	Date cdsdate = null;   	
    	if(cds!=null && cds.getDayidlasttime()!=null){
    		cdsdate =ft.parse(cds.getDayidlasttime());
    	}
    	Date ndsdate = null;
    	if(cds!=null && cds.getNewDayTime()!=null){		
			String td = dstr.substring(0, 10) ;
			String tt = cds.getNewDayTime().substring(10);
			ndsdate =ft.parse(td+tt);	
    	}
    	//
    	int dayid = 0;
    	int daynumlast = 0;
    	int nsdx = 0;
    	if(cds.getDayidlast()!=null)
    	{
    		dayid =  cds.getDayidlast();
    	}
    	if(cds.getDaynumlast() != null){
    		daynumlast = cds.getDaynumlast();
    	}
    	if(cds.getRoundsdx() != null){
    		nsdx = cds.getRoundsdx();
    	}
    	//判断是否新的营业的一天
    	if(ndsdate!=null){
    		if(cdsdate.getTime()<ndsdate.getTime() && ndsdate.getTime() < date.getTime()){
    			//新的一天了
    			dayid = 0;
    			String dstrnum = dstr.substring(0,4)+dstr.substring(5,7)+dstr.substring(8,10);
    			daynumlast = Integer.valueOf(dstrnum);
    		}
    	}
    	//设置时间单号状态等
    	//每天同一单只有一个单号
    	dayid++;
    	
    	//设置服务状态 分开技师处理
    	Map<Long, List<WaiterItem>> rmap = new HashMap<Long, List<WaiterItem>>();//
    	for(int i=0; i<record.length; i++){  		
    		if(!rmap.containsKey(record[i].getHid())){
    			List<WaiterItem> wl = new ArrayList<WaiterItem>();
    			if(record[i].getHid() == null)
    				rmap.put(-1L, wl);
    			else
    				rmap.put(record[i].getHid(), wl);
    		}
    	}
    	Iterator<Entry<Long, List<WaiterItem>>> iter = rmap.entrySet().iterator(); 
        while (iter.hasNext()) 
        { 
            Map.Entry<Long, List<WaiterItem>> entry = (Map.Entry<Long, List<WaiterItem>>) iter.next();
            
            for(int i=0; i<record.length; i++){
            	long hid = -1;
            	if(record[i].getHid()!=null)
            		hid = record[i].getHid();
	            if(hid == entry.getKey() )
	            {
	            	entry.getValue().add(record[i]);
	            }
            }
        }
        iter = rmap.entrySet().iterator(); 
        int gukeidx = 0;
        while (iter.hasNext()) 
        { 
            Map.Entry<Long, List<WaiterItem>> entry = (Map.Entry<Long, List<WaiterItem>>) iter.next();
            
            List<WaiterItem> lws = entry.getValue();
            lws.get(0).setMaketime(dstr);
    		lws.get(0).setDayid(daynumlast+""+dayid);
    		lws.get(0).setDaynum(daynumlast);
    		
    		
    		if(lws.get(0).getHid()==null || lws.get(0).getHid()<= 0){
    			lws.get(0).setWorkstate(WaiterStateUtil.SST_WF_MIN);
    		}else{
    			Date wdate = null;
    			if(lws.get(0).getWaittime() != null){
    				wdate =ft.parse(lws.get(0).getWaittime());
    			}
    			if(wdate != null && (wdate.getTime() - date.getTime()) > 10*60*1000)
    			{
    				lws.get(0).setWorkstate(WaiterStateUtil.SST_YY_WAIT);
    			}else{
    				lws.get(0).setWorkstate(WaiterStateUtil.SST_HJ_MIN);
    			}
    			
    		}
            for(int i=1; i<lws.size(); i++){
        		lws.get(i).setMaketime(dstr);
        		lws.get(i).setDayid(daynumlast+""+dayid);
        		lws.get(i).setDaynum(daynumlast);
        		lws.get(i).setGukeidx(gukeidx);
        		lws.get(i).setWorkstate(lws.get(0).getWorkstate());
        	}
            gukeidx++;
        }
    	
    	
    	//设置服务验证码 分开技师处理
    	//同一单同一个技师用一个服务验证码 首单需要开始验证，尾单需要结束验证
    	Map<Long, String> _map = new HashMap<Long, String>();//
    	Map<Long, Integer> _mapsdx = new HashMap<Long, Integer>();// 动牌顺序
    	for(int i=0; i<record.length; i++){  		
    		if(!_map.containsKey(record[i].getHid())){
    			String code = "";
        		for(int r=0; r<8; r++){
        			code = code + (int)(Math.random()*10);
        		}
        		if(record[i].getHid() == null)
        			_map.put(-1L, code);
        		else
        			_map.put(record[i].getHid(), code);
    		}
    		
    		if(!_mapsdx.containsKey(record[i].getHid())){
    			nsdx++;//同一技师本单预动牌索引也一样
    			_mapsdx.put(record[i].getHid(), nsdx);
    		}
    	}
    	
    	Iterator<Entry<Long, String>> _iter = _map.entrySet().iterator(); 
        while (_iter.hasNext()) 
        { 
            Map.Entry<Long, String> entry = (Map.Entry<Long, String>) _iter.next();
            
            for(int i=0; i<record.length; i++){
	            if(record[i].getHid() == entry.getKey() )
	            {
	            	record[i].setCheckcode(entry.getValue());
	            }
            }
        }
    	
        Iterator<Entry<Long, Integer>> _itersdx = _mapsdx.entrySet().iterator(); 
        while (_itersdx.hasNext()) 
        { 
            Map.Entry<Long, Integer> entry = (Map.Entry<Long, Integer>) _itersdx.next();
            
            for(int i=0; i<record.length; i++){
	            if(record[i].getHid() == entry.getKey() )
	            {
	            	record[i].setMovsdx(entry.getValue());
	            }
            }
        }
    	

    	cds.setDayidlast(dayid);
    	cds.setDayidlasttime(dstr);
    	cds.setDaynumlast(daynumlast);
    	cds.setRoundsdx(nsdx);
    	cfgDaySetMapper.updateDaySetByIdSelective(cds, Util.getConpnany_Name());
    	
    	////
    	String sbillnumber = "6868" +date.getTime() + "" + dayid;
    	List<ServiceItem> sItems = serviceItemMapper.getAllEnabledServiceItems(null, Util.getConpnany_Name());
    	if(sItems != null && sItems.size() > 0){
    		for(int i=0; i<record.length; i++){
    			WaiterItem wi = record[i];
    			wi.setBillnumber(sbillnumber);
    			String serinumber = date.getTime() +"000"+"i"+ Util.randomString(8);
    			wi.setSerinumber(serinumber);
    			//保存项目提成预估 还有单钟时长  用于以后排序使用
    			for(int m=0; m<sItems.size(); m++){
					if(sItems.get(m).getId() == wi.getSid()){
						//保存项目提成预估 用于以后排序使用
						wi.setSalarylz(sItems.get(m).getdSalaryLz());
						wi.setStimelong(sItems.get(m).getTimelong());
						wi.setStimelong(sItems.get(m).getTimelong());
						wi.setSetclocknumzs(sItems.get(m).getClocknum());
						wi.setSetisdiscount(sItems.get(m).getIsdiscount());
						wi.setSetneedpoint(sItems.get(m).getNeedpoint());
						wi.setSisspecialwork(sItems.get(m).getIsspecialwork());
						break;
					}
				}
            }
    	}
    	
    	//保存服务单
		int wnum =  waiterItemMapper.insertWaiterItem(record, Util.getConpnany_Name());
		
		//添加定时任务
//		CronTask[] cts = new CronTask[record.length];
//		for(int i=0; i<cts.length; i++){
//			cts[i] = new CronTask();
//			cts[i].setCompany(Util.getConpnany_Name());
//			cts[i].setCycle(10);
//			cts[i].setTabe("waiteritem");
//			cts[i].setLast(dstr);
//			cts[i].setTabeid(record[i].getId());
//		}
//		
//		int cnum = cronTaskMapper.addListCronTask(cts);
//		if(cnum != wnum ){
//			return -1;
//		}
		return wnum;
	}
	public int WorkerItemSetAction(WaiterItem witem) throws ParseException{
		
		int ret = 1;
		
		WaiterItem olditem = waiterItemMapper.getCompanyWaiterItemById(witem.getId(), Util.getConpnany_Name());
		
		if(olditem == null){
			return -1;
		}
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	
    	if(witem.getWorkstate() == WaiterStateUtil.SST_FW_FINISH)
		{
			//结束操作不在这里进行
			return -1;
		}
    	if(witem.getWorkstate() == WaiterStateUtil.SST_SZ_MIN)
		{
			//上钟操作 不在这里进行  暂停的除外
			if(!(olditem.getWorkstate() >= WaiterStateUtil.SST_ZT_MIN && olditem.getWorkstate() < WaiterStateUtil.SST_ZT_MAX) )
			{
				return  -1;
			}
		}
    	if(witem.getWorkstate() == WaiterStateUtil.SST_FW_MIN)
		{
			//上钟操作 不在这里进行  暂停的除外
			if(!(olditem.getWorkstate() >= WaiterStateUtil.SST_ZT_MIN && olditem.getWorkstate() < WaiterStateUtil.SST_ZT_MAX) )
			{
				return  -1;
			}
		}
		if(witem.getWorkstate() == WaiterStateUtil.SST_YY_RECV || witem.getWorkstate() == WaiterStateUtil.SST_SD_MIN)
		{
			//这两个操作对当前自己所有单有效
			List<WaiterItem> olditems = waiterItemMapper.getCompanyWaiterItemByDayidAndHid(olditem.getDayid(), olditem.getHid(), Util.getConpnany_Name());
			if(olditems == null ||olditems.size() == 0){
				return -1;
			}
			for(int i=0; i<olditems.size(); i++){
				//原来的状态为预约或者 呼叫状态才能一起改变 否则是上钟状态还是要单个改变
				if(olditems.get(i).getWorkstate() < WaiterStateUtil.SST_SD_MIN)
				{
					olditems.get(i).setWorkstate(witem.getWorkstate());
				}
				
				
			}
			int nnn = waiterItemMapper.updateWaiterStateListByIdSelective(olditems, Util.getConpnany_Name());
			if(nnn != olditems.size()){
				return -1;
			}
		}
		
		//如果之前正在暂停
		if(olditem.getWorkstate() >= WaiterStateUtil.SST_ZT_MIN && olditem.getWorkstate() < WaiterStateUtil.SST_ZT_MAX)
		{
			//现在要继续了 计算暂停的时长
			if(witem.getWorkstate() == WaiterStateUtil.SST_SZ_MIN || witem.getWorkstate() == WaiterStateUtil.SST_FW_MIN)
			{
				Date cdsdate = null;   	
		    	if(olditem.getBreakstart() != null){
		    		cdsdate =ft.parse(olditem.getBreakstart());					
		    	}
		    	if(cdsdate != null){
		    		if(olditem.getBreaklong() == null){
		    			olditem.setBreaklong(0);
		    		}
		    		Long tm = (date.getTime() - cdsdate.getTime()) / (1000) ;
		    		Integer bl = olditem.getBreaklong() +  tm.intValue();
		    		witem.setBreaklong(bl);
		    		if(olditem.getFinishtimeyj() != null)//预计结束时间也要延后
		    		{
			    		Date fdate = ft.parse(olditem.getFinishtimeyj());
			    		if(fdate != null){
			    			String fstr = ft.format(fdate.getTime() + tm*1000);
			    			witem.setFinishtimeyj(fstr);
			    		}
			    		
		    		}
		    	}
			}
		}
		//如果暂停就记录暂停时间
		if(witem.getWorkstate() >= WaiterStateUtil.SST_ZT_MIN && witem.getWorkstate() < WaiterStateUtil.SST_ZT_MAX){
			witem.setBreakstart(dstr);
		}
		int admnum = waiterItemMapper.updateByPrimaryKeySelective(witem, Util.getConpnany_Name());
		if(admnum != 1){
			ret = -2;
		}
		
		return 1;
	}
	//工作者动牌
	// synchronized 这里不要加线程锁吗？  同一家店 同时操作几率有多少
	// 加锁以后所有的店都参与互斥  效率会很低吧
	public int moveWorksSdx(){
		//synchronized (Util.getConpnany_Name()) 这里要互斥一个公司实例， 同一公司的操作要互斥 以后再说
		{
			CfgDaySet cds = cfgDaySetMapper.getDaySetConfig(Util.getConpnany_Name());
			if(cds == null){
				return -4;
			}
			int nsdx = cds.getRoundsdx() + 1;
			cds.setRoundsdx(nsdx);	
			int u = cfgDaySetMapper.updateDaySetByIdSelective(cds, Util.getConpnany_Name());
			if(u != 1){
				return -4;
			}
			
			return nsdx;
		}
	}
	public int WorkerStartItem(WaiterItem witem) throws ParseException{
		
		int ret = 1;
		
		List<WaiterItem> olditems = waiterItemMapper.getCompanyWaiterItemByDayidAndHid(witem.getDayid(), witem.getHid(), Util.getConpnany_Name());
		if(olditems == null ||olditems.size() == 0){
			return -3;
		}
		String oldcode = "";
		int find = 0;
		oldcode = olditems.get(0).getCheckcode();
		oldcode = oldcode.substring(0, 4);
		
		WaiterItem olditem = null;
		
		for(int i=0; i<olditems.size(); i++){
			if(olditems.get(i).getWorkstate() == null){
				olditems.get(i).setWorkstate(0);
			}
			
			if(olditems.get(i).getWorkstate() >= WaiterStateUtil.SST_SZ_MIN){
				find = 1;
			}
			long ido = olditems.get(i).getId();
			long idn = witem.getId();
			if(ido == idn){
				olditem = olditems.get(i);
				if(olditems.get(i).getWorkstate() >= WaiterStateUtil.SST_SZ_MIN){
					return -4;
				}
			}
		}
		
		if(find == 0)//没有开始过 需要验证
		{
			if(!oldcode.equals(witem.getCheckcode()))//验证未通过
			{
				return -1;
			}
			//同一单只需要验证一次 验证过了就加上标记
			
		}
		
		//是不是最后一单
		int finishnum = 0;
		for(int i = 0; i < olditems.size(); i++) {
        	if(olditems.get(i).getWorkstate() >= WaiterStateUtil.SST_FW_FINISH){
        		finishnum++;
			}
		
        }
		if(finishnum == olditems.size() - 1)//本项是这一单最后一项  设置标示
		{
			witem.setIslast(1);
		}
		//设置钟单状态
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	witem.setCheckcode(null);
		witem.setWorktime(dstr);
		witem.setWorkstate(WaiterStateUtil.SST_SZ_MIN);
		
		//设置预结束时间
		if(olditem != null){
			if(olditem.getPaystate()>0 && olditem.getClocknumyf()!=null){
				double ilong = olditem.getClocknumyf();
				ilong = ilong * olditem.getSettimelong()*60*1000;
				String fstr = ft.format(date.getTime() + ilong);
				witem.setFinishtimeyj(fstr);
			}else{
				double cnum = 0;
				if(olditem.getClocknumyf()!=null){
					cnum = olditem.getClocknumyf();
				}else{
					cnum =1;
				}
				int ilong = (int)(olditem.getSettimelong()*60*1000*cnum);
				String fstr = ft.format(date.getTime() + ilong);
				witem.setFinishtimeyj(fstr);
			}
		}
		
		int admnum = waiterItemMapper.updateByPrimaryKeySelective(witem, Util.getConpnany_Name());
		if(admnum != 1){
			ret =  -2;
		}
		
		//设置服务人员过牌等状态
		PlanWork pwk = planWorkMapper.getPlanWorkByHid(witem.getHid(), Util.getConpnany_Name());
		if(pwk == null){
			return -4;
		}
		if(find == 0 )//本单开始第一个
		{	
			RoundsConfig rcfig = roundsConfigMapper.getRoundsConfig(Util.getConpnany_Name());
			//是否上钟动牌
			if(rcfig.getDongpai_type()!=null && rcfig.getDongpai_type() == 0)//上钟动牌
			{
				int dp = 1;
				if(olditems.get(0).getWtype() == WorkStateUtil.WST_PLAN_SZ)//不排钟的方式不动牌
				{
					dp = 0;
				}
				//点钟是否动牌
				if(olditems.get(0).getWtype() == WorkStateUtil.WST_PLAN_DZ && rcfig.getDianzhong_budongpai() == 1)
				{
					dp = 0;
				}
				
				//累积提成少于某数量不动牌
				if(rcfig.getNoMoveSalarySum() > 0 ){
					double ysalary = PlanworkUtil.cacuMyAllThisSalaryX(olditems, pwk);
					ysalary += pwk.getNmsSum();
					if(ysalary <rcfig.getNoMoveSalarySum()){
						dp = 0;
						pwk.setNmsSum(ysalary);
					}
				}
				
				
				if(dp == 1)//动牌
				{
					//是否加班期间
			    	String td = dstr.substring(11, 16) ;
			    	String jstr1 = "2000-01-01 "+td+":00";
			    	String jstr2 = "2000-01-02 "+td+":00";
			    	//先获取所有本公司本加班时段表
			    	List<SpeTimesec> setms = speTimesecMapper.getAllTypeSpetimesecAtSometime(0, jstr1, jstr2, Util.getConpnany_Name());
					if(setms!=null && setms.size()>0)//加班时段 只是增加加班轮数
					{
						for(int s=0; s<pwk.getMywkexts().size(); s++){
							if(pwk.getMywkexts().get(s).getTmid() == setms.get(0).getId()){
								pwk.getMywkexts().get(s).setRounde(pwk.getMywkexts().get(s).getRounde()+1);
								pwk.getMywkexts().get(s).setRlastdate(dstr);
							
								planWorkMapper.updateAddWorkExtraIsworkRoundByhidAndTmid(pwk.getMywkexts().get(s), pwk.getCompany());
								break;
							}
						}
						
					}
					else{
			    	
				    	pwk.setSdxlast(pwk.getSdx());//记录上一次的牌序 万一取消项目 要回牌
						pwk.setNmsSumLast(pwk.getNmsSum());
						int nsdx = 0;
						Date mkdate = null;   	
				    	if(olditems.get(0).getMaketime() != null){
				    		mkdate =ft.parse(olditems.get(0).getMaketime());					
				    	}
				    	//是否在规定的时间内开始
				    	if(mkdate != null && (date.getTime() - mkdate.getTime()) < (rcfig.getJiaozhong_dengdai()*60*1000)){
				    		//在规定时间内 在牌序是开单时候的牌序
				    		nsdx = olditems.get(0).getMovsdx();
				    	}else{
				    		//未规定时间内 则重新动牌
				    		nsdx = moveWorksSdx();
				    		if(nsdx == -4){
								return -4;
							}
				    	}
	
						
						
						pwk.setSdx(nsdx);
						pwk.setDayidOfsdxMov(olditems.get(0).getDayid());
						pwk.setNmsSum(0.0);
					}
					
				}
				
			}
		}
		pwk.setState(WorkStateUtil.WST_FW_MIN);//设置为忙碌状态
		int u = planWorkMapper.updatePlanWorksByHidSelective(pwk, witem.getHid(), Util.getConpnany_Name());
		if(u != 1){
			ret =  -4;
		}
		return ret;
	}
	public int WorkGoNextTurn(PlanWork pwk){
		pwk.setSdxlast(pwk.getSdx());
		int nsdx = moveWorksSdx();
		if(nsdx == -4){
			return -4;
		}
		pwk.setSdx(nsdx);
		int u = planWorkMapper.updatePlanWorksByHidSelective(pwk, pwk.getHid(), Util.getConpnany_Name());
		return u;
	}
	public int WorkSetTpFp(PlanWork pwk){
		int u = planWorkMapper.updatePlanWorksByHidSelective(pwk, pwk.getHid(), Util.getConpnany_Name());
		return u;
	}
	
	public int WorkerFinishItem(WaiterItem witem) throws ParseException{
		
		int ret = 1;
		
		List<WaiterItem> olditems = waiterItemMapper.getCompanyWaiterItemByDayidAndHid(witem.getDayid(), witem.getHid(), Util.getConpnany_Name());
		
		if(olditems == null ||olditems.size() == 0){
			ret = -3;
		}
		WaiterItem thisold = null;
		for(int i = 0; i < olditems.size(); i++) {
			WaiterItem om = olditems.get(i);
			long oid = om.getId();
			long wid = witem.getId();
        	if(oid == wid){
        		thisold = om;
        		break;
			}
		
        }
		if(thisold == null){
			return -5;
		}
		if(thisold.getWorkstate() < WaiterStateUtil.SST_SZ_MIN || thisold.getWorktime() == null){
			//服务没有开始 不能结束
			return -6;
		}
		
		
		String oldcode = "";

		oldcode = olditems.get(0).getCheckcode();
		oldcode = oldcode.substring(4, 8);
		int finishnum = 0;
        for(int i = 0; i < olditems.size(); i++) {
        	if(olditems.get(i).getWorkstate() >= WaiterStateUtil.SST_FW_FINISH){
        		finishnum++;
			}
		
        }
        
        SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	
    	
		if(finishnum == olditems.size() - 1)//本单最后一项结束 需要验证
		{
			Date fdate = null;
			if(thisold.getFinishtimeyj() != null){
				fdate = ft.parse(thisold.getFinishtimeyj());
			}
			if(fdate != null){
				if(date.getTime() < fdate.getTime() - 5*60*1000 )//未到下钟时间 需要顾客同意 要验证码
				{
					if(!oldcode.equals(witem.getCheckcode()))//验证未通过
					{
						return  -1;
					}
				}
			}
			//同一单只需要验证一次 验证过了就加上标记
			
		}
		
    	
    	//如果之前正在暂停 计算暂停的时长
		if(thisold.getWorkstate() >= WaiterStateUtil.SST_ZT_MIN && thisold.getWorkstate() < WaiterStateUtil.SST_ZT_MAX)
		{
			Date cdsdate = null;   	
	    	if(thisold.getBreakstart() != null){
	    		cdsdate =ft.parse(thisold.getBreakstart());
				
	    	}
	    	if(cdsdate != null){
	    		if(thisold.getBreaklong() == null){
	    			thisold.setBreaklong(0);
	    		}
	    		Long tm = (date.getTime() - cdsdate.getTime()) / (1000) ;
	    		Integer bl = thisold.getBreaklong() +  tm.intValue();
	    		witem.setBreaklong(bl);
	    	}
			
		}
		
		
    	//计算计费时长  钟数 或者次数 
		Date starttime = ft.parse(thisold.getWorktime());
		if(starttime == null){
			return -7;
		}
		int bl = 0;
    	if(thisold.getBreaklong() != null){
			bl = thisold.getBreaklong();
		}
		long pu = (date.getTime() - starttime.getTime())/1000;
		int tml = (int)pu - bl;
		
		if(thisold.getPaystate() <= 0)//未付款的
		{
			ServiceItem sitem = serviceItemMapper.selectBy_id(thisold.getSid(), Util.getConpnany_Name());
			double clocknum = 0;
			double bill = 0;
			if(sitem == null){
				ret = -8;
			}else{
				int nmin = sitem.getTimelong();
				int omin = sitem.getOvertime();
				int halfmin = nmin/2;
				double allmin = (tml/60);
				int holenum = (int)(allmin / nmin);
				
				double leftmin = allmin - holenum*nmin;
				if(omin < halfmin){
					if(leftmin < omin){
						clocknum = holenum ;
					}else if(leftmin >= omin && leftmin < (halfmin+omin)){
						clocknum = holenum + 0.5;
					}else {
						clocknum = holenum + 1;
					}
				}else{
					if(leftmin > omin/2 && leftmin < omin){
						clocknum = holenum + 0.5;
					}else if(leftmin >= omin){
						clocknum = holenum + 1;
					}else{
						clocknum = holenum;
					}
				}
				if(clocknum <=0 )
				{
					//最少半个钟
					if(sitem.getPriveType() == 0)
						clocknum = 0.5;
					else
						clocknum = 1;
				}
				bill = clocknum * sitem.getPrice();
				
			}
			witem.setClocknum(clocknum);
			witem.setItembillo(bill);
			witem.setItembill(bill);
		}
		else //已经付款的
		{
			witem.setClocknum(thisold.getClocknumyf());
			witem.setItembillo(thisold.getItembillyf());
			witem.setItembill(thisold.getItembillyf());
		}
		
    	witem.setCheckcode(null);//不能将前台提交的验证码更新到数据库
    	witem.setFinishtime(dstr);
		witem.setWorkstate(WaiterStateUtil.SST_FW_FINISH);
		
		
		if(finishnum >= olditems.size() - 1)//本单所有项目已经完成
		{
			PlanWork pwk = planWorkMapper.getPlanWorkByHid(witem.getHid(), Util.getConpnany_Name());
			if(pwk == null){
				ret = -4;
			}
			int round = pwk.getRound();
			
			RoundsConfig rcfig = roundsConfigMapper.getRoundsConfig(Util.getConpnany_Name());
			if(rcfig.getDongpai_type()!=null && rcfig.getDongpai_type() == 1)//下钟动牌
			{	
				int dp = 1;
				if(olditems.get(0).getWtype() == WorkStateUtil.WST_PLAN_SZ)//不排钟的方式不动牌
				{
					dp = 0;
				}
				//点钟是否动牌
				if(olditems.get(0).getWtype() == WorkStateUtil.WST_PLAN_DZ && rcfig.getDianzhong_budongpai() == 1)
				{
					dp = 0;
				}
				//累积提成少于某数量不动牌
				if(rcfig.getNoMoveSalarySum() > 0 ){
					double ysalary = PlanworkUtil.cacuMyAllThisSalaryX(olditems, pwk);
					ysalary += pwk.getNmsSum();
					if(ysalary <rcfig.getNoMoveSalarySum()){
						dp = 0;
						pwk.setNmsSum(ysalary);
					}
				}
				
				if(dp == 1)//动牌
				{
					//上钟的时候 是否加班期间
			    	String td = olditems.get(0).getWorktime().substring(11, 16) ;
			    	String jstr1 = "2000-01-01 "+td+":00";
			    	String jstr2 = "2000-01-02 "+td+":00";
			    	//先获取所有本公司本加班时段表
			    	List<SpeTimesec> setms = speTimesecMapper.getAllTypeSpetimesecAtSometime(0, jstr1, jstr2, Util.getConpnany_Name());
					if(setms!=null && setms.size()>0)//加班时段 只是增加加班轮数
					{
						for(int s=0; s<pwk.getMywkexts().size(); s++){
							if(pwk.getMywkexts().get(s).getTmid() == setms.get(0).getId()){
								pwk.getMywkexts().get(s).setRounde(pwk.getMywkexts().get(s).getRounde()+1);
								pwk.getMywkexts().get(s).setRlastdate(dstr);
								planWorkMapper.updateAddWorkExtraIsworkRoundByhidAndTmid(pwk.getMywkexts().get(s), pwk.getCompany());
								break;
							}
						}
						
					}
					else
					{
						pwk.setSdxlast(pwk.getSdx());
						pwk.setNmsSumLast(pwk.getNmsSum());
						int nsdx = moveWorksSdx();
						if(nsdx == -4){
							ret =  -4;
						}
						pwk.setSdx(nsdx);
						pwk.setDayidOfsdxMov(thisold.getDayid());
						pwk.setNmsSum(0.0);
						round = round + 1;
						pwk.setRound(round);
					}
				}
			}
			
			
			
			
			
			/////////如果都已近付过款 就结账
			int find = 0;
			for(int i = 0; i < olditems.size(); i++) {
				WaiterItem om = olditems.get(i);
				if(om.getPaystate() <= 0){
					find = 1;
				}
			
	        }
			if(find == 0){
		    	CfgDaySet cds = cfgDaySetMapper.getDaySetConfig(Util.getConpnany_Name());
		    	Date ndsdate = null;
		    	if(cds!=null && cds.getNewDayTime()!=null){		
					String td = dstr.substring(0, 10) ;
					String tt = cds.getNewDayTime().substring(10);
					String tn = td + tt;
					ndsdate =ft.parse(tn);	
		    	}
		    	int daynumlast = 0;
		    	if(cds.getDaynumlast() != null){
		    		daynumlast = cds.getDaynumlast();
		    	}
		    	//判断是否新的营业的一天
		    	if(ndsdate!=null){
		    		if(ndsdate.getTime() < date.getTime()){
		    			//新的一天了
		    			String dstrnum = dstr.substring(0,4)+dstr.substring(5,7)+dstr.substring(8,10);
		    			daynumlast = Integer.valueOf(dstrnum);
		    		}else{
		    			Date date_p = new Date(date.getTime() - 24*60*60*1000);
		    			String dstr_p = ft.format(date_p.getTime());
		    			String dstrnum = dstr_p.substring(0,4)+dstr_p.substring(5,7)+dstr_p.substring(8,10);
		    			daynumlast = Integer.valueOf(dstrnum);
		    		}
		    	}
				//复制单据
		    	
		    	List<Long>ids = new ArrayList<Long>();
				WBillItem[] wbs = new WBillItem[olditems.size()];
				for(int i=0; i<olditems.size(); i++){
					 
					wbs[i] = new WBillItem();
					WaiterItem wm = olditems.get(i);
					ids.add(wm.getId());
					
					BeanUtils.copyProperties(wm, wbs[i]);
					wbs[i].setDaynum(daynumlast);
					if(wm.getPaystate() > 0){
						if(wm.getItembill() <= 0){
							wbs[i].setItembill(wm.getItembillyf());
						}
						if(wm.getClocknum() <= 0){
							wbs[i].setClocknum(wm.getClocknumyf());
						}
					}
					
					double salary = 0;
					//默认提成
					if(wm.getWtype() == WorkStateUtil.WST_PLAN_LZ){
						salary =  wm.getdSalaryLz() + wm.getDefsalarylz();
					}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_DZ){
						salary =  wm.getdSalaryDz() + wm.getDefsalarydz();;
					}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_DP){
						salary =  wm.getdSalaryDp() + wm.getDefsalarydp();;
					}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_SZ){
						salary =  wm.getdSalarySz() + wm.getDefsalarysz();;
					}
					
					double clocknumzs = wm.getClocknumyf() * wm.getSetclocknumzs();
					salary = salary * wm.getClocknumyf();
					
					
					wbs[i].setClocknum(wm.getClocknumyf());
					wbs[i].setWorksalary(salary);
					wbs[i].setClocknumzs(clocknumzs);
					User uc = Util.getCurrentUser();
					wbs[i].setCheckid(uc.getMemid());
					wbs[i].setCheckname(uc.getName());
					wbs[i].setChecktime(dstr);
					
				}
				
				
				int anum = wbillItemMapper.insertWBillItems(wbs);
				int dnum = waiterItemMapper.deleteWaiterItemByIds(ids);
				if(anum != dnum){
					ret = -8;
				}
				
				
			}//if(find == 0) 全部买单
			pwk.setState(WorkStateUtil.WST_KX_MIN);
			int u = planWorkMapper.updatePlanWorksByHidSelective(pwk, witem.getHid(), Util.getConpnany_Name());
			if(u != 1){
				ret =  -4;
			}
			
			List<WaiterItem> allbills = waiterItemMapper.getCompanyWaiterItemByBillnumber(thisold.getBillnumber(), thisold.getCompany());
			if(allbills==null || allbills.size() <=0){
				List<GukeShopings> lgs = gukeBillsMapper.getShopDataByBillNumber(thisold.getBillnumber());
				if(lgs != null && lgs.size() > 0){
					///更新预订单信息
					for(int i=0; i<lgs.size(); i++){
						GukeShopings gs = lgs.get(i);
						gs.setWorkstate(3);
					}
					int n2 = gukeBillsMapper.insertShopDataListToRecord(lgs);
					int n3 = gukeBillsMapper.deleteShopDataBybillnumber(thisold.getBillnumber(), thisold.getCompany());
					if(n2 != n3){
						return -5;
					}
				}
				
			}
		}//if(finishnum >= olditems.size() - 1)//本单所有项目已经完成
		
		int admnum = waiterItemMapper.updateByPrimaryKeySelective(witem, Util.getConpnany_Name());
		if(admnum != 1){
//			ret =  -2;
		}
		
		
		
		
		return ret;
	}
	public int masterJieSuanGukeBill(List<WaiterItem> olditems) throws ParseException{
		int rtn = 1;
		for(int i=0; i<olditems.size(); i++){
			WaiterItem wm = olditems.get(i);
			String oldcode = wm.getCheckcode();
			oldcode = oldcode.substring(4, 8);
			wm.setCheckcode(oldcode);
			int rt = WorkerFinishItem(wm);	
			if(rt != 1)
				rtn = rt;
		}
		return rtn;
	}
	public int masterFinisItem(List<WaiterItem> olditems) throws ParseException{
		int rtn = 1;
		for(int i=0; i<olditems.size(); i++){
			WaiterItem wm = olditems.get(i);
			if(wm.getWorkstate() >= WaiterStateUtil.SST_FW_FINISH){
				continue;
			}
			String oldcode = wm.getCheckcode();
			oldcode = oldcode.substring(4, 8);
			wm.setCheckcode(oldcode);
			int rt = WorkerFinishItem(wm);	
			if(rt != 1)
				rtn = rt;
		}
		return rtn;
	}

	public int CheckOutItemBill(WaiterItem[] records) throws ParseException{
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	CfgDaySet cds = cfgDaySetMapper.getDaySetConfig(Util.getConpnany_Name());
    	
    	//判断是否是同一天
    	Date cdsdate = null;   	
    	if(cds!=null && cds.getDayidlasttime()!=null){
    		cdsdate =ft.parse(cds.getDayidlasttime());
    	}
    	Date ndsdate = null;
    	if(cds!=null && cds.getNewDayTime()!=null){		
			String td = dstr.substring(0, 10) ;
			String tt = cds.getNewDayTime().substring(10);
			String tn = td + tt;
			ndsdate =ft.parse(tn);	
    	}
    	//
    	int dayid = 0;
    	int daynumlast = 0;
    	if(cds.getDayidlast()!=null)
    	{
    		dayid =  cds.getDayidlast();
    	}
    	if(cds.getDaynumlast() != null){
    		daynumlast = cds.getDaynumlast();
    	}
    	//判断是否新的营业的一天
    	if(ndsdate!=null){
    		if(ndsdate.getTime() < date.getTime()){
    			//新的一天了
    			String dstrnum = dstr.substring(0,4)+dstr.substring(5,7)+dstr.substring(8,10);
    			daynumlast = Integer.valueOf(dstrnum);
    			dayid = 0;
    		}else{
    			Date date_p = new Date(date.getTime() - 24*60*60*1000);
    			String dstr_p = ft.format(date_p.getTime());
    			String dstrnum = dstr_p.substring(0,4)+dstr_p.substring(5,7)+dstr_p.substring(8,10);
    			daynumlast = Integer.valueOf(dstrnum);
    		}
    	}
    	
    	
    	
		int ret = 1;
		List<Long> ids = new ArrayList<Long>(); 
		for(int i=0; i<records.length; i++){
			long wid = records[i].getId();
			ids.add(wid);
		}
		List<WaiterItem> olditems = waiterItemMapper.getCompanyWaiterItemByIds(ids, Util.getConpnany_Name());
		
		if(olditems == null ||olditems.size() == 0){
			return -1;
		}
		
		List<ServiceItem> sItems = serviceItemMapper.getAllEnabledServiceItems(null, Util.getConpnany_Name());
		if(sItems == null){
    		return -2;
    	}
		for(int i=0; i<olditems.size(); i++){
			WaiterItem wm = olditems.get(i);
			if(wm.getWorkstate() < WaiterStateUtil.SST_FW_FINISH){
				return -3;//有没有结束的项目
			}
		}
		
		//查询提成
		List<ServiceSalary> ssys = itemSalaryMapper.getItemSalarysByWaitItems(olditems, Util.getConpnany_Name());
		
		//复制单据
		WBillItem[] wbs = new WBillItem[olditems.size()];
		for(int i=0; i<olditems.size(); i++){
			wbs[i] = new WBillItem();
			WaiterItem wm = olditems.get(i);
			BeanUtils.copyProperties(wm, wbs[i]);
			wbs[i].setDaynum(daynumlast);
			if(wm.getPaystate() > 0){
				wbs[i].setItembill(wm.getItembillyf());
			}
			ServiceItem sm = null;
			for(int s=0; s<sItems.size(); s++){
				if(wm.getSid() == sItems.get(s).getId()){
					sm = sItems.get(s);
					break;
				}
			}
			
			//设置提成
			if(sm != null){
				double salary = 0;
				//默认提成
				if(wm.getWtype() == WorkStateUtil.WST_PLAN_LZ){
					salary =  sm.getdSalaryLz();
				}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_DZ){
					salary =  sm.getdSalaryDz();
				}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_DP){
					salary =  sm.getdSalaryDp();
				}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_SZ){
					salary =  sm.getdSalarySz();
				}
				
				//差异提成
				ServiceSalary sly = null;
				if(ssys!=null && ssys.size() > 0){
					for(int s=0; s<ssys.size(); s++){
						ServiceSalary sr = ssys.get(s);
						if(sr.getHid() == wm.getHid() && sr.getSid() == wm.getSid()){
							sly = sr;
							break;
						}
					}
				}
				if(sly != null){
					if(wm.getWtype() == WorkStateUtil.WST_PLAN_LZ){
						salary +=  sly.getDefsalarylz();
					}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_DZ){
						salary +=  sly.getDefsalarydz();
					}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_DP){
						salary +=  sly.getDefsalarydp();
					}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_SZ){
						salary +=  sly.getDefsalarysz();
					}
				}
				double clocknumzs = wm.getClocknum() * sm.getClocknum();
				salary = salary * wm.getClocknum();
				wbs[i].setWorksalary(salary);
				wbs[i].setClocknumzs(clocknumzs);
				User u = Util.getCurrentUser();
				wbs[i].setCheckid(u.getMemid());
				wbs[i].setCheckname(u.getName());
				wbs[i].setChecktime(dstr);
			}
		}
		
		int anum = wbillItemMapper.insertWBillItems(wbs);
		int dnum = waiterItemMapper.deleteWaiterItemByIds(ids);
		if(anum != dnum){
			ret = -4;
		}
		cds.setDayidlast(dayid);
    	cds.setDayidlasttime(dstr);
    	cds.setDaynumlast(daynumlast);
    	cfgDaySetMapper.updateDaySetByIdSelective(cds, Util.getConpnany_Name());
    	
		return anum;
	}
	
	public int CheckOutItemBillByHuiYuan(HuiYuan hy, HuiYuanType hyt, int checktype, List<WaiterItem> olditems, Map<String,Object> _map) throws ParseException{
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	CfgDaySet cds = cfgDaySetMapper.getDaySetConfig(Util.getConpnany_Name());
    	
    	//
    	int dayid = 0;
    	int daynumlast = DateUtil.getDaynumByCds(cds);
    	if(cds.getDayidlast()!=null)
    	{
    		dayid =  cds.getDayidlast();
    	}
    	
    	
		int ret = 1;

		if(olditems == null ||olditems.size() == 0){
			return -1;
		}
		
		for(int i=0; i<olditems.size(); i++){
			WaiterItem wm = olditems.get(i);
			if(wm.getWorkstate() < WaiterStateUtil.SST_FW_FINISH){
				return -3;//有没有结束的项目
			}
		}
		
		double bill = 0;
		for(int i=0; i<olditems.size(); i++){
			WaiterItem wm = olditems.get(i);
			bill += wm.getItembill();
			if(checktype == 1)//补差价模式下 做多减到0
			{
				if(hy.getRmoney() - bill >= 0){
					wm.setHyrmoney(hy.getRmoney() - bill);
				}else{
					wm.setHyrmoney(0.0);
				}
			}else{
				wm.setHyrmoney(hy.getRmoney() - bill);
			}
			
		}
		
		int ordertype = 60 + checktype;
		//会员扣费
		double kf = 0;
		if(checktype == 0)
		{
			kf = bill;
			double rm = hy.getRmoney() - bill;
			hy.setRmoney(rm);
			HuiYuan hyr = new HuiYuan();
			hyr.setId(hy.getId());
			hyr.setRmoney(rm);
			int h = huiYuanMapper.updateHuiYuanByPrimaryKeySelective(hyr);
			
			if(h!=1){
				ret = -10;
			}
		}
		//会员欠费
		double defrm = 0;
		if(checktype == 2)
		{
			if(hy.getRmoney()<0){
				kf = 0;
				defrm = bill;
			}else{
				kf = hy.getRmoney();
				defrm = bill - hy.getRmoney();
			}
			double nmoney = hy.getRmoney() - bill;
			hy.setRmoney(nmoney);
			
			HuiYuan hyr = new HuiYuan();
			hyr.setId(hy.getId());
			hyr.setRmoney(nmoney);
			int h = huiYuanMapper.updateHuiYuanByPrimaryKeySelective(hyr);
			if(h!=1){
				ret = -10;
			}
			
			HuiYuanTradeRecord hytr = new HuiYuanTradeRecord();
			String seriid = hy.getId()+""+date.getTime() +"000"+ Util.randomString(8);
			hytr.setCompany(hy.getCompany());
			hytr.setHyid(hy.getId());
			hytr.setHyname(hy.getHycname());
			hytr.setHyseriid(hy.getSeriid());
			hytr.setTrademoney(defrm);
			hytr.setTradetype(5);
			hytr.setTradename("透支");
			hytr.setSeriid(seriid);
			hytr.setWorkerid(Util.getCurrentUser().getId());
			hytr.setWorkername(Util.getCurrentUser().getName());
			hytr.setDaynum(daynumlast);
			hytr.setRecdate(dstr);
			
			int hr = huiYuanMapper.insertHuiYuanTradeRecord(hytr);
			if(hr!=1){
				ret = -11;
			}
		}
		//补差价
		double def = 0;
		if(checktype == 1)
		{
			double nmoney = 0;
			if(hy.getRmoney()<0){
				kf = 0;
				def = bill;
				nmoney = hy.getRmoney();
			}else{
				kf = hy.getRmoney();
				def = bill - hy.getRmoney();
				nmoney = 0;
			}

			hy.setRmoney(nmoney);
			
			HuiYuan hyr = new HuiYuan();
			hyr.setId(hy.getId());
			hyr.setRmoney(nmoney);
			int h = huiYuanMapper.updateHuiYuanByPrimaryKeySelective(hyr);
			if(h!=1){
				ret = -10;
			}
			
			HuiYuanTradeRecord hytr = new HuiYuanTradeRecord();
			String seriid = hy.getId()+""+date.getTime() +"000"+ Util.randomString(8);
			hytr.setCompany(hy.getCompany());
			hytr.setHyid(hy.getId());
			hytr.setHyname(hy.getHycname());
			hytr.setHyseriid(hy.getSeriid());
			hytr.setTrademoney(def);
			hytr.setTradetype(4);
			hytr.setTradename("补差价");
			hytr.setSeriid(seriid);
			hytr.setWorkerid(Util.getCurrentUser().getId());
			hytr.setWorkername(Util.getCurrentUser().getName());
			hytr.setDaynum(daynumlast);
			hytr.setRecdate(dstr);
			
			int hr = huiYuanMapper.insertHuiYuanTradeRecord(hytr);
			if(hr!=1){
				ret = -11;
			}
		}
		//复制单据
		WBillItem[] wbs = new WBillItem[olditems.size()];
		for(int i=0; i<olditems.size(); i++){
			wbs[i] = new WBillItem();
			WaiterItem wm = olditems.get(i);
			BeanUtils.copyProperties(wm, wbs[i]);
			wbs[i].setOrdertype(ordertype);
			wbs[i].setDaynum(daynumlast);
			if(wm.getPaystate() > 0)//已经付过款 这里不可能啊
			{
				wbs[i].setItembill(wm.getItembillyf());
			}

			
			//设置提成
			
				double salary = 0;
				//默认提成
				if(wm.getWtype() == WorkStateUtil.WST_PLAN_LZ){
					salary =  wm.getdSalaryLz() + wm.getDefsalarylz();
				}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_DZ){
					salary =  wm.getdSalaryDz() + wm.getDefsalarydz();
				}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_DP){
					salary =  wm.getdSalaryDp() + wm.getDefsalarydp();
				}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_SZ){
					salary =  wm.getdSalarySz() + wm.getDefsalarysz();
				}
				
			
				double clocknumzs = wm.getClocknum() * wm.getSetclocknumzs();
				salary = salary * wm.getClocknum();
				wbs[i].setWorksalary(salary);
				wbs[i].setClocknumzs(clocknumzs);
				User u = Util.getCurrentUser();
				wbs[i].setCheckid(u.getMemid());
				wbs[i].setCheckname(u.getName());
				wbs[i].setChecktime(dstr);
				wbs[i].setHyid(hy.getId());
				wbs[i].setHyname(hy.getHycname());
				wbs[i].setHyseriid(hy.getSeriid());
				wbs[i].setHyrmoney(wm.getHyrmoney());
		}
		
		int anum = wbillItemMapper.insertWBillItems(wbs);
		
		
		List<Long> ids = new ArrayList<Long>(); 
		for(int i=0; i<olditems.size(); i++){
			long wid = olditems.get(i).getId();
			ids.add(wid);
		}
		int dnum = waiterItemMapper.deleteWaiterItemByIds(ids);
		
		if(anum != dnum){
			ret = -4;
		}
		cds.setDayidlast(dayid);
    	cds.setDayidlasttime(dstr);
    	cds.setDaynumlast(daynumlast);
    	cfgDaySetMapper.updateDaySetByIdSelective(cds, Util.getConpnany_Name());
    	
    	_map.put("checktype", checktype);
    	_map.put("bill", bill);
		_map.put("rm", kf);
		_map.put("defrm", defrm);
		_map.put("def", def);
    	
		return anum;
	}
	
	public Integer changeServiceJiShi(double zsclocknum, int resdx, int wtype, PlanWork owork, PlanWork nwork, WaiterItem wmold) throws ParseException{
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
		
		int ret = 0;
		if(zsclocknum <=0 ){
			WaiterItem wm = new WaiterItem();
			wm.setId(wmold.getId());
			wm.setHid(nwork.getHid());
			wm.setHname(nwork.getName());
			wm.setHcode(nwork.getServicecode());
			int uwm = waiterItemMapper.updateByPrimaryKeySelective(wm, Util.getConpnany_Name());
			if(uwm != 1){
				ret = -1;
			}
			
		}else{
			WaiterItem wmnew = new WaiterItem();
			BeanUtils.copyProperties(wmold, wmnew);
			
			if(wmold.getOrdertype() >= 100 ){
				double oldclock = wmold.getClocknumyf();
				double oldibill = wmold.getItembillyf();
				if(oldclock == 0){
					oldclock = 1;
				}
				double oldhyrmoney = wmold.getHyrmoney();
				double billyf = wmold.getItembillyf() * zsclocknum/oldclock;
				
				wmold.setClocknumyf(zsclocknum);
				wmold.setItembillyf(billyf);
				
				wmold.setClocknum(wmold.getClocknumyf());
				wmold.setItembillo(wmold.getItembillyf());
				wmold.setItembill(wmold.getItembillyf());
				
				wmold.setFinishtime(dstr);
				wmold.setWorkstate(WaiterStateUtil.SST_FW_FINISH);
				
				String serinumber =  Util.randomStringOfNumber(4)+""+date.getTime() +"000"+ Util.randomString(8);
				wmnew.setSerinumber(serinumber);
				wmnew.setClocknumyf(oldclock - zsclocknum);
				wmnew.setItembillyf(oldibill - billyf);
				wmnew.setHyrmoney(oldhyrmoney);
				wmnew.setHid(nwork.getHid());
				wmnew.setHname(nwork.getName());
				wmnew.setHcode(nwork.getServicecode());
				wmnew.setWtype(wtype);
				wmnew.setWorkstate(WaiterStateUtil.SST_HJ_MIN);
				int nsdx = moveWorksSdx();
				wmnew.setMovsdx(nsdx);
				
				wmold.setHyrmoney(oldhyrmoney + wmnew.getItembillyf());
				
				int uwmo = waiterItemMapper.updateByPrimaryKeySelective(wmold, Util.getConpnany_Name());
				if(uwmo != 1){
					ret = -2;
				}
				WaiterItem[] rm = new WaiterItem[1];
				rm[0] = wmnew;
				int uwmn = waiterItemMapper.insertWaiterItem(rm, Util.getConpnany_Name());
				if(uwmn != 1){
					ret = -3;
				}
				
				
				GukeShopings gsold = gukeBillsService.getShopDataBySerinumberAndCompany(wmold.getSerinumber(), Util.getConpnany_Name());
				if(gsold!=null){
					GukeShopings gsnew = new GukeShopings();
					BeanUtils.copyProperties(gsold, gsnew);
					gsold.setClocknumyy(wmold.getClocknumyf());
					gsold.setItembillyf(wmold.getItembillyf());
					gsold.setHyrmoney(wmold.getHyrmoney());
					
					gsnew.setClocknumyy(wmnew.getClocknumyf());
					gsnew.setItembillyf(wmnew.getItembillyf());
					gsnew.setHyrmoney(wmnew.getHyrmoney());
					gsnew.setSerinumber(wmnew.getSerinumber());
					int gnum = gukeBillsService.updateShopByPrimaryKeySelective(gsold);
					if(gnum != 1){
						ret = -5;
					}
					gnum = gukeBillsService.makeShopByGuke(gsnew);
					if(gnum != 1){
						ret = -6;
					}
				}
				
			}else{
				double bill = zsclocknum * wmold.getSetprice();
				wmold.setClocknum(zsclocknum);
				wmold.setItembill(bill);
				wmold.setItembillo(bill);
				wmold.setFinishtime(dstr);
				wmold.setWorkstate(WaiterStateUtil.SST_FW_FINISH);
				
				String serinumber =  Util.randomStringOfNumber(4)+""+date.getTime() +"000"+ Util.randomString(8);
				wmnew.setSerinumber(serinumber);
				wmnew.setHid(nwork.getHid());
				wmnew.setHname(nwork.getName());
				wmnew.setHcode(nwork.getServicecode());
				wmnew.setWtype(wtype);
				wmnew.setWorkstate(WaiterStateUtil.SST_HJ_MIN);
				int nsdx = moveWorksSdx();
				wmnew.setMovsdx(nsdx);
				
				double oldclock = wmold.getClocknumyf();
				double oldibill = wmold.getItembillyf();
				if(oldclock >0 && oldibill>0){
					
					double oldhyrmoney = wmold.getHyrmoney();
					double billyf = wmold.getItembillyf() * zsclocknum/oldclock;
					wmold.setClocknumyf(zsclocknum);
					wmold.setItembillyf(billyf);
					
					wmnew.setClocknumyf(oldclock - zsclocknum);
					wmnew.setItembillyf(oldibill - billyf);
				}
				
				
				int uwmo = waiterItemMapper.updateByPrimaryKeySelective(wmold, Util.getConpnany_Name());
				if(uwmo != 1){
					ret = -2;
				}
				
				WaiterItem[] rm = new WaiterItem[1];
				rm[0] = wmnew;
				int uwmn = waiterItemMapper.insertWaiterItem(rm, Util.getConpnany_Name());
				if(uwmn != 1){
					ret = -3;
				}
			}
			
		}
		
		PlanWork oawork = planWorkMapper.getPlanWorkByHid(owork.getHid(), Util.getConpnany_Name());
		List<WrokingItem> pwkl = oawork.getMyitems();
		int findbusy = 0;
		if(pwkl != null && pwkl.size() > 0){	
			//保证是最早时间
			for(int w=0; w<pwkl.size(); w++){
				if(pwkl.get(w).getWorkstate() >=WaiterStateUtil.SST_SZ_MIN && pwkl.get(w).getWorkstate() < WaiterStateUtil.SST_FW_FINISH){
					findbusy = 1;
				}	
	    	}
		}
		PlanWork noawork = new PlanWork();
		noawork.setId(oawork.getId());
		noawork.setHid(oawork.getHid());
		if(findbusy == 0){
			noawork.setState(WorkStateUtil.WST_KX_MIN);
		}
		if(resdx ==1){
			noawork.setSdx(oawork.getSdxlast());
			noawork.setNmsSum(oawork.getNmsSumLast());
		}
		int p = planWorkMapper.updatePlanWorksByHidSelective(noawork, oawork.getHid(), Util.getConpnany_Name());
		if(p != 1){
			ret = -2;
		}
		return ret;
	}
	
	public Integer updateByPrimaryKeySelective(WaiterItem record){
		return waiterItemMapper.updateByPrimaryKeySelective(record, Util.getConpnany_Name());
	}
	
	public WaiterItem getCompanyWaiterItemById(long id){
		return waiterItemMapper.getCompanyWaiterItemById(id, Util.getConpnany_Name());
	}
	
	public List<WaiterItem> getCompanyWaiterItemByIds(List<Long> ids, String company){
		return waiterItemMapper.getCompanyWaiterItemByIds(ids, company);
	} 
	
	public Integer deleteWaiterItem(WaiterItem witem){
		if(witem.getHid() == null){
			//无服务人员的 直接删除
			return waiterItemMapper.deleteWaiterItemByID(witem.getId(), Util.getConpnany_Name());
		}
		List<WaiterItem> olditems = waiterItemMapper.getCompanyWaiterItemByDayidAndHid(witem.getDayid(), witem.getHid(), Util.getConpnany_Name());
		if(olditems.size() == 0){
			return -1;
		}
		if(olditems.size() == 1)//最后一项了 那么恢复之前的动牌顺序
		{
			PlanWork pwk = planWorkMapper.getPlanWorkByHid(olditems.get(0).getHid(), Util.getConpnany_Name());
			String dm = "";
			if(pwk.getDayidOfsdxMov()!=null)
			{
				dm = pwk.getDayidOfsdxMov();
			}
			if(dm.equals(olditems.get(0).getDayid()) )//是否在这一单动的牌 
			{
				pwk.setSdx(pwk.getSdxlast());
				pwk.setNmsSum(pwk.getNmsSumLast());
			}
			if(olditems.get(0).getWorkstate() != null){
				//如果最后一项都取消了 设置为空闲状态
				if(olditems.get(0).getWorkstate() >= WaiterStateUtil.SST_SZ_MIN && 
						olditems.get(0).getWorkstate() < WaiterStateUtil.SST_FW_FINISH)
				{
					if(pwk.getState() >= WorkStateUtil.WST_SZ_MIN && 
							pwk.getState() < WorkStateUtil.WST_FW_MAX){
						//服务中
						pwk.setState(WorkStateUtil.WST_KX_MIN);
					}
				}
				
				//如果最后一项都结束了 说明轮数也增加了
				if(olditems.get(0).getWorkstate() >= WaiterStateUtil.SST_FW_FINISH)
				{
					int r = pwk.getRound() - 1;
					if(r < 0)
						r = 0;
					pwk.setRound(r);
				}
				int u = planWorkMapper.updatePlanWorksByHidSelective(pwk, witem.getHid(), Util.getConpnany_Name());
				if(u != 1){
					return -2;
				}
			}
		}
		return waiterItemMapper.deleteWaiterItemByID(witem.getId(), Util.getConpnany_Name());
	}
	
	public Integer recWaiterItem(WaiterItem witem){

		
		List<WaiterItem> olditems = waiterItemMapper.getCompanyWaiterItemByDayidAndHid(witem.getDayid(), witem.getHid(), Util.getConpnany_Name());
		if(olditems.size() == 0){
			return -1;
		}
		if(olditems.size() == 1)//最后一项了 那么恢复之前的动牌顺序
		{
			PlanWork pwk = planWorkMapper.getPlanWorkByHid(olditems.get(0).getHid(), Util.getConpnany_Name());
			String dm = "";
			if(pwk.getDayidOfsdxMov()!=null)
			{
				dm = pwk.getDayidOfsdxMov();
			}
			if(dm.equals(olditems.get(0).getDayid()) )//是否在这一单动的牌 
			{
				pwk.setSdx(pwk.getSdxlast());
				pwk.setNmsSum(pwk.getNmsSumLast());
			}
			if(olditems.get(0).getWorkstate() != null){
				//如果最后一项都取消了 设置为空闲状态
				if(olditems.get(0).getWorkstate() >= WaiterStateUtil.SST_SZ_MIN && 
						olditems.get(0).getWorkstate() < WaiterStateUtil.SST_FW_FINISH)
				{
					if(pwk.getState() >= WorkStateUtil.WST_SZ_MIN && 
							pwk.getState() < WorkStateUtil.WST_FW_MAX){
						//服务中
						pwk.setState(WorkStateUtil.WST_KX_MIN);
					}
				}
				
				//如果最后一项都结束了 说明轮数也增加了
				if(olditems.get(0).getWorkstate() >= WaiterStateUtil.SST_FW_FINISH)
				{
					int r = pwk.getRound() - 1;
					if(r < 0)
						r = 0;
					pwk.setRound(r);
				}
				int unum = planWorkMapper.updatePlanWorksByHidSelective(pwk, witem.getHid(), Util.getConpnany_Name());
			}
		}
		int cnum = waiterItemMapper.copyItemToReceiveTableByID(witem.getId(), Util.getConpnany_Name());
		int dnum = waiterItemMapper.deleteWaiterItemByID(witem.getId(), Util.getConpnany_Name());
		if(cnum != 1)
		{
			return -2;
		}
		if(dnum != 1)
		{
			return -3;
		}
		return 1;
	}
	
	public void setWiterItemTimeLong(WaiterItem wm) throws ParseException{
		
		if(wm.getWorkstate() == null){
			return ;
		}
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	
    	int tml = 0;
    	
    	int bl = 0;
    	if(wm.getBreaklong() != null){
			bl = wm.getBreaklong();
		}
		if(wm.getWorkstate() < WaiterStateUtil.SST_SZ_MIN && wm.getWaittime()!=null){
			Date dwtime = ft.parse(wm.getWaittime());
			if(dwtime != null){
				if(dwtime.getTime() > date.getTime()){
					tml = (int)((dwtime.getTime() - date.getTime())/1000);
				}else{
					tml = (int)((date.getTime() - dwtime.getTime())/1000);
				}
			}
		}
		if(wm.getWorkstate() >= WaiterStateUtil.SST_SZ_MIN && wm.getWorkstate() < WaiterStateUtil.SST_FW_FINISH
				&& wm.getWorktime()!=null){
			Date dwtime = ft.parse(wm.getWorktime());
			if(dwtime != null){
				if(wm.getWorkstate() >= WaiterStateUtil.SST_ZT_MIN && wm.getWorkstate() < WaiterStateUtil.SST_ZT_MAX)
				{
					//服务暂停计算时间
					if(wm.getBreakstart()!=null)
					{
						Date bktime = ft.parse(wm.getBreakstart());
						if(bktime!=null){
							long pu = (bktime.getTime() - dwtime.getTime())/1000;
							tml =  (int)pu  - bl;
						}
					}
					
				}
				else
				{
					long pu = (date.getTime() - dwtime.getTime())/1000;
					tml =  (int)pu  - bl;
				}
			}
		}
		if(wm.getWorkstate() >= WaiterStateUtil.SST_FW_FINISH
				&& wm.getWorktime()!=null && wm.getFinishtime()!=null){
			Date dwtime = ft.parse(wm.getWorktime());
			Date fitime = ft.parse(wm.getFinishtime());
			if(dwtime != null && fitime!=null){
				long pu = (fitime.getTime() - dwtime.getTime())/1000;
				tml =  (int)pu  - bl;
			}
			
		}
		wm.setTimeOflong(tml);
	}
	
	public void setWaiterItemYYAndHJState(List<WaiterItem> lws) throws ParseException{
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	
		List<WaiterItem> nws = new ArrayList<WaiterItem>();
		if(lws.size() <= 0){
			return;
		}
		for(int i=0; i<lws.size(); i++){
			WaiterItem wm = lws.get(i);
			if(wm.getWorkstate()!=null){
				//看看预约情况
				if(wm.getWaittime()!=null && 
						(wm.getWorkstate() == WaiterStateUtil.SST_YY_WAIT || wm.getWorkstate() == WaiterStateUtil.SST_YY_RECV))
				{
			    	Date dwtime = ft.parse(wm.getWaittime());
			    	if(dwtime != null && (dwtime.getTime() - date.getTime())/(60*1000) < 10)
			    	{
			    		//10分钟之内 预约转呼叫
			    		wm.setWorkstate(WaiterStateUtil.SST_HJ_MIN);
			    		nws.add(wm);
			    	}
				}
				
				//看看试钟情况
				if(wm.getWorktime()!=null && 
						(wm.getWorkstate() >= WaiterStateUtil.SST_SZ_MIN && wm.getWorkstate() < WaiterStateUtil.SST_SZ_MAX))
				{
			    	Date wktime = ft.parse(wm.getWorktime());
			    	if(wktime != null && (date.getTime() -wktime.getTime())/(60*1000) > 10)
			    	{
			    		//10分钟以后试钟转服务
			    		wm.setWorkstate(WaiterStateUtil.SST_FW_MIN);
			    		nws.add(wm);
			    	}
				}
			}
		}
		
		if(nws.size() > 0){
			int nnn = waiterItemMapper.updateWaiterStateListByIdSelective(nws, Util.getConpnany_Name());
			if(nnn != nws.size()){
				
			}
		}
	}
	
	public List<Map<String, Object>>  getCompanyHuiYuanSpandWBillItemByseriid(long id, String company){
		return wbillItemMapper.getCompanyHuiYuanSpandWBillItemByseriid(id, company);
	}
	public Map<String, Object> queryBillSummarySpanDay(Map<String, Integer> query)
	{
		return wbillItemMapper.queryBillSummarySpanDay(query, Util.getConpnany_Name());
	}
	
	public List<Map<String, Object>> queryAllWorksServiceSpanDay(Map<String, Integer> query)
	{
		return wbillItemMapper.queryAllWorksServiceSpanDay(query, Util.getConpnany_Name());
	}
	public List<Map<String, Object>> queryAllWorksDetailsSpanDay(Map<String, Integer> query)
	{
		return wbillItemMapper.queryAllWorksDetailsSpanDay(query, Util.getConpnany_Name());
	}
	
	public List<Map<String, Object>> queryXiaoFeiJiLuSpanDay(Map<String, Integer> query)
	{
		return wbillItemMapper.queryXiaoFeiJiLuSpanDay(query, Util.getConpnany_Name());
	}
	public int updateByPrimaryKeySelective(WBillItem record){
		return wbillItemMapper.updateByPrimaryKeySelective(record);
	}
	
	public WBillItem getCompanyBillItemById(Long id, String company){
		return wbillItemMapper.getCompanyBillItemById(id, company);
	}
	
	public int ModifyWbillItemInfoByMaster(WBillItem wbo, WBillItem wbu){
		int ret =0;
		
		if(wbo.getHyid() > 0){
			Double defbill = wbu.getItembill() - wbo.getItembill();
			wbu.setHyrmoney(wbo.getHyrmoney() - defbill);
			
			HuiYuan hy = huiYuanMapper.getHuiYuanByID(wbo.getHyid());
			if(hy == null){
				return -1;
			}
			hy.setRmoney(hy.getRmoney() - defbill);
			HuiYuan hyu = new HuiYuan();
			hyu.setId(hy.getId());
			hyu.setRmoney(hy.getRmoney());
			int uphy = huiYuanMapper.updateHuiYuanByPrimaryKeySelective(hyu);
			if(uphy != 1){
				ret =  -2;
			}
		}
		int ubu = wbillItemMapper.updateByPrimaryKeySelective(wbu);
		if(ubu !=1){
			return -3;
		}
		return ret;
	}
	
	public int DeleteWbillItemInfoByMaster(WBillItem wbo){
		int ret =0;
		
		if(wbo.getHyid() > 0){
			Double defbill = wbo.getItembill();
			HuiYuan hy = huiYuanMapper.getHuiYuanByID(wbo.getHyid());
			if(hy == null){
				return -1;
			}
			hy.setRmoney(hy.getRmoney() + defbill);
			HuiYuan hyu = new HuiYuan();
			hyu.setId(hy.getId());
			hyu.setRmoney(hy.getRmoney());
			int uphy = huiYuanMapper.updateHuiYuanByPrimaryKeySelective(hyu);
			if(uphy != 1){
				ret =  -2;
			}
		}
		int ubu = wbillItemMapper.deleteWBillItemByID(wbo.getId());
		if(ubu !=1){
			return -3;
		}
		return ret;
	}
	
	public int insertWaiterItemListByOrder(List<GukeShopings> lgs, String  task_id_str, CfgDaySet cds, WaiterItem[] record, String companyname){
		int ret  = 0;
		
		int um = gukeBillsMapper.updateShopListBillNumberByIdSelective(lgs);
		if(um != lgs.size()){
			ret = -1;
		}
		
		int wnum =  waiterItemMapper.insertWaiterItem(record, companyname);
		if(wnum != record.length){
			ret = -2;
		}
		//添加定时任务
		if(task_id_str.length() > 0){
			SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	    	Date date = new Date();
	    	String dstr = ft.format(date.getTime());
			CronTask cts = new CronTask();
			
			cts.setCompany(companyname);
			cts.setCycle(10);
			cts.setTabe("waiteritem");
			cts.setLast(dstr);
			
			
			int cnum = cronTaskMapper.addCronTask(cts);
			if(cnum != 1){
				ret = -3;
			}
		}
		
		int cdsu = cfgDaySetMapper.updateDaySetByIdSelective(cds, companyname);
		if(cdsu != 1){
			ret = -4;
		}
		return ret;
	}
	public int updateListHidByIdsAtSomeCompany(List<WaiterItem> lws){
		return waiterItemMapper.updateListHidByIdsAtSomeCompany(lws);
	}
	public int update_Waiter_cfg_list(List<WaiterItem> lws, List<CfgDaySet>cfgs){
		int ret  = 0;
		
		if(lws!=null && lws.size() > 0){
			int wnum =  waiterItemMapper.updateListHidByIdsAtSomeCompany(lws);
			if(wnum != lws.size()){
				ret = -1;
			}
		}
		if(cfgs!=null && cfgs.size() >  0){
			int cdsu = cfgDaySetMapper.updateListSdxByIdsAtSomeCompany(cfgs);
			if(cdsu != cfgs.size()){
				ret = -2;
			}
		}
		return ret;
	}
	
	public int update_Waiter_finishandcheck_list(List<WaiterItem> lws, WBillItem[] lwb, List<CfgDaySet>cfgs , List<PlanWork>lpw){
		int ret  = 0;
		
		if(lwb != null && lwb.length > 0){
			int anum = wbillItemMapper.insertWBillItems(lwb);
			if(anum != lwb.length){
				ret  = -1;
			}
		}
		
		if(lws != null && lws.size() > 0){
			List<Long> ids = new ArrayList<Long>();
			for(int i=0; i<lws.size(); i++){
				ids.add(lws.get(i).getId());
			}
			int dnum = waiterItemMapper.deleteWaiterItemByIds(ids);
			if(dnum != lws.size()){
				ret = -2;
			}
		}
		if(cfgs != null && cfgs.size() > 0){
			int cdsu = cfgDaySetMapper.updateListSdxByIdsAtSomeCompany(cfgs);
			if(cdsu != cfgs.size()){
				ret = -2;
			}
		}
		if(lpw != null && lpw.size() > 0){
			int pnum = planWorkMapper.updateNoCompanyAllListPlanWorksByHidSelective(lpw);
			if(pnum != lpw.size()){
				ret = -3;
			}
		}
		return ret;
	}
	public List<WaiterItem> getCompanyWaiterItemByBillnumber(String billnumber, String company){
		return waiterItemMapper.getCompanyWaiterItemByBillnumber(billnumber, company);
	}
	
	public int updatePayStateListByIdSelective(List<WaiterItem> lws, String company){
		return waiterItemMapper.updatePayStateListByIdSelective(lws, company);
	}
	public List<WaiterItem> getAllNoHidWaiterItemByDateStr(String startdate, String enddate){
		return waiterItemMapper.getAllNoHidWaiterItemByDateStr(startdate, enddate);
	}
	
	public List<WaiterItem> getAllHasPayAndPassFinishYjTime(int paystate, String nowdate, int state1, int state2){
		return waiterItemMapper.getAllHasPayAndPassFinishYjTime(paystate, nowdate, state1, state2);
	}
	public int updateAllHasPayAndPassTimeItem(int ordertype1, int ordertype2, int paystate, String nowdate, int state1, int state2, int state3){
		return waiterItemMapper.updateAllHasPayAndPassTimeItem(ordertype1, ordertype2, paystate, nowdate, state1, state2, state3);
	}
}
