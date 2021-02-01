package com.aikang.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.CfgDaySet;
import com.aikang.Bean.GukeBills;
import com.aikang.Bean.GukePayTradeRecord;
import com.aikang.Bean.GukeShopings;
import com.aikang.Bean.HuiYuan;
import com.aikang.Bean.HuiYuanType;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.WaiterItem;
import com.aikang.controller.ShopManager.ShopManager;
import com.aikang.mapper.CfgDaySetMapper;
import com.aikang.mapper.GukeBillsMapper;
import com.aikang.mapper.HuiYuanMapper;
import com.aikang.mapper.WaiterItemMapper;
import com.aikang.utils.PlanworkUtil;
import com.aikang.utils.Util;
import com.aikang.utils.WaiterStateUtil;
import com.fasterxml.jackson.core.JsonProcessingException;

@Service
@Transactional(rollbackFor=Exception.class)
public class GukeBillsService {

	@Autowired
	GukeBillsMapper gukeBillsMapper;
	
	@Autowired  
	CfgDaySetMapper cfgDaySetMapper;
	
	@Autowired
	WaiterItemMapper waiterItemMapper;
	
	@Autowired
	HuiYuanMapper huiYuanMapper;
	
	public int makeShopingsByGuke(GukeShopings shopings){
		return gukeBillsMapper.insertShopData(shopings);
	}
	
	public int makeListShopingsByGuke(GukeShopings[] shopingslist){
		return gukeBillsMapper.insertShopDataList(shopingslist);
	}
	
	public List<GukeShopings> getShopDataByGukeID(long gukid, String company, int workstate1,  int workstate2){
		return gukeBillsMapper.getShopDataByGukeID(gukid, company, workstate1, workstate2);
	}
	
	public List<GukeShopings> getShopDataByGukeIDSortByBillNumber(long gukid, String company, int workstate1,  int workstate2){
		return gukeBillsMapper.getShopDataByGukeIDSortByBillNumber(gukid, company, workstate1, workstate2);
	}
	
	public List<GukeShopings> getCompanyShopDataSortByBillNumber(String company, int workstate1,  int workstate2){
		return gukeBillsMapper.getCompanyShopDataSortByBillNumber(company, workstate1, workstate2);
	}
	
	public List<GukeShopings> getHistorygetShopDataByGukeIDSortByBillNumber(long gukid, String company, int workstate1,  int workstate2){
		return gukeBillsMapper.getHistorygetShopDataByGukeIDSortByBillNumber(gukid, company, workstate1, workstate2);
	}
	public List<GukeShopings> getHistorygetShopDataDetailByGukeIDAndBillNumber(long gukid, String company, String billnumber, int workstate1,  int workstate2){
		return gukeBillsMapper.getHistorygetShopDataDetailByGukeIDAndBillNumber(gukid, company, billnumber, workstate1, workstate2);
	}
	public List<Map<String, Object>> getSimpHistoryShopDataByGukeIDAndGroupSortByDate(long gukid, String company){
		return gukeBillsMapper.getSimpHistoryShopDataByGukeIDAndGroupSortByDate(gukid, company);
	}
	
	public List<Map<String, Object>> getShopDataByGukeIDGroup(long gukid, String company, int workstate1,  int workstate2){
		return gukeBillsMapper.getShopDataByGukeIDGroup(gukid, company, workstate1, workstate2);
	}
	
	public List<GukeShopings> getShopDataByBillNumberAndCompany(String billnumber, String company ){
		return gukeBillsMapper.getShopDataByBillNumberAndCompany(billnumber, company);
	}
	public GukeShopings getShopDataBySerinumberAndCompany(String serinumber, String company ){
		return gukeBillsMapper.getShopDataBySerinumberAndCompany(serinumber, company);
	}
	
	public List<GukeShopings> getShopDataByBillNumber(String billnumber){
		return gukeBillsMapper.getShopDataByBillNumber(billnumber);
	}
	
