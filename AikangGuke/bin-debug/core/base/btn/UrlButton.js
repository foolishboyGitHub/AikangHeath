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
var UrlButton = (function (_super) {
    __extends(UrlButton, _super);
    function UrlButton() {
        return _super.call(this) || this;
    }
    UrlButton.prototype.initUrl = function (lockUrl) {
        this.LockUrl = lockUrl;
        this.setEnableByUrl(this.LockUrl);
    };
    UrlButton.prototype.setEnableByUrl = function (curl) {
        //admin开挂
        if (GameGlobal.myUser.username != null && GameGlobal.myUser.username == "admin") {
            EnableViewCtrlManage.SetViewEnableTrue(this);
            return;
        }
        var find = false;
        for (var i = 0; i < GameGlobal.perUrlArr.length; i++) {
            var per = GameGlobal.perUrlArr[i];
            var purl = per.path;
            if (purl.indexOf(curl) >= 0 || curl.indexOf(purl) >= 0) {
                find = true;
                break;
            }
        }
        if (find) {
            EnableViewCtrlManage.SetViewEnableTrue(this);
        }
        else {
            EnableViewCtrlManage.SetViewEnableFalse(this);
        }
    };
    return UrlButton;
}(eui.Button));
__reflect(UrlButton.prototype, "UrlButton");
//# sourceMappingURL=UrlButton.js.map