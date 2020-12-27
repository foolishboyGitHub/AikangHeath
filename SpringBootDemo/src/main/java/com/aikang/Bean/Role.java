package com.aikang.Bean;

import java.util.List;

public class Role {

	private Integer id;

    private String name;

    private String nameZh;
    
    private List<PerUrl> purls;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getNameZh() {
        return nameZh;
    }

    public void setNameZh(String nameZh) {
        this.nameZh = nameZh;
    }

	public List<PerUrl> getPurls() {
		return purls;
	}

	public void setPurls(List<PerUrl> purls) {
		this.purls = purls;
	}
}
