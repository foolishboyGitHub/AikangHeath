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
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfo, this.onServerEventData, this);
        this.gethistoryinfo();
    };
    ShopServingBillListPanel.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfo, this.onServerEventData, this);
    };
    ;
    ShopServingBillListPanel.prototype.gethistoryinfo = function () {
        var comanyname = GameGlobal.CurrentCompany;
        var cmpany = {
            name: comanyname
        };
        var rurl = FuncUrlUtil.ShopInfo_GetHistoryShopInfo;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
    };
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
        for (var i = 1; i < knarray.length; i++) {
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
        if (wArr.length > 0) {
            mArr.push({ idx: idx, d: wArr });
        }
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._point = { x: 0, y: 0 };
        return _this;
    }
    /////////////////////////////////////////////////////////////////////////////
    listHistoryBillInfoItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._on_touch_begin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this._on_touch_end, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
        this._btn_likethisagin.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_order_again, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    listHistoryBillInfoItem.prototype._on_touch_begin = function (e) {
        var point = { x: e.stageX, y: e.stageY };
        this._point = point;
    };
    listHistoryBillInfoItem.prototype._on_touch_end = function (e) {
        var point = { x: e.stageX, y: e.stageY };
        if (Math.abs(this._point.x - point.x) <= 10 && Math.abs(this._point.y - point.y) <= 10) {
            ViewManager.ins().open(ShopServingBillDetialPanel, this.data.d);
        }
    };
    listHistoryBillInfoItem.prototype._on_order_again = function (event) {
    };
    listHistoryBillInfoItem.prototype._on_tap_this = function (event) {
    };
    listHistoryBillInfoItem.prototype.dataChanged = function () {
        var knarray = this.data.d;
        if (knarray.length <= 0) {
            return;
        }
        this.lab_itemstate.text = "已完成";
        var kenvo = knarray[0];
        var sn = decodeURI(kenvo.cmcname);
        if (sn.length > 12) {
            sn = sn.substr(0, 11) + "...";
        }
        this.lab_itemcompany.text = sn;
        var money = 0;
        for (var i = 0; i < knarray.length; i++) {
            money += knarray[i].money;
        }
        this.lab_itemprice.text = "" + money;
        this.lab_itemnum.text = "共 " + knarray.length + " 项";
        sproto.sprotoRequest.loadURLImgOnThisDress(kenvo.cpic, function (event) {
            var loader = event.target;
            //获取加载到的纹理对象
            var texture = loader.data;
            var bitmap = new egret.Bitmap(texture);
            bitmap.width = this.group_companypic.width;
            bitmap.height = this.group_companypic.height;
            this.group_companypic.addChild(bitmap);
        }, this);
        var mArr = [];
        for (var i = 0; i < knarray.length; i++) {
            var kenvo_1 = knarray[i];
            mArr.push({ idx: i, d: kenvo_1 });
        }
        var mCollection = new eui.ArrayCollection(mArr);
        this.listorder.dataProvider = mCollection;
        this.listorder.itemRenderer = listHistoryBillInfoItemChild;
        this.listorder.validateNow();
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
var listHistoryBillInfoItemChild = (function (_super) {
    __extends(listHistoryBillInfoItemChild, _super);
    function listHistoryBillInfoItemChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    listHistoryBillInfoItemChild.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    listHistoryBillInfoItemChild.prototype._on_order_again = function (event) {
    };
    listHistoryBillInfoItemChild.prototype.dataChanged = function () {
        var kenvo = this.data.d;
        var sn = kenvo.sname;
        if (sn.length > 7) {
            sn = sn.substr(0, 6) + "...";
        }
        this.lab_name.text = sn;
        sproto.sprotoRequest.loadURLImgOnThisDress(kenvo.spic, function (event) {
            var loader = event.target;
            //获取加载到的纹理对象
            var texture = loader.data;
            var bitmap = new egret.Bitmap(texture);
            bitmap.width = this.group_img.width;
            bitmap.height = this.group_img.height;
            this.group_img.addChild(bitmap);
        }, this);
    };
    listHistoryBillInfoItemChild.prototype.doSomeChange = function () {
    };
    listHistoryBillInfoItemChild.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    return listHistoryBillInfoItemChild;
}(eui.ItemRenderer));
__reflect(listHistoryBillInfoItemChild.prototype, "listHistoryBillInfoItemChild");
//# sourceMappingURL=ShopServingBillListPanel.js.map