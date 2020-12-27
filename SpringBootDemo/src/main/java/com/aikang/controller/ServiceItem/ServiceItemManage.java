package com.aikang.controller.ServiceItem;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.CSItemIdx;
import com.aikang.Bean.PriceType;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.ServiceItem;
import com.aikang.service.ServiceItemService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/ServiceItem")
public class ServiceItemManage {

	@Autowired
	ServiceItemService stemService;
	
	//////////////////////////////////////////////////////////////////////////////////
	//排序
	@RequestMapping("/Sort/GetItemList")
    @ResponseBody
    public String getSortAllItem(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
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
		RespBean ok = RespBean.ok("/ServiceItem/Sort/GetItemList", sItems);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/Sort/Save")
    @ResponseBody
    public String SaveItemIdx(@RequestBody CSItemIdx[] idxs, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		if(idxs.length > 10000)
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "请不要作弊!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		int adl = stemService.addServiceItemIdxByList(idxs);
		if(adl != idxs.length){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "保存排序失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		RespBean ok = RespBean.ok("/ServiceItem/Sort/Save", idxs);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	/////////////////////////////////////////////////////////////////////////////////
	//设置显示隐藏
	@RequestMapping("/SetVisiable/Set")
    @ResponseBody
    public String setUserEnables(@RequestBody ServiceItem sItem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		Integer iupd = stemService.updateItemEnable(sItem);
		if(iupd == 1){
			RespBean ok = RespBean.ok("/ServiceItem/SetVisiable/Set", sItem);
		    String s = Util.setResponseToClientString(request, response, ok);
		    return s;
		}
		
		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "设置失败");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
	}
	
	//获取所有
	@RequestMapping("/SetVisiable/GetItemList")
    @ResponseBody
    public String getvAllItem(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<ServiceItem> sItems = stemService.getAllServiceItems(null);
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
		RespBean ok = RespBean.ok("/ServiceItem/SetVisiable/GetItemList", sItems);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	////////////////////////////////////////////////////////////////////////////////
	//修改

	@RequestMapping("/Update/GetItemList")
    @ResponseBody
    public String getuAllItem(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
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
		RespBean ok = RespBean.ok("/ServiceItem/Update/GetItemList", sItems);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	@RequestMapping("/Update/Update")
    @ResponseBody
    public String UpdateServiceItem(@RequestBody ServiceItem sItem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
    	
		String sexist = stemService.ifexistofUpdate(sItem);
    	if(sexist == "name"){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "项目名称已被使用");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
    	////
    	if(stemService.updateItemByPrimaryKey(sItem) == 1)
    	{
    		RespBean ok = RespBean.ok("/ServiceItem/Update/Update", "");
	        String s = Util.setResponseToClientString(request, response, ok);
	        return s;
    	}
    	RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "修改项目失败");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
    }	
	
	//////////////////////////////////////////////////////////////////////////////////////
	//查看
	@RequestMapping("/Querry/GetItemList")
    @ResponseBody
    public String getqAllItem(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<ServiceItem> sItems = stemService.getEnabledAllServiceItems(null);
		if(sItems == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取项目信息失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
//		if(sItems.isEmpty()){
//    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "没有可用项目信息!");
//    		String s = Util.setResponseToClientString(request, response, err);
//    		return s;
//    	}
		RespBean ok = RespBean.ok("/ServiceItem/Querry/GetItemList", sItems);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	
	//添加
	@RequestMapping("/AddNew/Add")
    @ResponseBody
    public String AddNewMemItem(@RequestBody ServiceItem sItem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
    	
		String sexist = stemService.ifexistof(sItem);
    	if(sexist == "name"){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "项目名称已被使用");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
    	////
    	if(stemService.insertsItem(sItem))
    	{
    		RespBean ok = RespBean.ok("/ServiceItem/AddNew/Add", "");
	        String s = Util.setResponseToClientString(request, response, ok);
	        return s;
    	}
    	RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "添加项目失败");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
    }
	
	//查看
	@RequestMapping("/PriceType/GetItemList")
    @ResponseBody
    public String getAllPriceTypeItem(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		List<PriceType> pItems = stemService.getAllPriceTypeItems();
		if(pItems == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取价格信息失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}
		RespBean ok = RespBean.ok("/ServiceItem/PriceType/GetItemList", pItems);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	//添加
	@RequestMapping("/PriceType/Add")
    @ResponseBody
    public String AddPriceTypeItem(@RequestBody PriceType pItem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
    	

    	if(stemService.insertPriceType(pItem))
    	{
    		RespBean ok = RespBean.ok("/ServiceItem/PriceType/Add", "");
	        String s = Util.setResponseToClientString(request, response, ok);
	        return s;
    	}
    	RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "添加类型失败");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
    }
	
	//删除
	@RequestMapping("/PriceType/Del")
    @ResponseBody
    public String DelPriceTypeItem(@RequestBody PriceType pItem, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
    	

    	if(stemService.deletePriceTypeByid(pItem.getId()) == 1)
    	{
    		RespBean ok = RespBean.ok("/ServiceItem/PriceType/Del", "");
	        String s = Util.setResponseToClientString(request, response, ok);
	        return s;
    	}
    	RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "删除失败");
		String s = Util.setResponseToClientString(request, response, err);
		return s;
    }
}
