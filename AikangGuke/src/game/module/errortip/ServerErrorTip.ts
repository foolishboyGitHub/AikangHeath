class ServerErrorTip {
	public constructor() {
		sproto.sprotoMsgReceiver.AddHandler("/NoAuthority", this.onNoAuthority, this);
		sproto.sprotoMsgReceiver.AddHandler("/logout", this.onLogoutSucess, this);
		sproto.sprotoMsgReceiver.AddHandler("/NoAuthority_ANONYMOUS", this.NoAuthority_ANONYMOUS, this);
		sproto.sprotoMsgReceiver.AddHandler("/Error_Get", this.onErrorGet, this);
	}

	//没有权限
	private onErrorGet(json:any) {

		var s:string = json.obj;
		WarnWin.show(s, null, this);	
    }

	//没有权限
	private onNoAuthority(json:any) {

		var s:string = json.obj;
		WarnWin.show(s, null, this);	
    }

	//注销成功
	private onLogoutSucess(json:any) {

		var s:string = json.obj;
		loginManager.ins()._loginState = 0;
		ViewManager.ins().closeAll();
		ViewManager.ins().open(loginview);
	}	
    //没有登录
	private NoAuthority_ANONYMOUS(json:any) {

		var s:string = json.obj;
		WarnWin.show(s, showlogin, this, showlogin);
		function showlogin(){
			loginManager.ins()._loginState = 0;
			ViewManager.ins().closeAll();
			ViewManager.ins().open(loginview);
		}
	}
}