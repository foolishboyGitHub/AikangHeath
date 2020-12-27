package com.aikang.service;

import com.aikang.mapper.UserMapper;
import com.aikang.mapper.User_RoleMapper;
import com.aikang.mapper.RoleMapper;

import java.util.ArrayList;
import java.util.List;

import com.aikang.Bean.Role;
import com.aikang.Bean.User;
import com.aikang.utils.Util;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    	
    	String admintb = Util.getConpnany_Name()+"_admintab";
        if(!isTableExist(admintb)){
        	throw new UsernameNotFoundException("公司名称不存在!");
        }
        	
    	if(username.equals("admin")){
    		User user = userMapper.loadAdminUser(username, Util.getConpnany_Name());
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
    	
    	User user = userMapper.loadUserByUsername(username, Util.getConpnany_Name());
        if (user == null) {
            throw new UsernameNotFoundException("用户名不存在!");
        }
        user.setRoles(userMapper.getHrRolesById(user.getId(), Util.getConpnany_Name()));
        return user;
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
    	Integer id = userMapper.insert(user, Util.getConpnany_Name());
    	id = user.getId();
    	Integer result = userRoleMapper.addRole(id, rids, Util.getConpnany_Name());
    	return result==rids.length;
    }
    public List<User> getAllUser(String keywords) {
        return userMapper.getAllHrs(-1,keywords, Util.getConpnany_Name());
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
    public boolean updateUserRole(Integer hrid, Integer[] rids) {
    	userRoleMapper.deleteByHrid(hrid, Util.getConpnany_Name());
        return userRoleMapper.addRole(hrid, rids, Util.getConpnany_Name()) == rids.length;
    }

    public Integer deleteHrById(Integer id) {
        return userMapper.deleteByPrimaryKey(id, Util.getConpnany_Name());
    }

    public List<User> getAllHrsExceptCurrentHr() {
        return userMapper.getAllHrsExceptCurrentHr(Util.getCurrentUser().getId(), Util.getConpnany_Name());
    }
}
