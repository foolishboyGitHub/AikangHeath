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
var loginManager = (function (_super) {
    __extends(loginManager, _super);
    function loginManager() {
        var _this = _super.call(this) || this;
        _this.storcompanykey = "storcompanykey";
        _this.storusernamekey = "storusernamekey";
        _this.storpasswordkey = "storpasswordkey";
        _this.stortokenkey = "stortokenkey";
        _this._loginState = 0; //0未登录  1登录中  2登录成功
        _this._talkcompany = "";
        _this._talkusername = "";
        _this._talkpassword = "";
        _this.talk_message_infomessage = "talk_message_infomessage";
        _this.talk_message_login_now = "talk_message_login_now";
        sproto.sprotoMsgReceiver.AddHandler("/dologin", _this.onResponsDologin, _this);
        return _this;
    }
    loginManager.ins = function () {
        return _super.ins.call(this);
    };
    loginManager.prototype.onResponsDologin = function (json) {
        EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_loginManager, json));
    };
    loginManager.prototype.loadStorageLoginInfo = function () {
        this._storagetoken = egret.localStorage.getItem(this.stortokenkey);
        if (this._storagetoken) {
            return true;
        }
        return false;
    };
    loginManager.prototype.saveStorageLoginInfo = function (token) {
        var bsp = egret.localStorage.setItem(this.storpasswordkey, token);
    };
    loginManager.prototype.clearStorageLoginInfo = function () {
        var bsc = egret.localStorage.removeItem(this.storcompanykey);
        var bsu = egret.localStorage.removeItem(this.storusernamekey);
        var bsp = egret.localStorage.removeItem(this.storpasswordkey);
        var bsp = egret.localStorage.removeItem(this._storagetoken);
    };
    loginManager.prototype.logout = function () {
        var params = "";
        var rurl = "/logout";
        sproto.sprotoRequest.sendPostRequest(params, rurl);
        this.clearStorageLoginInfo();
    };
    return loginManager;
}(BaseSystem));
__reflect(loginManager.prototype, "loginManager");
//# sourceMappingURL=loginManager.js.map