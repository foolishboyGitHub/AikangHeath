package com.aikang.Bean;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.aikang.Bean.Role;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;


public class User implements UserDetails {
	private Long id;
	
	private String company;
	
	private String memid;
	
	private String socialnumber;
	
    private String name;
    
    private String sex;
    
    private Integer level;
    
    private String servicecode;

    private String phone;

    private String telephone;

    private String address;

    private Boolean enabled;

    private String username;

    private String password;
    
    private String passwordtest;

    private String userface;

    private String remark;
    
    private Long cloudid;
    
    
    //登录相关的记录
    /**
     * 如果是商家登录 则临时记录登录用的公司名;
     * 如果是顾客登录则记录 顾客所在门店公司名;
     * */
     
    private String companytest; 
    
    /**
     * 客户端类型
     * manager_wnd = 商家后台;
     * wxweb = 微信顾客登录;
     * */
     
    private String wndtype;
    
    
    private String wxsessioncode;
    
    private String wxopenid;
    
    private String wxsessiontempkey;
    
    /**
     * 手机是否验证
     */
    private Integer isteled;
    
    private List<Role> roles;

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone == null ? null : telephone.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
    
 
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled == null ? false : enabled;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>(roles.size());
        for (Role role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }
        return authorities;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getUserface() {
        return userface;
    }

    public void setUserface(String userface) {
        this.userface = userface == null ? null : userface.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

	public String getMemid() {
		return memid;
	}

	public void setMemid(String memid) {
		this.memid = memid;
	}

	public String getSocialnumber() {
		return socialnumber;
	}

	public void setSocialnumber(String socialnumber) {
		this.socialnumber = socialnumber;
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

	public Long getCloudid() {
		return cloudid;
	}

	public void setCloudid(Long cloudid) {
		this.cloudid = cloudid;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getPasswordtest() {
		return passwordtest;
	}

	public void setPasswordtest(String passwordtest) {
		this.passwordtest = passwordtest;
	}

	public String getCompanytest() {
		return companytest;
	}

	public void setCompanytest(String companytest) {
		this.companytest = companytest;
	}

	public String getWxsessioncode() {
		return wxsessioncode;
	}

	public void setWxsessioncode(String wxsessioncode) {
		this.wxsessioncode = wxsessioncode;
	}

	public String getWxopenid() {
		return wxopenid;
	}

	public void setWxopenid(String wxopenid) {
		this.wxopenid = wxopenid;
	}

	public String getWxsessiontempkey() {
		return wxsessiontempkey;
	}

	public void setWxsessiontempkey(String wxsessiontempkey) {
		this.wxsessiontempkey = wxsessiontempkey;
	}

	public String getWndtype() {
		return wndtype;
	}

	public void setWndtype(String wndtype) {
		this.wndtype = wndtype;
	}

	public Integer getIsteled() {
		return isteled;
	}

	public void setIsteled(Integer isteled) {
		this.isteled = isteled;
	}

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}


}
