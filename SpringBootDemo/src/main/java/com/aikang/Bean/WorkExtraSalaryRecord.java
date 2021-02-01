package com.aikang.Bean;

public class WorkExtraSalaryRecord {

	private Long id;
	
	private String company;
	
	private String seriid;
	
	private Long workid;
	
	private String workname;
	
	/**
	 * 提成类型
	 * 0=办卡提成
	 * 1=充值提成
	 * 3=推钟提成
	 */
	private Integer salarytype;
	
	/**
	 * 关联 id
	 */
	private Long   typeid;
	
	/**
	 * 关联序列号 
	 */
	private String typeseriid;
	
	
	private Double salarymoney;
	
	private String salaryname;
	
	private String recdate;
	
	private Integer daynum;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getSeriid() {
		return seriid;
	}

	public void setSeriid(String seriid) {
		this.seriid = seriid;
	}

	public Long getWorkid() {
		return workid;
	}

	public void setWorkid(Long workid) {
		this.workid = workid;
	}

	public String getWorkname() {
		return workname;
	}

	public void setWorkname(String workname) {
		this.workname = workname;
	}

	public Integer getSalarytype() {
		return salarytype;
	}

	public void setSalarytype(Integer salarytype) {
		this.salarytype = salarytype;
	}

	public Double getSalarymoney() {
		return salarymoney;
	}

	public void setSalarymoney(Double salarymoney) {
		this.salarymoney = salarymoney;
	}

	public String getSalaryname() {
		return salaryname;
	}

	public void setSalaryname(String salaryname) {
		this.salaryname = salaryname;
	}

	public Long getTypeid() {
		return typeid;
	}

	public void setTypeid(Long typeid) {
		this.typeid = typeid;
	}

	public String getTypeseriid() {
		return typeseriid;
	}

	public void setTypeseriid(String typeseriid) {
		this.typeseriid = typeseriid;
	}

	public String getRecdate() {
		return recdate;
	}

	public void setRecdate(String recdate) {
		this.recdate = recdate;
	}

	public Integer getDaynum() {
		return daynum;
	}

	public void setDaynum(Integer daynum) {
		this.daynum = daynum;
	}
}
