package com.aikang.Bean;

public class HuiYuanTradeRecord {

	private Long id;
	
	private String company;
	
	private String seriid;
	
	private Long hyid;
	
	private String hyseriid;
	
	private String hyname;
	
	private Double trademoney;
	/**
	 * 交易类型
	 * 0=办卡 
	 * 1=充值
	 * 2=还款
	 * 3=退款
	 * 4=补差价
	 * 5=透支余额
	 * 6=赠送金额
	 */
	private Integer tradetype;
	
	private String tradename;
	
	private Long workerid;
	
	private String workername;
	
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

	public Long getHyid() {
		return hyid;
	}

	public void setHyid(Long hyid) {
		this.hyid = hyid;
	}

	public String getHyseriid() {
		return hyseriid;
	}

	public void setHyseriid(String hyseriid) {
		this.hyseriid = hyseriid;
	}

	public String getHyname() {
		return hyname;
	}

	public void setHyname(String hyname) {
		this.hyname = hyname;
	}

	public Double getTrademoney() {
		return trademoney;
	}

	public void setTrademoney(Double trademoney) {
		this.trademoney = trademoney;
	}

	public Integer getTradetype() {
		return tradetype;
	}

	public void setTradetype(Integer tradetype) {
		this.tradetype = tradetype;
	}

	public String getTradename() {
		return tradename;
	}

	public void setTradename(String tradename) {
		this.tradename = tradename;
	}

	public Long getWorkerid() {
		return workerid;
	}

	public void setWorkerid(Long workerid) {
		this.workerid = workerid;
	}

	public String getWorkername() {
		return workername;
	}

	public void setWorkername(String workername) {
		this.workername = workername;
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
