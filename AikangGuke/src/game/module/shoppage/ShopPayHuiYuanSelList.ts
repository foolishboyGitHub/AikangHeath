class ShopPayHuiYuanSelList  extends BaseEuiView {

	public static LAYER_LEVEL = LayerManager.UI_Main_1;

	protected scrollMy_h: eui.Scroller;
	protected listItem_h: eui.List;


	protected _btn_addnew:eui.Button;
	protected _btn_back:eui.Button;

	protected _payinfo;
	public constructor() {
		super();
		this.skinName = "ShopPayHuiYuanSelListSkin";
	}

	public OnOpen(...param: any[]) {
		

		this._AddClick(this._btn_addnew, this._OnClick);
		this._AddClick(this._btn_back, this._OnClick);
	
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay, this.onServerEventData, this);
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay, this.onServerEventData, this);
		
		this.listItem_h.addEventListener(egret.Event.CHANGE, this._onWItemChange, this);
		this.listItem_h.addEventListener(egret.TouchEvent.TOUCH_END, this._List_w_touchend, this);
	
		this.onListUpdate();

	}
	

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {
			case this._btn_back:
				this.CloseSelf();
			break;
			case this._btn_addnew:
				WarnWin.show("本店暂不支持自助办理会员！",null,null);
			break;

		}
	}
	OnClose() {
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay, this.onServerEventData, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay, this.onServerEventData, this);
		this.listItem_h.removeEventListener(egret.Event.CHANGE, this._onWItemChange, this);
		this.listItem_h.removeEventListener(egret.TouchEvent.TOUCH_END, this._List_w_touchend, this);
	};
	private onEventData(e:DataTransEvent) {
		
    }
	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {

			case FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay:			
				var info = json.obj;
				this._payinfo = info;
				WariSelHuiYuanPayWin.show(info, this.suretopay, this);
			break;
			case FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay:
				var data= json.obj;
				if(data.suc == "ok"){
					ShopPageManage.ins().data_ShopMakeList = data.rl;
					WarnWin.show("付款成功！",null,null);
					EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, null));
					EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopPay_Close_Sel_MoneyChanel_panel, null));				
					this.CloseSelf();
				}			
								
			break;   	
		}
	}
	private onListUpdate(){
		
		var json = ShopPageManage.ins().data_MyHuiYuanInfo;
		let mArr: any[] = [];
        let knarray: Array<any> = json;
        for (var i = 0; i < knarray.length; i++) {
            let kenvo: any = knarray[i];
			mArr.push({idx:kenvo.id, d:kenvo, closefunc:this.CloseSelf, closeobj:this});
        }
        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listItem_h.dataProvider = mCollection;
        this.listItem_h.itemRenderer = lisPaytHuiYuanListItem;
        this.listItem_h.validateNow();

	
	}
	private suretopay(){
		let data = ShopPageManage.ins().data_ShopMakeList;
		var order = {
			company:GameGlobal.CurrentCompany,
			billnumber: data[0].billnumber,
			hid:this._payinfo.hy.id
		}

		var rurl = FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
			
	}
	private _onWItemChange(e:DataTransEvent) {
		for (var i = 0; i < this.listItem_h.$indexToRenderer.length; i++) {
			if(!this.listItem_h.$indexToRenderer[i])
				continue;
			(this.listItem_h.$indexToRenderer[i] as lisPaytHuiYuanListItem).doSomeChange();
		}
    }
	private _List_w_touchend(e:egret.TouchEvent){

		for (var i = 0; i < this.listItem_h.$indexToRenderer.length; i++) {
			if(!this.listItem_h.$indexToRenderer[i])
				continue;
			(this.listItem_h.$indexToRenderer[i] as lisPaytHuiYuanListItem).doSomeChange();
		}
	}
}


class lisPaytHuiYuanListItem extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////
    // BtnTable6Skin.exml
    /////////////////////////////////////////////////////////////////////////////
	protected _rect_back:eui.Rect;
	protected lab_typename:eui.Label;
	protected lab_cardid:eui.Label;
	protected lab_disgrate:eui.Label;
	protected lab_summoney:eui.Label;	
	protected lab_remoney:eui.Label;
	protected lab_savepoint:eui.Label;
	
	protected _back_color:number;
    /////////////////////////////////////////////////////////////////////////////

    createChildren() {
        super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
    }
	protected _on_tap_this(event: egret.TouchEvent) {
		let data = ShopPageManage.ins().data_ShopMakeList;
		var order = {
			company:GameGlobal.CurrentCompany,
			billnumber: data[0].billnumber,
			hid:this.data.d.id
		}

		var rurl = FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
		
		// this.data.closefunc.call(this.data.closeobj);
    }


    dataChanged() {
        let data = this.data;
		this.lab_cardid.text = data.d.cardid;
		if(parseInt(data.d.rmoney)){
			this.lab_remoney.text = Number(data.d.rmoney).toFixed(1) + "";
		}else{
			this.lab_remoney.text = Number(data.d.rmoney).toFixed(1) + "";
		}
		if(data.d.disrate >=1 ){
			this.lab_disgrate.text = "无";
		}else{
			this.lab_disgrate.text = Number(data.d.disrate*10) + " 折";
		}
		this.lab_summoney.text = data.d.summoney;
		this.lab_savepoint.text = data.d.savepoint;
		this.lab_typename.text = data.d.typecname;
    }

    public doSomeChange() {

    }
	private onRemove(){
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
	}
}