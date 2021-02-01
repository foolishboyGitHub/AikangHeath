package com.aikang.config;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

//@WebFilter(filterName = "MyCORSFilter", urlPatterns="/*")
public class MyCORSFilter implements Filter {

	@Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse rsp = (HttpServletResponse) response;

        rsp.addHeader("Access-Control-Allow-Origin", "*");
        rsp.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS, DELETE, POST");
    	rsp.setHeader("Access-Control-Expose-Headers", "*");
    	
        if (req.getMethod().equals("OPTIONS")) {
//            response.getWriter().println("ok");
        	rsp.setStatus(HttpServletResponse.SC_OK);
            return;
        }
        chain.doFilter(request, response);
    }
    @Override
    public void destroy() {
    }
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }
}
