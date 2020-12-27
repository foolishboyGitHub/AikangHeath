package com.aikang.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

import java.text.ParseException;


public class DateUtil {

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
}