	public GukeShopings getShopDataByID(long id){
		return gukeBillsMapper.getShopDataByID(id);
	}
	public int updateShopByPrimaryKeySelective(GukeShopings gs)
	{
		return gukeBillsMapper.updateShopByPrimaryKeySelective(gs);
	}
	public int updateShoplistBillnumber(List<GukeShopings> lgs){
		return gukeBillsMapper.updateShopListBillNumberByIdSelective(lgs);
	}
	public int deleteShopDataByID(long id){
		return gukeBillsMapper.deleteShopDataByID(id);
	}
	
	public int deleteShopDataByIDAndGID(long id, long gukid){
		return gukeBillsMapper.deleteShopDataByIDAndGID(id, gukid);
	}
	
	public int deleteShopDataByGID(long gukid, int workstate, int paystate){
		return gukeBillsMapper.deleteShopDataByGID(gukid, workstate, paystate);
	}
	
	public int makeShopByGuke(GukeShopings order) throws ParseException
	{
			
		return gukeBillsMapper.insertShopData(order);
	}
	
	public GukeBills makeOrderByGuke(GukeBills order) throws ParseException
	{
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	CfgDaySet cds = cfgDaySetMapper.getDaySetConfig(order.getCompany());
    	
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
    	
    	WaiterItem witem = new WaiterItem();
    	witem.setMaketime(dstr);
    	witem.setDayid(daynumlast+""+dayid);
    	witem.setDaynum(daynumlast);
    	if(order.getHid()==null || order.getHid()<= 0){
    		witem.setWorkstate(WaiterStateUtil.SST_WF_MIN);
		}else{
			Date wdate = null;
			if(witem.getWaittime() != null){
				wdate =ft.parse(order.getWaittime());
			}
			if(wdate != null && (wdate.getTime() - date.getTime()) > 10*60*1000)
			{
				witem.setWorkstate(WaiterStateUtil.SST_YY_WAIT);
			}else{
				witem.setWorkstate(WaiterStateUtil.SST_HJ_MIN);
			}
		}
    	witem.setMaketime(dstr);
    	witem.setDayid(daynumlast+""+dayid);
    	witem.setDaynum(daynumlast);

		
		return order;
	}
	public List<GukeBills> getAllWBillItem(){
		return gukeBillsMapper.getAllWBillItem();
	}
	
	public List<GukeBills> getBillItemsByKid(int kid){
		return gukeBillsMapper.getBillItemsByKid(kid);
	}
	
	public int insertWBillItems(GukeBills[] record){
		return gukeBillsMapper.insertWBillItems(record);
	}
	
	public int updateByPrimaryKeySelective(GukeBills record){
		return gukeBillsMapper.updateByPrimaryKeySelective(record);
	}
	
	public int insertGukePayTradeRecord(GukePayTradeRecord record){
		return gukeBillsMapper.insertGukePayTradeRecord(record);
	}
	
	public int UpdateAddShopItemAndDoWork(List<GukeShopings> ags){
		if(ags == null || ags.size() <=0 ){
			return -1;
		}
		List<WaiterItem> ows = waiterItemMapper.getCompanyWaiterItemByBillnumber(ags.get(0).getBillnumber(), ags.get(0).getCompany());
		if(ags == null || ags.size() <=0 ){
			return -2;
		}
		
		WaiterItem[] record = new WaiterItem[ags.size()];
		for (int i = 0; i < ags.size(); i++) {
      	   record[i] = new WaiterItem();
      	   GukeShopings gs = ags.get(i);
      	   WaiterItem owi = ows.get(0);
      	   for(int w=0; w<ows.size(); w++){
      		 if(ows.get(w).getGukeidx() == gs.getGukeidx()){
      			owi = ows.get(w);
      			break;
      		 }
      	  }
      	  PlanworkUtil.CopyGsToWi(record[i], gs, owi);
        }
		int ugs = gukeBillsMapper.updateShopListBillNumberByIdSelective(ags);
		int uwi = waiterItemMapper.insertWaiterItem(record, ags.get(0).getCompany());
		if(ugs != uwi){
			return -3;
		}
		return 0;
	}
	
