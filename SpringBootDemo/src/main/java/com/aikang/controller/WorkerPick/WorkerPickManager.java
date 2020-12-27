package com.aikang.controller.WorkerPick;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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
import com.aikang.Bean.RespBean;
import com.aikang.Bean.Room;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.User;
import com.aikang.Bean.WaiterItem;
import com.aikang.service.PlanWorkService;
import com.aikang.service.ServiceItemService;
import com.aikang.service.WaiterItemService;
import com.aikang.utils.Util;
import com.aikang.utils.WaiterStateUtil;
import com.aikang.utils.WorkStateUtil;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/WorkerPick")
public class WorkerPickManager {

	@Autowired
	ServiceItemService stemService;
	
	@Autowired
	WaiterItemService wiService;
	
	@Autowired
	PlanWorkService planWorkService;
	
	//获取项目配置
	@RequestMapping("/Refresh/GetItemCfg")
    @ResponseBody
    public String getItemCfgInfo(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
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
		RespBean ok = RespBean.ok("/WorkerPick/Refresh/GetItemCfg", sItems);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
		
	//获取与工作者相关的钟单
	@RequestMapping("/Refresh/GetState")
    @ResponseBody
    public String getWorkPickInfo(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		Integer hid = Util.getCurrentUser().getId();
		List<WaiterItem> lws = wiService.getWaiterItemsByHid(hid);
    	
    	//设置等待 迟到 服务等时长 
		for(int i=0; i<lws.size(); i++){
			WaiterItem wm = lws.get(i);
			wiService.setWiterItemTimeLong(wm);
		}
		
		//查看是否有需要设置状态
		wiService.setWaiterItemYYAndHJState(lws);
				
		RespBean ok = RespBean.ok("/WorkerPick/Refresh/GetState", lws);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	//获取与工作者相关的钟单
	@RequestMapping("/Refresh/SetAction")
    @ResponseBody
    public String setWorkPickAction(@RequestBody WaiterItem witem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		int rt = wiService.WorkerItemSetAction(witem);
		if(rt == 1){
			RespBean ok = RespBean.ok("/WorkerPick/Refresh/SetAction", witem);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "回应失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	//开始服务
	@RequestMapping("/Refresh/startwork")
    @ResponseBody
    public String startWorkPickAction(@RequestBody WaiterItem witem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		int rt = wiService.WorkerStartItem(witem);	
		if(rt == -3)//无法获得该单信息
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得该单信息，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(rt == -1)//验证未通过
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "上钟  验证码不正确，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}		
		if(rt == 1){
			RespBean ok = RespBean.ok("/WorkerPick/Refresh/startwork", witem);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "开始服务失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	//结束下钟
	@RequestMapping("/Refresh/finishWork")
    @ResponseBody
    public String finishWorkPickAction(@RequestBody WaiterItem witem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		int rt = wiService.WorkerFinishItem(witem);	
		if(rt == -3)//无法获得该单信息
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得该单信息，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(rt == -5)//无法获得该单信息
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得该单信息，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(rt == -6 || rt == -7)//无法获得该单信息
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "服务还未开始， 不能结束!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(rt == -8)//无法获得该单信息
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "服务项目异常， 不能结束!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(rt == -1)//验证未通过
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "下钟 验证码不正确，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}		
		if(rt == 1){
			RespBean ok = RespBean.ok("/WorkerPick/Refresh/finishWork", witem);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "结束服务失败，请重试!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	
	//获取项目配置
	@RequestMapping("/TurnInfo/GetTurn")
    @ResponseBody
    public String TurnInfo_GetTurn(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		List<PlanWork> pws = planWorkService.getAllPlanWorksAtTurnNoReset();		
		int mt = 0;
		int mb = 0;
		int mr = 0;
		User u = Util.getCurrentUser();
		
		for(int i=0; i<pws.size(); i++){	
			if(pws.get(i).getHid() == u.getId()){
				mt = i;
				mr = pws.get(i).getRound();
				break;
			}
			if(WorkStateUtil.IF_SZ(pws.get(i).getState()) || WorkStateUtil.IF_FW(pws.get(i).getState())){
				mb ++;
			}
		}
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("mt", mt);
		_map.put("mb", mb);
		_map.put("mr", mr);
		RespBean ok = RespBean.ok("/WorkerPick/TurnInfo/GetTurn", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
}
