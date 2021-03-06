package com.aikang.Bean;

public class WBillItem {
	private Long id;
	private String  company; //公司
	/**
	 * 结账类型 0-99=商家系统开单结账
	 * 60=会员扣费
	 * 61=会员补差价
	 * 62=会员透支余额
	 * 
	 * 100-199=顾客自主扫码下单结账
	 */
	private Integer ordertype; //下单类型 0-99=商家系统开单 100-199=顾客自主扫码下单
	private Integer gukenum; //顾客人数
	private Integer gukeidx; //顾客序号
	private String  billnumber; //单号
	private String dayid; //单号
	private Integer daynum; //当日数字日期
	private Integer wtype; //排钟方式
	private Long rmid; //房间ID
	private String  rmname;//房间名称
	private Long sid;   //服务项目
	private String sname;  //服务项目名称
	private Long hid;   //服务人员ID
	private String hcode;	//服务人员排钟号
	private String hname;	//服务人员姓名
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
	//支付金额
	private Integer paynum;
	//支付单号
	private Long payid;
	//服务验证码  由客人展示给技师
	private String checkcode;
	
	private Integer enabled;
	//服务人员报酬提成
	private Double worksalary;
	//服务钟数 次数
	private Double clocknum;
	//折算钟数 小时
	private Double clocknumzs;
	//本单费用
	private Double itembill;
	//结算类型名称    这里是管理人员操作
	private String pricetype;
	//会员ID
	private Long hyid;
	//会员姓名
	private String hyname;
	//会员姓名
	private String hyseriid;
	//会员余额
	private Double hyrmoney;
	//收银员id
	private String checkid;   
	//收银员姓名
	private String checkname; 
	//收银员编号
	private String checkhcode;
	//结算时间
	private String checktime;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDayid() {
		return dayid;
	}
	public void setDayid(String dayid) {
		this.dayid = dayid;
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
	public Integer getEnabled() {
		return enabled;
	}
	public void setEnabled(Integer enabled) {
		this.enabled = enabled;
	}
	public Double getWorksalary() {
		return worksalary;
	}
	public void setWorksalary(Double worksalary) {
		this.worksalary = worksalary;
	}
	public Double getClocknum() {
		return clocknum;
	}
	public void setClocknum(Double clocknum) {
		this.clocknum = clocknum;
	}

	public String getCheckid() {
		return checkid;
	}
	public void setCheckid(String checkid) {
		this.checkid = checkid;
	}
	public String getCheckname() {
		return checkname;
	}
	public void setCheckname(String checkname) {
		this.checkname = checkname;
	}
	public Double getItembill() {
		return itembill;
	}
	public void setItembill(Double itembill) {
		this.itembill = itembill;
	}
	public Integer getDaynum() {
		return daynum;
	}
	public void setDaynum(Integer daynum) {
		this.daynum = daynum;
	}
	public String getPricetype() {
		return pricetype;
	}
	public void setPricetype(String pricetype) {
		this.pricetype = pricetype;
	}
	public Double getClocknumzs() {
		return clocknumzs;
	}
	public void setClocknumzs(Double clocknumzs) {
		this.clocknumzs = clocknumzs;
	}
	public String getChecktime() {
		return checktime;
	}
	public void setChecktime(String checktime) {
		this.checktime = checktime;
	}
	public String getCheckhcode() {
		return checkhcode;
	}
	public void setCheckhcode(String checkhcode) {
		this.checkhcode = checkhcode;
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
	public String getBillnumber() {
		return billnumber;
	}
	public void setBillnumber(String billnumber) {
		this.billnumber = billnumber;
	}
	public Long getHyid() {
		return hyid;
	}
	public void setHyid(Long hyid) {
		this.hyid = hyid;
	}
	public String getHyname() {
		return hyname;
	}
	public void setHyname(String hyname) {
		this.hyname = hyname;
	}
	public String getHyseriid() {
		return hyseriid;
	}
	public void setHyseriid(String hyseriid) {
		this.hyseriid = hyseriid;
	}
	public Double getHyrmoney() {
		return hyrmoney;
	}
	public void setHyrmoney(Double hyrmoney) {
		this.hyrmoney = hyrmoney;
	}

}
