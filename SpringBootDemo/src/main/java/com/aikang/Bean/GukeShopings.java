package com.aikang.Bean;

//顾客选单 还未最终下单阶段
public class GukeShopings {

	private long id;
	private Integer ordertype; //下单类型 0-99=商家系统开单 100-199=顾客自主扫码下单
	private Integer gukenum; //顾客人数
	private Integer gukeidx; //顾客序号
	private String billnumber; //单号
	private String serinumber; //唯一标示号
	private Integer daynumber; //当日数字日期
	private Integer wtype; //排钟方式
	private Integer wsex; //男女点排
	private Integer wlev; //等级点排
	private String  company;//公司名称
	private Long rmid; //房间ID
	private String  rmname;//房间名称
	private Long sid;   //服务项目
	private String sname;  //服务项目名称
	private Double clocknumyy;//预约服务钟数 次数  
	
	/**
	 * 本单最终费用
	 */
	private Double itembillyf;
	
	/**
	 * //本单原始费用
	 */
	private Double itembillys;
	/**
	 * 本单折扣
	 */
	private Double itembillzk;
	/**
	 * 本单减免
	 */
	private Double itembilljm;	
	/**
	 * 本单点券抵扣
	 */
	private Double itembilldk;
	
	private Long hid;   //服务人员ID
	private String hcode;	//服务人员排钟号
	private String hname;	//服务人员姓名
	
	/*
	 * //服务状态 
	 * 0 = 正在下单
	 * 1 = 下单完成
	 * 2 = 付款完成
	 * 3 = 服务和付款都完成以后
	 * */
	private Integer workstate;
	
	/*
	 * //等待状态 
	 * 0 = 无需等待
	 * 1 = 技师全忙
	 * 2 = 无匹配等级技师
	 * 3 = 无匹配等级男技师
	 * 4 = 无匹配等级女技师
	 * 5 = 还未到服务时间
	 * */
	private Integer waitestate;
	
	//下单时间
	private String maketime;
	// 预约时间
	private String waittime;
	//服务开始时间
	private String worktime;
	//服务结束时间
	private String finishtime;
	//备注
	private String remark;
	//客人ID
	private Long kid;
	//客人姓名
	private String kname;
	//支付状态 0 未支付  1现金支付完成 会员支付完成
	private Integer paystate;
	//支付金额
	private Double paynum;
	//支付单号
	private Long payid;
	//服务验证码  由客人展示给技师
	private String checkcode;
	
	//会员ID
	private Long memid;
	//会员姓名
	private String memname;
	//会员姓名
	private String memcode;
	//会员余额
	private Double hyrmoney;
	//结算时间
	private String checktime;
	
