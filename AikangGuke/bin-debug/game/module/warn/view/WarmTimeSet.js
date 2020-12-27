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
var WarmTimeSet = (function (_super) {
    __extends(WarmTimeSet, _super);
    function WarmTimeSet() {
        return _super.call(this) || this;
    }
    // normal sure
    WarmTimeSet.show = function (func, thisObj, data) {
        if (data === void 0) { data = null; }
        TimerManager.ins().doNext(function () {
            var win = ViewManager.ins().open(WarmTimeSet);
            win.setwin(func, thisObj, data);
        }, null);
    };
    ;
    WarmTimeSet.prototype.setwin = function (callbackFunc, callthisobj, data) {
        if (data === void 0) { data = null; }
        this.callfunc = callbackFunc;
        this.callthisobj = callthisobj;
        ////////////////////////////////////////////
        this._data = data;
        var now = new Date(data.time);
        this.calldata = now.getTime();
        this.callnum = data.num;
        this.formatTme(this.calldata);
        if (data.hid > 0) {
            this.btn_querrywork.visible = true;
        }
        else {
            this.btn_querrywork.visible = false;
        }
        this.lab_wntm.visible = false;
        this.lab_wnnum.visible = false;
    };
    ;
    WarmTimeSet.prototype.formatTme = function (tm) {
        var now = new Date(tm);
        var nowweekday = now.getDate();
        var hh = now.getHours(); //时
        var mm = now.getMinutes(); //分
        var ss = now.getSeconds(); //秒
        var hhs, mms, sss;
        if (hh < 10) {
            hhs = "0" + hh;
        }
        else {
            hhs = hh;
        }
        if (mm < 10) {
            mms = "0" + mm;
        }
        else {
            mms = mm;
        }
        if (ss < 10) {
            sss = "0" + ss;
        }
        else {
            sss = ss;
        }
        this.lab_hour.text = hhs + "";
        this.lab_sec.text = mms + "";
        this.lab_time.text = nowweekday + "日 " + hhs + ":" + mms;
        this.lab_num.text = this.callnum;
        this.lab_numset.text = this.callnum;
        this.lab_time.textColor = 0x6D6464;
        this.lab_num.textColor = 0x6D6464;
        var stm = { time: tm, num: this.callnum };
        this.lab_wntm.visible = false;
        this.lab_wnnum.visible = false;
        if (this._data.hid > 0) {
            if (ShopPageManage.ins()._ifWorkerItemTimeisOverEachOther(stm) == 1) {
                this.lab_time.textColor = 0xD12323;
                this.lab_wntm.visible = true;
            }
            if (ShopPageManage.ins()._ifWorkerItemTimeisOverEachOther(stm) >= 2) {
                this.lab_num.textColor = 0xD12323;
                this.lab_wnnum.visible = true;
            }
        }
    };
    WarmTimeSet.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.skinName = "WarmTimeSkin";
        this.validateNow();
    };
    WarmTimeSet.prototype.OnOpen = function () {
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_add_hour.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_del_hour.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_add_sec.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_del_sec.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_add_num.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_del_num.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_querrywork.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    WarmTimeSet.prototype.OnClose = function () {
        this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_add_hour.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_del_hour.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_add_sec.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_del_sec.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_add_num.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_del_num.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btn_querrywork.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.callfunc = null;
        this.callthisobj = null;
        this.calldata = null;
    };
    ;
    WarmTimeSet.prototype.onTap = function (e) {
        switch (e.currentTarget) {
            case this.sureBtn:
                if (this.callfunc != null) {
                    var tm = { time: this.calldata, num: this.callnum };
                    this.callfunc.call(this.callthisobj, tm);
                }
                this.CloseSelf();
                break;
            case this.closeBtn:
                this.CloseSelf();
                break;
            case this.btn_del_hour:
                this.calldata = this.calldata - 60 * 60 * 1000;
                this.formatTme(this.calldata);
                break;
            case this.btn_add_hour:
                this.calldata = this.calldata + 60 * 60 * 1000;
                this.formatTme(this.calldata);
                break;
            case this.btn_del_sec:
                this.calldata = this.calldata - 1 * 60 * 1000;
                this.formatTme(this.calldata);
                break;
            case this.btn_add_sec:
                this.calldata = this.calldata + 1 * 60 * 1000;
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
    };
    WarmTimeSet.LAYER_LEVEL = LayerManager.UI_Main;
    return WarmTimeSet;
}(BaseEuiView));
__reflect(WarmTimeSet.prototype, "WarmTimeSet");
//# sourceMappingURL=WarmTimeSet.js.map