package com.aikang.config;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import java.util.Collection;
import java.util.List;

import com.aikang.Bean.PerUrl;
import com.aikang.Bean.Role;
import com.aikang.service.PerUrlService;
import com.aikang.utils.Util;

@Component
public class MyFilterInvocationSecurityMetadataSource implements FilterInvocationSecurityMetadataSource{

	@Autowired
    PerUrlService perurlService;
    AntPathMatcher antPathMatcher = new AntPathMatcher();
    protected final Log logger = LogFactory.getLog(getClass());
    @Override
    public Collection<ConfigAttribute> getAttributes(Object object) throws IllegalArgumentException {
    	//admin管理员 特权
    	Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    	Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
    	for (GrantedAuthority authority : authorities) {
        	//如果是系统管理员 直接放行
        	String ur = authority.getAuthority();
        	if (ur.equals("ROLE_admin")) {
        		return SecurityConfig.createList("ROLE_admin");
            }
        }

    	
    	String requestUrl = ((FilterInvocation) object).getRequestUrl();
        List<PerUrl> perurls = perurlService.getAllMenusWithRole();      
        for (PerUrl perurl : perurls) {
        	String pus = perurl.getUrl();
            if (antPathMatcher.match(pus, requestUrl)) {
                List<Role> roles = perurl.getRoles();
                String[] str = new String[roles.size()];
                for (int i = 0; i < roles.size(); i++) {
                    str[i] = roles.get(i).getName();
                }
               
                logger.debug(" ------------ 匹配上了 "+requestUrl);
                return SecurityConfig.createList(str);
            }
        }
        logger.debug(" ************** 没有匹配上了 "+requestUrl);
        return SecurityConfig.createList("ROLE_NOTHISURLROLE");
    }
    
    /**
     * @Author: Galen
     * @Description: 此处方法如果做了实现，返回了定义的权限资源列表，
     * Spring Security会在启动时校验每个ConfigAttribute是否配置正确，
     * 如果不需要校验，这里实现方法，方法体直接返回null即可。
     * @Date: 2019/3/27-17:12
     * @Param: []
     * @return: java.util.Collection<org.springframework.security.access.ConfigAttribute>
     **/
    @Override
    public Collection<ConfigAttribute> getAllConfigAttributes() {
        return null;
    }

    /**
     * @Author: Galen
     * @Description: 方法返回类对象是否支持校验，
     * web项目一般使用FilterInvocation来判断，或者直接返回true
     * @Date: 2019/3/27-17:14
     * @Param: [aClass]
     * @return: boolean
     **/
    @Override
    public boolean supports(Class<?> clazz) {
//    	return FilterInvocation.class.isAssignableFrom(clazz);
        return true;
    }
}
