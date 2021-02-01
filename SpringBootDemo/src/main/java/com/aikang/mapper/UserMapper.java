package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.User;
import com.aikang.Bean.Role;
import com.aikang.Bean.TeleVerify;


@Mapper
public interface UserMapper {
	
	String isTableExist(@Param("tablename") String tablename);
	
	int deleteByPrimaryKey(@Param("id") Long id, @Param("company") String company);

	@Options(useGeneratedKeys = true)
    Long insert(@Param("record") User record, @Param("company") String company);


    User selectByPrimaryKey(@Param("id") Long id, @Param("company") String company);
    
    User selectBy_username(@Param("username") String username, @Param("company") String company);
    
    User selectBy_servicecode(@Param("servicecode") String servicecode, @Param("company") String company);
    
    User selectBy_phone(@Param("phone") String phone, @Param("company") String company);
    
    User selectBy_servicecode_ec(@Param("servicecode") String servicecode, @Param("id") Long id, @Param("company") String company);
    
    User selectBy_phone_ec(@Param("phone") String phone, @Param("id") Long id, @Param("company") String company);

    int updateByPrimaryKeySelective(@Param("record") User record, @Param("company") String company);
    
    int updateAdminByPrimaryKeySelective(@Param("record") User record, @Param("company") String company);

    int updateByPrimaryKey(@Param("record") User record, @Param("company") String company);
    
    int updateEnableByPrimaryKey(@Param("record") User record, @Param("company") String company);

    User loadUserByUsername(@Param("username") String username, @Param("company") String company);
    
    User loadAdminUser(@Param("username") String username, @Param("company") String company);

    List<Role> getHrRolesById(@Param("id") Long id, @Param("company") String company);

    List<User> getAllHrs(@Param("hrid") Long hrid, @Param("keywords") String keywords, @Param("company") String company);
    
    List<User> getAllSimpHrs(@Param("hrid") Long hrid, @Param("keywords") String keywords, @Param("company") String company);
    
    List<User> getAllHrsExceptCurrentHr(@Param("id") Long id, @Param("company") String company);
    
    
    ////顾客
    User wloadUserByUsername(@Param("username") String username);
    
	@Options(useGeneratedKeys = true)
    Long winsertuser(@Param("record") User record);
	
	User wselectBy_username(@Param("username") String username);
	
	User wselectBy_phone(@Param("phone") String phone);
	
	User wselectBy_sessioncode(@Param("sessioncode") String sessioncode);
	
	int wupdateByPrimaryKeySelective(@Param("record") User record);
	
	User wloadUserByWXOpenid(@Param("wxopenid") String wxopenid);
	
	User wloadUserByID(@Param("id") long id);
	
	//验证码
	int insertTeleCode(@Param("record") TeleVerify record);
	
	List<TeleVerify> getTeleVerfyByID(@Param("id") long id);
	
	List<TeleVerify> getTeleVerfyByUidAndTelenumberAndType(@Param("uid") long uid, @Param("telenumber") String telenumber, @Param("type") String type);
	
	List<TeleVerify> getTeleVerfyByTelenumberAndType(@Param("telenumber") String telenumber, @Param("type") String type);
	
	int updateTeleCodeByPrimaryKeySelective(@Param("record") TeleVerify record);
}
