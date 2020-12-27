class ShopSelMoneyChannelPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_Main_1;
	/**
     * 输入
     */
	private group_channelmessage:eui.Group;
	private group_selmoneychannel:eui.Group;
	private _btn_pay_weixin:eui.Button;
	private _btn_pay_zhifubao:eui.Button;
	private _btn_back_message:eui.Button;
	private _btn_back:eui.Button;
	private lab_timetest:eui.Label;

	public constructor() {
		super();
		this.skinName = "ShopSelMoneyChannel";	
	}

	protected childrenCreated(){

		this._AddClick(this._btn_pay_weixin, this._OnClick);
		this._AddClick(this._btn_pay_zhifubao, this._OnClick);
		this._AddClick(this._btn_back_message, this._OnClick);
		this._AddClick(this._btn_back, this._OnClick);
		this.group_channelmessage.visible = false;

    }

	OnOpen() {
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_RequestMoneyChannel, this.onServerEventData, this);
	}

	OnClose() {
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_RequestMoneyChannel, this.onServerEventData, this);
	};
	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			case FuncUrlUtil.ShopInfo_RequestMoneyChannel:			
				ShopPageManage.ins().data_MoneyChannelInfo = json.obj;
				this.dealChannelInfo();
			break; 
			 
		}
	}
	private dealChannelInfo(){
		var data = ShopPageManage.ins().data_MoneyChannelInfo;
		if(data.suc == "no"){
			this.group_selmoneychannel.visible = false;
			this.group_channelmessage.visible = true;
			var mc = data.rl;
			var mdate = new Date(mc.blocktime);
			var pass = new Date().getTime() - mdate.getTime();
			var tm = Math.floor(60 - pass/1000);
			if(tm >= 0){
				this.lab_timetest.text = tm + ""; 
			}
		}else if(data.suc == "ok"){
			ViewManager.ins().open(ShopPayStateShowPanel);
			this.CloseSelf();
		}
	}
	
	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {
			 case this._btn_back:
				 this.CloseSelf();
			 break;
			 case this._btn_pay_weixin:
			 	this.sendRequestMoneyChannel("wxpay");
			 break;
			 case this._btn_pay_zhifubao:
			 	this.sendRequestMoneyChannel("alpay");
			 break;  
			 case this._btn_back_message:
			 	this.group_selmoneychannel.visible = true;
				this.group_channelmessage.visible = false;
			 break;  
		}
	}

	private sendRequestMoneyChannel(type:string){
		let data = ShopPageManage.ins().data_ShopMakeList;
		if(data == null || data.length<=0){
			WarnWin.show("无可用订单",null,null);
			return;
		}
		var order = {
			company:GameGlobal.CurrentCompany,
			billnumber: data[0].billnumber,
			type:type
		}

		var rurl = FuncUrlUtil.ShopInfo_RequestMoneyChannel;
		sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
				
	}
}
