class ShopPageManage   extends BaseSystem {
	
	public data_CompanyInfo:any;
	public data_ShopInfoItem:any;
	public data_ShopWorkerList:any;
	public data_ThisWorkerItemList:any;
	public data_listWorkItems:any;
	public data_listWorkTile:any;
	public ShopGuke_Num:number = 0;
	public ShopGuke_TimeType:number = 0;
	public data_ShopMakeList:any;
	public data_ShopHistoryList:any;
	public data_ShopHistoryListDetail:any;
	public data_MoneyChannelInfo:any;
	public data_MyHuiYuanInfo:any;
	public data_ShopHistoryGoInfoList:any;
	public data_SerachShopGoInfoList:any;
	public _selGukeIdx = 0;

	public _addstate = 0;
	public _addbillnumber = "";

	public constructor() {
		super();
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetShopInfo, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetCanWorkerList, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetThisWorkerOrderList, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_MakeShop, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetMakeShopInfo, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_DelShopItem, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_DelAddItem, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_MakeOrder, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_AddShopFor, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_newShopMake, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_BackToShoping, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_CheckOrderBills, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetHistoryShopInfo, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_RequestMoneyChannel, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_AskMoneyChannel, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_BindTeleVerifySendCode, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_RequestHuiYuanPayInfo, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_FreshOrderList, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetHistoryGoInfo, this.SendMessageEvent, this);
		sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_SerachCompanyGoInfo, this.SendMessageEvent, this);
		
		
	}
	public static ins(): ShopPageManage {
		return super.ins()
	}
	public getServiceItemBySid(sid):any{
		let sary:any[] = this.data_ShopInfoItem;
		for(var i=0; i<sary.length; i++){
			if(sary[i].id == sid)
			{
				return sary[i];
			}
		}
	}
	private SendMessageEvent(json:any) {
		EventCenter.Instance.dispatchEvent(new DataTransEvent(json.msg, json));             	
    }
	//所选技师以往项目时间是否重叠
	public _ifWorkerItemTimeisOverEachOther(tm):number{
		let knarray = this.data_ThisWorkerItemList;
		var ret = 0;
		for (var i = 0; i < knarray.length; i++) {
			let wm1 = knarray[i];
			let find = 0;
			let sitem = this.getServiceItemBySid(wm1.sid);
			let tml = sitem.timelong*60*1000;
			let wt1 = new Date(wm1.waittime);
			let nowtime = new Date().getTime();
			let num = wm1.clocknumyy;
			if(num == null){
				num = 1;
			}
			let ytm = wt1.getTime() + num*sitem.timelong*60*1000;
			if(wm1.workstate >= WaiterStateUtil.SST_SZ_MIN && wm1.workstate < WaiterStateUtil.SST_FW_FINISH)
			{
				let mms = (nowtime - wt1.getTime())/(60*1000)
				let hmms = mms % 60;
				if( hmms > 10  ){
					let hhs = Math.floor(mms/60) + 1;
					ytm = wt1.getTime() + hhs*60*60*1000;
				}else{
					ytm = nowtime;
				}
				
			}
			let nowytm = new Date(ytm);

			if(tm.time > wt1.getTime() && tm.time < ytm )
			{
				ret = 1;
			}
			
			let fnow = tm.time + tm.num * sitem.timelong*60*1000;
			if(fnow > wt1.getTime() && fnow < ytm )
			{
				ret = 2;
			}
			if(wt1.getTime() > tm.time && wt1.getTime()<fnow){
				ret = 3;
			}
		}
		return ret;
	}

	//所选技师本次项目时间是否重叠
	public _ifWorkerItemTimeisOverEachOtherOnThisShop(tm, hid):number{
		var ret = 0;
		let knarray = this.data_ShopMakeList;
		for (var i = 0; i < knarray.length; i++) {
			let wm1 = knarray[i];
			if(wm1.hid <= 0){
				continue;
			}
			if(wm1.hid != hid){
				continue;
			}

			let find = 0;
			let sitem = this.getServiceItemBySid(wm1.sid);
			let tml = sitem.timelong*60*1000;
			let wt1 = new Date(wm1.waittime);
			let nowtime = new Date().getTime();
			let num = wm1.clocknumyy;
			if(num == null){
				num = 1;
			}
			let ytm = wt1.getTime() + num*sitem.timelong*60*1000;
			if(wm1.workstate >= WaiterStateUtil.SST_SZ_MIN && wm1.workstate < WaiterStateUtil.SST_FW_FINISH)
			{
				let mms = (nowtime - wt1.getTime())/(60*1000)
				let hmms = mms % 60;
				if( hmms > 10  ){
					let hhs = Math.floor(mms/60) + 1;
					ytm = wt1.getTime() + hhs*60*60*1000;
				}else{
					ytm = nowtime;
				}
				
			}
			let nowytm = new Date(ytm);

			if(tm.time > wt1.getTime() && tm.time < ytm )
			{
				ret = 1;
			}
			
			let fnow = tm.time + tm.num * sitem.timelong*60*1000;
			if(fnow > wt1.getTime() && fnow < ytm )
			{
				ret = 2;
			}
			if(wt1.getTime() > tm.time && wt1.getTime()<fnow){
				ret = 3;
			}
		}
		return ret;
	}

	//项目时间是否重叠
	public _ifGukeItemTimeisOverEachOther(tm):number{
		
		let knarray = this.data_ShopMakeList;
		for (var i = 0; i < knarray.length; i++) {
			let wm1 = knarray[i];
			if(wm1.gukeidx != this._selGukeIdx){
				continue;
			}
			let find = 0;
			let sitem = this.getServiceItemBySid(wm1.sid);
			let tml = sitem.timelong*60*1000;
			let wt1 = new Date(wm1.waittime);
			let nowtime = new Date().getTime();
			let num = wm1.clocknumyy;
			if(num == null){
				num = 1;
			}
			let ytm = wt1.getTime() + num*sitem.timelong*60*1000;
			if(wm1.workstate >= WaiterStateUtil.SST_SZ_MIN && wm1.workstate < WaiterStateUtil.SST_FW_FINISH)
			{
				let mms = (nowtime - wt1.getTime())/(60*1000)
				let hmms = mms % 60;
				if( hmms > 10  ){
					let hhs = Math.floor(mms/60) + 1;
					ytm = wt1.getTime() + hhs*60*60*1000;
				}else{
					ytm = nowtime;
				}
				
			}
			let nowytm = new Date(ytm);

			if(tm.time > wt1.getTime() && tm.time < ytm )
			{
				return 1;
			}
			
			let fnow = tm.time + tm.num * sitem.timelong*60*1000;
			if(fnow > wt1.getTime() && fnow < ytm )
			{
				return 2;
			}
			if(wt1.getTime() > tm.time && wt1.getTime()<fnow){
				return 3;
			}
		}

		return 0;
	}

}