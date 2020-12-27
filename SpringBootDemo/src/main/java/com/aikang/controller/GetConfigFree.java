package com.aikang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.aikang.service.PerUrlService;
import com.aikang.service.RoleService;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/GetConfigFree")
public class GetConfigFree {
	
	@Autowired
	PerUrlService perUrlService;
	@Autowired
	RoleService roleService;

}
