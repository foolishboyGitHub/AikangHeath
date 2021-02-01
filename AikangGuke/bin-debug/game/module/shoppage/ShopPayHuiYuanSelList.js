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
var ShopPayHuiYuanSelList = (function (_super) {
    __extends(ShopPayHuiYuanSelList, _super);
    function ShopPayHuiYuanSelList() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopPayHuiYuanSelListSkin";
        return _this;
    }
    ShopPayHuiYuanSelList.prototype.OnOpen = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this._AddClick(this._btn_addnew, this._OnClick);
        this._AddClick(this._btn_back, this._OnClick);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay, this.onServerEventData, this);
        this.listItem_h.addEventListener(egret.Event.CHANGE, this._onWItemChange, this);
        this.listItem_h.addEventListener(egret.TouchEvent.TOUCH_END, this._List_w_touchend, this);
        this.onListUpdate();
    };
    ShopPayHuiYuanSelList.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._btn_back:
                this.CloseSelf();
                break;
            case this._btn_addnew:
                WarnWin.show("本店暂不支持自助办理会员！", null, null);
                break;
        }
    };
    ShopPayHuiYuanSelList.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay, this.onServerEventData, this);
        this.listItem_h.removeEventListener(egret.Event.CHANGE, this._onWItemChange, this);
        this.listItem_h.removeEventListener(egret.TouchEvent.TOUCH_END, this._List_w_touchend, this);
    };
    ;
    ShopPayHuiYuanSelList.prototype.onEventData = function (e) {
    };
    ShopPayHuiYuanSelList.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay:
                var info = json.obj;
                this._payinfo = info;
                WariSelHuiYuanPayWin.show(info, this.suretopay, this);
                break;
            case FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay:
                var data = json.obj;
                if (data.suc == "ok") {
                    ShopPageManage.ins().data_ShopMakeList = data.rl;
                    WarnWin.show("付款成功！", null, null);
                    EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, null));
                    EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopPay_Close_Sel_MoneyChanel_panel, null));
                    this.CloseSelf();
                }
                break;
        }
    };
    ShopPayHuiYuanSelList.prototype.onListUpdate = function () {
        var json = ShopPageManage.ins().data_MyHuiYuanInfo;
        var mArr = [];
        var knarray = json;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            mArr.push({ idx: kenvo.id, d: kenvo, closefunc: this.CloseSelf, closeobj: this });
        }
        var mCollection = new eui.ArrayCollection(mArr);
        this.listItem_h.dataProvider = mCollection;
        this.listItem_h.itemRenderer = lisPaytHuiYuanListItem;
        this.listItem_h.validateNow();
    };
    ShopPayHuiYuanSelList.prototype.suretopay = function () {
        var data = ShopPageManage.ins().data_ShopMakeList;
        var order = {
            company: GameGlobal.CurrentCompany,
            billnumber: data[0].billnumber,
            hid: this._payinfo.hy.id
        };
        var rurl = FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
    };
    ShopPayHuiYuanSelList.prototype._onWItemChange = function (e) {
        for (var i = 0; i < this.listItem_h.$indexToRenderer.length; i++) {
            if (!this.listItem_h.$indexToRenderer[i])
                continue;
            this.listItem_h.$indexToRenderer[i].doSomeChange();
        }
    };
    ShopPayHuiYuanSelList.prototype._List_w_touchend = function (e) {
        for (var i = 0; i < this.listItem_h.$indexToRenderer.length; i++) {
            if (!this.listItem_h.$indexToRenderer[i])
                continue;
            this.listItem_h.$indexToRenderer[i].doSomeChange();
        }
    };
    ShopPayHuiYuanSelList.LAYER_LEVEL = LayerManager.UI_Main_1;
    return ShopPayHuiYuanSelList;
}(BaseEuiView));
__reflect(ShopPayHuiYuanSelList.prototype, "ShopPayHuiYuanSelList");
var lisPaytHuiYuanListItem = (function (_super) {
    __extends(lisPaytHuiYuanListItem, _super);
    function lisPaytHuiYuanListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    lisPaytHuiYuanListItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    lisPaytHuiYuanListItem.prototype._on_tap_this = function (event) {
        var data = ShopPageManage.ins().data_ShopMakeList;
        var order = {
            company: GameGlobal.CurrentCompany,
            billnumber: data[0].billnumber,
            hid: this.data.d.id
        };
        var rurl = FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
        // this.data.closefunc.call(this.data.closeobj);
    };
    lisPaytHuiYuanListItem.prototype.dataChanged = function () {
        var data = this.data;
        this.lab_cardid.text = data.d.cardid;
        if (parseInt(data.d.rmoney)) {
            this.lab_remoney.text = Number(data.d.rmoney).toFixed(1) + "";
        }
        else {
            this.lab_remoney.text = Number(data.d.rmoney).toFixed(1) + "";
        }
        if (data.d.disrate >= 1) {
            this.lab_disgrate.text = "无";
        }
        else {
            this.lab_disgrate.text = Number(data.d.disrate * 10) + " 折";
        }
        this.lab_summoney.text = data.d.summoney;
        this.lab_savepoint.text = data.d.savepoint;
        this.lab_typename.text = data.d.typecname;
    };
    lisPaytHuiYuanListItem.prototype.doSomeChange = function () {
    };
    lisPaytHuiYuanListItem.prototype.onRemove = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    return lisPaytHuiYuanListItem;
}(eui.ItemRenderer));
__reflect(lisPaytHuiYuanListItem.prototype, "lisPaytHuiYuanListItem");
//# sourceMappingURL=ShopPayHuiYuanSelList.js.map