package com.aikang.Bean;

public class ServiceSalary {

	private Long id;
	
	private String company;
	
	private Long hid;
	
	private Long sid;
	
	private Integer sdx;
	
	private String  name;
	
	private Double dSalaryLz;   //默认提成 轮种
	
	private Double dSalaryDz;   //默认提成 点钟
	
	private Double dSalaryDp;   //默认提成 点排
	
	private Double dSalarySz;   //默认提成 散钟
	
	private double  defsalarylz;
	
	private double  defsalarydz;
	
	private double  defsalarydp;
	
	private double  defsalarysz;
	

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

	public double getDefsalarylz() {
		return defsalarylz;
	}

	public void setDefsalarylz(double defsalarylz) {
		this.defsalarylz = defsalarylz;
	}

	public double getDefsalarydz() {
		return defsalarydz;
	}

	public void setDefsalarydz(double defsalarydz) {
		this.defsalarydz = defsalarydz;
	}

	public double getDefsalarydp() {
		return defsalarydp;
	}

	public void setDefsalarydp(double defsalarydp) {
		this.defsalarydp = defsalarydp;
	}

	public double getDefsalarysz() {
		return defsalarysz;
	}

	public void setDefsalarysz(double defsalarysz) {
		this.defsalarysz = defsalarysz;
	}

	public Double getdSalaryLz() {
		return dSalaryLz;
	}

	public void setdSalaryLz(Double dSalaryLz) {
		this.dSalaryLz = dSalaryLz;
	}

	public Double getdSalaryDz() {
		return dSalaryDz;
	}

	public void setdSalaryDz(Double dSalaryDz) {
		this.dSalaryDz = dSalaryDz;
	}

	public Double getdSalaryDp() {
		return dSalaryDp;
	}

	public void setdSalaryDp(Double dSalaryDp) {
		this.dSalaryDp = dSalaryDp;
	}

	public Double getdSalarySz() {
		return dSalarySz;
	}

	public void setdSalarySz(Double dSalarySz) {
		this.dSalarySz = dSalarySz;
	}

	public Integer getSdx() {
		return sdx;
	}

	public void setSdx(Integer sdx) {
		this.sdx = sdx;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}
}
