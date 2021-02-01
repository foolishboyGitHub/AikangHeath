package com.aikang.controller.RegNewCompany;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
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

import org.jdom2.JDOMException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.aikang.Bean.Company;
import com.aikang.Bean.GukePayTradeRecord;
import com.aikang.Bean.GukeShopings;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.TeleVerify;
import com.aikang.Bean.User;
import com.aikang.SmsUtil.CODETYPE;
import com.aikang.SmsUtil.WXSmsSendUtil;
import com.aikang.controller.ShopManager.ShopManager;
import com.aikang.service.CompanyService;
import com.aikang.service.UserService;
import com.aikang.utils.Util;
import com.wxpay.util.PayConfigUtil;
import com.wxpay.util.PayToolUtil;
import com.wxpay.util.XMLUtil4jdom;

@Controller // 标明这是一个SpringMVC的Controller控制器
public class RegNewCompanyManager {
	
	@Autowired 
	CompanyService companyService;
	
	@Autowired
	UserService uService;
	
	@RequestMapping("/RegNewCompany/CheckCompanyusername")
	public  void RegNewCompany_CheckCompany_username(HttpServletRequest request, HttpServletResponse response) throws JDOMException, Exception{
	       //读取参数  
	       String[] company = request.getParameterValues("company");
	       if(company==null || company.length<=0){
	    	   
	    	   RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "参数错误!");
	    	   String s = Util.setResponseToClientString(request, response, err);
	    	   
	    	   PrintWriter out = response.getWriter();
	           out.write(s);
	           out.flush();
	           out.close();
	           return;
	       }
	       String cname = company[0];
	       Company cm = companyService.getCompanyByUsername(cname);
			if(cm!= null){
				Map<String,Object> _map = new HashMap<String,Object>();//
				_map.put("msg", "exists");
				
				RespBean ok = RespBean.ok("/RegNewCompany/CheckCompany_username", _map);
			    String s = Util.setResponseToClientString(request, response, ok);
			    PrintWriter out = response.getWriter();
	            out.write(s);
	            out.flush();
	            out.close();
	            return;
			}
			
			Map<String,Object> _map = new HashMap<String,Object>();//
			_map.put("msg", "ok");
			
			RespBean ok = RespBean.ok("/RegNewCompany/CheckCompanyusername", _map);
		    String s = Util.setResponseToClientString(request, response, ok);
		    PrintWriter out = response.getWriter();
            out.write(s);
            out.flush();
            out.close();
            
