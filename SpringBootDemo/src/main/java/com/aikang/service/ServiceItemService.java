package com.aikang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.CSItemIdx;
import com.aikang.Bean.PriceType;
import com.aikang.Bean.ServiceItem;
import com.aikang.mapper.ServiceItemMapper;
import com.aikang.utils.Util;

@Service
@Transactional
public class ServiceItemService {
	
	@Autowired
	ServiceItemMapper serviceItemMapper;
	
	public List<ServiceItem> getEnabledAllServiceItems(String keywords){
		return serviceItemMapper.getAllEnabledServiceItems(keywords, Util.getConpnany_Name());
	}
	
	public List<ServiceItem> getAllServiceItems(String keywords){
		return serviceItemMapper.getAllServiceItems(keywords, Util.getConpnany_Name());
	}
	public ServiceItem getServiceItemsById(int id){
		return serviceItemMapper.selectBy_id(id, Util.getConpnany_Name());
	}
	public String ifexistof(ServiceItem sItem){
		ServiceItem gItem = serviceItemMapper.selectBy_name(sItem.getName(), Util.getConpnany_Name());
    	if(gItem!=null){
    		return "name";
    	}

    	return "no";
    }
	
	public String ifexistofUpdate(ServiceItem sItem){
		ServiceItem gItem = serviceItemMapper.selectBy_name_ec(sItem.getName(),sItem.getId(), Util.getConpnany_Name());
    	if(gItem!=null){
    		return "name";
    	}

    	return "no";
    }
	
	public boolean insertsItem(ServiceItem sItem){
    	if(sItem == null){
    		return false;
    	}
    	Integer con = serviceItemMapper.insert(sItem, Util.getConpnany_Name());
    	Integer id = sItem.getId();
    	return con==1;
    }
	
	public List<PriceType> getAllPriceTypeItems(){
		return serviceItemMapper.getAllPriceTypeItems(Util.getConpnany_Name());
	}
	
	public PriceType getPriceTypeItemById(int id){
		return serviceItemMapper.selectPriceTypeBy_id(id, Util.getConpnany_Name());
	}
	
	public boolean insertPriceType(PriceType pt){
    	if(pt == null){
    		return false;
    	}
    	Integer con = serviceItemMapper.insertPriceType(pt, Util.getConpnany_Name());
    	Integer id = pt.getId();
    	return con==1;
    }
	
	public Integer deletePriceTypeByid(Integer id){

    	Integer con = serviceItemMapper.deletePriceTypeByid(id, Util.getConpnany_Name());
    	
    	return con;
    }
	
	public Integer updateItemByPrimaryKey(ServiceItem sItem) {
        return serviceItemMapper.updateByPrimaryKeySelective(sItem, Util.getConpnany_Name());
    }
    
    public Integer updateItemEnable(ServiceItem sItem) {
        return serviceItemMapper.updateEnableByPrimaryKey(sItem, Util.getConpnany_Name());
    }
    
    public Integer addServiceItemIdxByList(CSItemIdx[] record){
    	int delnum = serviceItemMapper.truncateServiceItemIdxTable(Util.getConpnany_Name());
//    	if(delnum != record.length){
//    		return -3;
//    	}
    	return serviceItemMapper.addServiceItemIdxByList(record, Util.getConpnany_Name());
    }
}
