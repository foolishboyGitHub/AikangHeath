package com.aikang.Bean;

public class GukePayTradeRecord {

	private long id;
	//客人ID
	private Long kid;
	//客人姓名
	private String kname;
	private Integer gukenum; //顾客人数
	private Integer gukeidx; //顾客序号
	private String billnumber; //交易时 系统内商户订单号
	private Integer daynumber; //当日数字日期
	
	private String appid; //小程序ID
	private String mch_id; //商户号
	private String device_info; //设备号
	private String nonce_str; //随机字符串
	private String sign; //签名
	private String sign_type; //签名类型
	private String err_code; //错误代码
	private String openid; //用户标识
	private String is_subscribe; //是否关注公众账号
	private String trade_type; //交易类型 JSAPI、NATIVE、APP
	private String bank_type; //付款银行
	private String total_fee; //订单金额
	private String settlement_total_fee; //应结订单金额
	private String fee_type; //货币种类
	private String cash_fee; //现金支付金额
	private String cash_fee_type; //现金支付货币类型
	private String coupon_fee; //总代金券金额
	private String coupon_count; //代金券使用数量
	private String coupon_type_$n; //代金券类型 
	private String coupon_id_$n; //代金券ID
	private String coupon_fee_$n; //单个代金券支付金额
	private String transaction_id; //微信支付订单号
	private String time_end; //支付完成时间
	private String record_time; //支付完成时间
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Integer getGukenum() {
		return gukenum;
	}
	public void setGukenum(Integer gukenum) {
		this.gukenum = gukenum;
	}
	public Integer getGukeidx() {
		return gukeidx;
	}
	public void setGukeidx(Integer gukeidx) {
		this.gukeidx = gukeidx;
	}
	public String getBillnumber() {
		return billnumber;
	}
	public void setBillnumber(String billnumber) {
		this.billnumber = billnumber;
	}
	public Integer getDaynumber() {
		return daynumber;
	}
	public void setDaynumber(Integer daynumber) {
		this.daynumber = daynumber;
	}
	public Long getKid() {
		return kid;
	}
	public void setKid(Long kid) {
		this.kid = kid;
	}
	public String getKname() {
		return kname;
	}
	public void setKname(String kname) {
		this.kname = kname;
	}
	public String getAppid() {
		return appid;
	}
	public void setAppid(String appid) {
		this.appid = appid;
	}
	public String getMch_id() {
		return mch_id;
	}
	public void setMch_id(String mch_id) {
		this.mch_id = mch_id;
	}
	public String getDevice_info() {
		return device_info;
	}
	public void setDevice_info(String device_info) {
		this.device_info = device_info;
	}
	public String getNonce_str() {
		return nonce_str;
	}
	public void setNonce_str(String nonce_str) {
		this.nonce_str = nonce_str;
	}
	public String getSign() {
		return sign;
	}
	public void setSign(String sign) {
		this.sign = sign;
	}
	public String getSign_type() {
		return sign_type;
	}
	public void setSign_type(String sign_type) {
		this.sign_type = sign_type;
	}
	public String getErr_code() {
		return err_code;
	}
	public void setErr_code(String err_code) {
		this.err_code = err_code;
	}
	public String getOpenid() {
		return openid;
	}
	public void setOpenid(String openid) {
		this.openid = openid;
	}
	public String getIs_subscribe() {
		return is_subscribe;
	}
	public void setIs_subscribe(String is_subscribe) {
		this.is_subscribe = is_subscribe;
	}
	public String getTrade_type() {
		return trade_type;
	}
	public void setTrade_type(String trade_type) {
		this.trade_type = trade_type;
	}
	public String getBank_type() {
		return bank_type;
	}
	public void setBank_type(String bank_type) {
		this.bank_type = bank_type;
	}
	public String getTotal_fee() {
		return total_fee;
	}
	public void setTotal_fee(String total_fee) {
		this.total_fee = total_fee;
	}
	public String getSettlement_total_fee() {
		return settlement_total_fee;
	}
	public void setSettlement_total_fee(String settlement_total_fee) {
		this.settlement_total_fee = settlement_total_fee;
	}
	public String getFee_type() {
		return fee_type;
	}
	public void setFee_type(String fee_type) {
		this.fee_type = fee_type;
	}
	public String getCash_fee() {
		return cash_fee;
	}
	public void setCash_fee(String cash_fee) {
		this.cash_fee = cash_fee;
	}
	public String getCash_fee_type() {
		return cash_fee_type;
	}
	public void setCash_fee_type(String cash_fee_type) {
		this.cash_fee_type = cash_fee_type;
	}
	public String getCoupon_fee() {
		return coupon_fee;
	}
	public void setCoupon_fee(String coupon_fee) {
		this.coupon_fee = coupon_fee;
	}
	public String getCoupon_count() {
		return coupon_count;
	}
	public void setCoupon_count(String coupon_count) {
		this.coupon_count = coupon_count;
	}
	public String getCoupon_type_$n() {
		return coupon_type_$n;
	}
	public void setCoupon_type_$n(String coupon_type_$n) {
		this.coupon_type_$n = coupon_type_$n;
	}
	public String getCoupon_id_$n() {
		return coupon_id_$n;
	}
	public void setCoupon_id_$n(String coupon_id_$n) {
		this.coupon_id_$n = coupon_id_$n;
	}
	public String getCoupon_fee_$n() {
		return coupon_fee_$n;
	}
	public void setCoupon_fee_$n(String coupon_fee_$n) {
		this.coupon_fee_$n = coupon_fee_$n;
	}
	public String getTransaction_id() {
		return transaction_id;
	}
	public void setTransaction_id(String transaction_id) {
		this.transaction_id = transaction_id;
	}
	public String getTime_end() {
		return time_end;
	}
	public void setTime_end(String time_end) {
		this.time_end = time_end;
	}
	public String getRecord_time() {
		return record_time;
	}
	public void setRecord_time(String record_time) {
		this.record_time = record_time;
	}
}
