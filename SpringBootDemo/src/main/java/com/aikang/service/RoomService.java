package com.aikang.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aikang.Bean.Room;
import com.aikang.mapper.RoomMapper;
import com.aikang.utils.Util;

@Service
@Transactional
public class RoomService {

	@Autowired
	RoomMapper roomMapper;
	
	public Room getRoomByID(Integer rid){
		return roomMapper.getRoomByID(rid, Util.getConpnany_Name());
	}
	
	public List<Room> getRoomByName(String rname){
		return roomMapper.getRoomByName(rname, Util.getConpnany_Name());
	}
	
	public List<Room> getRoomByName_ec(Integer id, String rname){
		return roomMapper.getRoomByName_ec(id, rname, Util.getConpnany_Name());
	}
	
	public List<Room> getAllEnableRoom(){
		return roomMapper.getAllEnableRoom(Util.getConpnany_Name());
	}
	
	public List<Room> getAllRoom(){
		return roomMapper.getAllRoom(Util.getConpnany_Name());
	}
	
	public Integer deleteRoomByID(Integer rid){
		return roomMapper.deleteRoomByID(rid, Util.getConpnany_Name());
	}
	
	public Integer addRoom(Room room){
		return roomMapper.addRoom(room, Util.getConpnany_Name());
	}
	
	public Integer updateRoomByIDSelective(Room room){
		return roomMapper.updateRoomByIDSelective(room , Util.getConpnany_Name());
	}
	
	public Integer updateRoomEnableByID(Room room){
		return roomMapper.updateRoomEnableByID(room , Util.getConpnany_Name());
	}
}
