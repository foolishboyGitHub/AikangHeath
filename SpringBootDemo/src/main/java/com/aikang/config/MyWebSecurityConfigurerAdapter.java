package com.aikang.config;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import com.aikang.Bean.PerUrl;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.SCLoginSuc;
import com.aikang.Bean.User;
import com.aikang.mapper.UserMapper;
import com.aikang.mapper.User_RoleMapper;
import com.aikang.service.PerUrlService;
import com.aikang.service.UserService;
import com.aikang.utils.Util;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Configuration
@EnableWebSecurity
public class MyWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {

	@Autowired
    UserService userService;
	@Autowired
	UserMapper userMapper;
	@Autowired
	PerUrlService perUrlService;
	@Autowired
	User_RoleMapper userRoleMapper;
    @Autowired
    MyFilterInvocationSecurityMetadataSource myFilterInvocationSecurityMetadataSource;
    
    @Autowired
    AuthenticationManager authManager;
    
    @Autowired
    MyAccessDecisionManager myUrlDecisionManager;
    
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }
    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {

        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setHideUserNotFoundExceptions(false);
        provider.setPasswordEncoder(passwordEncoder());
        provider.setUserDetailsService(userService);
        return provider;
    }
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/login","/index.html","/error/**", "/img/load/**", "/wxpay/notify_url", "/RegNewCompany/**");
    }
    
    @Override
    public void configure(HttpSecurity http) throws Exception {
//    	http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//    	//配置自定义过滤器在security的UsernamePasswordAuthenticationFilter过滤器之前
//    	http.addFilterBefore(new GetCompanyAuthenticationFilter("/dologin", "/dologin?error"), UsernamePasswordAuthenticationFilter.class);
//    	http.addFilterBefore(new myAuthenticationTokenProcessingFilter(authManager), UsernamePasswordAuthenticationFilter.class);
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
//    		.formLogin()
//    		.usernameParameter("username")
//    		.passwordParameter("password")
//    		.loginProcessingUrl("/dologin")
//    		.loginPage("/login")
//    		.successHandler(new AuthenticationSuccessHandler() {
//                    @Override
//                    public void onAuthenticationSuccess(HttpServletRequest req, HttpServletResponse resp, Authentication authentication) throws IOException, ServletException {
//                    	User user = (User) authentication.getPrincipal();
//
//                        String jwt = TokenAuthenticationHelper.getJWT(req, resp, authentication);
//
//                        
//                        
//                    	//这个一定要在 resp.getWriter()之前设置 否则中文乱码
//                    	resp.setHeader("Content-type",  "text/html;charset=UTF-8");
//                    	resp.setCharacterEncoding("UTF-8");
//                    	 
//                    	PrintWriter out = resp.getWriter();
//                        
//                        user.setPassword(null);//登陆成功以后 设置内存中的密码为空 防止泄露
//                        List<PerUrl> p =  perUrlService.getAllMenusByUId(user.getId());
//                        SCLoginSuc scl = new SCLoginSuc();
//                        scl.setUser(user);
//                        scl.setPers(p);
//                        
//                        Map<String,Object> _map = new HashMap<String,Object>();//
//                		_map.put("token", jwt);
//                		_map.put("scl", scl);
//                		
//                        RespBean ok = RespBean.ok("/dologin", _map);
//                        String s = Util.setResponseToClientString(req, resp, ok);
//                        out.write(s);
//                        out.flush();
//                        out.close();
//                    }
//            })
//    		.failureHandler(new AuthenticationFailureHandler() {
//                    @Override
//                    public void onAuthenticationFailure(HttpServletRequest req, HttpServletResponse resp, AuthenticationException exception) throws IOException, ServletException {
//                        resp.setContentType("application/json;charset=utf-8");
//                        PrintWriter out = resp.getWriter();
//                        RespBean respBean = RespBean.error("/dologin");
//                        String ers = "";
//                        if (exception instanceof LockedException) {
//                        	ers = "userLocked";
//                        } else if (exception instanceof CredentialsExpiredException) {
//                        	ers = "passOutTime";
//                        } else if (exception instanceof AccountExpiredException) {
//                        	ers = "userOutTime";
//                        } else if (exception instanceof DisabledException) {
//                        	ers = "userForbid";
//                        } else if (exception instanceof BadCredentialsException) {
//                        	ers = "userOrPassWrong";
//                        }
//                        Map<String,Object> _map = new HashMap<String,Object>();//
//                		_map.put("token", "");
//                		_map.put("scl", ers);
//                		RespBean ok = RespBean.error("/dologin", _map);
//                        String s = Util.setResponseToClientString(req, resp, ok);
//                        out.write(s);
//                        out.flush();
//                        out.close();
//                    }
//            })
//    		.permitAll()
//    		.and()
    		.logout()
    		.logoutUrl("/logout")
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
    		// 添加过滤器链,前一个参数过滤器， 后一个参数过滤器添加的地方
            // 登陆过滤器
    		.and()
            .addFilterBefore(new MyJwtLoginFilter("/dologin", authManager, userService, perUrlService, userMapper, userRoleMapper), UsernamePasswordAuthenticationFilter.class)
            // 请求过滤器
            .addFilterBefore(new myAuthenticationTokenProcessingFilter(authManager), UsernamePasswordAuthenticationFilter.class)
//            .addFilterBefore(new MyCORSFilter(), FilterSecurityInterceptor.class)
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
            .and()
            .sessionManagement()
            //使用无状态认证，即 不适用session 采用JWT的token令牌
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    		;
    }
}
