var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var sproto;
(function (sproto) {
    var sprotoRequest = (function () {
        function sprotoRequest() {
        }
        // private static _HttHostDress:string = "http://192.168.125.10:8086";
        sprotoRequest.Init = function () {
        };
        sprotoRequest.sendPostRequest = function (params, rurl) {
            var _Httprequest = new egret.HttpRequest();
            _Httprequest.withCredentials = true;
            _Httprequest.responseType = egret.HttpResponseType.TEXT;
            _Httprequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            var tk = GameGlobal.token;
            if (tk != null) {
                _Httprequest.setRequestHeader("token", tk);
            }
            _Httprequest.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
            _Httprequest.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
            _Httprequest.addEventListener(egret.ProgressEvent.PROGRESS, sprotoRequest.onPostProgress, this);
            _Httprequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            var hosturl = this._HttHostDress + rurl;
            _Httprequest.open(hosturl, egret.HttpMethod.POST);
            _Httprequest.send(params);
            ViewManager.ins().open(MvLoadingPanel);
        };
        sprotoRequest.sendPostRequestJson = function (params, rurl) {
            var _Httprequest = new egret.HttpRequest();
            _Httprequest.withCredentials = true;
            _Httprequest.responseType = egret.HttpResponseType.TEXT;
            _Httprequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            var tk = GameGlobal.token;
            if (tk != null) {
                _Httprequest.setRequestHeader("token", tk);
            }
            _Httprequest.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
            _Httprequest.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
            _Httprequest.addEventListener(egret.ProgressEvent.PROGRESS, sprotoRequest.onPostProgress, this);
            _Httprequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            var hosturl = this._HttHostDress + rurl;
            _Httprequest.open(hosturl, egret.HttpMethod.POST);
            _Httprequest.send(params);
            ViewManager.ins().open(MvLoadingPanel);
        };
        sprotoRequest.onPostComplete = function (event) {
            ViewManager.ins().close(MvLoadingPanel);
            var request = event.currentTarget;
            var json = JSON.parse(request.response);
            if (json.msg) {
                //				console.log("ok resp :"+json.msg);
                sproto.sprotoMsgReceiver.Handler(json.msg, json);
                return;
            }
            console.log("Response  error msg is null ");
        };
        sprotoRequest.onPostIOError = function (event) {
            console.log("sproto   post error : " + event.type);
        };
        sprotoRequest.onPostProgress = function (event) {
            console.log("sproto    post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
        };
        sprotoRequest.loadURLImgOnThisDress = function (filename, callback, thisobj) {
            var imgsrc = sproto.sprotoRequest._HttHostDress + "/img/load/" + filename;
            var loader = new egret.URLLoader();
            loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
            //添加加载完成侦听
            loader.addEventListener(egret.Event.COMPLETE, callback, thisobj);
            //添加加载失败侦听
            var request = new egret.URLRequest(imgsrc);
            //开始加载
            loader.load(request);
        };
        //  private static _HttHostDress:string = "http://127.0.0.1:8086";
        //  private static _HttHostDress:string = "https://192.168.125.10:8086";
        // private static _HttHostDress:string = "http://139.159.135.51:8086";
        sprotoRequest._HttHostDress = "https://www.aijinkang.com:8086";
        return sprotoRequest;
    }());
    sproto.sprotoRequest = sprotoRequest;
    __reflect(sprotoRequest.prototype, "sproto.sprotoRequest");
})(sproto || (sproto = {}));
//# sourceMappingURL=sprotoRequest.js.map