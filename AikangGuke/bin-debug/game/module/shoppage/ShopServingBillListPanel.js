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
var ShopServingBillListPanel = (function (_super) {
    __extends(ShopServingBillListPanel, _super);
    function ShopServingBillListPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopHistoryBillListSkin";
        return _this;
    }
    ShopServingBillListPanel.prototype.childrenCreated = function () {
        this._AddClick(this._btn_goshop, this._OnClick);
    };
    ShopServingBillListPanel.prototype.OnOpen = function () {
        var comanyname = GameGlobal.CurrentCompany;
        var cmpany = {
            name: comanyname
        };
        var rurl = FuncUrlUtil.ShopInfo_GetHistoryShopInfo;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfo, this.onServerEventData, this);
    };
    ShopServingBillListPanel.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfo, this.onServerEventData, this);
    };
    ;
    ShopServingBillListPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_GetHistoryShopInfo:
                ShopPageManage.ins().data_ShopHistoryList = json.obj;
                this.onList_wait_Update();
                break;
        }
    };
    ShopServingBillListPanel.prototype.onList_wait_Update = function () {
        var knarray = ShopPageManage.ins().data_ShopHistoryList;
        if (knarray.length <= 0) {
            return;
        }
        var mArr = [];
        var wArr = [];
        wArr.push(knarray[0]);
        var idx = 0;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            if (kenvo.billnumber != wArr[0].billnumber) {
                mArr.push({ idx: idx, d: wArr });
                wArr = [];
                wArr.push(kenvo);
                idx++;
            }
            else {
                wArr.push(kenvo);
            }
        }
        mArr.push({ idx: idx, d: wArr });
        var mCollection = new eui.ArrayCollection(mArr);
        this.listorder.dataProvider = mCollection;
        this.listorder.itemRenderer = listHistoryBillInfoItem;
        this.listorder.validateNow();
    };
    ShopServingBillListPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._btn_goshop:
                this.CloseSelf();
                break;
        }
    };
    ////////////////'
    ShopServingBillListPanel.LAYER_LEVEL = LayerManager.UI_Popup;
    return ShopServingBillListPanel;
}(BaseEuiView));
__reflect(ShopServingBillListPanel.prototype, "ShopServingBillListPanel");
var listHistoryBillInfoItem = (function (_super) {
    __extends(listHistoryBillInfoItem, _super);
    function listHistoryBillInfoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    listHistoryBillInfoItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
        this._btn_likethisagin.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_order_again, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    listHistoryBillInfoItem.prototype._on_order_again = function (event) {
    };
    listHistoryBillInfoItem.prototype._on_tap_this = function (event) {
        ViewManager.ins().open(ShopServingBillDetialPanel, this.data.d);
    };
    listHistoryBillInfoItem.prototype.dataChanged = function () {
        var knarray = this.data.d;
        if (knarray.length <= 0) {
            return;
        }
        var kenvo = knarray[0];
        this.lab_itemcompany.text = kenvo.company;
        if (kenvo.workstate == 2) {
            this.lab_itemstate.text = "进行中...";
            this.lab_itemstate.textColor = 0x7BB22C;
        }
        else {
            this.lab_itemstate.text = "已完成";
            this.lab_itemstate.textColor = 0x757575;
        }
        var strname = kenvo.sname;
        var oldstr = strname;
        for (var i = 1; i < knarray.length; i++) {
            var k = knarray[i];
            if (oldstr != k.sname) {
                strname += "+" + k.sname;
                oldstr = k.sname;
            }
        }
        if (strname.length > 12) {
            strname = strname.substring(0, 12) + "...";
        }
        this.lab_servname.text = strname;
        this.lab_itemnum.text = "共 " + knarray.length + " 项";
        this.lab_itemprice.text = kenvo.paynum;
    };
    listHistoryBillInfoItem.prototype.doSomeChange = function () {
    };
    listHistoryBillInfoItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this._btn_likethisagin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_order_again, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
    };
    return listHistoryBillInfoItem;
}(eui.ItemRenderer));
__reflect(listHistoryBillInfoItem.prototype, "listHistoryBillInfoItem");
//# sourceMappingURL=ShopServingBillListPanel.js.map