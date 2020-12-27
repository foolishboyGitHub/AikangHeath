var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ServerErrorTip = (function () {
    function ServerErrorTip() {
        sproto.sprotoMsgReceiver.AddHandler("/NoAuthority", this.onNoAuthority, this);
        sproto.sprotoMsgReceiver.AddHandler("/logout", this.onLogoutSucess, this);
        sproto.sprotoMsgReceiver.AddHandler("/NoAuthority_ANONYMOUS", this.NoAuthority_ANONYMOUS, this);
        sproto.sprotoMsgReceiver.AddHandler("/Error_Get", this.onErrorGet, this);
    }
    //没有权限
    ServerErrorTip.prototype.onErrorGet = function (json) {
        var s = json.obj;
        WarnWin.show(s, null, this);
    };
    //没有权限
    ServerErrorTip.prototype.onNoAuthority = function (json) {
        var s = json.obj;
        WarnWin.show(s, null, this);
    };
    //注销成功
    ServerErrorTip.prototype.onLogoutSucess = function (json) {
        var s = json.obj;
        loginManager.ins()._loginState = 0;
        ViewManager.ins().closeAll();
        ViewManager.ins().open(loginview);
    };
    //没有登录
    ServerErrorTip.prototype.NoAuthority_ANONYMOUS = function (json) {
        var s = json.obj;
        WarnWin.show(s, showlogin, this, showlogin);
        function showlogin() {
            loginManager.ins()._loginState = 0;
            ViewManager.ins().closeAll();
            ViewManager.ins().open(loginview);
        }
    };
    return ServerErrorTip;
}());
__reflect(ServerErrorTip.prototype, "ServerErrorTip");
//# sourceMappingURL=ServerErrorTip.js.map