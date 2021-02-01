class ShopServingBillDetialPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_Popup;
	/**
     * 输入
     */
    protected lab_orderstate: eui.Label;
	protected scrollMy: eui.Scroller;
	protected listGuke:eui.List;
	
	protected group_shoplist: eui.Group;
	protected group_buttoninfo: eui.Group;

	protected _showmore:boolean = false;

    protected _btn_goback:eui.Button;
	protected _btn_showmore:eui.Button;
	protected _btn_showless:eui.Button;

    private _data;
	public constructor() {
		super();
		this.skinName = "ShopHistoryBillListIDetailSkin";	
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
        this._AddClick(this._btn_goback, this._OnClick);
    }

	OnOpen(...param: any[]) {
		
        this._data = param[0];
		if(!this._data){
			WarnWin.show("数据异常 data_systemrole 为空",null, this);
			this.CloseSelf();
			return;
		}
		let knarray: Array<any> = this._data;
        if(knarray.length <= 0){
            return;
        }
        let kenvo = knarray[0];
		this.gethistoryinfoDetail(kenvo);

		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail, this.onServerEventData, this);
		EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, this.onShowSelGuke, this);
		EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew, this.onAddNewShop, this);

		this.scrollMy.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
	}

	OnClose() {
		this.scrollMy.removeEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
		EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, this.onShowSelGuke, this);
		EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew, this.onAddNewShop, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail, this.onServerEventData, this);
		
	};
	public gethistoryinfoDetail(kenvo){
		var comanyname = GameGlobal.CurrentCompany;
		var cmpany = {
			name:comanyname,
			bill:kenvo.billnumber
		};	
		var rurl = FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);

		
	}
	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			case FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail:			
				ShopPageManage.ins().data_ShopHistoryListDetail = json.obj;
				this.setShopInfoList();
			break; 

			 
		}
	}
	public setShopInfoList(){
		let knarray: Array<any> = ShopPageManage.ins().data_ShopHistoryListDetail;

        if(knarray.length <= 0){
            return;
        }
		let gukenum = 0;
        if(knarray[0].workstate <= 2){
            this.lab_orderstate.text = "订单进行中...";
            this.lab_orderstate.textColor = 0x64A325;
        }else{
            this.lab_orderstate.text = "订单已完成>";
            this.lab_orderstate.textColor = 0x353535;
        }
        
		for (var i = 0; i < knarray.length; i++) {
			let kenvo: any = knarray[i];
			if(kenvo.gukenum > gukenum){
				gukenum = kenvo.gukenum;
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
        this.listGuke.itemRenderer = listShopHistoryDetalInfoItem;
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
            case this._btn_goback:
				this.CloseSelf();
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
			(this.listGuke.$indexToRenderer[i] as listShopHistoryDetalInfoItem).doSomeChange();
		}
	}
	private onShowSelGuke(){
		this.onScrollerChange();
	}
	private onAddNewShop(){
		this._on_hide();
	}
}

class listShopHistoryDetalInfoItem extends eui.ItemRenderer {

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
		this._btn_addnew.visible = false;
    }
    protected _on_thisTap(event: egret.TouchEvent) {
		if(ShopPageManage.ins()._selGukeIdx != this.data.idx){
			ShopPageManage.ins()._selGukeIdx = this.data.idx;
			EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, null));
		}
    }

    dataChanged() {
        
		this.setData();
    }
	public setData(){
		let data = this.data;

		this._radio_sevidx.label = "" + data.title;
		

		let mArr: any[] = [];
        let knarray: Array<any> = data.d;
        for (var i = 0; i < knarray.length; i++) {
            let kenvo: any = knarray[i];
			if(kenvo.d.sid>0)
				mArr.push({idx:i, d:kenvo.d, allnum:knarray.length});
			this.lab_waitestate.text = ""
			
        }
        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listShopGukeIdx.dataProvider = mCollection;
        this.listShopGukeIdx.itemRenderer = listGukeHistroyDetailIdxItem;
		this.setRectSize();
	}
	private setView(){
		let data = this.data;

		this._radio_sevidx.label = "" + data.title;
		

        let knarray: Array<any> = data.d;
        for (var i = 0; i < knarray.length; i++) {
            let kenvo: any = knarray[i];

			this.lab_waitestate.text = ""
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
			(this.listShopGukeIdx.$indexToRenderer[i] as listGukeHistroyDetailIdxItem).doSomeChange();
		}
    }
	private onRemove(){
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);		
	}
}

class listGukeHistroyDetailIdxItem extends eui.ItemRenderer {

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
		this._btn_del.visible = false;
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
	
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
		this.lab_itemprice.text = "" + sitem.price * data.d.clocknumyy;
		let wdate = new Date(data.d.waittime);
		this.lab_waitetime.text = this.formatTime_lab(wdate);
		this.lab_num.text = data.d.clocknumyy+"个";
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