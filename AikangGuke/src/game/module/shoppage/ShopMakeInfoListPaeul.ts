class ShopMakeInfoListPaeul   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_Main;
	/**
     * 输入
     */
	protected scrollMy: eui.Scroller;
	protected listGuke:eui.List;
	protected rect_bake_all:eui.Rect;
	protected group_shoplist: eui.Group;


	public constructor() {
		super();
		this.skinName = "ShopMakeInfoListSkin";	
	}

	protected childrenCreated(){
		this.visible = false;
    }

	OnOpen() {
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_DelShopItem, this.onServerEventData, this);
		EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_ShowState_SelGuke, this.onShowSelGuke, this);
		EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_MakeShop_AddNew, this.onAddNewShop, this);


		this.scrollMy.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
	}

	OnClose() {
		this.scrollMy.removeEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_DelShopItem, this.onServerEventData, this);
		EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_ShowState_SelGuke, this.onShowSelGuke, this);
		EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_MakeShop_AddNew, this.onAddNewShop, this);
	};
	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			case FuncUrlUtil.ShopInfo_DelShopItem:			
				ShopPageManage.ins().data_ShopMakeList = json.obj;
				this.setShopInfoList();
			break; 
			 
		}
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
			if(kenvo.gukenum > gukenum){
				gukenum = kenvo.gukenum;
			}
		}


		let mArr: any[] = [];

		for(var i=0; i<gukenum; i++){
			let wArr: any[] = [];
			for (var s = 0; s < knarray.length; s++) {
				let kenvo: any = knarray[s];
				if(kenvo.gukeidx == i){
					wArr.push({idx:s, d:kenvo});
				}
			}
			var t="第 "+i+" 位同伴"
			if(i==0){
				t="我自己";
			}
			mArr.push({idx:i, title:t, d:wArr});
		}
		let lh = this.scrollMy.viewport.scrollV;
        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listGuke.dataProvider = mCollection;
        this.listGuke.itemRenderer = listShopMakeInfoItem;
        this.listGuke.validateNow();
		this.scrollMy.viewport.scrollV = lh;
		

	}

	public _on_Show(){
		this.visible = true;
		if(this.scrollMy.height > 850){
			this.scrollMy.height = 850;
		}
		var gh = this.scrollMy.height + 50+180;
		this.group_shoplist.height = 0;
		var tw = egret.Tween.get(  this.group_shoplist );
		tw.to( {height:gh}, 30 );
		this.rect_bake_all.alpha = 1;
		this.onScrollerChange();
	}
	public _on_hide(){
		var tw = egret.Tween.get(  this.group_shoplist );
		tw.to( {height:0}, 50 ).call(
			function(){
				this.visible = false;
			},
			this
		);
		var tw1 = egret.Tween.get(  this.rect_bake_all );
		tw1.to( {alpha:0}, 50 );
		
	}

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {


  
		}
	}

	/**
	 * 滚动位置改变的时候
	 */
	private onScrollerChange() {
		for (var i = 0; i < this.listGuke.$indexToRenderer.length; i++) {
			if(!this.listGuke.$indexToRenderer[i])
				continue;
			(this.listGuke.$indexToRenderer[i] as listShopMakeInfoItem).doSomeChange();
		}
	}

	private onShowSelGuke(){
		this.onScrollerChange();
	}

	private onAddNewShop(){
		this._on_hide();
	}
}

class listShopMakeInfoItem extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////
	protected listShopGukeIdx:eui.List;
	protected _radio_sevidx:eui.RadioButton;
	protected group_addNew:eui.Group;
	protected rect_back1:eui.Rect;
	protected rect_back2:eui.Rect;
	protected rect_back3:eui.Rect;
	protected _btn_addnew:eui.Button;
    createChildren() {
        super.childrenCreated();
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);
		this._btn_addnew.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_AddNewTap, this);
    }
    protected _on_thisTap(event: egret.TouchEvent) {
		if(ShopPageManage.ins()._selGukeIdx != this.data.idx){
			ShopPageManage.ins()._selGukeIdx = this.data.idx;
			EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_ShowState_SelGuke, null));
		}
    }
	protected _on_AddNewTap(event: egret.TouchEvent) {
		EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_AddNew, null));
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
        }
        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listShopGukeIdx.dataProvider = mCollection;
        this.listShopGukeIdx.itemRenderer = listGukeIdxItem;
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
    public doSomeChange() {
		this.setData();
		for (var i = 0; i < this.listShopGukeIdx.$indexToRenderer.length; i++) {
			if(!this.listShopGukeIdx.$indexToRenderer[i])
				continue;
			(this.listShopGukeIdx.$indexToRenderer[i] as listGukeIdxItem).doSomeChange();
		}
    }
	private onRemove(){
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);
		this._btn_addnew.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_AddNewTap, this);
	}
}

class listGukeIdxItem extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////
	protected pic_item: eui.Image;
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
		var rurl = FuncUrlUtil.ShopInfo_DelShopItem;
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
		this.lab_itemprice.text = "" + sitem.price * data.d.clocknumyy;
		let wdate = new Date(data.d.waittime);
		this.lab_waitetime.text = this.formatTime_lab(wdate);
		this.lab_num.text = data.d.clocknumyy+"个";
		this._btn_del.visible = false;
		if(data.idx >= data.allnum -1){
			this._btn_del.visible = true;//按顺序删除
		}
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