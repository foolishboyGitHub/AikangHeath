package com.aikang.Bean;

public class SpeTimesec {

	private Long id;
	
	/**
	 * 类型
	 * 0=加班时段
	 * 1=优惠时段
	 * 2=休息时段
	 * 3=其他
	 */
	private Integer type;
	/**
	 * 公司
	 */
	private String company;
	
	/**
	 * 比如 早加班  晚加班
	 */
	private String name;
	
	private String start;
	
	private String end;
	
	private String mark;
	
	private Integer reset;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStart() {
		return start;
	}

	public void setStart(String start) {
		this.start = start;
	}

	public String getEnd() {
		return end;
	}

	public void setEnd(String end) {
		this.end = end;
	}

	public String getMark() {
		return mark;
	}

	public void setMark(String mark) {
		this.mark = mark;
	}

	public Integer getReset() {
		return reset;
	}

	public void setReset(Integer reset) {
		this.reset = reset;
	}
}
