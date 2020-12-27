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
var BaseSystem = (function (_super) {
    __extends(BaseSystem, _super);
    function BaseSystem() {
        var _this = _super.call(this) || this;
        _this.m_Init = false;
        GameGlobal.AllModule.push(_this);
        return _this;
    }
    BaseSystem.prototype.InitConfig = function () {
        if (this.m_Init) {
            return;
        }
        this.m_Init = true;
        this.Init();
    };
    BaseSystem.prototype.Init = function () {
    };
    BaseSystem.prototype.OnDayTimer = function () {
    };
    BaseSystem.prototype.OnSocketClose = function () {
    };
    return BaseSystem;
}(BaseClass));
__reflect(BaseSystem.prototype, "BaseSystem");
//# sourceMappingURL=BaseSystem.js.map