class ShopOredrPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_USER_INFO;
	/**
     * 输入
     */
	protected botMov:egret.tween.TweenGroup;
	protected rect_bot:eui.Rect;

	protected lab_itemname: eui.Label;
	protected lab_itemtime: eui.Label;
	protected lab_itemprice: eui.Label;
	protected lab_sel_scrip: eui.Label;
	protected pic_companypic: eui.Image;
	
	private _radio_lun:eui.RadioButton;
	private _radio_nan:eui.RadioButton;
	private _radio_nv:eui.RadioButton;
	private _radio_dian:eui.RadioButton;

	private _radio_wo:eui.RadioButton;
	private _radio_tb:eui.RadioButton;

	private _radio_lev_no:eui.RadioButton;
	private _radio_lev_sel:eui.RadioButton;
	

	private _btn_worksel:eui.Button;
	private _btn_querytime:eui.Button;
	private _btn_back: eui.Button;


	private _btn_order: eui.Button;

	private lab_time_mou:eui.Label;
	private lab_time_day:eui.Label;
	private lab_time_hou:eui.Label;
	private lab_time_min:eui.Label;
	private lab_time_num:eui.Label;
	private lab_timelong:eui.Label;
	private lab_wntm:eui.Label;

	private _btn_time_MA:eui.Button;
	private _btn_time_MD:eui.Button;
	private _btn_time_DA:eui.Button;
	private _btn_time_DD:eui.Button;
	private _btn_time_HA:eui.Button;
	private _btn_time_HD:eui.Button;
	private _btn_time_FA:eui.Button;
	private _btn_time_FD:eui.Button;
	private _btn_time_NA:eui.Button;
	private _btn_time_ND:eui.Button;

	private group_add:eui.Group;
	private group_time:eui.Group;

	protected _data:any;
	protected _listWorks = [];
	protected _listGukes = [];
	protected _listWorkItems = [];
	protected _listWlevs = [];
	protected _selWtype = 0;
	protected _selWLev = 0;
	protected _SelHid = -1;
	protected _settime = 0;
	protected _setnum = 0;
	
	protected lab_haveset_selhid:eui.Label;
	protected lab_haveset_settime:eui.Label;


	public constructor() {
		super();
		this.skinName = "ShopOredrSkin";	
	}

	protected childrenCreated(){
		var _raido_group:eui.RadioButtonGroup = new eui.RadioButtonGroup();
    	_raido_group.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);

		this._radio_lun.group = _raido_group;
		this._radio_nan.group = _raido_group;
		this._radio_nv.group = _raido_group;
		this._radio_dian.group = _raido_group;
		
		this._radio_lun.selected = true;
		this._selWtype = 0;

		var _raido_group1:eui.RadioButtonGroup = new eui.RadioButtonGroup();
    	_raido_group1.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler1, this);
		this._radio_wo.group = _raido_group1;
		this._radio_tb.group = _raido_group1;

		var _raido_group2:eui.RadioButtonGroup = new eui.RadioButtonGroup();
    	_raido_group2.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler2, this);
		this._radio_lev_no.group = _raido_group2;
		this._radio_lev_sel.group = _raido_group2;


		this._btn_worksel.visible = false;
		this._btn_querytime.visible = false;

		this._AddClick(this._btn_worksel, this._OnClick);
		this._AddClick(this._btn_querytime, this._OnClick);
		this._AddClick(this._btn_back, this._OnClick);
		this._AddClick(this._btn_order, this._OnClick);

		this._AddClick(this._btn_time_MA, this._OnClick);
		this._AddClick(this._btn_time_MD, this._OnClick);
		this._AddClick(this._btn_time_DA, this._OnClick);
		this._AddClick(this._btn_time_DD, this._OnClick);
		this._AddClick(this._btn_time_HA, this._OnClick);
		this._AddClick(this._btn_time_HD, this._OnClick);
		this._AddClick(this._btn_time_FA, this._OnClick);
		this._AddClick(this._btn_time_FD, this._OnClick);
		this._AddClick(this._btn_time_NA, this._OnClick);
		this._AddClick(this._btn_time_ND, this._OnClick);

		this._AddClick(this._radio_tb, this._OnClick);

		this._AddClick(this._radio_lev_no, this._OnClick);
		this._AddClick(this._radio_lev_sel, this._OnClick);

		
		
		this.lab_time_num.text = 1 + "";
		this._setnum = 1;

		this.lab_wntm.visible = false;

		//设置顾客列表
		this._radio_tb.visible = false;
		var gnum = ShopPageManage.ins().ShopGuke_Num;
		if(gnum > 1){
			this._radio_tb.visible = true;
		}
		this._listGukes = [];
		for(var i=1; i<gnum; i++){
			var gname = "";
			gname = "第 " + i +" 位同伴";
			
			this._listGukes.push({name1:gname, hid:0})
		}
		this._listWlevs = [];
		this._listWlevs.push({name1:"初级技师", lev:1});
		this._listWlevs.push({name1:"中级技师", lev:2});
		this._listWlevs.push({name1:"高级技师", lev:3});
		this._listWlevs.push({name1:"特级技师", lev:4});
		this._listWlevs.push({name1:"专家坐诊", lev:5});

		this.rect_bot.visible = false;

		this.lab_haveset_selhid.visible = false;
		this.lab_haveset_settime.visible = false;
    }
	private  formatTime_lab(now){
		let nowYear = now.getFullYear();
		let nowMonth = now.getMonth() + 1;
		let nowweekday = now.getDate();
		let nowMonths;
		let nowweekdays;
		if (nowMonth < 10) {
			nowMonths = "0" + nowMonth;
		} else {
			nowMonths = nowMonth;
		}
		if (nowweekday < 10) {
			nowweekdays = "0" + nowweekday;
		} else {
			nowweekdays = nowweekday;
		}
		let hh = now.getHours();            //时
		let mm = now.getMinutes();          //分
		let ss = now.getSeconds();           //秒
		let hhs, mms, sss;
		if (hh < 10) {
			hhs = "0" + hh;
		} else {
			hhs = hh;
		}
		if (mm < 10) {
			mms = "0" + mm;
		} else {
			mms = mm;
		}
		if (ss < 10) {
			sss = "0" + ss;
		} else {
			sss = ss;
		}
		var ts = nowMonth + "月" + nowweekday + "日 " + hhs + ":" + mms;
		this.lab_time_mou.text = nowMonths + "月";
		this.lab_time_day.text = nowweekdays + "日";
		this.lab_time_hou.text = hh + "时";
		this.lab_time_min.text = mm + "分";
	}
	private _setSameGuketime(){
		//同一顾客的下一项目的开始时间是上一个项目的开始时间加上服务时长
		var find = 0;

		var ltm = 0;
		var nowt;
		let data = ShopPageManage.ins().data_ShopMakeList;
		let knarray: Array<any> = data;
		let maxtm = new Date().getTime();
		for (var i = 0; i < knarray.length; i++) {
			let kenvo: any = knarray[i];
			if(kenvo.gukeidx == ShopPageManage.ins()._selGukeIdx){
				let sitem = ShopPageManage.ins().getServiceItemBySid(kenvo.sid)
				if(sitem != null){
					
					let ltmmm = new Date(kenvo.waittime).getTime();
					if(ltmmm + (kenvo.clocknumyy * sitem.timelong)*60*1000 > maxtm)
					{
						maxtm = ltmmm;	
						ltm =  (kenvo.clocknumyy * sitem.timelong);				
					}
					find = 1;
				}
				
				
			}
		}
		var nowt
		nowt = maxtm + 20*1000 + ltm*60*1000;
		
		
		this._settime = nowt;
		this.formatTime_lab(new Date(nowt));

		this.setSelDateTimeEnable(true)
		this.lab_haveset_settime.visible = false;
		if(find == 1){
			this.setSelDateTimeEnable(false)
			this.lab_haveset_settime.visible = true;
		}
	}

	private setLastGukeSel(){
		//上次这位同伴选择的排钟方式
		var find = 0;


		let lastwtypesel = 0;
		let lasthidsel = -1;
		let lastidsel = 0;
		let lastwlev = 0;
		let knarray: Array<any> = ShopPageManage.ins().data_ShopMakeList;
		for (var i = 0; i < knarray.length; i++) {
			let kenvo: any = knarray[i];
			if(kenvo.gukeidx == ShopPageManage.ins()._selGukeIdx){
				if(kenvo.id > lastidsel)
				{
					lastwtypesel = kenvo.wtype;
					lasthidsel = kenvo.hid;
					lastidsel = kenvo.id;
					lastwlev = kenvo.wlev;
					find=1;
				}
			}
		}
		this.setSelWtypeEnable(true)
		this._btn_worksel.enabled = true;
		this.lab_haveset_selhid.visible = false;
		if(find == 1){
			//已经选过服务方式 那么不能在选了
			this.setSelWtypeEnable(false)
			this.lab_haveset_selhid.visible = true;
		}

		this._selWtype = lastwtypesel;
		this._btn_worksel.visible = false;
		this._btn_worksel.label = "选择技师";
		this._btn_querytime.visible = false;
		if(lastwtypesel == 0){
			this._radio_lun.enabled = true;
			this._radio_lun.selected = true;
		}else if(lastwtypesel == 1){
			this._radio_nan.enabled = true;
			this._radio_nan.selected = true;
		}else if(lastwtypesel == 2){
			this._radio_nv.enabled = true;
			this._radio_nv.selected = true;
		}else if(lastwtypesel == 3){
			this._radio_dian.enabled = true;
			this._radio_dian.selected = true;
			this._SelHid = lasthidsel;
			let knarray: any[] = ShopPageManage.ins().data_ShopWorkerList;		
			for (var i = 0; i < knarray.length; i++) {
				let wk: any = knarray[i];
				if(wk.hid == this._SelHid){
					this._btn_worksel.label = "  "+wk.servicecode + "号  ";
					this._btn_worksel.visible = true;
					break;
				}
			}
				
			if(find == 1){
				this._btn_worksel.enabled = false;	
			}

			this.sendSelWorker();
		}

		if(lastwlev == 0){
			this._radio_lev_no.selected = true;
		}else{
			this._radio_lev_sel.selected = true;
			this._radio_lev_sel.label = this._listWlevs[lastwlev-1].name1;
		}
		this._radio_lev_no.enabled = true;
		this._radio_lev_sel.enabled = true;
		if(find == 1){
			this._radio_lev_no.enabled = false;
			this._radio_lev_sel.enabled = false;
		}
	}
	private setSelWtypeEnable(e:boolean){
		if(e == true){
			this._radio_lun.enabled = true;
			this._radio_nan.enabled = true;
			this._radio_nv.enabled = true;
			this._radio_dian.enabled = true;
		}else{
			this._radio_lun.enabled = false;
			this._radio_nan.enabled = false;
			this._radio_nv.enabled = false;
			this._radio_dian.enabled = false;
		}
	}
	private setSelDateTimeEnable(e:boolean){
		if(e == true){
			this._btn_time_MA.enabled = true;
			this._btn_time_MD.enabled = true;
			this._btn_time_DA.enabled = true;
			this._btn_time_DD.enabled = true;
			this._btn_time_HA.enabled = true;
			this._btn_time_HD.enabled = true;
			this._btn_time_FA.enabled = true;
			this._btn_time_FD.enabled = true;
		}else{
			this._btn_time_MA.enabled = false;
			this._btn_time_MD.enabled = false;
			this._btn_time_DA.enabled = false;
			this._btn_time_DD.enabled = false;
			this._btn_time_HA.enabled = false;
			this._btn_time_HD.enabled = false;
			this._btn_time_FA.enabled = false;
			this._btn_time_FD.enabled = false;
		}
	}
	OnOpen(...param: any[]) {
		
		this._data = param[0];
		this.lab_itemname.text = this._data.name;
	  	this.lab_itemprice.text = "¥"+this._data.price;

		//上一次选择的顾客同伴
		var sel = 0;
		if(ShopPageManage.ins()._selGukeIdx <= 0){
			this._radio_wo.selected = true;
		}else{
			this._radio_tb.selected = true;
			sel = ShopPageManage.ins()._selGukeIdx-1;
			if(sel >=0 && sel <this._listGukes.length){
				this._radio_tb.label = this._listGukes[sel].name1;
			}
			
		}
		this._setSameGuketime();
		
		
		var comanyname = GameGlobal.CurrentCompany;
		var cmpany = {
			name:comanyname
		};	
		var rurl = FuncUrlUtil.ShopInfo_GetCanWorkerList;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
	
		


		this.botMov.addEventListener(egret.Event.COMPLETE,this.redBotHit, this);

		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetCanWorkerList, this.onServerEventData, this);
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetThisWorkerOrderList, this.onServerEventData, this);
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_MakeShop, this.onServerEventData, this);
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_AddShopFor, this.onServerEventData, this);
	}

	OnClose() {
		this.botMov.removeEventListener(egret.Event.COMPLETE,this.redBotHit, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetCanWorkerList, this.onServerEventData, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetThisWorkerOrderList, this.onServerEventData, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_MakeShop, this.onServerEventData, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_AddShopFor, this.onServerEventData, this);
	};
	private redBotHit(){
		EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, null));
		this.CloseSelf();
	}
	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			case FuncUrlUtil.ShopInfo_GetCanWorkerList:			
				ShopPageManage.ins().data_ShopWorkerList = json.obj;
				this.onList_work_Update();
				this.setLastGukeSel();
			break; 
			case FuncUrlUtil.ShopInfo_GetThisWorkerOrderList:			
				ShopPageManage.ins().data_ThisWorkerItemList = json.obj;
				this.onList_workwait_Update();
				this._btn_querytime.visible = true;

				this.ifTimeOverEachOther();
			break;
			case FuncUrlUtil.ShopInfo_MakeShop:			
				ShopPageManage.ins().data_ShopMakeList = json.obj;
				this.rect_bot.visible = true;
				this.botMov.play(0);
				this._setSameGuketime();
				this.setLastGukeSel();
			break;
			case FuncUrlUtil.ShopInfo_AddShopFor:			
				ShopPageManage.ins().data_ShopMakeList = json.obj;
				this.rect_bot.visible = true;
				this.botMov.play(0);
			break;
			 
		}
	}
	private ifTimeOverEachOther(){
		this.lab_time_mou.textColor = 0x352F2F;
		this.lab_time_day.textColor = 0x352F2F;
		this.lab_time_hou.textColor = 0x352F2F;
		this.lab_time_min.textColor = 0x352F2F;
		this.lab_time_num.textColor = 0x352F2F;
		this.lab_wntm.visible = false;
		var settm = {time:this._settime, num:this._setnum}
		if(this._SelHid > 0){
			var ov = ShopPageManage.ins()._ifWorkerItemTimeisOverEachOther(settm);
			if(ov == 1){
				this.lab_wntm.visible = true;
				this.lab_time_mou.textColor = 0xD12323;
				this.lab_time_day.textColor = 0xD12323;
				this.lab_time_hou.textColor = 0xD12323;
				this.lab_time_min.textColor = 0xD12323;
			}
			if(ov >= 2){
				this.lab_wntm.visible = true;
				this.lab_time_num.textColor = 0xD12323;
			}

			if(ov == 0){
				var ovs = ShopPageManage.ins()._ifWorkerItemTimeisOverEachOtherOnThisShop(settm,this._SelHid)
				if(ovs == 1){
					this.lab_wntm.visible = true;
					this.lab_time_mou.textColor = 0xD12323;
					this.lab_time_day.textColor = 0xD12323;
					this.lab_time_hou.textColor = 0xD12323;
					this.lab_time_min.textColor = 0xD12323;
				}
				if(ovs >= 2){
					this.lab_wntm.visible = true;
					this.lab_time_num.textColor = 0xD12323;
				}
			}
		}
		var ov1 = ShopPageManage.ins()._ifGukeItemTimeisOverEachOther(settm);
		if(ov1 == 1){
			this.lab_wntm.visible = true;
			this.lab_time_mou.textColor = 0xD12323;
			this.lab_time_day.textColor = 0xD12323;
			this.lab_time_hou.textColor = 0xD12323;
			this.lab_time_min.textColor = 0xD12323;
		}
		if(ov1 >= 2){
			this.lab_wntm.visible = true;
			this.lab_time_num.textColor = 0xD12323;
		}
	}
	private onList_work_Update(){
		let data = ShopPageManage.ins().data_ShopWorkerList;

		this._listWorks = [];
		let knarray: any[] = data;		
		for (var i = 0; i < knarray.length; i++) {
			let wk: any = knarray[i];
			this._listWorks.push({name1:"  "+wk.servicecode + "号  ", hid:wk.hid})
		}
	}
	private onList_workwait_Update(){
		let data = ShopPageManage.ins().data_ThisWorkerItemList;

		this._listWorkItems = [];
		let knarray: any[] = data;	
		let nowtime = new Date().getTime();	
		let lasttime;
		let lastday;
		var showday = -1;
		for (var i = 0; i < knarray.length; i++) {
			let item: any = knarray[i];
			if(item.workstate >= WaiterStateUtil.SST_FW_FINISH){
				continue;
			}
			let sitem: any = ShopPageManage.ins().getServiceItemBySid(item.sid);
			let wdate = new Date(item.waittime);
			let num = item.clocknumyy;
			if(num == null){
				num = 1;
			}
			let ytm = wdate.getTime() + num*sitem.timelong*60*1000;
			if(item.workstate >= WaiterStateUtil.SST_SZ_MIN && item.workstate < WaiterStateUtil.SST_FW_FINISH)
			{
				let mms = (nowtime - wdate.getTime())/(60*1000)
				let hmms = mms % 60;
				if( hmms > 10  ){
					let hhs = Math.floor(mms/60) + 1;
					ytm = wdate.getTime() + hhs*60*60*1000;
				}else{
					ytm = nowtime;
				}
				
			}
			let nowytm = new Date(ytm);
			
			let wdatet = this.formatTime_hour(wdate);
			let ydate = this.formatTime_hour(nowytm);
			if(nowytm.getDay() > wdate.getDay()){
				ydate = this.formatTime(nowytm);
			}
			
			{
				let first = 0;
				if(lasttime==null){
					lasttime = nowtime;
					first = 1
				}
				//中间空闲时间超过30分钟才显示
				let lv = (wdate.getTime() - lasttime) / (60*1000);
				if(lv > 30){
					
					var lvdate = new Date(lasttime);
					let lvdatet = this.formatTime_hour(lvdate);
					let kxwdatet = this.formatTime_hour(wdate)
					let wwd = wdate.getDay();
					let lld = lvdate.getDay();
					if(wwd != lld){
						kxwdatet = this.formatTime(wdate);
					}
					let hhlv = Math.floor(lv/60);
					let sv = "";
					if(hhlv > 0){
						sv = sv + hhlv+"小时";
					}
					let mmlv = Math.floor(lv % 60);
					if(mmlv > 0)
					{
						sv = sv + mmlv + "分";
					}
					if(first == 1){
						this._listWorkItems.push({name1:this.formatTime_day(lvdate), name2:"", name3:"", c:2});
						showday = lvdate.getDay();
					}
					this._listWorkItems.push({name1:lvdatet+" 至 "+kxwdatet, name2:sv, name3:"空闲", c:0});
				}
				
			}
			//不是同一天就显示日期
			
			if(lastday == null){
				if(showday != wdate.getDay())
				{
					this._listWorkItems.push({name1:this.formatTime_day(wdate), name2:"", name3:"", c:2});
					showday = wdate.getDay();
				}
				
			}else{
				if(wdate.getDay() > lastday.getDay()){
					if(showday != wdate.getDay()){
						this._listWorkItems.push({name1:this.formatTime_day(wdate), name2:"", name3:"", c:2});
						showday = wdate.getDay();
					}
						
				}
			}

			let lv = (ytm - wdate.getTime()) / (60*1000);
			let hhlv = Math.floor(lv/60);
			let sv = "";
			if(hhlv > 0){
				sv = sv + hhlv+"小时";
			}
			let mmlv = Math.floor(lv % 60);
			if(mmlv > 0)
			{
				sv = sv + mmlv + "分钟";
			}
			this._listWorkItems.push({name1:wdatet+" 至 "+ydate, name2:sv, name3:"预约", c:1});
			lasttime = ytm;
			lastday = new Date(ytm);
		}
		if(lasttime == null){
			lasttime = new Date().getTime();
		}
		let mlvdate = new Date(lasttime);
		let lvdatet = this.formatTime_hour(mlvdate);
		if(showday != mlvdate.getDay()){
			this._listWorkItems.push({name1:this.formatTime_day(mlvdate), name2:"", name3:"", c:2});
		}
		this._listWorkItems.push({name1:lvdatet+" 后", name2:"", name3:"空闲", c:0});

		ShopPageManage.ins().data_listWorkItems = this._listWorkItems;
		ShopPageManage.ins().data_listWorkTile = this._btn_worksel.label+"的工作安排";
	}
	private  formatTime(now):string{
		let nowYear = now.getFullYear();
		let nowMonth = now.getMonth() + 1;
		let nowweekday = now.getDate();
		let nowMonths;
		let nowweekdays;
		if (nowMonth < 10) {
			nowMonths = "0" + nowMonth;
		} else {
			nowMonths = nowMonth;
		}
		if (nowweekday < 10) {
			nowweekdays = "0" + nowweekday;
		} else {
			nowweekdays = nowweekday;
		}
		let hh = now.getHours();            //时
		let mm = now.getMinutes();          //分
		let ss = now.getSeconds();           //秒
		let hhs, mms, sss;
		if (hh < 10) {
			hhs = "0" + hh;
		} else {
			hhs = hh;
		}
		if (mm < 10) {
			mms = "0" + mm;
		} else {
			mms = mm;
		}
		if (ss < 10) {
			sss = "0" + ss;
		} else {
			sss = ss;
		}
		var ts = nowMonths + "月" + nowweekdays + "日 " + hhs + ":" + mms;
		return ts;
	}
	private  formatTime_day(now):string{
		let nowYear = now.getFullYear();
		let nowMonth = now.getMonth() + 1;
		let nowweekday = now.getDate();
		let nowMonths;
		let nowweekdays;
		if (nowMonth < 10) {
			nowMonths = "0" + nowMonth;
		} else {
			nowMonths = nowMonth;
		}
		if (nowweekday < 10) {
			nowweekdays = "0" + nowweekday;
		} else {
			nowweekdays = nowweekday;
		}
		let hh = now.getHours();            //时
		let mm = now.getMinutes();          //分
		let ss = now.getSeconds();           //秒
		let hhs, mms, sss;
		if (hh < 10) {
			hhs = "0" + hh;
		} else {
			hhs = hh;
		}
		if (mm < 10) {
			mms = "0" + mm;
		} else {
			mms = mm;
		}
		if (ss < 10) {
			sss = "0" + ss;
		} else {
			sss = ss;
		}
		var ts = nowMonths + "月" + nowweekdays + "日";
		return ts;
	}
	private  formatTime_hour(now):string{
		let nowYear = now.getFullYear();
		let nowMonth = now.getMonth() + 1;
		let nowweekday = now.getDate();
		let nowMonths;
		let nowweekdays;
		if (nowMonth < 10) {
			nowMonths = "0" + nowMonth;
		} else {
			nowMonths = nowMonth;
		}
		if (nowweekday < 10) {
			nowweekdays = "0" + nowweekday;
		} else {
			nowweekdays = nowweekday;
		}
		let hh = now.getHours();            //时
		let mm = now.getMinutes();          //分
		let ss = now.getSeconds();           //秒
		let hhs, mms, sss;
		if (hh < 10) {
			hhs = "0" + hh;
		} else {
			hhs = hh;
		}
		if (mm < 10) {
			mms = "0" + mm;
		} else {
			mms = mm;
		}
		if (ss < 10) {
			sss = "0" + ss;
		} else {
			sss = ss;
		}
		var ts = hhs + ":" + mms;
		return ts;
	}
	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {
			 case this._radio_lev_no:
				this._selWLev = 0;
			 break;
			 case this._radio_lev_sel:
				ViewManager.ins().open(normalselpanel, "选择技师", this._listWlevs, this._onselWlev, this);
			 break;
			 case this._btn_worksel:
				ViewManager.ins().open(normalselpanel, "选择技师", this._listWorks, this._selWorker, this);
			 break;
			 case this._btn_querytime:
				ViewManager.ins().open(normalTimeSetPanel, this._btn_worksel.label+"的工作安排", this._listWorkItems, null, this);
			 break;

			 case this._btn_back:
				this.CloseSelf();
			 break;
			 case this._btn_order:
			 	this.makeOrder();
			 break;
			 case this._radio_tb:
			 	ViewManager.ins().open(normalselpanel, "选择同伴", this._listGukes, this._selGuke, this);
			 break;
			 case this._btn_time_FD:
				this._settime = this._settime - 60*1000;
				var std = new Date(this._settime)
				this.formatTime_lab(std);
				this.ifTimeOverEachOther();
			break;
			case this._btn_time_FA:
				this._settime = this._settime + 60*1000;
				var std = new Date(this._settime)
				this.formatTime_lab(std);
				this.ifTimeOverEachOther();
				break;
			 case this._btn_time_HD:
				this._settime = this._settime - 60*60*1000;
				var std = new Date(this._settime)
				this.formatTime_lab(std);
				this.ifTimeOverEachOther();
			break;
			case this._btn_time_HA:
				this._settime = this._settime + 60*60*1000;
				var std = new Date(this._settime)
				this.formatTime_lab(std);
				this.ifTimeOverEachOther();
				break;
			case this._btn_time_DD:
				this._settime = this._settime - 24*60*60*1000;
				var std = new Date(this._settime)
				this.formatTime_lab(std);
				this.ifTimeOverEachOther();
			break;
			case this._btn_time_DA:
				this._settime = this._settime + 24*60*60*1000;
				var std = new Date(this._settime)
				this.formatTime_lab(std);
				this.ifTimeOverEachOther();
				break;
			case this._btn_time_MD:
				var std = new Date(this._settime)	
				var days = Util.getDaysOfMonth_pre(std);
				this._settime = this._settime - days*24*60*60*1000;
				std = new Date(this._settime)		
				this.formatTime_lab(std);
				this.ifTimeOverEachOther();
				break;
			case this._btn_time_MA:
				var std = new Date(this._settime)
				var days = Util.getDaysOfMonth(std);
				this._settime = this._settime + days*24*60*60*1000;
				std = new Date(this._settime)
				this.formatTime_lab(std);
				this.ifTimeOverEachOther();
				break;
			case this._btn_time_ND:
				this._setnum = this._setnum - 0.5;
				this.lab_time_num.text = this._setnum + "";
				this.ifTimeOverEachOther();
				this.lab_itemprice.text = "¥"+this._setnum*this._data.price;
				break;
			case this._btn_time_NA:
				this._setnum = this._setnum + 0.5;
				this.lab_time_num.text = this._setnum + "";
				this.ifTimeOverEachOther();
				this.lab_itemprice.text = "¥"+this._setnum*this._data.price;
				break;     
		}
	}
	public _onselWlev(sel){
		this._selWLev = this._listWlevs[sel].lev;
		this._radio_lev_sel.label = this._listWlevs[sel].name1;
	}
	public _selWorker(sel){
		this._SelHid = this._listWorks[sel].hid;
		this._btn_worksel.label = this._listWorks[sel].name1;

		this.sendSelWorker();
	}
	public sendSelWorker(){
		var comanyname = GameGlobal.CurrentCompany;
		var cmpany = {
			name:comanyname,
			hid:this._SelHid+""
		};	
		var rurl = FuncUrlUtil.ShopInfo_GetThisWorkerOrderList;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
	}
	public _selGuke(sel){
		ShopPageManage.ins()._selGukeIdx = sel+1;
		this._radio_tb.label = this._listGukes[sel].name1;
		this._setSameGuketime();

		//设置上次默认选择的技师
		this.setLastGukeSel();
		
	}
	private radioChangeHandler(e:eui.UIEvent){
                                                   //当点击第一个选项卡按钮时，下面输出为
        let radioGroup:eui.RadioButtonGroup = e.target;
        let sel = radioGroup.selectedValue;
		if(sel == 3){
			this._btn_worksel.visible = true;
			this._radio_lev_no.enabled = false;
			this._radio_lev_sel.enabled = false;
			this._radio_lev_no.selected = true;
		}else{
			this._btn_worksel.visible = false;
			this._btn_worksel.label = "选择技师";
			this._btn_querytime.visible = false;
			this._radio_lev_no.enabled = true;
			this._radio_lev_sel.enabled = true;
		}
		this._selWtype = sel; 
    }
	private radioChangeHandler1(e:eui.UIEvent){
                                                   //当点击第一个选项卡按钮时，下面输出为
        let radioGroup:eui.RadioButtonGroup = e.target;
        let sel = radioGroup.selectedValue;
		if(sel == 0){
			ShopPageManage.ins()._selGukeIdx = 0;
			this._setSameGuketime();
			//设置上次默认选择的技师
			this.setLastGukeSel();
		}
		if(sel == 1){
			ViewManager.ins().open(normalselpanel, "选择同伴", this._listGukes, this._selGuke, this);
		}
		
    }
	private radioChangeHandler2(e:eui.UIEvent){
                                                   //当点击第一个选项卡按钮时，下面输出为
        let radioGroup:eui.RadioButtonGroup = e.target;
        let sel = radioGroup.selectedValue;
		if(sel == 0){
			this._selWLev = 0;
		}
		if(sel == 1){
			
		}
		
    }
	private makeOrder(){
		if(this.lab_wntm.visible == true){
			WarnWin.show("时间冲突，请重新设置服务时间！", null, this);
			return;
		}
		var wt = new Date(this._settime)
		var wtstr = this.formatTime_servers(wt);

		var selhcode = "";
		var selhname = "";
		let knarray: any[] = ShopPageManage.ins().data_ShopWorkerList;		
		for (var i = 0; i < knarray.length; i++) {
			let wk: any = knarray[i];
			if(wk.hid == this._SelHid){
				selhcode = wk.servicecode;
				selhname = wk.name;
				break;
			}
		}

		var order = {
			company:GameGlobal.CurrentCompany,
			gukenum:ShopPageManage.ins().ShopGuke_Num,
			gukeidx:ShopPageManage.ins()._selGukeIdx,
			rmid:egret.getOption("rmid"),
			rmname:egret.getOption("rmname"),
			hid:this._SelHid,
			hcode:selhcode,
			hname:selhname,
			sid:this._data.id,
			sname:this._data.name,
			clocknumyy:this._setnum,
			wtype:this._selWtype,
			wlev:this._selWLev,
			waittime:wtstr,
			workstate:0,
			billnumber:""
		}

		if(ShopPageManage.ins()._addstate == 0){
			var rurl = FuncUrlUtil.ShopInfo_MakeShop;
			sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
		}else if(ShopPageManage.ins()._addstate == 2){
			order.workstate = ShopPageManage.ins()._addstate;
			order.billnumber = ShopPageManage.ins()._addbillnumber;		
			var rurl = FuncUrlUtil.ShopInfo_AddShopFor;
			sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
		}
		

		
	}

	private  formatTime_servers(now):string{
		let nowYear = now.getFullYear();
		let nowMonth = now.getMonth() + 1;
		let nowweekday = now.getDate();
		let nowMonths;
		let nowweekdays;
		if (nowMonth < 10) {
			nowMonths = "0" + nowMonth;
		} else {
			nowMonths = nowMonth;
		}
		if (nowweekday < 10) {
			nowweekdays = "0" + nowweekday;
		} else {
			nowweekdays = nowweekday;
		}
		let hh = now.getHours();            //时
		let mm = now.getMinutes();          //分
		let ss = now.getSeconds();           //秒
		let hhs, mms, sss;
		if (hh < 10) {
			hhs = "0" + hh;
		} else {
			hhs = hh;
		}
		if (mm < 10) {
			mms = "0" + mm;
		} else {
			mms = mm;
		}
		if (ss < 10) {
			sss = "0" + ss;
		} else {
			sss = ss;
		}
		var ts = nowYear + "-" + nowMonths + "-" + nowweekdays + " " + hhs + ":" + mms+":"+sss;
		return ts;
	}
}
