package com.aikang.config;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.FilterInvocation;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;

import com.aikang.Bean.RespBean;
import com.aikang.utils.Util;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @Author: Galen
 * @Date: 2019/3/27-16:59
 * @Description: Decision决定的意思。
 * 有了权限资源(MyFilterInvocationSecurityMetadataSource)，知道了当前访问的url需要的具体权限，接下来就是决策当前的访问是否能通过权限验证了
 * MyAccessDecisionManager 自定义权限决策管理器
 **/
@Component
public class MyAccessDecisionManager implements AccessDecisionManager {

	
	AntPathMatcher antPathMatcher = new AntPathMatcher();
	
	protected final Log logger = LogFactory.getLog(getClass());
	/**
     * @Author: Galen
     * @Description: 取当前用户的权限与这次请求的这个url需要的权限作对比，决定是否放行
     * auth 包含了当前的用户信息，包括拥有的权限,即之前UserDetailsService登录时候存储的用户对象
     * object 就是FilterInvocation对象，可以得到request等web资源。
     * configAttributes 是本次访问需要的权限。即上一步的 MyFilterInvocationSecurityMetadataSource 中查询核对得到的权限列表
     * @Date: 2019/3/27-17:18
     * @Param: [auth, object, cas]
     * @return: void
     **/
	@Override
    public void decide(Authentication authentication, Object object, Collection<ConfigAttribute> configAttributes) throws AccessDeniedException, InsufficientAuthenticationException {
		HttpServletRequest request = ((FilterInvocation) object).getRequest();
		HttpServletResponse response = ((FilterInvocation) object).getResponse();
//		StringBuffer requrl = request.getRequestURL();
//		String requri = request.getRequestURI();
//		String reqsp = request.getServletPath();
		
		//这个一定要在 resp.getWriter()之前设置 否则中文乱码
		response.setHeader("Content-type",  "text/html;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		Util.setResponseHeader(request, response);
		//判断是否游客  游客不允许访问任何功能
		Authentication auth = authentication; 
    	if ((auth instanceof AnonymousAuthenticationToken)) { 
    		 PrintWriter out;
				try {
					out = response.getWriter();
					RespBean respBean = RespBean.configRsp(Util.MSG_ERROR, "/NoAuthority_ANONYMOUS", "请先登录!");
	                String s = Util.setResponseToClientString(request, response, respBean);
	                out.write(s);
	                out.flush();
	                out.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
		    	
		        if (request.getMethod().equals("OPTIONS")) {
		            response.addHeader("Access-Control-Allow-Origin", "*");
					response.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS, DELETE, POST");
					response.setHeader("Access-Control-Expose-Headers", "*");
					response.setStatus(HttpServletResponse.SC_OK);
					authentication.setAuthenticated(false);
					
		            return;
		        }
				throw new AccessDeniedException("you need Login!!");
//				throw new BadCredentialsException("you need Login!");
    	}
    	
    	//如果是系统管理员 直接放行
		// authentication = User 这里需要 User类里面重载 getAuthorities方法  并且在里面 得到用户 权限角色名称列表
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        for (GrantedAuthority authority : authorities) {
        	//如果是系统管理员 直接放行
        	String ur = authority.getAuthority();
        	if (ur.equals("ROLE_admin")) {
        		Util.setResponseHeader(request, response);
                return;
            }
        }
      //一些例外放行  比如高权限获取配置数据， 普通用户 在线刷新等
//        if ("ROLE_manager".equals(needRole)){
//        	if(antPathMatcher.match("/GetConfigFree/**", needRole))
//        	{
//            	Util.setResponseHeader(request, response);
//                return;
//        	}
//        }
//        
//        //在线刷新请求
//        if(antPathMatcher.match("/Online/**", needRole))
//    	{
//        	Util.setResponseHeader(request, response);
//            return;
//    	}
        ////////////////////////////////////////////////////////
        //////
		for (ConfigAttribute configAttribute : configAttributes) {
            String needRole = configAttribute.getAttribute();
            
            //游客进入
            if ("ROLE_USER".equals(needRole)) {
              
                PrintWriter out;
				try {
					out = response.getWriter();
					RespBean respBean = RespBean.configRsp(Util.MSG_ERROR, "/NoAuthority", "权限不足，请联系管理员!");
	                String s = Util.setResponseToClientString(request, response, respBean);
	                out.write(s);
	                out.flush();
	                out.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				throw new AccessDeniedException("没有权限 别乱逛， 请登录!");
            }
            //在上一步的 MyFilterInvocationSecurityMetadataSource 没有找到这个权限集合， 也就是这个URL没法访问喽
            if ("ROLE_NOTHISURLROLE".equals(needRole)) {
                
                PrintWriter out;
				try {
					out = response.getWriter();
					RespBean respBean = RespBean.configRsp(Util.MSG_ERROR, "/NoAuthority", "no this url role! in");
	                String s = Util.setResponseToClientString(request, response, respBean);
	                out.write(s);
	                out.flush();
	                out.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				throw new AccessDeniedException("no this url role!");
            }
            
            //匹配放行
            // authentication = User 这里需要 User类里面重载 getAuthorities方法  并且在里面 得到用户 权限角色名称列表
            for (GrantedAuthority authority : authorities) {
            	String ur = authority.getAuthority();
                if (ur.equals(needRole)) {
                	//放行
                    return;
                }
            }
        }
		//没有被放行  那么你没有访问这个的权限  
        PrintWriter out;
		try {
			out = response.getWriter();
			RespBean respBean = RespBean.configRsp(Util.MSG_ERROR, "/NoAuthority", "最后！ 没有找到你的相应权限！");
            String s = Util.setResponseToClientString(request, response, respBean);
            out.write(s);
            out.flush();
            out.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        throw new AccessDeniedException("at last! we can't find you any one role in this url!");
   		
    }

    @Override
    public boolean supports(ConfigAttribute attribute) {
        return true;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return true;
    }
}
