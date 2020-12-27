class ShopServingBillListPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_Popup;
	/**
     * 输入
     */
	protected scrollMy: eui.Scroller;
	protected listorder: eui.List;
	private _btn_goshop:eui.Button;
	

	public constructor() {
		super();
		this.skinName = "ShopHistoryBillListSkin";	
	}

	protected childrenCreated(){

		this._AddClick(this._btn_goshop, this._OnClick);

    }

	OnOpen() {
		var comanyname = GameGlobal.CurrentCompany;
		var cmpany = {
			name:comanyname
		};	
		var rurl = FuncUrlUtil.ShopInfo_GetHistoryShopInfo;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);

		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfo, this.onServerEventData, this);
	}

	OnClose() {
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfo, this.onServerEventData, this);
	};

	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			case FuncUrlUtil.ShopInfo_GetHistoryShopInfo:			
				ShopPageManage.ins().data_ShopHistoryList = json.obj;
				this.onList_wait_Update();
			break; 

			 
		}
	}
	private onList_wait_Update(){
				
		let knarray: any[] = ShopPageManage.ins().data_ShopHistoryList;
		if(knarray.length <= 0)
		{
			return;
		}

		let mArr: any[] = [];

		let wArr: any[] = [];
		wArr.push(knarray[0]);
		let idx = 0;		
        for (var i = 0; i < knarray.length; i++) {
			let kenvo: any = knarray[i];
			if(kenvo.billnumber != wArr[0].billnumber){
				mArr.push({idx:idx, d:wArr});
				wArr = [];
				wArr.push(kenvo);
				idx ++;
			}else{
				wArr.push(kenvo);
			}
            
        }
		mArr.push({idx:idx, d:wArr});

        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listorder.dataProvider = mCollection;
        this.listorder.itemRenderer = listHistoryBillInfoItem;
        this.listorder.validateNow();
	}

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			 case this._btn_goshop:
				this.CloseSelf();
			 break;  
		}
	}
}


class listHistoryBillInfoItem extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////
    // BtnTable6Skin.exml
    /////////////////////////////////////////////////////////////////////////////
	protected lab_itemcompany:eui.Label;
	protected lab_itemstate:eui.Label;
	protected lab_itemprice:eui.Label;
	protected lab_servname:eui.Label;
	protected lab_itemnum:eui.Label;
	protected pic_item:eui.Image;
	protected _btn_likethisagin:eui.Button;
    /////////////////////////////////////////////////////////////////////////////

    createChildren() {
        super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
		this._btn_likethisagin.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_order_again, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
    }
	protected _on_order_again(event: egret.TouchEvent) {
		
    }
    protected _on_tap_this(event: egret.TouchEvent) {
		ViewManager.ins().open(ShopServingBillDetialPanel,this.data.d);
    }
	
	

    dataChanged() {
	  let knarray: any[] = this.data.d;
	  if(knarray.length <= 0)
	  {
		return;
	  }
	  let kenvo: any = knarray[0];
	  this.lab_itemcompany.text = kenvo.company;
	  if(kenvo.workstate == 2)
	  {
		  this.lab_itemstate.text = "进行中...";
		  this.lab_itemstate.textColor = 0x7BB22C;
	  }else{
		  this.lab_itemstate.text = "已完成";
		  this.lab_itemstate.textColor = 0x757575;
	  }
      var strname = kenvo.sname;
	  var oldstr = strname;
	   for (var i = 1; i < knarray.length; i++) {
			var k: any = knarray[i];
			if(oldstr != k.sname){
				strname+="+"+k.sname;
				oldstr = k.sname;
			}
			
	   }
	   if(strname.length > 12){
		   strname = strname.substring(0,12) +"...";
	   }
	  this.lab_servname.text = strname;
      this.lab_itemnum.text = "共 "+knarray.length+" 项";
	  this.lab_itemprice.text = kenvo.paynum;
    }

    public doSomeChange() {

    }
	private onRemove(){	
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this._btn_likethisagin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_order_again, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
	}
}