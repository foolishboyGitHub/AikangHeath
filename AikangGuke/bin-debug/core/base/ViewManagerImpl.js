var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ViewManagerImpl = (function () {
    function ViewManagerImpl(mgr) {
        this.mMgr = mgr;
    }
    ViewManagerImpl.prototype.GetLoading = function () {
        if (this.m_Loading == null) {
            this.m_Loading = new CircleLoading;
        }
        return this.m_Loading;
    };
    ViewManagerImpl.prototype.Init = function () {
        // EventCenter.Instance.addEventListener(WindowEvent.ADD_DRAMA_WIN, this.addWinHd, this);
    };
    ViewManagerImpl.prototype.addWinHd = function (e) {
        switch (e._type) {
        }
    };
    ViewManagerImpl.prototype.closeWinHd = function (e) {
        switch (e._type) {
        }
    };
    /**
     * 打开一个界面，修改移除销毁参宿
     */
    ViewManagerImpl.prototype.Open = function (cls) {
        if (!cls) {
            return;
        }
        var view = ViewManager.ins().open(cls);
        view.mRemoveNotDestroyView = true;
    };
    /**
     * 关闭一个界面
     */
    ViewManagerImpl.prototype.Close = function (cls) {
        if (!cls) {
            return;
        }
        ViewManager.ins().close(cls);
    };
    /**
     * 销毁一个界面
     */
    ViewManagerImpl.prototype.Destroy = function (cls) {
        if (!cls) {
            return;
        }
        var view = ViewManager.ins().getView(cls);
        if (view) {
            view.mRemoveNotDestroyView = null;
            if (view.isShow()) {
                view.CloseSelf();
            }
            else {
                view.destoryView();
            }
        }
    };
    ViewManagerImpl.prototype.closeUIMainWindow = function () {
        var UIList = LayerManager.UI_Main;
        if (UIList.$children.length == 0) {
            return;
        }
        for (var i = 0; i < UIList.$children.length; i++) {
            var view = UIList.$children[i];
            if (ViewManager.ins().isShow(view)) {
                ViewManager.ins().close(view);
            }
        }
    };
    ViewManagerImpl.prototype.OnOpenView = function (view) {
        if (!view) {
            return;
        }
        if (view.parent == LayerManager.UI_FullScreen_Popup) {
            this.closeUIMainWindow();
        }
        if (view.parent == LayerManager.UI_Main) {
            // this.mMgr.closeEasy(egret.getQualifiedClassName(MainTopPanel))
            // this.mMgr.closeEasy(egret.getQualifiedClassName(PlayFunView))
            // this.mMgr.closeEasy(egret.getQualifiedClassName(GameSceneView))
            // this.mMgr.closeEasy(egret.getQualifiedClassName(MainBottomPanel))
            // this.mMgr.closeEasy(egret.getQualifiedClassName(ChatPanel))
            // GameMap.SetActive(false)  //这里会让背景变黑
            // this.UpdateUIMainVisible();  //处理可以一次打开两个面板(角色和背包面板.)
            // ViewManagerImpl.GetComBg().visible = true
            // 关闭在之上的层级
            var isRoleOpen = false;
            for (var _i = 0, _a = this.mMgr._opens; _i < _a.length; _i++) {
                var openViewKey = _a[_i];
                var openView = this.mMgr._views[openViewKey];
                if (openView == null) {
                    continue;
                }
                if (view == openView) {
                    break;
                }
                var viewCls = egret.getDefinitionByName(egret.getQualifiedClassName(openView));
                if (viewCls.LAYER_LEVEL == LayerManager.UI_Main_2) {
                    this.mMgr.closeEasy(egret.getQualifiedClassName(openView));
                }
            }
        }
        if (egret.is(view, "GuildWarInfoPanel")) {
            this.CloseMainTop2Panel();
        }
        else {
            // let view = this.mMgr.getView(WorldBossPlayPanel) as WorldBossPlayPanel
            // if (view) {
            //     if (view.GetShowState()) {
            //         this.CloseMainTop2Panel()
            //     }
            // }
        }
    };
    ViewManagerImpl.prototype.OnCloseOneView = function (view) {
        var viewCls = egret.getDefinitionByName(egret.getQualifiedClassName(view));
        this._CloseOneView();
    };
    ViewManagerImpl.prototype.OnClosePartView = function () {
        this._CloseOneView();
    };
    ViewManagerImpl.prototype.OnCloseAll = function () {
        // ViewManagerImpl.GetComBg().visible = false
    };
    ViewManagerImpl.prototype.CloseMainTop2Panel = function () {
    };
    ViewManagerImpl.prototype._CloseOneView = function () {
        if (LayerManager.HasMainPanel()) {
            // this.UpdateUIMainVisible();
            // return
        }
    };
    ViewManagerImpl.prototype.ShowLoading = function () {
        var loading = this.GetLoading();
        if (loading.m_IsShow) {
            return;
        }
        loading._Show();
    };
    ViewManagerImpl.prototype.HideLoading = function () {
        if (!this.m_Loading) {
            return;
        }
        if (!this.m_Loading.m_IsShow) {
            return;
        }
        this.m_Loading._Hide();
    };
    ;
    return ViewManagerImpl;
}());
__reflect(ViewManagerImpl.prototype, "ViewManagerImpl", ["IViewMangerImpl"]);
//# sourceMappingURL=ViewManagerImpl.js.map