package com.aikang.Bean;

public class GukeBills {

	private long id;
	private Integer gukenum; //顾客人数
	private Integer gukeidx; //顾客序号
	private Integer billnumber; //单号
	private Integer daynumber; //当日数字日期
	private Integer wtype; //排钟方式
	private String  company;//公司名称
	private Integer rmid; //房间ID
	private String  rmname;//房间名称
	private Integer sid;   //服务项目
	private String sname;  //服务项目名称
	private Double clocknumyy;//预约服务钟数 次数  
	private Integer hid;   //服务人员ID
	private String hcode;	//服务人员排钟号
	private String hname;	//服务人员姓名
	
	/*
	 * //服务状态 
	 * 0 = 下单完成
	 * 1 = 服务开始
	 * 2 = 服务完成
	 * */
	private Integer workstate;
	
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
	//结算时间
	private String checktime;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Integer getBillnumber() {
		return billnumber;
	}
	public void setBillnumber(Integer billnumber) {
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
	public Integer getRmid() {
		return rmid;
	}
	public void setRmid(Integer rmid) {
		this.rmid = rmid;
	}
	public String getRmname() {
		return rmname;
	}
	public void setRmname(String rmname) {
		this.rmname = rmname;
	}
	public Integer getSid() {
		return sid;
	}
	public void setSid(Integer sid) {
		this.sid = sid;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public Integer getHid() {
		return hid;
	}
	public void setHid(Integer hid) {
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
	public Integer getWorkstate() {
		return workstate;
	}
	public void setWorkstate(Integer workstate) {
		this.workstate = workstate;
	}
	public String getMaketime() {
		return maketime;
	}
	public void setMaketime(String maketime) {
		this.maketime = maketime;
	}
	public String getWaittime() {
		return waittime;
	}
	public void setWaittime(String waittime) {
		this.waittime = waittime;
	}
	public String getWorktime() {
		return worktime;
	}
	public void setWorktime(String worktime) {
		this.worktime = worktime;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public Double getClocknumyy() {
		return clocknumyy;
	}
	public void setClocknumyy(Double clocknumyy) {
		this.clocknumyy = clocknumyy;
	}
	public String getFinishtime() {
		return finishtime;
	}
	public void setFinishtime(String finishtime) {
		this.finishtime = finishtime;
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
}
