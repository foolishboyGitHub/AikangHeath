package com.aikang.Bean;

public class GukePayChannelRecord {

	private long id;
	
	private String company;
	//客人ID
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
	/**
	 * 付款通知时间
	 */
	private Double paymoney;
	/**
	 * 付款通知时间
	 */
	private String paynotifytime;
	
	/**
	 * 付款通知时间
	 */
	private String payrecivetime;
	
	/**
	 * 付款通知时间
	 */
	private String notifytile;
	
	/**
	 * 付款通知时间
	 */
	private String notifycontent;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getChannelname() {
		return channelname;
	}
	public void setChannelname(String channelname) {
		this.channelname = channelname;
	}
	public String getBlocktime() {
		return blocktime;
	}
	public void setBlocktime(String blocktime) {
		this.blocktime = blocktime;
	}
	public String getPaynotifytime() {
		return paynotifytime;
	}
	public void setPaynotifytime(String paynotifytime) {
		this.paynotifytime = paynotifytime;
	}
	public String getPayrecivetime() {
		return payrecivetime;
	}
	public void setPayrecivetime(String payrecivetime) {
		this.payrecivetime = payrecivetime;
	}
	public Long getBlockkid() {
		return blockkid;
	}
	public void setBlockkid(Long blockkid) {
		this.blockkid = blockkid;
	}
	public Double getPaymoney() {
		return paymoney;
	}
	public void setPaymoney(Double paymoney) {
		this.paymoney = paymoney;
	}
	public Double getBlockbillprice() {
		return blockbillprice;
	}
	public void setBlockbillprice(Double blockbillprice) {
		this.blockbillprice = blockbillprice;
	}
	public String getBlockbillnumber() {
		return blockbillnumber;
	}
	public void setBlockbillnumber(String blockbillnumber) {
		this.blockbillnumber = blockbillnumber;
	}
	public Integer getBlocktype() {
		return blocktype;
	}
	public void setBlocktype(Integer blocktype) {
		this.blocktype = blocktype;
	}
	public Integer getIsblock() {
		return isblock;
	}
	public void setIsblock(Integer isblock) {
		this.isblock = isblock;
	}
	public String getNotifytile() {
		return notifytile;
	}
	public void setNotifytile(String notifytile) {
		this.notifytile = notifytile;
	}
	public String getNotifycontent() {
		return notifycontent;
	}
	public void setNotifycontent(String notifycontent) {
		this.notifycontent = notifycontent;
	}
}
