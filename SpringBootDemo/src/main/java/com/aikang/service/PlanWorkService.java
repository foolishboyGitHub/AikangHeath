package com.aikang.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.CfgDaySet;
import com.aikang.Bean.PlanExcItem;
import com.aikang.Bean.PlanWork;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.RoundsConfig;
import com.aikang.Bean.SpeTimesec;
import com.aikang.Bean.WaiterItem;
import com.aikang.Bean.WorkExtra;
import com.aikang.mapper.CfgDaySetMapper;
import com.aikang.mapper.PlanExcItemMapper;
import com.aikang.mapper.PlanWorkMapper;
import com.aikang.mapper.RoundsConfigMapper;
import com.aikang.mapper.SpeTimesecMapper;
import com.aikang.mapper.WaiterItemMapper;
import com.aikang.utils.Util;
import com.aikang.utils.WaiterStateUtil;
import com.aikang.utils.WorkStateUtil;

@Service
@Transactional(rollbackFor=Exception.class)
public class PlanWorkService {
	
	@Autowired
	PlanWorkMapper planWorkMapper;
	
	@Autowired
	PlanExcItemMapper planExcItemMapper;
	
	@Autowired
	RoundsConfigMapper roundsConfigMapper;
	
	@Autowired  
	CfgDaySetMapper cfgDaySetMapper;
	
	@Autowired
	WaiterItemMapper waiterItemMapper;
	
	@Autowired
	WaiterItemService wiService;
	
	@Autowired
	SpeTimesecMapper speTimesecMapper;
	
	public List<PlanWork> getAllPlanWorks(){
		return planWorkMapper.getAllPlanWorks(Util.getConpnany_Name());
	}
	public List<PlanWork> GetTypePlanWorks(int tyy, int wtype, int wsex) throws ParseException{
		
		List<PlanWork> works = planWorkMapper.getAllPlanWorks(Util.getConpnany_Name());
//		srotWorkList(works);
		List<PlanWork> swl = new ArrayList<PlanWork>();
		if(tyy == 1)//预约的 除了停牌 其他所有人都参与
		{
			for(int i=0; i<works.size(); i++){
				PlanWork pw = works.get(i);
				if(!WorkStateUtil.IF_TP(pw.getState()) ){
					swl.add(pw);
				}
			}
			return swl;
		}
		RoundsConfig rcfg = roundsConfigMapper.getRoundsConfig(Util.getConpnany_Name());
		List<WaiterItem> witems = waiterItemMapper.getAllWaiterItem(Util.getConpnany_Name());
		for(int i=0; i<works.size(); i++){
			PlanWork pw = works.get(i);
			int state = pw.getState();
			
			if(WorkStateUtil.IF_TP(state) || WorkStateUtil.IF_SZ(state) || WorkStateUtil.IF_FW(state)){
				continue;
			}
			
			if(!ifWorkCanAddtoTypelistByNearItemTime(rcfg, witems, pw)){
				continue;
			}
				
			if(wtype == WorkStateUtil.WST_PLAN_LZ){				
				swl.add(pw);	
				
			}else if(wtype == WorkStateUtil.WST_PLAN_DP){
				String sex = WorkStateUtil.WST_SEX_M;
				if(wsex == 1){
					sex = WorkStateUtil.WST_SEX_W;
				}
				
				if(!pw.getSex().equals(sex)){
					continue;
				}
				swl.add(pw);
			}else if(wtype == WorkStateUtil.WST_PLAN_DZ){
				swl.add(pw);							
			}else if(wtype == WorkStateUtil.WST_PLAN_SZ){	
				swl.add(pw);									
			}
		}
		return swl;
	}
	public List<PlanWork> GetModifyTypePlanWorks(int tyy, int wtype, int wsex) throws ParseException{
		
		List<PlanWork> works = planWorkMapper.getAllPlanWorks(Util.getConpnany_Name());
//		srotWorkList(works);
		List<PlanWork> swl = new ArrayList<PlanWork>();

//		List<WaiterItem> witems = waiterItemMapper.getAllWaiterItem(Util.getConpnany_Name());
		for(int i=0; i<works.size(); i++){
			PlanWork pw = works.get(i);
			int state = pw.getState();
			
			if(WorkStateUtil.IF_TP(state)){
				continue;
			}
			swl.add(pw);
		}
		return swl;
	}
	//是否在规定时间内有钟
	public boolean ifWorkCanAddtoTypelistByNearItemTime(RoundsConfig rcfg, List<WaiterItem> witems, PlanWork pw) throws ParseException{
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();

    	for(int i=0; i<witems.size(); i++){
    		WaiterItem wm = witems.get(i);
    		if(pw.getHid() == wm.getHid()){
    			if(wm.getWorkstate() >= WaiterStateUtil.SST_SZ_MIN && wm.getWorkstate() < WaiterStateUtil.SST_FW_FINISH){
    				return false;
    			}
    			else if(wm.getWorkstate() < WaiterStateUtil.SST_SZ_MIN)
    			{
    				Date wdate = null;
    				if(wm.getWaittime() != null){
    					wdate = ft.parse(wm.getWaittime());
    				}
    				if(wdate != null){
    					long tq = (wdate.getTime() - date.getTime())/(60*1000);
    					if(tq < rcfg.getYuezhong_tiqian()){
    						return false;
    					}
    				}
    			}
    		}
    		
    	}
		return true;
	}
	public void ResetPlanWorksTurn() throws ParseException{
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	CfgDaySet cds = cfgDaySetMapper.getDaySetConfig(Util.getConpnany_Name());
    	
    	//判断是否是同一天
    	Date cdsdate = null;   	
    	if(cds!=null && cds.getRoundsetlasttime()!=null){
			cdsdate =ft.parse(cds.getRoundsetlasttime());
    	}
    	
    	Date ndsdate = null;
    	if(cds!=null && cds.getNewDayTime()!=null){
    		
			String td = dstr.substring(0, 10) ;
			String tt = cds.getNewDayTime().substring(10);
			ndsdate =ft.parse(td+tt);
			
    	}
    	//
    	if(ndsdate!=null && cdsdate!=null){
    		if(cdsdate.getTime()<ndsdate.getTime() && ndsdate.getTime() < date.getTime()){
    			//过了最后营业时间 需要重置轮数
    			List<PlanWork> apl = planWorkMapper.getAllPlanWorks(Util.getConpnany_Name());
    			
    			for(int i=0; i<apl.size(); i++){
    				apl.get(i).setRound(0);
    				apl.get(i).setSdx(i);
    				apl.get(i).setSdxlast(i);
    				apl.get(i).setDayidOfsdxMov("");
    			}
    			planWorkMapper.updateListPlanWorksByHidSelective(apl, Util.getConpnany_Name());
    			cds.setRoundsdx(apl.size());
    	    	cds.setRoundsetlasttime(dstr);
    	    	cfgDaySetMapper.updateDaySetByIdSelective(cds, Util.getConpnany_Name());
    		}
    	}
	}
	public int updateListPlanWorksByHidSelective(List<PlanWork> apl, String company){
		return planWorkMapper.updateListPlanWorksByHidSelective(apl, company);
	}
	public void srotWorkList(List<PlanWork> apl){
		int allnum = apl.size();
		Collections.sort(apl, new Comparator<Object>() {
			public int compare(Object a, Object b) {
				PlanWork p1 = (PlanWork) a;
				PlanWork p2 = (PlanWork) b;
				int orderA = p1.getSdx();
				int orderB = p2.getSdx();
				
				return orderA - orderB;
				
			}
		});
	}
	
