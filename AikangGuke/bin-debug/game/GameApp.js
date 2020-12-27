var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameApp = (function () {
    function GameApp() {
        this.init();
    }
    /**
     * 初始化函数
     */
    GameApp.prototype.init = function () {
        // 通信初始化
        sproto.sprotoRequest.Init();
        GameGlobal.initModule();
        ResMgr.Init();
        ResMgr.GmInit();
        // 显示层级
        LayerManager.Init();
        var t = egret.getTimer();
        GameGlobal.InitConfig();
        // 特殊处理的代码
        console.log("模块初始化完成 耗时:" + (egret.getTimer() - t));
        var lview = new loginview();
        //egret.MainContext.instance.stage.addChild(lview);
        //GameGlobal.StageUtils.GetStage().addChild(lview);
        // GameGlobal.StageUtils.GetUIStage().addChild(lview);
        LayerManager.Game_Main.addChild(new backGroundView());
        var rl = egret.getOption("relogin");
        if (rl == 'no' && loginManager.ins().loadStorageLoginInfo()) {
            GameGlobal.token = loginManager.ins()._storagetoken;
            ViewManager.ins().open(MainTableViewPanel);
        }
        else {
            if (rl == "no") { }
            ViewManager.ins().open(loginview);
        }
        //		ViewManager.ins().open(topTouchView);
        //		ViewManager.ins().open(loginview);
        //
    };
    GameApp.prototype.wxinit = function () {
        _WX_SetConfig();
    };
    return GameApp;
}());
__reflect(GameApp.prototype, "GameApp");
//# sourceMappingURL=GameApp.js.map