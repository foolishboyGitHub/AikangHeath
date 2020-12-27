package com.aikang.controller.Member;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.CSHidRids;
import com.aikang.Bean.CSPerRole;
import com.aikang.Bean.CSUserRole;
import com.aikang.Bean.PerUrl;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.Role;
import com.aikang.Bean.User;
import com.aikang.service.PerUrlService;
import com.aikang.service.RoleService;
import com.aikang.service.UserService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/Member")
public class MemberManager {

	@Autowired
	PerUrlService perUrlService;
	@Autowired
	RoleService roleService;
	
	@Autowired
	UserService userservice;
	
	
	
	//获取所有模块功能的权限角色配置
	@RequestMapping("/Update/SetRoles")
    @ResponseBody
    public String updateUsersRole(@RequestBody CSHidRids cshp, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {

		if(userservice.updateUserRole(cshp.getHid(), cshp.getRids())){
			RespBean ok = RespBean.ok("/Member/Update/SetRoles", cshp);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}	
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "修改员工权限失败");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	//获取所有模块功能的权限角色配置
	@RequestMapping("/Update/GetRoles")
    @ResponseBody
    public String updateUsergRole(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {

		List<Role> prp = roleService.getAllRoles();
		RespBean ok = RespBean.ok("/Member/Update/GetRoles", prp);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	//获取所有模块功能的权限角色配置
	@RequestMapping("/Update/Update")
    @ResponseBody
    public String updateUser(@RequestBody User user, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		String sexist = userservice.ifexistofUpdate(user);
    	if(sexist == "phone"){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此手机号已被倍的员工使用");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
    	if(sexist == "servicecode"){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此排钟编码已被别的员工使用");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		
		Integer iupd = userservice.updateUser(user);
		if(iupd == 1){
			RespBean ok = RespBean.ok("/Member/Update/Update", "ok");
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "修改员工资料失败");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	//获取所有模块功能的权限角色配置
	@RequestMapping("/Update/GetUser")
    @ResponseBody
    public String getuAllUser(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<User> users = userservice.getAllUser("");
		RespBean ok = RespBean.ok("/Member/Update/GetUser", users);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
		
	//获取所有模块功能的权限角色配置
	@RequestMapping("/SetVisiable/Set")
    @ResponseBody
    public String setUserEnables(@RequestBody User user, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		Integer iupd = userservice.updateUserEnable(user);
		if(iupd == 1){
			RespBean ok = RespBean.ok("/Member/SetVisiable/Set", user);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "设置失败");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	//获取所有模块功能的权限角色配置
	@RequestMapping("/SetVisiable/GetUser")
    @ResponseBody
    public String getsAllUser(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<User> users = userservice.getAllUser("");
		RespBean ok = RespBean.ok("/Member/SetVisiable/GetUser", users);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
		
	//获取所有模块功能的权限角色配置
	@RequestMapping("/Query/GetUser")
    @ResponseBody
    public String getAllUser(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<User> users = userservice.getAllUser("");
		RespBean ok = RespBean.ok("/Member/Query/GetUser", users);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	//获取所有模块功能的权限角色配置
	@RequestMapping("/AddNew/GetRoles")
    @ResponseBody
    public String getSystemAllRole(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<Role> prp = roleService.getAllRoles();
		RespBean ok = RespBean.ok("/Member/AddNew/GetRoles", prp);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
		
    @RequestMapping("/AddNew/Add")
    @ResponseBody
    public String AddNewMemUsr(@RequestBody CSUserRole cpur, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
    	
    	String sexist = userservice.ifexistof(cpur.getUser());
    	if(sexist == "username"){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "员工ID已被使用");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
    	if(sexist == "phone"){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "手机号已被使用");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
    	if(sexist == "servicecode"){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "排钟编码已被使用");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
    	///加密 密码
    	cpur.getUser().setEnabled(true);
    	User ur = cpur.getUser();
    	String pw = ur.getPassword();
    	pw = new BCryptPasswordEncoder().encode(pw);
    	ur.setPassword(pw);
    	///
    	if(userservice.insertUserAndRole(ur, cpur.getRids()) )
    	{
    		RespBean ok = RespBean.ok("/Member/AddNew/Add", "");
	        String s = Util.setResponseToClientString(request, response, ok);
	        return s;
    	}
    	RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "添加员工失败");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
    }	
}
