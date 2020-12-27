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
var loginview = (function (_super) {
    __extends(loginview, _super);
    function loginview() {
        var _this = _super.call(this) || this;
        _this.skinName = "login";
        return _this;
    }
    loginview.prototype.childrenCreated = function () {
        this._AddClick(this._loginBtn, this._OnClick);
        this._AddClick(this.btn_navito, this._OnClick);
        this._input_company.restrict = "A-Za-z0-9_-";
        this._input_username.restrict = "A-Za-z0-9_-";
        // this.revmsg.text = "url:"+window.location.href 
        this.revmsg.text = "url:"
            + "  company:" + egret.getOption("company") + " type:" + egret.getOption("type")
            + " wndtype:" + egret.getOption("wndtype") + " sessioncode:" + egret.getOption("sessioncode")
            + " relogin:" + egret.getOption("relogin") + " 顾客终端！！！ ";
    };
    loginview.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._loginBtn:
                this.onLogin();
                break;
            case this.btn_navito:
                _WX_TestNavito();
                break;
        }
    };
    loginview.prototype.onLogin = function () {
        var sessioncode = "073Qv1000hU6aK1CT41004ns373Qv10x";
        var params = "company=" + this._input_company.text
            + "&username=" + this._input_username.text + "&password=" + md5.hex_md5(this._input_password.text)
            + "&type=" + egret.getOption("type") + "&wndtype=" + "wxweb"
            + "&relogin=" + egret.getOption("relogin") + "&sessioncode=" + sessioncode;
        var rurl = "/dologin";
        sproto.sprotoRequest.sendPostRequest(params, rurl);
        this.revmsg.text = "开始登录...";
        GameGlobal.token = null;
        loginManager.ins()._loginState = 1;
    };
    loginview.prototype.onTalkLogin = function () {
        this._input_company.text = loginManager.ins()._talkcompany;
        this._input_username.text = loginManager.ins()._talkusername;
        this._input_password.text = loginManager.ins()._talkpassword;
        this.onLogin();
    };
    loginview.prototype.onTalkInfoShow = function (m) {
        var o = m.data;
        if (o.t == 0) {
            this._input_company.text = o.m;
        }
        if (o.t == 1) {
            this._input_username.text = o.m;
        }
        if (o.t == 2) {
            this._input_password.text = o.m;
        }
    };
    loginview.prototype.OnOpen = function () {
        EventCenter.Instance.addEventListener(DataTransEvent.Event_loginManager, this.onResponseDologin, this);
        EventCenter.Instance.addEventListener(loginManager.ins().talk_message_login_now, this.onTalkLogin, this);
        EventCenter.Instance.addEventListener(loginManager.ins().talk_message_infomessage, this.onTalkInfoShow, this);
    };
    loginview.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(DataTransEvent.Event_loginManager, this.onResponseDologin, this);
        EventCenter.Instance.removeEventListener(loginManager.ins().talk_message_login_now, this.onTalkLogin, this);
        EventCenter.Instance.removeEventListener(loginManager.ins().talk_message_infomessage, this.onTalkInfoShow, this);
    };
    ;
    loginview.prototype.onResponseDologin = function (e) {
        var json = e.data;
        var tk = json.obj.token;
        var scl = json.obj.scl;
        this.revmsg.text = "登录返回！";
        if (json.status == sproto.sprotoRespType.MSG_ERROR) {
            loginManager.ins()._loginState = 0;
            console.log("error resp :" + json.msg);
            if (scl == "userLocked") {
                console.log("账户被锁定! :");
                this.revmsg.text = "账户被锁定! :";
            }
            else if (scl == "passOutTime") {
                console.log("密码过期! :");
                this.revmsg.text = "密码过期! ";
            }
            else if (scl == "userOutTime") {
                console.log("账户过期! :");
                this.revmsg.text = "账户过期! ";
            }
            else if (scl == "userForbid") {
                console.log("账户被禁用! :");
                this.revmsg.text = "账户被禁用:";
            }
            else if (scl == "companyerror") {
                console.log("公司名称不存在!");
                this.revmsg.text = "公司名称不存在!";
            }
            else if (scl == "userOrPassWrong") {
                console.log("密码不正确!");
                this.revmsg.text = "密码不正确!";
            }
            else if (scl == "openidisnull") {
                console.log("微信openid 获取错误!!");
                this.revmsg.text = "微信用户信息获取错误 请用退出重新扫码!";
            }
            else if (scl == "addusererro") {
                console.log("添加用户错误!!");
                this.revmsg.text = "添加用户错误!!";
            }
            else if (scl == "UsernameNotFound") {
                console.log("用户名不正确!");
                this.revmsg.text = "用户名不正确!";
            }
            else if (scl == "UnknowError") {
                console.log("未知的登陆错误!");
                this.revmsg.text = "未知的登陆错误!";
            }
            return;
        }
        loginManager.ins()._loginState = 2;
        GameGlobal.token = tk;
        //保存用户登录信息
        loginManager.ins().saveStorageLoginInfo(tk);
        GameGlobal.myUser = scl.user;
        var rs = "ROLE_worker";
        var urs = scl.user.roles[0].name;
        GameGlobal.CurrentCompany = egret.getOption("company");
        GameGlobal.CurrentCompany = "aikang";
        ViewManager.ins().open(ShopAskNumPanel);
        this.CloseSelf();
    };
    ////////////////'
    loginview.LAYER_LEVEL = LayerManager.UI_Main;
    return loginview;
}(BaseEuiView));
__reflect(loginview.prototype, "loginview");
//# sourceMappingURL=loginview.js.map