package com.aikang.Bean;

import java.util.List;

public class PlanWork {
	
	private Long id;
	
	private String company;
	
	private Long hid;
	
	/**
	 * 系统每动一次牌，就记一次数  第一动  第二动 。。。。。。
	 * 如果这次动的是自己 就记在这里 sdx  这就是牌序
	 */
	private Integer sdx;
	
	/**
	 * 上一次的牌序，取消项目时候 回牌使用
	 */
	private Integer sdxlast;
	
	/**
	 * 动牌时候的日钟单号
	 */
	private String DayidOfsdxMov;
	
	/**
	 * 没有过牌的提成累积
	 */
	private Double nmsSum;
	
	/**
	 * 没有过牌的提成累积 动牌之前的 用于取消项目时使用
	 */
	private Double nmsSumLast;
	
	
	/**
	 * 100000-100099 = 停牌状态 1过轮自动停牌 2技师申请停牌 等等
	 * 0-199= 空闲状态
	 * 200-299= 预约状态
	 * 300-399= 收到呼叫状态 300=被呼叫 未应答  301=已收到  302=正赶往   303=来的路上
	 * 400-499= 服务试钟状态
	 * 500-599= 正式服务状态
	 * 
	 * */
	private Integer state;
	
	private Integer round;
	
	private String name;
	
	private String sex;
	
	private String servicecode;
	
	private Integer yystate;
	
	private Integer level; // 级别  初级 中级 高级 特级  专家
	
	//最早预约的时间
	private String earliestyytime;
	
	private List<WrokingItem> myitems;
	
	private List<PlanExcItem> myexcs;
	
	private List<WorkExtra> mywkexts;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getHid() {
		return hid;
	}

	public void setHid(Long hid) {
		this.hid = hid;
	}

	public Integer getSdx() {
		return sdx;
	}

	public void setSdx(Integer sdx) {
		this.sdx = sdx;
	}

	public Integer getState() {
		return state;
	}

	public void setState(Integer state) {
		this.state = state;
	}

	public Integer getRound() {
		return round;
	}

	public void setRound(Integer round) {
		this.round = round;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getServicecode() {
		return servicecode;
	}

	public void setServicecode(String servicecode) {
		this.servicecode = servicecode;
	}

	public Integer getYystate() {
		return yystate;
	}

	public void setYystate(Integer yystate) {
		this.yystate = yystate;
	}

	public Integer getSdxlast() {
		return sdxlast;
	}

	public void setSdxlast(Integer sdxlast) {
		this.sdxlast = sdxlast;
	}

	public String getDayidOfsdxMov() {
		return DayidOfsdxMov;
	}

	public void setDayidOfsdxMov(String dayidOfsdxMov) {
		DayidOfsdxMov = dayidOfsdxMov;
	}

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

	public String getEarliestyytime() {
		return earliestyytime;
	}

	public void setEarliestyytime(String earliestyytime) {
		this.earliestyytime = earliestyytime;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public List<WrokingItem> getMyitems() {
		return myitems;
	}

	public void setMyitems(List<WrokingItem> myitems) {
		this.myitems = myitems;
	}

	public List<PlanExcItem> getMyexcs() {
		return myexcs;
	}

	public void setMyexcs(List<PlanExcItem> myexcs) {
		this.myexcs = myexcs;
	}

	public Double getNmsSum() {
		return nmsSum;
	}

	public void setNmsSum(Double nmsSum) {
		this.nmsSum = nmsSum;
	}

	public Double getNmsSumLast() {
		return nmsSumLast;
	}

	public void setNmsSumLast(Double nmsSumLast) {
		this.nmsSumLast = nmsSumLast;
	}

	public List<WorkExtra> getMywkexts() {
		return mywkexts;
	}

	public void setMywkexts(List<WorkExtra> mywkexts) {
		this.mywkexts = mywkexts;
	}

	
}
