package com.aikang.controller.ShopManager;

import java.io.IOException;
import java.net.URLDecoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.SortedMap;
import java.util.TreeMap;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jdom2.JDOMException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.CfgDaySet;
import com.aikang.Bean.Company;
import com.aikang.Bean.CompanyOfen;
import com.aikang.Bean.CronTask;
import com.aikang.Bean.GukeBills;
import com.aikang.Bean.GukeShopings;
import com.aikang.Bean.HuiYuan;
import com.aikang.Bean.HuiYuanType;
import com.aikang.Bean.MoneyChannel;
import com.aikang.Bean.PlanExcItem;
import com.aikang.Bean.PlanWork;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.TeleVerify;
import com.aikang.Bean.User;
import com.aikang.Bean.WaiterItem;
import com.aikang.SmsUtil.CODETYPE;
import com.aikang.SmsUtil.WXSmsSendUtil;
import com.aikang.mapper.CfgDaySetMapper;
import com.aikang.mapper.CronTaskMapper;
import com.aikang.mapper.WaiterItemMapper;
import com.aikang.service.CompanyService;
import com.aikang.service.GukeBillsService;
import com.aikang.service.HuiYuanService;
import com.aikang.service.MoneyChannelService;
import com.aikang.service.PlanWorkService;
import com.aikang.service.RoomService;
import com.aikang.service.ServiceItemService;
import com.aikang.service.UserService;
import com.aikang.service.WaiterItemService;
import com.aikang.utils.MClUtil;
import com.aikang.utils.PlanworkUtil;
import com.aikang.utils.PriceUtil;
import com.aikang.utils.Util;
import com.aikang.utils.WorkStateUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.wxpay.util.HttpUtil;
import com.wxpay.util.MD5Util;
import com.wxpay.util.PayConfigUtil;
import com.wxpay.util.PayToolUtil;
import com.wxpay.util.XMLUtil4jdom;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/ShopInfo")
public class ShopManager {
	
	@Autowired
	UserService uService;
	
	@Autowired
	WaiterItemService wiService;
	
	@Autowired
	RoomService roomService;
	
	@Autowired
	ServiceItemService stemService;
	
	@Autowired
	PlanWorkService planWorkService;
	
	@Autowired
	GukeBillsService gukeBillsService;
	
	
	@Autowired  
	CfgDaySetMapper cfgDaySetMapper;
	
	@Autowired
	WaiterItemMapper waiterItemMapper;
	
	@Autowired
	MoneyChannelService moneyChannelService;
	
	@Autowired
	HuiYuanService huiYuanService;
	
	
	@Autowired 
	CompanyService companyService;
	
