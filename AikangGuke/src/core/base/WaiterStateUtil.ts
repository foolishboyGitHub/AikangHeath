class WaiterStateUtil {

	//预约
	public static SST_YY_WAIT = 10;
	public static SST_YY_RECV = 11;

	//无服务人员
	public static SST_WF_MIN = 100;
	public static SST_WF_MAX = 199;
	
	//已呼叫相应服务人员
	public static SST_HJ_MIN = 200;
	public static SST_HJ_MAX = 299;
	
	//收到服务人员确认
	public static SST_SD_MIN = 300;
	//已经通过开始验证码 同批的钟单在服务 这个在等  证明已经到房间
	public static SST_SD_YZM = 310;
	public static SST_SD_MAX = 399;

	//试钟
	public static SST_SZ_MIN = 400;
	public static SST_SZ_MAX = 499;
	
	//服务
	public static SST_FW_MIN = 500;
	public static SST_FW_MAX = 599;
	
	//暂停
	public static SST_ZT_MIN = 600;
	public static SST_ZT_MAX = 699;

	
	//服务
	public static SST_FW_FINISH = 2000;

	public static getStateName(state):string{
		var str:string = "";
		if(state==this.SST_YY_WAIT){
			str = "等待服务中...";
		}
		if(state==this.SST_YY_RECV){
			str = "服务人员准备中...";
		}
		if(state>=this.SST_WF_MIN && state<this.SST_WF_MAX){
			str = "缺少服务人员";
		}
		if(state>=this.SST_HJ_MIN && state<this.SST_HJ_MAX){
			str = "呼叫服务人员...";
		}
		if(state>=this.SST_SD_MIN && state<this.SST_SD_MAX){
			str = "服务人员正在赶来...";
		}
		if(state>=this.SST_SZ_MIN && state<this.SST_SZ_MAX){
			str = "开始为您服务...";
		}
		if(state>=this.SST_FW_MIN && state<this.SST_FW_MAX){
			str = "服务进行中....";
		}
		if(state>=this.SST_ZT_MIN && state<this.SST_ZT_MAX){
			str = "暂停";
		}
		if(state==this.SST_YY_WAIT){
			str = "预约";
		}
		if(state==this.SST_YY_RECV){
			str = "定约";
		}
		if(state>=this.SST_FW_FINISH){
			str = "服务已完成";
		}
		return str;
	}
	public static getStateSound(state):string{
		var str:string = "";
		if(state==this.SST_YY_WAIT){
			str = "resource/sound/worker/yuyue.mp3";
		}
		if(state==this.SST_YY_RECV){
			str = "resource/sound/worker/dingyue.mp3";
		}
		if(state>=this.SST_WF_MIN && state<this.SST_WF_MAX){
			str = "resource/sound/worker/queren.mp3";
		}
		if(state>=this.SST_HJ_MIN && state<this.SST_HJ_MAX){
			str = "resource/sound/worker/hujiao.mp3";
		}
		if(state>=this.SST_SD_MIN && state<this.SST_SD_MAX){
			str = "resource/sound/worker/zhunbei.mp3";
		}
		if(state>=this.SST_SZ_MIN && state<this.SST_SZ_MAX){
			str = "resource/sound/worker/shizhong.mp3";
		}
		if(state>=this.SST_FW_MIN && state<this.SST_FW_MAX){
			str = "resource/sound/worker/shangzhong.mp3";
		}
		if(state>=this.SST_ZT_MIN && state<this.SST_ZT_MAX){
			str = "resource/sound/worker/zanting.mp3";
		}
		if(state>=this.SST_FW_FINISH){
			str = "resource/sound/worker/jieshu.mp3";
		}
		return str;
	}
	public static getStateNameColor(state):number{
		var color:number = 0x888888;
		if(state<=this.SST_YY_WAIT){
			color = 0xff6622;
		}
		if(state==this.SST_YY_RECV){
			color = 0x693888;
		}
		if(state>=this.SST_WF_MIN && state<this.SST_WF_MAX){
			color = 0xff0000;
		}
		if(state>=this.SST_HJ_MIN && state<this.SST_HJ_MAX){
			color = 0xf66200;
		}
		if(state>=this.SST_SD_MIN && state<this.SST_SD_MAX){
			color = 0xf6007f;
		}
		if(state>=this.SST_SZ_MIN && state<this.SST_SZ_MAX){
			color = 0x00b3f6;
		}
		if(state>=this.SST_FW_MIN && state<this.SST_FW_MAX){
			color = 0x05da0a;
		}
		if(state>=this.SST_ZT_MIN && state<this.SST_ZT_MAX){
			color = 0x363952;
		}
		if(state>=this.SST_FW_FINISH){
			color = 0xecc90a;
		}
		return color;
	}

	public static getStateBackColor(state):number{
		var color:number = 0x888888;
		if(state>=this.SST_WF_MIN && state<this.SST_WF_MAX){
			color = 0xff0000;
		}
		if(state>=this.SST_HJ_MIN && state<this.SST_HJ_MAX){
			color = 0xf66200;
		}
		if(state>=this.SST_SD_MIN && state<this.SST_SD_MAX){
			color = 0xf6007f;
		}
		if(state>=this.SST_SZ_MIN && state<this.SST_SZ_MAX){
			color = 0x00b3f6;
		}
		if(state>=this.SST_FW_MIN && state<this.SST_FW_MAX){
			color = 0x05da0a;
		}
		if(state>=this.SST_ZT_MIN && state<this.SST_ZT_MAX){
			color = 0xf63952;
		}
		if(state>=this.SST_FW_FINISH){
			color = 0xecc90a;
		}
		return color;
	}
}