            return;
	}
	
	@RequestMapping("/RegNewCompany/SendTelephoneverifycode")
	public  void RegNewCompany_SendTelephoneverifycode(HttpServletRequest request, HttpServletResponse response) throws JDOMException, Exception{
	       //读取参数  
	       String[] telenumbers = request.getParameterValues("telenumber");
	       if(telenumbers==null || telenumbers.length<=0){
	    	   
	    	   RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "参数错误!");
	    	   String s = Util.setResponseToClientString(request, response, err);
	    	   
	    	   PrintWriter out = response.getWriter();
	           out.write(s);
	           out.flush();
	           out.close();
	           return;
	       }
	       String telenumber = telenumbers[0];
	       
	       Company cm1 = companyService.getCompanyByMobilphone(telenumber);
	       if(cm1!= null){
	    	   RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "电话号码已被使用!");
	    	   String s = Util.setResponseToClientString(request, response, err);
	    	   
	    	   PrintWriter out = response.getWriter();
	           out.write(s);
	           out.flush();
	           out.close();
	           return;
	       }
	       
	       SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	       Date date = new Date();
	       String dstr = ft.format(date.getTime());
	    	
	       TeleVerify tf = null;
	       List<TeleVerify> tfl = uService.getTeleVerfyByTelenumberAndType(telenumber, CODETYPE.REGCOMPANY);
	       if(tfl != null && tfl.size() > 0){
	    	   tf = tfl.get(0);
	       }
	       if(tf != null)
	       {
				Date tfdate = ft.parse(tf.getSendtime());  
				long tm = (date.getTime() - tfdate.getTime())/1000;
		    	if(tm < 60){
		    		Map<String,Object> _map = new HashMap<String,Object>();//
					_map.put("msg", "later");
					_map.put("tm", tm);
					RespBean ok = RespBean.ok("/RegNewCompany/SendTelephoneverifycode", _map);
				    String s = Util.setResponseToClientString(request, response, ok);
				    PrintWriter out = response.getWriter();
		            out.write(s);
		            out.flush();
		            out.close();
		            return;
		    	}
		    	String tcode = "";
				for(int r=0; r<4; r++){
					tcode = tcode + (int)(Math.random()*10);
				}
				TeleVerify tfn = new TeleVerify();
				tfn.setId(tf.getId());
				tfn.setCode(tcode);
				tfn.setSendtime(dstr);
				
				String[] params ={tcode};
				String rmsg = WXSmsSendUtil.SendShortMessageSingle(WXSmsSendUtil.templateId_vericode, telenumber, params);
				if(rmsg.equals("OK")){
					int t = uService.updateTeleCodeByPrimaryKeySelective(tfn);
					if(t !=1){
						RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取验证码错误， 请重试!");
			    		String s = Util.setResponseToClientString(request, response, err);
			    		PrintWriter out = response.getWriter();
			            out.write(s);
			            out.flush();
			            out.close();
			            return;
					}
					
					Map<String,Object> _map = new HashMap<String,Object>();//
					_map.put("msg", "ok");
					_map.put("tm", 60);
					RespBean ok = RespBean.ok("/RegNewCompany/SendTelephoneverifycode", _map);
				    String s = Util.setResponseToClientString(request, response, ok);
				    PrintWriter out = response.getWriter();
		            out.write(s);
		            out.flush();
		            out.close();
		            return;
				}
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "发送验证码错误  ["+rmsg+"]");
				String s = Util.setResponseToClientString(request, response, err);
				PrintWriter out = response.getWriter();
	            out.write(s);
	            out.flush();
	            out.close();
	            return;
	       }//if(tf != null)
	       else
	       {
				String tcode = "";
				for(int r=0; r<4; r++){
					tcode = tcode + (int)(Math.random()*10);
				}
				TeleVerify tfn = new TeleVerify();
				tfn.setType(CODETYPE.REGCOMPANY);
				tfn.setCode(tcode);
				tfn.setTelenumber(telenumber);
				tfn.setUid(0l);
				tfn.setSendtime(dstr);
				
				String[] params ={tcode};
				String rmsg = WXSmsSendUtil.SendShortMessageSingle(WXSmsSendUtil.templateId_vericode, telenumber, params);
				if(rmsg.equals("OK")){
					
					int t = uService.insertTeleCode(tfn);
					if(t !=1){
						RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "获取验证码错误， 请重试!");
			    		String s = Util.setResponseToClientString(request, response, err);
			    		PrintWriter out = response.getWriter();
			            out.write(s);
			            out.flush();
			            out.close();
					}
					
					Map<String,Object> _map = new HashMap<String,Object>();//
					_map.put("msg", "ok");
					_map.put("tm", 60);
					RespBean ok = RespBean.ok("/RegNewCompany/SendTelephoneverifycode", _map);
				    String s = Util.setResponseToClientString(request, response, ok);
				    PrintWriter out = response.getWriter();
		            out.write(s);
		            out.flush();
		            out.close();
		            return;
				}
				RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "发送验证码错误，错误信息是 ["+rmsg+"]");
				String s = Util.setResponseToClientString(request, response, err);
				PrintWriter out = response.getWriter();
	            out.write(s);
	            out.flush();
	            out.close();
	            return;
			}//else
	       

	}
	
	@RequestMapping("/RegNewCompany/RegSendNewCompanyInfo")
	public  void RegNewCompany_RegSendNewCompanyInfo(HttpServletRequest request, HttpServletResponse response) throws JDOMException, Exception{
	       //读取参数  
	       String[] companys = request.getParameterValues("company");
	       String[] telenumbers = request.getParameterValues("telenumber");
	       String[] codes = request.getParameterValues("code");
	       String[] passwords = request.getParameterValues("password");
	       String[] cnames = request.getParameterValues("cname");
	       if(companys==null || companys.length<=0 
	    		   || telenumbers==null || telenumbers.length<=0
	    		   || codes==null || codes.length<=0
	    		   || passwords==null || passwords.length<=0	    		   
	    		   || cnames==null || cnames.length<=0){
	    	   
	    	   RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "参数错误!");
	    	   String s = Util.setResponseToClientString(request, response, err);
	    	   
	    	   PrintWriter out = response.getWriter();
	           out.write(s);
	           out.flush();
	           out.close();
	           return;
	       }
	       String company = companys[0];
	       String telenumber = telenumbers[0];
	       String password = passwords[0];
	       String cname = cnames[0];
	       String code = codes[0];
	       if(company.length()>30){
	    	   
	    	   RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "门店账号不能超过30个字符!");
	    	   String s = Util.setResponseToClientString(request, response, err);
	    	   
	    	   PrintWriter out = response.getWriter();
	           out.write(s);
	           out.flush();
	           out.close();
	           return;
	       }
	       if(cname.length()>120){
	    	   
	    	   RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "门店名称不能超过120个字符!");
	    	   String s = Util.setResponseToClientString(request, response, err);
	    	   
	    	   PrintWriter out = response.getWriter();
	           out.write(s);
	           out.flush();
	           out.close();
	           return;
	       }
	       SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	    	Date date = new Date();
	    	String dstr = ft.format(date.getTime());
	       TeleVerify tf = null;
	       List<TeleVerify> tfl = uService.getTeleVerfyByTelenumberAndType(telenumber, CODETYPE.REGCOMPANY);
	    	if(tfl != null && tfl.size() > 0){
				tf = tfl.get(0);
			}
	    	if(tf == null){
	    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "此手机号还未发送验证码！ ");
	    		String s = Util.setResponseToClientString(request, response, err);
	    		PrintWriter out = response.getWriter();
	           out.write(s);
	           out.flush();
	           out.close();
	           return;
	    	}
	    	if(!tf.getCode().equals(code)){
	    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "验证码错误！ ");
	    		String s = Util.setResponseToClientString(request, response, err);
	    		PrintWriter out = response.getWriter();
		        out.write(s);
		        out.flush();
		        out.close();
		        return;
	    	}
	    	Date tfdate = ft.parse(tf.getSendtime());  
			long tm = (date.getTime() - tfdate.getTime())/1000;
	    	if(tm > 5*60){
	    		RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "验证码已超时！ ");
	    		String s = Util.setResponseToClientString(request, response, err);
			    PrintWriter out = response.getWriter();
		        out.write(s);
		        out.flush();
		        out.close();
		        return;
	    	}
	    	
	    	
	       Company cm = companyService.getCompanyByUsername(company);
	       if(cm!= null){
	    	   Map<String,Object> _map = new HashMap<String,Object>();//
	    	   _map.put("msg", "companyexists");
				
	    	   RespBean ok = RespBean.ok("/RegNewCompany/RegSendNewCompanyInfo", _map);
	    	   String s = Util.setResponseToClientString(request, response, ok);
			   PrintWriter out = response.getWriter();
	           out.write(s);
	           out.flush();
	           out.close();
	           return;
	       }
	       Company cm1 = companyService.getCompanyByMobilphone(telenumber);
	       if(cm1!= null){
	    	   Map<String,Object> _map = new HashMap<String,Object>();//
	    	   _map.put("msg", "telenumberexists");
				
	    	   RespBean ok = RespBean.ok("/RegNewCompany/RegSendNewCompanyInfo", _map);
	    	   String s = Util.setResponseToClientString(request, response, ok);
			   PrintWriter out = response.getWriter();
	           out.write(s);
	           out.flush();
	           out.close();
	           return;
	       }
	       String seriid = code+""+date.getTime() +"969"+ Util.randomString(8);
		   Company ncm = new Company();
		   ncm.setSeriid(seriid);
		   ncm.setUsername(company);
		   ncm.setCname(cname);
		   ncm.setMobilephone(telenumber);
		   String overtime = ft.format(date.getTime() + 7*24*60*60*1000);//新注册公司有7天试用
		   ncm.setOvertime(overtime);
		   String pw = new BCryptPasswordEncoder().encode(password);
		   ncm.setPassword(pw);
		   
		   User au = new User();
		   au.setUsername("admin");
		   au.setPassword(pw);
		   au.setCompany(company);
		   au.setPhone(telenumber);
		   au.setName("系统管理员");
		   
		   int c = companyService.insertCompanyData(ncm, au);
		   if(c != 1){
			   RespBean err = RespBean.configRsp(Util.MSG_ERROR, "/Error_Get", "注册失败， 请重试!");
	    	   String s = Util.setResponseToClientString(request, response, err);
	    	   
	    	   PrintWriter out = response.getWriter();
	           out.write(s);
	           out.flush();
	           out.close();
		   }
		   
	       Map<String,Object> _map = new HashMap<String,Object>();//
	       _map.put("msg", "ok");
	       _map.put("cm", ncm);
	       RespBean ok = RespBean.ok("/RegNewCompany/RegSendNewCompanyInfo", _map);
	       String s = Util.setResponseToClientString(request, response, ok);
		   PrintWriter out = response.getWriter();
           out.write(s);
           out.flush();
           out.close();
            
         return;
	}
}
