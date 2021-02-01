class WariSelHuiYuanPayWin extends BaseEuiView {
	public constructor() {
		super()
	}
	public static LAYER_LEVEL = LayerManager.UI_Popup;
	/////////////////////////////////////////////////////////////////////////////
	// warnFrameSkin.exml
	/////////////////////////////////////////////////////////////////////////////
	protected animGroup: eui.Group;
	protected group: eui.Group;
	protected sureBtn: eui.Button;
	protected notBtn: eui.Button;
	protected lab_typecname: eui.Label;
	protected lab_cardid: eui.Label;
	protected lab_price: eui.Label;
	protected lab_pricedis: eui.Label;
	protected lab_disrate: eui.Label;
	protected lab_rmoney: eui.Label;
	
	/////////////////////////////////////////////////////////////////////////////

	callBack
	calback2
	_isShowWin
	name
	closeExecuteCallFun2 = true;
	_info;
	// normal sure
	static show(info, func, thisObj, func2 = null, thisObj2 = null, statu = "normal", data = null) 
	{
		TimerManager.ins().doNext(() => {
			let win = (<WariSelHuiYuanPayWin>ViewManager.ins().open(WariSelHuiYuanPayWin))
			win.setWarnLabel(info, {
			"func": func,
			"thisObj": thisObj
		}, {
				"func": func2,
				"thisObj": thisObj2,
			}, statu, data);
		}, null)
		
		
	};
	// private _UpdateBtn() {
	// 	let str = this.sureBtn.label || ""
	// 	if (str.length > 4) {
	// 		this.sureBtn.width = str.length * 40
	// 	}
	// }

	setWarnLabel(info, callbackFunc, calbackFun2 = null, statu = "normal", data = null) {
		this.lab_typecname.text = info.hy.typecname + "";
		this.lab_cardid.text =info.hy.cardid + "";
		this.lab_price.text = Number(info.price).toFixed(2) + "";
		this.lab_pricedis.text = Number(info.pricedis).toFixed(2) + "";
		if(info.disrate >=1 ){
			this.lab_disrate.text = "无";
		}else{
			this.lab_disrate.text = Number(info.disrate*10) + " 折";
		}

		
		this.lab_rmoney.text = Number(info.rmoney).toFixed(2) + "";

		if(info.rmoney < 0){
			this.sureBtn.label = "余额不足"
			this.sureBtn.enabled = false;
		}

		this.callBack = callbackFunc;
		this.calback2 = calbackFun2;
		this.currentState = statu;

	};
	
	initUI() {
		super.initUI()
		this.skinName = "WarmSelHuiYuanPay";
		this.validateNow()
	}

	OnOpen() {
		this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.notBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);


		this.animGroup.scaleX = this.animGroup.scaleY = 0.5
		this.animGroup.alpha = 0
		egret.Tween.get(this.animGroup).to({
			scaleX: 1,
			scaleY: 1,
			alpha: 1
		}, 200, egret.Ease.backOut)


	}

	OnClose() {
		this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.notBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.callBack = null
		this.calback2 = null

		egret.Tween.removeTweens(this.animGroup)
	};

	onTap(e) {
		let tempCb1 = this.callBack
		let tempCb2 = this.calback2
		switch (e.currentTarget) {
			case this.sureBtn:
				if (tempCb1 && tempCb1.func != null){
					var checktype = 0;
					tempCb1.func.call(tempCb1.thisObj);
				}
				break;

			case this.notBtn:
				if (tempCb2 && tempCb2.func) {
					tempCb2.func.call(tempCb2.thisObj);
				}
				break;
		}
		this.CloseSelf()
	}

	get isShowWin() {
		return this._isShowWin;
	}

	set isShowWin(bool) {
		if (this._isShowWin == bool)
			return;
		this._isShowWin = bool;
	}

}