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
	protected lab_companymobil: eui.Label;
	protected pic_companypic: eui.Image;

	protected group_companypic:eui.Group;

	

	public constructor() {
		super();
		this.skinName = "ShopPangeSkin";	
	}

	protected childrenCreated(){

		// this._AddClick(this._btn_gohistory, this._OnClick);

    }

	OnOpen() {
		this.on_setCompanyInfo();
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
	private on_setCompanyInfo(){
		var data = ShopPageManage.ins().data_CompanyInfo;
		this.lab_companyname.text = decodeURI(data.cname);
		this.lab_companydress.text = "地址："+data.adress;
		this.lab_companyphone.text = "电话："+data.sevtelephone;
		this.lab_companymobil.text = "手机："+data.sevmobilephone;
		sproto.sprotoRequest.loadURLImgOnThisDress(data.headpic, function(event:egret.Event){
			var loader:egret.URLLoader = <egret.URLLoader>event.target;
			//获取加载到的纹理对象
			var texture:egret.Texture = <egret.Texture>loader.data;
			let bitmap = new egret.Bitmap(texture);
			bitmap.width= this.group_companypic.width;
			bitmap.height = this.group_companypic.height;
			this.group_companypic.addChild(bitmap);
		},
		this);
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

			//  case this._btn_gohistory:
			//  		ViewManager.ins().open(ShopServingBillListPanel);
			//  	break;  
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
	protected group_imgshow:eui.Group;
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
	  this.lab_itemtime.text = this.data.d.timelong +"|";
	  this.lab_itemprice.text = "¥"+this.data.d.price;

	  sproto.sprotoRequest.loadURLImgOnThisDress(this.data.d.headpic, function(event:egret.Event){
			var loader:egret.URLLoader = <egret.URLLoader>event.target;
			//获取加载到的纹理对象
			var texture:egret.Texture = <egret.Texture>loader.data;
			let bitmap = new egret.Bitmap(texture);
			bitmap.width= this.group_imgshow.width;
			bitmap.height = this.group_imgshow.height;
			this.group_imgshow.addChild(bitmap);
		},
		this);
    }

    public doSomeChange() {

    }
	private onRemove(){	
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
	}
}