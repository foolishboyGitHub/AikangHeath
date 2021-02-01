package com.aikang.controller.QueryData;

import java.text.ParseException;
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

import com.aikang.Bean.PlanWork;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.ServiceSalary;
import com.aikang.Bean.WBillItem;
import com.aikang.Bean.WaiterItem;
import com.aikang.service.HuiYuanService;
import com.aikang.service.ItemSalaryService;
import com.aikang.service.PlanWorkService;
import com.aikang.service.ServiceItemService;
import com.aikang.service.WaiterItemService;
import com.aikang.utils.Util;
import com.aikang.utils.WorkStateUtil;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/QueryData")
public class QueryDataManager {

	@Autowired
	WaiterItemService wiService;
	
	@Autowired
	PlanWorkService planWorkService;
	
	@Autowired
	HuiYuanService huiYuanService;
	
	@Autowired
	ServiceItemService stemService;
	
	@Autowired
	ItemSalaryService itemSalaryService;
	
	//员工记录查询  获取员工信息
	@RequestMapping("/WorkServiceSummary/GetQueryWorks")
    @ResponseBody
    public String WorkServiceSummary_GetQueryWorks( HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		

		 
		List<PlanWork> swl = planWorkService.getAllPlanWorks();
		
		if(swl == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "员工信息获取失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}

		RespBean ok = RespBean.ok("/QueryData/WorkServiceSummary/GetQueryWorks", swl);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
		
			
		
	}
	
	//消费记录查询  获取员工信息
	@RequestMapping("/XiaofeiJiLu/GetQueryWorks")
    @ResponseBody
    public String XiaofeiJiLu_GetQueryWorks( HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		

		 
		List<PlanWork> swl = planWorkService.getAllPlanWorks();
		
		if(swl == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "员工信息获取失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}

		RespBean ok = RespBean.ok("/QueryData/XiaofeiJiLu/GetQueryWorks", swl);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
	
	//消费记录查询  获取员工信息
	@RequestMapping("/XiaofeiJiLu/GetQueryServiceItems")
    @ResponseBody
    public String XiaofeiJiLu_GetQueryServiceItems( HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		

		List<ServiceItem> sItems = stemService.getEnabledAllServiceItems(null);
		if(sItems == null){
    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取项目信息失败!");
    		String s = Util.setResponseToClientString(request, response, err);
    		return s;
    	}

		RespBean ok = RespBean.ok("/QueryData/XiaofeiJiLu/GetQueryServiceItems", sItems);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
		
	//营业额查询
	@RequestMapping("/WorkServiceSummary/QuerySpanDay")
    @ResponseBody
    public String WorkServiceSummary_QuerySpanDay(@RequestBody Map<String, Integer> query, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		List<Map<String, Object>> rl = null;
		Integer qt = query.get("qt");
		if(qt <= 0)
		{
			rl = wiService.queryAllWorksServiceSpanDay(query);
		}else{
			rl = wiService.queryAllWorksDetailsSpanDay(query);
		}
		
		if(rl == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "现金总额查询失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("qt", qt);
		_map.put("rl", rl);

		
		RespBean ok = RespBean.ok("/QueryData/WorkServiceSummary/QuerySpanDay", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
		
			
		
	}
		
	//营业额查询
	@RequestMapping("/BillSummary/QuerySpanDay")
    @ResponseBody
    public String BillSummary_QuerySpanDay(@RequestBody Map<String, Integer> query, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		

		
		Map<String, Object> rl = wiService.queryBillSummarySpanDay(query);
		
		if(rl == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "现金总额查询失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		Map<String, Object> hl = huiYuanService.queryHuiYuanTradeSummarySpanDay(query, Util.getConpnany_Name());
		if(hl == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "会员交易信息查询失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		Double xjmoney = Double.parseDouble(rl.get("money").toString());
		Double salary = Double.parseDouble(rl.get("salary").toString());
		
		Double hybkmoney = Double.parseDouble(hl.get("hybkmoney").toString());
		Double hyczmoney = Double.parseDouble(hl.get("hyczmoney").toString());
		Double hyhkmoney = Double.parseDouble(hl.get("hyhkmoney").toString());
		Double hytkmoney = Double.parseDouble(hl.get("hytkmoney").toString());		
		Double hybcmoney = Double.parseDouble(hl.get("hybcmoney").toString());
		Double hytzmoney = Double.parseDouble(hl.get("hytzmoney").toString());
		Double hyzsmoney = Double.parseDouble(hl.get("hyzsmoney").toString());
		Double money = xjmoney + hybkmoney + hyczmoney + hyhkmoney + hybcmoney - hytkmoney;
		
		Map<String, Double> _result = new HashMap<String, Double>();
		_result.put("money", money);
		_result.put("xjmoney", xjmoney);		
		_result.put("hybkmoney", hybkmoney);
		_result.put("hyczmoney", hyczmoney);
		_result.put("hyhkmoney", hyhkmoney);
		_result.put("hytkmoney", hytkmoney);
		_result.put("hybcmoney", hybcmoney);
		_result.put("hytzmoney", hytzmoney);
		_result.put("hyzsmoney", hyzsmoney);
		_result.put("salary", salary);
		
		RespBean ok = RespBean.ok("/QueryData/BillSummary/QuerySpanDay", _result);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
		
			
		
	}
	
	//消费记录查询
	@RequestMapping("/XiaofeiJiLu/QuerySpanDay")
    @ResponseBody
    public String XiaofeiJiLu_QuerySpanDay(@RequestBody Map<String, Integer> query, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		List<Map<String, Object>> rl = null;
		Integer qt = query.get("qt");
		
		rl = wiService.queryXiaoFeiJiLuSpanDay(query);
		
		
		if(rl == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "现金总额查询失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("qt", qt);
		_map.put("rl", rl);

		
		RespBean ok = RespBean.ok("/QueryData/XiaofeiJiLu/QuerySpanDay", _map);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
		
			
		
	}
	
	//消费记录修改
	@RequestMapping("/XiaofeiModifyJiLu/XiaoFeiBillModify")
    @ResponseBody
    public String XiaofeiJiLuModify_XiaoFeiBillModify(@RequestBody Map<String, String> modify, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		String strid = modify.get("id");
		Long id = Long.parseLong(strid);
		String strwtype = modify.get("wtype");
		Integer wtype = Integer.parseInt(strwtype);
		String strhid = modify.get("hid");
		Long hid = Long.parseLong(strhid);
		String strsid = modify.get("sid");
		Long sid = Long.parseLong(strsid);
		String stritembill = modify.get("itembill");
		Double itembill = Double.parseDouble(stritembill);
		String strclocknum = modify.get("clocknum");
		Double clocknum = Double.parseDouble(strclocknum);
		
		WBillItem wbo = wiService.getCompanyBillItemById(id, Util.getConpnany_Name());
		if(wbo == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得该消费单据信息，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		ServiceItem sitem = stemService.getServiceItemsById(sid);
		if(sitem == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得所选项目信息，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		PlanWork work = planWorkService.getPlanWorkByHid(hid);
		if(work == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得所选人员信息，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(wtype < WorkStateUtil.WST_PLAN_LZ || wtype > WorkStateUtil.WST_PLAN_SZ){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "排钟方式选择错误，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		ServiceSalary salary = itemSalaryService.getItemSalarysByHidSid(sid, hid, Util.getConpnany_Name());
		if(salary == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法项目提成信息，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		WBillItem wbu = new WBillItem(); 
		wbu.setId(id);
		wbu.setClocknum(clocknum);
		wbu.setItembill(itembill);
		wbu.setSid(sid);
		wbu.setSname(sitem.getName());
		wbu.setHid(hid);
		wbu.setHname(work.getName());
		wbu.setHcode(work.getServicecode());
		
		
		Double sly = 0.0;
		if(wtype == WorkStateUtil.WST_PLAN_LZ){
			sly = salary.getdSalaryLz() + salary.getDefsalarylz();
		}else if(wtype == WorkStateUtil.WST_PLAN_DZ){
			sly = salary.getdSalaryDz() + salary.getDefsalarydz();
		}else if(wtype == WorkStateUtil.WST_PLAN_DP){
			sly = salary.getdSalaryDp() + salary.getDefsalarydp();
		}else if(wtype == WorkStateUtil.WST_PLAN_SZ){
			sly = salary.getdSalarySz() + salary.getDefsalarysz();
		}
		sly = sly*clocknum;
		wbu.setWorksalary(sly);
		
		int ret = wiService.ModifyWbillItemInfoByMaster(wbo, wbu);
		if(ret == -1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "修改失败，此记录中会员信息无法获取，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(ret == -2){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "修改失败，此记录中会员余额修改失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(ret == -3){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "修改失败，此记录信息提交失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		RespBean ok = RespBean.ok("/QueryData/XiaofeiModifyJiLu/XiaoFeiBillModify", wbu);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
		
			
		
	}
	
	//消费记录修改
	@RequestMapping("/XiaofeiModifyJiLu/XiaoFeiBillDelete")
    @ResponseBody
    public String XiaofeiJiLuModify_XiaoFeiBillDelete(@RequestBody Map<String, String> modify, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, ParseException {
		
		String strid = modify.get("id");
		Long id = Long.parseLong(strid);
		WBillItem wbo = wiService.getCompanyBillItemById(id, Util.getConpnany_Name());
		if(wbo == null){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "无法获得该消费单据信息，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		
		int ret = wiService.DeleteWbillItemInfoByMaster(wbo);
		if(ret == -1){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "删除失败，此记录中会员信息无法获取，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(ret == -2){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "删除失败，此记录中会员余额修改失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		if(ret == -3){
			RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "删除失败，此记录信息提交失败，请重试!");
			String s = Util.setResponseToClientString(request, response, err);
			return s;
		}
		WBillItem wbc = new WBillItem();
		wbc.setId(wbo.getId());
		RespBean ok = RespBean.ok("/QueryData/XiaofeiModifyJiLu/XiaoFeiBillDelete", wbc);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
	}
}
