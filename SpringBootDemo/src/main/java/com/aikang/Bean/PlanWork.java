package com.aikang.Bean;

public class PlanWork {
	
	private Integer id;
	
	private Integer hid;
	
	/*
	 * 系统每动一次牌，就记一次数  第一动  第二动 。。。。。。
	 * 如果这次动的是自己 就记在这里 sdx  这就是牌序
	 */
	private Integer sdx;
	
	/*
	 * 上一次的牌序，取消项目时候 回牌使用
	 */
	private Integer sdxlast;
	
	/*
	 * 动牌时候的日钟单号
	 */
	private Integer DayidOfsdxMov;
	
	
	/*
	 * 0-99 = 停牌状态 1过轮自动停牌 2技师申请停牌 等等
	 * 100-199= 空闲状态
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

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getHid() {
		return hid;
	}

	public void setHid(Integer hid) {
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

	public Integer getDayidOfsdxMov() {
		return DayidOfsdxMov;
	}

	public void setDayidOfsdxMov(Integer dayidOfsdxMov) {
		DayidOfsdxMov = dayidOfsdxMov;
	}
	
}
