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
var ShopPageManage = (function (_super) {
    __extends(ShopPageManage, _super);
    function ShopPageManage() {
        var _this = _super.call(this) || this;
        _this.ShopGuke_Num = 0;
        _this.ShopGuke_TimeType = 0;
        _this._selGukeIdx = 0;
        _this._addstate = 0;
        _this._addbillnumber = "";
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetShopInfo, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetCanWorkerList, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetThisWorkerOrderList, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_MakeShop, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetMakeShopInfo, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_DelShopItem, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_DelAddItem, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_MakeOrder, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_AddShopFor, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_newShopMake, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_BackToShoping, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_CheckOrderBills, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetHistoryShopInfo, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_RequestMoneyChannel, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_AskMoneyChannel, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_BindTeleVerifySendCode, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_RequestHuiYuanPayInfo, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_FreshOrderList, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_GetHistoryGoInfo, _this.SendMessageEvent, _this);
        sproto.sprotoMsgReceiver.AddHandler(FuncUrlUtil.ShopInfo_SerachCompanyGoInfo, _this.SendMessageEvent, _this);
        return _this;
    }
    ShopPageManage.ins = function () {
        return _super.ins.call(this);
    };
    ShopPageManage.prototype.getServiceItemBySid = function (sid) {
        var sary = this.data_ShopInfoItem;
        for (var i = 0; i < sary.length; i++) {
            if (sary[i].id == sid) {
                return sary[i];
            }
        }
    };
    ShopPageManage.prototype.SendMessageEvent = function (json) {
        EventCenter.Instance.dispatchEvent(new DataTransEvent(json.msg, json));
    };
    //所选技师以往项目时间是否重叠
    ShopPageManage.prototype._ifWorkerItemTimeisOverEachOther = function (tm) {
        var knarray = this.data_ThisWorkerItemList;
        var ret = 0;
        for (var i = 0; i < knarray.length; i++) {
            var wm1 = knarray[i];
            var find = 0;
            var sitem = this.getServiceItemBySid(wm1.sid);
            var tml = sitem.timelong * 60 * 1000;
            var wt1 = new Date(wm1.waittime);
            var nowtime = new Date().getTime();
            var num = wm1.clocknumyy;
            if (num == null) {
                num = 1;
            }
            var ytm = wt1.getTime() + num * sitem.timelong * 60 * 1000;
            if (wm1.workstate >= WaiterStateUtil.SST_SZ_MIN && wm1.workstate < WaiterStateUtil.SST_FW_FINISH) {
                var mms = (nowtime - wt1.getTime()) / (60 * 1000);
                var hmms = mms % 60;
                if (hmms > 10) {
                    var hhs = Math.floor(mms / 60) + 1;
                    ytm = wt1.getTime() + hhs * 60 * 60 * 1000;
                }
                else {
                    ytm = nowtime;
                }
            }
            var nowytm = new Date(ytm);
            if (tm.time > wt1.getTime() && tm.time < ytm) {
                ret = 1;
            }
            var fnow = tm.time + tm.num * sitem.timelong * 60 * 1000;
            if (fnow > wt1.getTime() && fnow < ytm) {
                ret = 2;
            }
            if (wt1.getTime() > tm.time && wt1.getTime() < fnow) {
                ret = 3;
            }
        }
        return ret;
    };
    //所选技师本次项目时间是否重叠
    ShopPageManage.prototype._ifWorkerItemTimeisOverEachOtherOnThisShop = function (tm, hid) {
        var ret = 0;
        var knarray = this.data_ShopMakeList;
        for (var i = 0; i < knarray.length; i++) {
            var wm1 = knarray[i];
            if (wm1.hid <= 0) {
                continue;
            }
            if (wm1.hid != hid) {
                continue;
            }
            var find = 0;
            var sitem = this.getServiceItemBySid(wm1.sid);
            var tml = sitem.timelong * 60 * 1000;
            var wt1 = new Date(wm1.waittime);
            var nowtime = new Date().getTime();
            var num = wm1.clocknumyy;
            if (num == null) {
                num = 1;
            }
            var ytm = wt1.getTime() + num * sitem.timelong * 60 * 1000;
            if (wm1.workstate >= WaiterStateUtil.SST_SZ_MIN && wm1.workstate < WaiterStateUtil.SST_FW_FINISH) {
                var mms = (nowtime - wt1.getTime()) / (60 * 1000);
                var hmms = mms % 60;
                if (hmms > 10) {
                    var hhs = Math.floor(mms / 60) + 1;
                    ytm = wt1.getTime() + hhs * 60 * 60 * 1000;
                }
                else {
                    ytm = nowtime;
                }
            }
            var nowytm = new Date(ytm);
            if (tm.time > wt1.getTime() && tm.time < ytm) {
                ret = 1;
            }
            var fnow = tm.time + tm.num * sitem.timelong * 60 * 1000;
            if (fnow > wt1.getTime() && fnow < ytm) {
                ret = 2;
            }
            if (wt1.getTime() > tm.time && wt1.getTime() < fnow) {
                ret = 3;
            }
        }
        return ret;
    };
    //项目时间是否重叠
    ShopPageManage.prototype._ifGukeItemTimeisOverEachOther = function (tm) {
        var knarray = this.data_ShopMakeList;
        for (var i = 0; i < knarray.length; i++) {
            var wm1 = knarray[i];
            if (wm1.gukeidx != this._selGukeIdx) {
                continue;
            }
            var find = 0;
            var sitem = this.getServiceItemBySid(wm1.sid);
            var tml = sitem.timelong * 60 * 1000;
            var wt1 = new Date(wm1.waittime);
            var nowtime = new Date().getTime();
            var num = wm1.clocknumyy;
            if (num == null) {
                num = 1;
            }
            var ytm = wt1.getTime() + num * sitem.timelong * 60 * 1000;
            if (wm1.workstate >= WaiterStateUtil.SST_SZ_MIN && wm1.workstate < WaiterStateUtil.SST_FW_FINISH) {
                var mms = (nowtime - wt1.getTime()) / (60 * 1000);
                var hmms = mms % 60;
                if (hmms > 10) {
                    var hhs = Math.floor(mms / 60) + 1;
                    ytm = wt1.getTime() + hhs * 60 * 60 * 1000;
                }
                else {
                    ytm = nowtime;
                }
            }
            var nowytm = new Date(ytm);
            if (tm.time > wt1.getTime() && tm.time < ytm) {
                return 1;
            }
            var fnow = tm.time + tm.num * sitem.timelong * 60 * 1000;
            if (fnow > wt1.getTime() && fnow < ytm) {
                return 2;
            }
            if (wt1.getTime() > tm.time && wt1.getTime() < fnow) {
                return 3;
            }
        }
        return 0;
    };
    return ShopPageManage;
}(BaseSystem));
__reflect(ShopPageManage.prototype, "ShopPageManage");
//# sourceMappingURL=ShopPageManage.js.map