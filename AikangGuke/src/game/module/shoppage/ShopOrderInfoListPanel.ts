class ShopOrderInfoListPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_Main;
	/**
     * 输入
     */

	protected _btn_backtoshop: eui.Button;

	protected scrollMy: eui.Scroller;
	protected listGuke:eui.List;

	protected lab_companyname:eui.Label;
	protected lab_billnumber:eui.Label;
	
	protected group_shoplist: eui.Group;
	protected group_buttoninfo: eui.Group;

	protected _showmore:boolean = false;

	protected _btn_showmore:eui.Button;
	protected _btn_showless:eui.Button;

	protected lab_codestart:eui.Label;
	protected lab_codesfinish:eui.Label;
	
	public timer:egret.Timer;

	public constructor() {
		super();
		this.skinName = "ShopMakeOrderListSkin";	
	}

	protected childrenCreated(){
		if(this._showmore == false){
			this._btn_showmore.visible = true;
			this._btn_showless.visible = false;
		}else{
			this._btn_showmore.visible = false;
			this._btn_showless.visible = true;
		}
		this._AddClick(this._btn_showmore, this._OnClick);
		this._AddClick(this._btn_showless, this._OnClick);
		this._AddClick(this._btn_backtoshop, this._OnClick);
    }

	OnOpen() {

		var data = ShopPageManage.ins().data_CompanyInfo;
		this.lab_companyname.text = "店名: " + decodeURI(data.cname);


		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_DelAddItem, this.onServerEventData, this);
		EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, this.onShowSelGuke, this);
		EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew, this.onAddNewShop, this);
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_FreshOrderList, this.onServerEventData, this);

		this.scrollMy.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this);

		this.timer = new egret.Timer(60*1000);
	
		this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
		this.timer.start();
	}

	OnClose() {
		this.scrollMy.removeEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
		EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, this.onShowSelGuke, this);
		EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew, this.onAddNewShop, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_FreshOrderList, this.onServerEventData, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_DelAddItem, this.onServerEventData, this);

		this.timer.stop();
		this.timer.removeEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
		this.timer = null;
	};
	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			case FuncUrlUtil.ShopInfo_DelAddItem:			
				ShopPageManage.ins().data_ShopMakeList = json.obj;
				EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, null));
			break;
			case FuncUrlUtil.ShopInfo_FreshOrderList:			
				ShopPageManage.ins().data_ShopMakeList = json.obj;
				EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, null));
			break;
			 
			 
		}
	}
	private timerFunc(){
		this.sendFreshOrderlist();
	}
	public sendFreshOrderlist(){
		var comanyname = GameGlobal.CurrentCompany;
		var item = {
			cname:comanyname
		};
		var rurl = FuncUrlUtil.ShopInfo_FreshOrderList;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(item), rurl);
	}
	public setShopInfoList(){
		let gukenum = 0;
		let data = ShopPageManage.ins().data_ShopMakeList;
		if(!data){
			WarnWin.show("数据异常 data_systemrole 为空",null, this);
			this.CloseSelf();
			return;
		}
		let knarray: Array<any> = data;
		for (var i = 0; i < knarray.length; i++) {
			let kenvo: any = knarray[i];
			if(i == 0){
				this.lab_billnumber.text = "订单号: " + kenvo.billnumber;
				var checkcode:string = kenvo.checkcode
				this.lab_codestart.text = ""+checkcode.substr(0,4);
				this.lab_codesfinish.text = ""+checkcode.substr(4,4);
			}
			if(kenvo.gukenum > gukenum){
				gukenum = kenvo.gukenum;
			}
			if(kenvo.workstate >= 2){
				this._btn_backtoshop.visible = false;
			}
		}
		

		let mArr: any[] = [];
		let showallnum = 0;
		for(var i=0; i<gukenum; i++){
			let wArr: any[] = [];
			for (var s = 0; s < knarray.length; s++) {
				let kenvo: any = knarray[s];
				if(kenvo.gukeidx == i){
					wArr.push({idx:s, d:kenvo});
					showallnum++;
				}
			}
			var t="第 "+i+" 位同伴"
			if(i==0){
				t="我自己";
			}
			mArr.push({idx:i, title:t, d:wArr});
			showallnum++;

			if(this._showmore == false)//只显示部分
			{
				if(showallnum > 3){
					break;
				}
			}
		}
		let lh = this.scrollMy.viewport.scrollV;
        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listGuke.dataProvider = mCollection;
        this.listGuke.itemRenderer = listShopOrderInfoItem;
        this.listGuke.validateNow();
		if(lh > this.scrollMy.viewport.height)
		{
			lh = this.scrollMy.viewport.height-500;
		}
		this.scrollMy.viewport.scrollV = lh;
		
		this.group_buttoninfo.y = this.group_shoplist.y + this.group_shoplist.height;

	}

	public _on_Show(){
		this.visible = true;
	}
	public _on_hide(){
		this.visible = false;
	}

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			case this._btn_showmore:
				this._showmore = true;
				this._btn_showmore.visible = false;
				this._btn_showless.visible = true;
				this.setShopInfoList();
			break;
			case this._btn_showless:
				this._showmore = false;
				this._btn_showmore.visible = true;
				this._btn_showless.visible = false;
				this.setShopInfoList();
			break;

			case this._btn_backtoshop:				
				var comanyname = GameGlobal.CurrentCompany;
				var item = {
					company:comanyname,
				};
				var rurl = FuncUrlUtil.ShopInfo_BackToShoping;
				sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(item), rurl);
			break;
			
  
		}
	}

	/**
	 * 滚动位置改变的时候
	 */
	private onScrollerChange() {
		for (var i = 0; i < this.listGuke.$indexToRenderer.length; i++) {
			if(!this.listGuke.$indexToRenderer[i])
				continue;
			(this.listGuke.$indexToRenderer[i] as listShopOrderInfoItem).doSomeChange();
		}
	}
	private onShowSelGuke(){
		this.onScrollerChange();
	}
	private onAddNewShop(){
		this._on_hide();
	}
}

