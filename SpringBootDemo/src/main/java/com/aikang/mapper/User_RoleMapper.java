package com.aikang.mapper;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.User_Role;

public interface User_RoleMapper {

	int deleteByPrimaryKey(@Param("id") Long id, @Param("company") String company);

    int insert(@Param("record") User_Role record, @Param("company") String company);

    int insertSelective(@Param("record") User_Role record, @Param("company") String company);

    User_Role selectByPrimaryKey(@Param("id") Long id, @Param("company") String company);

    int updateByPrimaryKeySelective(@Param("record") User_Role record, @Param("company") String company);

    int updateByPrimaryKey(@Param("record") User_Role record, @Param("company") String company);

    void deleteByHrid(@Param("hrid") Long hrid, @Param("company") String company);

    Integer addRole(@Param("hrid") Long hrid, @Param("rids") Integer[] rids, @Param("company") String company);
}
