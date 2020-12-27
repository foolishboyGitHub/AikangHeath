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
var loginviewX = (function (_super) {
    __extends(loginviewX, _super);
    function loginviewX() {
        var _this = _super.call(this) || this;
        _this.skinName = "login";
        return _this;
    }
    loginviewX.prototype.childrenCreated = function () {
        this._AddClick(this._loginBtn, this._OnClick);
        this._AddClick(this._gouqiu, this._OnClick);
        // this._gouqiu.visible = false;
        this.__request = new XMLHttpRequest();
        this.__request.withCredentials = true;
        this.__request.onload = this.onPostComplete;
        // this.__request.addEventListener("load",this.onPostComplete);
        // this.__request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError);
        // this.__request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress);
        this.statusPostLabel = new egret.TextField();
        this.addChild(this.statusPostLabel);
        this.statusPostLabel.width = 400;
        this.statusPostLabel.size = 18;
        this.statusPostLabel.x = 150;
        this.statusPostLabel.y = 100;
    };
    loginviewX.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._loginBtn:
                this.onLogin();
                break;
            case this._gouqiu:
                this.onGouqiu();
                break;
        }
    };
    loginviewX.prototype.onLogin = function () {
        var params = "username=" + this._input_username.text + "&password=" + this._input_password.text;
        var rurl = "http://localhost:8082/dologin";
        this.sendPostRequest(params, rurl);
    };
    loginviewX.prototype.onGouqiu = function () {
        var params = "username=" + this._input_username.text + "&password=" + this._input_password.text;
        var rurl = "http://localhost:8082/employee";
        this.sendPostRequest(params, rurl);
    };
    loginviewX.prototype.CloseSelf = function () {
        this.parent.removeChild(this);
    };
    loginviewX.prototype.sendPostRequest = function (params, rurl) {
        var cckk = _getCookie_();
        console.log("cookie is : ", cckk);
        var request = this.__request;
        //       request.responseType = RES.ResourceItem.TYPE_TEXT;
        request.open('POST', rurl, true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        console.log("heads is : ", request.getAllResponseHeaders());
        request.send(params);
    };
    loginviewX.prototype.onPostComplete = function (event) {
        var request = event.currentTarget;
        console.log("post data : ", request.response);
        var cckk = _getCookie_();
        console.log("cookie is : ", cckk);
        var json = JSON.parse(request.response);
        if (json.status == 200) {
            console.log(json.msg);
            // this._loginBtn.visible = false;
            // this._gouqiu.visible = true;
        }
        else if (json.status == 201) {
            console.log(json.msg);
            // this._loginBtn.visible = true;
            // this._gouqiu.visible = false;
        }
    };
    loginviewX.prototype.onPostIOError = function (event) {
        console.log("post error : " + event.type);
    };
    loginviewX.prototype.onPostProgress = function (event) {
        console.log("post progress :  ");
    };
    ////////////////'
    loginviewX.LAYER_LEVEL = LayerManager.UI_Main;
    return loginviewX;
}(BaseEuiView));
__reflect(loginviewX.prototype, "loginviewX");
//# sourceMappingURL=loginviewX.js.map