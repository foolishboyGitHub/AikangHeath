package com.aikang.controller.ItemSalary;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.CSHidSalarys;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.ServiceSalary;
import com.aikang.Bean.User;
import com.aikang.service.ItemSalaryService;
import com.aikang.service.PlanWorkService;
import com.aikang.service.UserService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/ServiceSalary")
public class ItemSalaryManager {

	@Autowired
	ItemSalaryService itemSalaryService;
	
	@Autowired
	UserService userservice;
	
	//查看
	@RequestMapping("/Querry/GetUsers")
    @ResponseBody
    public String getqAllUser(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<User> users = userservice.getAllUser(null);
		RespBean ok = RespBean.ok("/ServiceSalary/Querry/GetUsers", users);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/Querry/GetSalaryByUid")
    @ResponseBody
    public String getaSalarySet(@RequestBody Integer hid, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<ServiceSalary> sls = itemSalaryService.getItemSalarysByHid(hid);
		RespBean ok = RespBean.ok("/ServiceSalary/Querry/GetSalaryByUid", sls);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	//设置
	@RequestMapping("/Config/GetUsers")
    @ResponseBody
    public String getuAllUser(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<User> users = userservice.getAllUser(null);
		RespBean ok = RespBean.ok("/ServiceSalary/Config/GetUsers", users);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/Config/GetSalaryByUid")
    @ResponseBody
    public String getSalarySet(@RequestBody Integer hid, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<ServiceSalary> sls = itemSalaryService.getItemSalarysByHid(hid);
		RespBean ok = RespBean.ok("/ServiceSalary/Config/GetSalaryByUid", sls);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/Config/SaveSalaryByUid")
    @ResponseBody
    public String addSalaryRecordByHid(@RequestBody CSHidSalarys csHS, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		if(!itemSalaryService.addSalaryRecordByHid(csHS.getHid(), csHS.getSalarys()))
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "保存提成设置失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		RespBean ok = RespBean.ok("/ServiceSalary/Config/SaveSalaryByUid", "保存设置成功！");
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
}