	public int  ShopGukeSelHuiYuanToPan(
			HttpServletRequest request, HttpServletResponse response,
			List<GukeShopings> lgs, HuiYuan hy, HuiYuanType hyt,
			ServiceItemService stemService, 
			PlanWorkService planWorkService,
			CfgDaySetMapper cfgDaySetMapper,
			WaiterItemService wiService) throws JsonProcessingException, ParseException{
		
		int ret = 0;
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	
    	double priceyf = 0;
		for(int i=0; i<lgs.size(); i++){
			if(lgs.get(i).getPaystate() > 0)
			{
				continue;
			}
			priceyf += lgs.get(i).getItembillyf()*hyt.getDisrate();
		}
		if(priceyf == 0){
    		return -1;
		}
		
		
     	int find = 0;
     	 for (int i = 0; i < lgs.size(); i++)
     	 {
     		 if(lgs.get(i).getWorkstate()>=2 && lgs.get(i).getPaystate()>0)
     		 {
     			 find = 1;
     		 }
     	 }
     	 if(find == 0)
     	 {
     		 //完全是新单 店内下单排钟
     		  double kcmoney = 0;
     		  for (int i = 0; i < lgs.size(); i++) {
            	  lgs.get(i).setPaystate(1);
            	  lgs.get(i).setWorkstate(2);
            	  lgs.get(i).setChecktime(dstr);
            	  
            	  lgs.get(i).setPayid(hy.getId());   
            	  lgs.get(i).setItembillzk(hyt.getDisrate());
            	  lgs.get(i).setItembillyf(lgs.get(i).getItembillyf()*hyt.getDisrate());     	  
            	  lgs.get(i).setPaynum(lgs.get(i).getItembillyf());
            	  
            	  kcmoney += lgs.get(i).getItembillyf();
            	  lgs.get(i).setHyrmoney(hy.getRmoney() - kcmoney);
            	  lgs.get(i).setMemid(hy.getId());
            	  lgs.get(i).setMemname(hy.getHycname());
            	  lgs.get(i).setMemcode(hy.getSeriid());
              }
     		  String rc = ShopManager.checkedMakeitemAndPlanworkwork(request, response, lgs, stemService, planWorkService, cfgDaySetMapper, wiService);
     		  if(!rc.equals("ok")){
     			 ret = -3;
     		  }
     	  }else{
     		  //后面增加的单
     		  double kcmoney = 0;
     		  List<GukeShopings> plgs = new ArrayList<GukeShopings>();
     		  for (int i = 0; i < lgs.size(); i++) {
     			  if(lgs.get(i).getPaystate()>0){
     				  continue;
     			  }
	            	  lgs.get(i).setPaystate(1);
	            	  lgs.get(i).setWorkstate(2);
	            	  lgs.get(i).setChecktime(dstr);
	            	  lgs.get(i).setPayid(hy.getId());
	            	  lgs.get(i).setPaynum(lgs.get(i).getItembillyf()*hyt.getDisrate());
	            	  lgs.get(i).setItembillyf(lgs.get(i).getPaynum());
	            	  lgs.get(i).setItembillzk(hyt.getDisrate());
	            	  kcmoney += lgs.get(i).getItembillyf();
	            	  lgs.get(i).setHyrmoney(hy.getRmoney() - kcmoney);
	            	  lgs.get(i).setMemid(hy.getId());
	            	  lgs.get(i).setMemname(hy.getHycname());
	            	  lgs.get(i).setMemcode(hy.getSeriid());
	            	  
	            	  plgs.add(lgs.get(i));
               }
               int pn = UpdateAddShopItemAndDoWork(plgs);
               if(pn != 0){
            	   ret = -2;
       		  }    
     	  }
     	double rm = hy.getRmoney() - priceyf;
		hy.setRmoney(rm);
		HuiYuan hyr = new HuiYuan();
		hyr.setId(hy.getId());
		hyr.setRmoney(rm);
		int h = huiYuanMapper.updateHuiYuanByPrimaryKeySelective(hyr);
		if(h != 1){
			ret = -4;
		}
     	return ret;
	}
}