class listShopOrderInfoItem extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////
	protected lab_waitestate:eui.Label;
	protected listShopGukeIdx:eui.List;
	protected group_addNew:eui.Group;
	protected _radio_sevidx:eui.RadioButton;
	protected rect_back1:eui.Rect;
	protected rect_back2:eui.Rect;
	protected rect_back3:eui.Rect;
	protected _btn_addnew:eui.Button;
    createChildren() {
        super.childrenCreated();
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);
		this._btn_addnew.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_AddNewTap, this);
		this._btn_addnew.visible = false;
    }
    protected _on_thisTap(event: egret.TouchEvent) {
		if(ShopPageManage.ins()._selGukeIdx != this.data.idx){
			ShopPageManage.ins()._selGukeIdx = this.data.idx;
			EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, null));
		}
    }
	protected _on_AddNewTap(event: egret.TouchEvent) {
		EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew, null));
    }
    dataChanged() {
        
		this.setData();
    }
	public setData(){
		let data = this.data;

		this._radio_sevidx.label = "" + data.title;
		

		let mArr: any[] = [];
        let knarray: Array<any> = data.d;
		let start = 0;
		let finis = 0;
        for (var i = 0; i < knarray.length; i++) {
            let kenvo: any = knarray[i];
			mArr.push({idx:i, d:kenvo.d, allnum:knarray.length});
		
			if(kenvo.d.workstate ==2){
				this._btn_addnew.visible = true;		
			}
			if(kenvo.d.waitestate>=WaiterStateUtil.SST_SZ_MIN && kenvo.d.waitestate<WaiterStateUtil.SST_FW_FINISH)
			{
				start = 1;
			}
			if(kenvo.d.waitestate>=WaiterStateUtil.SST_FW_FINISH)
			{
				finis++;
			}
        }
		if(start<0 && finis<=0){
			this.lab_waitestate.text = "等待服务中。。。";
			this.lab_waitestate.textColor = WaiterStateUtil.getStateNameColor(WaiterStateUtil.SST_YY_WAIT);
		}else if(start>0){
			this.lab_waitestate.text = "服务进行中。。。";
			this.lab_waitestate.textColor = WaiterStateUtil.getStateNameColor(WaiterStateUtil.SST_SZ_MIN);
		}else if(start<=0 && finis==knarray.length){
			this.lab_waitestate.text = "服务已完成";
			this.lab_waitestate.textColor = WaiterStateUtil.getStateNameColor(WaiterStateUtil.SST_FW_FINISH);
		}
        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listShopGukeIdx.dataProvider = mCollection;
        this.listShopGukeIdx.itemRenderer = listGukeOrderIdxItem;
		this.setRectSize();
	}
	private setView(){
		let data = this.data;

		this._radio_sevidx.label = "" + data.title;
		

        let knarray: Array<any> = data.d;
        for (var i = 0; i < knarray.length; i++) {
            let kenvo: any = knarray[i];

			if(kenvo.d.hid > 0){
				this.lab_waitestate.text = "技师正在赶来..."
				this.lab_waitestate.textColor = 0x9AD635;
			}else{
				this.lab_waitestate.textColor = 0xD83457;
				if(kenvo.d.waitestate == 1){
					this.lab_waitestate.text = "全忙！ 请稍等。"
				}
				if(kenvo.d.waitestate == 2){
					this.lab_waitestate.text = "所选等级技师全忙！ ，请稍等。"
				}
				if(kenvo.d.waitestate == 3){
					this.lab_waitestate.text = "所选等级男技师全忙！ ，请稍等。"
				}
				if(kenvo.d.waitestate == 4){
					this.lab_waitestate.text = "所选等级女技师全忙！ ，请稍等。"
				}
				if(kenvo.d.waitestate == 5){
					this.lab_waitestate.text = "未到服务开始时间！ ，请稍等。"
				}
			}
        }
		
		this.rect_back3.visible = false;
		if(knarray.length <= 0){
			this.height = 160;
			this.rect_back3.visible = true;
			this.rect_back3.height = 10;
		}else{
			this.height = 66 + knarray.length*150 + this.group_addNew.height+20;
		}
		this.group_addNew.y = this.listShopGukeIdx.y + this.listShopGukeIdx.height+20;
		
		if(ShopPageManage.ins()._selGukeIdx == data.idx){
			this._radio_sevidx.selected = true;
			this.rect_back1.strokeColor = 0xE8B610;
			this.rect_back1.strokeWeight = 5;
			this.rect_back2.strokeColor = 0xE8B610;
			this.rect_back2.strokeWeight = 5;
		}else{
			this._radio_sevidx.selected = false;
			this.rect_back1.strokeColor = 0xE8B610;
			this.rect_back1.strokeWeight = 0;
			this.rect_back2.strokeColor = 0xFFFFFF;
			this.rect_back2.strokeWeight = 0;
		}
		this.rect_back2.height = this.rect_back1.height - 60;
	}
	protected setRectSize(){
		this.rect_back3.visible = false;
		let knarray: Array<any> = this.data.d;
		if(knarray.length <= 0){
			this.height = 160;
			this.rect_back3.visible = true;
			this.rect_back3.height = 10;
		}else{
			this.height = 66 + knarray.length*150 + this.group_addNew.height+20;
		}
		this.group_addNew.y = this.listShopGukeIdx.y + this.listShopGukeIdx.height+20;
		
		if(ShopPageManage.ins()._selGukeIdx == this.data.idx){
			this._radio_sevidx.selected = true;
			this.rect_back1.strokeColor = 0x4B8789;
			this.rect_back1.strokeWeight = 5;
			this.rect_back2.strokeColor = 0x4B8789;
			this.rect_back2.strokeWeight = 5;
		}else{
			this._radio_sevidx.selected = false;
			this.rect_back1.strokeColor = 0x4B8789;
			this.rect_back1.strokeWeight = 0;
			this.rect_back2.strokeColor = 0xFFFFFF;
			this.rect_back2.strokeWeight = 0;
		}
		this.rect_back2.height = this.rect_back1.height - 60;
	}
    public doSomeChange() {
		// this.setData();
		this.setRectSize();
		for (var i = 0; i < this.listShopGukeIdx.$indexToRenderer.length; i++) {
			if(!this.listShopGukeIdx.$indexToRenderer[i])
				continue;
			(this.listShopGukeIdx.$indexToRenderer[i] as listGukeOrderIdxItem).doSomeChange();
		}
    }
	private onRemove(){
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);
		this._btn_addnew.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_AddNewTap, this);
	}
}

