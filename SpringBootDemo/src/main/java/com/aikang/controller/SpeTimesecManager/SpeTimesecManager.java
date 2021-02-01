package com.aikang.controller.SpeTimesecManager;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.RespBean;
import com.aikang.Bean.Room;
import com.aikang.Bean.SpeTimesec;
import com.aikang.service.TimesecService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/TimeSet")
public class SpeTimesecManager {
	
	@Autowired
	TimesecService tmSecService;
	//查看
	@RequestMapping("/SpeTimeSec/GetTimeSecList")
    @ResponseBody
    public String getAllRoom(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<SpeTimesec> stimes = tmSecService.getAllSpeTimesecList(Util.getConpnany_Name());
		
		RespBean ok = RespBean.ok("/TimeSet/SpeTimeSec/GetTimeSecList", stimes);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	//添加
	@RequestMapping("/SpeTimeSec/newTimeSec")
    @ResponseBody
    public String newTimeSec(@RequestBody SpeTimesec spetm, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	Date sdate = ft.parse(spetm.getStart());
    	Date edate = ft.parse(spetm.getEnd());
		if(edate.getTime() <= sdate.getTime()){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "结束时间不能早于开始时间！");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		List<SpeTimesec> stimes = tmSecService.getAllTypeSpetimesecs(spetm.getType(), Util.getConpnany_Name());
		int find = 0;
		for(int i=0; i<stimes.size(); i++){
			SpeTimesec sp = stimes.get(i);
			if(sp.getType() != spetm.getType()){
				continue;
			}
			Date sd = ft.parse(sp.getStart());
			Date ed = ft.parse(sp.getEnd());
			
			if(sdate.getTime()>=sd.getTime() && sdate.getTime()<=ed.getTime()){
				find = 1;
				break;
			}
			if(edate.getTime()>=sd.getTime() && edate.getTime()<=ed.getTime()){
				find = 1;
				break;
			}
			
			if(sd.getTime()>=sdate.getTime() && sd.getTime()<=edate.getTime()){
				find = 1;
				break;
			}
			if(ed.getTime()>=sdate.getTime() && ed.getTime()<=edate.getTime()){
				find = 1;
				break;
			}
		}
		if(find == 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "同一类型时间段之间不能重叠！");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		int inum = tmSecService.insertSpeTimesec(spetm, Util.getConpnany_Name());
		if(inum != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "添加失败 请重试！");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		stimes = tmSecService.getAllSpeTimesecList(Util.getConpnany_Name());
		RespBean ok = RespBean.ok("/TimeSet/SpeTimeSec/newTimeSec", stimes);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	//更新
	@RequestMapping("/SpeTimeSec/updateTimeSec")
    @ResponseBody
    public String updateTimeSec(@RequestBody SpeTimesec spetm, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	Date sdate = ft.parse(spetm.getStart());
    	Date edate = ft.parse(spetm.getEnd());
		if(edate.getTime() <= sdate.getTime()){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "结束时间不能早于开始时间！");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		List<SpeTimesec> stimes = tmSecService.getAllTypeSpetimesecs(spetm.getType(), Util.getConpnany_Name());
		int find = 0;
		for(int i=0; i<stimes.size(); i++){
			SpeTimesec sp = stimes.get(i);
			if(sp.getType() != spetm.getType()){
				continue;
			}
			if(sp.getId() == spetm.getId()){
				continue;
			}
			Date sd = ft.parse(sp.getStart());
			Date ed = ft.parse(sp.getEnd());
			
			if(sdate.getTime()>=sd.getTime() && sdate.getTime()<=ed.getTime()){
				find = 1;
				break;
			}
			if(edate.getTime()>=sd.getTime() && edate.getTime()<=ed.getTime()){
				find = 1;
				break;
			}
			
			if(sd.getTime()>=sdate.getTime() && sd.getTime()<=edate.getTime()){
				find = 1;
				break;
			}
			if(ed.getTime()>=sdate.getTime() && ed.getTime()<=edate.getTime()){
				find = 1;
				break;
			}
		}
		if(find == 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "同一类型时间段之间不能重叠！");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		int inum = tmSecService.updateSpeTimesecByIDSelective(spetm, Util.getConpnany_Name());
		if(inum != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "更新失败 请重试！");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		stimes = tmSecService.getAllSpeTimesecList(Util.getConpnany_Name());
		RespBean ok = RespBean.ok("/TimeSet/SpeTimeSec/updateTimeSec", stimes);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	//添加
	@RequestMapping("/SpeTimeSec/delTimeSec")
    @ResponseBody
    public String delTimeSec(@RequestBody SpeTimesec spetm, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		
		int inum = tmSecService.delSpeTimesecByID(spetm, Util.getConpnany_Name());
		if(inum != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "删除失败 请重试！");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		List<SpeTimesec> stimes = tmSecService.getAllSpeTimesecList(Util.getConpnany_Name());
		RespBean ok = RespBean.ok("/TimeSet/SpeTimeSec/delTimeSec", stimes);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
}
