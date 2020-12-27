class WarmTimeSet extends BaseEuiView {
	public constructor() {
		super()
	}
	public static LAYER_LEVEL = LayerManager.UI_Main;
	/////////////////////////////////////////////////////////////////////////////
	// warnFrameSkin.exml
	/////////////////////////////////////////////////////////////////////////////

	protected sureBtn: eui.Button;
	protected closeBtn: eui.Button;
	protected lab_time: eui.Label;
	protected lab_hour: eui.Label;
	protected lab_sec: eui.Label;
	protected lab_num: eui.Label;
	protected lab_numset: eui.Label;
	protected btn_del_hour: eui.Button;
	protected btn_add_hour: eui.Button;
	protected btn_del_sec: eui.Button;
	protected btn_add_sec: eui.Button;
	protected btn_del_num: eui.Button;
	protected btn_add_num: eui.Button;
	protected btn_querrywork:eui.Button;

	protected lab_wntm:eui.Label;
	protected lab_wnnum:eui.Label;
	/////////////////////////////////////////////////////////////////////////////

	callfunc
	callthisobj
	calldata
	callnum
	_data
	// normal sure
	static show( func, thisObj, data = null) 
	{
		TimerManager.ins().doNext(() => {
			let win = (<WarmTimeSet>ViewManager.ins().open(WarmTimeSet))
			win.setwin(func,thisObj,data);
		}, null)
		
		
	};


	setwin( callbackFunc, callthisobj,data = null) {

		this.callfunc = callbackFunc;
		this.callthisobj = callthisobj;
		

		////////////////////////////////////////////
		this._data = data;
		let now = new Date(data.time);
		this.calldata = now.getTime();
		this.callnum = data.num;
		this.formatTme(this.calldata);
		if(data.hid > 0){
			this.btn_querrywork.visible = true;
		}else{
			this.btn_querrywork.visible = false;
		}
		this.lab_wntm.visible = false;
		this.lab_wnnum.visible = false;
		
	};
	formatTme(tm){
		let now = new Date(tm);
		let nowweekday = now.getDate();
		
		let hh = now.getHours();            //时
		let mm = now.getMinutes();          //分
		let ss = now.getSeconds();           //秒
		let hhs, mms, sss;
		if (hh < 10) {
			hhs = "0" + hh;
		} else {
			hhs = hh;
		}
		if (mm < 10) {
			mms = "0" + mm;
		} else {
			mms = mm;
		}
		if (ss < 10) {
			sss = "0" + ss;
		} else {
			sss = ss;
		}
		this.lab_hour.text = hhs+"";
		this.lab_sec.text = mms+"";
		this.lab_time.text = nowweekday + "日 " + hhs + ":" + mms;
		this.lab_num.text = this.callnum;
		this.lab_numset.text = this.callnum;

		this.lab_time.textColor = 0x6D6464;
		this.lab_num.textColor = 0x6D6464;
		var stm = {time:tm, num:this.callnum};
		this.lab_wntm.visible = false;
		this.lab_wnnum.visible = false;
		if(this._data.hid > 0){
			if(ShopPageManage.ins()._ifWorkerItemTimeisOverEachOther(stm) == 1){
				this.lab_time.textColor = 0xD12323;
				this.lab_wntm.visible = true;
			}
			if(ShopPageManage.ins()._ifWorkerItemTimeisOverEachOther(stm) >= 2){
				this.lab_num.textColor = 0xD12323;
				this.lab_wnnum.visible = true;
			}
		}
	}
	initUI() {
		super.initUI()
		this.skinName = "WarmTimeSkin";
		this.validateNow()
	}

	OnOpen() {
		this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_add_hour.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_del_hour.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_add_sec.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_del_sec.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_add_num.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_del_num.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_querrywork.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
	}

	OnClose() {
		this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_add_hour.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_del_hour.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_add_sec.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_del_sec.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_add_num.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_del_num.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_querrywork.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.callfunc = null
		this.callthisobj = null
		this.calldata = null
	};

	onTap(e) {
		switch (e.currentTarget) {
			case this.sureBtn:
				if (this.callfunc != null){
					
					var tm = {time:this.calldata, num:this.callnum}
					this.callfunc.call(this.callthisobj,tm);
				}
				this.CloseSelf()
				break;
			case this.closeBtn:
				this.CloseSelf()
				break;
			case this.btn_del_hour:
				this.calldata = this.calldata - 60*60*1000;
				this.formatTme(this.calldata);
				break;
			case this.btn_add_hour:
				this.calldata = this.calldata + 60*60*1000;
				this.formatTme(this.calldata);
				break;
			case this.btn_del_sec:
				this.calldata = this.calldata - 1*60*1000;
				this.formatTme(this.calldata);
				break;
			case this.btn_add_sec:
				this.calldata = this.calldata + 1*60*1000;
				this.formatTme(this.calldata);
				break;
			case this.btn_del_num:
				this.callnum = this.callnum - 0.5;
				this.formatTme(this.calldata);
				break;
			case this.btn_add_num:
				this.callnum = this.callnum + 0.5;
				this.formatTme(this.calldata);
				break;
			case this.btn_querrywork:
				ViewManager.ins().open(normalTimeSetPanel, ShopPageManage.ins().data_listWorkTile, ShopPageManage.ins().data_listWorkItems, null, this);
				break;
		}
		
	}

}