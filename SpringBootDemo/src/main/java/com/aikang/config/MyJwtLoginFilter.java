package com.aikang.config;


import com.aikang.Bean.PerUrl;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.Role;
import com.aikang.Bean.SCLoginSuc;
import com.aikang.Bean.User;
import com.aikang.mapper.UserMapper;
import com.aikang.mapper.User_RoleMapper;
import com.aikang.service.PerUrlService;
import com.aikang.service.UserService;
import com.aikang.utils.Util;
import com.aikang.utils.httpConnectionUtil;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.util.HtmlUtils;
/**
 * @author Pu Zhiwei {@literal puzhiweipuzhiwei@foxmail.com}
 * create          2019-11-25 21:57
 * JWT 登陆过滤器
 */
public class MyJwtLoginFilter extends AbstractAuthenticationProcessingFilter {


    UserService userService;

	PerUrlService perUrlService;

	UserMapper userMapper;

    User_RoleMapper userRoleMapper;
    /**
     * @param defaultFilterProcessesUrl 配置要过滤的地址，即登陆地址
     * @param authenticationManager 认证管理器，校验身份时会用到
     * @param loginCountService */
    public MyJwtLoginFilter(String defaultFilterProcessesUrl, AuthenticationManager authenticationManager
    		,UserService userService
    		,PerUrlService  perUrlService
    		,UserMapper userMapper
    		,User_RoleMapper userRoleMapper) 
    {
        super(new AntPathRequestMatcher(defaultFilterProcessesUrl));
        // 为 AbstractAuthenticationProcessingFilter 中的属性赋值
        this.userService = userService;
        this.perUrlService = perUrlService;
        this.userMapper = userMapper;
        this.userRoleMapper = userRoleMapper;
        setAuthenticationManager(authenticationManager);
    }



