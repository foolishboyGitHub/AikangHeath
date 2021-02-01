package com.aikang.Bean;

public class WorkExtra {

	private Long id;
	
	private String company;
	/**
	 * 班次ID
	 */
	private Long tmid;
	/**
	 * 班次名称
	 */
	private String tmname;
	
	/**
	 * 员工id
	 */
	private Long hid;
	/**
	 * 是否加班 0不加班 1加班
	 */
	private Integer iswork;
	
	/**
	 * 上钟轮数
	 */
	private Integer rounde;
	
	/**
	 * 最后动轮时间
	 */
	private String rlastdate;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getTmid() {
		return tmid;
	}

	public void setTmid(Long tmid) {
		this.tmid = tmid;
	}

	public String getTmname() {
		return tmname;
	}

	public void setTmname(String tmname) {
		this.tmname = tmname;
	}

	public Integer getIswork() {
		return iswork;
	}

	public void setIswork(Integer iswork) {
		this.iswork = iswork;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public Long getHid() {
		return hid;
	}

	public void setHid(Long hid) {
		this.hid = hid;
	}

	public Integer getRounde() {
		return rounde;
	}

	public void setRounde(Integer rounde) {
		this.rounde = rounde;
	}

	public String getRlastdate() {
		return rlastdate;
	}

	public void setRlastdate(String rlastdate) {
		this.rlastdate = rlastdate;
	}


}
