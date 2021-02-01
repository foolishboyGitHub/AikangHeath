package com.aikang.Bean;

public class WaiterItem {
	private long id;
	private String  company; //公司
	private Integer ordertype; //下单类型 0-99=商家系统开单 100-199=顾客自主扫码下单
	private Integer gukenum; //顾客人数
	private Integer gukeidx; //顾客序号
	private String  billnumber; //单号
	private String serinumber; //唯一标示号
	private String dayid; //当日单号
	private Integer daynum; //当日数字日期
	private Integer wtype; //排钟方式
	/**
	 * 顾客选钟方式 0=安排 1=选男 2=选女 3=点钟 
	 */
	private Integer wtypek; 
	private Integer wlev; //技师等级
	private Long rmid; //房间ID
	private String  rmname;//房间名称
	private Long sid;   //服务项目
	private String sname;  //服务项目名称
	private double salarylz;  //服务项目提成 这里只是轮种的  只是作为系统安排技师时参考 不用去频繁读取数据库。
	private Integer stimelong;   //项目时长 分钟
	private Long hid;   //服务人员ID
	private String hcode;	//服务人员排钟号
	private String hname;	//服务人员姓名
	private Integer movsdx;   //动牌索引  开单时候预动牌  如果技师在规定时间内上钟，则按照这个索引动牌， 否则 按照新的更靠后的索引动牌
	/**
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
	
	/**
	 * 预计服务结束时间
	 */
	private String finishtimeyj;
		
	//备注
	private String remark;
	//客人ID
	private Long kid;
	//客人姓名
	private String kname;
	//会员ID
	private Long hyid;
	//会员姓名
	private String hyname;
	//会员序列ID
	private String hyseriid;
	//会员余额
	private Double hyrmoney;
	
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
	//本单费用 原始
	private Double itembillo;
	//本单费用 结算的
	private Double itembill;
	//结算类型名称    这里是管理人员操作
	private String pricetype;
	
	//预付服务钟数 次数  这里是管理人员操作预付
	private Double clocknumyf;
	//本单预付费用         预付
	private Double itembillyf;
	//预付类型名称    这里是管理人员操作预付
	private String pricetypeyf;
	
	//预约服务钟数 次数  这里是客人预约
	private Double clocknumyy;
	
	/**
	 * 是否最后一个项目 1=是 0=不是
	 */
	private Integer islast;
	/**
	 * 以下数据需要连表读出
	 */
	private Integer leftworknum;  //同单 同技师剩余完成数量
	
	private Integer settimelong;   //时长 分钟
	
	private Integer setovertime;   //超时长度
	
	private Double setprice;   //设置单价 
	
	private Integer setpriveType;   ////价格类型 0=按照时间  1=按照次数
	
	private Double setclocknumzs;   //折算钟数 小时
	
	private Integer setneedpoint;   //所需积分
	
	private Integer setisdiscount;   //是否参与打折
	
	private Integer sisspecialwork;  //是否专人特殊项目 比如采耳 拔罐
	
	private Double dSalaryLz;   //默认提成 轮种
	
	private Double dSalaryDz;   //默认提成 点钟
	
	private Double dSalaryDp;   //默认提成 点排
	
	private Double dSalarySz;   //默认提成 散钟
	
	private double  defsalarylz;
	
	private double  defsalarydz;
	
	private double  defsalarydp;
	
	private double  defsalarysz;
	
	private Integer dongpaitype;
	
	private Integer dianzhongdongpaitype;
	
