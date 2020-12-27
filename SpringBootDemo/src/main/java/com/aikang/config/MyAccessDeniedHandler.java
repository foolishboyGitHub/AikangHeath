package com.aikang.config;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import com.aikang.Bean.RespBean;
import com.aikang.utils.Util;

//@Component
//public class MyAccessDeniedHandler implements AccessDeniedHandler {
//
//	@Override
//	public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException arg2)
//			throws IOException, ServletException {
//		// TODO Auto-generated method stub
//		PrintWriter out;
//
//		out = response.getWriter();
//		RespBean respBean = RespBean.configRsp(Util.MSG_ERROR, "/NoAuthority", "at last! we can't find you any one role in this url!");
//        String s = Util.setResponseToClientString(request, response, respBean);
//        out.write(s);
//        out.flush();
//        out.close();
//	}
//
//}