	public List<PlanWork> getAllPlanWorksAtTurn() throws ParseException{
		ResetPlanWorksTurn();
		return getAllPlanWorksAtTurnNoReset();
	}
	
	public List<PlanWork> getAllPlanWorksAtTurnNoReset() throws ParseException{
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
		List<PlanWork> apl = planWorkMapper.getAllPlanWorks(Util.getConpnany_Name());
		
		return apl;
	}
	public List<PlanWork> getPlanWorksInIds(List<Long> ids){
		return planWorkMapper.getPlanWorksInIds(ids);
	}
	public Integer addPlanWorksByList(PlanWork[] record){
    	int delnum = planWorkMapper.truncatePlanWorks(Util.getConpnany_Name());
//    	if(delnum != record.length){
//    		return -3;
//    	}
    	return planWorkMapper.addPlanWorks(record, Util.getConpnany_Name());
    }
	
	public List<PlanExcItem> getAllPlanExcItems(){
		return planExcItemMapper.getAllPlanExcItems(Util.getConpnany_Name());
	}
	
	public List<PlanExcItem> getPlanExcItemsByHid(long hid){
		return planExcItemMapper.getPlanExcItemsByHid(hid, Util.getConpnany_Name());
	}
	
	public List<PlanExcItem> getPlanExcItemsByHid(long hid, String companyname){
		return planExcItemMapper.getPlanExcItemsByHid(hid, companyname);
	}
	
	public boolean addExcItemByList(long hid, PlanExcItem[] record){
		int num = planExcItemMapper.deleteExcItemByHid(hid, Util.getConpnany_Name());
		
		return planExcItemMapper.addExcItemByList(record, Util.getConpnany_Name()) == record.length;
	}
	
