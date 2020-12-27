class MvLoadingPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_Tips;
	/**
     * 输入
     */
	private uiImageContainer: eui.Group;

    private speed: number;
	
	private opentime:number;

	public constructor() {
		super();
		this.skinName = "MvLoading";	
	}

	protected childrenCreated(){
         this.speed = 10 / (1000 / 60);
    }

	OnOpen() {
        TimerManager.ins().doFrame(1, 0, this.enterFrame, this);	
		this.opentime = new Date().getTime();
	}

	OnClose() {
		TimerManager.ins().remove(this.enterFrame, this);
	};

    public enterFrame(time: number) {
        this.uiImageContainer.rotation += this.speed * time

		if(new Date().getTime() - this.opentime > 15*1000){
			WarnWin.show("网络连接超时，请重试!",null, this, null);
			this.CloseSelf();
		}
    };

	
}
