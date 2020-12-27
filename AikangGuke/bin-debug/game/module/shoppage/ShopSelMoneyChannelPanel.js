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
var ShopSelMoneyChannelPanel = (function (_super) {
    __extends(ShopSelMoneyChannelPanel, _super);
    function ShopSelMoneyChannelPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopSelMoneyChannel";
        return _this;
    }
    ShopSelMoneyChannelPanel.prototype.childrenCreated = function () {
        this._AddClick(this._btn_pay_weixin, this._OnClick);
        this._AddClick(this._btn_pay_zhifubao, this._OnClick);
        this._AddClick(this._btn_back_message, this._OnClick);
        this._AddClick(this._btn_back, this._OnClick);
        this.group_channelmessage.visible = false;
    };
    ShopSelMoneyChannelPanel.prototype.OnOpen = function () {
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_RequestMoneyChannel, this.onServerEventData, this);
    };
    ShopSelMoneyChannelPanel.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_RequestMoneyChannel, this.onServerEventData, this);
    };
    ;
    ShopSelMoneyChannelPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_RequestMoneyChannel:
                ShopPageManage.ins().data_MoneyChannelInfo = json.obj;
                this.dealChannelInfo();
                break;
        }
    };
    ShopSelMoneyChannelPanel.prototype.dealChannelInfo = function () {
        var data = ShopPageManage.ins().data_MoneyChannelInfo;
        if (data.suc == "no") {
            this.group_selmoneychannel.visible = false;
            this.group_channelmessage.visible = true;
            var mc = data.rl;
            var mdate = new Date(mc.blocktime);
            var pass = new Date().getTime() - mdate.getTime();
            var tm = Math.floor(60 - pass / 1000);
            if (tm >= 0) {
                this.lab_timetest.text = tm + "";
            }
        }
        else if (data.suc == "ok") {
            ViewManager.ins().open(ShopPayStateShowPanel);
            this.CloseSelf();
        }
    };
    ShopSelMoneyChannelPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._btn_back:
                this.CloseSelf();
                break;
            case this._btn_pay_weixin:
                this.sendRequestMoneyChannel("wxpay");
                break;
            case this._btn_pay_zhifubao:
                this.sendRequestMoneyChannel("alpay");
                break;
            case this._btn_back_message:
                this.group_selmoneychannel.visible = true;
                this.group_channelmessage.visible = false;
                break;
        }
    };
    ShopSelMoneyChannelPanel.prototype.sendRequestMoneyChannel = function (type) {
        var data = ShopPageManage.ins().data_ShopMakeList;
        if (data == null || data.length <= 0) {
            WarnWin.show("无可用订单", null, null);
            return;
        }
        var order = {
            company: GameGlobal.CurrentCompany,
            billnumber: data[0].billnumber,
            type: type
        };
        var rurl = FuncUrlUtil.ShopInfo_RequestMoneyChannel;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
    };
    ////////////////'
    ShopSelMoneyChannelPanel.LAYER_LEVEL = LayerManager.UI_Main_1;
    return ShopSelMoneyChannelPanel;
}(BaseEuiView));
__reflect(ShopSelMoneyChannelPanel.prototype, "ShopSelMoneyChannelPanel");
//# sourceMappingURL=ShopSelMoneyChannelPanel.js.map