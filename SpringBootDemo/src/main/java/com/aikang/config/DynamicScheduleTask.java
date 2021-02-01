package com.aikang.config;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Comparator;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.util.StringUtils;

import com.aikang.Bean.CfgDaySet;
import com.aikang.Bean.Cron;
import com.aikang.Bean.CronTask;
import com.aikang.Bean.PlanWork;
import com.aikang.Bean.ServiceSalary;
import com.aikang.Bean.SpeTimesec;
import com.aikang.Bean.User;
import com.aikang.Bean.WBillItem;
import com.aikang.Bean.WaiterItem;
import com.aikang.mapper.CfgDaySetMapper;
import com.aikang.mapper.PlanWorkMapper;
import com.aikang.mapper.SpeTimesecMapper;
import com.aikang.service.CronService;
import com.aikang.service.PlanWorkService;
import com.aikang.service.WaiterItemService;
import com.aikang.utils.DateUtil;
import com.aikang.utils.PlanworkUtil;
import com.aikang.utils.Util;
import com.aikang.utils.WaiterStateUtil;
import com.aikang.utils.WorkStateUtil;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

@Configuration      //1.主要用于标记配置类，兼备Component的效果。
@EnableScheduling   // 2.开启定时任务
public class DynamicScheduleTask implements SchedulingConfigurer {


    @Autowired      //注入mapper
    CronService cronService;
    
    @Autowired
	WaiterItemService wiService;
    
    @Autowired
    PlanWorkService pwService;
    
    @Autowired
    PlanWorkMapper  planWorkMapper;
    
    @Autowired
    CfgDaySetMapper cfgDaySetMapper;
    
    @Autowired
	SpeTimesecMapper speTimesecMapper;
	/**
     * 执行定时任务.
     */
    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
    	SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	
    
        taskRegistrar.addTriggerTask(
                //1.添加任务内容(Runnable)
                () ->{ 
	                	Date date = new Date();
	                	String dstr_now = ft.format(date.getTime());//
	                	 
	                	
	                	///{@@@@}任务 1
	                	///加班的时间过去12小时了就重置所有加班人员轮数
	                	String dstr_nowpass = ft.format(date.getTime() - 12*60*60*1000);//过去12小时
	                	planWorkMapper.SetWorkExtraRoundOrigByIfRlastdatePass(dstr_nowpass, dstr_now, 1);
	          
	                	
	                	///{@@@@}任务 2
	                	//后端目前之结束已经付款到点的项目  结算由前端发起
	            		int upfinish = wiService.updateAllHasPayAndPassTimeItem(100, 200, 1, dstr_now, WaiterStateUtil.SST_SZ_MIN, WaiterStateUtil.SST_FW_MAX, WaiterStateUtil.SST_FW_FINISH_XT);
	            		
	            		upfinish = upfinish + 1;
	            		///处理预先付款并且到结束时间  自动结束并结算
	            		
	            		
	            		
	            		///{@@@@}任务 3
	                	///////////////////////////////////////////////////////////////////////
	                	/////////////////////////代码段任务  安排没有技师的项 安排人员//////////////////////
	            		long st = date.getTime() - (long)24*60*60*1000;
	            		long et = date.getTime() + 5*60*1000;
	            		String dstr_start = ft.format(st);//过去3小时
	            		
	            		String dstr_end = ft.format(et);//未来5分钟
	            		//在过去3小时和未来3分钟内未安排的钟单  现在就安排一下
	            		
	            		List<WaiterItem> nohwls = wiService.getAllNoHidWaiterItemByDateStr(dstr_start, dstr_end);
	            		if(nohwls.size() > 0){
	            			try {
								DoWaiterTask(nohwls);
							} catch (ParseException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
	            		}
	            		/////////////////////////代码段任务  安排没有技师的项 安排人员//////////////////////
	            		////////////////////////////////////////////////////////////////////
	            		
	            		
	            		
	            		/////////////////////////////////////////////////////////////////////////////
	            		///处理预先付款并且到结束时间  自动结束并结算
	            		
	            		//结束并结算 这个任务放到前端做了  后端这样操作数据库 压力太大了
//	            		String dstr_now = ft.format(date.getTime());//过去3小时
//	            		List<WaiterItem> finiwls = wiService.getAllHasPayAndPassFinishYjTime(1, dstr_now, WaiterStateUtil.SST_SZ_MIN, WaiterStateUtil.SST_FW_FINISH);
//	            		if(finiwls.size() > 0){
//	            			try {
//								DoWaiterFinishCheck(finiwls);
//							} catch (ParseException e) {
//								// TODO Auto-generated catch block
//								e.printStackTrace();
//							}
//	            		}
	            		
	            		
	            		//////////////////////////////////////////////////////////////////////
	            		
	            		////////////////////////////////////////////////////////////////////////
	            		
                	},
                //2.设置执行周期(Trigger)
                triggerContext -> {
                    //2.1 从数据库获取执行周期
                    Cron cron = cronService.getCron();
                    //2.2 合法性校验.
                    if (StringUtils.isEmpty(cron.getCron())) {
                        // Omitted Code ..
                    }
                    //2.3 返回执行周期(Date)
                    return new CronTrigger(cron.getCron()).nextExecutionTime(triggerContext);
                }
        );
    }
    
