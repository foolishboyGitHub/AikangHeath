class CircleLoading {

    private content: eui.Group;
    private uiImageContainer: eui.Group;
    private speed: number;

    public m_IsShow: boolean = false

    public constructor() {
        this.speed = 10 / (1000 / 60);
        this.init();
    }

    public init() {
        let group = new eui.Group
        this.content = group
        group.percentWidth = 100
        group.percentHeight = 100
        group.touchEnabled = true
        let bg = new eui.Image
        // bg.source = "ui_cm_bg_02"
        bg.percentWidth = 100
        bg.percentHeight = 100
        group.addChild(bg)
        this.uiImageContainer = new eui.Group();
        this.uiImageContainer.horizontalCenter = 0
        this.uiImageContainer.verticalCenter = 0
        group.addChild(this.uiImageContainer);
       
        // RES.getResByUrl(this.mResName, function (texture) {
            var img = new eui.Image
            img.source =  "load_Reel"
            img.x = -img.width * 0.5;
            img.y = -img.height * 0.5;
            this.uiImageContainer.addChild(img);
        // }, this, RES.ResourceItem.TYPE_IMAGE);
    }

    public enterFrame(time: number) {
        this.uiImageContainer.rotation += this.speed * time
    };

    public _Show() {

        this.m_IsShow = true
        GameGlobal.StageUtils.GetUIStage().addChild(this.content);
        TimerManager.ins().doFrame(1, 0, this.enterFrame, this);
    }

    public _Hide() {
        this.m_IsShow = false

        if (this.content && this.content.parent) {
            GameGlobal.StageUtils.GetUIStage().removeChild(this.content);
            this.uiImageContainer.rotation = 0;
        }
        TimerManager.ins().remove(this.enterFrame, this);
    }
}