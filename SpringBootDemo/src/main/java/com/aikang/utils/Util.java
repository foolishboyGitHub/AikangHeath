package com.aikang.utils;

import com.aikang.Bean.PerUrl;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.ServiceItem;
import com.aikang.Bean.User;
import com.aikang.Bean.WaiterItem;
import com.aikang.mapper.UserMapper;
import com.aikang.service.PerUrlService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class Util {
	
	public static int MSG_OK = 200;
	public static int MSG_ERROR = 500;
	public static int MSG_LOGOUT = 701;
	
	public static Map<String,Authentication> _usrAuthenticationMap = new HashMap<String,Authentication>();
	
	public static void removeUsrAuthenticationMap(Authentication authentication){
		User user = (User) authentication.getPrincipal();
		Iterator<Entry<String,Authentication>> _iter = _usrAuthenticationMap.entrySet().iterator(); 
        while (_iter.hasNext()) 
        { 
            Map.Entry<String,Authentication> entry = (Map.Entry<String,Authentication>) _iter.next();
            
            Authentication au = entry.getValue();
            User u = (User) au.getPrincipal();
            String un1 = user.getUsername();
            String un2 = u.getUsername();
            long id1 = user.getId();
            long id2 = u.getId();
            String cn1 = user.getCompany();
            String cn2 = u.getCompany();
            if(un1.equals(un2) && id1==id2 && cn1.equals(cn2)){
            	_usrAuthenticationMap.remove(entry.getKey());
            }
        }
		
	}
	public static void addUsrAuthenticationMap(String token, Authentication authentication){
		if(!_usrAuthenticationMap.containsKey(token)){
			_usrAuthenticationMap.put(token, authentication);
		}
	}
	public static Authentication getUsrAuthenticationByToken(String token){
		if(_usrAuthenticationMap.containsKey(token)){
			return _usrAuthenticationMap.get(token);
		}
		return null;
	}
	public static User getCurrentUser() {
		Object o = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if(!(o instanceof User)){
			return null;
		}
        User user = (User) o;
        return user;
    }
	
	public static void setResponseHeader(HttpServletRequest request, HttpServletResponse response){
		response.setHeader("Content-type",  "text/html;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		//////允许跨域访问    start//
		response.setContentType("application/json;charset=utf-8");
	//	response.setContentType("application/application/x-www-form-urlencoded;charset=UTF-8");
		response.setHeader("Access-Control-Allow-Credentials","true");
		String org = request.getHeader("Origin");
		response.setHeader("Access-Control-Allow-Origin", org);
		response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie, token, x-Test-Cors");
		response.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS, DELETE, POST");
		response.setHeader("Access-Control-Expose-Headers", "Cookie");
	}
	public static String setResponseToClientString(HttpServletRequest request, HttpServletResponse response, RespBean rspb) throws JsonProcessingException{
		Util.setResponseHeader(request, response);
		String s = new ObjectMapper().writeValueAsString(rspb);
		return s;
	}
	public static String getConpnany_Name() {
		if(getCurrentUser() == null){
			return "";
		}
		return getCurrentUser().getCompany();
	}
	public static String getSession_ConpnanyName() {
		RequestAttributes requestAttributes = RequestContextHolder.currentRequestAttributes();
        RequestContextHolder.getRequestAttributes();
		//从session里面获取对应的值
//		String str = (String) requestAttributes.getAttribute("company",RequestAttributes.SCOPE_SESSION);
		
		HttpServletRequest request = ((ServletRequestAttributes)requestAttributes).getRequest();
		HttpServletResponse response = ((ServletRequestAttributes)requestAttributes).getResponse();
		String str = (String)request.getSession().getAttribute("company");
		if(str == null){
			PrintWriter out = null;
			try {
				out = response.getWriter();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			RespBean respBean = RespBean.configRsp(Util.MSG_ERROR, "/NoAuthority_ANONYMOUS", "you need login company null!");
            String s = null;
			try {
				s = setResponseToClientString(request, response, respBean);
			} catch (JsonProcessingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            out.write(s);
            out.flush();
            out.close();
            throw new AccessDeniedException("company name is error!");
		}
		return str;
	}

	public static void setConpnany_Name(String conpnany_Name) {
		
		
	}
	
	//防止SQL注入攻击
	public static String cleanXSS(String value) {
		
		//最多16个字符
		if(value.length() > 16){
			value = value.substring(0, 16);
		}

        //You'll need to remove the spaces from the html entities below
        value = value.replaceAll("<", "& lt;").replaceAll(">", "& gt;");
        value = value.replaceAll("\\(", "& #40;").replaceAll("\\)", "& #41;");
        value = value.replaceAll("'", "& #39;");
        value = value.replaceAll("eval\\((.*)\\)", "");
        value = value.replaceAll("[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']", "\"\"");
        value = value.replaceAll("script", "");
        value = value.replaceAll("[*]","["+"*]");
        value = value.replaceAll("[+]","["+"+]");
        value = value.replaceAll("[?]","["+"?]");


        // replace sql 这里可以自由发挥
        String[] values = value.split(" ");

        String badStr = "'|and|exec|execute|insert|select|delete|update|count|drop|%|chr|mid|master|truncate|" +
                "char|declare|sitename|net user|xp_cmdshell|;|or|-|+|,|like'|and|exec|execute|insert|create|drop|" +
                "table|from|grant|use|group_concat|column_name|" +
                "information_schema.columns|table_schema|union|where|select|delete|update|order|by|count|" +
                "chr|mid|master|truncate|char|declare|or|;|-|--|,|like|//|/|%|#";

        String[] badStrs = badStr.split("\\|");
        for (int i = 0;i<badStrs.length;i++){
            for (int j = 0;j<values.length;j++){
                if (values[j].equalsIgnoreCase(badStrs[i])){
                    values[j] = "x";
                }
            }
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0;i<values.length;i++){
            if (i == values.length-1){
                sb.append(values[i]);
            } else {
                sb.append(values[i]+"_");
            }
        }

        value = sb.toString();

        return value;
    }
	
	public static void setObjAllFieldToNull(Object obj) throws Exception{
		Class stuCla = (Class) obj.getClass();// 得到类对象
		Field[] fs = stuCla.getDeclaredFields();//得到属性集合
		for (Field f : fs) {//遍历属性
			f.setAccessible(true); // 设置属性是可以访问的(私有的也可以)
			f.set(obj, null);
		}	
	}
	public static List<PerUrl> getAllMenusWithRole(PerUrlService perurlService)
	{	
		return perurlService.getAllMenusWithRole();
	}
	public static String randomStringOfNumber(int rlen) {
		  String chars = "0123456789"; //默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
		  int maxPos = chars.length();
		  String pwd = "";
		  for (int i = 0; i < rlen; i++) {
		    pwd += chars.charAt((int)Math.floor(Math.random() * maxPos));
		  }
		  return pwd;
		}
	public static String randomString(int rlen) {
	  String chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789"; //默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
	  int maxPos = chars.length();
	  String pwd = "";
	  for (int i = 0; i < rlen; i++) {
	    pwd += chars.charAt((int)Math.floor(Math.random() * maxPos));
	  }
	  return pwd;
	}
	
	public static  boolean checkObjFieldIsNull(Object obj) throws IllegalAccessException {
		 
	    boolean flag = false;
	    for(Field f : obj.getClass().getDeclaredFields()){
	        f.setAccessible(true);
	        if(f.get(obj) == null){
	            flag = true;
	            return flag;
	        }
	    }
	    return flag;
	}
	
}
