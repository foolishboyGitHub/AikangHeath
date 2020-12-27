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
var ShopOrderFloatingBallPanel = (function (_super) {
    __extends(ShopOrderFloatingBallPanel, _super);
    function ShopOrderFloatingBallPanel() {
        var _this = _super.call(this) || this;
        _this._godd = 0;
        _this._paystate = 0;
        _this.skinName = "ShopOrderFloatingBall";
        return _this;
    }
    ShopOrderFloatingBallPanel.prototype.childrenCreated = function () {
        this._AddClick(this._btn_bot_left, this._OnClick);
        this._AddClick(this._btn_bot_right, this._OnClick);
    };
    ShopOrderFloatingBallPanel.prototype.OnOpen = function () {
        EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, this.onRedBotHit, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_MakeOrder, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_CheckOrderBills, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_BackToShoping, this.onServerEventData, this);
        this.setBotStatus();
    };
    ShopOrderFloatingBallPanel.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, this.onRedBotHit, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_MakeOrder, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_CheckOrderBills, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_BackToShoping, this.onServerEventData, this);
    };
    ;
    ShopOrderFloatingBallPanel.prototype.setBotStatus = function () {
        var num = 0;
        var data = ShopPageManage.ins().data_ShopMakeList;
        if (data != null) {
            num = data.length;
        }
        this._godd = 0;
        if (num > 0) {
            var item = data[0];
            this._godd = item.workstate;
            this._paystate = item.paystate;
            ShopPageManage.ins()._addstate = this._godd;
            ShopPageManage.ins()._addbillnumber = item.billnumber;
        }
        var usenum = 0;
        var knarray = data;
        for (var i = 0; i < knarray.length; i++) {
            var item = knarray[i];
            if (item.sid > 0) {
                usenum++;
            }
        }
        if (this._godd <= 0) {
            if (usenum <= 0) {
                this._btn_bot_left.enabled = false;
                this._btn_bot_right.enabled = false;
                this.lab_redbot_num.text = "";
                this._btn_bot_left.label = "¥0";
            }
            else {
                this._btn_bot_left.enabled = true;
                this._btn_bot_right.enabled = true;
                this.lab_redbot_num.text = "" + usenum;
                var price = 0;
                for (var i = 0; i < knarray.length; i++) {
                    var item = knarray[i];
                    if (item.sid <= 0) {
                        continue;
                    }
                    var stem = ShopPageManage.ins().getServiceItemBySid(item.sid);
                    price += item.itembillyf;
                }
                this._btn_bot_left.label = "¥" + price;
                this._btn_bot_right.label = "下单";
            }
            if (this._shopMakeInfoListPaeul == null) {
                this._shopMakeInfoListPaeul = new ShopMakeInfoListPaeul();
                this.group_shopmakelist.addChild(this._shopMakeInfoListPaeul);
                this._shopMakeInfoListPaeul.DoOpen();
            }
            if (this._shopOrderInfoListPaeul != null) {
                this._shopOrderInfoListPaeul.visible = false;
            }
            this._shopMakeInfoListPaeul.setShopInfoList();
        }
        else if (this._godd == 1) {
            this._btn_bot_left.enabled = true;
            this.lab_redbot_num.text = "" + usenum;
            var knarray_1 = data;
            var price = 0;
            for (var i = 0; i < knarray_1.length; i++) {
                var item = knarray_1[i];
                if (item.sid <= 0) {
                    continue;
                }
                var stem = ShopPageManage.ins().getServiceItemBySid(item.sid);
                price += item.itembillyf;
            }
            this._btn_bot_left.label = "¥" + price;
            this._btn_bot_right.label = "结账";
            if (this._shopOrderInfoListPaeul == null) {
                this._shopOrderInfoListPaeul = new ShopOrderInfoListPanel();
                this.group_shopmakelist.addChild(this._shopOrderInfoListPaeul);
                this._shopOrderInfoListPaeul.DoOpen();
            }
            if (this._shopMakeInfoListPaeul != null) {
                this._shopMakeInfoListPaeul.visible = false;
            }
            this._shopOrderInfoListPaeul.visible = true;
            this._shopOrderInfoListPaeul.setShopInfoList();
        }
        else if (this._godd == 2) {
            this._btn_bot_left.enabled = true;
            this.lab_redbot_num.text = "" + usenum;
            var knarray_2 = data;
            var price = 0;
            for (var i = 0; i < knarray_2.length; i++) {
                var item = knarray_2[i];
                if (item.paystate > 0) {
                    continue;
                }
                price += item.itembillyf;
            }
            this._btn_bot_left.label = "¥" + price;
            this._btn_bot_right.label = "结账";
            this._btn_bot_right.enabled = true;
            if (price == 0) {
                this._btn_bot_right.label = "已结账";
                this._btn_bot_right.enabled = false;
            }
            if (this._shopOrderInfoListPaeul == null) {
                this._shopOrderInfoListPaeul = new ShopOrderInfoListPanel();
                this.group_shopmakelist.addChild(this._shopOrderInfoListPaeul);
                this._shopOrderInfoListPaeul.DoOpen();
            }
            if (this._shopMakeInfoListPaeul != null) {
                this._shopMakeInfoListPaeul.visible = false;
            }
            this._shopOrderInfoListPaeul.visible = true;
            this._shopOrderInfoListPaeul.setShopInfoList();
        }
    };
    ShopOrderFloatingBallPanel.prototype.onRedBotHit = function () {
        this.setBotStatus();
    };
    ShopOrderFloatingBallPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_MakeOrder:
                ShopPageManage.ins().data_ShopMakeList = json.obj;
                this.setBotStatus();
                break;
            case FuncUrlUtil.ShopInfo_BackToShoping:
                ShopPageManage.ins().data_ShopMakeList = json.obj;
                this.setBotStatus();
                break;
            case FuncUrlUtil.ShopInfo_CheckOrderBills:
                var checkinfo = json.obj;
                var params = "timeStamp=" + checkinfo.timeStamp
                    + "&" + "nonceStr=" + checkinfo.nonceStr
                    + "&" + "prepay_id=" + checkinfo.prepay_id
                    + "&" + "paySign=" + checkinfo.paySign
                    + "&" + "token=" + GameGlobal.token
                    + "&" + "company=" + GameGlobal.CurrentCompany;
                _WX_PayNavito(params);
                break;
        }
    };
    ShopOrderFloatingBallPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._btn_bot_left:
                ViewManager.ins().close(ShopOredrPanel);
                if (this._godd <= 0) {
                    if (this._shopMakeInfoListPaeul.visible == false) {
                        this._shopMakeInfoListPaeul._on_Show();
                    }
                    else {
                        this._shopMakeInfoListPaeul._on_hide();
                    }
                }
                else {
                    this._shopOrderInfoListPaeul._on_Show();
                }
                break;
            case this._btn_bot_right:
                if (this._godd <= 0) {
                    var order = {
                        company: GameGlobal.CurrentCompany,
                    };
                    var rurl = FuncUrlUtil.ShopInfo_MakeOrder;
                    sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
                }
                else {
                    ViewManager.ins().open(ShopSelMoneyChannelPanel);
                }
                break;
        }
    };
    ////////////////'
    ShopOrderFloatingBallPanel.LAYER_LEVEL = LayerManager.UI_Main;
    return ShopOrderFloatingBallPanel;
}(BaseEuiView));
__reflect(ShopOrderFloatingBallPanel.prototype, "ShopOrderFloatingBallPanel");
//# sourceMappingURL=ShopOrderFloatingBallPanel.js.map