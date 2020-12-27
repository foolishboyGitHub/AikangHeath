package com.aikang.mapper;


import com.aikang.Bean.Role;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface RoleMapper {
	int deleteByPrimaryKey(Integer id);

    int insert(Role record);

    int insertSelective(Role record);

    Role selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Role record);

    int updateByPrimaryKey(Role record);

    List<Role> getAllRoles();
    
    List<Role> getAllRolesWithPerUrl(@Param("company") String company);
}