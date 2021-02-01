package com.aikang.Bean;

public class CompanyPicture {

	private Long id;
	
	private String seriid;
	
	private String company;
	
	private String filename;
	
	private String filenamemin;
	
	private String createdate;
	
	private String remark;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSeriid() {
		return seriid;
	}

	public void setSeriid(String seriid) {
		this.seriid = seriid;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}


	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getCreatedate() {
		return createdate;
	}

	public void setCreatedate(String createdate) {
		this.createdate = createdate;
	}

	public String getFilenamemin() {
		return filenamemin;
	}

	public void setFilenamemin(String filenamemin) {
		this.filenamemin = filenamemin;
	}
}
