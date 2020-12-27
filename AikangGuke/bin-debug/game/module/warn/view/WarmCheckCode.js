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
var WarmCheckCode = (function (_super) {
    __extends(WarmCheckCode, _super);
    function WarmCheckCode() {
        return _super.call(this) || this;
    }
    // normal sure
    WarmCheckCode.show = function (func, thisObj, data) {
        if (data === void 0) { data = null; }
        TimerManager.ins().doNext(function () {
            var win = ViewManager.ins().open(WarmCheckCode);
            win.setwin(func, thisObj, data);
        }, null);
    };
    ;
    WarmCheckCode.prototype.setwin = function (callbackFunc, callthisobj, data) {
        if (data === void 0) { data = null; }
        this.callfunc = callbackFunc;
        this.callthisobj = callthisobj;
        this.calldata = data;
    };
    ;
    //使用浏览器内置语音录入存在很多兼容性问题，这里放弃了 采用 android和iphone外部调用
    // userRecord(){
    // 	WorkerPickManager.ins().audio_context = new AudioContext;// AudioContext;
    // 	navigator.getUserMedia({audio: true},this.startUserMedia, this.erroUserMedio);
    // }
    // startUserMedia(stream) {
    // 	WorkerPickManager.ins().input = WorkerPickManager.ins().audio_context.createMediaStreamSource(stream);
    // 	WorkerPickManager.ins().record = _getNewRecorder(WorkerPickManager.ins().input);
    // 	var rd = WorkerPickManager.ins().record;
    // 	let a = 0;
    // 	// Uncomment if you want the audio to feedback directly
    // 	//input.connect(audio_context.destination);
    // 	//__log('Input connected to audio context destination.');
    // }
    // startRecord(){
    // 	var rd = WorkerPickManager.ins().record;
    // 	if(rd != null){
    // 		rd.record();
    // 	}
    // }
    // stopRecord(){
    // 	var rd = WorkerPickManager.ins().record;
    // 	if(rd != null){
    // 		rd.stop();
    // 		rd.exportWAV(function(blob){
    // 			var bl = blob;
    // 			var a = 1;
    // 			var url = URL.createObjectURL(blob);
    // 			var loader:egret.URLLoader = new egret.URLLoader();
    // 			//设置加载方式为声音
    // 			loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
    // 			//添加加载完成侦听
    // 			loader.addEventListener(egret.Event.COMPLETE, function(event:egret.Event){
    // 				var loader:egret.URLLoader = <egret.URLLoader>event.target;
    // 				//获取加载到的 Sound 对象
    // 				var sound:egret.Sound = <egret.Sound>loader.data;
    // 				this.sound = sound;
    // 				sound.play(0,1);
    // 			}, this);
    // 			//音频资源放在resource文件夹下
    // 			var request:egret.URLRequest = new egret.URLRequest(url);
    // 			//开始加载
    // 			loader.load(request);
    // 		});
    // 	}
    // }
    // playRecord(){
    // }
    WarmCheckCode.prototype.erroUserMedio = function (e) {
    };
    WarmCheckCode.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.skinName = "WarmCodeCheck";
        this._input_code.restrict = "0-9";
        this.validateNow();
    };
    WarmCheckCode.prototype.OnOpen = function () {
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    WarmCheckCode.prototype.OnClose = function () {
        this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.callfunc = null;
        this.callthisobj = null;
        this.calldata = null;
    };
    ;
    WarmCheckCode.prototype.onCodeInputAndCallBack = function (m) {
        var code = m.data.m;
        if (this.callfunc != null)
            this.callfunc.call(this.callthisobj, this.calldata, code);
        this.CloseSelf();
    };
    WarmCheckCode.prototype.onTap = function (e) {
        switch (e.currentTarget) {
            case this.sureBtn:
                var code = this._input_code.text;
                if (this._input_code.text.length != 4) {
                    break;
                }
                if (this.callfunc != null)
                    this.callfunc.call(this.callthisobj, this.calldata, code);
                this.CloseSelf();
                break;
            case this.closeBtn:
                this.CloseSelf();
                break;
        }
    };
    WarmCheckCode.LAYER_LEVEL = LayerManager.UI_Popup;
    return WarmCheckCode;
}(BaseEuiView));
__reflect(WarmCheckCode.prototype, "WarmCheckCode");
//# sourceMappingURL=WarmCheckCode.js.map