package com.aikang.Bean;

public class TeleVerify {

	private Long id;
	
	private Long uid;
	/**
	 * 类型
	 * "BIND" = 绑定手机验证
	 * "LOGIN" = 登录验证
	 */
	private String type;
	
	private String telenumber;
	
	private String code;
	
	private String sendtime;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUid() {
		return uid;
	}

	public void setUid(Long uid) {
		this.uid = uid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTelenumber() {
		return telenumber;
	}

	public void setTelenumber(String telenumber) {
		this.telenumber = telenumber;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getSendtime() {
		return sendtime;
	}

	public void setSendtime(String sendtime) {
		this.sendtime = sendtime;
	}
	
}
