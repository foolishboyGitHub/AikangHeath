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
var MvLoadingPanel = (function (_super) {
    __extends(MvLoadingPanel, _super);
    function MvLoadingPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "MvLoading";
        return _this;
    }
    MvLoadingPanel.prototype.childrenCreated = function () {
        this.speed = 10 / (1000 / 60);
    };
    MvLoadingPanel.prototype.OnOpen = function () {
        TimerManager.ins().doFrame(1, 0, this.enterFrame, this);
        this.opentime = new Date().getTime();
    };
    MvLoadingPanel.prototype.OnClose = function () {
        TimerManager.ins().remove(this.enterFrame, this);
    };
    ;
    MvLoadingPanel.prototype.enterFrame = function (time) {
        this.uiImageContainer.rotation += this.speed * time;
        if (new Date().getTime() - this.opentime > 15 * 1000) {
            WarnWin.show("网络连接超时，请重试!", null, this, null);
            this.CloseSelf();
        }
    };
    ;
    ////////////////'
    MvLoadingPanel.LAYER_LEVEL = LayerManager.UI_Tips;
    return MvLoadingPanel;
}(BaseEuiView));
__reflect(MvLoadingPanel.prototype, "MvLoadingPanel");
//# sourceMappingURL=MvLoadingPanel.js.map