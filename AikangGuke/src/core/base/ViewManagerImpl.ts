class ViewManagerImpl implements IViewMangerImpl {

    private mMgr: ViewManager
    public constructor(mgr: ViewManager) {
        this.mMgr = mgr
    }

    private m_Loading: CircleLoading;

    public GetLoading(): CircleLoading {
        if (this.m_Loading == null) {
            this.m_Loading = new CircleLoading
        }
        return this.m_Loading
    }

    public Init() {
        // EventCenter.Instance.addEventListener(WindowEvent.ADD_DRAMA_WIN, this.addWinHd, this);
    }
    private addWinHd(e: WindowEvent): void {
        switch (e._type) {
            // case WindowEvent.ADD_FRIEND_FLOWER_WIN:

            //     break;
 
        }
    }
    private closeWinHd(e: WindowEvent): void {
        switch (e._type) {
            // case WindowEvent.CLOSE_DRAMA_WIN:
               
                // break;
        
        }
    }
    /**
     * 打开一个界面，修改移除销毁参宿
     */
    public Open(cls) {
        if (!cls) {
            return
        }
        let view = ViewManager.ins().open(cls)
        view.mRemoveNotDestroyView = true
    }

    /**
     * 关闭一个界面
     */
    public Close(cls) {
        if (!cls) {
            return
        }
        ViewManager.ins().close(cls)
    }

    /**
     * 销毁一个界面
     */
    public Destroy(cls) {
        if (!cls) {
            return
        }
        let view = ViewManager.ins().getView(cls)
        if (view) {
            view.mRemoveNotDestroyView = null
            if (view.isShow()) {
                view.CloseSelf()
            } else {
                view.destoryView();
            }
        }
    }
    private closeUIMainWindow(): void {
        let UIList = LayerManager.UI_Main;
        if (UIList.$children.length == 0) {
            return
        }
        for (let i = 0; i < UIList.$children.length; i++) {
            let view = UIList.$children[i]
            if (ViewManager.ins().isShow(view)) {
                ViewManager.ins().close(view);
            }
        }
    }
    public OnOpenView(view: BaseEuiView) {
        if (!view) {
            return
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
            let isRoleOpen: boolean = false;
            for (let openViewKey of this.mMgr._opens) {
                let openView = this.mMgr._views[openViewKey]
                if (openView == null) {
                    continue
                }
                if (view == openView) {
                    break
                }
                let viewCls = egret.getDefinitionByName(egret.getQualifiedClassName(openView))
                if (viewCls.LAYER_LEVEL == LayerManager.UI_Main_2) {
                    this.mMgr.closeEasy(egret.getQualifiedClassName(openView))
                }
            }
        }
        if (egret.is(view, "GuildWarInfoPanel")) {
            this.CloseMainTop2Panel()
        } else {
            // let view = this.mMgr.getView(WorldBossPlayPanel) as WorldBossPlayPanel
            // if (view) {
            //     if (view.GetShowState()) {
            //         this.CloseMainTop2Panel()
            //     }
            // }
        }
    }

    OnCloseOneView(view: BaseEuiView) {
        let viewCls = egret.getDefinitionByName(egret.getQualifiedClassName(view))
        this._CloseOneView()

    }

    OnClosePartView() {
        this._CloseOneView()
    }

    OnCloseAll() {
        // ViewManagerImpl.GetComBg().visible = false

    }

    public CloseMainTop2Panel(): void {

    }

    private _CloseOneView() {
        if (LayerManager.HasMainPanel()) {
            // this.UpdateUIMainVisible();
            // return
        }


    }


    public ShowLoading() {
        let loading = this.GetLoading()
        if (loading.m_IsShow) {
            return
        }
        loading._Show()
    }

    public HideLoading() {
        if (!this.m_Loading) {
            return
        }
        if (!this.m_Loading.m_IsShow) {
            return
        }
        this.m_Loading._Hide()
    };
}