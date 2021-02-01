class ShopSerchForCompanyOnSerachPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_GAME_MAP;
	/**
     * 输入
     */
	protected scrollMy: eui.Scroller;
	protected listorder: eui.List;
	private btn_back:eui.Button;
	private _closefunc:any;
	private _closeobj:any;
	private _closeparent = 1;
	public constructor() {
		super();
		this.skinName = "ShopSerchForCompanyOnSerach";	
	}

	protected childrenCreated(){

		this._AddClick(this.btn_back, this._OnClick);

    }

	OnOpen(...param: any[]) {
		this._closefunc = param[0];
		this._closeobj = param[1];
		this.onList_wait_Update();
	}

	OnClose() {
		if(this._closeparent == 1){
			this._closefunc.call(this._closeobj);
		}
		
	};
	

	private onList_wait_Update(){
				
		let knarray: any[] = ShopPageManage.ins().data_SerachShopGoInfoList;
		if(knarray.length <= 0)
		{
			return;
		}

		let mArr: any[] = [];
	
        for (var i = 0; i < knarray.length; i++) {
			let kenvo: any = knarray[i];
			mArr.push({idx:i, d:kenvo, closefunc:this.CloseSelf, closeobj:this});    
        }

		

        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listorder.dataProvider = mCollection;
        this.listorder.itemRenderer = ListShopSerchForCompanyOnSerachItem;
        this.listorder.validateNow();
	}

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			 case this.btn_back:
			 	this._closeparent = 0;
				this.CloseSelf();
			 break;  
		}
	}
}


class ListShopSerchForCompanyOnSerachItem extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////
    // BtnTable6Skin.exml
    /////////////////////////////////////////////////////////////////////////////
	protected group_companypic:eui.Group;
	protected lab_company:eui.Label;
	protected lab_adress:eui.Label;

    /////////////////////////////////////////////////////////////////////////////

    createChildren() {
        super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
    }

    protected _on_tap_this(event: egret.TouchEvent) {
		GameGlobal.CurrentCompany = this.data.d.ofcompany;
		ViewManager.ins().open(ShopAskNumPanel);
		this.data.closefunc.call(this.data.closeobj);
    }
	
	

    dataChanged() {
	 
	  let kenvo: any = this.data.d;
	  let sn:string = decodeURI(kenvo.ofcname);
	  if(sn.length > 12 ){
		  sn = sn.substr(0, 11)+"..."
	  }
	  this.lab_company.text = sn;
      this.lab_adress.text = kenvo.ofadress;

	  sproto.sprotoRequest.loadURLImgOnThisDress(kenvo.ofheadpic, function(event:egret.Event){
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

    public doSomeChange() {

    }
	private onRemove(){	
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
	}
}
