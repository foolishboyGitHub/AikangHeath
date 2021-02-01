package com.aikang.Bean;

import java.util.List;

public class CSCheckItemInfo {

	private Integer type;
	
	private Long  hid;
	
	private List<Long> wids;

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Long getHid() {
		return hid;
	}

	public void setHid(Long hid) {
		this.hid = hid;
	}

	public List<Long> getWids() {
		return wids;
	}

	public void setWids(List<Long> wids) {
		this.wids = wids;
	}


}
