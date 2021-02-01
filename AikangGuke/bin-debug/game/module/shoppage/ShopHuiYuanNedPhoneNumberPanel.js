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
var ShopHuiYuanNedPhoneNumberPanel = (function (_super) {
    __extends(ShopHuiYuanNedPhoneNumberPanel, _super);
    function ShopHuiYuanNedPhoneNumberPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopHuiYuanNedPhoneNumber";
        return _this;
    }
    ShopHuiYuanNedPhoneNumberPanel.prototype.childrenCreated = function () {
        this.lab_phone.restrict = "0-9";
        this.lab_code.restrict = "0-9";
        this._AddClick(this._btn_sure, this._OnClick);
        this._AddClick(this._btn_getcode, this._OnClick);
    };
    ShopHuiYuanNedPhoneNumberPanel.prototype.OnOpen = function () {
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_BindTeleVerifySendCode, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode, this.onServerEventData, this);
        this.timer = new egret.Timer(1000);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.start();
    };
    ShopHuiYuanNedPhoneNumberPanel.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_BindTeleVerifySendCode, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode, this.onServerEventData, this);
        this.timer.stop();
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer = null;
    };
    ;
    ShopHuiYuanNedPhoneNumberPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_BindTeleVerifySendCode:
                var data = json.obj;
                if (data.msg == "later") {
                    var tm = data.tm;
                    WarnWin.show("请 " + tm + " 秒后再获取验证码！", null, null);
                    this._tm = tm;
                }
                if (data.msg == "ok") {
                    WarnWin.show(" 验证码已发送，请查看手机短信！", null, null);
                    this._tm = data.tm;
                }
                break;
            case FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode:
                var data = json.obj;
                this.setBindResault(data);
                break;
        }
    };
    ShopHuiYuanNedPhoneNumberPanel.prototype.setBindResault = function (data) {
        if (data.msg == "overtime") {
            WarnWin.show("验证码已过期！", null, null);
            return;
        }
        if (data.msg == "ok") {
            WarnWin.show("绑定成功！", null, null);
            var company = {
                name: GameGlobal.CurrentCompany
            };
            var rurl = FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo;
            sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(company), rurl);
            this.CloseSelf();
        }
    };
    ShopHuiYuanNedPhoneNumberPanel.prototype.timerFunc = function () {
        if (this._tm > 0) {
            this._btn_getcode.label = "(" + this._tm + ")秒后获取";
            this._btn_getcode.enabled = false;
        }
        else {
            this._btn_getcode.label = "获取";
            this._btn_getcode.enabled = true;
        }
        if (this._tm > 0) {
            this._tm--;
        }
    };
    ShopHuiYuanNedPhoneNumberPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._btn_getcode:
                this.sendGetTelenumberCode();
                break;
            case this._btn_sure:
                this.sendTelenumberCodeToBind();
                break;
        }
    };
    ShopHuiYuanNedPhoneNumberPanel.prototype.sendGetTelenumberCode = function () {
        var telenumber = this.lab_phone.text;
        if (telenumber.length != 11) {
            WarnWin.show("请输入正确的手机号码", null, null);
            return;
        }
        var info = {
            telenumber: telenumber
        };
        var rurl = FuncUrlUtil.ShopInfo_BindTeleVerifySendCode;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(info), rurl);
    };
    ShopHuiYuanNedPhoneNumberPanel.prototype.sendTelenumberCodeToBind = function () {
        var telenumber = this.lab_phone.text;
        var code = this.lab_code.text;
        if (telenumber.length != 11) {
            WarnWin.show("请输入正确的手机号码", null, null);
            return;
        }
        if (code.length <= 1) {
            WarnWin.show("请输入正确的验证码", null, null);
            return;
        }
        var info = {
            telenumber: telenumber,
            code: code
        };
        var rurl = FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(info), rurl);
    };
    ////////////////'
    ShopHuiYuanNedPhoneNumberPanel.LAYER_LEVEL = LayerManager.UI_USER_INFO;
    return ShopHuiYuanNedPhoneNumberPanel;
}(BaseEuiView));
__reflect(ShopHuiYuanNedPhoneNumberPanel.prototype, "ShopHuiYuanNedPhoneNumberPanel");
//# sourceMappingURL=ShopHuiYuanNedPhoneNumberPanel.js.map