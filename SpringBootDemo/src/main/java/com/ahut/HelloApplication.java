package com.ahut;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aikang.Bean.RespBean;
import com.aikang.Bean.User;
import com.aikang.config.MyCORSFilter;
import com.aikang.utils.Util;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@ComponentScan("com.aikang.Bean")
@ComponentScan("com.aikang.service")
@ComponentScan("com.aikang.config")
@ComponentScan("com.aikang.controller")
@MapperScan(basePackages = "com.aikang.mapper")
@SpringBootApplication // Spring Boot项目的核心注解，主要目的是开启自动配置
@Controller // 标明这是一个SpringMVC的Controller控制器
public class HelloApplication {

    @RequestMapping("/hello")
    @ResponseBody
    public String hello() {
        return "hello world";
    }
    
    
    // 在main方法中启动一个应用，即：这个应用的入口
    public static void main(String[] args) {
    	Util.setConpnany_Name("aikang");
        SpringApplication.run(HelloApplication.class, args);
    }

}
