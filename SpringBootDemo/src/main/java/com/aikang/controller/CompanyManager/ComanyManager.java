package com.aikang.controller.CompanyManager;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
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
import org.springframework.util.ClassUtils;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.aikang.Bean.Company;
import com.aikang.Bean.CompanyPicture;
import com.aikang.Bean.GukeShopings;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.TeleVerify;
import com.aikang.Bean.User;
import com.aikang.SmsUtil.CODETYPE;
import com.aikang.service.CompanyService;
import com.aikang.service.UserService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/CompanyManager")
public class ComanyManager {

	@Autowired 
	CompanyService companyService;
	
	@Autowired
	UserService uService;
	
	@RequestMapping("/InfoUpdate/GetCompanyInfo")
    @ResponseBody
    public String InfoUpdate_GetCompanyInfo(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		Company cm = companyService.getCompanyByUsername(u.getCompany());
    	if(cm == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取资料出错!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
    	Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("msg", "ok");
		_map.put("cm", cm);
		RespBean ok = RespBean.ok("/CompanyManager/InfoUpdate/GetCompanyInfo", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/InfoUpdate/UpdateCompanyInfo")
    @ResponseBody
    public String InfoUpdate_UpdateCompanyInfo(@RequestBody Company cmu, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		Company cm = companyService.getCompanyByUsername(u.getCompany());
		if(cm == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取资料出错!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		Company cmset = new Company();
		cmset.setId(cm.getId());
		cmset.setCname(cmu.getCname());
		cmset.setAdress(cmu.getAdress());
		cmset.setSevtelephone(cmu.getSevtelephone());
		cmset.setSevmobilephone(cmu.getSevmobilephone());
		cmset.setShoptime(cmu.getShoptime());
		cmset.setNotice(cmu.getNotice());
		cmset.setHeadpic(cmu.getHeadpic());
		int r = companyService.updateCompanyDataByIDSelective(cmset);
		if(r!=1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "更新出错!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		cm = companyService.getCompanyByUsername(u.getCompany());
    	Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("msg", "ok");
		_map.put("cm", cm);
		RespBean ok = RespBean.ok("/CompanyManager/InfoUpdate/UpdateCompanyInfo", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/PicManager/GetCompanyPicList")
    @ResponseBody
    public String PicManager_GetCompanyPicList(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		List<CompanyPicture> cpics = companyService.getAllCompanyPicture(u.getCompany());
		
    	Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("msg", "ok");
		_map.put("cpics", cpics);
		RespBean ok = RespBean.ok("/CompanyManager/PicManager/GetCompanyPicList", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/PicManager/DelPic")
    @ResponseBody
    public String PicManager_DelPic(@RequestBody Map<String, String> info,HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException, FileNotFoundException {
		User u = Util.getCurrentUser();
		if(u == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "非法的用户!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		String sid = info.get("id");
		long id = Long.parseLong(sid);
		CompanyPicture oldpic = companyService.getCompanyPictureByID(id);
		if(oldpic == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有这个图片数据!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		File path = new File(ResourceUtils.getURL("classpath:").getPath());
		String staticstr = "";
    	if(System.getProperty("os.name").toLowerCase().contains("win")){
    		staticstr = "\\"+"static\\";
    	}else{
    		staticstr = "/"+"static/";
    	}
    	String file_del = path.getAbsolutePath()+staticstr+oldpic.getFilename();
    	String file_del_min = path.getAbsolutePath()+staticstr+oldpic.getFilenamemin();
		File file = new File(file_del);
		File file_min = new File(file_del_min);
		if (!file.exists()) {

        }
		if(!file.delete()){

		}
		if (!file_min.exists()) {

        }
		if(!file_min.delete()){

		}
		int del = companyService.deleteCompanyPictureByID(id);
		if(del != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "数据删除失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
    	Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("msg", "ok");
		_map.put("id", id);
		RespBean ok = RespBean.ok("/CompanyManager/PicManager/DelPic", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
}