    //结束并结算  
//    public void DoWaiterFinishCheck(List<WaiterItem> finiwls) throws ParseException{
//    	
//    	SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//    	Date date = new Date();
//    	String dstr_now = ft.format(date.getTime());//过去3小时
//    	
//    	
//    	List<String> companylist = new ArrayList<String>();
//    	for(int i=0; i<finiwls.size(); i++){
//    		WaiterItem fwt = finiwls.get(i);
//    		fwt.setClocknum(fwt.getClocknumyf());
//    		fwt.setWorkstate(WaiterStateUtil.SST_FW_FINISH);
//    		fwt.setItembill((double)fwt.getPaynum()/100);
//    		fwt.setFinishtime(dstr_now);
//            companylist.add(fwt.getCompany());
//           
//    	}
//    	
//    	//相关公司配置表
//    	List<CfgDaySet> allcompanycfgs = cfgDaySetMapper.getAllDaySetConfigByCompanylist(companylist);
//    	Map<String, CfgDaySet> rmapcfg = new HashMap<String, CfgDaySet>();//
//    	for(int i=0; i<allcompanycfgs.size(); i++){
//    		CfgDaySet cfg = allcompanycfgs.get(i);
//    		rmapcfg.put(cfg.getCompany(), cfg);
//    	}
//    	
//    	List<Long> hidSetlist = new ArrayList<Long>();
//    	List<Long> hidMovlist = new ArrayList<Long>();
//    	
//    	WBillItem[] wbs = new WBillItem[finiwls.size()];
//    	for(int i=0; i<finiwls.size(); i++){
//    		wbs[i] = new WBillItem();
//    		WaiterItem fwt = finiwls.get(i);
//    		BeanUtils.copyProperties(fwt, wbs[i]);
//    		
//    		
//    		CfgDaySet cds = rmapcfg.get(fwt.getCompany());
//    		Date ndsdate = null;
//        	if(cds!=null && cds.getNewDayTime()!=null){		
//    			String td = dstr_now.substring(0, 10) ;
//    			String tt = cds.getNewDayTime().substring(10);
//    			String tn = td + tt;
//    			ndsdate =ft.parse(tn);	
//        	}
//        	int daynumlast = 0;
//        	//判断是否新的营业的一天
//        	if(ndsdate!=null){
//        		if(ndsdate.getTime() < date.getTime()){
//        			//新的一天了
//        			String dstrnum = dstr_now.substring(0,4)+dstr_now.substring(5,7)+dstr_now.substring(8,10);
//        			daynumlast = Integer.valueOf(dstrnum);
//        		}else{
//        			Date date_p = new Date(date.getTime() - 24*60*60*1000);
//        			String dstr_p = ft.format(date_p.getTime());
//        			String dstrnum = dstr_p.substring(0,4)+dstr_p.substring(5,7)+dstr_p.substring(8,10);
//        			daynumlast = Integer.valueOf(dstrnum);
//        		}
//        	}
//        	
//        	wbs[i].setDaynum(daynumlast);
//        	double salary = 0;
//			//默认提成
//			if(fwt.getWtype() == WorkStateUtil.WST_PLAN_LZ){
//				salary =  fwt.getdSalaryLz() + fwt.getDefsalarylz();
//			}else if(fwt.getWtype() == WorkStateUtil.WST_PLAN_DZ){
//				salary =  fwt.getdSalaryDz() + fwt.getDefsalarydz();
//			}else if(fwt.getWtype() == WorkStateUtil.WST_PLAN_DP){
//				salary =  fwt.getdSalaryDp() + fwt.getDefsalarydp();
//			}else if(fwt.getWtype() == WorkStateUtil.WST_PLAN_SZ){
//				salary =  fwt.getdSalarySz() + fwt.getDefsalarysz();
//			}
//			
//			double clocknumzs = fwt.getClocknumyf() * fwt.getSetclocknumzs();
//			salary = salary * fwt.getClocknum();
//			wbs[i].setWorksalary(salary);
//			wbs[i].setClocknumzs(clocknumzs);
//			wbs[i].setCheckid(fwt.getHcode());
//			wbs[i].setCheckname(fwt.getHname());
//			wbs[i].setChecktime(dstr_now);
//			
//			int dp = 1;
//			if(fwt.getIslast() > 0){
//				hidSetlist.add(fwt.getHid());
//            
//				if(fwt.getDongpaitype() == 1)//下钟动牌
//				{	
//					
//					if(fwt.getWtype() == WorkStateUtil.WST_PLAN_SZ)//不排钟的方式不动牌
//					{
//						dp = 0;
//					}
//					//点钟是否动牌
//					if(fwt.getWtype() == WorkStateUtil.WST_PLAN_DZ && fwt.getDianzhongdongpaitype() == 1)
//					{
//						dp = 0;
//					}
//					
//					if(dp == 1)
//					{
//						hidMovlist.add(fwt.getHid());
//					}
//				}
//			}
//    	}
//    	
//    	//动牌的技师开始动牌
//    	List<CfgDaySet> update_cfgs = new ArrayList<CfgDaySet>();
//    	List<PlanWork> allmovworks = null;
//    	if(hidSetlist.size() > 0)
//    	{
//    		allmovworks = planWorkMapper.getPlanWorksInIds(hidSetlist);
//    		for(int i=0; i<allmovworks.size(); i++)
//        	{
//        		PlanWork p = allmovworks.get(i);
//    			p.setState(WorkStateUtil.WST_KX_MIN);
//    			if(hidMovlist.contains(p)){
//    				CfgDaySet cds = rmapcfg.get(p.getCompany());
//	    			int nsdx = cds.getRoundsdx() + 1;
//	    			p.setSdxlast(p.getSdx());
//	    			p.setSdx(nsdx);
//	    			p.setDayidOfsdxMov(0);//下钟动牌这个就无关紧要了 设置成0吧	
//	    			cds.setRoundsdx(nsdx);	
//	    			update_cfgs.add(cds);
//    			}
//        	}
//    	}
//    	
//    	
//    	int ret =  wiService.update_Waiter_finishandcheck_list(finiwls, wbs, update_cfgs, allmovworks);
//        if(ret < 0){
//        	ret = ret+1-1;
//        }
//        
//    }
    //先按照公司分组
    public void DoWaiterTask(List<WaiterItem> nohwls) throws ParseException{
    	//先按照公司名称排序
    	String lastCompanyName = "";
    	Map<String, List<WaiterItem>> rmap = new HashMap<String, List<WaiterItem>>();//
    	List<WaiterItem> wl = new ArrayList<WaiterItem>();
    	for(int i=0; i<nohwls.size(); i++){
    		WaiterItem ct = nohwls.get(i);
    		if(!ct.getCompany().equals(lastCompanyName)){
    			if(wl.size() > 0){
    				rmap.put(lastCompanyName, wl);
    			}
    			wl = new ArrayList<WaiterItem>();
    			lastCompanyName = ct.getCompany();
    		}
    		wl.add(ct);
    	}
    	rmap.put(lastCompanyName, wl);
    	
    	List<String> companylist = new ArrayList<String>();
    	
    	Iterator<Entry<String, List<WaiterItem>>> _iter = rmap.entrySet().iterator(); 
        while (_iter.hasNext()) 
        { 
            Map.Entry<String, List<WaiterItem>> entry = (Map.Entry<String, List<WaiterItem>>) _iter.next();
            
            String companyName = entry.getKey();
            companylist.add(companyName);  
        }
        ////////////////////////////////////////////
        ////获得各个门店的配置
        List<CfgDaySet> allcompanycfgs = cfgDaySetMapper.getAllDaySetConfigByCompanylist(companylist);
    	Map<String, CfgDaySet> rmapcfg = new HashMap<String, CfgDaySet>();//
    	for(int i=0; i<allcompanycfgs.size(); i++){
    		CfgDaySet cfg = allcompanycfgs.get(i);
    		rmapcfg.put(cfg.getCompany(), cfg);
    	}
    	
		//////////////////////////////////////////
		//获取各个门店加班时间表
        SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	String td = dstr.substring(11, 16) ;
    	String jstr1 = "2000-01-01 "+td+":00";
    	String jstr2 = "2000-01-02 "+td+":00";
    	//获得所有在这个时间 属于加班的门店列表
    	List<SpeTimesec> setms = speTimesecMapper.getAllTypeSpetimesecAtSometimeInCompanylist(0, jstr1, jstr2, companylist);
    	Map<String, SpeTimesec> rmapSpe = new HashMap<String, SpeTimesec>();//
    	for(int i=0; i<setms.size(); i++){
    		SpeTimesec spe = setms.get(i);
    		if(rmapSpe.get(spe.getCompany()) == null){
    			rmapSpe.put(spe.getCompany(), spe);
    		}
    	}
    	/////////////////////////////////////////////////////////////
    	//加班的门店和不加班的门店分开处理
    	List<String> companylist_jb = new ArrayList<String>();
    	List<String> companylist_njb = new ArrayList<String>();
    	for(int i=0; i<companylist.size(); i++ ){
    		String keys = companylist.get(i);
    		if(rmapSpe.get(keys) != null)
    		{
    			companylist_jb.add(keys);
    		}else{
    			companylist_njb.add(keys);
    		}

    	}
		//////////////////////////////////////////////////////////////
        //获得所有相关门店的排钟技师列表
    	List<PlanWork> allcompanyworks = new ArrayList<PlanWork>();
    	if(companylist_njb.size() > 0){
    		allcompanyworks = planWorkMapper.getAllPlanWorksByCompanylist(companylist_njb, WorkStateUtil.WST_KX_MIN, WorkStateUtil.WST_YY_MAX);
    	}      
        lastCompanyName = "";
    	Map<String, List<PlanWork>> rmapwork = new HashMap<String, List<PlanWork>>();//
    	List<PlanWork> pl = new ArrayList<PlanWork>();
    	for(int i=0; i<allcompanyworks.size(); i++){
    		PlanWork p = allcompanyworks.get(i);
    		if(!p.getCompany().equals(lastCompanyName)){
    			if(pl.size() > 0){
    				rmapwork.put(lastCompanyName, pl);
    			}
    			pl = new ArrayList<PlanWork>();
    			lastCompanyName = p.getCompany();
    		}
    		pl.add(p);
    	}
    	if(lastCompanyName != "")
    		rmapwork.put(lastCompanyName, pl);
    	
    	List<PlanWork> allcompanyworksjb = new ArrayList<PlanWork>();
    	if(companylist_jb.size() > 0){
    		allcompanyworksjb = planWorkMapper.getAllWorkExtraPlanWorksByCompanylist(companylist_jb, WorkStateUtil.WST_KX_MIN, WorkStateUtil.WST_YY_MAX);
    	}
        lastCompanyName = "";
    	for(int i=0; i<allcompanyworksjb.size(); i++){
    		PlanWork p = allcompanyworksjb.get(i);
    		if(!p.getCompany().equals(lastCompanyName)){
    			if(pl.size() > 0){
    				rmapwork.put(lastCompanyName, pl);
    			}
    			pl = new ArrayList<PlanWork>();
    			lastCompanyName = p.getCompany();
    		}
    		pl.add(p);
    	}
    	if(lastCompanyName != "")
    		rmapwork.put(lastCompanyName, pl);
    	
    	
    	
    	
    	
    	
    	///有变动 要更新的记录 保存下来， 节约系统效能
    	List<WaiterItem> update_lws = new ArrayList<WaiterItem>();
    	List<PlanWork> update_lps = new ArrayList<PlanWork>();
    	List<CfgDaySet> update_cfgs = new ArrayList<CfgDaySet>();
    	
        Iterator<Entry<String, List<WaiterItem>>> _iter1 = rmap.entrySet().iterator(); 
        while (_iter1.hasNext()) 
        { 
            Map.Entry<String, List<WaiterItem>> entry = (Map.Entry<String, List<WaiterItem>>) _iter1.next();
            
            String companyName = entry.getKey();
            List<WaiterItem> lws = entry.getValue();
            List<PlanWork> lps = rmapwork.get(companyName);
            CfgDaySet cfg = rmapcfg.get(companyName);
            SpeTimesec spe = rmapSpe.get(companyName);
            DoWaiterItemDetail(lws, lps, cfg, spe, update_lws, update_lps, update_cfgs);
        }
        int ret =  wiService.update_Waiter_cfg_list(update_lws, update_cfgs);
        if(ret < 0){
        	ret = ret+1-1;
        }
        
    }

