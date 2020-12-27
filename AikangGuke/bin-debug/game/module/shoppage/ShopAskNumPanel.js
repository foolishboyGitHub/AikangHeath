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
var ShopAskNumPanel = (function (_super) {
    __extends(ShopAskNumPanel, _super);
    function ShopAskNumPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopAskNumSkin";
        return _this;
    }
    ShopAskNumPanel.prototype.childrenCreated = function () {
        var _raido_group = new eui.RadioButtonGroup();
        _raido_group.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);
        var _raido_group_time = new eui.RadioButtonGroup();
        _raido_group_time.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler_time, this);
        this._radio_num_0.group = _raido_group;
        this._radio_num_1.group = _raido_group;
        this._radio_num_2.group = _raido_group;
        this._radio_num_3.group = _raido_group;
        this._radio_num_4.group = _raido_group;
        this._radio_num_5.group = _raido_group;
        this._radio_num_6.group = _raido_group;
        this._radio_num_7.group = _raido_group;
        this._radio_num_8.group = _raido_group;
        this._radio_time_now.group = _raido_group_time;
        this._radio_time_yuyue.group = _raido_group_time;
        var _raido_group_last = new eui.RadioButtonGroup();
        this._radio_last_old.group = _raido_group_last;
        this._radio_last_new.group = _raido_group_last;
        this.group_asknum.visible = false;
        this.group_last.visible = false;
        this.group_more.visible = false;
        this.group_time.visible = false;
        this.lab_gukenum.restrict = "0-9";
        this._AddClick(this._btn_more, this._OnClick);
        this._AddClick(this._btn_sure, this._OnClick);
        this._AddClick(this._btn_cancel, this._OnClick);
        this._AddClick(this._radio_last_old, this._OnClick);
        this._AddClick(this._radio_last_new, this._OnClick);
    };
    ShopAskNumPanel.prototype.OnOpen = function () {
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetShopInfo, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetMakeShopInfo, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_newShopMake, this.onServerEventData, this);
        this.sendGetMakeShopInfo();
    };
    ShopAskNumPanel.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetShopInfo, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetMakeShopInfo, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_newShopMake, this.onServerEventData, this);
    };
    ;
    ShopAskNumPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_GetMakeShopInfo:
                ShopPageManage.ins().data_ShopMakeList = json.obj;
                var data = ShopPageManage.ins().data_ShopMakeList;
                var num = 0;
                var godd = 0;
                if (data != null) {
                    num = data.length;
                }
                if (num <= 0) {
                    this.group_asknum.visible = true;
                }
                else {
                    var item = data[0];
                    godd = item.workstate;
                    if (godd == 0) {
                        this.group_last.visible = true;
                    }
                    else if (godd == 1) {
                        this.sendShopInfo();
                    }
                    else if (godd == 2) {
                        this.sendShopInfo();
                    }
                }
                break;
            case FuncUrlUtil.ShopInfo_GetShopInfo:
                ShopPageManage.ins().data_ShopInfoItem = json.obj;
                this.CloseSelf();
                ViewManager.ins().open(MainTableViewPanel);
                break;
            case FuncUrlUtil.ShopInfo_newShopMake:
                ShopPageManage.ins().data_ShopMakeList = json.obj;
                this.sendShopInfo();
                break;
        }
    };
    ShopAskNumPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._btn_more:
                this.group_more.visible = true;
                break;
            case this._btn_cancel:
                this.group_more.visible = false;
                break;
            case this._btn_sure:
                this.group_more.visible = false;
                var strnum = this.lab_gukenum.text;
                ShopPageManage.ins().ShopGuke_Num = Number(strnum);
                this.sendNewShop();
                break;
            case this._radio_last_old:
                var data = ShopPageManage.ins().data_ShopMakeList;
                var item = data[0];
                ShopPageManage.ins().ShopGuke_Num = item.gukenum;
                this.sendShopInfo();
                break;
            case this._radio_last_new:
                var tw = egret.Tween.get(this.group_last);
                tw.to({ alpha: 0 }, 100).call(function () {
                    this.group_last.visible = false;
                    this.group_asknum.visible = true;
                    this.group_asknum.alpha = 0;
                    var tw1 = egret.Tween.get(this.group_asknum);
                    tw1.to({ alpha: 1 }, 100);
                }, this);
                break;
        }
    };
    ShopAskNumPanel.prototype.sendGetMakeShopInfo = function () {
        var cmpany = {
            name: GameGlobal.CurrentCompany
        };
        var rurl = FuncUrlUtil.ShopInfo_GetMakeShopInfo;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
    };
    ShopAskNumPanel.prototype.sendShopInfo = function () {
        var cmpany = {
            name: GameGlobal.CurrentCompany
        };
        var rurl = FuncUrlUtil.ShopInfo_GetShopInfo;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
    };
    ShopAskNumPanel.prototype.sendNewShop = function () {
        var cmpany = {
            name: GameGlobal.CurrentCompany,
            num: ShopPageManage.ins().ShopGuke_Num
        };
        var rurl = FuncUrlUtil.ShopInfo_newShopMake;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
    };
    ShopAskNumPanel.prototype.radioChangeHandler = function (e) {
        //当点击第一个选项卡按钮时，下面输出为
        var radioGroup = e.target;
        var sel = radioGroup.selectedValue;
        ShopPageManage.ins().ShopGuke_Num = Number(sel) + 1;
        this.sendNewShop();
    };
    ShopAskNumPanel.prototype.radioChangeHandler_time = function (e) {
        //当点击第一个选项卡按钮时，下面输出为
        var radioGroup = e.target;
        var sel = radioGroup.selectedValue;
        ShopPageManage.ins().ShopGuke_TimeType = sel;
    };
    ////////////////'
    ShopAskNumPanel.LAYER_LEVEL = LayerManager.UI_USER_INFO;
    return ShopAskNumPanel;
}(BaseEuiView));
__reflect(ShopAskNumPanel.prototype, "ShopAskNumPanel");
//# sourceMappingURL=ShopAskNumPanel.js.map