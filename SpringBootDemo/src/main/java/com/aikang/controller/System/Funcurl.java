package com.aikang.controller.System;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.CSPerRole;
import com.aikang.Bean.PerUrl;
import com.aikang.Bean.RespBean;
import com.aikang.service.PerUrlService;
import com.aikang.service.RoleService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/System/Funcurl")
public class Funcurl {

	@Autowired
	PerUrlService perUrlService;
	@Autowired
	RoleService roleService;
	
	//获取所有模块功能的权限角色配置
		@PostMapping("/Del")
		@ResponseBody
	    public String System_Funcurl_Del(@RequestBody Integer id, HttpServletRequest request, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException, NoSuchFieldException, SecurityException {
			if(id!= null){
				Integer pid = perUrlService.deletePerByPrimaryKey(id);
				if(pid >= 0){
					RespBean ok = RespBean.ok("/System/Funcurl/Del", pid);
			        String s = Util.setResponseToClientString(request, response, ok);
			        return s;
				}
			}
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "删除功能失败");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
	    }
	//获取所有模块功能的权限角色配置
	@PostMapping("/Add")
	@ResponseBody
    public String System_Funcurl_Add(@RequestBody PerUrl pul, HttpServletRequest request, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException, NoSuchFieldException, SecurityException {
		//Myclass myclass = mapper.readValue(jsonStr , Myclass.class); 
//				if(perus != null){
//					CSPerRole[] op = new ObjectMapper().readValue(perus, CSPerRole[].class);
//					for(int i=0; i<op.length; i++){
//						CSPerRole cpr = op[i];
//						System.out.print(cpr.getPname());
//					}
//				}
		if(pul!= null){
			Integer pid = perUrlService.insertSelective(pul);
			if(pid >= 0){
				RespBean ok = RespBean.ok("/System/Funcurl/Add", pid);
		        String s = Util.setResponseToClientString(request, response, ok);
		        return s;
			}
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "添加功能失败");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
    }
	
	//获取所有模块功能的权限角色配置
	@RequestMapping("/GetAllUrlWithRole")
    @ResponseBody
//		    @CrossOrigin  //这个可以实现本方法的 局部跨域  因为配置了跨域 这里不需要了
    public String GetAllUrlWithRole(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<PerUrl> pr = perUrlService.getAllMenus2();
    	RespBean ok = RespBean.ok("/System/Funcurl/GetAllUrlWithRole", pr);
        String s = Util.setResponseToClientString(request, response, ok);
        return s;
    }
}
