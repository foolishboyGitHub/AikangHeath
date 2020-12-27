class UrlButton extends eui.Button{

	public LockUrl:string;
	public constructor() {
		super();
	}
	public initUrl(lockUrl:string){
		this.LockUrl = lockUrl;
		this.setEnableByUrl(this.LockUrl);
	}
	public setEnableByUrl(curl:string){

		//admin开挂
		if(GameGlobal.myUser.username != null && GameGlobal.myUser.username=="admin"){
			EnableViewCtrlManage.SetViewEnableTrue(this);
			return;
		}


		var find:boolean = false;
		for(var i=0; i<GameGlobal.perUrlArr.length; i++){
			var per = GameGlobal.perUrlArr[i];
			let purl:string = per.path; 
			if(purl.indexOf(curl)>=0 || curl.indexOf(purl)>=0){
				find = true;
				break;
			}
		}
		if(find){
			EnableViewCtrlManage.SetViewEnableTrue(this);
		}else{
			EnableViewCtrlManage.SetViewEnableFalse(this);
		}
	}
}