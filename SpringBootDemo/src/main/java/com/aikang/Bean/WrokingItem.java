package com.aikang.Bean;

/**
 * 
 * @author Administrator
 * 本类是WaiterItem类抽取部分子属性的简易类  用于读取正在工作中的项
 */
public class WrokingItem {

	private long id;
	private String  company; //公司
	private Integer ordertype; //下单类型 0-99=商家系统开单 100-199=顾客自主扫码下单
	private Integer gukenum; //顾客人数
	private Integer gukeidx; //顾客序号
	private String  billnumber; //单号
	private String dayid; //当日单号
	private Long hid;   //服务人员ID
	//等待开始时间  预约时间
	private String waittime;
	
	//预定钟数
	private Double clocknumyf;
	//设置时长
	private Integer settmlong;
	//状态
	private Integer workstate; //当日单号
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
	public Integer getOrdertype() {
		return ordertype;
	}
	public void setOrdertype(Integer ordertype) {
		this.ordertype = ordertype;
	}
	public Integer getGukenum() {
		return gukenum;
	}
	public void setGukenum(Integer gukenum) {
		this.gukenum = gukenum;
	}
	public Integer getGukeidx() {
		return gukeidx;
	}
	public void setGukeidx(Integer gukeidx) {
		this.gukeidx = gukeidx;
	}
	public Long getHid() {
		return hid;
	}
	public void setHid(Long hid) {
		this.hid = hid;
	}
	public String getWaittime() {
		return waittime;
	}
	public void setWaittime(String waittime) {
		this.waittime = waittime;
	}
	public String getBillnumber() {
		return billnumber;
	}
	public void setBillnumber(String billnumber) {
		this.billnumber = billnumber;
	}
	public String getDayid() {
		return dayid;
	}
	public void setDayid(String dayid) {
		this.dayid = dayid;
	}
	public Integer getWorkstate() {
		return workstate;
	}
	public void setWorkstate(Integer workstate) {
		this.workstate = workstate;
	}
	public Double getClocknumyf() {
		return clocknumyf;
	}
	public void setClocknumyf(Double clocknumyf) {
		this.clocknumyf = clocknumyf;
	}
	public Integer getSettmlong() {
		return settmlong;
	}
	public void setSettmlong(Integer settmlong) {
		this.settmlong = settmlong;
	}
}
