package com.aikang.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.aikang.Bean.GukePayChannelRecord;
import com.aikang.Bean.GukeShopings;
import com.aikang.Bean.MoneyChannel;
import com.aikang.Bean.PlanWork;
import com.aikang.Bean.RoundsConfig;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.WaiterItem;
import com.aikang.Bean.WrokingItem;


public class PlanworkUtil {

	/**
	 * 
	 * wl 当前这一组服务
	 * pw 服务人员
	 * 
	 * freetimelong 可以冗余的时间 分钟
	 */
	public static boolean ifThisWorklistTimeConf(List<WaiterItem> wl, PlanWork pw, int freetimelong) throws ParseException{
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date ndate = new Date();

		List<WrokingItem> pwkl = pw.getMyitems();
		if(pwkl != null && pwkl.size() > 0){
			
	
			
			for(int w=0; w<pwkl.size(); w++){
				if(pwkl.get(w).getWorkstate() >= WaiterStateUtil.SST_SZ_MIN && pwkl.get(w).getWorkstate() < WaiterStateUtil.SST_FW_FINISH){
					return false;
				}
				if(pwkl.get(w).getWorkstate() >= WaiterStateUtil.SST_FW_FINISH){
					continue;
				}
				Date pdate = ft.parse(pwkl.get(w).getWaittime());
				Double cnyf = pwkl.get(w).getClocknumyf();
				if(cnyf == null || cnyf <=0){
					cnyf = 1.0;
				}
				int tmyf = (int)(cnyf*pwkl.get(w).getSettmlong()*60*1000);
				long ps = pdate.getTime() + freetimelong*60*1000;
				long pf = ps + tmyf;
	    		for(int s=0; s<wl.size(); s++){
	    			if(wl.get(s).getWorkstate() >= WaiterStateUtil.SST_FW_FINISH){
						continue;
					}
	    			Date sdate = ft.parse(wl.get(s).getWaittime());
	    			Double clock = wl.get(s).getClocknumyf();
		    		if(clock==null || clock<=0) clock = 1.0;
		    		int tmlong = (int)(clock*wl.get(s).getStimelong()*60*1000);
		    		long st = sdate.getTime();
		    		long ot = sdate.getTime() + tmlong;
		    		if(st < ps && ps<ot){
		    			return false;
		    		}
		    		if(st < pf && pf<ot){
		    			return false;
		    		}
	    		}
	    	}
			
		}
		

		return true;
	}
	
	/**
	 * 
	 * wl 当前这一组服务
	 * pw 服务人员
	 * 
	 * freetimelong 可以冗余的时间 分钟
	 */
	public static boolean ifThisWorklistCanPlanX(List<WaiterItem> wl, PlanWork pw, int freetimelong) throws ParseException{
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date ndate = new Date();

		List<WrokingItem> pwkl = pw.getMyitems();
		if(pwkl != null && pwkl.size() > 0){
			
	
			
			for(int w=0; w<pwkl.size(); w++){
				if(pwkl.get(w).getWorkstate() >= WaiterStateUtil.SST_SZ_MIN && pwkl.get(w).getWorkstate() < WaiterStateUtil.SST_FW_FINISH){
					return false;
				}
				if(pwkl.get(w).getWorkstate() >= WaiterStateUtil.SST_FW_FINISH){
					continue;
				}
				Date pdate = ft.parse(pwkl.get(w).getWaittime());
				Double cnyf = pwkl.get(w).getClocknumyf();
				if(cnyf == null || cnyf <=0){
					cnyf = 1.0;
				}
				int tmyf = (int)(cnyf*pwkl.get(w).getSettmlong()*60*1000);
				long ps = pdate.getTime() + freetimelong*60*1000;
				long pf = ps + tmyf;
	    		for(int s=0; s<wl.size(); s++){
	    			if(wl.get(s).getWorkstate() >= WaiterStateUtil.SST_FW_FINISH){
						continue;
					}
	    			Date sdate = ft.parse(wl.get(s).getWaittime());
	    			Double clock = wl.get(s).getClocknumyf();
		    		if(clock==null || clock<=0) clock = 1.0;
		    		int tmlong = (int)(clock*wl.get(s).getStimelong()*60*1000);
		    		long st = sdate.getTime();
		    		long ot = sdate.getTime() + tmlong;
		    		if(st < ps && ps<ot){
		    			return false;
		    		}
		    		if(st < pf && pf<ot){
		    			return false;
		    		}
	    		}
	    	}
			
		}
		
		//是否里面有不能做的项目
		if(pw.getMyexcs()!=null && pw.getMyexcs().size()>0){
			int findnormalexc = 0;
			int findspecialexc = 0;
			for(int w=0; w<wl.size(); w++){
				if(wl.get(w).getSisspecialwork() == 0){
		    		for(int e=0; e<pw.getMyexcs().size(); e++){
		    			if(wl.get(w).getSid() == pw.getMyexcs().get(e).getSid()){
		    				findnormalexc++;
		    			}
		    		}
				}else{
					for(int e=0; e<pw.getMyexcs().size(); e++){
		    			if(wl.get(w).getSid() == pw.getMyexcs().get(e).getSid()){
		    				findspecialexc++;
		    			}
		    		}
				}
	    	}
			
			//普通项 有不能做的 直接排除这个技师
			if(findnormalexc > 0){
				return false;
			}
			
			//全都是特殊项目 并且不能做 也排除这个技师 
			if(findspecialexc >0 && findspecialexc == wl.size()){
				return false;
			}
		}
		
		return true;
	}
	