	private String headpic;
		
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public String getBillnumber() {
		return billnumber;
	}
	public void setBillnumber(String billnumber) {
		this.billnumber = billnumber;
	}
	public Integer getDaynumber() {
		return daynumber;
	}
	public void setDaynumber(Integer daynumber) {
		this.daynumber = daynumber;
	}
	public Integer getWtype() {
		return wtype;
	}
	public void setWtype(Integer wtype) {
		this.wtype = wtype;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public Long getRmid() {
		return rmid;
	}
	public void setRmid(Long rmid) {
		this.rmid = rmid;
	}
	public String getRmname() {
		return rmname;
	}
	public void setRmname(String rmname) {
		this.rmname = rmname;
	}
	public Long getSid() {
		return sid;
	}
	public void setSid(Long sid) {
		this.sid = sid;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public Double getClocknumyy() {
		return clocknumyy;
	}
	public void setClocknumyy(Double clocknumyy) {
		this.clocknumyy = clocknumyy;
	}
	public Long getHid() {
		return hid;
	}
	public void setHid(Long hid) {
		this.hid = hid;
	}
	public String getHcode() {
		return hcode;
	}
	public void setHcode(String hcode) {
		this.hcode = hcode;
	}
	public String getHname() {
		return hname;
	}
	public void setHname(String hname) {
		this.hname = hname;
	}
	public String getMaketime() {
		return maketime;
	}
	public void setMaketime(String maketime) {
		this.maketime = maketime;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Long getKid() {
		return kid;
	}
	public void setKid(Long kid) {
		this.kid = kid;
	}
	public String getWaittime() {
		return waittime;
	}
	public void setWaittime(String waittime) {
		this.waittime = waittime;
	}
	public Integer getWorkstate() {
		return workstate;
	}
	public void setWorkstate(Integer workstate) {
		this.workstate = workstate;
	}
	public String getWorktime() {
		return worktime;
	}
	public void setWorktime(String worktime) {
		this.worktime = worktime;
	}
	public String getFinishtime() {
		return finishtime;
	}
	public void setFinishtime(String finishtime) {
		this.finishtime = finishtime;
	}
	public String getKname() {
		return kname;
	}
	public void setKname(String kname) {
		this.kname = kname;
	}
	public Integer getPaystate() {
		return paystate;
	}
	public void setPaystate(Integer paystate) {
		this.paystate = paystate;
	}
	public Double getPaynum() {
		return paynum;
	}
	public void setPaynum(Double paynum) {
		this.paynum = paynum;
	}
	public Long getPayid() {
		return payid;
	}
	public void setPayid(Long payid) {
		this.payid = payid;
	}
	public String getCheckcode() {
		return checkcode;
	}
	public void setCheckcode(String checkcode) {
		this.checkcode = checkcode;
	}
	public Long getMemid() {
		return memid;
	}
	public void setMemid(Long memid) {
		this.memid = memid;
	}
	public String getMemname() {
		return memname;
	}
	public void setMemname(String memname) {
		this.memname = memname;
	}
	public String getMemcode() {
		return memcode;
	}
	public void setMemcode(String memcode) {
		this.memcode = memcode;
	}
	public String getChecktime() {
		return checktime;
	}
	public void setChecktime(String checktime) {
		this.checktime = checktime;
	}
	public Integer getWsex() {
		return wsex;
	}
	public void setWsex(Integer wsex) {
		this.wsex = wsex;
	}
	public Integer getWlev() {
		return wlev;
	}
	public void setWlev(Integer wlev) {
		this.wlev = wlev;
	}
	public Integer getWaitestate() {
		return waitestate;
	}
	public void setWaitestate(Integer waitestate) {
		this.waitestate = waitestate;
	}
	public Integer getOrdertype() {
		return ordertype;
	}
	public void setOrdertype(Integer ordertype) {
		this.ordertype = ordertype;
	}
	public String getSerinumber() {
		return serinumber;
	}
	public void setSerinumber(String serinumber) {
		this.serinumber = serinumber;
	}
	public Double getItembillys() {
		return itembillys;
	}
	public void setItembillys(Double itembillys) {
		this.itembillys = itembillys;
	}
	public Double getItembillzk() {
		return itembillzk;
	}
	public void setItembillzk(Double itembillzk) {
		this.itembillzk = itembillzk;
	}
	public Double getItembilljm() {
		return itembilljm;
	}
	public void setItembilljm(Double itembilljm) {
		this.itembilljm = itembilljm;
	}
	public Double getItembilldk() {
		return itembilldk;
	}
	public void setItembilldk(Double itembilldk) {
		this.itembilldk = itembilldk;
	}
	public Double getItembillyf() {
		return itembillyf;
	}
	public void setItembillyf(Double itembillyf) {
		this.itembillyf = itembillyf;
	}
	public String getHeadpic() {
		return headpic;
	}
	public void setHeadpic(String headpic) {
		this.headpic = headpic;
	}
	public Double getHyrmoney() {
		return hyrmoney;
	}
	public void setHyrmoney(Double hyrmoney) {
		this.hyrmoney = hyrmoney;
	}

}