    /**
     * 提取用户账号密码进行验证
     * */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse resp) throws AuthenticationException, IOException, ServletException {
        // 判断是否要抛出 登陆请求过快的异常
    	String wndtype = String.valueOf(req.getParameter("wndtype"));
    	
    	UsernamePasswordAuthenticationToken token=new UsernamePasswordAuthenticationToken(
                null,
                null,
                null
        );
    	
    	if(wndtype.equals("manager_wnd")){
    		token = manager_wnd_login(req, resp);
    	}else if(wndtype.equals("wxweb")){
    		token = wx_wnd_login(req, resp);
    	}
    	
        
        // 添加验证的附加信息
        // 包括验证码信息和是否记住我
        // 进行登陆验证
        return getAuthenticationManager().authenticate(token);
    }
    private UsernamePasswordAuthenticationToken manager_wnd_login(HttpServletRequest req, HttpServletResponse resp){
    	String wndtype = String.valueOf(req.getParameter("wndtype"));
    	String company = String.valueOf(req.getParameter("company"));
        company = Util.cleanXSS(company);
        // 对 html 标签进行转义，防止 XSS 攻击
        String username = String.valueOf(req.getParameter("username"));
        String password = String.valueOf(req.getParameter("password"));
        username = HtmlUtils.htmlEscape(username);
        

        User user;	
    	if(username.equals("admin")){
    		user = userMapper.loadAdminUser(username, company);
            if (user == null) {
                throw new UsernameNotFoundException("公司名称，或者用户名不存在!");
            }
            Role r = new Role();
            r.setId(0);
            r.setName("ROLE_admin");
            r.setNameZh("超级管理员");
            List<Role> rs = new ArrayList<Role>();
            rs.add(r);
            user.setRoles(rs);
            
            //缓存 临时密码和临时公司名称
            User pu = new User();
            pu.setId(user.getId());
            pu.setPasswordtest(password);//这里要存一下原始的密码  用户jwt验证
            pu.setCompanytest(company);
            pu.setWndtype(wndtype);
            int num = userMapper.updateAdminByPrimaryKeySelective(pu, company);
            if (num != 1) {
                throw new UsernameNotFoundException("数据更新异常!");
            }
    	}else{
    	
	    	user = userMapper.loadUserByUsername(username, company);
	        if (user == null) {
	            throw new UsernameNotFoundException("公司名称，或者用户名不存在!");
	        }
	        user.setRoles(userMapper.getHrRolesById(user.getId(), company));
	      //缓存 临时密码和临时公司名称
            User pu = new User();
            pu.setId(user.getId());
            pu.setPasswordtest(password);
            pu.setCompanytest(company);
            pu.setWndtype(wndtype);
            int num = userMapper.updateByPrimaryKeySelective(pu, company);
            if (num != 1) {
                throw new UsernameNotFoundException("数据更新异常!");
            }
    	}
    	
    	UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                username,
                password,
                user.getAuthorities()
        );
    	return token;
    }
    
    private UsernamePasswordAuthenticationToken wx_wnd_login(HttpServletRequest req, HttpServletResponse resp)
    {
        // 判断是否要抛出 登陆请求过快的异常
    	String wxappid = "wx05739fc05e22f73b";
    	String wxappsecret = "1441fa2747c2147b326aa773afd8da3f";
    	
    	String wndtype = String.valueOf(req.getParameter("wndtype"));
        String sessioncode = String.valueOf(req.getParameter("sessioncode"));
        String relogin = String.valueOf(req.getParameter("relogin"));
        
        String username = String.valueOf(req.getParameter("username"));
        String password = String.valueOf(req.getParameter("password"));
        String company = String.valueOf(req.getParameter("company"));
        company = Util.cleanXSS(company);
        User user = null;
        System.out.println("wx_wnd_login =====D company = "+company);
        System.out.println("wx_wnd_login =====D sessioncode = "+sessioncode+"  relogin = "+ relogin);
        if(sessioncode!= null && relogin.equals("no")){
        	user = userMapper.wselectBy_sessioncode(sessioncode);
        	if(user != null){
	        	List<Role> roles = new ArrayList<Role>();
		        Role r = new Role();
		        r.setName("ROLE_GUKE");
		        roles.add(r);
		        user.setRoles(roles);
		        
	        	username = user.getUsername();
		        password = user.getPasswordtest();
		        
		        System.out.println("wx_wnd_login =====D user get from tab  username = "+username+"  password = "+ password);
        	}
	        
        }
        
        if(user == null)
        {
        	System.out.println("wx_wnd_login =====D user null 1 get from weixin.qq.com for sessioncode = "+sessioncode);
	    	String wxgeturl = "https://api.weixin.qq.com/sns/jscode2session?appid="+wxappid+"&secret="+wxappsecret+"&js_code="+sessioncode+"&grant_type=authorization_code";
	    	String result = httpConnectionUtil.doGet(wxgeturl);
	    	JSONObject resultJson = JSONObject.parseObject(result);    	
	    	String openid = resultJson.getString("openid");
	    	String session_key = resultJson.getString("session_key");
	    	System.out.println("wx_wnd_login =====D user null 1 get resaul  openid = "+openid + " session_key = "+session_key);
//	    	openid = "ohWkG5i8D272swy28pfqgnRitHA0"; // 打包服务器需要注释这两行
//	    	session_key = "1lF5m+ehEFwFDTo5HxRcMw==";// 打包服务器需要注释这两行
	    	if(openid == null){
	    		throw new UsernameNotFoundException("openidisnull");
			}
	    	// 对 html 标签进行转义，防止 XSS 攻击
	        username = openid;
	        password = session_key;
	        
	        user= userMapper.wloadUserByUsername(username);
	        
	        if (user == null) {
	        	System.out.println("wx_wnd_login =====D user null 2 get resaul  openid = "+openid);
	            //没有用户  直接注册一个
	        	User ru = new User();
	        	ru.setUsername(username);
	        	ru.setWxopenid(openid);
	        	String pw = new BCryptPasswordEncoder().encode(session_key);
	        	ru.setPassword(pw);
	        	ru.setWxsessiontempkey(session_key);
	        	ru.setWxsessioncode(sessioncode);
	        	ru.setPasswordtest(session_key);
	        	ru.setCompanytest(company);
	        	ru.setWndtype(wndtype);
	        	ru.setEnabled(true);
	        	
	            Long uid = userMapper.winsertuser(ru);
	            if(uid != 1){
	            	throw new UsernameNotFoundException("addusererro");
	            }
	            user = ru;
	            System.out.println("wx_wnd_login =====D user null 2 reg usr for  uid = "+uid);
	        }else{
	        	String pw = new BCryptPasswordEncoder().encode(session_key);
	        	user.setPassword(pw);
	        	user.setWxsessiontempkey(session_key);
	        	user.setWxsessioncode(sessioncode);
	        	user.setPasswordtest(password);
	        	user.setCompanytest(company);
	        	user.setWndtype(wndtype);
	        	userMapper.wupdateByPrimaryKeySelective(user);
	        }
	        
	        
	        List<Role> roles = new ArrayList<Role>();
	        Role r = new Role();
	        r.setName("ROLE_GUKE");
	        roles.add(r);
	        user.setRoles(roles);
        
        }
        if(user == null){
    		throw new UsernameNotFoundException("openidisnull");
    	}
        //在这个认证里会用BCryptPasswordEncoder().encode 对密码加密 因此传入的必须是 未加密的password
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                username,
                password,
                user.getAuthorities()
        );
        // 添加验证的附加信息
        // 包括验证码信息和是否记住我
        // 进行登陆验证
        return token;
    
        
    }
    /**
     * 登陆成功回调
     * */
    @Override
    protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse resp, FilterChain chain, Authentication authentication) throws IOException, ServletException {
        // 登陆成功
    	User user = (User) authentication.getPrincipal();

        String jwt = TokenAuthenticationHelper.getJWT(req, resp, authentication);

        
        
    	//这个一定要在 resp.getWriter()之前设置 否则中文乱码
    	resp.setHeader("Content-type",  "text/html;charset=UTF-8");
    	resp.setCharacterEncoding("UTF-8");
    	 
    	PrintWriter out = resp.getWriter();
        
        user.setPassword(null);//登陆成功以后 设置内存中的密码为空 防止泄露
        List<PerUrl> p =  perUrlService.getAllMenusByUId(user.getId(), user.getCompanytest());
        SCLoginSuc scl = new SCLoginSuc();
        scl.setUser(user);
        scl.setPers(p);
        System.out.println("wx_wnd_login sucess =====D user companytest = "+user.getCompanytest());
        Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("token", jwt);
		_map.put("scl", scl);
		
        RespBean ok = RespBean.ok("/dologin", _map);
        String s = Util.setResponseToClientString(req, resp, ok);
        out.write(s);
        out.flush();
        out.close();
    }

    /**
     * 登陆失败回调
     * */
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest req, HttpServletResponse resp, AuthenticationException exception) throws IOException, ServletException {
        // 错误请求次数加 1
    	resp.setContentType("application/json;charset=utf-8");
        PrintWriter out = resp.getWriter();
        RespBean respBean = RespBean.error("/dologin");
        String ers = "";
        if (exception instanceof LockedException) {
        	ers = "userLocked";
        } else if (exception instanceof CredentialsExpiredException) {
        	ers = "passOutTime";
        } else if (exception instanceof AccountExpiredException) {
        	ers = "userOutTime";
        } else if (exception instanceof DisabledException) {
        	ers = "userForbid";
        } else if (exception instanceof BadCredentialsException) {
        	ers = "userOrPassWrong";
        }else if (exception instanceof UsernameNotFoundException) {
        	String emsg = exception.getMessage();
        	if(emsg.equals("companyerror"))
        	{
        		ers = "companyerror";
        	}else{
        		ers = "UsernameNotFound";
        	}
        	
        }else{
        	ers = "UnknowError";
        }
        Map<String,Object> _map = new HashMap<String,Object>();//
		_map.put("token", "");
		_map.put("scl", ers);
		RespBean ok = RespBean.error("/dologin", _map);
        String s = Util.setResponseToClientString(req, resp, ok);
        out.write(s);
        out.flush();
        out.close();
    }

}