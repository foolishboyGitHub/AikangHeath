package com.aikang.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebFilterregistration {

//	/**
//     * 配置跨域访问的过滤器
//     * @return
//     */
//    @Bean
//    public FilterRegistrationBean registerFilter(){
//    	FilterRegistrationBean registration = new FilterRegistrationBean();
//    	
//    	String errUrl = "/dologin";
//        registration.setFilter(new MyCORSFilter());      
//        registration.addUrlPatterns("/*");      
//    	registration.addInitParameter("ERR_URL", errUrl);     
//        registration.setName("WebAccessAuthorizeFilterMvc");    
//        
//    	return registration;
//    }
}
