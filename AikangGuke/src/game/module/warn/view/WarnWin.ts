class WarnWin extends BaseEuiView {
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
	protected closeBtn: eui.Button;
	protected bg: eui.Image;
	protected warnLabel: eui.Label;
	/////////////////////////////////////////////////////////////////////////////

	callBack
	calback2
	_isShowWin
	name
	closeExecuteCallFun2 = true;

	// normal sure
	static show(str, func, thisObj, func2 = null, thisObj2 = null, statu = "normal", data = null) 
	{
		TimerManager.ins().doNext(() => {
			let win = (<WarnWin>ViewManager.ins().open(WarnWin))
			win.setWarnLabel(str, {
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

	setWarnLabel(str, callbackFunc, calbackFun2 = null, statu = "normal", data = null) {
		if (typeof (str) == "string") {
			this.warnLabel.textFlow = TextFlowMaker.generateTextFlow(str);
		} else {
			this.warnLabel.textFlow = str
		}
		this.callBack = callbackFunc;
		this.calback2 = calbackFun2;
		this.currentState = statu;
	};
	
	initUI() {
		super.initUI()
		this.skinName = "warnFrameSkin";
		this.validateNow()
	}

	OnOpen() {
		this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.notBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);

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
		this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.callBack = null
		this.calback2 = null

		egret.Tween.removeTweens(this.animGroup)
	};

	onTap(e) {
		let tempCb1 = this.callBack
		let tempCb2 = this.calback2
		switch (e.currentTarget) {
			case this.sureBtn:
				if (tempCb1 && tempCb1.func != null)
					tempCb1.func.call(tempCb1.thisObj);
				break;
			case this.notBtn:
				if (tempCb2 && tempCb2.func) {
					tempCb2.func.call(tempCb2.thisObj);
				}
				break;
			case this.closeBtn:
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