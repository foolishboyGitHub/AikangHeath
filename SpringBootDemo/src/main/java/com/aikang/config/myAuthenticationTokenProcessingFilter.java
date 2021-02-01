package com.aikang.config;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;
import java.util.Enumeration;
import java.util.Map;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.aikang.Bean.RespBean;
import com.aikang.Bean.User;
import com.aikang.service.UserService;
import com.aikang.utils.Util;

public class myAuthenticationTokenProcessingFilter extends AbstractAuthenticationProcessingFilter  {

	@Autowired UserService userService;
    @Autowired TokenUtils tokenUtils;
    AuthenticationManager authManager;

    public myAuthenticationTokenProcessingFilter(AuthenticationManager authManager) {
    	super(new AntPathRequestMatcher("/**", "POST"));
        this.authManager = authManager;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,FilterChain chain) throws IOException, ServletException {
        
        
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse rsp = (HttpServletResponse) response;
        
        StringBuffer requrl = req.getRequestURL();
		String requri = req.getRequestURI();
		String reqsp = req.getServletPath();
		
		
        if (req.getMethod().equals("OPTIONS")) {
        	rsp.addHeader("Access-Control-Allow-Origin", "*");
            rsp.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS, DELETE, POST");
        	rsp.setHeader("Access-Control-Expose-Headers", "*");
        	rsp.setStatus(HttpServletResponse.SC_OK);
        	chain.doFilter(request, response);
        	return;
        }
        
        String token = null;
//        Enumeration<String> headerNames=req.getHeaderNames();
//        while(headerNames.hasMoreElements()){
//	        //获取每个请求头名称
//	        String headerName=headerNames.nextElement();
//	        //跟距请求头获取请求值
//	        String value=req.getHeader(headerName);
//	        if(headerName.equals("token")){
//	        	token = value;
//	        }
//	        System.out.println("headname: " + headerName);
//	        System.out.println("value: " + value);
//        }
        if(req.getHeader("token")!=null) 
        {
        	token = req.getHeader("token");
           // grab the first "token" parameter
//        	token = req.getHeader("tokensign");
            // validate the token
            Authentication authentication = TokenAuthenticationHelper.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authManager.authenticate(authentication));
//            if (oldauthentication != null) { 
//                // set the authentication into the SecurityContext
//                SecurityContextHolder.getContext().setAuthentication(authManager.authenticate(oldauthentication));         
//            }         
            
        }
        // continue thru the filter chain
        chain.doFilter(request, response);
    }

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException, IOException, ServletException {
		// TODO Auto-generated method stub
		return null;
	}
    

}
