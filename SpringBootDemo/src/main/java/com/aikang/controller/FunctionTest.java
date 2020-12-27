package com.aikang.controller;

import java.io.IOException;
import java.lang.reflect.Field;
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
import com.aikang.Bean.Role;
import com.aikang.service.PerUrlService;
import com.aikang.service.RoleService;
import com.aikang.service.UserService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller // 标明这是一个SpringMVC的Controller控制器
public class FunctionTest {

	@Autowired
	PerUrlService perUrlService;
	@Autowired
	RoleService roleService;
	
	
	@RequestMapping("/employee")
    @ResponseBody
//    @CrossOrigin  //这个可以实现本方法的 局部跨域  因为配置了跨域 这里不需要了
    public String employee(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
    	
    	RespBean ok = RespBean.ok("/employee", "你在点击 /employee");
        String s = Util.setResponseToClientString(request, response, ok);
        return s;
    }
	
	@RequestMapping("/personnel/ec/")
    @ResponseBody
//    @CrossOrigin  //这个可以实现本方法的 局部跨域  因为配置了跨域 这里不需要了
    public String personnelec(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
    	
    	RespBean ok = RespBean.ok("/personnel/ec/", "你在点击 /personnel/ec/");
        String s = Util.setResponseToClientString(request, response, ok);
        return s;
    }
	
	@RequestMapping("/salary")
    @ResponseBody
//    @CrossOrigin  //这个可以实现本方法的 局部跨域  因为配置了跨域 这里不需要了
    public String salary(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
    	
    	RespBean ok = RespBean.ok("/salary", "你在点击 /salary");
        String s = Util.setResponseToClientString(request, response, ok);
        return s;
    }
	
	@RequestMapping("/salary/sobcfg")
    @ResponseBody
//    @CrossOrigin  //这个可以实现本方法的 局部跨域  因为配置了跨域 这里不需要了
    public String salarysobcfg(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
    	
    	RespBean ok = RespBean.ok("/salary/sobcfg", "你在点击 /salary/sobcfg");
        String s = Util.setResponseToClientString(request, response, ok);
        return s;
    }
	
	@RequestMapping("/system")
    @ResponseBody
//    @CrossOrigin  //这个可以实现本方法的 局部跨域  因为配置了跨域 这里不需要了
    public String system(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
    	
    	RespBean ok = RespBean.ok("/system", "你在点击 /system");
        String s = Util.setResponseToClientString(request, response, ok);
        return s;
    }
}
