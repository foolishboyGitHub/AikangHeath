package com.aikang.controller.ShopManager;

import org.springframework.stereotype.Controller;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.SortedMap;
import java.util.TreeMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.jdom2.JDOMException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;

import com.aikang.Bean.GukePayTradeRecord;
import com.aikang.Bean.GukeShopings;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.User;
import com.aikang.Bean.WaiterItem;
import com.aikang.mapper.CfgDaySetMapper;
import com.aikang.mapper.WaiterItemMapper;
import com.aikang.service.GukeBillsService;
import com.aikang.service.PlanWorkService;
import com.aikang.service.RoomService;
import com.aikang.service.ServiceItemService;
import com.aikang.service.WaiterItemService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.wxpay.util.PayConfigUtil;
import com.wxpay.util.PayToolUtil;
import com.wxpay.util.XMLUtil4jdom;

@Controller // 标明这是一个SpringMVC的Controller控制器
public class ShopNotifyManager {

	
	/**

     * 支付完成通知

     * @param request

     * @param response

     * @return

     * @throws Exception

     
	 * @throws ParserConfigurationException 
	 * @throws IOException 
	 * @throws SAXException */
	@Autowired
	GukeBillsService gukeBillsService;
	
	@Autowired
	WaiterItemService waiterItemService;
	
	@Autowired
	WaiterItemService wiService;
	
	@Autowired
	RoomService roomService;
	
	@Autowired
	ServiceItemService stemService;
	
	@Autowired
	PlanWorkService planWorkService;
	
	@Autowired  
	CfgDaySetMapper cfgDaySetMapper;
	
	@Autowired
	WaiterItemMapper waiterItemMapper;
	
