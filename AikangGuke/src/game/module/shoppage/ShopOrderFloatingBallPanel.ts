declare function _WX_PayNavito(paramurl): any;
class ShopOrderFloatingBallPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_Main;
	/**
     * 输入
     */
	private group_shopmakelist:eui.Group;
	private _shopMakeInfoListPaeul:ShopMakeInfoListPaeul;
	private _shopOrderInfoListPaeul:ShopOrderInfoListPanel;

	private _btn_bot_left: eui.Button;
	private _btn_bot_right: eui.Button;
	
	private lab_redbot_num: eui.Label;

	private _godd = 0;
	private _paystate = 0;

	public constructor() {
		super();
		this.skinName = "ShopOrderFloatingBall";	
	}

	protected childrenCreated(){

		
		

		this._AddClick(this._btn_bot_left, this._OnClick);
		this._AddClick(this._btn_bot_right, this._OnClick);

    }

	OnOpen() {

		
		EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, this.onRedBotHit, this);	
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_MakeOrder, this.onServerEventData, this);
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_CheckOrderBills, this.onServerEventData, this);
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_BackToShoping, this.onServerEventData, this);

		this.setBotStatus();
	}

	OnClose() {
		EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, this.onRedBotHit, this);
		
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_MakeOrder, this.onServerEventData, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_CheckOrderBills, this.onServerEventData, this);
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_BackToShoping, this.onServerEventData, this);
	};
	private setBotStatus(){
		let num = 0;
		let data = ShopPageManage.ins().data_ShopMakeList;
		
		
		if(data != null){
			num = data.length;
		}
		this._godd = 0;
		if(num > 0){
			let item: any = data[0];
			this._godd = item.workstate;
			this._paystate = item.paystate;
			ShopPageManage.ins()._addstate = this._godd;
			ShopPageManage.ins()._addbillnumber = item.billnumber;
		}

		let usenum = 0;
		let knarray: any[] = data;
		for (var i = 0; i < knarray.length; i++) {
			let item: any = knarray[i];
			if(item.sid > 0){
				usenum++;
			}
		}
		
		if(this._godd <=0 )//预定阶段
		{
			
			if(usenum <= 0){
				this._btn_bot_left.enabled = false;
				this._btn_bot_right.enabled = false;
				this.lab_redbot_num.text = "";
				this._btn_bot_left.label = "¥0";
			}else{
				
				this._btn_bot_left.enabled = true;
				this._btn_bot_right.enabled = true;
				this.lab_redbot_num.text = ""+usenum;

				let price = 0;
				for (var i = 0; i < knarray.length; i++) {
					let item: any = knarray[i];
					if(item.sid<=0){
						continue;
					}
					let stem = ShopPageManage.ins().getServiceItemBySid(item.sid);
					price += item.itembillyf;
				}
				this._btn_bot_left.label = "¥"+price;
				this._btn_bot_right.label = "下单";
			}
			if(this._shopMakeInfoListPaeul == null)
			{
				this._shopMakeInfoListPaeul = new ShopMakeInfoListPaeul();
				this.group_shopmakelist.addChild(this._shopMakeInfoListPaeul);
				this._shopMakeInfoListPaeul.DoOpen();
			}
			if(this._shopOrderInfoListPaeul != null){
				this._shopOrderInfoListPaeul.visible = false;
			}
			this._shopMakeInfoListPaeul.setShopInfoList();
		}
		else if(this._godd == 1) //订单阶段
		{
			this._btn_bot_left.enabled = true;
			this.lab_redbot_num.text = ""+usenum;

			let knarray: any[] = data;	
			let price = 0;
			for (var i = 0; i < knarray.length; i++) {
				let item: any = knarray[i];
				if(item.sid<=0){
					continue;
				}
				let stem = ShopPageManage.ins().getServiceItemBySid(item.sid);
				price += item.itembillyf;
			}
			this._btn_bot_left.label = "¥"+price;
			this._btn_bot_right.label = "结账";

			if(this._shopOrderInfoListPaeul == null){
				this._shopOrderInfoListPaeul = new ShopOrderInfoListPanel();
				this.group_shopmakelist.addChild(this._shopOrderInfoListPaeul);
				this._shopOrderInfoListPaeul.DoOpen();
			}
			if(this._shopMakeInfoListPaeul != null){
				this._shopMakeInfoListPaeul.visible = false;
			}
			this._shopOrderInfoListPaeul.visible = true;
			this._shopOrderInfoListPaeul.setShopInfoList();
		}
		else if(this._godd == 2) //订单阶段
		{
			this._btn_bot_left.enabled = true;
			this.lab_redbot_num.text = ""+usenum;

			let knarray: any[] = data;	
			let price = 0;
			for (var i = 0; i < knarray.length; i++) {
				let item: any = knarray[i];
				if(item.paystate>0){
					continue;
				}
				
				price += item.itembillyf;
			}
			this._btn_bot_left.label = "¥"+price;
			this._btn_bot_right.label = "结账";
			this._btn_bot_right.enabled = true;
			if(price == 0){
				this._btn_bot_right.label = "已结账";
				this._btn_bot_right.enabled = false;
			}
			
			
			if(this._shopOrderInfoListPaeul == null){
				this._shopOrderInfoListPaeul = new ShopOrderInfoListPanel();
				this.group_shopmakelist.addChild(this._shopOrderInfoListPaeul);
				this._shopOrderInfoListPaeul.DoOpen();
			}
			if(this._shopMakeInfoListPaeul != null){
				this._shopMakeInfoListPaeul.visible = false;
			}
			this._shopOrderInfoListPaeul.visible = true;
			this._shopOrderInfoListPaeul.setShopInfoList();
		}

	}
	private onRedBotHit(){
		this.setBotStatus();
	}
	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			 
			case FuncUrlUtil.ShopInfo_MakeOrder:			
				ShopPageManage.ins().data_ShopMakeList = json.obj;
				this.setBotStatus();
			break; 
			case FuncUrlUtil.ShopInfo_BackToShoping:			
				ShopPageManage.ins().data_ShopMakeList = json.obj;
				this.setBotStatus();
			break; 
			case FuncUrlUtil.ShopInfo_CheckOrderBills:			
				var checkinfo = json.obj;
				var params = "timeStamp="+checkinfo.timeStamp 
							+ "&" + "nonceStr=" + checkinfo.nonceStr
							+ "&" + "prepay_id="+checkinfo.prepay_id
							+ "&" + "paySign="+checkinfo.paySign
							+ "&" + "token="+GameGlobal.token
							+ "&" + "company="+GameGlobal.CurrentCompany
				_WX_PayNavito(params);
			break;
			 
		}
	}
	

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			case this._btn_bot_left:
				ViewManager.ins().close(ShopOredrPanel);
				if(this._godd <= 0){
					if(this._shopMakeInfoListPaeul.visible == false){
						this._shopMakeInfoListPaeul._on_Show();
					}else{
						this._shopMakeInfoListPaeul._on_hide();
					}
				}else{
					this._shopOrderInfoListPaeul._on_Show();
				}
			break;
			case this._btn_bot_right:
				if(this._godd <= 0)//下单
				{
					var order = {
						company:GameGlobal.CurrentCompany,
					}

					var rurl = FuncUrlUtil.ShopInfo_MakeOrder;
					sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
				}
				else//结账
				{
					ViewManager.ins().open(ShopSelMoneyChannelPanel);
				}
				
			break;
  
		}
	}


}
