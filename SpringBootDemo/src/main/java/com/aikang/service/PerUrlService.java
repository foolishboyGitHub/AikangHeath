package com.aikang.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.User;
import com.aikang.Bean.PerUrl;
import com.aikang.mapper.PerUrlMapper;
import com.aikang.mapper.PerUrlRoleMapper;
import com.aikang.utils.Util;

@Service
@CacheConfig(cacheNames = "perurls_cache")
public class PerUrlService {

	@Autowired
    PerUrlMapper perurlMapper;
    @Autowired
    PerUrlRoleMapper perurlRoleMapper;
    public List<PerUrl> getPerUrlsByHrId() {
        return perurlMapper.getMenusByHrId(((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId(), Util.getConpnany_Name());
    }
    
    @Cacheable
    public List<PerUrl> getAllMenusWithRole() {
    	if(Util.getConpnany_Name() == ""){
    		return new ArrayList<PerUrl>();
    	}
        return perurlMapper.getAllMenusWithRole(Util.getConpnany_Name());
    }
    
    @Cacheable
    public List<PerUrl> getAllMenusHasRole() {
        return perurlMapper.getAllMenusHasRole(Util.getConpnany_Name());
    }

    public List<PerUrl> getAllMenus() {
        return perurlMapper.getAllMenus();
    }
    
    public List<PerUrl> getAllMenus2() {
        return perurlMapper.getAllMenus2();
    }
    
    public List<PerUrl> getAllMenusByUId(Long hrid, String company) {
        return perurlMapper.getMenusByHrId3(hrid, company);
    }
    
    public List<Integer> getMidsByRid(Integer rid) {
        return perurlMapper.getMidsByRid(rid, Util.getConpnany_Name());
    }

    @Transactional
    public boolean updateMenuRole(Integer rid, Integer[] mids) {
    	perurlRoleMapper.deleteByRid(rid, Util.getConpnany_Name());
        if (mids == null || mids.length == 0) {
            return true;
        }
        Integer result = perurlRoleMapper.insertRecord(rid, mids, Util.getConpnany_Name());
        return result==mids.length;
    }
    
    public Integer insertSelective(PerUrl record){
    	return perurlMapper.insertSelective(record);
    }
    
    @Transactional
    public Integer deletePerByPrimaryKey(Integer id){
    	perurlRoleMapper.deleteByMid(id, Util.getConpnany_Name());
    	return perurlMapper.deleteByPrimaryKey(id);
    }
    
}