	/**
	 * sItems:所有服务项目 
	 * wl 当前这一组服务
	 * pw 服务人员
	 * comapnyallwitems 本店所有预约的钟单
	 * freetimelong 可以冗余的时间 分钟
	 */
	
	
	public static int getTimelongBySid(List<ServiceItem> sItems, Long sid){
		
		int tmlong  = 0;
		for(int i=0; i<sItems.size(); i++){
			if(sid == sItems.get(i).getId()){
				tmlong =  sItems.get(i).getTimelong();
				break;
			}
		}
		return tmlong;
	}
	
	public static ServiceItem getItemlongBySid(List<ServiceItem> sItems, Long sid){
		
		for(int i=0; i<sItems.size(); i++){
			if(sid == sItems.get(i).getId()){
				return sItems.get(i);
			}
		}
		return null;
	}

	public static void setWorkEarliestTime(WaiterItem wm, PlanWork pw) throws ParseException{
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		Date nowdate = new Date();
		
		Date waitdate = null;
		if(wm.getWaittime() != null){
			waitdate = ft.parse(wm.getWaittime());
		}
		if(waitdate == null){
			return ;
		}
		if(waitdate.getTime() - nowdate.getTime() < 10*60*1000)//10分钟内的不算预约，不用更新了
		{
			return ;
		}
		Date earldate = null;
		if(pw.getEarliestyytime() != null){
			earldate = ft.parse(pw.getEarliestyytime());
		}
		if(earldate == null){
			pw.setEarliestyytime(wm.getWaittime());
			return;
		}
		
		if(nowdate.getTime() - earldate.getTime() > 3*60*60*100  )//之前的记录都过了3小时了 更新到这个
		{
			pw.setEarliestyytime(wm.getWaittime());
			return;
		}
		
		if(earldate.getTime() > waitdate.getTime())//更早的约钟时间  更新到这个
		{
			pw.setEarliestyytime(wm.getWaittime());
			return;
		}
	}
	
	public static PlanWork getWorkByHidInWoklist(List<PlanWork> pl, long hid){
		PlanWork pw = null;
		
		for(int i=0; i<pl.size(); i++)
		{
			if(hid == pl.get(i).getHid()){
				pw = pl.get(i);
				break;
			}
		}
		return pw;
	}
	
	public static void setWaititemWork(WaiterItem wm, PlanWork pw, int wstate){
		wm.setHid(pw.getHid());
		wm.setHname(pw.getName());
		wm.setHcode(pw.getServicecode());
		wm.setWorkstate(wstate);
	}
	
