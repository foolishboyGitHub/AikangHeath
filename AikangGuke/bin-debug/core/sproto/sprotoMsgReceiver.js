var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var sproto;
(function (sproto) {
    var sprotoMsgReceiver = (function () {
        function sprotoMsgReceiver() {
        }
        sprotoMsgReceiver.AddHandler = function (tag, rpc, thisObj) {
            if (!rpc) {
                return;
            }
            if (true) {
                if (sprotoMsgReceiver.m_RpcReqHandlerDict[tag]) {
                    console.error("重复注册协议 => " + tag);
                    return;
                }
            }
            sprotoMsgReceiver.m_RpcReqHandlerDict[tag] = { HandlerFunc: rpc, thisObject: thisObj };
        };
        sprotoMsgReceiver.Handler = function (tag, data) {
            var funcObj = sprotoMsgReceiver.m_RpcReqHandlerDict[tag];
            if (funcObj == null) {
                // console.log("SprotoReceiver.Handler =>无法处理消息", tag);
                return false;
            }
            //			console.log("SprotoReceiver.Handler => " + tag + " " + funcObj.thisObject)
            funcObj.HandlerFunc.call(funcObj.thisObject, data);
            return true;
        };
        sprotoMsgReceiver.m_RpcReqHandlerDict = {};
        return sprotoMsgReceiver;
    }());
    sproto.sprotoMsgReceiver = sprotoMsgReceiver;
    __reflect(sprotoMsgReceiver.prototype, "sproto.sprotoMsgReceiver");
})(sproto || (sproto = {}));
//# sourceMappingURL=sprotoMsgReceiver.js.map