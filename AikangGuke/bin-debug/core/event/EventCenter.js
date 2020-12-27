var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventCenter = (function () {
    function EventCenter() {
    }
    Object.defineProperty(EventCenter, "Instance", {
        get: function () {
            if (!this._instance)
                this._instance = new EventCenter();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    EventCenter.prototype.dispatchEvent = function (event) {
        GameGlobal.MessageCenter.dispatch(event.type, event);
    };
    EventCenter.prototype.addEventListener = function (type, listener, listenerObj) {
        GameGlobal.MessageCenter.addListener(type, listener, listenerObj);
    };
    EventCenter.prototype.removeEventListener = function (type, listener, listenerObj) {
        GameGlobal.MessageCenter.removeListener(type, listener, listenerObj);
    };
    return EventCenter;
}());
__reflect(EventCenter.prototype, "EventCenter");
//# sourceMappingURL=EventCenter.js.map