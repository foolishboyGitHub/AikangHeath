package com.aikang.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.RespBean;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
public class Imgloadtest {

//	@RequestMapping("/img/load/")
//    @ResponseBody
//    @CrossOrigin  //这个可以实现本方法的 局部跨域  因为配置了跨域 这里不需要了
//    public String img_load(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
//    	
//    	RespBean ok = RespBean.ok("/personnel/ec/", "你在点击 /personnel/ec/");
//        String s = Util.setResponseToClientString(request, response, ok);
//        return s;
//    }
}
