package com.aikang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aikang.Bean.Role;
import com.aikang.mapper.RoleMapper;
import com.aikang.utils.Util;

@Service
public class RoleService {

	@Autowired
    RoleMapper roleMapper;
    public List<Role> getAllRoles() {
        return roleMapper.getAllRoles();
    }
    public List<Role> getAllRolesWithPerUrl() {
        return roleMapper.getAllRolesWithPerUrl(Util.getConpnany_Name());
    }
    public Integer addRole(Role role) {
        if (!role.getName().startsWith("ROLE_")) {
            role.setName("ROLE_" + role.getName());
        }
        return roleMapper.insert(role);
    }

    public Integer deleteRoleById(Integer rid) {
        return roleMapper.deleteByPrimaryKey(rid);
    }
}