	@RequestMapping("/wxpay/notify_url")
	public void weixinNotify(HttpServletRequest request, HttpServletResponse response) throws JDOMException, Exception{
	       //读取参数  
	       InputStream inputStream ;  
	       StringBuffer sb = new StringBuffer();  
	       inputStream = request.getInputStream();  
	       String s ;  
	       BufferedReader in = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));  
	       while ((s = in.readLine()) != null){  
	           sb.append(s);
	       }
	       in.close();
	       inputStream.close();
	  
	       //解析xml成map  
	       Map<String, String> m = new HashMap<String, String>();  
	       m = XMLUtil4jdom.doXMLParse(sb.toString());  
	        
	       //过滤空 设置 TreeMap  
	       SortedMap<Object,Object> packageParams = new TreeMap<Object,Object>();        
	       Iterator it = m.keySet().iterator();  
	       while (it.hasNext()) {  
	           String parameter = (String) it.next();
	           String parameterValue = m.get(parameter);
	            
	           String v = "";  
	           if(null != parameterValue) {
	               v = parameterValue.trim();  
	           }  
	           packageParams.put(parameter, v);  
	       }  
	          
	       // 账号信息  
	       String key = PayConfigUtil.API_KEY; //key  
	  
	       //判断签名是否正确  
	       if(PayToolUtil.isTenpaySign("UTF-8", packageParams,key)) {  
	           //------------------------------  
	           //处理业务开始  
	           //------------------------------  
	           String resXml = ""; 
	           boolean dealtrade = false;
	           if("SUCCESS".equals((String)packageParams.get("result_code"))){  
	               // 这里是支付成功  
	               
	               dealtrade = true; 
	               System.out.println("支付成功");  
	               //通知微信.异步确认成功.必写.不然会一直通知后台.八次之后就认为交易失败了.  
	               resXml = "<xml>" + "<return_code><![CDATA[SUCCESS]]></return_code>" 
	                       + "<return_msg><![CDATA[OK]]></return_msg>" + "</xml> ";  
	                  
	           } else {
	               resXml = "<xml>" + "<return_code><![CDATA[FAIL]]></return_code>" 
	                       + "<return_msg><![CDATA[报文为空]]></return_msg>" + "</xml> ";  
	           }
	           //------------------------------  
	           //给微信回复通知
	           //------------------------------  
	           BufferedOutputStream out = new BufferedOutputStream(response.getOutputStream());  
	           out.write(resXml.getBytes());  
	           out.flush();  
	           out.close(); 
	           
	           
	           //处理业务逻辑
	           if(dealtrade){
	        	   SimpleDateFormat ft1 = new SimpleDateFormat("yyyyMMddHHmmss");
	        	   Date date = new Date();
	           	   String dstrnmm = ft1.format(date.getTime());
	        	   //////////执行自己的业务逻辑////////////////  
	        	   String appid = (String)packageParams.get("appid");
	               String mch_id = (String)packageParams.get("mch_id");  
	               String openid = (String)packageParams.get("openid");  
	               String is_subscribe = (String)packageParams.get("is_subscribe");  
	               String out_trade_no = (String)packageParams.get("out_trade_no"); 
	               
	               String device_info = (String)packageParams.get("device_info");
	               String nonce_str = (String)packageParams.get("nonce_str");
	               String sign = (String)packageParams.get("sign");
	               String sign_type = (String)packageParams.get("sign_type");
	
	               String trade_type = (String)packageParams.get("trade_type");
	               String bank_type = (String)packageParams.get("bank_type");
	               String total_fee = (String)packageParams.get("total_fee");
	               String settlement_total_fee = (String)packageParams.get("settlement_total_fee");
	               String fee_type = (String)packageParams.get("fee_type");
	               String cash_fee = (String)packageParams.get("cash_fee");
	               String cash_fee_type = (String)packageParams.get("cash_fee_type");
	               String coupon_fee = (String)packageParams.get("coupon_fee");
	               String coupon_count = (String)packageParams.get("coupon_count");
	               String coupon_type_$n = (String)packageParams.get("coupon_type_$n");
	               String coupon_id_$n = (String)packageParams.get("coupon_id_$n");
	               String coupon_fee_$n = (String)packageParams.get("coupon_fee_$n");
	               String transaction_id = (String)packageParams.get("transaction_id");
	               String time_end = (String)packageParams.get("time_end");
	               
	               GukePayTradeRecord gpd = new GukePayTradeRecord();
	               
	               gpd.setOpenid(openid);
	               gpd.setMch_id(mch_id);
	               gpd.setOpenid(openid);
	               gpd.setIs_subscribe(is_subscribe);
	               gpd.setDevice_info(device_info);
	               gpd.setNonce_str(nonce_str);
	               gpd.setSign(sign);
	               gpd.setSign_type(sign_type);
	               gpd.setTrade_type(trade_type);
	               gpd.setBank_type(bank_type);
	               gpd.setTotal_fee(total_fee);
	               gpd.setSettlement_total_fee(settlement_total_fee);
	               gpd.setFee_type(fee_type);
	               gpd.setCash_fee(cash_fee);
	               gpd.setCash_fee_type(cash_fee_type);
	               gpd.setCoupon_fee(coupon_fee);
	               gpd.setCoupon_count(coupon_count);
	               gpd.setCoupon_type_$n(coupon_type_$n);
	               gpd.setCoupon_id_$n(coupon_id_$n);
	               gpd.setCoupon_fee_$n(coupon_fee_$n);
	               gpd.setTime_end(time_end);
	               gpd.setRecord_time(dstrnmm);
	               
	               if(total_fee == null || total_fee.equals("")){
	            	   total_fee = "0";
	               }
	               double paynum = Double.parseDouble(total_fee);
	               
	               List<GukeShopings> lgs = gukeBillsService.getShopDataByBillNumber(out_trade_no);
	               System.out.println("处理账单: "+ out_trade_no);
	               if(lgs==null || lgs.size()<=0){
	            	   System.out.println("支付处理失败！ 没有这批商品账单号: "+ out_trade_no); 
	               }
	               else if(lgs.get(0).getWorkstate()>=2)
	               {
	            	   System.out.println("这批订单已经处理过了: "+ out_trade_no); 
	               }  
	               else{
	            	   
	            	   gpd.setGukenum(lgs.get(0).getGukenum());
	            	   gpd.setBillnumber(lgs.get(0).getBillnumber());
	            	   gpd.setKid(lgs.get(0).getKid());
	            	   gpd.setKname(lgs.get(0).getKname());
	            	   int gnum = gukeBillsService.insertGukePayTradeRecord(gpd);
	            	   
	            	   if(gnum != 1)
	            	   {
	            		   System.out.println("支付处理失败！ 存储交易信息错误: "+ out_trade_no); 
	            	   }

	            	   /////////////////////////////////////////////////////////////////////
	            	   ////////////现在改为顾客付款成功后才下店内单
	            	   ////////////////////////////////////////////////////////////////////
//	            	   else
//	            	   {
//	            		   for (int i = 0; i < lgs.size(); i++) {
//			            	   lgs.get(i).setPaystate(1);
//			            	   lgs.get(i).setWorkstate(2);
//			            	   lgs.get(i).setChecktime(dstrnmm);
//			            	   lgs.get(i).setPayid(gpd.getId());
//			            	   lgs.get(i).setPaynum(paynum);
//			               }
//			               int um = gukeBillsService.updateShoplistBillnumber(lgs);
//			               if(um == lgs.size()){
//			            	   System.out.println("保存商品单据成功 "+ out_trade_no); 
//			               }else{
//			            	   System.out.println("保存商品单据失败 out_trade_no:"+ out_trade_no); 
//			               }
//			               
//	            	   }
//	            	   
//	            	   List<WaiterItem> lws = waiterItemService.getCompanyWaiterItemByBillnumber(out_trade_no, lgs.get(0).getCompany());
//	            	   if(lws == null || lws.size() == 0){
//	            		   System.out.println("支付处理失败！ 没有这批服务账单号: "+ out_trade_no); 
//	            	   }else{
//	            		   
//	            	   
//		            	   for (int i = 0; i < lws.size(); i++) {
//		            		   lws.get(i).setPaystate(1);
//		            		   lws.get(i).setPayid(gpd.getId());
//		            		   lws.get(i).setPaynum((int)paynum);
//			               }
//		            	   int wm = waiterItemService.updatePayStateListByIdSelective(lws, lgs.get(0).getCompany());
//		            	   if(wm != lws.size()){
//				               System.out.println("保存服务单据失败 out_trade_no:"+ out_trade_no); 
//		            	   }else{
//		            		   System.out.println("保存服务单据成功 "+ out_trade_no); 
//		            	   }
//	            	   }
	            	   //////////////////////////////////////////////////////////////////
	            	   //////////////////////////////////////////////////////////////////
	            	   
	            	   
	            	   
	            	   //////////////////////////付款成功后下店内典
	            	   String rets = ShopManager.checkedMakeitemAndPlanworkwork(
	           				request, response, 
	           				lgs,
	           				stemService, 
	           				planWorkService, 
	           				cfgDaySetMapper,
	           				wiService);
	           		
		           		if(!rets.equals("ok")){
		           			System.out.println("开单出错  "+ rets);
		           		}
	               }
	               
	           }//if(dealtrade)
	       }//if(PayToolUtil.isTenpaySign("UTF-8", packageParams,key)) 
	       else
	       {
	    	   System.out.println("通知签名验证失败");  
	       }
	          
	}
}
