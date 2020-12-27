class loginManager  extends BaseSystem {
	public storcompanykey:string = "storcompanykey";
	public storusernamekey = "storusernamekey";
	public storpasswordkey = "storpasswordkey";
	public stortokenkey = "stortokenkey";
	public _storageCompany:string;
	public _storageUsername:string;
	public _storagePassword:string;
	public _storagetoken:string;
	public _loginState:number = 0; //0未登录  1登录中  2登录成功
	public _talkcompany:string = "";
	public _talkusername:string = "";
	public _talkpassword:string = "";


	public talk_message_infomessage = "talk_message_infomessage";
	public talk_message_login_now = "talk_message_login_now";

	public constructor() {
		super();
		sproto.sprotoMsgReceiver.AddHandler("/dologin", this.onResponsDologin, this);		
	}
	public static ins(): loginManager {
		return super.ins()
	}

	private onResponsDologin(json:any) {
		EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_loginManager, json));
	}
	public loadStorageLoginInfo():boolean
	{
		this._storagetoken = egret.localStorage.getItem(this.stortokenkey);
		if(this._storagetoken ){
			return true;
		}

		return false;
	}
	public saveStorageLoginInfo(token:string){
		var bsp = egret.localStorage.setItem(this.storpasswordkey, token);
		
	}
	public clearStorageLoginInfo(){
		var bsc = egret.localStorage.removeItem(this.storcompanykey);
		var bsu = egret.localStorage.removeItem(this.storusernamekey);
		var bsp = egret.localStorage.removeItem(this.storpasswordkey);
		var bsp = egret.localStorage.removeItem(this._storagetoken);
		
	}
	public logout(){
		var params = "";
		var rurl = "/logout";
		sproto.sprotoRequest.sendPostRequest(params, rurl);
		this.clearStorageLoginInfo();
	}
}