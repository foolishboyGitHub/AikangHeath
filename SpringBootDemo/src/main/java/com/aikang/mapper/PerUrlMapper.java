package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.PerUrl;

public interface PerUrlMapper {

	int deleteByPrimaryKey(Integer id);

    int insert(PerUrl record);

    int insertSelective(PerUrl record);

    PerUrl selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(PerUrl record);

    int updateByPrimaryKey(PerUrl record);

    List<PerUrl> getMenusByHrId(@Param("hrid") Integer hrid, @Param("company") String company);
    
    List<PerUrl> getMenusByHrId3(@Param("hrid") Integer hrid, @Param("company") String company);

    List<PerUrl> getAllMenusWithRole(@Param("company") String company);
    
    List<PerUrl> getAllMenusHasRole(@Param("company") String company);

    List<PerUrl> getAllMenus();
    List<PerUrl> getAllMenus2();

    List<Integer> getMidsByRid( @Param("rid") Integer rid, @Param("company") String company);
}
