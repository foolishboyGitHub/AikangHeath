class ShopPagePanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_USER_INFO;
	/**
     * 输入
     */
	protected scrollMy_s: eui.Scroller;
	protected listItem_s: eui.List;
	protected lab_companyname: eui.Label;
	protected lab_companydress: eui.Label;
	protected lab_companyphone: eui.Label;
	protected pic_companypic: eui.Image;
	private _btn_gohistory:eui.Button;

	

	public constructor() {
		super();
		this.skinName = "ShopPangeSkin";	
	}

	protected childrenCreated(){

		this._AddClick(this._btn_gohistory, this._OnClick);

    }

	OnOpen() {
		
		this.onList_wait_Update();	
		ViewManager.ins().open(ShopOrderFloatingBallPanel);
	}

	OnClose() {
		
	};

	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			case FuncUrlUtil.ShopInfo_GetShopInfo:			
				
				
			break; 

			 
		}
	}
	private onList_wait_Update(){
		var json =ShopPageManage.ins().data_ShopInfoItem;

        let knarray: Array<any> = json;
		let mArr: any[] = [];

        for (var i = 0; i < knarray.length; i++) {
			let kenvo: any = knarray[i];
            mArr.push({idx:i, d:kenvo});
        }
		
        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listItem_s.dataProvider = mCollection;
        this.listItem_s.itemRenderer = listShopInfoItem;
        this.listItem_s.validateNow();
	}

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			 case this._btn_gohistory:
			 		ViewManager.ins().open(ShopServingBillListPanel);
			 	break;  
		}
	}
}


class listShopInfoItem extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////
    // BtnTable6Skin.exml
    /////////////////////////////////////////////////////////////////////////////
	protected lab_itemname:eui.Label;
	protected lab_itemtime:eui.Label;
	protected lab_itemprice:eui.Label;
	protected pic_itempic:eui.Image;
	protected _btn_detail:eui.Button;
	protected _btn_order:eui.Button;
    /////////////////////////////////////////////////////////////////////////////

    createChildren() {
        super.childrenCreated();

		this._btn_order.addEventListener(egret.TouchEvent.TOUCH_END, this._on_order, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
    }
	protected _on_order(event: egret.TouchEvent) {
		var point = {x:event.stageX, y:event.stageY}
		ViewManager.ins().open(ShopOredrPanel,this.data.d);
    }
   
	
	

    dataChanged() {
      this.lab_itemname.text = this.data.d.name;
	  this.lab_itemtime.text = this.data.d.timelong +"|养生";
	  this.lab_itemprice.text = "¥"+this.data.d.price;
    }

    public doSomeChange() {

    }
	private onRemove(){	
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
	}
}