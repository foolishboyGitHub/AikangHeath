package com.aikang.Bean;

public class PlanExcItem {

	//排除不能做的项目
	
	private Long id;
	
	
	private String company;
	
	private Long hid; //人员
	
	private Long sid; //服务项目

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getHid() {
		return hid;
	}

	public void setHid(Long hid) {
		this.hid = hid;
	}

	public Long getSid() {
		return sid;
	}

	public void setSid(Long sid) {
		this.sid = sid;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}
}
