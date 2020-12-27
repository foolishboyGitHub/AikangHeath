package com.aikang.controller.PlanWorker;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.PlanExcItem;
import com.aikang.Bean.PlanWork;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.RoundsConfig;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.User;
import com.aikang.service.PlanWorkService;
import com.aikang.service.ServiceItemService;
import com.aikang.service.UserService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/PlanWorker")
public class PlanWorkerManager {

	@Autowired
	PlanWorkService planWorkService;
	
	@Autowired
	UserService userservice;
	
	@Autowired
	ServiceItemService stemService;
	
	@RequestMapping("/PlanList/SavePlanList")
    @ResponseBody
    public String SaveItemIdx(@RequestBody PlanWork[] pws, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		if(pws.length > 10000)
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "请不要作弊!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		int adl = planWorkService.addPlanWorksByList(pws);
		if(adl != pws.length){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "保存排序失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		RespBean ok = RespBean.ok("/PlanWorker/PlanList/SavePlanList", pws);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/PlanList/GetAllUser")
    @ResponseBody
    public String getuAllUser(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<User> users = userservice.getAllUser(null);
		RespBean ok = RespBean.ok("/PlanWorker/PlanList/GetAllUser", users);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/PlanList/GetPlanUser")
    @ResponseBody
    public String getpAllUser(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<PlanWork> works = planWorkService.getAllPlanWorks();
		RespBean ok = RespBean.ok("/PlanWorker/PlanList/GetPlanUser", works);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	//排钟项目 排除不可做的项目
	@RequestMapping("/PlanExcItem/GetAllUser")
    @ResponseBody
    public String getExcAllUser(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<User> users = userservice.getAllUser(null);
		RespBean ok = RespBean.ok("/PlanWorker/PlanExcItem/GetAllUser", users);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/PlanExcItem/GetItemList")
    @ResponseBody
    public String getAllServiceItem(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
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
		RespBean ok = RespBean.ok("/PlanWorker/PlanExcItem/GetItemList", sItems);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/PlanExcItem/GetAllExcItem")
    @ResponseBody
    public String getAllExcItem(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<PlanExcItem> eworks = planWorkService.getAllPlanExcItems();
		RespBean ok = RespBean.ok("/PlanWorker/PlanExcItem/GetAllExcItem", eworks);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/PlanExcItem/SaveExcItem")
    @ResponseBody
    public String SavePlanExcItem(@RequestBody PlanExcItem[] pws, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		if(pws.length > 10000 || pws.length<=0)
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "请不要作弊!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(pws.length<=0)
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有可用数据需要保存!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		int hid = pws[0].getHid();
		if(!planWorkService.addExcItemByList(hid, pws)){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "保存设置失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<PlanExcItem> eworks = planWorkService.getAllPlanExcItems();
		RespBean ok = RespBean.ok("/PlanWorker/PlanExcItem/SaveExcItem", eworks);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	//排钟设置
	@RequestMapping("/Config/GetConfig")
    @ResponseBody
    public String getRoundsConfig(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		RoundsConfig rfg = planWorkService.getRoundsConfig();
		RespBean ok = RespBean.ok("/PlanWorker/Config/GetConfig", rfg);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/Config/SaveConfig")
    @ResponseBody
    public String SaveRoundsConfig(@RequestBody RoundsConfig rfg, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		if(!planWorkService.addRoundsConfig(rfg)){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "保存设置失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		RespBean ok = RespBean.ok("/PlanWorker/Config/SaveConfig", rfg);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
}
