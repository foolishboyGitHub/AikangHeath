package com.aikang.controller.WaiterItem;

import java.net.URLDecoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.CSCheckItemInfo;
import com.aikang.Bean.GukePayChannelRecord;
import com.aikang.Bean.GukeShopings;
import com.aikang.Bean.HuiYuan;
import com.aikang.Bean.HuiYuanType;
import com.aikang.Bean.MoneyChannel;
import com.aikang.Bean.PlanWork;
import com.aikang.Bean.PriceType;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.Role;
import com.aikang.Bean.Room;
import com.aikang.Bean.RoundsConfig;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.User;
import com.aikang.Bean.WaiterItem;
import com.aikang.Bean.WrokingItem;
import com.aikang.SmsUtil.WXSmsSendUtil;
import com.aikang.controller.ShopManager.ShopManager;
import com.aikang.mapper.CfgDaySetMapper;
import com.aikang.service.GukeBillsService;
import com.aikang.service.HuiYuanService;
import com.aikang.service.MoneyChannelService;
import com.aikang.service.PlanWorkService;
import com.aikang.service.RoomService;
import com.aikang.service.ServiceItemService;
import com.aikang.service.WaiterItemService;
import com.aikang.utils.MClUtil;
import com.aikang.utils.PlanworkUtil;
import com.aikang.utils.PriceUtil;
import com.aikang.utils.Util;
import com.aikang.utils.WaiterStateUtil;
import com.aikang.utils.WorkStateUtil;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/WaiterSet")
public class WaiterItemManager {

	@Autowired
	WaiterItemService wiService;
	
	@Autowired
	RoomService roomService;
	
	@Autowired
	ServiceItemService stemService;
	
	@Autowired
	PlanWorkService planWorkService;
	
	@Autowired
	MoneyChannelService moneyChannelService;
	
	@Autowired
	GukeBillsService gukeBillsService;
	
	@Autowired  
	CfgDaySetMapper cfgDaySetMapper;
	
	@Autowired
	HuiYuanService huiYuanService;
	
