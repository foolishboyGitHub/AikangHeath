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
var WindowEvent = (function (_super) {
    __extends(WindowEvent, _super);
    function WindowEvent(type, obj, bubbles, cancelable) {
        if (obj === void 0) { obj = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this._data = null;
        _this._type = "";
        _this._type = type;
        _this._data = obj;
        return _this;
    }
    Object.defineProperty(WindowEvent.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    WindowEvent.prototype.clone = function () {
        return new WindowEvent(this._type, this._data);
    };
    WindowEvent.Path = "pure.view.event.";
    /**
     * 显示或隐藏顶部功能按钮
     */
    WindowEvent.SHOW_OR_HIDE_NEV_MENS = WindowEvent.Path + "SHOW_OR_HIDE_NEV_MENS";
    return WindowEvent;
}(egret.Event));
__reflect(WindowEvent.prototype, "WindowEvent");
//# sourceMappingURL=WindowEvent.js.map