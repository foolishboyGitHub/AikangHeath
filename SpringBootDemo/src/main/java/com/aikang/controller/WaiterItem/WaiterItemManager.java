package com.aikang.controller.WaiterItem;

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

import com.aikang.Bean.PlanWork;
import com.aikang.Bean.PriceType;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.Role;
import com.aikang.Bean.Room;
import com.aikang.Bean.RoundsConfig;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.WaiterItem;
import com.aikang.service.PlanWorkService;
import com.aikang.service.RoomService;
import com.aikang.service.ServiceItemService;
import com.aikang.service.WaiterItemService;
import com.aikang.utils.Util;
import com.aikang.utils.WaiterStateUtil;
import com.aikang.utils.WorkStateUtil;
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
		
		List<PlanWork> swl = planWorkService.GetTypePlanWorks(tyy, wtype, wsex);
		
		RespBean ok = RespBean.ok("/WaiterSet/Add/GetModifyTypeWorks", swl);
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
		if(wmold.getWorkstate() >= WaiterStateUtil.SST_FW_FINISH){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "服务已结束不可修改!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(witem.getSid() != null)//更换服务
		{
			
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
			
			if(witem.getClocknumyf() == null || witem.getPricetypeyf() == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "缺少必要修改信息!");
				String s = Util.setResponseToClientString(request, response, err);
				return s;
			}
			WaiterItem nw = new WaiterItem();
//			Util.setObjAllFieldToNull(nw);
			nw.setId(witem.getId());
			nw.setItembillyf(witem.getItembillyf());
			nw.setClocknumyf(witem.getClocknumyf());
			nw.setPricetypeyf(witem.getPricetypeyf());
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
	
	@RequestMapping("/Add/DelWaiterItem")
    @ResponseBody
    public String DelWaiterItems(@RequestBody WaiterItem witem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
				
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
	
	@RequestMapping("/WorksManager/GetTurnWorks")
    @ResponseBody
    public String getTurnWorks(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		List<PlanWork> pws = planWorkService.getAllPlanWorksAtTurn();		
		RespBean ok = RespBean.ok("/WaiterSet/WorksManager/GetTurnWorks", pws);
	    String s = Util.setResponseToClientString(request, response, ok);
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
			int wid = _map.get("id");
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
			int wid = _map.get("id");
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
	//结账买单
	@RequestMapping("/BillManager/CheckOut")
    @ResponseBody
    public String CheckOutItemBills(@RequestBody WaiterItem[] record, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
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
}
