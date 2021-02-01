package com.aikang.config;

import java.io.File;
import java.io.FileNotFoundException;

import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Component
public class CustomWebConfiguration implements WebMvcConfigurer {

	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {


		
		try {
			String osname = System.getProperty("os.name");
			if(osname.toLowerCase().contains("win")){
				// 注意如果filePath是写死在这里，一定不要忘记尾部的/或者\\，这样才能读取其目录下的文件
		        registry.addResourceHandler("/img/load/**").addResourceLocations(
		                "classpath:/META-INF/resources/",
		                "classpath:/resources/",
		                "classpath:/static/",
		                "classpath:/public/",
		                "classpath:/webapp/");
				
			}else{
				String jar_parent = new File(ResourceUtils.getURL("classpath:").getPath()).getParentFile().getParentFile().getParent();
				String rs = jar_parent+"/"+"static/";
				System.out.println("addResourceHandler =====D   parent path : "+jar_parent);
				registry.addResourceHandler("/img/load/**")
						.addResourceLocations(rs);
				System.out.println("addResourceHandler =====D   file path : "+rs);
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        // 注意如果filePath是写死在这里，一定不要忘记尾部的/或者\\，这样才能读取其目录下的文件
        
		}
	
}
