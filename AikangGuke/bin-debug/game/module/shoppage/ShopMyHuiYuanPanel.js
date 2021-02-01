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
var ShopMyHuiYuanPanel = (function (_super) {
    __extends(ShopMyHuiYuanPanel, _super);
    function ShopMyHuiYuanPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopHuiYuanPanel";
        return _this;
    }
    ShopMyHuiYuanPanel.prototype.OnOpen = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this._AddClick(this._btn_addnew, this._OnClick);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo, this.onServerEventData, this);
        this.listItem_h.addEventListener(egret.Event.CHANGE, this._onWItemChange, this);
        this.listItem_h.addEventListener(egret.TouchEvent.TOUCH_END, this._List_w_touchend, this);
    };
    ShopMyHuiYuanPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._btn_addnew:
                WarnWin.show("本店暂不支持自助办理会员！", null, null);
                break;
        }
    };
    ShopMyHuiYuanPanel.prototype.QueryHuiYuanInfo = function () {
        var company = {
            name: GameGlobal.CurrentCompany
        };
        var rurl = FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(company), rurl);
    };
    ShopMyHuiYuanPanel.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo, this.onServerEventData, this);
        this.listItem_h.addEventListener(egret.Event.CHANGE, this._onWItemChange, this);
        this.listItem_h.removeEventListener(egret.TouchEvent.TOUCH_END, this._List_w_touchend, this);
    };
    ;
    ShopMyHuiYuanPanel.prototype.onEventData = function (e) {
    };
    ShopMyHuiYuanPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo:
                this.setHuiyuanInfo(json);
                break;
        }
    };
    ShopMyHuiYuanPanel.prototype.setHuiyuanInfo = function (json) {
        var data = json.obj;
        if (data.msg == "needbind") {
            ViewManager.ins().open(ShopHuiYuanNedPhoneNumberPanel);
            return;
        }
        ShopPageManage.ins().data_MyHuiYuanInfo = data.hl;
        this.onListUpdate();
    };
    ShopMyHuiYuanPanel.prototype.onListUpdate = function () {
        var json = ShopPageManage.ins().data_MyHuiYuanInfo;
        var mArr = [];
        var knarray = json;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            // if(i==0)
            {
                this.lab_companyname.text = decodeURI(kenvo.companycname);
            }
            mArr.push({ idx: kenvo.id, d: kenvo });
        }
        var mCollection = new eui.ArrayCollection(mArr);
        this.listItem_h.dataProvider = mCollection;
        this.listItem_h.itemRenderer = listHuiYuanListItem;
        this.listItem_h.validateNow();
    };
    ShopMyHuiYuanPanel.prototype.on_btn_sure = function () {
    };
    ShopMyHuiYuanPanel.prototype._onWItemChange = function (e) {
        for (var i = 0; i < this.listItem_h.$indexToRenderer.length; i++) {
            if (!this.listItem_h.$indexToRenderer[i])
                continue;
            this.listItem_h.$indexToRenderer[i].doSomeChange();
        }
    };
    ShopMyHuiYuanPanel.prototype._List_w_touchend = function (e) {
        for (var i = 0; i < this.listItem_h.$indexToRenderer.length; i++) {
            if (!this.listItem_h.$indexToRenderer[i])
                continue;
            this.listItem_h.$indexToRenderer[i].doSomeChange();
        }
    };
    ShopMyHuiYuanPanel.LAYER_LEVEL = LayerManager.UI_Main;
    return ShopMyHuiYuanPanel;
}(BaseEuiView));
__reflect(ShopMyHuiYuanPanel.prototype, "ShopMyHuiYuanPanel");
var listHuiYuanListItem = (function (_super) {
    __extends(listHuiYuanListItem, _super);
    function listHuiYuanListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    listHuiYuanListItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    listHuiYuanListItem.prototype.dataChanged = function () {
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
    listHuiYuanListItem.prototype.doSomeChange = function () {
    };
    listHuiYuanListItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    return listHuiYuanListItem;
}(eui.ItemRenderer));
__reflect(listHuiYuanListItem.prototype, "listHuiYuanListItem");
//# sourceMappingURL=ShopMyHuiYuanPanel.js.map