	//获取所有模块功能的权限角色配置
	@RequestMapping("/Add/GetRule")
    @ResponseBody
    public String getWaiterItemAddList(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<ServiceItem> sItems = stemService.getEnabledAllServiceItems(null);
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
		List<Room> rms = roomService.getAllEnableRoom();
		if(rms == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取房间信息失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		if(rms.isEmpty()){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有可用房间信息!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		
		List<PriceType> pts = stemService.getAllPriceTypeItems();
		
		
		RoundsConfig rfg = planWorkService.getRoundsConfig();
		
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("sl", sItems);
		_map.put("rl", rms);
		_map.put("rg", rfg);
		_map.put("pt", pts);
		RespBean ok = RespBean.ok("/WaiterSet/Add/GetRule", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/Add/GetTypeWorks")
    @ResponseBody
    public String GetTypePlanWorks(@RequestBody Map<String, Integer> gtw, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		Integer tyy = gtw.get("tyy");
		Integer wtype = gtw.get("wtp");
		Integer wsex = gtw.get("sex");
		
		List<PlanWork> swl = planWorkService.GetTypePlanWorks(tyy, wtype, wsex);
			
		
		RespBean ok = RespBean.ok("/WaiterSet/Add/GetTypeWorks", swl);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	@RequestMapping("/Add/GetModifyTypeWorks")
    @ResponseBody
    public String GetTypeModifyPlanWorks(@RequestBody Map<String, Integer> gtw, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		Integer tyy = gtw.get("tyy");
		Integer wtype = gtw.get("wtp");
		Integer wsex = gtw.get("sex");
		
		List<PlanWork> swl = planWorkService.GetModifyTypePlanWorks(tyy, wtype, wsex);
		
		RespBean ok = RespBean.ok("/WaiterSet/Add/GetModifyTypeWorks", swl);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/Add/ChangeItemJiShi")
    @ResponseBody
    public String ChangeItemJiShi(@RequestBody Map<String, String> change, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		String swid = change.get("wid");
		Long wid = Long.parseLong(swid);
		String stype = change.get("type");
		Integer type = Integer.parseInt(stype);
		String shid = change.get("hid");
		Long hid = Long.parseLong(shid);
		String szsclock = change.get("zsclock");
		Double zsclock = Double.parseDouble(szsclock);	
		String sresdx = change.get("resdx");
		Integer resdx = Integer.parseInt(sresdx);
		
		WaiterItem wmold = wiService.getWaiterItemsById(wid);
		if(wmold == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个单据，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(wmold.getWorkstate() >= WaiterStateUtil.SST_FW_FINISH){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "服务已结束，请勿修改!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(type<WorkStateUtil.WST_PLAN_LZ || type>WorkStateUtil.WST_PLAN_SZ){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "排钟类型不正确!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		PlanWork pwork = planWorkService.getPlanWorkByHid(hid);
		if(pwork == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有找到新的服务人员，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(PlanworkUtil.ifHasConotItem(wmold, pwork)){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "新的服务人员不能做这个项目!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(zsclock>0 && wmold.getWorkstate() < WaiterStateUtil.SST_SZ_MIN){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "服务还未开始， 原人员不能结算钟数!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		List<WaiterItem> wml= new ArrayList<WaiterItem>();
		wml.add(wmold);
		if(!PlanworkUtil.ifThisWorklistTimeConf(wml, pwork, 10)){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "项目新的服务人员预约时间冲突!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		PlanWork owork = planWorkService.getPlanWorkByHid(wmold.getHid());
		if(owork == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有找到原服务人员，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(resdx == 1 && !owork.getDayidOfsdxMov().equals(wmold.getDayid())){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "原服务人员并未在这一单动牌，不能恢复排序!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		if(wmold.getOrdertype()>=100 && zsclock>(wmold.getClocknumyf() - 0.5)){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此为顾客单，原服务人员结算钟数不能大于(预付钟数-0.5)!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(wiService.changeServiceJiShi(zsclock, resdx, type, owork, pwork, wmold)!=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "更换失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("msg", "ok");
		
		RespBean ok = RespBean.ok("/WaiterSet/Add/ChangeItemJiShi", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	
	@RequestMapping("/Add/ModifyItem")
    @ResponseBody
    public String ModifyWaiterItemSomeInfo(@RequestBody WaiterItem witem, HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		if(witem.getId() == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "错误的单据id!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		WaiterItem wmold = wiService.getWaiterItemsById(witem.getId());
		if(wmold == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个单据，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		if(witem.getSid() != null)//更换服务
		{
			if(wmold.getOrdertype() >= 100){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此为顾客单，无法在本阶段修改服务!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			ServiceItem st = stemService.getServiceItemsById(witem.getSid());
			if(st == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个服务，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			WaiterItem nw = new WaiterItem();
//			Util.setObjAllFieldToNull(nw);
			nw.setId(witem.getId());
			nw.setSid(st.getId());
			nw.setSname(st.getName());
			int r = wiService.updateByPrimaryKeySelective(nw);
			if(r == 1){
				RespBean ok = RespBean.ok("/WaiterSet/Add/ModifyItem", witem);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}
		}
		else if(witem.getItembillyf() != null)//设置预付
		{
			if(wmold.getOrdertype() >= 100){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此为顾客单，无法在本阶段修改预付款!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			if(witem.getClocknumyf() == null || witem.getPricetypeyf() == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "缺少必要修改信息!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			if(wmold.getWorkstate() >= WaiterStateUtil.SST_FW_FINISH){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "服务已结束不可修改!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			WaiterItem nw = new WaiterItem();
//			Util.setObjAllFieldToNull(nw);
			nw.setId(witem.getId());
			nw.setItembillyf(witem.getItembillyf());
			nw.setClocknumyf(witem.getClocknumyf());
			nw.setPricetypeyf(witem.getPricetypeyf());
			WaiterItem oldwm = wiService.getWaiterItemsById(nw.getId());
			if(oldwm != null && oldwm.getWorkstate() >= WaiterStateUtil.SST_SZ_MIN && oldwm.getWorkstate() < WaiterStateUtil.SST_FW_FINISH){
				SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				Date wsd = ft.parse(oldwm.getWorktime());
				int breaklong = 0;
				if(oldwm.getBreaklong()!=null){
					breaklong = oldwm.getBreaklong() * 1000;
				}
				String fstr = ft.format(wsd.getTime() + oldwm.getStimelong()*60*1000*witem.getClocknumyf() + breaklong*1000);
				nw.setFinishtimeyj(fstr);	
			}
			int r = wiService.updateByPrimaryKeySelective(nw);
			if(r == 1){
				RespBean ok = RespBean.ok("/WaiterSet/Add/ModifyItem", witem);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}
		}
		else if(witem.getRmid() != null)//修改房间
		{
			
			Room rm = roomService.getRoomByID(witem.getRmid());
			if(rm == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个房间，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			WaiterItem nw = new WaiterItem();
//			Util.setObjAllFieldToNull(nw);
			nw.setId(witem.getId());
			nw.setRmid(rm.getId());
			nw.setRmname(rm.getName());
			int r = wiService.updateByPrimaryKeySelective(nw);
			if(r == 1){
				RespBean ok = RespBean.ok("/WaiterSet/Add/ModifyItem", witem);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}
		}
		
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "修改失败 请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
		
	}
	
	@RequestMapping("/Add/SaveWaiters")
    @ResponseBody
    public String SaveWaiterItems(@RequestBody WaiterItem[] record, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		int find = 0;
		for(int i=0; i<record.length; i++){
			WaiterItem wm = record[i];
			if(wm.getWtype()!= null){
				if(wm.getWtype() == WorkStateUtil.WST_PLAN_LZ){
					wm.setWtypek(0);
				}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_DZ){
					wm.setWtypek(3);
				}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_DP){
					wm.setWtypek(1);
				}else if(wm.getWtype() == WorkStateUtil.WST_PLAN_SZ){
					wm.setWtypek(3);
				}
				
			}
			if(wm.getHid()==null || wm.getHid() <= 0){
				find = 1;
			}
		}
		if(find > 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "请为每一个项目选择服务人员!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		if(wiService.insertWaiterItem(record) != record.length){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "保存项目失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		RespBean ok = RespBean.ok("/WaiterSet/Add/SaveWaiters", "保存成功！");
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/Add/GetWaiters")
    @ResponseBody
    public String GetWaiterItems(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
			
		List<WaiterItem> lws = wiService.getAllWaiterItem();
		//设置等待 迟到 服务等时长 

		for(int i=0; i<lws.size(); i++){
			WaiterItem wm = lws.get(i);
			wiService.setWiterItemTimeLong(wm);
		}
		
		//查看是否有需要设置状态
		wiService.setWaiterItemYYAndHJState(lws);
		
		RespBean ok = RespBean.ok("/WaiterSet/Add/GetWaiters", lws);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	//结账买单
	@RequestMapping("/Add/FinishWaiterItem")
	@ResponseBody
	public String Add_FinishWaiterItem(@RequestBody List<Long> ids, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		if(ids == null || ids.size()<=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "传入的列表为空!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		List<WaiterItem> olditems = wiService.getCompanyWaiterItemByIds(ids, Util.getConpnany_Name());
		
		for(int i=0; i<olditems.size(); i++){
			if(olditems.get(i).getOrdertype() >= 100 && olditems.get(i).getPaystate() > 0){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此为顾客下单且已付款， 请勿提前结束!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			if(olditems.get(i).getWorkstate() < WorkStateUtil.WST_SZ_MIN){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "其中有服务未开始项目，我发结束!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
		}
		int rt = wiService.masterFinisItem(olditems);	
		if(rt !=1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		List<WaiterItem> lws = wiService.getAllWaiterItem();
		RespBean ok = RespBean.ok("/WaiterSet/Add/FinishWaiterItem", lws);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	@RequestMapping("/Add/DelWaiterItem")
    @ResponseBody
    public String DelWaiterItems(@RequestBody WaiterItem witem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		WaiterItem olditem = wiService.getWaiterItemsById(witem.getId());
		if(olditem == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "删除失败，没有这个项目!");
			String s = Util.setResponseToClientString(request, response, err);
		    return s;
		}
		
		if(olditem.getOrdertype() >= 100){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此项为顾客下单，无法直接取消，请用销毁项目功能!");
			String s = Util.setResponseToClientString(request, response, err);
		    return s;		
		}
		
		
		int admnum = wiService.deleteWaiterItem(witem);
		if(admnum == 1){
			RespBean ok = RespBean.ok("/WaiterSet/Add/DelWaiterItem", witem);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "删除失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	@RequestMapping("/Add/RecWaiterItem")
    @ResponseBody
    public String RecWaiterItem(@RequestBody WaiterItem witem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		WaiterItem olditem = wiService.getWaiterItemsById(witem.getId());
		if(olditem == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "销毁失败，没有这个项目!");
			String s = Util.setResponseToClientString(request, response, err);
		    return s;
		}
		
		if(olditem.getOrdertype() < 100){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此项为系统下单，请用取消项目功能!");
			String s = Util.setResponseToClientString(request, response, err);
		    return s;		
		}
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	Date mdate =ft.parse(olditem.getMaketime());
    	if(date.getTime() - mdate.getTime() < 12*60*60*1000){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "销毁项目要在下单后12个小时候才可以!");
			String s = Util.setResponseToClientString(request, response, err);
		    return s;
    	}
    	
		int ret = wiService.recWaiterItem(witem);
		if(ret == 1){
			RespBean ok = RespBean.ok("/WaiterSet/Add/RecWaiterItem", witem);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "删除失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	@RequestMapping("/WorksManager/GetTurnWorks")
    @ResponseBody
    public String getTurnWorks(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		List<PlanWork> pws = planWorkService.getAllPlanWorksAtTurn();		
		RespBean ok = RespBean.ok("/WaiterSet/WorksManager/GetTurnWorks", pws);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/WorksManager/ModifyTurnSdx")
    @ResponseBody
    public String WorksManager_ModifyTurnSdx(@RequestBody PlanWork[] pws, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		if(pws.length > 1000)
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "列表数量不能超过1000!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<Long> ids = new ArrayList<>();
		for(int i=0; i<pws.length; i++){
			ids.add(pws[i].getHid());
		}
		List<PlanWork> plos = planWorkService.getPlanWorksInIds(ids);
		if(plos == null || plos.size() <= 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获得的服务人员列表为空!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<PlanWork> pwlw = new ArrayList<PlanWork>();
		for(int i=0; i<pws.length; i++){
			pwlw.add(pws[i]);
		}
		String company = Util.getConpnany_Name();
		int adl = planWorkService.updateListPlanWorksByHidSelective(pwlw, company);
		if(adl != pws.length){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "保存排序失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		RespBean ok = RespBean.ok("/WaiterSet/WorksManager/ModifyTurnSdx", pws);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	@RequestMapping("/WorksManager/FixedWorkerState")
    @ResponseBody
    public String WorksManager_FixedWorkerState(@RequestBody PlanWork pw, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		


		PlanWork pwo = planWorkService.getPlanWorkByHid(pw.getHid());
		if(pwo == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获得的服务人员信息错误!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		int oldstate = pwo.getState();
		if(pwo.getMyitems() == null || pwo.getMyitems().size()<=0){
			pwo.setState(WorkStateUtil.WST_KX_MIN);
		}else{
			int find = 0;
			for(int i=0; i<pwo.getMyitems().size(); i++){
				WrokingItem wi=pwo.getMyitems().get(i); 
				if(wi.getWorkstate() >= WaiterStateUtil.SST_SZ_MIN && wi.getWorkstate() < WaiterStateUtil.SST_FW_FINISH){
					find = 1;
				}
			}
			if(find == 1){
				pwo.setState(WorkStateUtil.WST_FW_MIN);
			}
			
		}
		if(oldstate != pwo.getState()){
			PlanWork pwu = new PlanWork();
			pwu.setHid(pwo.getHid());
			pwu.setState(pwo.getState());
			int fix  = planWorkService.updatePlanWorksByHidSelective(pwu);
			if(fix == 1){
				RespBean ok = RespBean.ok("/WaiterSet/WorksManager/FixedWorkerState", pwu);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}
		}

	    
	    RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "状态无需修正!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	//技师跳轮
	@RequestMapping("/WorksManager/GoNextround")
    @ResponseBody
    public String workGoNextround(@RequestBody PlanWork pwk, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		int p = wiService.WorkGoNextTurn(pwk);
		if(p !=1 ){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		List<PlanWork> pws = planWorkService.getAllPlanWorksAtTurnNoReset();		
		RespBean ok = RespBean.ok("/WaiterSet/WorksManager/GetTurnWorks", pws);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	//技师停牌
	@RequestMapping("/WorksManager/SetWorktp")
    @ResponseBody
    public String SetWorktp(@RequestBody PlanWork pwk, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		
		int r = planWorkService.setWorkTpFp(pwk);
		
		if(r == -1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		if(r == -2){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "技师非空闲状态无法停牌!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		if(r == -3){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		if(r == -4){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "技师非停牌状态!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		
		List<PlanWork> pws = planWorkService.getAllPlanWorksAtTurnNoReset();		
		RespBean ok = RespBean.ok("/WaiterSet/WorksManager/GetTurnWorks", pws);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	//结账 通过修改价格类型变动价格
	@RequestMapping("/BillManager/ModifyType")
    @ResponseBody
    public String ModifyTypeBills(@RequestBody Map<String,Integer> _map, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		int type = _map.get("type");
		if(type == 0)//现付
		{
			int sid = _map.get("sid");
			ServiceItem st = stemService.getServiceItemsById(sid);
			if(st == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个服务，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			long wid = _map.get("id");
			WaiterItem wmold = wiService.getWaiterItemsById(wid);
			if(wmold == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个单据，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			double billset = wmold.getClocknum() * st.getPrice();
			wmold.setItembill(billset);
			wmold.setPricetype("原价");
			int r = wiService.updateByPrimaryKeySelective(wmold);
			if(r == 1){
				RespBean ok = RespBean.ok("/WaiterSet/BillManager/ModifyType", wmold);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}
		}else{
			int tid = _map.get("tid");
			PriceType pt = stemService.getPriceTypeItemById(tid);
			
			if(pt == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个价格类型，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			long wid = _map.get("id");
			WaiterItem wmold = wiService.getWaiterItemsById(wid);
			if(wmold == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个单据，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
	
			double billset = wmold.getClocknum() * pt.getPrice();
			wmold.setItembill(billset);
			wmold.setPricetype(pt.getTpname());
			int r = wiService.updateByPrimaryKeySelective(wmold);
			if(r == 1){
				RespBean ok = RespBean.ok("/WaiterSet/BillManager/ModifyType", wmold);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}
			
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
		
	}
		
	//结账 修改价格
	@RequestMapping("/BillModify/ModifyBill")
    @ResponseBody
    public String ModifyPriceBills(@RequestBody WaiterItem record, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		int r = wiService.updateByPrimaryKeySelective(record);
		if(r == 1){
			RespBean ok = RespBean.ok("/WaiterSet/BillModify/ModifyBill", record);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}

		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
		
	}
	//结账 修改价格
	@RequestMapping("/BillModify/ModifyBillHy")
    @ResponseBody
    public String ModifyPriceBillsHy(@RequestBody WaiterItem record, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		int r = wiService.updateByPrimaryKeySelective(record);
		if(r == 1){
			RespBean ok = RespBean.ok("/WaiterSet/BillModify/ModifyBillHy", record);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}

		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
		
	}
	
	//结算顾客单
	@RequestMapping("/BillManager/JieSuanGukeShop")
	@ResponseBody
	public String JieSuanGukeShopItemBills(@RequestBody WaiterItem[] record, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		List<Long> ids = new ArrayList<Long>(); 
		for(int i=0; i<record.length; i++){
			long wid = record[i].getId();
			ids.add(wid);
		}
		int finddian = 0;
		List<WaiterItem> olditems = wiService.getCompanyWaiterItemByIds(ids, Util.getConpnany_Name());
		for(int i=0; i<olditems.size(); i++){
			if(olditems.get(i).getOrdertype() < 100){
				finddian = 1;
				break;
			}
		}
		if(finddian > 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "内有店内单，请使用结账!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		int rt = wiService.masterJieSuanGukeBill(olditems);	
		if(rt !=1){
			if(rt == -5){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作部分完成，请刷新!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}else{
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
		}
		List<WaiterItem> lws = wiService.getAllWaiterItem();
		RespBean ok = RespBean.ok("/WaiterSet/BillManager/JieSuanGukeShop", lws);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	//结账买单
	@RequestMapping("/BillManager/CheckOut")
	@ResponseBody
	public String CheckOutItemBills(@RequestBody WaiterItem[] record, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		List<Long> ids = new ArrayList<Long>(); 
		for(int i=0; i<record.length; i++){
			long wid = record[i].getId();
			ids.add(wid);
		}
		int findguke = 0;
		List<WaiterItem> olditems = wiService.getCompanyWaiterItemByIds(ids, Util.getConpnany_Name());
		for(int i=0; i<olditems.size(); i++){
			if(olditems.get(i).getOrdertype()>=100 && olditems.get(i).getPaystate()>0){
				findguke = 1;
				break;
			}
		}
		if(findguke > 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "内有顾客单 且已付款，请使用结算!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		int r = wiService.CheckOutItemBill(record);
		if(r == record.length){
			RespBean ok = RespBean.ok("/WaiterSet/BillManager/CheckOut", record);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		
		if(r == -1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得单据信息!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		if(r == -2){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得服务项目信息!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(r == -3){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "有项目尚未结束，无法结账!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(r == -4){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "结账单据已服务单据数量不匹配!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
		
	}
	
	@RequestMapping("/BillManager/CheckOutHy")
    @ResponseBody
    public String BillManager_CheckOutHy(@RequestBody CSCheckItemInfo ckinfo, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		
		
		HuiYuan hy = huiYuanService.getHuiYuanByID(ckinfo.getHid());
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
		List<WaiterItem> olditems = wiService.getCompanyWaiterItemByIds(ckinfo.getWids(), Util.getConpnany_Name());
		int findguke=0;
		for(int i=0; i<olditems.size(); i++){
			if(olditems.get(i).getOrdertype()>=100 && olditems.get(i).getPaystate()>0){
				findguke = 1;
				break;
			}
		}
		if(findguke > 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "内有顾客单 且已付款，请使用结算!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		double bill = 0;
		for(int i=0; i<olditems.size(); i++){
			WaiterItem wm = olditems.get(i);
			bill += wm.getItembill();
		}
		if(ckinfo.getType() != 0){
			if(hy.getRmoney() >= bill){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本次结算请直接扣费!");
	    		String s = Util.setResponseToClientString(request, response, err);
	    		return s;
			}
		}
		if(ckinfo.getType() == 0){
			if(hy.getRmoney() < bill){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "会员余额不足，请使用补差价或者透支方式!");
	    		String s = Util.setResponseToClientString(request, response, err);
	    		return s;
			}
		}
		if(ckinfo.getType() == 2){
			if(hyt.getOveram() <= 0){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本类型会员卡不可透支 !");
	    		String s = Util.setResponseToClientString(request, response, err);
	    		return s;
			}
			double over = bill - hy.getRmoney();
			if(hyt.getOveram() < over){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本类型会员卡透支额度不能超过 "+hyt.getOveram()+" 元!");
	    		String s = Util.setResponseToClientString(request, response, err);
	    		return s;
			}
		}
		Map<String,Object> _map = new HashMap<String,Object>();//

		
		int r = wiService.CheckOutItemBillByHuiYuan(hy, hyt, ckinfo.getType(), olditems, _map);
		
		if(r == olditems.size()){
			RespBean ok = RespBean.ok("/WaiterSet/BillManager/CheckOutHy", _map);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		
		if(r == -1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得单据信息!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		if(r == -2){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得服务项目信息!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(r == -3){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "有项目尚未结束，无法结账!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(r == -4){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "结账单据已服务单据数量不匹配!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(r == -10){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "会员扣费出错! 请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(r == -11){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "保存交易出错! 请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;

	}
	
	@RequestMapping("/BillManager/GetHuiYuanAtLikeKeyWord")
    @ResponseBody
    public String BillManager_GetHuiYuanAtLikeKeyWord(@RequestBody Map<String, String> point, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		String keyword = point.get("keyword");
		List<HuiYuan> hyls = huiYuanService.QueryHuiYuanByInfokey(Util.getConpnany_Name(), keyword);
		
		RespBean ok = RespBean.ok("/WaiterSet/BillManager/GetHuiYuanAtLikeKeyWord", hyls);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/BillManager/SelXianJinGetCheckInfo")
    @ResponseBody
    public String BillManager_SelXianJinGetCheckInfo(@RequestBody CSCheckItemInfo ckinfo, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		List<WaiterItem> olditems = wiService.getCompanyWaiterItemByIds(ckinfo.getWids(), Util.getConpnany_Name());
		int findguke=0;
		for(int i=0; i<olditems.size(); i++){
			if(olditems.get(i).getOrdertype()>=100 && olditems.get(i).getPaystate()>0){
				findguke = 1;
				break;
			}
		}
		if(findguke > 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "内有顾客单 且已付款，请使用结算!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		for(int i=0; i<olditems.size(); i++){
			WaiterItem wm = olditems.get(i);
			double bill = wm.getClocknum() * wm.getSetprice();
			wm.setItembill(bill);
			wm.setPricetype("原价");
		}
		int u = wiService.updateListHidByIdsAtSomeCompany(olditems);
		if(u != olditems.size()){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "价格变动出错， 请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("hy", 0);
		_map.put("hyt", 0);
		_map.put("wl", olditems);
		RespBean ok = RespBean.ok("/WaiterSet/BillManager/SelXianJinGetCheckInfo", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	@RequestMapping("/BillManager/SelHuiYuanGetCheckInfo")
    @ResponseBody
    public String BillManager_SelHuiYuanGetCheckInfo(@RequestBody CSCheckItemInfo ckinfo, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		
		HuiYuan hy = huiYuanService.getHuiYuanByID(ckinfo.getHid());
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
		List<WaiterItem> olditems = wiService.getCompanyWaiterItemByIds(ckinfo.getWids(), Util.getConpnany_Name());
		int findguke=0;
		for(int i=0; i<olditems.size(); i++){
			if(olditems.get(i).getOrdertype()>=100 && olditems.get(i).getPaystate()>0){
				findguke = 1;
				break;
			}
		}
		if(findguke > 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "内有顾客单 且已付款，请使用结算!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		for(int i=0; i<olditems.size(); i++){
			WaiterItem wm = olditems.get(i);
			double bill = wm.getClocknum() * wm.getSetprice() * hyt.getDisrate();
			wm.setItembill(bill);
//			wm.setHyid(hy.getId());
//			wm.setHyname(hy.getHycname());
//			wm.setHyseriid(hy.getSeriid());
		}
		int u = wiService.updateListHidByIdsAtSomeCompany(olditems);
		if(u != olditems.size()){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "价格变动出错， 请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("hy", hy);
		_map.put("hyt", hyt);
		_map.put("wl", olditems);
		RespBean ok = RespBean.ok("/WaiterSet/BillManager/SelHuiYuanGetCheckInfo", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	
	
	////////////////////////////////////////////////////////////////////////////////////
	// //以下为顾客买单 付款部分
	/////////////////////////////////////////////////////////////// 
	
	
	//结账 顾客使用扫码付款的接收通知买单
	@SuppressWarnings("deprecation")
	@RequestMapping("/BillManager/NotifyMoney")
	@ResponseBody
	public String NotifyMoney(@RequestBody String jsonstr, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		JSONObject resultJson = JSONObject.parseObject(jsonstr);	
		String title=resultJson.getString("title");
		title = URLDecoder.decode(title);
		String content=resultJson.getString("content");
		content = URLDecoder.decode(content);
		String jdate=resultJson.getString("date");
		String money=resultJson.getString("money");
		String type=resultJson.getString("type");
		
		if(title.length() >= 126){
			title = title.substring(0, 126);
		}
		if(content.length() >= 254){
			content = content.substring(0, 254);
		}
		
		double dmoney = Double.parseDouble(money);
		double cdmoney = dmoney*100;//测试使用
		cdmoney = ((int)(cdmoney*100))/100;
//    	
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	
    	MoneyChannel mcl = moneyChannelService.getCompanyMoneyChannelByChannelName(type, cdmoney, Util.getConpnany_Name());
    	
    	if(mcl != null){
    		
    		
    		Date mdate = ft.parse(mcl.getBlocktime());
    		if((date.getTime() - mdate.getTime())/1000 < MClUtil.CHANNEL_BLOCK_TIME){
    			
			   List<GukeShopings> lgs = gukeBillsService.getShopDataByBillNumber(mcl.getBlockbillnumber());;
               if(lgs!=null && lgs.size()>0)
               {
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
            		 //通道解锁
            		 mcl.setIsblock(0);
            		 moneyChannelService.updateMoneyChannelByIDSelective(mcl);
            		 
            		 
            		 
            		 //完全是新单 店内下单排钟
            		  for (int i = 0; i < lgs.size(); i++) {
		            	  lgs.get(i).setPaystate(1);
		            	  lgs.get(i).setWorkstate(2);
		            	  lgs.get(i).setChecktime(dstr);
		            	  lgs.get(i).setPayid(mcl.getBlockkid());
		            	  lgs.get(i).setPaynum(lgs.get(i).getItembillyf());
		              }
            		  ShopManager.checkedMakeitemAndPlanworkwork(request, response, lgs, stemService, planWorkService, cfgDaySetMapper, wiService);
            	  }else{
            		  //后面增加的单
            		  List<GukeShopings> plgs = new ArrayList<GukeShopings>();
            		  for (int i = 0; i < lgs.size(); i++) {
            			  if(lgs.get(i).getPaystate()>0){
            				  continue;
            			  }
		            	  lgs.get(i).setPaystate(1);
		            	  lgs.get(i).setWorkstate(2);
		            	  lgs.get(i).setChecktime(dstr);
		            	  lgs.get(i).setPayid(mcl.getBlockkid());
		            	  lgs.get(i).setPaynum(lgs.get(i).getItembillyf());
		            	  plgs.add(lgs.get(i));
		               }
		               gukeBillsService.UpdateAddShopItemAndDoWork(plgs);
		               
            	  }
            	   
               }//if(lgs!=null && lgs.size()>0)
    			
    		}//if((date.getTime() - mdate.getTime())/1000 < MClUtil.CHANNEL_BLOCK_TIME)
    		
    		//保存付款信息
    		GukePayChannelRecord gcr = new  GukePayChannelRecord();
    		PlanworkUtil.CopyMoneyChannelToRecord(gcr, mcl);
    		gcr.setPaymoney(dmoney);
    		gcr.setPaynotifytime(jdate);
    		gcr.setPayrecivetime(dstr);
    		gcr.setNotifytile(title);
    		gcr.setNotifycontent(content);
    		moneyChannelService.addMoneyChannelRecord(gcr);
    	}
    	
    	RespBean ok = RespBean.ok("/WaiterSet/BillManager/NotifyMoney", "OK");
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/ShopBillLookInfo/GetBill")
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
		
		List<GukeShopings> lmgs = gukeBillsService.getCompanyShopDataSortByBillNumber(Util.getConpnany_Name(), 1, 2);
		RespBean ok = RespBean.ok("/WaiterSet/ShopBillLookInfo/GetBill", lmgs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	//结账 通过修改价格类型变动顾客单价格
	@RequestMapping("/ShopBillModifyPriceType/ModifyBillByType")
    @ResponseBody
    public String ShopBillModify_ModifyBillByType(@RequestBody Map<String,Integer> _map, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		int type = _map.get("type");
		if(type == 0)//现付
		{
			int sid = _map.get("sid");
			ServiceItem st = stemService.getServiceItemsById(sid);
			if(st == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个服务，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			long gid = _map.get("id");
			GukeShopings gsold = gukeBillsService.getShopDataByID(gid);
			if(gsold == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个单据，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			if(gsold.getPaystate() > 0){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本项已付款无法修改价格!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			double billset = gsold.getClocknumyy() * st.getPrice();
			gsold.setItembillys(billset);
			gsold.setItembillzk(1.0);
			gsold.setItembilljm(0.0);
			gsold.setItembilldk(0.0);
			gsold.setItembillyf(PriceUtil.getFinalPrice(gsold));
			int r = gukeBillsService.updateShopByPrimaryKeySelective(gsold);
			if(r == 1){
				RespBean ok = RespBean.ok("/WaiterSet/ShopBillModifyPriceType/ModifyBillByType", gsold);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}
		}else{
			int tid = _map.get("tid");
			PriceType pt = stemService.getPriceTypeItemById(tid);
			
			if(pt == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个价格类型，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			
			long gid = _map.get("id");
			GukeShopings gsold = gukeBillsService.getShopDataByID(gid);
			if(gsold == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个单据，请重试!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			if(gsold.getPaystate() > 0){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本项已付款无法修改价格!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			double billset = gsold.getClocknumyy() * pt.getPrice();
			gsold.setItembillys(billset);
			gsold.setItembillzk(1.0);
			gsold.setItembilljm(0.0);
			gsold.setItembilldk(0.0);
			gsold.setItembillyf(PriceUtil.getFinalPrice(gsold));
			int r = gukeBillsService.updateShopByPrimaryKeySelective(gsold);
			if(r == 1){
				RespBean ok = RespBean.ok("/WaiterSet/ShopBillModifyPriceType/ModifyBillByType", gsold);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
			}
			
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
		
	}
	
	//结账 通过修改价格类型变动顾客单价格
	@RequestMapping("/ShopBillModifyPriceAny/AnyPrice")
    @ResponseBody
    public String ShopBillModifyPriceAny_AnyPrice(@RequestBody GukeShopings record, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		
		
		
		GukeShopings gsold = gukeBillsService.getShopDataByID(record.getId());
		if(gsold == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个单据，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(gsold.getPaystate() > 0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "本项已付款无法修改价格!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		gsold.setClocknumyy(record.getClocknumyy());
		gsold.setItembillys(record.getItembillys());
		record.setItembillzk(1.0);
		record.setItembilljm(0.0);
		record.setItembilldk(0.0);
		record.setItembillyf(PriceUtil.getFinalPrice(gsold));
		int r = gukeBillsService.updateShopByPrimaryKeySelective(record);
		if(r == 1){
			RespBean ok = RespBean.ok("/WaiterSet/ShopBillModifyPriceAny/AnyPrice", gsold);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
		
	}
	
	//结账 通过修改价格类型变动顾客单价格
	@RequestMapping("/ShopBillCheck/CheckToCompany")
    @ResponseBody
    public String ShopBillCheckToCompany(@RequestBody Map<String,String> _map, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		String billnumber = _map.get("bn");
		List<GukeShopings> lgs = gukeBillsService.getShopDataByBillNumberAndCompany(billnumber, Util.getConpnany_Name());
		if(lgs == null || lgs.size() <=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有已存在的订单可以附加!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	int find = 0;
	   	for (int i = 0; i < lgs.size(); i++)
	   	{
	   		 if(lgs.get(i).getWorkstate()>=2 && lgs.get(i).getPaystate()>0)
	   		 {
	   			 find = 1;
	   		 }
	   	}
		if(find == 0){
			//完全是新单 店内下单排钟
	   		  for (int i = 0; i < lgs.size(); i++) {
	           	  lgs.get(i).setPaystate(1);
	           	  lgs.get(i).setWorkstate(2);
	           	  lgs.get(i).setChecktime(dstr);
	           	  lgs.get(i).setPayid(lgs.get(i).getKid());
	           	  lgs.get(i).setPaynum(lgs.get(i).getItembillyf());
	          }
	   		  String rs = ShopManager.checkedMakeitemAndPlanworkwork(request, response, lgs, stemService, planWorkService, cfgDaySetMapper, wiService);
	   		  if(rs == "ok"){
	   			RespBean ok = RespBean.ok("/WaiterSet/ShopBillCheck/CheckToCompany", lgs);
			    String s = Util.setResponseToClientString(request, response, ok);
			    return s;
	   		  }
    		
		}else {
			//后面增加的单
	   		  List<GukeShopings> plgs = new ArrayList<GukeShopings>();
	   		  for (int i = 0; i < lgs.size(); i++) {
	   			  if(lgs.get(i).getPaystate()>0){
	   				  continue;
	   			  }
	           	  lgs.get(i).setPaystate(1);
	           	  lgs.get(i).setWorkstate(2);
	           	  lgs.get(i).setChecktime(dstr);
	           	  lgs.get(i).setPayid(lgs.get(i).getKid());
	           	  lgs.get(i).setPaynum(lgs.get(i).getItembillyf());
	           	  plgs.add(lgs.get(i));
	           }
	          int r = gukeBillsService.UpdateAddShopItemAndDoWork(plgs);
	          if(r == 0){
	        	RespBean ok = RespBean.ok("/WaiterSet/ShopBillCheck/CheckToCompany", lgs);
	  		    String s = Util.setResponseToClientString(request, response, ok);
	  		    return s;
	          }
		}
		
		
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "操作失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
		
	}
}
