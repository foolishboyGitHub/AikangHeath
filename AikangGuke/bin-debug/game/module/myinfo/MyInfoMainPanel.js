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
var MyInfoMainPanel = (function (_super) {
    __extends(MyInfoMainPanel, _super);
    function MyInfoMainPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "MyInfoMainSkin";
        return _this;
    }
    MyInfoMainPanel.prototype.OnOpen = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    MyInfoMainPanel.prototype._OnClick = function (e) {
        switch (e.target) {
        }
    };
    MyInfoMainPanel.prototype.OnClose = function () {
    };
    ;
    MyInfoMainPanel.prototype.onEventData = function (e) {
    };
    MyInfoMainPanel.prototype.onListUpdate = function () {
    };
    MyInfoMainPanel.prototype.on_btn_sure = function () {
    };
    MyInfoMainPanel.LAYER_LEVEL = LayerManager.UI_Main;
    return MyInfoMainPanel;
}(BaseEuiView));
__reflect(MyInfoMainPanel.prototype, "MyInfoMainPanel");
//# sourceMappingURL=MyInfoMainPanel.js.map