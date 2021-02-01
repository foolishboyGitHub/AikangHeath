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
var WariSelHuiYuanPayWin = (function (_super) {
    __extends(WariSelHuiYuanPayWin, _super);
    function WariSelHuiYuanPayWin() {
        var _this = _super.call(this) || this;
        _this.closeExecuteCallFun2 = true;
        return _this;
    }
    // normal sure
    WariSelHuiYuanPayWin.show = function (info, func, thisObj, func2, thisObj2, statu, data) {
        if (func2 === void 0) { func2 = null; }
        if (thisObj2 === void 0) { thisObj2 = null; }
        if (statu === void 0) { statu = "normal"; }
        if (data === void 0) { data = null; }
        TimerManager.ins().doNext(function () {
            var win = ViewManager.ins().open(WariSelHuiYuanPayWin);
            win.setWarnLabel(info, {
                "func": func,
                "thisObj": thisObj
            }, {
                "func": func2,
                "thisObj": thisObj2,
            }, statu, data);
        }, null);
    };
    ;
    // private _UpdateBtn() {
    // 	let str = this.sureBtn.label || ""
    // 	if (str.length > 4) {
    // 		this.sureBtn.width = str.length * 40
    // 	}
    // }
    WariSelHuiYuanPayWin.prototype.setWarnLabel = function (info, callbackFunc, calbackFun2, statu, data) {
        if (calbackFun2 === void 0) { calbackFun2 = null; }
        if (statu === void 0) { statu = "normal"; }
        if (data === void 0) { data = null; }
        this.lab_typecname.text = info.hy.typecname + "";
        this.lab_cardid.text = info.hy.cardid + "";
        this.lab_price.text = Number(info.price).toFixed(2) + "";
        this.lab_pricedis.text = Number(info.pricedis).toFixed(2) + "";
        if (info.disrate >= 1) {
            this.lab_disrate.text = "无";
        }
        else {
            this.lab_disrate.text = Number(info.disrate * 10) + " 折";
        }
        this.lab_rmoney.text = Number(info.rmoney).toFixed(2) + "";
        if (info.rmoney < 0) {
            this.sureBtn.label = "余额不足";
            this.sureBtn.enabled = false;
        }
        this.callBack = callbackFunc;
        this.calback2 = calbackFun2;
        this.currentState = statu;
    };
    ;
    WariSelHuiYuanPayWin.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.skinName = "WarmSelHuiYuanPay";
        this.validateNow();
    };
    WariSelHuiYuanPayWin.prototype.OnOpen = function () {
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.notBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.animGroup.scaleX = this.animGroup.scaleY = 0.5;
        this.animGroup.alpha = 0;
        egret.Tween.get(this.animGroup).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 200, egret.Ease.backOut);
    };
    WariSelHuiYuanPayWin.prototype.OnClose = function () {
        this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.notBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.callBack = null;
        this.calback2 = null;
        egret.Tween.removeTweens(this.animGroup);
    };
    ;
    WariSelHuiYuanPayWin.prototype.onTap = function (e) {
        var tempCb1 = this.callBack;
        var tempCb2 = this.calback2;
        switch (e.currentTarget) {
            case this.sureBtn:
                if (tempCb1 && tempCb1.func != null) {
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
        this.CloseSelf();
    };
    Object.defineProperty(WariSelHuiYuanPayWin.prototype, "isShowWin", {
        get: function () {
            return this._isShowWin;
        },
        set: function (bool) {
            if (this._isShowWin == bool)
                return;
            this._isShowWin = bool;
        },
        enumerable: true,
        configurable: true
    });
    WariSelHuiYuanPayWin.LAYER_LEVEL = LayerManager.UI_Popup;
    return WariSelHuiYuanPayWin;
}(BaseEuiView));
__reflect(WariSelHuiYuanPayWin.prototype, "WariSelHuiYuanPayWin");
//# sourceMappingURL=WariSelHuiYuanPayWin.js.map