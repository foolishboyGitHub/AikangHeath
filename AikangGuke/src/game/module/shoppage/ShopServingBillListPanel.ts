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
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfo, this.onServerEventData, this);
		
		this.gethistoryinfo();
	}

	OnClose() {
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfo, this.onServerEventData, this);
	};
	public gethistoryinfo(){
		var comanyname = GameGlobal.CurrentCompany;
		var cmpany = {
			name:comanyname
		};	
		var rurl = FuncUrlUtil.ShopInfo_GetHistoryShopInfo;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);

		
	}
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
        for (var i = 1; i < knarray.length; i++) {
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
		if(wArr.length>0){
			mArr.push({idx:idx, d:wArr});
		}
		

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
	protected listorder:eui.List;
	protected group_companypic:eui.Group;
	protected lab_itemcompany:eui.Label;
	protected lab_itemstate:eui.Label;
	protected lab_itemprice:eui.Label;
	protected lab_servname:eui.Label;
	protected lab_itemnum:eui.Label;
	protected pic_item:eui.Image;
	protected _btn_likethisagin:eui.Button;
	protected _point = {x:0,y:0};
    /////////////////////////////////////////////////////////////////////////////

    createChildren() {
        super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this._on_touch_begin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this._on_touch_end,this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
		this._btn_likethisagin.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_order_again, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
    }
	protected _on_touch_begin(e: egret.TouchEvent){

		var point = {x:e.stageX, y:e.stageY}
		this._point = point;
	}
	protected _on_touch_end(e: egret.TouchEvent){
		var point = {x:e.stageX, y:e.stageY}
		if(Math.abs(this._point.x - point.x) <=10 && Math.abs(this._point.y - point.y) <=10){
			ViewManager.ins().open(ShopServingBillDetialPanel,this.data.d);
		}
		
	}
	protected _on_order_again(event: egret.TouchEvent) {
		
    }
    protected _on_tap_this(event: egret.TouchEvent) {
		
    }
	
	

    dataChanged() {
	  let knarray: any[] = this.data.d;
	  if(knarray.length <= 0)
	  {
		return;
	  }
	  this.lab_itemstate.text = "已完成"
	  let kenvo: any = knarray[0];
	  let sn:string = decodeURI(kenvo.cmcname);
	  if(sn.length > 12 ){
		  sn = sn.substr(0, 11)+"..."
	  }
	  this.lab_itemcompany.text = sn;
	  var money = 0;
	  for(var i=0; i<knarray.length; i++){
		  money += knarray[i].money;
	  }
	  this.lab_itemprice.text = ""+money;
	  this.lab_itemnum.text = "共 "+knarray.length +" 项";
      

	  sproto.sprotoRequest.loadURLImgOnThisDress(kenvo.cpic, function(event:egret.Event){
			var loader:egret.URLLoader = <egret.URLLoader>event.target;
			//获取加载到的纹理对象
			var texture:egret.Texture = <egret.Texture>loader.data;
			let bitmap = new egret.Bitmap(texture);
			bitmap.width= this.group_companypic.width;
			bitmap.height = this.group_companypic.height;
			this.group_companypic.addChild(bitmap);
		},
		this);

		let mArr: any[] = [];
		for(var i=0; i<knarray.length; i++){
			let kenvo: any = knarray[i];
			mArr.push({idx:i, d:kenvo});

		}
	    
        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listorder.dataProvider = mCollection;
        this.listorder.itemRenderer = listHistoryBillInfoItemChild;
        this.listorder.validateNow();
		
    }

    public doSomeChange() {

    }
	private onRemove(){	
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this._btn_likethisagin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_order_again, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
	}
}

class listHistoryBillInfoItemChild extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////
    // BtnTable6Skin.exml
    /////////////////////////////////////////////////////////////////////////////

	protected group_img:eui.Group;
	protected lab_name:eui.Label;
	
    /////////////////////////////////////////////////////////////////////////////

    createChildren() {
        super.childrenCreated();
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
    }
	protected _on_order_again(event: egret.TouchEvent) {
		
    }

	

    dataChanged() {
	  let kenvo = this.data.d;
	  let sn:string = kenvo.sname;
	  if(sn.length > 7 ){
		  sn = sn.substr(0, 6)+"..."
	  }
	  this.lab_name.text = sn;

	  sproto.sprotoRequest.loadURLImgOnThisDress(kenvo.spic, function(event:egret.Event){
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
}