var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var sproto;
(function (sproto) {
    var sprotoRespType = (function () {
        function sprotoRespType() {
        }
        sprotoRespType.MSG_OK = 200;
        sprotoRespType.MSG_ERROR = 500;
        return sprotoRespType;
    }());
    sproto.sprotoRespType = sprotoRespType;
    __reflect(sprotoRespType.prototype, "sproto.sprotoRespType");
})(sproto || (sproto = {}));
//# sourceMappingURL=sprotoRespType.js.map