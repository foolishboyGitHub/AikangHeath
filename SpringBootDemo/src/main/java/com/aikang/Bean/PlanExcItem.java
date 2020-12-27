package com.aikang.Bean;

public class PlanExcItem {

	//排除不能做的项目
	
	private Integer id;
	
	private Integer hid; //人员
	
	private Integer sid; //服务项目

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getHid() {
		return hid;
	}

	public void setHid(Integer hid) {
		this.hid = hid;
	}

	public Integer getSid() {
		return sid;
	}

	public void setSid(Integer sid) {
		this.sid = sid;
	}
}
