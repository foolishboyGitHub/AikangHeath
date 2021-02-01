class ShopMyHuiYuanPanel  extends BaseEuiView {

	public static LAYER_LEVEL = LayerManager.UI_Main;

	protected scrollMy_h: eui.Scroller;
	protected listItem_h: eui.List;


	protected _btn_addnew:eui.Button;
	protected lab_companyname:eui.Label;

	public constructor() {
		super();
		this.skinName = "ShopHuiYuanPanel";
	}

	public OnOpen(...param: any[]) {
		

		this._AddClick(this._btn_addnew, this._OnClick);
	
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo, this.onServerEventData, this);
		
		this.listItem_h.addEventListener(egret.Event.CHANGE, this._onWItemChange, this);
		this.listItem_h.addEventListener(egret.TouchEvent.TOUCH_END, this._List_w_touchend, this);
	
		

	}
	

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {
			case this._btn_addnew:
				WarnWin.show("本店暂不支持自助办理会员！",null,null);
			break;

		}
	}
	public QueryHuiYuanInfo(){		
		var company = {
            name:GameGlobal.CurrentCompany
        };	
		var rurl = FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(company), rurl);
	}
	OnClose() {
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo, this.onServerEventData, this);
		this.listItem_h.addEventListener(egret.Event.CHANGE, this._onWItemChange, this);
		this.listItem_h.removeEventListener(egret.TouchEvent.TOUCH_END, this._List_w_touchend, this);
	};
	private onEventData(e:DataTransEvent) {
		
    }
	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {

			case FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo:			
				this.setHuiyuanInfo(json);
			break;  	
		}
	}
	private setHuiyuanInfo(json){
		var data = json.obj;
		if(data.msg =="needbind"){
			ViewManager.ins().open(ShopHuiYuanNedPhoneNumberPanel);
			return;
		}
		ShopPageManage.ins().data_MyHuiYuanInfo = data.hl;
		this.onListUpdate();
	}
	private onListUpdate(){
		
		var json = ShopPageManage.ins().data_MyHuiYuanInfo;
		let mArr: any[] = [];
        let knarray: Array<any> = json;
        for (var i = 0; i < knarray.length; i++) {
            let kenvo: any = knarray[i];
			// if(i==0)
			{
				this.lab_companyname.text = decodeURI(kenvo.companycname);
			}
			mArr.push({idx:kenvo.id, d:kenvo});
        }
        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listItem_h.dataProvider = mCollection;
        this.listItem_h.itemRenderer = listHuiYuanListItem;
        this.listItem_h.validateNow();

	
	}
	private on_btn_sure(){
		
			
	}
	private _onWItemChange(e:DataTransEvent) {
		for (var i = 0; i < this.listItem_h.$indexToRenderer.length; i++) {
			if(!this.listItem_h.$indexToRenderer[i])
				continue;
			(this.listItem_h.$indexToRenderer[i] as listHuiYuanListItem).doSomeChange();
		}
    }
	private _List_w_touchend(e:egret.TouchEvent){

		for (var i = 0; i < this.listItem_h.$indexToRenderer.length; i++) {
			if(!this.listItem_h.$indexToRenderer[i])
				continue;
			(this.listItem_h.$indexToRenderer[i] as listHuiYuanListItem).doSomeChange();
		}
	}
}


class listHuiYuanListItem extends eui.ItemRenderer {

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
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
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
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
	}
}