	public Long getId() {
		return id;
	}
	public void setId(long id) {
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
	public String getBillnumber() {
		return billnumber;
	}
	public void setBillnumber(String billnumber) {
		this.billnumber = billnumber;
	}
	public Integer getGukeidx() {
		return gukeidx;
	}
	public void setGukeidx(Integer gukeidx) {
		this.gukeidx = gukeidx;
	}
	public Integer getGukenum() {
		return gukenum;
	}
	public void setGukenum(Integer gukenum) {
		this.gukenum = gukenum;
	}
	public Integer getOrdertype() {
		return ordertype;
	}
	public void setOrdertype(Integer ordertype) {
		this.ordertype = ordertype;
	}
	public Integer getWlev() {
		return wlev;
	}
	public void setWlev(Integer wlev) {
		this.wlev = wlev;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public double getSalarylz() {
		return salarylz;
	}
	public void setSalarylz(double salarylz) {
		this.salarylz = salarylz;
	}
	public Integer getStimelong() {
		return stimelong;
	}
	public void setStimelong(Integer stimelong) {
		this.stimelong = stimelong;
	}
	public String getSerinumber() {
		return serinumber;
	}
	public void setSerinumber(String serinumber) {
		this.serinumber = serinumber;
	}
	public String getFinishtimeyj() {
		return finishtimeyj;
	}
	public void setFinishtimeyj(String finishtimeyj) {
		this.finishtimeyj = finishtimeyj;
	}
	public Integer getIslast() {
		return islast;
	}
	public void setIslast(Integer islast) {
		this.islast = islast;
	}
	public Double getdSalaryLz() {
		return dSalaryLz;
	}
	public void setdSalaryLz(Double dSalaryLz) {
		this.dSalaryLz = dSalaryLz;
	}
	public Double getdSalaryDz() {
		return dSalaryDz;
	}
	public void setdSalaryDz(Double dSalaryDz) {
		this.dSalaryDz = dSalaryDz;
	}
	public Double getdSalaryDp() {
		return dSalaryDp;
	}
	public void setdSalaryDp(Double dSalaryDp) {
		this.dSalaryDp = dSalaryDp;
	}
	public Double getdSalarySz() {
		return dSalarySz;
	}
	public void setdSalarySz(Double dSalarySz) {
		this.dSalarySz = dSalarySz;
	}
	public double getDefsalarylz() {
		return defsalarylz;
	}
	public void setDefsalarylz(double defsalarylz) {
		this.defsalarylz = defsalarylz;
	}
	public double getDefsalarydz() {
		return defsalarydz;
	}
	public void setDefsalarydz(double defsalarydz) {
		this.defsalarydz = defsalarydz;
	}
	public double getDefsalarydp() {
		return defsalarydp;
	}
	public void setDefsalarydp(double defsalarydp) {
		this.defsalarydp = defsalarydp;
	}
	public double getDefsalarysz() {
		return defsalarysz;
	}
	public void setDefsalarysz(double defsalarysz) {
		this.defsalarysz = defsalarysz;
	}
	public Integer getSettimelong() {
		return settimelong;
	}
	public void setSettimelong(Integer settimelong) {
		this.settimelong = settimelong;
	}
	public Double getSetclocknumzs() {
		return setclocknumzs;
	}
	public void setSetclocknumzs(Double setclocknumzs) {
		this.setclocknumzs = setclocknumzs;
	}
	public Integer getSetneedpoint() {
		return setneedpoint;
	}
	public void setSetneedpoint(Integer setneedpoint) {
		this.setneedpoint = setneedpoint;
	}
	public Integer getSetisdiscount() {
		return setisdiscount;
	}
	public void setSetisdiscount(Integer setisdiscount) {
		this.setisdiscount = setisdiscount;
	}
	public Integer getLeftworknum() {
		return leftworknum;
	}
	public void setLeftworknum(Integer leftworknum) {
		this.leftworknum = leftworknum;
	}
	public Integer getDongpaitype() {
		return dongpaitype;
	}
	public void setDongpaitype(Integer dongpaitype) {
		this.dongpaitype = dongpaitype;
	}
	public Integer getDianzhongdongpaitype() {
		return dianzhongdongpaitype;
	}
	public void setDianzhongdongpaitype(Integer dianzhongdongpaitype) {
		this.dianzhongdongpaitype = dianzhongdongpaitype;
	}
	public Integer getSisspecialwork() {
		return sisspecialwork;
	}
	public void setSisspecialwork(Integer sisspecialwork) {
		this.sisspecialwork = sisspecialwork;
	}
	public Integer getWtypek() {
		return wtypek;
	}
	public void setWtypek(Integer wtypek) {
		this.wtypek = wtypek;
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
	public Double getItembillo() {
		return itembillo;
	}
	public void setItembillo(Double itembillo) {
		this.itembillo = itembillo;
	}
	public Double getSetprice() {
		return setprice;
	}
	public void setSetprice(Double setprice) {
		this.setprice = setprice;
	}
	public Integer getSetovertime() {
		return setovertime;
	}
	public void setSetovertime(Integer setovertime) {
		this.setovertime = setovertime;
	}
	public Integer getSetpriveType() {
		return setpriveType;
	}
	public void setSetpriveType(Integer setpriveType) {
		this.setpriveType = setpriveType;
	}
	public Double getHyrmoney() {
		return hyrmoney;
	}
	public void setHyrmoney(Double hyrmoney) {
		this.hyrmoney = hyrmoney;
	}
	

}
