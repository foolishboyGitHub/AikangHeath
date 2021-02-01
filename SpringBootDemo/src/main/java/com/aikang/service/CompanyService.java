package com.aikang.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.Company;
import com.aikang.Bean.CompanyOfen;
import com.aikang.Bean.CompanyPicture;
import com.aikang.Bean.User;
import com.aikang.mapper.CompanyMapper;

@Service
@Transactional
public class CompanyService {

	@Autowired      //注入mapper
	CompanyMapper  companyMapper;
	
	public List<Company> getAllCompany(){
		return companyMapper.getAllCompany();
	}
	
	public Company getCompanyByID(long id){
		return companyMapper.getCompanyByID(id);
	}
	
	public Company getCompanyByUsername(String username){
		return companyMapper.getCompanyByUsername(username);
	}
	
	public Company getCompanyByMobilphone(String mobilphone){
		return companyMapper.getCompanyByMobilphone(mobilphone);
	}
	
	public int insertCompanyData(Company record, User au){		
		int c =  companyMapper.insertCompanyData(record);
		int a =  companyMapper.insertAdminUser(au);
		if(c != a){
			return -1;
		}
		return c;
	}
	
	public int updateCompanyDataByIDSelective(Company record){
		return companyMapper.updateCompanyDataByIDSelective(record);
	}
	
	public int insertAdminUser(User record){
		return companyMapper.insertAdminUser(record);
	}
	
	public int updateAdminByCompany(User record){
		return companyMapper.updateAdminByCompany(record);
	}
	
	
	
	///picture
	public Map<String, Object> getAllCompanyPictureNum(String company)
	{
		return companyMapper.getAllCompanyPictureNum(company);
	}
	public int insertCompanyPictureData(CompanyPicture record){
		return companyMapper.insertCompanyPictureData(record);
	}
	
	public CompanyPicture getCompanyPictureByID(long id){
		return companyMapper.getCompanyPictureByID(id);
	}
	
	public CompanyPicture getCompanyPictureBySeriid(String company, String seriid){
		return companyMapper.getCompanyPictureBySeriid(company, seriid);
	}
	
	public CompanyPicture getCompanyPictureByFilename(String company, String filename){
		return companyMapper.getCompanyPictureByFilename(company, filename);
	}
	
	public List<CompanyPicture> getAllCompanyPicture(String company){
		return companyMapper.getAllCompanyPicture(company);
	}
	
	public int deleteCompanyPictureByID(long id){
		return companyMapper.deleteCompanyPictureByID(id);
	}
	
	public int deleteCompanyPictureBySeriid(String company, String seriid){
		return companyMapper.deleteCompanyPictureBySeriid(company, seriid);
	}
	
	public List<Map<String, Object>> getUserOfenCompanyByUsername(String username, Integer start, Integer pagesize){
		return companyMapper.getUserOfenCompanyByUsername(username, start, pagesize);
	}
	public List<Map<String, Object>> getCompanyByGuessGukeLike(String key,Integer start, Integer pagesize){
		return companyMapper.getCompanyByGuessGukeLike(key, start, pagesize);
	}
	
	public CompanyOfen getGukeOfenDataByCompanyAndUsername(String company, String username)
	{
		return companyMapper.getGukeOfenDataByCompanyAndUsername(company, username);
	}
	
	public List<Map<String, Object>> getCompanyByGuessGukeNoWord(Integer start, Integer pagesize){
		return companyMapper.getCompanyByGuessGukeNoWord(start, pagesize);
	}
	public Integer insertGukeOfenInfo(CompanyOfen record){
		return companyMapper.insertGukeOfenInfo(record);
	}
	
	public Integer updateGukeCompanyOfenDataByIDSelective(CompanyOfen record){
		return companyMapper.updateGukeCompanyOfenDataByIDSelective(record);
	}
}
