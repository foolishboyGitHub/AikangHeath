package com.aikang.service;

import com.aikang.mapper.UserMapper;
import com.aikang.mapper.User_RoleMapper;
import com.aikang.mapper.RoleMapper;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.aikang.Bean.Role;
import com.aikang.Bean.TeleVerify;
import com.aikang.Bean.User;
import com.aikang.config.TokenAuthenticationHelper;
import com.aikang.utils.Util;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Service
@Transactional
public class UserService implements UserDetailsService {
	
	@Autowired
	UserMapper userMapper;
    @Autowired
    User_RoleMapper userRoleMapper;
    
    public boolean isTableExist(String tableName){
    	String tn = userMapper.isTableExist(tableName);
    	if(tn != null)
    		return true;
    	return false;
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    	
    	RequestAttributes requestAttributes = RequestContextHolder.currentRequestAttributes();
        RequestContextHolder.getRequestAttributes();
		//从session里面获取对应的值
//		String str = (String) requestAttributes.getAttribute("company",RequestAttributes.SCOPE_SESSION);
		
		HttpServletRequest req = ((ServletRequestAttributes)requestAttributes).getRequest();
		String company;
		String wndtype;
		String rurl = req.getRequestURL().toString();
		AntPathRequestMatcher antPathMatcher = new AntPathRequestMatcher("/dologin");
		if(antPathMatcher.matches(req)){
			wndtype = String.valueOf(req.getParameter("wndtype"));
			company = String.valueOf(req.getParameter("company"));
			company = Util.cleanXSS(company);
//			System.out.println("UserDetails loadUserByUsername 8=========D dologin wndtype = "+wndtype);
		}
		else{
			String token = req.getHeader("token");
			User tmpuser = TokenAuthenticationHelper.getWndtypeAndComponyFromToken(token);
			company = tmpuser.getCompany();
			wndtype = tmpuser.getWndtype();
//			System.out.println("UserDetails loadUserByUsername 8=========D no dologin wndtype = "+wndtype);
		}
        if(wndtype.equals("manager_wnd")){	
	    	if(username.equals("admin")){
	    		User user = userMapper.loadAdminUser(username, company);
	            if (user == null) {
	                throw new UsernameNotFoundException("用户名不存在!");
	            }
	            Role r = new Role();
	            r.setId(0);
	            r.setName("ROLE_admin");
	            r.setNameZh("超级管理员");
	            List<Role> rs = new ArrayList<Role>();
	            rs.add(r);
	            user.setRoles(rs);
	            return user;
	    	}
	    	
	    	User user = userMapper.loadUserByUsername(username, company);
	        if (user == null) {
	            throw new UsernameNotFoundException("用户名不存在!");
	        }
	        user.setRoles(userMapper.getHrRolesById(user.getId(), company));
	        return user;
        }else if(wndtype.equals("wxweb")){
//        	System.out.println("UserDetails loadUserByUsername 8=========D  wndtype wxweb  username= "+username);
        	User user = userMapper.wloadUserByUsername(username);
        	
            if (user == null) {
//            	System.out.println("UserDetails loadUserByUsername 8=========D  wndtype wxweb usr null  username= "+username);
                throw new UsernameNotFoundException("用户名不存在!");
            }
            List<Role> roles = new ArrayList<Role>();
            Role r = new Role();
            r.setName("ROLE_GUKE");
            roles.add(r);
            user.setRoles(roles);
//            System.out.println("UserDetails loadUserByUsername 8=========D  wndtype wxweb usr null  username= "+username);
            return user;
        }
        return null;
    }
    public String ifexistof(User user){
    	if(userMapper.selectBy_username(user.getUsername(), Util.getConpnany_Name())!=null){
    		return "username";
    	}
    	if(userMapper.selectBy_servicecode(user.getServicecode(), Util.getConpnany_Name())!=null){
    		return "servicecode";
    	}
    	if(userMapper.selectBy_phone(user.getPhone(), Util.getConpnany_Name())!=null){
    		return "phone";
    	}
    	return "no";
    }
    public String ifexistofUpdate(User user){
    	if(userMapper.selectBy_servicecode_ec(user.getServicecode(), user.getId(), Util.getConpnany_Name())!=null){
    		return "servicecode";
    	}
    	if(userMapper.selectBy_phone_ec(user.getPhone(), user.getId(), Util.getConpnany_Name())!=null){
    		return "phone";
    	}
    	return "no";
    }
    public boolean insertUserAndRole(User user, Integer[] rids){
    	if(user == null || rids == null){
    		return false;
    	}
    	Long id = userMapper.insert(user, Util.getConpnany_Name());
    	id = user.getId();
    	Integer result = userRoleMapper.addRole(id, rids, Util.getConpnany_Name());
    	return result==rids.length;
    }
    public List<User> getAllUser(String keywords) {
        return userMapper.getAllHrs(-1L,keywords, Util.getConpnany_Name());
    }
    public List<User> getAllSimpHrs(String keywords, String company) {
        return userMapper.getAllSimpHrs(-1L,keywords, company);
    }
    public List<User> getAllUserNoCurrent(String keywords) {
        return userMapper.getAllHrs(Util.getCurrentUser().getId(),keywords, Util.getConpnany_Name());
    }
    
    public Integer updateUser(User user) {
        return userMapper.updateByPrimaryKeySelective(user, Util.getConpnany_Name());
    }
    
    public Integer updateUserEnable(User user) {
        return userMapper.updateEnableByPrimaryKey(user, Util.getConpnany_Name());
    }

    @Transactional
    public boolean updateUserRole(Long hrid, Integer[] rids) {
    	userRoleMapper.deleteByHrid(hrid, Util.getConpnany_Name());
        return userRoleMapper.addRole(hrid, rids, Util.getConpnany_Name()) == rids.length;
    }

    public Integer deleteHrById(Long id) {
        return userMapper.deleteByPrimaryKey(id, Util.getConpnany_Name());
    }

    public List<User> getAllHrsExceptCurrentHr() {
        return userMapper.getAllHrsExceptCurrentHr(Util.getCurrentUser().getId(), Util.getConpnany_Name());
    }
    
    public User wselectBy_phone(String telenumber){
    	return userMapper.wselectBy_phone(telenumber);
    }
    public int wupdateByPrimaryKeySelective(User record){
    	return userMapper.wupdateByPrimaryKeySelective(record);
    }
    
    public List<TeleVerify> getTeleVerfyByUidAndTelenumberAndType(long uid, String telenumber, String type){
    	return userMapper.getTeleVerfyByUidAndTelenumberAndType(uid, telenumber, type);
    }
    
    public List<TeleVerify> getTeleVerfyByTelenumberAndType(String telenumber, String type){
    	return userMapper.getTeleVerfyByTelenumberAndType(telenumber, type);
    }
    
    public int insertTeleCode(TeleVerify record){
    	return userMapper.insertTeleCode(record);
    }
    
    public int updateTeleCodeByPrimaryKeySelective(TeleVerify record){
    	return userMapper.updateTeleCodeByPrimaryKeySelective(record);
    }
    
    
}
