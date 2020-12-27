package com.aikang.utils;

public class WorkStateUtil {
	//男
	public static String WST_SEX_M = "sexm";
	//女
	public static String WST_SEX_W = "sexw";
	
	//轮种
	public static int WST_PLAN_LZ = 0;
	//点钟
	public static int WST_PLAN_DZ = 1;
	//点排
	public static int WST_PLAN_DP = 2;
	//不排钟
	public static int WST_PLAN_SZ = 3;
		
	//停牌
	public static int WST_TP_MIN = 100000;
	public static int WST_TP_MAX = 100099;
	
	//空闲
	public static int WST_KX_MIN = 0;
	public static int WST_KX_MAX = 199;
	
	//预约
	public static int WST_YY_MIN = 200;
	public static int WST_YY_MAX = 299;
	
	//收到
	public static int WST_SD_MIN = 300;
	public static int WST_SD_MAX = 399;

	//试钟
	public static int WST_SZ_MIN = 400;
	public static int WST_SZ_MAX = 499;
	
	//服务
	public static int WST_FW_MIN = 500;
	public static int WST_FW_MAX = 599;
	
	
	//停牌
	public static boolean IF_TP(int state){
		if(state >= WST_TP_MIN && state < WST_TP_MAX){
			return true;
		}
		return false;
	}
	
	//空闲
	public static boolean IF_KX(int state){
		if(state >= WST_KX_MIN && state < WST_KX_MAX){
			return true;
		}
		return false;
	}
	
	//预约
	public static boolean IF_YY(int state){
		if(state >= WST_YY_MIN && state < WST_YY_MAX){
			return true;
		}
		return false;
	}
		
	//收到
	public static boolean IF_SD(int state){
		if(state >= WST_SD_MIN && state < WST_SD_MAX){
			return true;
		}
		return false;
	}
	
	//试钟
	public static boolean IF_SZ(int state){
		if(state >= WST_SZ_MIN && state < WST_SZ_MAX){
			return true;
		}
		return false;
	}
	
	//服务
	public static boolean IF_FW(int state){
		if(state >= WST_FW_MIN && state < WST_FW_MAX){
			return true;
		}
		return false;
	}
}
