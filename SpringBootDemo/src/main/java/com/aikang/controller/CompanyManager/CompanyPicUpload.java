package com.aikang.controller.CompanyManager;

import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ClassUtils;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.aikang.Bean.CompanyPicture;
import com.aikang.Bean.RespBean;
import com.aikang.Bean.User;
import com.aikang.service.CompanyService;
import com.aikang.utils.Base64Util;
import com.aikang.utils.JsonResult;
import com.aikang.utils.UpImgUtil;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;

import net.coobird.thumbnailator.Thumbnails;

@Controller // 标明这是一个SpringMVC的Controller控制器
public class CompanyPicUpload {

	@Autowired 
	CompanyService companyService;
	 /**
     * 上传文件控制器
     *
     * @param multipartFile 文件上传类
     * @return ModelAndView
	 * @throws JsonProcessingException 
     */
    @PostMapping("/CompanyManager/PicManager/AddNewPic")
    public void  upload_pic(
    		@RequestParam("pic") String fileBase,
    		@RequestParam("type") String type,
    		HttpServletRequest request,
            HttpServletResponse response) throws FileNotFoundException, JsonProcessingException
    {
    	Map<String, Object> map = companyService.getAllCompanyPictureNum(Util.getConpnany_Name());
    	if(map == null || map.get("total") == null){
			return;
		}
		Integer total = Integer.parseInt(map.get("total").toString());
		System.out.println("upload_pic =====D "+Util.getConpnany_Name()+"pic num is "+ total);
		if(total > 100){
			System.out.println("upload_pic =====D "+Util.getConpnany_Name()+"pic more 100 "+ total);
			return;
		}
		
    	Date date = new Date();
    	String randfilename = "picu_"+date.getTime() +"828"+ Util.randomString(4);
    	String pname = randfilename+"."+type;
    	String pname_min = randfilename+"_min."+type;
    	
    	UpImgUtil.UpdateImgDateToFile(fileBase, type, pname, pname_min);
        
        User u = Util.getCurrentUser();
        CompanyPicture cp = new CompanyPicture();
        String seriid=date.getTime() +"303"+ Util.randomString(6);
        cp.setCompany(u.getCompany());
        cp.setSeriid(seriid);
        cp.setFilename(pname);
        cp.setFilenamemin(pname_min);
        SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");	     
	       	String dstr = ft.format(date.getTime());
        cp.setCreatedate(dstr);
        int p = companyService.insertCompanyPictureData(cp);
//        Map<String,Object> _map = new HashMap<String,Object>();//
//		_map.put("msg", "ok");
//		RespBean ok = RespBean.ok("/CompanyManager/InfoUpdate/GetCompanyInfo", _map);
//	    String s = Util.setResponseToClientString(request, response, ok);
//	    
	    return ;
    }
    
    @PostMapping("/CompanyManager/PicManager/UpdatePic")
    public void  update_pic(
    		@RequestParam("pic") String fileBase,
    		@RequestParam("type") String type,
    		@RequestParam("id") String sid,
    		HttpServletRequest request,
            HttpServletResponse response) throws FileNotFoundException, JsonProcessingException
    {
    	long id = Long.parseLong(sid);
    	CompanyPicture oldpic = companyService.getCompanyPictureByID(id);
    	if(oldpic == null){
    		return;
    	}
    	
        try {
        	String pname = oldpic.getFilename();
        	String pname_min = oldpic.getFilenamemin();
        	File path = new File(ResourceUtils.getURL("classpath:").getPath());
        	String staticstr = "";
        	if(System.getProperty("os.name").toLowerCase().contains("win")){
        		staticstr = "\\"+"static\\";
        	}else{
        		staticstr = "/"+"static/";
        	}
        	String file_del = path.getAbsolutePath()+staticstr+pname;
        	String file_del_min = path.getAbsolutePath()+staticstr+pname_min;
    		File file = new File(file_del);
    		File file_min = new File(file_del_min);
    		if (!file.exists()) {
//    			return;
            }
    		if(!file.delete()){
//    			return;
    		}
    		if (!file_min.exists()) {
//    			return;
            }
    		if(!file_min.delete()){
//    			return;
    		}
            // 保存图片
    		UpImgUtil.UpdateImgDateToFile(fileBase, type, pname, pname_min);

        } catch (IOException e) {
            e.printStackTrace();
        }

//        Map<String,Object> _map = new HashMap<String,Object>();//
//		_map.put("msg", "ok");
//		RespBean ok = RespBean.ok("/CompanyManager/InfoUpdate/GetCompanyInfo", _map);
//	    String s = Util.setResponseToClientString(request, response, ok);
//	    
	    return ;
    }
//    @PostMapping("/CompanyManager/PicManager/AddNewPic")
//    public void  update_pic(
//    		@RequestParam("pic") MultipartFile multipartFile,
//    		@RequestParam("type") String type,
//    		HttpServletRequest request,
//            HttpServletResponse response) throws FileNotFoundException
//    {
//
//    	Date date = new Date();
//    	String pname = "picu_"+date.getTime() +"828"+ Util.randomString(4);
//
//        try {
//            // 保存图片
//        	File path = new File(ResourceUtils.getURL("classpath:").getPath());
//        	if(!path.exists()) {
//        	    path = new File("");
//        	}
//        	File upload = new File(path.getAbsolutePath(),"static/");
//        	if(!upload.exists()) {
//        	    upload.mkdirs();
//        	}
//        	File uploadpic = new File(path.getAbsolutePath(),"static/"+pname+"."+type);
////        	FileUtils.copyInputStreamToFile(inputStream, uploadpic);
//        	multipartFile.transferTo(uploadpic);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        
//    }
}
