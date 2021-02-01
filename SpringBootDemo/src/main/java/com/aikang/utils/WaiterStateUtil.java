package com.aikang.utils;

public class WaiterStateUtil {

	//预约
	public static int SST_YY_WAIT = 10;
	public static int SST_YY_RECV = 11;
	
	//无服务人员
	public static int SST_WF_MIN = 100;
	public static int SST_WF_MAX = 199;
	
	//已呼叫相应服务人员
	public static int SST_HJ_MIN = 200;
	public static int SST_HJ_MAX = 299;
	
	//收到服务人员确认
	public static int SST_SD_MIN = 300;
	//已经通过开始验证码 同批的钟单在服务 这个在等  证明已经到房间
	public static int SST_SD_YZM = 310;
	public static int SST_SD_MAX = 399;

	//试钟
	public static int SST_SZ_MIN = 400;
	public static int SST_SZ_MAX = 499;
	
	//服务
	public static int SST_FW_MIN = 500;
	public static int SST_FW_MAX = 599;
	
	//暂停
	public static int SST_ZT_MIN = 600;
	public static int SST_ZT_MAX = 699;
	
	
	//服务 结束
	public static int SST_FW_FINISH = 2000;
	public static int SST_FW_FINISH_XT = 2001;
}
