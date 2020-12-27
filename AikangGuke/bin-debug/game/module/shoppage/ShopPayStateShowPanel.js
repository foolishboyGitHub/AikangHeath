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
var ShopPayStateShowPanel = (function (_super) {
    __extends(ShopPayStateShowPanel, _super);
    function ShopPayStateShowPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopPayStateShow";
        return _this;
    }
    ShopPayStateShowPanel.prototype.childrenCreated = function () {
        // this._AddClick(this._btn_pay_weixin, this._OnClick);
        this._AddClick(this._btn_back_order, this._OnClick);
        this._AddClick(this._btn_back, this._OnClick);
        this._btn_back.visible = false;
        this.lab_payfail.visible = false;
    };
    ShopPayStateShowPanel.prototype.OnOpen = function () {
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_AskMoneyChannel, this.onServerEventData, this);
        this.timer = new egret.Timer(1000);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.start();
        this._lasttimeAskServer = new Date().getTime();
        var data = ShopPageManage.ins().data_MoneyChannelInfo;
        var mc = data.rl;
        if (mc != null) {
            if (mc.channelname == "wxpay") {
                this.group_paychannelweixin.visible = true;
                this.group_paychannelzhifubao.visible = false;
            }
            else if (mc.channelname == "alpay") {
                this.group_paychannelweixin.visible = false;
                this.group_paychannelzhifubao.visible = true;
            }
            this.lab_price.text = mc.blockbillprice + "";
        }
        this.group_success.visible = false;
    };
    ShopPayStateShowPanel.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_AskMoneyChannel, this.onServerEventData, this);
        this.timer.stop();
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer = null;
    };
    ;
    ShopPayStateShowPanel.prototype.timerFunc = function () {
        var data = ShopPageManage.ins().data_MoneyChannelInfo;
        var mc = data.rl;
        if (mc == null) {
            return;
        }
        var mdate = new Date(mc.blocktime);
        var pass = new Date().getTime() - mdate.getTime();
        var tm = Math.floor(MClUtil.CHANNEL_BLOCK_TIME - pass / 1000);
        if (tm >= 0) {
            this.lab_time.text = tm + "";
        }
        else {
            this._btn_back.visible = true;
            this.lab_payfail.visible = true;
        }
        //10秒钟询问一下服务器是否付款成功
        if (tm >= 0 && new Date().getTime() - this._lasttimeAskServer > 10 * 1000) {
            this._lasttimeAskServer = new Date().getTime();
            var gd = ShopPageManage.ins().data_ShopMakeList;
            if (gd != null && gd.length > 0) {
                var order = {
                    company: GameGlobal.CurrentCompany,
                    billnumber: gd[0].billnumber
                };
                var rurl = FuncUrlUtil.ShopInfo_AskMoneyChannel;
                sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
            }
        }
    };
    ShopPayStateShowPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_AskMoneyChannel:
                var data = json.obj;
                if (data.suc == "ok") {
                    ShopPageManage.ins().data_ShopMakeList = data.rl;
                    this.group_timeshow.visible = false;
                    this.group_success.visible = true;
                }
                break;
        }
    };
    ShopPayStateShowPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._btn_back_order:
                EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, null));
                this.CloseSelf();
                break;
            case this._btn_back:
                this.CloseSelf();
                break;
        }
    };
    ////////////////'
    ShopPayStateShowPanel.LAYER_LEVEL = LayerManager.UI_Main_1;
    return ShopPayStateShowPanel;
}(BaseEuiView));
__reflect(ShopPayStateShowPanel.prototype, "ShopPayStateShowPanel");
//# sourceMappingURL=ShopPayStateShowPanel.js.map