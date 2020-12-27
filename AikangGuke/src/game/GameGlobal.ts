class GameGlobal {
	public static SDKUser:any;

	public static token:string;
	public static seekArr:Array<number>=[];//密钥数组
	public static perUrlArr:any=[];//个人权限数组数组
	public static myUser:any;//个人权限数组数组
	public static version:number = 0//版本号 不断加1
	public static webTime:number = 0; //服务器时间

	public static CurrentCompany:string = ""; //服务器时间
	
	public static ViewManager: ViewManager
	public static ViewManagerImpl: ViewManagerImpl
	public static MessageCenter: MessageCenter
	public static StageUtils: StageUtils;
	public static ServerErrorTip: ServerErrorTip;
	public static AllModule: BaseSystem[] = []

	public static initModule() {

		this.ViewManager = ViewManager.ins();
		this.ViewManagerImpl = new ViewManagerImpl(this.ViewManager);
		this.ViewManager.mViewImpl = this.ViewManagerImpl;
	
		this.StageUtils = new StageUtils;
		
		this.MessageCenter = MessageCenter.ins();

		this.ServerErrorTip = new ServerErrorTip();

		this.InstanceAllManager();

	};
	public static InstanceAllManager(){
		loginManager.ins();
		ShopPageManage.ins();
	}
	public static OnDayTimer() {
		for (let data of this.AllModule) {
			data.OnDayTimer()
		}
	}


	public static InitConfig() {
		// console.profile("-----------InitConfig-------------")
		for (let data of this.AllModule) {
			if (data.InitConfig) {
				data.InitConfig()
			}
		}
		// console.profileEnd()
	}

}