	public static double cacuAllThisSalary(List<WaiterItem> wl, List<ServiceItem>sItems, PlanWork pw){
		double allsalary = 0;
		for(int s=0; s<wl.size(); s++){
			WaiterItem wi = wl.get(s);
			if(wi.getHid() > 0)//已经安排过人了
			{
				continue;
			}
			for(int m=0; m<sItems.size(); m++){
				if(sItems.get(m).getId() == wi.getSid()){
					if(!ifHasConotItem(wi, pw)){
						if(wi.getWtype() == 0)//轮种
						{
							allsalary += sItems.get(m).getdSalaryLz()*wi.getClocknumyy();
						}else if(wi.getWtype() == 1 || wi.getWtype() == 2){
							allsalary += sItems.get(m).getdSalaryDp()*wi.getClocknumyy();
						}else if(wi.getWtype() == 3){
							allsalary += sItems.get(m).getdSalaryDz()*wi.getClocknumyy();
						}
					}
					else 
					{
						//如果这个项目不能做 并且是特殊项目  那就减掉一点提成预估  这样在同等提成的条件下 技师优先选择 不包含特殊项目的组
						if(sItems.get(m).getIsspecialwork() > 0){
							if(wi.getWtype() == 0)//轮种
							{
								allsalary -= sItems.get(m).getdSalaryLz()*0.05;
							}else if(wi.getWtype() == 1 || wi.getWtype() == 2){
								allsalary -= sItems.get(m).getdSalaryDp()*0.05;
							}else if(wi.getWtype() == 3){
								allsalary -= sItems.get(m).getdSalaryDz()*0.05;
							}
						}
					}
					
					break;
				}
			}
		}
		return allsalary;
	}
	
	public static double cacuMyAllThisSalaryX(List<WaiterItem> wl, PlanWork pw){
		double allsalary = 0;
		for(int s=0; s<wl.size(); s++){
			WaiterItem wm = wl.get(s);
			if(wm.getHid() == pw.getHid())
			{
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
				if(wm.getOrdertype() >= 100 && wm.getPaystate()>0)
					salary = salary * wm.getClocknumyf();
				else{
					if(wm.getClocknum() > 0){
						salary = salary * wm.getClocknum();
					}else
						salary = salary * 1;
				}
				allsalary +=salary;
			}
			
		}
		return allsalary;
	}
	public static boolean ifHasConotItem(WaiterItem wm, PlanWork pw){
		//是否里面有不能做的项目
		if(pw.getMyexcs()!=null && pw.getMyexcs().size()>0){
			int find = 0;
			for(int e=0; e<pw.getMyexcs().size(); e++){
    			if(wm.getSid() == pw.getMyexcs().get(e).getSid()){
    				find++;
    			}
    		}
			
	    	if(find > 0){
	    		return true;
	    	}

		}
		
		return false;
	}
	
	public static void CopyGsToWi(WaiterItem wi, GukeShopings gs, WaiterItem owi){
		wi.setOrdertype(100);
		wi.setDaynum(gs.getDaynumber());
		wi.setDayid(owi.getDayid());
		wi.setCheckcode(owi.getCheckcode());
		wi.setGukeidx(gs.getGukeidx());
		wi.setGukenum(gs.getGukenum());
		wi.setBillnumber(gs.getBillnumber());
		wi.setSerinumber(gs.getSerinumber());
		wi.setRmid(owi.getRmid());
		wi.setRmname(owi.getRmname());
		wi.setSid(gs.getSid());
		wi.setSname(gs.getSname());
		wi.setClocknumyy(gs.getClocknumyy());
		wi.setClocknumyf(gs.getClocknumyy());
		wi.setItembillyf(gs.getItembillyf());
		wi.setPaystate(1);
		wi.setWtypek(gs.getWtype());
		
		wi.setWtype(owi.getWtype());
		
		
		wi.setWlev(gs.getWlev());
		wi.setMaketime(gs.getMaketime());
		wi.setWaittime(gs.getWaittime());
		
		//加钟 不是点钟 当前技师要可以做这个项目才行， 否则系统自行派单
		if(gs.getHid() <= 0 && gs.getHid() != -1001l && owi.getHid()>0){
			wi.setHid(owi.getHid());
			wi.setHname(owi.getHname());
			wi.setHcode(owi.getHcode());
		}
		wi.setWorkstate(0);
		wi.setKid(gs.getKid());
		wi.setHyid(gs.getMemid());
		wi.setHyname(gs.getMemname());
		wi.setHyseriid(gs.getMemcode());
		wi.setHyrmoney(gs.getHyrmoney());
	}
	
	public static void CopyMoneyChannelToRecord(GukePayChannelRecord gcr, MoneyChannel mcl){
		gcr.setCompany(mcl.getCompany());
		gcr.setChannelname(mcl.getChannelname());
		gcr.setBlocktype(mcl.getBlocktype());
		gcr.setBlockkid(mcl.getBlockkid());
		gcr.setIsblock(mcl.getIsblock());
		gcr.setBlockbillnumber(mcl.getBlockbillnumber());
		gcr.setBlocktime(mcl.getBlocktime());
		gcr.setBlockbillprice(mcl.getBlockbillprice());
	}
}
