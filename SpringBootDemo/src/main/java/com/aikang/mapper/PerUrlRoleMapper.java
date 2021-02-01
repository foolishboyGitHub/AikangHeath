package com.aikang.mapper;

import org.apache.ibatis.annotations.Param;
import com.aikang.Bean.PerUrlRole;

public interface PerUrlRoleMapper {

	int deleteByPrimaryKey(@Param("id") Long id, @Param("company") String company);

    int insert(@Param("record") PerUrlRole record, @Param("company") String company);

    int insertSelective(@Param("record") PerUrlRole record, @Param("company") String company);

    PerUrlRole selectByPrimaryKey(@Param("id") Long id, @Param("company") String company);

    int updateByPrimaryKeySelective(@Param("record") PerUrlRole record, @Param("company") String company);

    int updateByPrimaryKey(@Param("record") PerUrlRole record, @Param("company") String company);

    void deleteByMid(@Param("mid") Integer mid, @Param("company") String company);
    
    void deleteByRid(@Param("rid") Integer rid, @Param("company") String company);

    Integer insertRecord(@Param("rid") Integer rid, @Param("mids") Integer[] mids, @Param("company") String company);
}
