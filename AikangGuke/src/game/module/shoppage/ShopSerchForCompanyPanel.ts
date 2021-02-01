class ShopSerchForCompanyPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_GAME_MAP;
	/**
     * 输入
     */
	protected scrollMy: eui.Scroller;
	protected listorder: eui.List;
	private btn_serach:eui.Button;
	protected elab_serach:eui.EditableText;
	protected lab_guessyou:eui.Label;
	public constructor() {
		super();
		this.skinName = "ShopSerchForCompany";	
	}

	protected childrenCreated(){

		this._AddClick(this.btn_serach, this._OnClick);

    }

	OnOpen() {
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetHistoryGoInfo, this.onServerEventData, this);
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_SerachCompanyGoInfo, this.onServerEventData, this);
		this.elab_serach.addEventListener(egret.FocusEvent.FOCUS_OUT, this.onFocusOut, this);
        this.elab_serach.addEventListener(egret.FocusEvent.FOCUS_IN, this.onSearchInput, this);
        this.elab_serach.addEventListener(egret.Event.CHANGE, this.onChange, this);
		this.gethistoryGoInfo();
	}

	OnClose() {
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetHistoryGoInfo, this.onServerEventData, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_SerachCompanyGoInfo, this.onServerEventData, this);
		this.elab_serach.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.onFocusOut, this);
        this.elab_serach.removeEventListener(egret.FocusEvent.FOCUS_IN, this.onSearchInput, this);
        this.elab_serach.removeEventListener(egret.Event.CHANGE, this.onChange, this);
	};
	private onFocusOut(e:egret.FocusEvent):void{//失去焦点
		switch (e.currentTarget) {

			case this.elab_serach:
				if(this.elab_serach.text=="")
				{
					this.elab_serach.text = "门店名称，地址等...";
					this.elab_serach.textColor = 0xB5B5B5;
				}
				break;
		}
        
    }
    private onSearchInput(e:egret.FocusEvent):void{//输入
		switch (e.currentTarget) {

			case this.elab_serach:
				if(this.elab_serach.text=="门店名称，地址等...")
				{
					this.elab_serach.text = "";
					this.elab_serach.textColor = 0x0A0A0A;
				}
				break;
		}
    }
    private onChange(e:Event):void{//变化

    }
	public gethistoryGoInfo(){
		var cmpany = {
			name:""
		};	
		var rurl = FuncUrlUtil.ShopInfo_GetHistoryGoInfo;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);

		
	}
	public SerachCompanyGoInfo(){
		let key = "";
		if(this.elab_serach.text!="门店名称，地址等..."){
			key = this.elab_serach.text;
		}
		var cmpany = {
			key:key
		};	
		var rurl = FuncUrlUtil.ShopInfo_SerachCompanyGoInfo;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);

		
	}
	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			case FuncUrlUtil.ShopInfo_GetHistoryGoInfo:			
				var map = json.obj;
				if(map.msg == "like"){
					this.lab_guessyou.text = "猜你喜欢...";
				}
				ShopPageManage.ins().data_ShopHistoryGoInfoList = map.ol;
				this.onList_wait_Update();
			break; 
			case FuncUrlUtil.ShopInfo_SerachCompanyGoInfo:			
				var map = json.obj;
				ShopPageManage.ins().data_SerachShopGoInfoList = map.ol;
				ViewManager.ins().open(ShopSerchForCompanyOnSerachPanel, this.CloseSelf, this);
			break; 
			 
		}
	}
	private onList_wait_Update(){
				
		let knarray: any[] = ShopPageManage.ins().data_ShopHistoryGoInfoList;
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
        this.listorder.itemRenderer = ListShopSerchForCompanyItem;
        this.listorder.validateNow();
	}

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			 case this.btn_serach:
				this.SerachCompanyGoInfo();
			 break;  
		}
	}
}


class ListShopSerchForCompanyItem extends eui.ItemRenderer {

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