	@RequestMapping("/GetHistoryGoInfo")
    @ResponseBody
    public String GetHistoryGoInfo(@RequestBody Map<String, String> company, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<Map<String, Object>> chlist = companyService.getUserOfenCompanyByUsername(u.getUsername(), 0, 3);
		
    	if(chlist != null && chlist.size()>0){
    		Map<String,Object> _map = new HashMap<String,Object>();//
    		_map.put("msg", "ofen");
    		_map.put("ol", chlist);
    		RespBean ok = RespBean.ok("/ShopInfo/GetHistoryGoInfo", _map);
    	    String s = Util.setResponseToClientString(request, response, ok);
    	    return s;
    	}
    	List<Map<String, Object>> cllist = companyService.getCompanyByGuessGukeLike("", 0, 3);
    	if(cllist != null && cllist.size()>0){
    		Map<String,Object> _map = new HashMap<String,Object>();//
    		_map.put("msg", "like");
    		_map.put("ol", cllist);
    		RespBean ok = RespBean.ok("/ShopInfo/GetHistoryGoInfo", _map);
    	    String s = Util.setResponseToClientString(request, response, ok);
    	    return s;
    	}
    	RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得门店信息!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	@RequestMapping("/SerachCompanyGoInfo")
    @ResponseBody
    public String SerachCompanyGoInfo(@RequestBody Map<String, String> company, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String key = company.get("key");
		key = Util.cleanXSS(key);
		System.out.println("SerachCompanyGoInfo =====D key = "+key);
    	List<Map<String, Object>> cllist = companyService.getCompanyByGuessGukeLike(key, 0, 3);
    	if(cllist != null){
    		Map<String,Object> _map = new HashMap<String,Object>();//
    		_map.put("msg", "serach");
    		_map.put("ol", cllist);
    		RespBean ok = RespBean.ok("/ShopInfo/SerachCompanyGoInfo", _map);
    	    String s = Util.setResponseToClientString(request, response, ok);
    	    return s;
    	}
    	RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得门店信息!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	@RequestMapping("/GetShopInfo")
    @ResponseBody
    public String getSortAllItem(@RequestBody Map<String, String> company, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String cname = company.get("name");
		cname = Util.cleanXSS(cname);
		Company cm = companyService.getCompanyByUsername(cname);
    	if(cm == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取门店信息出错!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		List<ServiceItem> sItems = stemService.getEnabledAllGukeShopServiceItems(null, cname);
		if(sItems == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取项目信息失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		if(sItems.isEmpty()){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有可用项目信息!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
		CompanyOfen cofold = companyService.getGukeOfenDataByCompanyAndUsername(cname, u.getUsername());
		if(cofold != null){
			cofold.setLasttime(dstr);
			companyService.updateGukeCompanyOfenDataByIDSelective(cofold);
		}else{

	    	String serinumber = u.getId()+""+date.getTime() +"000"+ Util.randomString(8);
			CompanyOfen cof = new CompanyOfen();
			cof.setCompany(cname);
			cof.setUsername(u.getUsername());
			cof.setSeriid(serinumber);
			cof.setLasttime(dstr);
			int c = companyService.insertGukeOfenInfo(cof);
		}
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("sl", sItems);
		_map.put("cm", cm);
		RespBean ok = RespBean.ok("/ShopInfo/GetShopInfo", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	
	@RequestMapping("/GetCanWorkerList")
    @ResponseBody
    public String GetCanWorkerList(@RequestBody Map<String, String> company, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		String cname = company.get("name");
		cname = Util.cleanXSS(cname);
		
		List<PlanWork> swl = planWorkService.GetYuyuePlanWorks(cname);
		
		RespBean ok = RespBean.ok("/ShopInfo/GetCanWorkerList", swl);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/GetThisWorkerOrderList")
    @ResponseBody
    public String GetThisWorkerOrderList(@RequestBody Map<String, String> company, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		String cname = company.get("name");
		cname = Util.cleanXSS(cname);
		String shid = company.get("hid");
		long hid = Long.parseLong(shid ); 
		List<WaiterItem> swl = planWorkService.getWaiterItemsByHid(cname, hid);
		
		RespBean ok = RespBean.ok("/ShopInfo/GetThisWorkerOrderList", swl);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	@RequestMapping("/MakeShop")
    @ResponseBody
    public String MakeShop(@RequestBody GukeShopings gshop, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		int find = 0;
		Long hid = gshop.getHid();
		String company = gshop.getCompany();
		if(hid > 0)
		{
			List<PlanExcItem> lpm = planWorkService.getPlanExcItemsByHid(hid,company);
			
			for(int i=0; i<lpm.size(); i++){
				if(lpm.get(i).getSid() == gshop.getSid()){
					find = 1;
				}
			}
		}
		if(find == 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "抱歉! 所点选的技师，不能做这个服务项目!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		long kid = u.getId();
		gshop.setKid(kid);
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	gshop.setMaketime(dstr);
    	gshop.setWorkstate(0);
    	gshop.setOrdertype(100);
    	String serinumber = kid+""+date.getTime() +"000"+ Util.randomString(8);
    	gshop.setSerinumber(serinumber);
    	
    	String dstrnum = dstr.substring(0,4)+dstr.substring(5,7)+dstr.substring(8,10);
		int daynum = Integer.valueOf(dstrnum);
		gshop.setDaynumber(daynum);
		String sbillnumber = u.getId() + "" +date.getTime() + "000";
		gshop.setBillnumber(sbillnumber);
		double bill = 0;
		List<ServiceItem> sItems = stemService.getEnabledAllServiceItems(null, company);
		if(sItems == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "遇到问题， 无法获取项目组!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		
		ServiceItem sitem = PlanworkUtil.getItemlongBySid(sItems, gshop.getSid());
		if(sitem == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "遇到问题， 项目信息无法获取!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		bill = gshop.getClocknumyy() * sitem.getPrice();
		gshop.setItembillys(bill);
		gshop.setItembillzk(1.0);
		gshop.setItembilljm(0.0);
		gshop.setItembilldk(0.0);
		gshop.setItembillyf(PriceUtil.getFinalPrice(gshop));
		
		if(gukeBillsService.makeShopByGuke(gshop) != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "添加服务失败，请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<GukeShopings> lgs = gukeBillsService.getShopDataByGukeID(u.getId(), gshop.getCompany(), 0, 0);
		RespBean ok = RespBean.ok("/ShopInfo/MakeShop", lgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/AddShopFor")
    @ResponseBody
    public String AddShopFor(@RequestBody GukeShopings gshop, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<GukeShopings> olgs = gukeBillsService.getShopDataByBillNumber(gshop.getBillnumber());
		if(olgs == null || olgs.size() <=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有已存在的订单可以附加!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(olgs.get(0).getWorkstate() != 2){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本阶段不可以附加新项!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<WaiterItem> ows = waiterItemMapper.getCompanyWaiterItemByBillnumber(olgs.get(0).getBillnumber(), olgs.get(0).getCompany());
		if(ows == null || ows.size() <=0 ){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "单据异常 无法添加!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		Long hid = -1l;
		for(int w=0; w<ows.size(); w++){
  		 if(ows.get(w).getGukeidx() == gshop.getGukeidx()){
  			hid = ows.get(w).getHid();
  			break;
  		 }
      	  

        }
		int find = 0;
		String company = gshop.getCompany();
		if(hid > 0)
		{
			List<PlanExcItem> lpm = planWorkService.getPlanExcItemsByHid(hid,company);
			
			for(int i=0; i<lpm.size(); i++){
				if(lpm.get(i).getSid() == gshop.getSid()){
					find = 1;
				}
			}
		}
		if(find == 1){
			//当前服务的技师不能做这个新添加的项目
			//-1001作为特殊的技师id表示当前服务的技师不能做这个新添加的项目
			hid = -1001l;
		}
		
		long kid = u.getId();
		gshop.setKid(kid);
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	gshop.setMaketime(dstr);
    	gshop.setWorkstate(2);
    	gshop.setOrdertype(100);
    	String billnumber = olgs.get(0).getBillnumber();
    	gshop.setBillnumber(billnumber);
    	String serinumber = kid+""+date.getTime() +"000"+ Util.randomString(8);
    	gshop.setSerinumber(serinumber);
		gshop.setDaynumber(olgs.get(0).getDaynumber());

		double bill = 0;
		List<ServiceItem> sItems = stemService.getEnabledAllServiceItems(null, company);
		if(sItems == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "遇到问题， 无法获取项目组!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		
		ServiceItem sitem = PlanworkUtil.getItemlongBySid(sItems, gshop.getSid());
		if(sitem == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "遇到问题， 项目信息无法获取!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		bill = gshop.getClocknumyy() * sitem.getPrice();
		gshop.setItembillys(bill);
		gshop.setItembillzk(1.0);
		gshop.setItembilljm(0.0);
		gshop.setItembilldk(0.0);
		gshop.setItembillyf(PriceUtil.getFinalPrice(gshop));
		if(hid == -1001l){
			gshop.setHid(hid);
		}
		
		if(gukeBillsService.makeShopByGuke(gshop) != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "添加服务失败，请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<GukeShopings> lgs = gukeBillsService.getShopDataByGukeID(u.getId(), gshop.getCompany(), 2, 2);
		RespBean ok = RespBean.ok("/ShopInfo/AddShopFor", lgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/newShopMake")
    @ResponseBody
    public String newShopMake(@RequestBody  Map<String, String> company, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String cname = company.get("name");
		cname = Util.cleanXSS(cname);
		String snum = company.get("num");
		int gknum = Integer.parseInt( snum ); 
		
		List<GukeShopings> lgs = gukeBillsService.getShopDataByGukeID(u.getId(), cname, 0, 1);
		int find = 0;
		for(int i=0; i<lgs.size(); i++){
			GukeShopings gs = lgs.get(i);
			if(gs.getWorkstate() > 0){
				find = 1;
			}
		}
		if(find > 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "已到下单阶段，请继续订单!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		
		}
		int del = gukeBillsService.deleteShopDataByGID(u.getId(), 0, 0);
		if(del != lgs.size()){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "初始化服务失败，请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}

		lgs = gukeBillsService.getShopDataByGukeID(u.getId(), cname, 0, 0);
		RespBean ok = RespBean.ok("/ShopInfo/newShopMake", lgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/GetMakeShopInfo")
    @ResponseBody
    public String GetMakeShopInfo(@RequestBody  Map<String, String> company, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String cname = company.get("name");
		cname = Util.cleanXSS(cname);
		
		List<GukeShopings> lgs = gukeBillsService.getShopDataByGukeID(u.getId(), cname, 0, 2);
		RespBean ok = RespBean.ok("/ShopInfo/GetMakeShopInfo", lgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/GetHistoryShopInfo")
    @ResponseBody
    public String GetHistoryShopInfo(@RequestBody  Map<String, String> company, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String cname = company.get("name");
		cname = Util.cleanXSS(cname);
		List<Map<String, Object>> smap = gukeBillsService.getSimpHistoryShopDataByGukeIDAndGroupSortByDate(u.getId(), cname);
		RespBean ok = RespBean.ok("/ShopInfo/GetHistoryShopInfo", smap);
	    String s = Util.setResponseToClientString(request, response, ok);
	    
//		List<GukeShopings> lmgs = gukeBillsService.getHistorygetShopDataByGukeIDSortByBillNumber(u.getId(), cname, 3, 3);
//		RespBean ok = RespBean.ok("/ShopInfo/GetHistoryShopInfo", lmgs);
//	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	@RequestMapping("/GetHistoryShopInfoDetail")
    @ResponseBody
    public String GetHistoryShopInfoDetail(@RequestBody  Map<String, String> company, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String cname = company.get("name");
		String billnumber = company.get("bill");
		cname = Util.cleanXSS(cname);
	    
		List<GukeShopings> lmgs = gukeBillsService.getHistorygetShopDataDetailByGukeIDAndBillNumber(u.getId(), cname, billnumber, 3, 3);
		RespBean ok = RespBean.ok("/ShopInfo/GetHistoryShopInfoDetail", lmgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	@RequestMapping("/DelShopItem")
    @ResponseBody
    public String DelShopItem(@RequestBody  Map<String, String> item, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String cname = item.get("cname");
		cname = Util.cleanXSS(cname);
		String shid = item.get("shopid");
		int shopid = Integer.parseInt( shid ); 
		int  delnum =  gukeBillsService.deleteShopDataByIDAndGID(shopid, u.getId());
		
		List<GukeShopings> lgs = gukeBillsService.getShopDataByGukeID(u.getId(), cname, 0, 1);
		RespBean ok = RespBean.ok("/ShopInfo/DelShopItem", lgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/DelAddItem")
    @ResponseBody
    public String DelAddItem(@RequestBody  Map<String, String> item, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String cname = item.get("cname");
		cname = Util.cleanXSS(cname);
		String shid = item.get("shopid");
		int shopid = Integer.parseInt( shid ); 
		GukeShopings gs = gukeBillsService.getShopDataByID(shopid);
		if(gs == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这一项!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(gs.getWorkstate() != 2){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本阶段非法操作!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(gs.getPaystate() > 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "已经付款的项目无法删除!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		int  delnum =  gukeBillsService.deleteShopDataByIDAndGID(shopid, u.getId());
		
		List<GukeShopings> lgs = gukeBillsService.getShopDataByGukeID(u.getId(), cname, 2, 2);
		RespBean ok = RespBean.ok("/ShopInfo/DelAddItem", lgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	@RequestMapping("/FreshOrderList")
    @ResponseBody
    public String FreshOrderList(@RequestBody  Map<String, String> item, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		String cname = item.get("cname");
		cname = Util.cleanXSS(cname);
		
		List<GukeShopings> lgs = gukeBillsService.getShopDataByGukeID(u.getId(), cname, 2, 2);
		RespBean ok = RespBean.ok("/ShopInfo/FreshOrderList", lgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	@RequestMapping("/MakeOrder")
    @ResponseBody
    public String MakeOrder(@RequestBody Map<String, String> order, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		String cname = order.get("company");
		cname = Util.cleanXSS(cname);
		//////////////////////////////////////////////////////////////////
		List<GukeShopings> lgs = gukeBillsService.getShopDataByGukeID(u.getId(), cname, 0, 1);
		if(lgs == null || lgs.size() <=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无可用预定!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(lgs.get(0).getWorkstate() >= 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "不可重复下单!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String sbillnumber = u.getId() + "" +new Date().getTime() + Util.randomString(3);
		///更新预订单信息
		for(int i=0; i<lgs.size(); i++){
			GukeShopings gs = lgs.get(i);
			gs.setBillnumber(sbillnumber);
			gs.setWorkstate(1);
		}
		gukeBillsService.updateShoplistBillnumber(lgs);
//		String rets = checkedMakeitemAndPlanworkwork(
//				request, response, 
//				lgs,
//				stemService, 
//				planWorkService, 
//				cfgDaySetMapper,
//				wiService);
//		
//		if(!rets.equals("ok")){
//			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", rets);
//    		String s = Util.setResponseToClientString(request, response, err);
//    		return s;
//		}
		
		RespBean ok = RespBean.ok("/ShopInfo/MakeOrder", lgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/BackToShoping")
    @ResponseBody
    public String BackToShoping(@RequestBody Map<String, String> order, HttpServletRequest request, HttpServletResponse response) throws ParseException, JDOMException, IOException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}

		String cname = order.get("company");
		cname = Util.cleanXSS(cname);
		List<GukeShopings> lgs = gukeBillsService.getShopDataByGukeID(u.getId(), cname, 0, 1);
		if(lgs == null || lgs.size() <=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无可用预定!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		///更新预订单信息
		for(int i=0; i<lgs.size(); i++){
			GukeShopings gs = lgs.get(i);
			gs.setWorkstate(0);
		}
		gukeBillsService.updateShoplistBillnumber(lgs);
		
		RespBean ok = RespBean.ok("/ShopInfo/BackToShoping", lgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	
	@RequestMapping("/GetMyHuiYuanInfo")
    @ResponseBody
    public String GetMyHuiYuanInfo(@RequestBody  Map<String, String> company, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(u.getIsteled() == 0){
			Map<String,Object> _map = new HashMap<String,Object>();//
			_map.put("msg", "needbind");
			_map.put("hl", null);
			RespBean ok = RespBean.ok("/ShopInfo/GetMyHuiYuanInfo", _map);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		String cname = company.get("name");
		
		List<HuiYuan> hyls = huiYuanService.getHuiYuanByPhonecode(u.getTelephone(), cname);
		
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("msg", "ok");
		_map.put("hl", hyls);
		RespBean ok = RespBean.ok("/ShopInfo/GetMyHuiYuanInfo", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	@RequestMapping("/BindTeleVerifySendCode")
    @ResponseBody
    public String BindTeleVerifySendCode(@RequestBody  Map<String, String> info, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String telenumber = info.get("telenumber");
		
		User bu = uService.wselectBy_phone(telenumber);
		if(bu != null && bu.getIsteled() == 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "这个手机号码已被使用!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	
    	TeleVerify tf = null;
    	List<TeleVerify> tfl = uService.getTeleVerfyByUidAndTelenumberAndType(u.getId(), telenumber, CODETYPE.BIND);
		if(tfl != null && tfl.size() > 0){
			tf = tfl.get(0);
		}
    	if(tf != null){
			Date tfdate = ft.parse(tf.getSendtime());  
			long tm = (date.getTime() - tfdate.getTime())/1000;
	    	if(tm < 60){
	    		Map<String,Object> _map = new HashMap<String,Object>();//
				_map.put("msg", "later");
				_map.put("tm", tm);
				RespBean ok = RespBean.ok("/ShopInfo/BindTeleVerifySendCode", _map);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
	    	}
	    	String tcode = "";
			for(int r=0; r<4; r++){
				tcode = tcode + (int)(Math.random()*10);
			}
			TeleVerify tfn = new TeleVerify();
			tfn.setId(tf.getId());
			tfn.setCode(tcode);
			tfn.setSendtime(dstr);
			
			String[] params ={tcode};
			String rmsg = WXSmsSendUtil.SendShortMessageSingle(WXSmsSendUtil.templateId_vericode, telenumber, params);
			if(rmsg.equals("OK")){
				int t = uService.updateTeleCodeByPrimaryKeySelective(tfn);
				if(t !=1){
					RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取验证码错误， 请重试!");
		    		String s = Util.setResponseToClientString(request, response, err);
		    		return s;
				}
				
				Map<String,Object> _map = new HashMap<String,Object>();//
				_map.put("msg", "ok");
				_map.put("tm", 60);
				RespBean ok = RespBean.ok("/ShopInfo/BindTeleVerifySendCode", _map);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "发送验证码错误  ["+rmsg+"]");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}else{
			String tcode = "";
			for(int r=0; r<4; r++){
				tcode = tcode + (int)(Math.random()*10);
			}
			TeleVerify tfn = new TeleVerify();
			tfn.setType(CODETYPE.BIND);
			tfn.setCode(tcode);
			tfn.setTelenumber(telenumber);
			tfn.setUid(u.getId());
			tfn.setSendtime(dstr);
			
			String[] params ={tcode};
			String rmsg = WXSmsSendUtil.SendShortMessageSingle(WXSmsSendUtil.templateId_vericode, telenumber, params);
			if(rmsg.equals("OK")){
				
				int t = uService.insertTeleCode(tfn);
				if(t !=1){
					RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取验证码错误， 请重试!");
		    		String s = Util.setResponseToClientString(request, response, err);
		    		return s;
				}
				
				Map<String,Object> _map = new HashMap<String,Object>();//
				_map.put("msg", "ok");
				_map.put("tm", 60);
				RespBean ok = RespBean.ok("/ShopInfo/BindTeleVerifySendCode", _map);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "发送验证码错误，错误信息是 ["+rmsg+"]");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
	}
	
	
	@RequestMapping("/BindTeleVerifyBindByCode")
    @ResponseBody
    public String BindTeleVerifyBindByCode(@RequestBody  Map<String, String> info, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String telenumber = info.get("telenumber");
		String code = info.get("code");

		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	
    	TeleVerify tf = null;
    	List<TeleVerify> tfl = uService.getTeleVerfyByUidAndTelenumberAndType(u.getId(), telenumber, CODETYPE.BIND);
    	if(tfl != null && tfl.size() > 0){
			tf = tfl.get(0);
		}
    	if(tf == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "还未发送验证码！ ");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
    	if(!tf.getCode().equals(code)){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "验证码错误！ ");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
    	Date tfdate = ft.parse(tf.getSendtime());  
		long tm = (date.getTime() - tfdate.getTime())/1000;
    	if(tm > 5*60){
    		Map<String,Object> _map = new HashMap<String,Object>();//
			_map.put("msg", "overtime");
			RespBean ok = RespBean.ok("/ShopInfo/BindTeleVerifyBindByCode", _map);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
    	}
    	
    	User uu = new User();
    	uu.setId(u.getId());
    	uu.setIsteled(1);
    	uu.setTelephone(telenumber);
    	
    	int pu = uService.wupdateByPrimaryKeySelective(uu);
    	if(pu != 1){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "手机号码板顶失败，请重试！ ");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
    	
    	Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("msg", "ok");
		RespBean ok = RespBean.ok("/ShopInfo/BindTeleVerifyBindByCode", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}

	@RequestMapping("/RequestMoneyChannel")
    @ResponseBody
    public String RequestMoneyChannel(@RequestBody Map<String, String> order, HttpServletRequest request, HttpServletResponse response) throws ParseException, JDOMException, IOException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}

		String cname = order.get("company");
		String sbillnumber = order.get("billnumber");
		String type = order.get("type");
		cname = Util.cleanXSS(cname);
		List<GukeShopings> lgs = gukeBillsService.getShopDataByBillNumberAndCompany(sbillnumber, cname);
		if(lgs == null || lgs.size() <=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无可用预定!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		double priceyf = 0;
		for(int i=0; i<lgs.size(); i++){
			if(lgs.get(i).getPaystate() > 0)
			{
				continue;
			}
			priceyf += lgs.get(i).getItembillyf();
		}
		if(priceyf == 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本单已结清!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(!type.equals("wxpay") && !type.equals("alpay")){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "暂无这个付款类型!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		MoneyChannel mcl = moneyChannelService.getCompanyMoneyChannelByChannelName(type, priceyf, cname);
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	
		if(mcl != null){
			Date mdate = ft.parse(mcl.getBlocktime());
			if(mcl.getBlockkid() == u.getId()){
				
				if(date.getTime() - mdate.getTime() < MClUtil.CHANNEL_BLOCK_TIME*1000){
					Map<String,Object> _map = new HashMap<String,Object>();//
					_map.put("suc", "ok");
					_map.put("msg", "oldpass");
					_map.put("rl", mcl);
					
					RespBean ok = RespBean.ok("/ShopInfo/RequestMoneyChannel", _map);
				    String s = Util.setResponseToClientString(request, response, ok);
				    return s;
				}else{
					mcl.setBlocktime(dstr);
					mcl.setBlockbillnumber(sbillnumber);
					mcl.setBlockbillprice(priceyf);
					int um = moneyChannelService.updateMoneyChannelByIDSelective(mcl);
					
					Map<String,Object> _map = new HashMap<String,Object>();//
					_map.put("suc", "ok");
					_map.put("msg", "oldnow");
					_map.put("rl", mcl);
					
					RespBean ok = RespBean.ok("/ShopInfo/RequestMoneyChannel", _map);
				    String s = Util.setResponseToClientString(request, response, ok);
				    return s;
				}
			}else{
				if(date.getTime() - mdate.getTime() < MClUtil.CHANNEL_BLOCK_TIME*1000){
					if(mcl.getIsblock() == 1){
						Map<String,Object> _map = new HashMap<String,Object>();//
						_map.put("suc", "no");
						_map.put("msg", "block");
						_map.put("rl", mcl);
						
						RespBean ok = RespBean.ok("/ShopInfo/RequestMoneyChannel", _map);
					    String s = Util.setResponseToClientString(request, response, ok);
					    return s;
					}else{
						mcl.setBlocktime(dstr);
						mcl.setBlockkid(u.getId());
						mcl.setBlockbillnumber(sbillnumber);
						mcl.setBlockbillprice(priceyf);
						mcl.setIsblock(1);
						mcl.setBlocktype(0);
						moneyChannelService.updateMoneyChannelByIDSelective(mcl);
						
						Map<String,Object> _map = new HashMap<String,Object>();//
						_map.put("suc", "ok");
						_map.put("msg", "oldnow");
						_map.put("rl", mcl);
						
						RespBean ok = RespBean.ok("/ShopInfo/RequestMoneyChannel", _map);
					    String s = Util.setResponseToClientString(request, response, ok);
					    return s;
					}
				}else{
					mcl.setBlocktime(dstr);
					mcl.setBlockkid(u.getId());
					mcl.setBlockbillnumber(sbillnumber);
					mcl.setBlockbillprice(priceyf);
					mcl.setIsblock(1);
					mcl.setBlocktype(0);
					moneyChannelService.updateMoneyChannelByIDSelective(mcl);
					
					Map<String,Object> _map = new HashMap<String,Object>();//
					_map.put("suc", "ok");
					_map.put("msg", "oldnow");
					_map.put("rl", mcl);
					
					RespBean ok = RespBean.ok("/ShopInfo/RequestMoneyChannel", _map);
				    String s = Util.setResponseToClientString(request, response, ok);
				    return s;
				}
			}
		}
		else
		{
			MoneyChannel nml = new MoneyChannel();
			nml.setCompany(cname);
			nml.setChannelname(type);
			nml.setBlockbillnumber(sbillnumber);
			nml.setBlockkid(u.getId());
			nml.setBlocktime(dstr);
			nml.setIsblock(1);
			nml.setBlocktype(0);
			nml.setBlockbillprice(priceyf);
			
			int add = moneyChannelService.addMoneyChannel(nml);
			if(add == 1){
				Map<String,Object> _map = new HashMap<String,Object>();//
				_map.put("suc", "ok");
				_map.put("msg", "newadd");
				_map.put("rl", nml);
				
				RespBean ok = RespBean.ok("/ShopInfo/RequestMoneyChannel", _map);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}else{
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "申请付款失败，请重试!");
	    		String s = Util.setResponseToClientString(request, response, err);
	    		return s;
			}
		}
		
	}
	
	@RequestMapping("/RequestHuiYuanPayInfo")
    @ResponseBody
    public String RequestHuiYuanPayInfo(@RequestBody Map<String, String> order, HttpServletRequest request, HttpServletResponse response) throws ParseException, JDOMException, IOException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(u.getIsteled() == 0){
			Map<String,Object> _map = new HashMap<String,Object>();//
			_map.put("msg", "needbind");
			_map.put("hl", null);
			RespBean ok = RespBean.ok("/ShopInfo/RequestHuiYuanPayInfo", _map);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		String cname = order.get("company");
		
		List<HuiYuan> hyls = huiYuanService.getHuiYuanByPhonecode(u.getTelephone(), cname);
		
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("msg", "ok");
		_map.put("hl", hyls);
		RespBean ok = RespBean.ok("/ShopInfo/RequestHuiYuanPayInfo", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/SelMyHuiYuanAndToPay")
    @ResponseBody
    public String SelMyHuiYuanAndToPay(@RequestBody Map<String, String> order, HttpServletRequest request, HttpServletResponse response) throws ParseException, JDOMException, IOException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}

		String cname = order.get("company");
		String sbillnumber = order.get("billnumber");
		String type = order.get("type");
		cname = Util.cleanXSS(cname);
		List<GukeShopings> lgs = gukeBillsService.getShopDataByBillNumberAndCompany(sbillnumber, cname);
		if(lgs == null || lgs.size() <=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无可用预定!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		double priceyf = 0;
		for(int i=0; i<lgs.size(); i++){
			if(lgs.get(i).getPaystate() > 0)
			{
				continue;
			}
			priceyf += lgs.get(i).getItembillyf();
		}
		if(priceyf == 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本单已结清!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String shid = order.get("hid");
		Long hid = Long.parseLong(shid);
		HuiYuan hy = huiYuanService.getHuiYuanByID(hid);
		if(hy==null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获得会员信息失败， 请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		HuiYuanType hyt = huiYuanService.getHuiYuanTypeByID(hy.getTypeid());
		if(hyt == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "错误的会员类型，请重新选择!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("msg", "ok");
		_map.put("hy", hy);
		_map.put("price", priceyf);
		_map.put("pricedis", priceyf*hy.getDisrate());
		_map.put("disrate", hyt.getDisrate());
		_map.put("rmoney", hy.getRmoney() - priceyf*hy.getDisrate());
		RespBean ok = RespBean.ok("/ShopInfo/SelMyHuiYuanAndToPay", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/SureToSelMyHuiYuanAndToPay")
    @ResponseBody
    public String SureToSelMyHuiYuanAndToPay(@RequestBody Map<String, String> order, HttpServletRequest request, HttpServletResponse response) throws ParseException, JDOMException, IOException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}

		String cname = order.get("company");
		String sbillnumber = order.get("billnumber");
		String type = order.get("type");
		cname = Util.cleanXSS(cname);
		List<GukeShopings> lgs = gukeBillsService.getShopDataByBillNumberAndCompany(sbillnumber, cname);
		if(lgs == null || lgs.size() <=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无可用预定!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		String shid = order.get("hid");
		Long hid = Long.parseLong(shid);
		HuiYuan hy = huiYuanService.getHuiYuanByID(hid);
		if(hy==null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获得会员信息失败， 请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		HuiYuanType hyt = huiYuanService.getHuiYuanTypeByID(hy.getTypeid());
		if(hyt == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "错误的会员类型，请重新选择!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		double priceyf = 0;
		for(int i=0; i<lgs.size(); i++){
			if(lgs.get(i).getPaystate() > 0)
			{
				continue;
			}
			priceyf += lgs.get(i).getItembillyf();
		}
		if(priceyf == 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本单已结清!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(hy.getRmoney() - priceyf < 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "会员卡余额不足!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		int gh = gukeBillsService.ShopGukeSelHuiYuanToPan(request, response, lgs, hy, hyt, stemService, planWorkService, cfgDaySetMapper, wiService);
		if(gh != 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "下单遇到问题!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		lgs = gukeBillsService.getShopDataByBillNumberAndCompany(sbillnumber, cname);
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("suc", "ok");
		_map.put("rl", lgs);
		RespBean ok = RespBean.ok("/ShopInfo/SureToSelMyHuiYuanAndToPay", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	
	@RequestMapping("/AskMoneyChannel")
    @ResponseBody
    public String AskMoneyChannel(@RequestBody Map<String, String> order, HttpServletRequest request, HttpServletResponse response) throws ParseException, JDOMException, IOException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		String cname = order.get("company");
		String sbillnumber = order.get("billnumber");
		cname = Util.cleanXSS(cname);
		List<GukeShopings> lgs = gukeBillsService.getShopDataByBillNumberAndCompany(sbillnumber, cname);
		if(lgs == null || lgs.size() <=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无可用预定!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		 int find = 0;
     	 for (int i = 0; i < lgs.size(); i++)
     	 {
     		 if(lgs.get(i).getPaystate()<=0)
     		 {
     			 find = 1;
     		 }
     	 }
		if(find == 0){
			Map<String,Object> _map = new HashMap<String,Object>();//
			_map.put("suc", "ok");
			_map.put("rl", lgs);
			
			RespBean ok = RespBean.ok("/ShopInfo/AskMoneyChannel", _map);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}else{
			Map<String,Object> _map = new HashMap<String,Object>();//
			_map.put("suc", "no");
			_map.put("rl", "");
			
			RespBean ok = RespBean.ok("/ShopInfo/AskMoneyChannel", _map);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
	}
	//******************************************************************************************
	/**
	 * 
	 * @param request
	 * @param response
	 * @param lgs
	 * @param stemService
	 * @param planWorkService
	 * @param cfgDaySetMapper
	 * @param wiService
	 * @return rets 'ok'=正常 其他返回错误信息
	 * @throws JsonProcessingException
	 * @throws ParseException
	 */
	public  static String checkedMakeitemAndPlanworkwork(
			HttpServletRequest request, HttpServletResponse response,
			List<GukeShopings> lgs, 
			ServiceItemService stemService, 
			PlanWorkService planWorkService,
			CfgDaySetMapper cfgDaySetMapper,
			WaiterItemService wiService       
			) throws JsonProcessingException, ParseException
	{
		
		String rets = "ok";
		if(lgs == null || lgs.size() <=0){
			return "无可用单据!";
    	}
		String cname = lgs.get(0).getCompany();
		
		List<ServiceItem> sItems = stemService.getEnabledAllServiceItems(null, cname);
		if(sItems == null){

			return "下单遇到问题， 项目信息无法获取!";
    	}
		List<PlanWork> planworklistO = planWorkService.GetNowCanPlanWorks(cname);
		if(planworklistO == null){
			return "下单遇到问题， 无可用技师!!";
    	}
		
		
		/////////////////////////////////////////
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());

    	
		SimpleDateFormat ft1 = new SimpleDateFormat("yyyyMMddHHmmss");
    	String dstrnmm = ft1.format(date.getTime());
    	
		
		//////////////////////////////
		//判断是否是同一天
		CfgDaySet cds = cfgDaySetMapper.getDaySetConfig(cname);
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
    	int dayid = 0;//店内统一单号
    	int daynumlast = 0;//本日数字
    	int nsdx = 0;//预动牌序号
    	if(cds.getDayidlast()!=null)
    	{
    		dayid =  cds.getDayidlast();
    	}
    	if(cds.getDaynumlast() != null){
    		daynumlast = cds.getDaynumlast();
    	}
    	if(cds.getRoundsdx() != null){
    		nsdx = cds.getRoundsdx();
    		nsdx++;
    	}
    	//判断是否新的营业的一天
    	if(ndsdate!=null && cdsdate!=null){
    		if(cdsdate.getTime()<ndsdate.getTime() && ndsdate.getTime() < date.getTime()){
    			//新的一天了
    			dayid = 0;
    			String dstrnum = dstrnmm.substring(0,8);
    			daynumlast = Integer.valueOf(dstrnum);
    		}
    	}
    	//设置时间单号状态等
    	//每天同一单只有一个单号
    	dayid++;
    	
    	
    	
    	String checkcode = "";
		for(int r=0; r<8; r++){
			checkcode = checkcode + (int)(Math.random()*10);
		}
		
    	///更新预订单信息
		for(int i=0; i<lgs.size(); i++){
			GukeShopings gs = lgs.get(i);
			gs.setWorkstate(2);
			gs.setWaitestate(0);
			gs.setMaketime(dstr);
			gs.setDaynumber(daynumlast);
			gs.setCheckcode(checkcode);
			
			
			gs.setPaystate(1);
		}

		
		///获得顾客数量
		int gukenum = 0;
		for(int i=0; i<lgs.size(); i++){
			GukeShopings gs = lgs.get(i);
			if(gs.getGukenum() > gukenum){
				gukenum = gs.getGukenum();
			}
		}
		
		//建造初步钟单
		
		//保存所有建立的钟单  然后存入数据库
		List <WaiterItem> allUseItemList = new ArrayList<WaiterItem>();
		
		
		
		Map<Integer, List<WaiterItem>> rmap = new HashMap<Integer, List<WaiterItem>>();//	
		for(int i=0; i<gukenum; i++){
			List<WaiterItem> wl = new ArrayList<WaiterItem>();
			for(int s=0; s<lgs.size(); s++){
				GukeShopings gs = lgs.get(s);
				if(gs.getGukeidx() == i){
					WaiterItem wi = new WaiterItem();
					wi.setOrdertype(100);
					wi.setDaynum(gs.getDaynumber());
					wi.setDayid(gs.getDaynumber()+""+dayid);
					wi.setCheckcode(checkcode);
					wi.setGukeidx(gs.getGukeidx());
					wi.setGukenum(gs.getGukenum());
					wi.setBillnumber(gs.getBillnumber());
					wi.setSerinumber(gs.getSerinumber());
					wi.setRmid(gs.getRmid());
					wi.setRmname(gs.getRmname());
					wi.setSid(gs.getSid());
					wi.setSname(gs.getSname());
					wi.setClocknumyy(gs.getClocknumyy());
					wi.setClocknumyf(gs.getClocknumyy());
					wi.setItembillyf(gs.getItembillyf());
					wi.setPaystate(1);
					wi.setWtypek(gs.getWtype());
					
					if(gs.getWtype()==0){
						wi.setWtype(WorkStateUtil.WST_PLAN_LZ);
					}else if(gs.getWtype()==3){
						wi.setWtype(WorkStateUtil.WST_PLAN_DZ);
					}else if(gs.getWtype()==1 || gs.getWtype()==2){
						wi.setWtype(WorkStateUtil.WST_PLAN_DP);
					}
					
					wi.setWlev(gs.getWlev());
					wi.setMaketime(gs.getMaketime());
					wi.setWaittime(gs.getWaittime());
					
					wi.setHid(gs.getHid());
					wi.setHname(gs.getHname());
					wi.setHcode(gs.getHcode());
					wi.setWorkstate(0);
					wi.setKid(gs.getKid());
					wi.setHyid(gs.getMemid());
					wi.setHyname(gs.getMemname());
					wi.setHyseriid(gs.getMemcode());
					wi.setHyrmoney(gs.getHyrmoney());
					
					for(int mi=0; mi<sItems.size(); mi++){
						ServiceItem sm = sItems.get(mi);
						if(sm.getId() == wi.getSid())
						{
							wi.setStimelong(sm.getTimelong());
							wi.setSettimelong(sm.getTimelong());
							wi.setSalarylz(sm.getdSalaryLz());
							wi.setSisspecialwork(sm.getIsspecialwork());
							wi.setSetclocknumzs(sm.getClocknum());
							wi.setSetisdiscount(sm.getIsdiscount());
							wi.setSetneedpoint(sm.getNeedpoint());
							//保存项目提成预估 用于以后排序使用	
							break;
						}
					}

					
					wl.add(wi);
					allUseItemList.add(wi);
				}
			}
			if(wl.size() <= 0){
				continue;
			}
			
			rmap.put(i, wl);
			
			
		}
		
    	//先去除已经被点钟的技师
		List<PlanWork> rmpklist = new ArrayList<PlanWork>();
		for(int np=0; np<planworklistO.size(); np++){
			PlanWork cpw = planworklistO.get(np);
			int find = 0;
			for(int aw=0; aw<allUseItemList.size(); aw++){
				WaiterItem wmi = allUseItemList.get(aw);
				if(wmi.getHid() == cpw.getHid()){
					find = 1;
					break;
				}
			}
			if(find == 1){
				rmpklist.add(cpw);
			}
		}
		planworklistO.removeAll(rmpklist);
    	
    	///技师选项目 而不是项目选技师
    	for(int np=0; np<planworklistO.size(); np++){
			PlanWork cpw = planworklistO.get(np);
			
			//这个临时队列用来排序
			List <WaiterItem> tmpsortitemlist = new ArrayList<WaiterItem>();//这个临时队列用来排序
			
			Iterator<Entry<Integer, List<WaiterItem>>> iter = rmap.entrySet().iterator(); 
	        while (iter.hasNext()) 
	        { 
	        	Map.Entry<Integer, List<WaiterItem>> entry = (Map.Entry<Integer, List<WaiterItem>>) iter.next();       
	            List<WaiterItem> wl = entry.getValue();
	            
	        	double allsalary = PlanworkUtil.cacuAllThisSalary(wl, sItems, cpw);
				
				
				//记录本顾客提成 用于排序
				WaiterItem tmpw = new WaiterItem();
				tmpw.setGukeidx(entry.getKey());
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
				int key = tmpsortitemlist.get(i).getGukeidx();
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
				//10分钟之后的项目现在先不安排
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
		    	//10分钟之后的项目现在先不安排
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
			    		for(int l=0; l<lgs.size(); l++){
	    					if(lgs.get(l).getSerinumber().equals(wl.get(w).getSerinumber()) )
	    					{
	    						lgs.get(l).setHid(wl.get(0).getHid());
	    						lgs.get(l).setHname(wl.get(0).getHname());
	    						lgs.get(l).setHcode(wl.get(0).getHcode());
	    					}
	    				}
			    		anpai++;
					}
		    	}
				if(anpai > 0){
					nsdx++;//动牌顺序按照开单顺序
					
					//更新订单技师安排
    				
					break;
				}
		    		
		    		
		    }///for(int i=0; i<tmpsortitemlist.size(); i++)
	    	
		}
    	
    	

    	
		//保存服务单
		WaiterItem[] record = new WaiterItem[allUseItemList.size()];
		for(int i=0; i<allUseItemList.size(); i++){
			record[i]=allUseItemList.get(i);
		}
		
		//保存公司日单号等配置
		cds.setDayidlast(dayid);
    	cds.setDayidlasttime(dstr);
    	cds.setDaynumlast(daynumlast);
    	cds.setRoundsdx(nsdx);
    	
    	int ret  = 0;
		ret =  wiService.insertWaiterItemListByOrder(lgs, "", cds, record, cname);
		if(ret < 0){
			if(ret == -1){
				return "下单遇到问题，更新失败 ， 请重试!";
			}
			if(ret == -2){
				return "下单遇到问题，制单失败 ， 请重试!";
			}
			if(ret == -3){
				return "下单遇到问题，定时任务失败!";
			}
			if(ret == -4){
				return "下单遇到问题，保存配置失败!";
			}
		}
		
		
		return rets;
	}
	
	
	
	
	
	/**
	 * 这是一个正规调用微信接口结账的接口， 暂时不用了
	 * @param order
	 * @param request
	 * @param response
	 * @return
	 * @throws ParseException
	 * @throws JDOMException
	 * @throws IOException
	 */
	@RequestMapping("/CheckOrderBills")
    @ResponseBody
    public String CheckOrderBills(@RequestBody Map<String, String> order, HttpServletRequest request, HttpServletResponse response) throws ParseException, JDOMException, IOException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}

		String cname = order.get("company");
		String sbillnumber = order.get("billnumber");
		cname = Util.cleanXSS(cname);
		
		List<ServiceItem> sItems = stemService.getEnabledAllServiceItems(null, cname);
		if(sItems == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取项目信息失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		if(sItems.isEmpty()){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有可用项目信息!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		
		String companyBuessName = "广州市爱锦康健康咨询有限公司";
		//////////////////////////////////////////////////////////////////
		List<GukeShopings> lgs = gukeBillsService.getShopDataByBillNumberAndCompany(sbillnumber, cname);
		if(lgs == null || lgs.size() <=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无可用订单!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(lgs.get(0).getWorkstate() <= 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "请先下单!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		List<WaiterItem> lws = wiService.getCompanyWaiterItemByBillnumber(lgs.get(0).getBillnumber(), lgs.get(0).getCompany());

		
		double price = 0;
		for (int i = 0; i < lgs.size(); i++) {
			GukeShopings tgs = lgs.get(i);
			ServiceItem sm = null;
			for(int s=0; s<sItems.size(); s++){
				sm = sItems.get(s);
				break;
			}
			if(sm != null)
				price += tgs.getClocknumyy()*sm.getPrice();
			String bn = new Date().getTime() + "";
//			tgs.setBillnumber(bn);
		}
		
//		gukeBillsService.updateShoplistBillnumber(lgs);//临时 测试
		
		for (int i = 0; i < lws.size(); i++) {
			WaiterItem wi = lws.get(i);
			wi.setBillnumber(lgs.get(0).getBillnumber());
		}
//		wiService.updatePayStateListByIdSelective(lws, lgs.get(0).getCompany());//临时 测试
		
		
		GukeShopings gs = lgs.get(0);

		
		String openid = u.getWxopenid();
		String appid = PayConfigUtil.APP_ID;//appid必填
		String body = companyBuessName + gs.getSname() +"...等";//商品名必填
		String mch_id = PayConfigUtil.MCH_ID;//商户号必填
		String nonce_str = Util.randomString(28);//随机字符串，不长于32位。  
		String notify_url = PayConfigUtil.NOTIFY_URL;//通知地址必填
		int total_fee = (int) (price*0.1); //价格，这是一分钱
		String trade_type = "JSAPI";
		String key = PayConfigUtil.API_KEY; //商户key必填，在商户后台获得
		String out_trade_no = gs.getBillnumber();//自定义订单号必填
		
		String unifiedPayment = "appid=" + appid + "&body=" + body + "&mch_id="
				+ mch_id + "&nonce_str=" + nonce_str + "&notify_url=" + notify_url + "&openid=" 
				+ openid + "&out_trade_no=" + out_trade_no + "&total_fee=" + total_fee 
				+ "&trade_type=" + trade_type + "&key=" + key;
		
		String sign = MD5Util.getMD5String(unifiedPayment).toUpperCase();
		
		//封装统一支付xml参数
	    String formData = "<xml>";
	    formData += "<appid>" + appid + "</appid>";
	    formData += "<body>" + body + "</body>";
	    formData += "<mch_id>" + mch_id + "</mch_id>";
	    formData += "<nonce_str>" + nonce_str + "</nonce_str>";
	    formData += "<notify_url>" + notify_url + "</notify_url>";
	    formData += "<openid>" + openid + "</openid>";
	    formData += "<out_trade_no>" + out_trade_no + "</out_trade_no>";
	    formData += "<total_fee>" + total_fee + "</total_fee>";
	    formData += "<trade_type>" + trade_type + "</trade_type>";
	    formData += "<sign>" + sign + "</sign>";
	    formData += "</xml>";
	    
    
        String resXml = HttpUtil.postData(PayConfigUtil.UFDODER_URL, formData);  
   
        //返回的记过如下
//        <xml>
//	        <return_code><![CDATA[SUCCESS]]></return_code>
//	        <return_msg><![CDATA[OK]]></return_msg>
//	        <appid><![CDATA[wx2421b1c4370ec43b]]></appid>
//	        <mch_id><![CDATA[10000100]]></mch_id>
//	        <nonce_str><![CDATA[IITRi8Iabbblz1Jc]]></nonce_str>
//	        <sign><![CDATA[7921E432F65EB8ED0CE9755F0E86D72F]]></sign>
//	        <result_code><![CDATA[SUCCESS]]></result_code>
//	        <prepay_id><![CDATA[wx201411101639507cbf6ffd8b0779950874]]></prepay_id>
//	        <trade_type><![CDATA[JSAPI]]></trade_type>
//	     </xml>
        
        Map map = XMLUtil4jdom.doXMLParse(resXml);  
        String urlCode = (String) map.get("code_url");
        
      //发起支付
        String prepay_id = (String) map.get("prepay_id");
        if(prepay_id == null){
        	RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "支付遇到问题!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
        }
        String nonceStr = Util.randomString(32);
        int timeStamp = (int)(new Date().getTime()/1000);
        String stringSignTemp = "appId=" + appid + "&nonceStr=" + nonceStr + "&package=prepay_id=" + prepay_id + "&signType=MD5&timeStamp=" + timeStamp + "&key=" + key;
        
        sign = MD5Util.getMD5String(stringSignTemp).toUpperCase();
        
        Map<String, String> checkinfo = new HashMap<String, String>();//
        checkinfo.put("prepay_id", prepay_id);
        checkinfo.put("paySign", sign);
        checkinfo.put("timeStamp", timeStamp+"");
        checkinfo.put("nonceStr", nonceStr);
        
		RespBean ok = RespBean.ok("/ShopInfo/CheckOrderBills", checkinfo);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
}
