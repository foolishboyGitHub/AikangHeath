var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var WarmPriceSet = (function (_super) {
    __extends(WarmPriceSet, _super);
    function WarmPriceSet() {
        var _this = _super.call(this) || this;
        _this._finalPrice = 0;
        _this._priceone = 0;
        _this._num = 1;
        _this._Pricename = "";
        _this._PriceTypeList = [];
        return _this;
    }
    // normal sure
    WarmPriceSet.show = function (func, thisObj, data) {
        if (data === void 0) { data = null; }
        TimerManager.ins().doNext(function () {
            var win = ViewManager.ins().open(WarmPriceSet);
            win.setwin(func, thisObj, data);
        }, null);
    };
    ;
    WarmPriceSet.prototype.setwin = function (callbackFunc, callthisobj, data) {
        if (data === void 0) { data = null; }
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
    ;
    WarmPriceSet.prototype.onPriceListUpdate = function () {
    };
    WarmPriceSet.prototype.onSelPriceType = function (pt) {
        if (pt == null)
            return;
        this._priceone = pt.price;
        this._Pricename = pt.tpname;
        this.onSetText();
        this.GetfinalPrice();
    };
    WarmPriceSet.prototype.GetfinalPrice = function () {
        this._finalPrice = (Number)((this._num * this._priceone).toFixed(2));
        this.lab_allprice.text = this._finalPrice + "";
    };
    WarmPriceSet.prototype.onAddDelPriceOne = function (def) {
        this._priceone += def;
        if (this._priceone < 0)
            this._priceone = 0;
        this.lab_priceone.text = this._priceone + "";
        this.GetfinalPrice();
    };
    WarmPriceSet.prototype.onSetText = function () {
        this.lab_priceone.text = this._priceone.toFixed(2) + "";
        this.lab_price_10yuan.text = Math.floor(this._priceone / 10) * 10 + "";
        ////////////////////////////////////////
        var hp = Math.floor(this._priceone / 10) * 10;
        hp = this._priceone - hp;
        this.lab_price_yuan.text = Math.floor(hp) + "";
        ///////////////////////////////////////////////
        hp = Math.floor(this._priceone);
        hp = this._priceone - hp;
        this.lab_price_jiao.text = hp.toFixed(2) + "";
        /////////////////////////////////////////////////
        this.lab_num.text = this._num + "";
    };
    WarmPriceSet.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.skinName = "WarmPriceSkin";
        this.lab_priceone.restrict = "0-9.";
        this.lab_allprice.restrict = "0-9.";
        this.lab_num.restrict = "0-9";
        this.lab_price_10yuan.restrict = "0-9";
        this.lab_price_yuan.restrict = "0-9";
        this.lab_price_jiao.restrict = "0-9";
        this.validateNow();
    };
    WarmPriceSet.prototype.OnOpen = function () {
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
    };
    WarmPriceSet.prototype.OnClose = function () {
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
        this.callfunc = null;
        this.callthisobj = null;
        this.calldata = null;
    };
    ;
    WarmPriceSet.prototype.onPriceTypeScrollerChange = function () {
        for (var i = 0; i < this.listItem_price.$indexToRenderer.length; i++) {
            if (!this.listItem_price.$indexToRenderer[i])
                continue;
            this.listItem_price.$indexToRenderer[i].doSomeChange();
        }
    };
    WarmPriceSet.prototype._onPriceTypeItemChange = function (e) {
        for (var i = 0; i < this.listItem_price.$indexToRenderer.length; i++) {
            if (!this.listItem_price.$indexToRenderer[i])
                continue;
            this.listItem_price.$indexToRenderer[i].doSomeChange();
        }
    };
    WarmPriceSet.prototype.onTap = function (e) {
        switch (e.currentTarget) {
            case this.sureBtn:
                if (this.callfunc != null) {
                    if (this._Pricename == "") {
                        this._Pricename = "现付";
                    }
                    var bill = { num: this._num, price: this._finalPrice, name: this._Pricename };
                    this.callfunc.call(this.callthisobj, bill);
                }
                this.CloseSelf();
                break;
            case this.closeBtn:
                this.CloseSelf();
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
    };
    WarmPriceSet.LAYER_LEVEL = LayerManager.UI_Popup;
    return WarmPriceSet;
}(BaseEuiView));
__reflect(WarmPriceSet.prototype, "WarmPriceSet");
var listPriceTypeListItem = (function (_super) {
    __extends(listPriceTypeListItem, _super);
    function listPriceTypeListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    listPriceTypeListItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._on_touch_begin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this._on_touch_end, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_btn_tap, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    listPriceTypeListItem.prototype._on_touch_begin = function () {
        this._rect_back.fillColor = 0x706A63;
    };
    listPriceTypeListItem.prototype._on_touch_end = function () {
        this._rect_back.fillColor = 0x99938C;
        this.doSomeChange();
    };
    listPriceTypeListItem.prototype._on_btn_tap = function (event) {
        this.data.selfunc.call(this.data.thisobj, this.data.d);
    };
    listPriceTypeListItem.prototype.dataChanged = function () {
        var data = this.data;
        var sname = data.d.tpname;
        this.lab_pname.text = sname.substring(0, 4);
        var scode = data.d.price;
        this.lab_price.text = scode + "";
        this.doSomeChange();
    };
    listPriceTypeListItem.prototype.doSomeChange = function () {
        this._img_check.visible = false;
        this._rect_back.fillColor = 0x99938C;
        if (this.selected) {
            this._img_check.visible = true;
            this._rect_back.fillColor = 0x9B7447;
        }
    };
    listPriceTypeListItem.prototype.onRemove = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this._on_touch_begin, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this._on_touch_end, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_btn_tap, this);
    };
    return listPriceTypeListItem;
}(eui.ItemRenderer));
__reflect(listPriceTypeListItem.prototype, "listPriceTypeListItem");
//# sourceMappingURL=WarmPriceSet.js.map