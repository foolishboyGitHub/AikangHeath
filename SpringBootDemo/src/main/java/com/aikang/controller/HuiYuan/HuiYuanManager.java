package com.aikang.controller.HuiYuan;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.CSHuiYuanCreate;
import com.aikang.Bean.Company;
import com.aikang.Bean.HuiYuan;
import com.aikang.Bean.HuiYuanType;
import com.aikang.Bean.PlanWork;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.User;
import com.aikang.service.CompanyService;
import com.aikang.service.HuiYuanService;
import com.aikang.service.UserService;
import com.aikang.service.WaiterItemService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/HuiYuanSet")
public class HuiYuanManager {

	@Autowired
	HuiYuanService huiYuanService;
	
	@Autowired
	UserService userservice;
	
	@Autowired
	WaiterItemService wiService;
	
	@Autowired 
	CompanyService companyService;
	
	@RequestMapping("/TypeSet/GetAllTypes")
    @ResponseBody
    public String TypeSet_GetAllType(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		List<HuiYuanType> hyts = huiYuanService.getAllCompanyHuiYuanTypes(Util.getConpnany_Name());
		if(hyts == null || hyts.size()<=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取会员类型数据失败，请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		RespBean ok = RespBean.ok("/HuiYuanSet/TypeSet/GetAllTypes", hyts);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/TypeSet/AddNewType")
    @ResponseBody
    public String TypeSet_AddNewType(@RequestBody HuiYuanType hyt, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		Map<String, Object> map = huiYuanService.getAllCompanyHuiYuanTypeNum(Util.getConpnany_Name());
		
		if(map == null || map.get("total") == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "公司会员信息库异常 ，请与服务商联系!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		Integer total = Integer.parseInt(map.get("total").toString());
		if(total > 100){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "公司会员类型总数不能超过100个!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		HuiYuanType hytold = huiYuanService.getHuiYuanTypeByTypename(Util.getConpnany_Name(), hyt.getTypename());
		if(hytold != null)
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "会员类型名称不能重复!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		HuiYuanType hytoldr = huiYuanService.getHuiYuanTypeByRechargeam(Util.getConpnany_Name(), hyt.getRechargeam());
		if(hytoldr != null)
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "充值金额不能重复!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(hyt.getActdays() > 20*365){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "有效期限不能超过20年!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		Date date = new Date();
		String seriid = hyt.getSdx()+""+date.getTime() +"000"+ Util.randomString(8);
		hyt.setCompany(Util.getConpnany_Name());
		hyt.setSeriid(seriid);
		int a = huiYuanService.insertHuiYuanType(hyt);
		if(a != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "添加失败， 请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<HuiYuanType> hyts = huiYuanService.getAllCompanyHuiYuanTypes(Util.getConpnany_Name());
		RespBean ok = RespBean.ok("/HuiYuanSet/TypeSet/AddNewType", hyts);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/TypeSet/UpdateType")
    @ResponseBody
    public String TypeSet_UpdateType(@RequestBody HuiYuanType hyt, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		HuiYuanType hytold = huiYuanService.getHuiYuanTypeByTypenameEx(Util.getConpnany_Name(), hyt.getTypename(), hyt.getId());
		if(hytold != null)
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "会员类型名称不能重复!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		HuiYuanType hytoldr = huiYuanService.getHuiYuanTypeByRechargeamEx(Util.getConpnany_Name(), hyt.getRechargeam(), hyt.getId());
		if(hytoldr != null)
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "充值金额不能重复!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(hyt.getActdays() > 20*365){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "有效期限不能超过20年!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		int a = huiYuanService.updateHuiYuanTypeByPrimaryKeySelective(hyt);
		if(a != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "更新失败， 请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<HuiYuanType> hyts = huiYuanService.getAllCompanyHuiYuanTypes(Util.getConpnany_Name());
		RespBean ok = RespBean.ok("/HuiYuanSet/TypeSet/UpdateType", hyts);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/TypeSet/DelType")
    @ResponseBody
    public String TypeSet_DelType(@RequestBody HuiYuanType hyt, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		//
		if(hyt != null)
		{
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "会员类型删除会影响此类型下所有会员，请勿使用这个操作， 若您不想使用这个类型，可以不启用!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
//		int a = huiYuanService.deleteHuiYuanTypeByID(hyt.getId());
//		if(a != 1){
//			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "删除失败， 请重试!");
//    		String s = Util.setResponseToClientString(request, response, err);
//    		return s;
//		}
		List<HuiYuanType> hyts = huiYuanService.getAllCompanyHuiYuanTypes(Util.getConpnany_Name());
		RespBean ok = RespBean.ok("/HuiYuanSet/TypeSet/DelType", hyts);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/CardAndCharge/GetTypeAndWorkList")
    @ResponseBody
    public String CardAndCharge_GetTypeAndWorkList(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		List<HuiYuanType> hyts = huiYuanService.getAllEnableCompanyHuiYuanTypes(Util.getConpnany_Name(), 1);
		
		List<User> users = userservice.getAllSimpHrs(null, Util.getConpnany_Name());
		
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("tl", hyts);
		_map.put("wl", users);
		
		RespBean ok = RespBean.ok("/HuiYuanSet/CardAndCharge/GetTypeAndWorkList", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/HuiYuanInfo/GetHuiYuanList")
    @ResponseBody
    public String HuiYuanInfo_GetHuiYuanList(@RequestBody Map<String, String> point, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		String sstart = point.get("start");
		if(sstart == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "参数非法!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		int start = Integer.parseInt(sstart);
		String spage = point.get("page");
		if(spage == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "参数非法!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		int page = Integer.parseInt(spage);
		if(start <0 || page<=0){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "参数非法!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<HuiYuan> hyls = huiYuanService.getAllCompanyHuiYuans(Util.getConpnany_Name(), start, page);
		
		RespBean ok = RespBean.ok("/HuiYuanSet/HuiYuanInfo/GetHuiYuanList", hyls);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/HuiYuanInfo/GetHuiYuanDetail")
    @ResponseBody
    public String HuiYuanInfo_GetHuiYuanDetail(@RequestBody Map<String, String> point, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		String sid = point.get("id");
		long id = Long.parseLong(sid);
		HuiYuan hy = huiYuanService.getHuiYuanByID(id);
		if(hy==null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "查看失败， 请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		RespBean ok = RespBean.ok("/HuiYuanSet/HuiYuanInfo/GetHuiYuanDetail", hy);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/HuiYuanInfo/GetHuiYuanSpendRecord")
    @ResponseBody
    public String HuiYuanInfo_GetHuiYuanSpendRecord(@RequestBody Map<String, String> point, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		String sid = point.get("id");
		long id = Long.parseLong(sid);
		List<Map<String, Object>> sprl =  wiService.getCompanyHuiYuanSpandWBillItemByseriid(id, Util.getConpnany_Name());

		RespBean ok = RespBean.ok("/HuiYuanSet/HuiYuanInfo/GetHuiYuanSpendRecord", sprl);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}

	
	@RequestMapping("/CardAndCharge/AddNewCard")
    @ResponseBody
    public String CardAndCharge_AddNewCard(@RequestBody CSHuiYuanCreate cshy, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		Map<String, Object> map = huiYuanService.getAllCompanyHuiYuanNum(Util.getConpnany_Name());
		
		if(map == null || map.get("total") == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "公司会员信息库异常 ，请与服务商联系!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		Integer total = Integer.parseInt(map.get("total").toString());
		if(total > 5000){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "公司会员总数不能超过5000个!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		HuiYuan hy = cshy.getHy();
		List<User> users = cshy.getUl();
		
		HuiYuanType hyt = huiYuanService.getHuiYuanTypeByID(hy.getTypeid());
		if(hyt == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "错误的会员类型，请重新选择!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(hyt.getLimitcharge() == 1){
			if(hy.getRmoney() < hyt.getRechargeam()){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此会员类型，实充金额不能少于 "+hyt.getRechargeam());
	    		String s = Util.setResponseToClientString(request, response, err);
	    		return s;
			}
		}
		HuiYuan oldhy = huiYuanService.getHuiYuanByCardid(hy.getCardid(), Util.getConpnany_Name());
		if(oldhy != null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "会员卡号已存在!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		HuiYuan oldhy1 = huiYuanService.getHuiYuanByPhonecodeAndType(hy.getPhonecode(), hyt.getSeriid(), Util.getConpnany_Name());
		if(oldhy1 != null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此类型 手机号码已存在!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	String closestr = ft.format(date.getTime()+hyt.getActdays()*24*60*60*1000);
    	if(hyt.getActdays() == 0){
    		closestr = "2071-01-01 00:00:00";
    	}
		String seriid = hyt.getSdx()+""+date.getTime() +"000"+ Util.randomString(8);
		hy.setCompany(Util.getConpnany_Name());
		Company cm = companyService.getCompanyByUsername(Util.getConpnany_Name());
		if(cm != null){
			hy.setCompanycname(cm.getCname());
		}
		
		hy.setTypecname(hyt.getTypename());
		hy.setTypeseriid(hyt.getSeriid());
		hy.setSeriid(seriid);
		hy.setCreatedate(dstr);
		hy.setClosedate(closestr);
		hy.setLastchagredate(dstr);
		hy.setDisrate(hyt.getDisrate());
		hy.setRmoney(hyt.getRechargeam() + hyt.getGiftam());
		hy.setSummoney(hyt.getRechargeam());
		hy.setSudmoney(hyt.getGiftam());
		
		int a = huiYuanService.insertHuiYuan(hy, users, hyt);
		if(a != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "办卡失败， 请重试！ ");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		RespBean ok = RespBean.ok("/HuiYuanSet/CardAndCharge/AddNewCard", hy);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/UpdateInfo/UpdateDetail")
    @ResponseBody
    public String UpdateInfo_UpdateDetail(@RequestBody HuiYuan hy, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		if(hy.getTypeid() != null){
			HuiYuanType hyt = huiYuanService.getHuiYuanTypeByID(hy.getTypeid());
			if(hyt == null){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "错误的会员类型，请重新选择!");
	    		String s = Util.setResponseToClientString(request, response, err);
	    		return s;
			}
			hy.setTypecname(hyt.getTypename());
			hy.setTypeseriid(hyt.getSeriid());
		}
		

		
		int a = huiYuanService.updateHuiYuanByPrimaryKeySelective(hy);
		if(a != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "修改失败， 请重试！ ");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		RespBean ok = RespBean.ok("/HuiYuanSet/UpdateInfo/UpdateDetail", hy);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/HuiYuanInfo/GetHuiYuanAtLikeKeyWord")
    @ResponseBody
    public String HuiYuanInfo_GetHuiYuanAtLikeKeyWord(@RequestBody Map<String, String> point, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		String keyword = point.get("keyword");
		List<HuiYuan> hyls = huiYuanService.QueryHuiYuanByInfokey(Util.getConpnany_Name(), keyword);
		
		RespBean ok = RespBean.ok("/HuiYuanSet/HuiYuanInfo/GetHuiYuanAtLikeKeyWord", hyls);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/CardAndCharge/RechargeInfo")
    @ResponseBody
    public String CardAndCharge_RechargeInfo(@RequestBody Map<String, String> point, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
		
		String sid = point.get("id");
		long id = Long.parseLong(sid);
		String typeseriid = point.get("typeseriid");
		HuiYuan hy = huiYuanService.getHuiYuanByID(id);
		if(hy==null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获得会员信息失败， 请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		HuiYuanType hyt = huiYuanService.getHuiYuanTypeByID(hy.getTypeid());
		if(hyt == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "错误的会员类型，请重新选择!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		List<User> users = userservice.getAllSimpHrs(null, Util.getConpnany_Name());
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("hy", hy);
		_map.put("hyt", hyt);
		_map.put("wl", users);
		RespBean ok = RespBean.ok("/HuiYuanSet/CardAndCharge/RechargeInfo", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	@RequestMapping("/CardAndCharge/RechargeCard")
    @ResponseBody
    public String CardAndCharge_RechargeCard(@RequestBody CSHuiYuanCreate cshy, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException 
	{
		
		HuiYuan hy = cshy.getHy();
		List<User> users = cshy.getUl();

		HuiYuan oldhy = huiYuanService.getHuiYuanByID(hy.getId());
		if(oldhy == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "会员不存在!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		
		HuiYuanType hyt = huiYuanService.getHuiYuanTypeByID(oldhy.getTypeid());
		if(hyt == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "错误的会员类型，请重新选择!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		if(hyt.getLimitcharge() == 1){
			if(hy.getRmoney() < hyt.getRechargeam()){
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此会员类型，充值金额不能少于 "+hyt.getRechargeam());
	    		String s = Util.setResponseToClientString(request, response, err);
	    		return s;
			}
		}
		double charmoney = hy.getRmoney();//充值金额
		double zsmoney = hyt.getGiftam();//赠送金额
		double rmoney = oldhy.getRmoney() + charmoney + zsmoney; //充值后余额
		
		oldhy.setRmoney(rmoney);
		oldhy.setSummoney(oldhy.getSummoney() + charmoney);
		oldhy.setSudmoney(oldhy.getSudmoney() + zsmoney);
		
    	if(hyt.getActdays() != 0){
    		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        	Date date = new Date();
    		String closestr = ft.format(date.getTime()+hyt.getActdays()*24*60*60*1000);
    		oldhy.setClosedate(closestr);
    	}
    	
		int u = huiYuanService.huiyuanCardRechage(charmoney, zsmoney, oldhy, users, hyt);
		if(u != 1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "充值失败， 请重试!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
		}
		RespBean ok = RespBean.ok("/HuiYuanSet/CardAndCharge/RechargeCard", oldhy);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
}
