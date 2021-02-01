package com.aikang.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.CSItemIdx;
import com.aikang.Bean.PriceType;
import com.aikang.Bean.ServiceItem;

@Mapper
public interface ServiceItemMapper {
	
	@Options(useGeneratedKeys = true)
    Integer insert(@Param("record") ServiceItem record, @Param("company") String company);
	
	@Options(useGeneratedKeys = true)
    Integer insertPriceType(@Param("record") PriceType record, @Param("company") String company);
	
	List<PriceType> getAllPriceTypeItems(@Param("company") String company);
	
	PriceType selectPriceTypeBy_id(@Param("id") Long id, @Param("company") String company);
	
	
	Integer deletePriceTypeByid(@Param("id") Long id, @Param("company") String company);
	
	ServiceItem selectBy_id(@Param("id") Long id, @Param("company") String company);
	
	ServiceItem selectBy_name(@Param("name") String name, @Param("company") String company);
	
	ServiceItem selectBy_name_ec(@Param("name") String name, @Param("id") Long id, @Param("company") String company);
	
	Map<String, Object> getAllCompanyServiceItemNum(@Param("company") String company);
	
	List<ServiceItem> getAllEnabledServiceItems(@Param("keywords") String keywords,  @Param("company") String company);
	
	List<ServiceItem> getEnabledAllGukeShopServiceItems(@Param("keywords") String keywords,  @Param("company") String company);
	
	List<ServiceItem> getAllServiceItems(@Param("keywords") String keywords,  @Param("company") String company);
	
	int updateByPrimaryKeySelective(@Param("record") ServiceItem record, @Param("company") String company);

    int updateByPrimaryKey(@Param("record") ServiceItem record, @Param("company") String company);
    

    int updateEnableByPrimaryKey(@Param("record") ServiceItem record, @Param("company") String company);
    
    int truncateServiceItemIdxTable(@Param("company") String company);
    
    int addServiceItemIdxByList(@Param("record") CSItemIdx[] record, @Param("company") String company);
}
