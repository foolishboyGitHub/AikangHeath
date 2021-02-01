package com.aikang.utils;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

import java.util.Date;

import org.springframework.util.ResourceUtils;


import net.coobird.thumbnailator.Thumbnails;

public class UpImgUtil {

	public static void UpdateImgDateToFile(String fileBase, String type, String pname, String pname_min){
        try {
            // 保存图片
        	File path = new File(ResourceUtils.getURL("classpath:").getPath());
        	if(!path.exists()) {
        	    path = new File("");
        	}
        	File upload = new File(path.getAbsolutePath(),"static/");
        	if(!upload.exists()) {
        	    upload.mkdirs();
        	}
        	String staticstr = "";
        	if(System.getProperty("os.name").toLowerCase().contains("win")){
        		staticstr = "\\"+"static\\";
        	}else{
        		staticstr = "/"+"static/";
        	}
        	String uploadpic = path.getAbsolutePath()+staticstr+pname;
        	String uploadpic_min = path.getAbsolutePath()+staticstr+pname_min;
        	
        	String newFileBase = "";
            if(fileBase.indexOf(",")>1) {
                newFileBase = fileBase.substring(fileBase.indexOf(",") + 1);
            }else{
                newFileBase = fileBase;
            }
            System.out.println("=====D------>>>AddNewPic upload url:"+upload.getAbsolutePath());
            
            ByteArrayInputStream bais = Base64Util.base64StrToInputStream(newFileBase);
            ByteArrayInputStream bais_min = Base64Util.base64StrToInputStream(newFileBase);
            File file = new File(uploadpic);
            File file_min = new File(uploadpic_min);
            if(file != null){
            	System.out.println("file open =====D   file path:"+file.getPath());
            }
         // 创建到指定文件的输出流
//            fout = new FileOutputStream(file);
         // 创建到指定文件的输出流
            double ysb = 0.4;
            double ysbm = 0.2;
            int dstrlen = newFileBase.length();
            if(dstrlen > 1024*512){
            	ysb = 0.2;
            	ysbm = 0.1;
            }else if(dstrlen<1024*128){
            	ysb = 0.8;
            	ysbm = 0.4;
            }
            Thumbnails.of(bais)
            .scale(ysb)
            .toFile(file);
            
            Thumbnails.of(bais_min)
            .scale(ysbm)
            .toFile(file_min);
//          Base64Util.base64StringToFile(newFileBase, uploadpic);
            bais.close();
            bais_min.close();
            

        } catch (IOException e) {
            e.printStackTrace();
        }
	}
}
