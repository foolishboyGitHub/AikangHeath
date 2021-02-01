package com.aikang.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.Room;

public interface RoomMapper {

	Room getRoomByID(@Param("rid") Long rid,@Param("company") String company);
	
	Map<String, Object> getAllCompanyRoomNum(@Param("company") String company);
	
	List<Room> getRoomByName(@Param("rname") String rname,@Param("company") String company);
	
	List<Room> getRoomByName_ec(@Param("id") Long id, @Param("rname") String rname,@Param("company") String company);
	
	List<Room> getAllEnableRoom(@Param("company") String company);
	
	List<Room> getAllRoom(@Param("company") String company);
	
	Integer addRoom(@Param("record") Room record,@Param("company") String company);
	
	Integer deleteRoomByID(@Param("rid") Long rid,@Param("company") String company);
	
	Integer updateRoomByIDSelective(@Param("record") Room record,@Param("company") String company);
	
	Integer updateRoomEnableByID(@Param("record") Room record,@Param("company") String company);
	
}
