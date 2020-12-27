package com.aikang.Bean;

public class CfgDaySet {

	private Integer id;
	/*
	 * 日单号
	 */
	private Integer dayidlast;
	
	/*
	 * 当日的 年月日 期数字   只有日单号重置时候才会算当天 年月日 转为数字  
	 */
	private Integer daynumlast;
	
	/*
	 * 日单号的最后记录时间
	 */
	private String  dayidlasttime;
	
	/*
	 * 每日营业开始时间  也是系统新的一天开始时间
	 */
	private String  newDayTime;
	
	/*
	 * 动牌重置最后时间
	 */
	private String  roundsetlasttime;
	
	/*
	 * 动牌数 系统新的一天开始重置为上牌员工总数   每动一次加1
	 */
	private Integer roundsdx;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getDayidlast() {
		return dayidlast;
	}

	public void setDayidlast(Integer dayidlast) {
		this.dayidlast = dayidlast;
	}

	public String getDayidlasttime() {
		return dayidlasttime;
	}

	public void setDayidlasttime(String dayidlasttime) {
		this.dayidlasttime = dayidlasttime;
	}

	public String getNewDayTime() {
		return newDayTime;
	}

	public void setNewDayTime(String newDayTime) {
		this.newDayTime = newDayTime;
	}

	public String getRoundsetlasttime() {
		return roundsetlasttime;
	}

	public void setRoundsetlasttime(String roundsetlasttime) {
		this.roundsetlasttime = roundsetlasttime;
	}

	public Integer getRoundsdx() {
		return roundsdx;
	}

	public void setRoundsdx(Integer roundsdx) {
		this.roundsdx = roundsdx;
	}

	public Integer getDaynumlast() {
		return daynumlast;
	}

	public void setDaynumlast(Integer daynumlast) {
		this.daynumlast = daynumlast;
	}
}
