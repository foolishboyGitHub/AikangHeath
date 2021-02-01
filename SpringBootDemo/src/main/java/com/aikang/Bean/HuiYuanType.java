package com.aikang.Bean;

public class HuiYuanType {

	private Long id;
	
	private String company;
	/**
	 * 排序编号  越小越靠前
	 */
	private Integer sdx;
	/**
	 * 类型名称 
	 */
	private String typename;
	/**
	 * 唯一世界ID
	 */
	private String seriid;
	
	/**
	 * 充值金额
	 */
	private Double rechargeam;
	/**
	 * 透支金额
	 */
	private Double overam; 
	/**
	 * 充值赠送金额
	 */
	private Double giftam;
	
	/**
	 * 会员折扣
	 */
	private Double disrate;
	
	/**
	 * 充值金额有效天数
	 */
	private Double actdays;
	
	/**
	 * 可转换到该类型
	 */
	private Integer canturnme;
	
	/**
	 * 显示隐藏
	 */
	private Integer enable;
	
	/**
	 * 充值金额限制
	 */
	private Integer limitcharge;
	
	/**
	 * 允许补差价最大额度 0标示不允许
	 */
	private Double  maxdef;
	
	
	/**
	 * 办卡提成
	 */
	private Double  csalary;
	
	/**
	 * 充值提成
	 */
	private Double  rsalary;
	
	

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

	public String getTypename() {
		return typename;
	}

	public void setTypename(String typename) {
		this.typename = typename;
	}

	public String getSeriid() {
		return seriid;
	}

	public void setSeriid(String seriid) {
		this.seriid = seriid;
	}

	public Double getRechargeam() {
		return rechargeam;
	}

	public void setRechargeam(Double rechargeam) {
		this.rechargeam = rechargeam;
	}

	public Double getOveram() {
		return overam;
	}

	public void setOveram(Double overam) {
		this.overam = overam;
	}

	public Double getGiftam() {
		return giftam;
	}

	public void setGiftam(Double giftam) {
		this.giftam = giftam;
	}

	public Double getDisrate() {
		return disrate;
	}

	public void setDisrate(Double disrate) {
		this.disrate = disrate;
	}

	public Double getActdays() {
		return actdays;
	}

	public void setActdays(Double actdays) {
		this.actdays = actdays;
	}

	public Integer getCanturnme() {
		return canturnme;
	}

	public void setCanturnme(Integer canturnme) {
		this.canturnme = canturnme;
	}

	public Integer getEnable() {
		return enable;
	}

	public void setEnable(Integer enable) {
		this.enable = enable;
	}

	public Integer getLimitcharge() {
		return limitcharge;
	}

	public void setLimitcharge(Integer limitcharge) {
		this.limitcharge = limitcharge;
	}

	public Double getMaxdef() {
		return maxdef;
	}

	public void setMaxdef(Double maxdef) {
		this.maxdef = maxdef;
	}

	public Integer getSdx() {
		return sdx;
	}

	public void setSdx(Integer sdx) {
		this.sdx = sdx;
	}

	public Double getCsalary() {
		return csalary;
	}

	public void setCsalary(Double csalary) {
		this.csalary = csalary;
	}

	public Double getRsalary() {
		return rsalary;
	}

	public void setRsalary(Double rsalary) {
		this.rsalary = rsalary;
	} 
}
