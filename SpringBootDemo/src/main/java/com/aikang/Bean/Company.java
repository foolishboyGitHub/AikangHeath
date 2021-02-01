package com.aikang.Bean;

public class Company {

	private Long id;
	
	private String seriid;
	
	private String username;
	
	private String password;
	
	private String cname;
	
	private String adress;
	
	private String shoptime;
	
	private String telephone;
	
	private String mobilephone;
	
	private Integer ismobil;
	
	private String sevtelephone;
	
	private String sevmobilephone;
	
	/**
	 * 公告
	 */
	private String notice;
	
	/**
	 * 备注
	 */
	private String remark;
	
	/**
	 * 头图
	 */
	private String headpic;
	
	/**
	 * 创建时间
	 */
	private String createtime;
	
	/**
	 * 最后充值时间
	 */
	private String chargetime;
	
	/**
	 * 到期时间
	 */
	private String overtime;

	/**
	 * 等级
	 * 0=微型
	 * 1=小型
	 * 2=中型
	 * 3=大型
	 */
	private Integer   level;
	
	/**
	 * 累积充值
	 */
	private Double summoney;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSeriid() {
		return seriid;
	}

	public void setSeriid(String seriid) {
		this.seriid = seriid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getMobilephone() {
		return mobilephone;
	}

	public void setMobilephone(String mobilephone) {
		this.mobilephone = mobilephone;
	}

	public String getNotice() {
		return notice;
	}

	public void setNotice(String notice) {
		this.notice = notice;
	}

	public String getHeadpic() {
		return headpic;
	}

	public void setHeadpic(String headpic) {
		this.headpic = headpic;
	}

	public String getCreatetime() {
		return createtime;
	}

	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}

	public String getOvertime() {
		return overtime;
	}

	public void setOvertime(String overtime) {
		this.overtime = overtime;
	}

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

	public Double getSummoney() {
		return summoney;
	}

	public void setSummoney(Double summoney) {
		this.summoney = summoney;
	}

	public String getChargetime() {
		return chargetime;
	}

	public void setChargetime(String chargetime) {
		this.chargetime = chargetime;
	}

	public String getSevtelephone() {
		return sevtelephone;
	}

	public void setSevtelephone(String sevtelephone) {
		this.sevtelephone = sevtelephone;
	}

	public String getSevmobilephone() {
		return sevmobilephone;
	}

	public void setSevmobilephone(String sevmobilephone) {
		this.sevmobilephone = sevmobilephone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getIsmobil() {
		return ismobil;
	}

	public void setIsmobil(Integer ismobil) {
		this.ismobil = ismobil;
	}

	public String getShoptime() {
		return shoptime;
	}

	public void setShoptime(String shoptime) {
		this.shoptime = shoptime;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
	
}
