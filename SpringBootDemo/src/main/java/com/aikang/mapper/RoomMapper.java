package com.aikang.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.aikang.Bean.Room;

public interface RoomMapper {

	Room getRoomByID(@Param("rid") Integer rid,@Param("company") String company);
	
	List<Room> getRoomByName(@Param("rname") String rname,@Param("company") String company);
	
	List<Room> getRoomByName_ec(@Param("id") Integer id, @Param("rname") String rname,@Param("company") String company);
	
	List<Room> getAllEnableRoom(@Param("company") String company);
	
	List<Room> getAllRoom(@Param("company") String company);
	
	Integer addRoom(@Param("record") Room record,@Param("company") String company);
	
	Integer deleteRoomByID(@Param("rid") Integer rid,@Param("company") String company);
	
	Integer updateRoomByIDSelective(@Param("record") Room record,@Param("company") String company);
	
	Integer updateRoomEnableByID(@Param("record") Room record,@Param("company") String company);
	
}
