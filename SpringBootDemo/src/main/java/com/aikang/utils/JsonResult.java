package com.aikang.utils;
import com.alibaba.fastjson.JSON;
import com.fasterxml.jackson.annotation.JsonInclude;
 
import java.io.Serializable;
 
@JsonInclude(JsonInclude.Include.ALWAYS)
public class JsonResult implements Serializable {
 
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String code;
 
    private String message;
 
    private Object data;
 
    private JsonResult(){
 
    }
 
    private static JsonResult buildJsonResult(String code, String message, Object data){
        JsonResult result = new JsonResult();
        result.setCode(code);
        result.setMessage(message);
        result.setData(data);
        return result;
    }
 
    public static JsonResult ok(){
        return buildJsonResult("10000", "请求成功", null);
    }
 
    public static JsonResult ok(Object data){
        return buildJsonResult("10000", "请求成功", data);
    }
 
    public static JsonResult ok(String message, Object data){
        return buildJsonResult("10000", message, data);
    }
 
    public static JsonResult customize(String code, String message, Object data){
        return buildJsonResult(code, message, data);
    }
 
    public static JsonResult error(){
        return buildJsonResult("10001", "请求失败", null);
    }
 
    public String getCode() {
        return code;
    }
 
    public void setCode(String code) {
        this.code = code;
    }
 
    public String getMessage() {
        return message;
    }
 
    public void setMessage(String message) {
        this.message = message;
    }
 
    public Object getData() {
        return data;
    }
 
    public void setData(Object data) {
        this.data = data;
    }
 
    
}