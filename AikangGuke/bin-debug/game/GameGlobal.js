var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameGlobal = (function () {
    function GameGlobal() {
    }
    GameGlobal.initModule = function () {
        this.ViewManager = ViewManager.ins();
        this.ViewManagerImpl = new ViewManagerImpl(this.ViewManager);
        this.ViewManager.mViewImpl = this.ViewManagerImpl;
        this.StageUtils = new StageUtils;
        this.MessageCenter = MessageCenter.ins();
        this.ServerErrorTip = new ServerErrorTip();
        this.InstanceAllManager();
    };
    ;
    GameGlobal.InstanceAllManager = function () {
        loginManager.ins();
        ShopPageManage.ins();
    };
    GameGlobal.OnDayTimer = function () {
        for (var _i = 0, _a = this.AllModule; _i < _a.length; _i++) {
            var data = _a[_i];
            data.OnDayTimer();
        }
    };
    GameGlobal.InitConfig = function () {
        // console.profile("-----------InitConfig-------------")
        for (var _i = 0, _a = this.AllModule; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.InitConfig) {
                data.InitConfig();
            }
        }
        // console.profileEnd()
    };
    GameGlobal.seekArr = []; //密钥数组
    GameGlobal.perUrlArr = []; //个人权限数组数组
    GameGlobal.version = 0; //版本号 不断加1
    GameGlobal.webTime = 0; //服务器时间
    GameGlobal.CurrentCompany = ""; //服务器时间
    GameGlobal.AllModule = [];
    return GameGlobal;
}());
__reflect(GameGlobal.prototype, "GameGlobal");
//# sourceMappingURL=GameGlobal.js.map