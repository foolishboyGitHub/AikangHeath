package com.aikang.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.Company;
import com.aikang.Bean.CompanyOfen;
import com.aikang.Bean.CompanyPicture;
import com.aikang.Bean.User;

public interface CompanyMapper {

	List<Company> getAllCompany(); 
	
	List<Map<String, Object>>getCompanyByGuessGukeLike(@Param("key") String key, @Param("start") Integer start, @Param("pagesize") Integer pagesize);
	
	List<Map<String, Object>>getCompanyByGuessGukeNoWord(@Param("start") Integer start, @Param("pagesize") Integer pagesize);
	
	Company getCompanyByID(@Param("id") long id);
	
	Company getCompanyByUsername(@Param("username") String username);
	
	Company getCompanyByMobilphone(@Param("mobilephone") String mobilephone);
	
	Integer insertCompanyData(@Param("record") Company record);
	
	Integer updateCompanyDataByIDSelective(@Param("record") Company record);
	
	Integer insertAdminUser(@Param("record") User record);
	
	Integer updateAdminByCompany(@Param("record") User record);
	
	
	
	Map<String, Object> getAllCompanyPictureNum(@Param("company") String company);
	
	CompanyPicture getCompanyPictureByID(@Param("id") long id);
	
	CompanyPicture getCompanyPictureBySeriid(@Param("company") String company, @Param("seriid") String seriid);
	
	CompanyPicture getCompanyPictureByFilename(@Param("company") String company, @Param("filename") String filename);
	
	List<CompanyPicture> getAllCompanyPicture(@Param("company") String company);
	
	Integer insertCompanyPictureData(@Param("record") CompanyPicture record);
	
	Integer deleteCompanyPictureByID(@Param("id") long id);
	
	Integer deleteCompanyPictureBySeriid(@Param("company") String company, @Param("seriid") String seriid);
	
	
	CompanyOfen getGukeOfenDataByCompanyAndUsername(@Param("company") String company, @Param("username") String username);
	
	List<Map<String, Object>> getUserOfenCompanyByUsername(@Param("username") String username, @Param("start") Integer start, @Param("pagesize") Integer pagesize);
	
	Integer insertGukeOfenInfo(@Param("record") CompanyOfen record);
	
	Integer updateGukeCompanyOfenDataByIDSelective(@Param("record") CompanyOfen record);
}
