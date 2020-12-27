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
import com.aikang.Bean.PlanWork;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.RoundsConfig;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.ServiceSalary;
import com.aikang.Bean.User;
import com.aikang.Bean.WBillItem;
import com.aikang.Bean.WaiterItem;
import com.aikang.mapper.CfgDaySetMapper;
import com.aikang.mapper.CronTaskMapper;
import com.aikang.mapper.ItemSalaryMapper;
import com.aikang.mapper.PlanWorkMapper;
import com.aikang.mapper.RoundsConfigMapper;
import com.aikang.mapper.ServiceItemMapper;
import com.aikang.mapper.WBillItemMapper;
import com.aikang.mapper.WaiterItemMapper;
import com.aikang.utils.DateUtil;
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
	
	public List<WaiterItem> getAllWaiterItem(){
		return waiterItemMapper.getAllWaiterItem(Util.getConpnany_Name());
	}
	
	public List<WaiterItem> getWaiterItemsByHid(Integer hid){
		return waiterItemMapper.getWaiterItemsByHid(hid, Util.getConpnany_Name());
	}
	public WaiterItem getWaiterItemsById(Integer id){
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
    	if(ndsdate!=null && cdsdate!=null){
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
    	Map<Integer, List<WaiterItem>> rmap = new HashMap<Integer, List<WaiterItem>>();//
    	for(int i=0; i<record.length; i++){  		
    		if(!rmap.containsKey(record[i].getHid())){
    			List<WaiterItem> wl = new ArrayList<WaiterItem>();
    			if(record[i].getHid() == null)
    				rmap.put(-1, wl);
    			else
    				rmap.put(record[i].getHid(), wl);
    		}
    	}
    	Iterator<Entry<Integer, List<WaiterItem>>> iter = rmap.entrySet().iterator(); 
        while (iter.hasNext()) 
        { 
            Map.Entry<Integer, List<WaiterItem>> entry = (Map.Entry<Integer, List<WaiterItem>>) iter.next();
            
            for(int i=0; i<record.length; i++){
            	int hid = -1;
            	if(record[i].getHid()!=null)
            		hid = record[i].getHid();
	            if(hid == entry.getKey() )
	            {
	            	entry.getValue().add(record[i]);
	            }
            }
        }
        iter = rmap.entrySet().iterator(); 
        while (iter.hasNext()) 
        { 
            Map.Entry<Integer, List<WaiterItem>> entry = (Map.Entry<Integer, List<WaiterItem>>) iter.next();
            
            List<WaiterItem> lws = entry.getValue();
            lws.get(0).setMaketime(dstr);
    		lws.get(0).setDayid(dayid);
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
        		lws.get(i).setDayid(dayid);
        		lws.get(i).setDaynum(daynumlast);
        		lws.get(i).setWorkstate(lws.get(0).getWorkstate());
        	}
        }
    	
    	
    	//设置服务验证码 分开技师处理
    	//同一单同一个技师用一个服务验证码 首单需要开始验证，尾单需要结束验证
    	Map<Integer, String> _map = new HashMap<Integer, String>();//
    	Map<Integer, Integer> _mapsdx = new HashMap<Integer, Integer>();// 动牌顺序
    	for(int i=0; i<record.length; i++){  		
    		if(!_map.containsKey(record[i].getHid())){
    			String code = "";
        		for(int r=0; r<8; r++){
        			code = code + (int)(Math.random()*10);
        		}
        		if(record[i].getHid() == null)
        			_map.put(-1, code);
        		else
        			_map.put(record[i].getHid(), code);
    		}
    		
    		if(!_mapsdx.containsKey(record[i].getHid())){
    			nsdx++;//同一技师本单预动牌索引也一样
    			_mapsdx.put(record[i].getHid(), nsdx);
    		}
    	}
    	
    	Iterator<Entry<Integer, String>> _iter = _map.entrySet().iterator(); 
        while (_iter.hasNext()) 
        { 
            Map.Entry<Integer, String> entry = (Map.Entry<Integer, String>) _iter.next();
            
            for(int i=0; i<record.length; i++){
	            if(record[i].getHid() == entry.getKey() )
	            {
	            	record[i].setCheckcode(entry.getValue());
	            }
            }
        }
    	
        Iterator<Entry<Integer, Integer>> _itersdx = _mapsdx.entrySet().iterator(); 
        while (_itersdx.hasNext()) 
        { 
            Map.Entry<Integer, Integer> entry = (Map.Entry<Integer, Integer>) _itersdx.next();
            
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
		for(int i=0; i<olditems.size(); i++){
			if(olditems.get(i).getWorkstate() >= WaiterStateUtil.SST_SZ_MIN){
				find = 1;
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
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	witem.setCheckcode(null);
		witem.setWorktime(dstr);
		witem.setWorkstate(WaiterStateUtil.SST_SZ_MIN);
		int admnum = waiterItemMapper.updateByPrimaryKeySelective(witem, Util.getConpnany_Name());
		if(admnum != 1){
			ret =  -2;
		}
		
		//
		if(find == 0 )//本单开始第一个
		{	
			
			PlanWork pwk = planWorkMapper.getPlanWorkByHid(witem.getHid(), Util.getConpnany_Name());
			if(pwk == null){
				return -4;
			}
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
				
				if(dp == 1)//动牌
				{
					pwk.setSdxlast(pwk.getSdx());
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
				}
			}
			
			pwk.setState(WorkStateUtil.WST_FW_MIN);
			int u = planWorkMapper.updatePlanWorksByHidSelective(pwk, witem.getHid(), Util.getConpnany_Name());
			if(u != 1){
				ret =  -4;
			}
			
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
			int oid = om.getId();
			int wid = witem.getId();
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
		if(finishnum == olditems.size() - 1)//本单最后一项结束 需要验证
		{
			if(!oldcode.equals(witem.getCheckcode()))//验证未通过
			{
				ret =  -1;
			}
			//同一单只需要验证一次 验证过了就加上标记
			
		}
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	
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
			
			bill = clocknum * sitem.getPrice();
			
		}
		witem.setClocknum(clocknum);
		witem.setItembill(bill);
    	witem.setCheckcode(null);//不能将前台提交的验证码更新到数据库
    	witem.setFinishtime(dstr);
		witem.setWorkstate(WaiterStateUtil.SST_FW_FINISH);
		int admnum = waiterItemMapper.updateByPrimaryKeySelective(witem, Util.getConpnany_Name());
		if(admnum != 1){
			ret =  -2;
		}
		
		if(finishnum == olditems.size() - 1)//本单最后一项结束  设置下钟状态
		{
			
			PlanWork pwk = planWorkMapper.getPlanWorkByHid(witem.getHid(), Util.getConpnany_Name());
			if(pwk == null){
				return -4;
			}
			int round = pwk.getRound();
			round = round + 1;
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
				if(dp == 1)
				{
					pwk.setSdxlast(pwk.getSdx());
					int nsdx = moveWorksSdx();
					if(nsdx == -4){
						return -4;
					}
					pwk.setSdx(nsdx);
				}
			}
			pwk.setRound(round);
			pwk.setState(WorkStateUtil.WST_KX_MIN);
			int u = planWorkMapper.updatePlanWorksByHidSelective(pwk, witem.getHid(), Util.getConpnany_Name());
			if(u != 1){
				ret =  -4;
			}
			
		}
		
		return ret;
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
			ndsdate =ft.parse(td+tt);	
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
    	if(ndsdate!=null && cdsdate!=null){
    		if(cdsdate.getTime()<ndsdate.getTime() && ndsdate.getTime() < date.getTime()){
    			//新的一天了
    			String dstrnum = dstr.substring(0,4)+dstr.substring(5,7)+dstr.substring(8,10);
    			daynumlast = Integer.valueOf(dstrnum);
    			dayid = 0;
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
		
		int anum = wbillItemMapper.insertWBillItems(wbs, Util.getConpnany_Name());
		int dnum = waiterItemMapper.deleteWaiterItemByIds(ids, Util.getConpnany_Name());
		if(anum != dnum){
			ret = -4;
		}
		cds.setDayidlast(dayid);
    	cds.setDayidlasttime(dstr);
    	cds.setDaynumlast(daynumlast);
    	cfgDaySetMapper.updateDaySetByIdSelective(cds, Util.getConpnany_Name());
    	
		return anum;
	}
	
	public Integer updateByPrimaryKeySelective(WaiterItem record){
		return waiterItemMapper.updateByPrimaryKeySelective(record, Util.getConpnany_Name());
	}
	
	public WaiterItem getCompanyWaiterItemById(Integer id){
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
			int dm = -1;
			if(pwk.getDayidOfsdxMov()!=null)
			{
				dm = pwk.getDayidOfsdxMov();
			}
			if(dm == olditems.get(0).getDayid())//是否在这一单动的牌 
			{
				pwk.setSdx(pwk.getSdxlast());
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
		
		nws.add(lws.get(0));
		if(nws.size() > 0){
			int nnn = waiterItemMapper.updateWaiterStateListByIdSelective(nws, Util.getConpnany_Name());
			if(nnn != nws.size()){
				
			}
		}
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
}
