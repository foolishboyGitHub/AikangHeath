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
import com.aikang.Bean.WaiterItem;
import com.aikang.service.PlanWorkService;
import com.aikang.service.WaiterItemService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

@Controller // 标明这是一个SpringMVC的Controller控制器
@RequestMapping("/QueryData")
public class QueryDataManager {

	@Autowired
	WaiterItemService wiService;
	
	@Autowired
	PlanWorkService planWorkService;
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
		
		
		Double money = Double.parseDouble(rl.get("money").toString());
		Double salary = Double.parseDouble(rl.get("salary").toString());
		
		Map<String, Double> _result = new HashMap<String, Double>();
		_result.put("money", money);
		_result.put("salary", salary);
		
		RespBean ok = RespBean.ok("/QueryData/BillSummary/QuerySpanDay", _result);
	    String s = Util.setResponseToClientString(request, response, ok);
	    return s;
		
			
		
	}
}
