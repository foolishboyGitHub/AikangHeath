package com.aikang.config;

import java.util.List;
import java.util.Comparator;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.util.StringUtils;

import com.aikang.Bean.Cron;
import com.aikang.Bean.CronTask;
import com.aikang.Bean.WaiterItem;
import com.aikang.service.CronService;
import com.aikang.service.WaiterItemService;
import com.aikang.utils.DateUtil;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

//@Configuration      //1.主要用于标记配置类，兼备Component的效果。
//@EnableScheduling   // 2.开启定时任务
public class DynamicScheduleTask implements SchedulingConfigurer {


    @Autowired      //注入mapper
    CronService cronService;
    
    @Autowired
	WaiterItemService wiService;
	/**
     * 执行定时任务.
     */
    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
    	SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	
    
        taskRegistrar.addTriggerTask(
                //1.添加任务内容(Runnable)
                () ->{ 
                		Date date = new Date();
                		String dstr = ft.format(date.getTime());
                		
                		List<CronTask> wcts = new ArrayList<CronTask>();
                		List<CronTask> cts = cronService.getAllCronTasks();
                		for(int i=0; i<cts.size(); i++){
                			CronTask ct = cts.get(i);
                			String last = ct.getLast();
                			Date d = null;
                			try {
								d = DateUtil.strToDate(last);
							} catch (ParseException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
                			if(d != null){
                				long pass = (date.getTime() - d.getTime())/1000;
                				System.out.println("任务: "+ct.getId()+" 时间差 " + pass);
                				if(pass > ct.getCycle()){
                					/////等待单的处理
                					if(ct.getTabe().equals("waiteritem")){
                						wcts.add(ct);
                					}
                					
                					/////其他的处理
                				}
                			}
                			
                		}
                		
                		if(wcts.size() > 0){
                			DoWaiterTask(wcts);
                		}
                	},
                //2.设置执行周期(Trigger)
                triggerContext -> {
                    //2.1 从数据库获取执行周期
                    Cron cron = cronService.getCron();
                    //2.2 合法性校验.
                    if (StringUtils.isEmpty(cron.getCron())) {
                        // Omitted Code ..
                    }
                    //2.3 返回执行周期(Date)
                    return new CronTrigger(cron.getCron()).nextExecutionTime(triggerContext);
                }
        );
    }
    
    public void DoWaiterTask(List<CronTask> cts){
    	//先按照公司名称排序
    	Collections.sort(cts, new Comparator<CronTask>(){
            @Override
            public int compare(CronTask o1, CronTask o2) {
                /*
                 * int compare(String o1, String o2) 返回一个基本类型的整型，
                 * 返回负数表示：o1 小于o2，
                 * 返回0 表示：o1和o2相等，
                 * 返回正数表示：o1大于o2
                 */
                if (o1.getCompany().compareTo(o2.getCompany()) > 0){
                    return 1;
                }else if (o1.getCompany().compareTo(o2.getCompany()) > 0){
                    return 0;
                }else{
                    return -1;
                }
            }
        });
    	
    	//根据不同的门店 来处理
    	List<Long> newComcts = new ArrayList<Long>(); 
    	String companyName = "";
    	for(int i=0; i<cts.size(); i++){
    		CronTask ct = cts.get(i);
    		//不同的公司 门店  
    		if(!ct.getCompany().equals(companyName)){
    			if(newComcts.size()>0){
    				List<WaiterItem> lws =  wiService.getCompanyWaiterItemByIds(newComcts, companyName);
    				DoWaiterItemDetail(lws);
    			}
    			
    			newComcts.clear();
    		}
    		newComcts.add(ct.getTabeid());
    		companyName = ct.getCompany();
    	}
    	if(newComcts.size()>0){
			List<WaiterItem> lws =  wiService.getCompanyWaiterItemByIds(newComcts, companyName);
			DoWaiterItemDetail(lws);
		}
			

		
    }
    
    public void DoWaiterItemDetail(List<WaiterItem> lws){
    	for(int i=0; i<lws.size(); i++){
    		
    	}
    }
}
