package com.aikang.Bean;

public class MoneyChannel {

	private Long id;
	/**
	 * 公司名称
	 */
	private String company;
	
	/**
	 * 通道名称 wxpay=微信支付   alpay=支付宝支付
	 */
	private String channelname;
	
	/**
	 * 通道占用开始时间
	 */
	private String blocktime;
	
	/**
	 * 是否占用 0=没有  1=被占用
	 */
	private Integer isblock;
	
	/**
	 * 占用者id
	 */
	private Long  blockkid;
	
	/**
	 * 占用付款类型 0=商品下单  1=会员充值
	 */
	private Integer blocktype;
	
	/**
	 * 占用时商品单号
	 */
	private String blockbillnumber;
	
	/**
	 * 需要付款金额
	 */
	private Double blockbillprice;

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


	public String getBlocktime() {
		return blocktime;
	}

	public void setBlocktime(String blocktime) {
		this.blocktime = blocktime;
	}

	public Integer getIsblock() {
		return isblock;
	}

	public void setIsblock(Integer isblock) {
		this.isblock = isblock;
	}

	public Long getBlockkid() {
		return blockkid;
	}

	public void setBlockkid(Long blockkid) {
		this.blockkid = blockkid;
	}

	public Integer getBlocktype() {
		return blocktype;
	}

	public void setBlocktype(Integer blocktype) {
		this.blocktype = blocktype;
	}

	public String getBlockbillnumber() {
		return blockbillnumber;
	}

	public void setBlockbillnumber(String blockbillnumber) {
		this.blockbillnumber = blockbillnumber;
	}

	public String getChannelname() {
		return channelname;
	}

	public void setChannelname(String channelname) {
		this.channelname = channelname;
	}

	public Double getBlockbillprice() {
		return blockbillprice;
	}

	public void setBlockbillprice(Double blockbillprice) {
		this.blockbillprice = blockbillprice;
	}
}
