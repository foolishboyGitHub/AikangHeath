package com.aikang.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.aikang.Bean.CfgDaySet;

import java.text.ParseException;


public class DateUtil {

	public static Date parseStrToDate(String str) throws java.text.ParseException {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		if(str.equals("") || str==null){
			str = "2000-01-01 00:00:00";
		}
		Date date = null;
	   	try {
		   	date = format.parse(str);
	  	} catch (ParseException e) {
		   	e.printStackTrace();
	   	}
	   	return date;
	}
	public static Date strToDate(String str) throws java.text.ParseException {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = null;
	   	try {
		   	date = format.parse(str);
	  	} catch (ParseException e) {
		   	e.printStackTrace();
	   	}
	   	return date;
	}
	public static String getFisrtDayOfMonth(Date date){

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String firstDayOfMonth = sdf.format(date.getTime());
	    
		return firstDayOfMonth;
	}
	
	public static Integer getDaynumByCds(CfgDaySet cds) throws ParseException{
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date = new Date();
    	String dstr = ft.format(date.getTime());
    	SimpleDateFormat ft1 = new SimpleDateFormat("yyyyMMddHHmmss");
    	String dstrnmm = ft1.format(date.getTime());
		int daynumlast = 0;//本日数字

		Date ndsdate = null;
    	if(cds!=null && cds.getNewDayTime()!=null){		
			String td = dstr.substring(0, 10) ;
			String tt = cds.getNewDayTime().substring(10);
			ndsdate =ft.parse(td+tt);	
    	}
    	if(cds.getDaynumlast() != null){
    		daynumlast = cds.getDaynumlast();
    	}
    	//判断是否新的营业的一天
    	if(ndsdate!=null){
    		if(ndsdate.getTime() < date.getTime()){
    			//新的一天了
    			String dstrnum = dstrnmm.substring(0,8);
    			daynumlast = Integer.valueOf(dstrnum);
    		}
    	}
    	return daynumlast;
	}
}
