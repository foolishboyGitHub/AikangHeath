package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.User;
import com.aikang.Bean.Role;


@Mapper
public interface UserMapper {
	
	String isTableExist(@Param("tablename") String tablename);
	
	int deleteByPrimaryKey(@Param("id") Integer id, @Param("company") String company);

	@Options(useGeneratedKeys = true)
    Integer insert(@Param("record") User record, @Param("company") String company);

    int insertSelective(@Param("record") User record, @Param("company") String company);

    User selectByPrimaryKey(@Param("id") Integer id, @Param("company") String company);
    
    User selectBy_username(@Param("username") String username, @Param("company") String company);
    
    User selectBy_servicecode(@Param("servicecode") String servicecode, @Param("company") String company);
    
    User selectBy_phone(@Param("phone") String phone, @Param("company") String company);
    
    User selectBy_servicecode_ec(@Param("servicecode") String servicecode, @Param("id") Integer id, @Param("company") String company);
    
    User selectBy_phone_ec(@Param("phone") String phone, @Param("id") Integer id, @Param("company") String company);

    int updateByPrimaryKeySelective(@Param("record") User record, @Param("company") String company);

    int updateByPrimaryKey(@Param("record") User record, @Param("company") String company);
    
    int updateEnableByPrimaryKey(@Param("record") User record, @Param("company") String company);

    User loadUserByUsername(@Param("username") String username, @Param("company") String company);
    
    User loadAdminUser(@Param("username") String username, @Param("company") String company);

    List<Role> getHrRolesById(@Param("id") Integer id, @Param("company") String company);

    List<User> getAllHrs(@Param("hrid") Integer hrid, @Param("keywords") String keywords, @Param("company") String company);

    List<User> getAllHrsExceptCurrentHr(@Param("id") Integer id, @Param("company") String company);
}
