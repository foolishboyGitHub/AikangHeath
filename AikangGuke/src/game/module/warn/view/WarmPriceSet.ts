class WarmPriceSet extends BaseEuiView {
	public constructor() {
		super()
	}
	public static LAYER_LEVEL = LayerManager.UI_Popup;
	/////////////////////////////////////////////////////////////////////////////
	// warnFrameSkin.exml
	/////////////////////////////////////////////////////////////////////////////

	protected scrollMy_price: eui.Scroller;
	protected listItem_price: eui.List;

	protected sureBtn: eui.Button;
	protected closeBtn: eui.Button;
	protected lab_priceone: eui.EditableText;
	protected lab_num: eui.EditableText;
	protected lab_allprice: eui.EditableText;
	protected lab_price_10yuan: eui.Label;
	protected lab_price_yuan: eui.Label;
	protected lab_price_jiao: eui.Label;
	protected btn_delprice_10yuan: eui.Button;
	protected btn_addprice_10yuan: eui.Button;
	protected btn_delprice_yuan: eui.Button;
	protected btn_addprice_yuan: eui.Button;
	protected btn_delprice_jiao: eui.Button;
	protected btn_addprice_jiao: eui.Button;
	protected btn_del_num: eui.Button;
	protected btn_add_num: eui.Button;

	protected _finalPrice:number = 0;
	protected _priceone:number = 0;
	protected _num:number = 1;
	protected _Pricename:string = "";

	protected _PriceTypeList:any[] = [];
	/////////////////////////////////////////////////////////////////////////////

	callfunc
	callthisobj
	calldata
	// normal sure
	static show( func, thisObj, data = null) 
	{
		TimerManager.ins().doNext(() => {
			let win = (<WarmPriceSet>ViewManager.ins().open(WarmPriceSet))
			win.setwin(func,thisObj,data);
		}, null)
		
		
	};


	setwin( callbackFunc, callthisobj,data = null) {

		this.callfunc = callbackFunc;
		this.callthisobj = callthisobj;
		this.calldata = data;
		this._priceone = this.calldata.itembillyf;
		this._num = this.calldata.clocknumyf;
		this.onPriceListUpdate();
		
		this.lab_priceone.text = this._priceone + "";
		this.lab_num.text = this._num + "";
		this.onSetText();
	};
	private onPriceListUpdate(){
		
	}
	private onSelPriceType(pt){
		if(pt == null)
			return;
		this._priceone = pt.price;
		this._Pricename = pt.tpname;
		this.onSetText();
		this.GetfinalPrice();
	}
	private GetfinalPrice(){
		this._finalPrice = (Number)((this._num * this._priceone).toFixed(2));
		this.lab_allprice.text = this._finalPrice + "";
	}
	private onAddDelPriceOne(def:number){
		this._priceone += def;
		if(this._priceone < 0) 
			this._priceone = 0;
		this.lab_priceone.text = this._priceone + "";
		this.GetfinalPrice();
	}
	private onSetText(){
		this.lab_priceone.text = this._priceone.toFixed(2) + "";
		this.lab_price_10yuan.text = Math.floor(this._priceone/10) * 10 + "";
		////////////////////////////////////////
		let hp:number = Math.floor(this._priceone/10) * 10;
		hp = this._priceone - hp;
		this.lab_price_yuan.text = Math.floor(hp) + "";
		///////////////////////////////////////////////
		hp = Math.floor(this._priceone);
		hp = this._priceone - hp ;
		this.lab_price_jiao.text = hp.toFixed(2) + "";

		/////////////////////////////////////////////////
		this.lab_num.text = this._num + "";
	}
	initUI() {
		super.initUI()
		this.skinName = "WarmPriceSkin";

		this.lab_priceone.restrict = "0-9.";
		this.lab_allprice.restrict = "0-9.";
		this.lab_num.restrict = "0-9";
		this.lab_price_10yuan.restrict = "0-9";
		this.lab_price_yuan.restrict = "0-9";
		this.lab_price_jiao.restrict = "0-9";

		this.validateNow()
	}

	OnOpen() {
		this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_delprice_10yuan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_addprice_10yuan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_delprice_yuan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_addprice_yuan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_delprice_jiao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_addprice_jiao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_del_num.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_add_num.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);

		this.scrollMy_price.addEventListener(egret.Event.CHANGE, this.onPriceTypeScrollerChange, this);
		this.listItem_price.addEventListener(egret.Event.CHANGE, this._onPriceTypeItemChange, this);
	}

	OnClose() {
		this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_delprice_10yuan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_addprice_10yuan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_delprice_yuan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_addprice_yuan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_delprice_jiao.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_addprice_jiao.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_del_num.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.btn_add_num.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.scrollMy_price.removeEventListener(egret.Event.CHANGE, this.onPriceTypeScrollerChange, this);
		this.listItem_price.removeEventListener(egret.Event.CHANGE, this._onPriceTypeItemChange, this);
		this.callfunc = null
		this.callthisobj = null
		this.calldata = null
	};
	private onPriceTypeScrollerChange() {
		for (var i = 0; i < this.listItem_price.$indexToRenderer.length; i++) {
			if(!this.listItem_price.$indexToRenderer[i])
				continue;
			(this.listItem_price.$indexToRenderer[i] as listPriceTypeListItem).doSomeChange();
		}
	}
	private _onPriceTypeItemChange(e:DataTransEvent) {
		for (var i = 0; i < this.listItem_price.$indexToRenderer.length; i++) {
			if(!this.listItem_price.$indexToRenderer[i])
				continue;
			(this.listItem_price.$indexToRenderer[i] as listPriceTypeListItem).doSomeChange();
		}

    }
	onTap(e) {
		switch (e.currentTarget) {
			case this.sureBtn:
				if (this.callfunc != null){
					if(this._Pricename == ""){
						this._Pricename = "现付";
					}
					let bill = {num:this._num, price:this._finalPrice, name:this._Pricename}
					this.callfunc.call(this.callthisobj,bill);
				}
				this.CloseSelf()
				break;
			case this.closeBtn:
				this.CloseSelf()
				break;
			case this.btn_delprice_10yuan:
			{
				this.onAddDelPriceOne(-10);
				this.onSetText();
				break;
			}
			case this.btn_addprice_10yuan:
			{
				this.onAddDelPriceOne(10);
				this.onSetText();
				break;
			}
			case this.btn_delprice_yuan:
			{
				this.onAddDelPriceOne(-1);
				this.onSetText();
				break;
			}
			case this.btn_addprice_yuan:
			{
				this.onAddDelPriceOne(1);
				this.onSetText();
				break;
			}
			case this.btn_delprice_jiao:
			{
				this.onAddDelPriceOne(-0.1);
				this.onSetText();
				break;
			}
			case this.btn_addprice_jiao:
			{
				this.onAddDelPriceOne(0.1);
				this.onSetText();
				break;
			}
			case this.btn_del_num:
			{
				this._num -= 0.5;
				this.onSetText();
				this.GetfinalPrice();
				break;
			}
			case this.btn_add_num:
			{
				this._num += 0.5;
				this.onSetText();
				this.GetfinalPrice();
				break;
			}

		}
		
	}

}

