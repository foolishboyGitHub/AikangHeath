package com.aikang.Bean;

public class ServiceItem {
	
	private Integer id;
	
	private Integer timelong;   //时长 分钟
	
	private Integer priveType;   //价格类型
	
	private Double price;   //价格
	
	private Double dSalaryLz;   //默认提成 轮种
	
	private Double dSalaryDz;   //默认提成 点钟
	
	private Double dSalaryDp;   //默认提成 点排
	
	private Double dSalarySz;   //默认提成 散钟
	
	private Integer overtime;   //可以超时 分钟
	
	private Double clocknum;   //折算钟数 小时
	
	private Integer needpoint;   //所需积分
	
	private String  name;   //项目名称
	
	private String  mark;   //项目备注
	
	private Integer  enabled;   //项目是否有效
	
	private Integer  isdiscount;   //是否参与打折
	
	private Integer  timepermit;   //起步时间限制
	
	private Integer  pointChange;   //起步时间限制
	
	private String  sp1;   //预留 1
	
	private String  sp2;   //预留 2
	
	private String  sp3;   //预留 3
	
	private Integer sdx;   //排序

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getTimelong() {
		return timelong;
	}

	public void setTimelong(Integer timelong) {
		this.timelong = timelong;
	}

	public Integer getPriveType() {
		return priveType;
	}

	public void setPriveType(Integer priveType) {
		this.priveType = priveType;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getOvertime() {
		return overtime;
	}

	public void setOvertime(Integer overtime) {
		this.overtime = overtime;
	}

	public Double getClocknum() {
		return clocknum;
	}

	public void setClocknum(Double clocknum) {
		this.clocknum = clocknum;
	}

	public Integer getNeedpoint() {
		return needpoint;
	}

	public void setNeedpoint(Integer needpoint) {
		this.needpoint = needpoint;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMark() {
		return mark;
	}

	public void setMark(String mark) {
		this.mark = mark;
	}

	public Integer getEnabled() {
		return enabled;
	}

	public void setEnabled(Integer enabled) {
		this.enabled = enabled;
	}

	public Integer getIsdiscount() {
		return isdiscount;
	}

	public void setIsdiscount(Integer isdiscount) {
		this.isdiscount = isdiscount;
	}

	public Integer getTimepermit() {
		return timepermit;
	}

	public void setTimepermit(Integer timepermit) {
		this.timepermit = timepermit;
	}

	public String getSp1() {
		return sp1;
	}

	public void setSp1(String sp1) {
		this.sp1 = sp1;
	}

	public String getSp2() {
		return sp2;
	}

	public void setSp2(String sp2) {
		this.sp2 = sp2;
	}

	public String getSp3() {
		return sp3;
	}

	public void setSp3(String sp3) {
		this.sp3 = sp3;
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

	public Integer getPointChange() {
		return pointChange;
	}

	public void setPointChange(Integer pointChange) {
		this.pointChange = pointChange;
	}

	public Double getdSalaryLz() {
		return dSalaryLz;
	}

	public void setdSalaryLz(Double dSalaryLz) {
		this.dSalaryLz = dSalaryLz;
	}

	public Integer getSdx() {
		return sdx;
	}

	public void setSdx(Integer sdx) {
		this.sdx = sdx;
	}
}
