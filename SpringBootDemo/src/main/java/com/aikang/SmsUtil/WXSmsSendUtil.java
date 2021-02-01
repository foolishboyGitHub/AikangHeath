package com.aikang.SmsUtil;

import com.github.qcloudsms.SmsMultiSender;
import com.github.qcloudsms.SmsMultiSenderResult;
import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import com.github.qcloudsms.httpclient.HTTPException;
import org.json.JSONException;
import java.io.IOException;

public class WXSmsSendUtil {

	// 短信应用 SDK AppID
	public static final int appid = 1400467050; // SDK AppID 以1400开头
	// 短信应用 SDK AppKey
	public static final String appkey = "70348a62a793ac8d885b15a17cbe2819";

	// 短信模板 ID，需要在短信应用中申请
	public static final int templateId_vericode = 828741; // NOTE: 这里的模板 ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
	// 签名
	public static final String smsSign = "广州市爱锦康健康咨询有限"; // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请
	
	
	public static String SendShortMessageSingle(int templateId, String phoneNumber, String[] params){
		try {
			 SmsSingleSender ssender = new SmsSingleSender(appid, appkey);
			 SmsSingleSenderResult result = ssender.sendWithParam("86", phoneNumber,
			     templateId, params, smsSign, "", "");
			 System.out.println(result);
			 if(result.errMsg == "OK"){
				 return "OK";
			 }else{
				 return result.errMsg;
			 }
		} catch (HTTPException e) {
			 // HTTP 响应码错误
			 e.printStackTrace();
		} catch (JSONException e) {
			 // JSON 解析错误
			 e.printStackTrace();
		} catch (IOException e) {
			 // 网络 IO 错误
			 e.printStackTrace();
		}
		
		return "FAIL";
	}
	
	public static String SendShortMessageMulti(int templateId, String[] phoneNumbers, String[] params){
		try {
			 SmsMultiSender msender = new SmsMultiSender(appid, appkey);
			 SmsMultiSenderResult result =  msender.sendWithParam("86", phoneNumbers,
			     templateId, params, smsSign, "", "");
			 System.out.println(result);
			 if(result.errMsg == "OK"){
				 return "OK";
			 }else{
				 return result.errMsg;
			 }
		} catch (HTTPException e) {
			 // HTTP 响应码错误
			 e.printStackTrace();
		} catch (JSONException e) {
			 // JSON 解析错误
			 e.printStackTrace();
		} catch (IOException e) {
			 // 网络 IO 错误
			 e.printStackTrace();
		}
		
		return "FAIL";
	}
}