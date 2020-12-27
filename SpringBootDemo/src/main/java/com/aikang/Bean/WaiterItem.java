package com.aikang.Bean;

public class WaiterItem {
	private Integer id;
	private Integer dayid; //当日单号
	private Integer daynum; //当日数字日期
	private Integer wtype; //排钟方式
	private Integer rmid; //房间ID
	private String  rmname;//房间名称
	private Integer sid;   //服务项目
	private String sname;  //服务项目名称
	private Integer hid;   //服务人员ID
	private String hcode;	//服务人员排钟号
	private String hname;	//服务人员姓名
	private Integer movsdx;   //动牌索引  开单时候预动牌  如果技师在规定时间内上钟，则按照这个索引动牌， 否则 按照新的更靠后的索引动牌
	/*
	 * //服务状态 
	 * 0 = 刚开单 
	 * 10 = 预约
	 * 11 = 服务人员已确认预约信息
	 * 100 = 无可用服务人员 101 匹配1次 102 匹配2次 等等
	 * 200 = 已呼叫服务人员 201 呼叫1次 202 呼叫2次 等等 
	 * 300 = 服务人员已确认  
	 * 400 = 服务人员开始实验服务 
	 * 500 = 进入确定服务状态
	 * 600 = 暂停服务
	 * 2000 = 本服务已结束
	 * 
	 * */
	private Integer workstate;
	//更换次数  最多3次  6次等
	private Integer changenum;
	//更换人员 排钟号列表 |线隔开 如 12|22|20|6等 
	private String changelist;
	//开单时间
	private String maketime;
	//等待开始时间  预约时间
	private String waittime;
	//服务开始时间
	private String worktime;
	//暂停开始时间
	private String breakstart;
	//暂停时长 秒
	private Integer breaklong;
	
	//暂停  服务 迟到等时时长 秒
	private Integer timeOflong;
	
	//服务结束时间
	private String finishtime;
	//备注
	private String remark;
	//客人ID
	private Long kid;
	//客人姓名
	private String kname;
	//支付状态 0 未支付  大于零对应系统设置各支付类型
	private Integer paystate;
	//支付金额  这里用于客人预先支付
	private Integer paynum;
	//支付单号
	private Long payid;
	//服务验证码  由客人展示给技师
	private String checkcode;
	//服务钟数 次数
	private Double clocknum;
	//本单费用
	private Double itembill;
	//结算类型名称    这里是管理人员操作
	private String pricetype;
	
	//预付服务钟数 次数  这里是管理人员操作预付
	private Double clocknumyf;
	//本单预付费用         这里是管理人员操作预付
	private Double itembillyf;
	//预付类型名称    这里是管理人员操作预付
	private String pricetypeyf;
	
	//预约服务钟数 次数  这里是管理人员操作预付
	private Double clocknumyy;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getDayid() {
		return dayid;
	}
	public void setDayid(Integer dayid) {
		this.dayid = dayid;
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
	public Integer getChangenum() {
		return changenum;
	}
	public void setChangenum(Integer changenum) {
		this.changenum = changenum;
	}
	public String getChangelist() {
		return changelist;
	}
	public void setChangelist(String changelist) {
		this.changelist = changelist;
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
	public Integer getPaynum() {
		return paynum;
	}
	public void setPaynum(Integer paynum) {
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
	public Integer getBreaklong() {
		return breaklong;
	}
	public void setBreaklong(Integer breaklong) {
		this.breaklong = breaklong;
	}
	public String getBreakstart() {
		return breakstart;
	}
	public void setBreakstart(String breakstart) {
		this.breakstart = breakstart;
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
	public Integer getWtype() {
		return wtype;
	}
	public void setWtype(Integer wtype) {
		this.wtype = wtype;
	}
	public String getMaketime() {
		return maketime;
	}
	public void setMaketime(String maketime) {
		this.maketime = maketime;
	}
	public Integer getTimeOflong() {
		return timeOflong;
	}
	public void setTimeOflong(Integer timeOflong) {
		this.timeOflong = timeOflong;
	}
	public Double getClocknum() {
		return clocknum;
	}
	public void setClocknum(Double clocknum) {
		this.clocknum = clocknum;
	}
	public Double getItembill() {
		return itembill;
	}
	public void setItembill(Double itembill) {
		this.itembill = itembill;
	}
	public Double getClocknumyf() {
		return clocknumyf;
	}
	public void setClocknumyf(Double clocknumyf) {
		this.clocknumyf = clocknumyf;
	}
	public Double getItembillyf() {
		return itembillyf;
	}
	public void setItembillyf(Double itembillyf) {
		this.itembillyf = itembillyf;
	}
	public String getPricetypeyf() {
		return pricetypeyf;
	}
	public void setPricetypeyf(String pricetypeyf) {
		this.pricetypeyf = pricetypeyf;
	}
	public String getPricetype() {
		return pricetype;
	}
	public void setPricetype(String pricetype) {
		this.pricetype = pricetype;
	}
	public Integer getDaynum() {
		return daynum;
	}
	public void setDaynum(Integer daynum) {
		this.daynum = daynum;
	}
	public Double getClocknumyy() {
		return clocknumyy;
	}
	public void setClocknumyy(Double clocknumyy) {
		this.clocknumyy = clocknumyy;
	}
	public Integer getMovsdx() {
		return movsdx;
	}
	public void setMovsdx(Integer movsdx) {
		this.movsdx = movsdx;
	}

}
