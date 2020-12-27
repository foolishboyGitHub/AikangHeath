package com.aikang.Bean;

public class RoundsConfig {
	
	private Integer id;
	
	private Integer paizhong_type;
	
	private Integer dongpai_type;//动牌类型  0为上钟动牌  1为下钟动牌
	
	private Integer zhipai_type; //指派技师情况 0为系统指派 1为手动指派 
	
	private Integer dianzhong_budongpai;//点钟是否动牌 1为动牌 0为不动牌
	
	private Integer yuezhong_buguopai;//约钟状态是否过牌  0为过牌 1为不过牌
	
	private Integer fujia_shoudong;
	
	private Integer yuezhong_tiqian;//钟单人员多少分钟内不进入排钟名单
	
	private Integer yuezhong_buzhipai;//约钟状态系统不指派 分钟以上的项目
	
	private Integer jiaozhong_dengdai;//上钟动牌 开单后 指派人员 分钟 未开始服务 重新 注：如果上钟动牌，在此规定时间内开始服务，则动牌牌序按照开单顺序，否则牌序按照上钟开始时间顺序，也就是谁先上钟谁在前。
	
	private Integer jieshu_type;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getPaizhong_type() {
		return paizhong_type;
	}

	public void setPaizhong_type(Integer paizhong_type) {
		this.paizhong_type = paizhong_type;
	}

	public Integer getDongpai_type() {
		return dongpai_type;
	}

	public void setDongpai_type(Integer dongpai_type) {
		this.dongpai_type = dongpai_type;
	}

	public Integer getZhipai_type() {
		return zhipai_type;
	}

	public void setZhipai_type(Integer zhipai_type) {
		this.zhipai_type = zhipai_type;
	}

	public Integer getDianzhong_budongpai() {
		return dianzhong_budongpai;
	}

	public void setDianzhong_budongpai(Integer dianzhong_budongpai) {
		this.dianzhong_budongpai = dianzhong_budongpai;
	}

	public Integer getYuezhong_buguopai() {
		return yuezhong_buguopai;
	}

	public void setYuezhong_buguopai(Integer yuezhong_buguopai) {
		this.yuezhong_buguopai = yuezhong_buguopai;
	}

	public Integer getFujia_shoudong() {
		return fujia_shoudong;
	}

	public void setFujia_shoudong(Integer fujia_shoudong) {
		this.fujia_shoudong = fujia_shoudong;
	}

	public Integer getYuezhong_tiqian() {
		return yuezhong_tiqian;
	}

	public void setYuezhong_tiqian(Integer yuezhong_tiqian) {
		this.yuezhong_tiqian = yuezhong_tiqian;
	}

	public Integer getYuezhong_buzhipai() {
		return yuezhong_buzhipai;
	}

	public void setYuezhong_buzhipai(Integer yuezhong_buzhipai) {
		this.yuezhong_buzhipai = yuezhong_buzhipai;
	}

	public Integer getJiaozhong_dengdai() {
		return jiaozhong_dengdai;
	}

	public void setJiaozhong_dengdai(Integer jiaozhong_dengdai) {
		this.jiaozhong_dengdai = jiaozhong_dengdai;
	}

	public Integer getJieshu_type() {
		return jieshu_type;
	}

	public void setJieshu_type(Integer jieshu_type) {
		this.jieshu_type = jieshu_type;
	}
}
