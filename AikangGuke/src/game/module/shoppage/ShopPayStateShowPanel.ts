class ShopPayStateShowPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_Main_1;
	/**
     * 输入
     */
	private lab_price:eui.Label;
	private lab_time:eui.Label;
	
	private group_paychannelweixin:eui.Group;
	private group_paychannelzhifubao:eui.Group;
	private group_timeshow:eui.Group;
	private group_success:eui.Group;

	private _btn_back_order:eui.Button;
	private _btn_back:eui.Button;
	private lab_payfail:eui.Label;
	public timer:egret.Timer;
	public _lasttimeAskServer;
	public constructor() {
		super();
		this.skinName = "ShopPayStateShow";	
	}

	protected childrenCreated(){

		// this._AddClick(this._btn_pay_weixin, this._OnClick);
		this._AddClick(this._btn_back_order, this._OnClick);
		this._AddClick(this._btn_back, this._OnClick);
		this._btn_back.visible = false;
		this.lab_payfail.visible = false;
    }

	OnOpen() {

		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_AskMoneyChannel, this.onServerEventData, this);

		this.timer = new egret.Timer(1000);
	
		this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
		this.timer.start();
		this._lasttimeAskServer = new Date().getTime();

		var data = ShopPageManage.ins().data_MoneyChannelInfo;
		var mc = data.rl;
		if(mc != null){
			if(mc.channelname == "wxpay"){
				this.group_paychannelweixin.visible = true;
				this.group_paychannelzhifubao .visible = false;
			}else if(mc.channelname == "alpay"){
				this.group_paychannelweixin.visible = false;
				this.group_paychannelzhifubao .visible = true;
			}
			this.lab_price.text = mc.blockbillprice + "";
		}
		this.group_success.visible = false;
	}

	OnClose() {
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_AskMoneyChannel, this.onServerEventData, this);

		this.timer.stop();
		this.timer.removeEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
		this.timer = null;
	};

	private timerFunc(){
		var data = ShopPageManage.ins().data_MoneyChannelInfo;
		var mc = data.rl;
		if(mc == null){
			return;
		}
		var mdate = new Date(mc.blocktime);
		var pass = new Date().getTime() - mdate.getTime();
		var tm = Math.floor( MClUtil.CHANNEL_BLOCK_TIME - pass/1000);
		if(tm >=0){
			this.lab_time.text = tm + "";
		}else{
			this._btn_back.visible = true;
			this.lab_payfail.visible = true;
		}
		 
		 //6秒钟询问一下服务器是否付款成功
		if(tm >=0 && new Date().getTime() - this._lasttimeAskServer > 6*1000)
		{
			this._lasttimeAskServer = new Date().getTime();

			let gd = ShopPageManage.ins().data_ShopMakeList;
			if(gd != null && gd.length>0){
				
				var order = {
					company:GameGlobal.CurrentCompany,
					billnumber: gd[0].billnumber
				}
				var rurl = FuncUrlUtil.ShopInfo_AskMoneyChannel;
				sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
			}
		}
	}
	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			case FuncUrlUtil.ShopInfo_AskMoneyChannel:
				var data= json.obj;
				if(data.suc == "ok"){
					ShopPageManage.ins().data_ShopMakeList = data.rl;
					this.group_timeshow.visible = false;
					this.group_success.visible = true;
				}			
								
			break; 
			 
		}
	}
	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			 case this._btn_back_order:
			 	EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, null));
				EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopPay_Close_Sel_MoneyChanel_panel, null));	
				this.CloseSelf();
			 break;
			 case this._btn_back:
			 	this.CloseSelf();
			 break;
		}
	}
}
