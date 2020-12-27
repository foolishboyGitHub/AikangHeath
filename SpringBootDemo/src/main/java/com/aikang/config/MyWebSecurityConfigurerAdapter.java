package com.aikang.config;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import com.aikang.Bean.PerUrl;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.SCLoginSuc;
import com.aikang.Bean.User;
import com.aikang.service.PerUrlService;
import com.aikang.service.UserService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
@EnableWebSecurity
public class MyWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {

	@Autowired
    UserService userService;
	@Autowired
	PerUrlService perUrlService;
    @Autowired
    MyFilterInvocationSecurityMetadataSource myFilterInvocationSecurityMetadataSource;
    @Autowired
    MyAccessDecisionManager myUrlDecisionManager;
    
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService);
    }
    
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/login","/index.html");
    }
    
    @Override
    public void configure(HttpSecurity http) throws Exception {
    	//配置自定义过滤器在security的UsernamePasswordAuthenticationFilter过滤器之前
    	http.addFilterBefore(new GetCompanyAuthenticationFilter("/dologin", "/dologin?error"), UsernamePasswordAuthenticationFilter.class);

        //开启记住我功能
    	http.rememberMe();
    	
    	http.authorizeRequests()
    		.withObjectPostProcessor(new ObjectPostProcessor<FilterSecurityInterceptor>() {
                @Override
                public <O extends FilterSecurityInterceptor> O postProcess(O object) {
                    object.setAccessDecisionManager(myUrlDecisionManager);
                    object.setSecurityMetadataSource(myFilterInvocationSecurityMetadataSource);
                    return object;
                }
            })
    		.and()
    		.formLogin()
    		.usernameParameter("username")
    		.passwordParameter("password")
    		.loginProcessingUrl("/dologin")
    		.loginPage("/login")
    		.successHandler(new AuthenticationSuccessHandler() {
                    @Override
                    public void onAuthenticationSuccess(HttpServletRequest req, HttpServletResponse resp, Authentication authentication) throws IOException, ServletException {
                    	
                    	//这个一定要在 resp.getWriter()之前设置 否则中文乱码
                    	resp.setHeader("Content-type",  "text/html;charset=UTF-8");
                    	resp.setCharacterEncoding("UTF-8");
                    	 
                    	PrintWriter out = resp.getWriter();
                        User user = (User) authentication.getPrincipal();
                        user.setPassword(null);//登陆成功以后 设置内存中的密码为空 防止泄露
                        List<PerUrl> p =  perUrlService.getAllMenusByUId(user.getId());
                        SCLoginSuc scl = new SCLoginSuc();
                        scl.setUser(user);
                        scl.setPers(p);
                        RespBean ok = RespBean.ok("/dologin", scl);
                        String s = Util.setResponseToClientString(req, resp, ok);
                        out.write(s);
                        out.flush();
                        out.close();
                    }
            })
    		.failureHandler(new AuthenticationFailureHandler() {
                    @Override
                    public void onAuthenticationFailure(HttpServletRequest req, HttpServletResponse resp, AuthenticationException exception) throws IOException, ServletException {
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
                        }
                        respBean.setObj(ers);
                        
                        String s = Util.setResponseToClientString(req, resp, respBean);
                        out.write(s);
                        out.flush();
                        out.close();
                    }
            })
    		.permitAll()
    		.and()
    		.logout()
    		.logoutSuccessHandler(new LogoutSuccessHandler() {
                @Override
                public void onLogoutSuccess(HttpServletRequest req, HttpServletResponse resp, Authentication authentication) throws IOException, ServletException {
                    PrintWriter out = resp.getWriter();
                    RespBean respBean = RespBean.configRsp(Util.MSG_LOGOUT, "/logout", "logoutSucess");
                    String s = Util.setResponseToClientString(req, resp, respBean);
                    out.write(s);
                    out.flush();
                    out.close();
                }
            })
    		.permitAll()
    		.and()
    		.csrf().disable().exceptionHandling()
            //没有认证时，在这里处理结果，不要重定向
            .authenticationEntryPoint(new AuthenticationEntryPoint() {
	        @Override
	        public void commence(HttpServletRequest req, HttpServletResponse resp, AuthenticationException authException) throws IOException, ServletException {
		            resp.setContentType("application/json;charset=utf-8");
		            resp.setStatus(401);
		            PrintWriter out = resp.getWriter();
		            RespBean respBean = RespBean.error("访问失败!");
		            if (authException instanceof InsufficientAuthenticationException) {
		                respBean.setMsg("请求失败，请联系管理员!");
		            }
		            out.write(new ObjectMapper().writeValueAsString(respBean));
		            out.flush();
		            out.close();
		        }
            })
    		;
    }
}
