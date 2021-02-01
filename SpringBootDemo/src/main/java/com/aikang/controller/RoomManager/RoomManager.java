package com.aikang.controller.RoomManager;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.RespBean;
import com.aikang.Bean.Room;
import com.aikang.service.RoomService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/RoomSet")
public class RoomManager {

	@Autowired
	RoomService roomService;
	//查看
	@RequestMapping("/Querry/GetAllRoom")
    @ResponseBody
    public String getAllRoom(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<Room> rms = roomService.getAllEnableRoom();
		RespBean ok = RespBean.ok("/RoomSet/Querry/GetAllRoom", rms);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	@RequestMapping("/Querry/GetEnabledRoom")
    @ResponseBody
    public String getEnabledRoom(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<Room> rms = roomService.getAllEnableRoom();
		RespBean ok = RespBean.ok("/RoomSet/Querry/GetEnabledRoom", rms);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	//添加
	@RequestMapping("/Add/AddNew")
    @ResponseBody
    public String addNewRoom(@RequestBody Room room, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		Map<String, Object> map = roomService.getAllCompanyRoomNum(Util.getConpnany_Name());
		
		if(map == null || map.get("total") == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "公司房间信息库异常 ，请与服务商联系!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		Integer total = Integer.parseInt(map.get("total").toString());
		if(total > 200){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "公司会房间总数不能超过200个!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		List<Room> rms = roomService.getRoomByName(room.getName());
		if(rms!=null && rms.size()>0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "房间名称已经存在!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		int admnum = roomService.addRoom(room);
		if(admnum == 1){
			RespBean ok = RespBean.ok("/RoomSet/Add/AddNew", "添加房间成功");
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "添加失败!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	
	//修改
	@RequestMapping("/Update/GetAllRoom")
    @ResponseBody
	public String getuEnabledRoom(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<Room> rms = roomService.getAllEnableRoom();
		RespBean ok = RespBean.ok("/RoomSet/Update/GetAllRoom", rms);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/Update/Update")
    @ResponseBody
    public String UpdateRoom(@RequestBody Room room, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		List<Room> rms = roomService.getRoomByName_ec(room.getId(), room.getName());
		if(rms!=null && rms.size()>0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "房间名称已经存在!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		int admnum = roomService.updateRoomByIDSelective(room);
		if(admnum == 1){
			RespBean ok = RespBean.ok("/RoomSet/Update/Update", room);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "修改失败!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	
	//显示 隐藏
	@RequestMapping("/SetEnabled/GetAllRoom")
    @ResponseBody
	public String geteAllRoom(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<Room> rms = roomService.getAllRoom();
		RespBean ok = RespBean.ok("/RoomSet/SetEnabled/GetAllRoom", rms);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/SetEnabled/SetEnabled")
    @ResponseBody
    public String UpdateRoomEnabled(@RequestBody Room room, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		int admnum = roomService.updateRoomEnableByID(room);
		if(admnum == 1){
			RespBean ok = RespBean.ok("/RoomSet/SetEnabled/SetEnabled", room);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "修改失败!");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
}