class listPriceTypeListItem extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////
    // BtnTable6Skin.exml
    /////////////////////////////////////////////////////////////////////////////
	protected lab_pname:eui.Label;
	protected lab_price:eui.Label;
	protected _img_check:eui.Image;
	protected _rect_back: eui.Rect;
    /////////////////////////////////////////////////////////////////////////////

    createChildren() {
        super.childrenCreated();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this._on_touch_begin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this._on_touch_end,this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this._on_btn_tap,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
    }
	protected _on_touch_begin(){
		this._rect_back.fillColor = 0x706A63;
	}
	protected _on_touch_end(){
		this._rect_back.fillColor = 0x99938C;
		this.doSomeChange();
	}
    protected _on_btn_tap(event: egret.TouchEvent) {
		this.data.selfunc.call(this.data.thisobj, this.data.d);
    }
    dataChanged() {
        let data = this.data;		
		let sname:string = data.d.tpname;
		this.lab_pname.text = sname.substring(0, 4);
		let scode:string = data.d.price;
		this.lab_price.text = scode + "";
		this.doSomeChange();
    }

    public doSomeChange() {
		this._img_check.visible = false;
		this._rect_back.fillColor = 0x99938C;
		if(this.selected){
			this._img_check.visible = true;
			this._rect_back.fillColor = 0x9B7447;
		}
    }
	private onRemove(){	
		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this._on_touch_begin,this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END,this._on_touch_end,this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this._on_btn_tap,this);
	}
}