    //再按照流水号 和顾客序号分组
    public void DoWaiterItemDetail(List<WaiterItem> lws, List<PlanWork> alps, CfgDaySet cfg, SpeTimesec spe, List<WaiterItem> update_lws, List<PlanWork> update_lps, List<CfgDaySet> update_cfgs) throws ParseException{
    	if(lws == null || alps == null || cfg == null){
    		return ;
    	}
    	
    	SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	///////////////////////////////////////////
    	
    	List<PlanWork> lps = new ArrayList<PlanWork>();
    	for(int i=0; i<alps.size(); i++){
    		PlanWork pw = alps.get(i);
    		if(spe != null){//如果是本公司的加班时段
    			int findjb = 0;
    			if(pw.getMywkexts() != null){
	    			for(int b=0; b<pw.getMywkexts().size(); b++){
	    				if(pw.getMywkexts().get(b).getTmid() == spe.getId()){
	    					findjb = 1;
	        				break;
	        			}
	    			}
    			}
    			if(findjb == 0)//不加班的跳过
    			{
    				continue;
    			}
    		}
        	lps.add(pw);       	
    	}
    	
    	//
    	int nsdx = 0;//预动牌序号
    	
    	if(cfg.getRoundsdx() != null){
    		nsdx = cfg.getRoundsdx();
    		nsdx++;
    	}

    	//////////////////////////////////////////////////////////////
    	//按照账单号和顾客序号分组
    	//先收集所有的组号
    	Map<String, String> bkmap = new HashMap<String, String>();//
    	for(int i=0; i<lws.size(); i++){
    		WaiterItem wm = lws.get(i);
    		String bk = wm.getBillnumber() + "_" + wm.getGukeidx();
    		if(!bkmap.containsKey(bk)){
    			bkmap.put(bk, "");
    		}
    	}
    	
    	//再根据每个组号分组项目
    	Map<String, List<WaiterItem>> rmap = new HashMap<String, List<WaiterItem>>();//
    	Iterator<Entry<String, String>> _bkiter = bkmap.entrySet().iterator(); 
        while (_bkiter.hasNext()) 
        { 
            Map.Entry<String, String> entry = (Map.Entry<String, String>) _bkiter.next();
            String bk = entry.getKey();
            List<WaiterItem> wltmp = new ArrayList<WaiterItem>();
            for(int i=0; i<lws.size(); i++){
        		WaiterItem wm = lws.get(i);
        		String tbk = wm.getBillnumber() + "_" + wm.getGukeidx();
        		if(bk.equals(tbk)){
        			wltmp.add(wm);
        		}
            }
            rmap.put(bk, wltmp);
        }
		
		
		
		///技师选项目 而不是项目选技师
    	for(int np=0; np<lps.size(); np++){
			PlanWork cpw = lps.get(np);
			
			//这个临时队列用来排序
			List <WaiterItem> tmpsortitemlist = new ArrayList<WaiterItem>();//这个临时队列用来排序   

	    	Iterator<Entry<String, List<WaiterItem>>> _iter = rmap.entrySet().iterator(); 
	        while (_iter.hasNext()) 
	        { 
	            Map.Entry<String, List<WaiterItem>> entry = (Map.Entry<String, List<WaiterItem>>) _iter.next();
	            
	            String rmkey = entry.getKey();
	            List<WaiterItem> glws = entry.getValue();
	            
	            
	            //计算这个顾客的总提成
				double allsalary = 0;
				for(int s=0; s<glws.size(); s++){
					WaiterItem wi = glws.get(s);
					if(wi.getHid() > 0)//已经安排过人了
					{
						continue;
					}
					if(PlanworkUtil.ifHasConotItem(wi, cpw))//这个我不能做
					{
						continue;
					}
					allsalary += wi.getSalarylz()*wi.getClocknumyy();
				}
				
				
				//记录本顾客提成 用于排序
				WaiterItem tmpw = new WaiterItem();
				tmpw.setRemark(rmkey);
				tmpw.setItembill(allsalary);
				tmpsortitemlist.add(tmpw);
	        }
			
	        //为钟单安排技师
			//先按照提成多少排序///////////////////////////////////////////////
	    	Collections.sort(tmpsortitemlist, new Comparator<WaiterItem>(){
	            @Override
	            public int compare(WaiterItem w1, WaiterItem w2) {
	                //由高到低 就是w2在前
	                if (w2.getItembill() - w1.getItembill() > 0){
	                    return 1;
	                }else if (w2.getItembill() - w1.getItembill() == 0){
	                    return 0;
	                }else{
	                    return -1;
	                }
	            }
	        });
	    	/////////////////////////////////////////////////////////////////////
	    	for(int i=0; i<tmpsortitemlist.size(); i++){
	    		String key = tmpsortitemlist.get(i).getRemark();
				List<WaiterItem> wl = rmap.get(key);
				
				//这组项目有你不能做的项目  那就下一个吧
				if(!PlanworkUtil.ifThisWorklistCanPlanX(wl, cpw, 10)){
					continue;
				}
				
				if(wl.get(0).getWtypek() == 0){
    				
    				if(cpw.getLevel() < wl.get(0).getWlev())
    				{
    					continue;
    				}
				}
				else if(wl.get(0).getWtypek() == 1)
    			{
    				if(!cpw.getSex().equals(WorkStateUtil.WST_SEX_M)){
						continue;
					}
    				if(cpw.getLevel() < wl.get(0).getWlev())
    				{
    					continue;
    				}
    			}
				else if(wl.get(0).getWtypek() == 2)
    			{
    				if(!cpw.getSex().equals(WorkStateUtil.WST_SEX_W)){
						continue;
					}
    				if(cpw.getLevel() < wl.get(0).getWlev())
    				{
    					continue;
    				}
    			}
				/////////////////////////////////////
				Date wdate = null;   
				//确保最早时间
		    	if(wl.get(0).getWaittime() != null){
		    		wdate =ft.parse(wl.get(0).getWaittime());					
		    	}
		    	for(int w=0; w<wl.size(); w++){
		    		if(wdate.getTime() > (ft.parse(wl.get(w).getWaittime())).getTime()){
	    				wdate = ft.parse(wl.get(w).getWaittime());
	    			}	
		    	}
		    	if(wdate == null){
		    		continue;
		    	}
		    	if(wdate.getTime() - date.getTime() > 10*60*60*1000){
		    		continue;
		    	}
		    	
		    	int anpai = 0;
				for(int w=0; w<wl.size(); w++){
					if(wl.get(w).getHid() <= 0  && !PlanworkUtil.ifHasConotItem(wl.get(w), cpw))
					{
			    		wl.get(w).setHid(cpw.getHid());
			    		wl.get(w).setHname(cpw.getName());
			    		wl.get(w).setHcode(cpw.getServicecode());
			    		wl.get(w).setMovsdx(nsdx);
			    		update_lws.add(wl.get(w));
			    		anpai++;
					}
		    	}
				if(anpai > 0){
					nsdx++;//动牌顺序按照开单顺序
		    		update_lps.add(cpw);
		    		
					//保存公司日单号等配置
					cfg.setRoundsdx(nsdx);
					update_cfgs.add(cfg);
					//更新订单技师安排
    				
					break;
				}
		    		
		    		
		    }///for(int i=0; i<tmpsortitemlist.size(); i++)
	    	
		}//for(int np=0; np<lps.size(); np++)
    	
    }
  //再按照流水号分组
    public void DoWaiterItemDetailPlanwork(List<WaiterItem> glws)
    {
    
    }
    
    
    //测试获取加班列表
    public void testGetWorkExtraPlanworkList(){
    	SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	//判断是否在加班时段
    	String dstr = ft.format(date.getTime());
    	String td = dstr.substring(11, 16) ;
    	String jstr1 = "2000-01-01 "+td+":00";
    	String jstr2 = "2000-01-02 "+td+":00";
    	String companyname = "aikang";
    	List<String> companylist = new ArrayList<String>();
    	companylist.add(companyname);
    	List<SpeTimesec> l_setms = speTimesecMapper.getAllTypeSpetimesecAtSometimeInCompanylist(0, jstr1, jstr2, companylist);
    	//先获取所有本公司本加班时段表
    	List<SpeTimesec> setms = speTimesecMapper.getAllTypeSpetimesecAtSometime(0, jstr1, jstr2, companyname);
		List<PlanWork> swl = new ArrayList<PlanWork>();
		List<PlanWork> works = new ArrayList<PlanWork>();
		if(setms==null || setms.size() <=0)
		{
			//非加班时段
			works = planWorkMapper.getAllPlanWorks(companyname);
			for(int i=0; i<works.size(); i++){
    			PlanWork pw = works.get(i);
    			int state = pw.getState();
    			
    			if(WorkStateUtil.IF_TP(state) || WorkStateUtil.IF_SZ(state) || WorkStateUtil.IF_FW(state)){
    				continue;
    			}
    			swl.add(pw);	
    		}
		}
		else
		{
			//加班时段
			works = planWorkMapper.getAllPlanWorksAtWorkExtra(setms.get(0).getName(), companyname);
			for(int i=0; i<works.size(); i++){
    			PlanWork pw = works.get(i);
    			int state = pw.getState();
    			
    			if(WorkStateUtil.IF_TP(state) || WorkStateUtil.IF_SZ(state) || WorkStateUtil.IF_FW(state)){
    				continue;
    			}
    			if(pw.getMywkexts() == null){
    				continue;
    			}
    			int findjb = 0;
    			if(pw.getMywkexts() != null){
	    			for(int b=0; b<pw.getMywkexts().size(); b++){
	    				if(pw.getMywkexts().get(b).getTmid() == setms.get(0).getId()){
	    					findjb = 1;	    					
	        				break;
	        			}
	    			}
    			}
    			if(findjb == 0){
    				continue;
    			}
    			swl.add(pw);
    			
    		}
			int a = 1;
			int b = a+1;
		}
    }
}