	public RoundsConfig getRoundsConfig(){
		return roundsConfigMapper.getRoundsConfig(Util.getConpnany_Name());
	}
	
	public boolean addRoundsConfig(RoundsConfig record){
		return roundsConfigMapper.insertRoundsConfig(record, Util.getConpnany_Name()) == 1;
	}
	public boolean updateRoundsConfig(RoundsConfig record){
		return roundsConfigMapper.updateRoundsConfigByIDSelective(record, Util.getConpnany_Name()) == 1;
	}
	
	public PlanWork getPlanWorkByHid(long hid){
		return planWorkMapper.getPlanWorkByHid(hid, Util.getConpnany_Name());
	}
	
	public PlanWork getPlanWorkByHid(PlanWork pwk){
		return planWorkMapper.getPlanWorkByHid(pwk.getHid(), Util.getConpnany_Name());
	}
	
	public int setWorkTpFp(PlanWork pwk){
		if(WorkStateUtil.IF_TP(pwk.getState()))//停牌
		{
			PlanWork oldpwk = planWorkMapper.getPlanWorkByHid(pwk.getHid(), Util.getConpnany_Name());
			if(oldpwk == null){
				return -1;
			}
			if(!WorkStateUtil.IF_KX(oldpwk.getState()) ){
				return -2;
			}
		}
		if(WorkStateUtil.IF_KX(pwk.getState()))//上牌
		{
			PlanWork oldpwk = planWorkMapper.getPlanWorkByHid(pwk.getHid(), Util.getConpnany_Name());
			if(oldpwk == null){
				return -3;
			}
			if(!WorkStateUtil.IF_TP(oldpwk.getState()) ){
				return -4;
			}
			
			int nsdx = wiService.moveWorksSdx();
			if(nsdx == -4){
				return -2;
			}
			pwk.setSdxlast(nsdx);
			pwk.setSdx(nsdx);
			pwk.setRound(0);
		}
		return planWorkMapper.updatePlanWorksByHidSelective(pwk, pwk.getHid(), Util.getConpnany_Name());
	}
	public int updatePlanWorksByHidSelective(PlanWork pwk){
		return planWorkMapper.updatePlanWorksByHidSelective(pwk, pwk.getHid(), Util.getConpnany_Name());
	}
	public List<PlanWork> GetYuyuePlanWorks(String companyname)
	{
		
		List<PlanWork> works = planWorkMapper.getAllPlanWorks(companyname);
//		srotWorkList(works);
		List<PlanWork> swl = new ArrayList<PlanWork>();
		for(int i=0; i<works.size(); i++){
			PlanWork pw = works.get(i);
			if(!WorkStateUtil.IF_TP(pw.getState()) ){
				swl.add(pw);
			}
		}
		return swl;
		
	}
	
	public List<WaiterItem> getWaiterItemsByHid(String companyname, Long hid){
		return waiterItemMapper.getWaiterItemsByHid(hid, companyname);
	}
	
	public List<PlanWork> GetNowCanPlanWorks(String companyname) throws ParseException{
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	
    	//判断是否在加班时段
    	String dstr = ft.format(date.getTime());
    	String td = dstr.substring(11, 16) ;
    	String jstr1 = "2000-01-01 "+td+":00";
    	String jstr2 = "2000-01-02 "+td+":00";

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
		}
		
		return swl;
	}
	
	
	public int addNewWorkExtraRecord(WorkExtra workextra, String company)
	{
		return planWorkMapper.addNewWorkExtraRecord(workextra, company);
	}
	
	public List<WorkExtra> getWorkExtraByHid(Long hid, String company)
	{
		return planWorkMapper.getWorkExtraByHid(hid, company);
	}
	
	public int setMyWorkextraisworkByTimesec(Long hid, SpeTimesec tms, int iswork, String company)
	{
		WorkExtra wet = planWorkMapper.getWorkExtraByHidAndTmid(hid, tms.getId(),  company);
		if(wet == null){
			WorkExtra nwet = new WorkExtra();
			nwet.setHid(hid);
			nwet.setTmid(tms.getId());
			nwet.setTmname(tms.getName());
			nwet.setIswork(iswork);
			int inum = planWorkMapper.addNewWorkExtraRecord(nwet, company);
			if(inum != 1){
				return -1;
			}
		}
		else
		{
			WorkExtra nwet = new WorkExtra();
			nwet.setHid(hid);
			nwet.setTmid(tms.getId());
			nwet.setTmname(tms.getName());
			nwet.setIswork(iswork);
			int unum = planWorkMapper.updateWorkExtraIsworkByhidAndTmid(nwet, company);
			if(unum != 1){
				return -2;
			}
		}
		
		return 1;
	}
}