class listGukeOrderIdxItem extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////
	protected group_img: eui.Group;
	protected lab_itemname:eui.Label;
	protected lab_itemtime:eui.Label;
	protected lab_itemprice:eui.Label;
	protected lab_waitetime:eui.Label;
	protected lab_num:eui.Label;
	protected _btn_del:eui.Button;
    createChildren() {
        super.childrenCreated();

        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this._btn_del.addEventListener(egret.TouchEvent.TOUCH_TAP, this._delItem, this);
    }
	private _delItem(e:egret.TouchEvent){
		var comanyname = GameGlobal.CurrentCompany;
		var item = {
			cname:comanyname,
			shopid:this.data.d.id
		};
		var rurl = FuncUrlUtil.ShopInfo_DelAddItem;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(item), rurl);
	}
    dataChanged() {
        this.setData();
    }
	public setData(){
		let data = this.data;
		this.lab_itemname.text = data.d.sname;
		let sitem = ShopPageManage.ins().getServiceItemBySid(data.d.sid);

		let strwtype = "";
		if(data.d.wtype == 0){
			strwtype = "店家安排"
		}else if(data.d.wtype == 1){
			strwtype = "要男技师"
		}else if(data.d.wtype == 2){
			strwtype = "要女技师"
		}else if(data.d.wtype == 3){
			strwtype = "点钟 " + data.d.hcode +" 号技师";
		}
		let strwlev = "";
		if(data.d.wlev == 0){
			strwlev = "等级无要求";
		}else if(data.d.wlev == 1){
			strwlev = "初级技师";
		}else if(data.d.wlev == 2){
			strwlev = "中级技师";
		}else if(data.d.wlev == 3){
			strwlev = "高级技师";
		}else if(data.d.wlev == 4){
			strwlev = "特级技师";
		}else if(data.d.wlev == 5){
			strwlev = "专家坐诊";
		}
		if(data.d.wtype == 3){
			strwlev="";//点钟的话 就不要等级要求了
		}
		
		this.lab_itemtime.text = sitem.timelong+"分钟 " + strwtype + " "+strwlev ;
		this.lab_itemprice.text = ""+data.d.itembillyf;
		let wdate = new Date(data.d.waittime);
		this.lab_waitetime.text = this.formatTime_lab(wdate);
		this.lab_num.text = data.d.clocknumyy+"个";

		this._btn_del.visible = false;
		if(this.data.d.workstate==2 && this.data.d.paystate==0){
			this._btn_del.visible = true;//按顺序删除
			this._btn_del.enabled = false;
			if(data.idx >= data.allnum -1){
				this._btn_del.enabled = true;
			}
		}
		sproto.sprotoRequest.loadURLImgOnThisDress(this.data.d.headpic, function(event:egret.Event){
			var loader:egret.URLLoader = <egret.URLLoader>event.target;
			//获取加载到的纹理对象
			var texture:egret.Texture = <egret.Texture>loader.data;
			let bitmap = new egret.Bitmap(texture);
			bitmap.width= this.group_img.width;
			bitmap.height = this.group_img.height;
			this.group_img.addChild(bitmap);
		},
		this);
	}
    public doSomeChange() {
		
    }
	private onRemove(){
		this._btn_del.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._delItem, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
	}
	private  formatTime_lab(now):string{
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
		var ts = nowMonth + "月" + nowweekday + "日" + hh + "点" + mm + "分";
		return ts;
	}
}