
//declare function _sendMyHttpRequest_(param:string, rurl:string, callfunc);
declare function _WX_TestNavito(): any;
class loginview  extends BaseEuiView {


	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_Main;
	/**
     * 输入
     */
	private _input_company:eui.EditableText;
    private _input_username:eui.EditableText;
	private _input_password:eui.EditableText;
	private _loginBtn:eui.Button;
	private revmsg:eui.Label;

	private group_login:eui.Group;

	public constructor() {
		super();
		this.skinName = "login";
		
	}

	protected childrenCreated(): void {
        this._AddClick(this._loginBtn, this._OnClick);
		this.group_login.visible = false;

		this._input_company.restrict = "A-Za-z0-9_-";
		this._input_username.restrict = "A-Za-z0-9_-";
		// this.revmsg.text = "url:"+window.location.href 
		this.revmsg.text = "url:" 
			+ "  company:" + egret.getOption("company") +" type:" + egret.getOption("type")
			+ " wndtype:" + egret.getOption("wndtype") + " sessioncode:"+ egret.getOption("sessioncode")
			+ " relogin:" + egret.getOption("relogin")+" 顾客终端！！！ ";
	}

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			case this._loginBtn:
                this.onLogin();
				break; 
			// case this.btn_navito:
            //     _WX_TestNavito();
			// 	break; 
		}
	}
	public onLogin() {
		var company = egret.getOption("company");
		var sessioncode = egret.getOption("sessioncode");
		// company = "aikang";
		// sessioncode = "0139eCGa1YDUqA0TIpFa1VG3R149eCGB";
		var params = "company="+company 
		+ "&username="+this._input_username.text + "&password="+md5.hex_md5(this._input_password.text)
		+ "&type="+egret.getOption("type") + "&wndtype="+"wxweb"
		+ "&relogin="+egret.getOption("relogin") + "&sessioncode="+sessioncode;
		var rurl = "/dologin";
		sproto.sprotoRequest.sendPostRequest(params, rurl);
		this.revmsg.text = "开始登录...";
		GameGlobal.token = null;
		loginManager.ins()._loginState = 1;
	}
	public onTalkLogin(){
		this._input_company.text = loginManager.ins()._talkcompany;
		this._input_username.text = loginManager.ins()._talkusername;
		this._input_password.text = loginManager.ins()._talkpassword;
		// this.onLogin();
	}
	public onTalkInfoShow(m){
		let o=m.data;
		if(o.t == 0){
			this._input_company.text = o.m;
		}
		if(o.t == 1){
			this._input_username.text = o.m;
		}
		if(o.t == 2){
			this._input_password.text = o.m;
		}
	}
	OnOpen() {
		EventCenter.Instance.addEventListener(DataTransEvent.Event_loginManager, this.onResponseDologin, this);
		EventCenter.Instance.addEventListener(loginManager.ins().talk_message_login_now, this.onTalkLogin, this);
		EventCenter.Instance.addEventListener(loginManager.ins().talk_message_infomessage, this.onTalkInfoShow, this);
		
		this.onLogin();
	}

	OnClose() {
		EventCenter.Instance.removeEventListener(DataTransEvent.Event_loginManager, this.onResponseDologin, this);
		EventCenter.Instance.removeEventListener(loginManager.ins().talk_message_login_now, this.onTalkLogin, this);
		EventCenter.Instance.removeEventListener(loginManager.ins().talk_message_infomessage, this.onTalkInfoShow, this);
	};

	private onResponseDologin(e:DataTransEvent) {
		var json = e.data;
		var tk = json.obj.token;
		var scl = json.obj.scl;
		this.revmsg.text = "登录返回！";
		if(json.status == sproto.sprotoRespType.MSG_ERROR)//返回错误
		{
			this.group_login.visible = true;
			loginManager.ins()._loginState = 0;
		
			console.log("error resp :" + json.msg);
			if(scl == "userLocked"){
				console.log("账户被锁定! :");
				this.revmsg.text = "账户被锁定! :";

			}
			else if(scl == "passOutTime"){
				console.log("密码过期! :");
				this.revmsg.text = "密码过期! ";

			}
			else if(scl == "userOutTime"){
				console.log("账户过期! :");
				this.revmsg.text = "账户过期! ";

			}
			else if(scl == "userForbid"){
				console.log("账户被禁用! :");
				this.revmsg.text = "账户被禁用:";

			}
			else if(scl == "companyerror"){
				console.log("公司名称不存在!");
				this.revmsg.text = "公司名称不存在!";

			}
			else if(scl == "userOrPassWrong"){
				console.log("密码不正确!");
				this.revmsg.text = "密码不正确!";

			}
			else if(scl == "openidisnull"){
				console.log("微信openid 获取错误!!");
				this.revmsg.text = "微信用户信息获取错误 请用退出重新扫码!";

			}
			else if(scl == "addusererro"){
				console.log("添加用户错误!!");
				this.revmsg.text = "添加用户错误!!";

			}
			else if(scl == "UsernameNotFound"){
				console.log("用户名不正确!");
				this.revmsg.text = "用户名不正确!";

			}
			else if(scl == "UnknowError"){
				console.log("未知的登陆错误!");
				this.revmsg.text = "未知的登陆错误!";

			}
			return;
		}


		loginManager.ins()._loginState = 2;
		GameGlobal.token = tk;
		//保存用户登录信息
		loginManager.ins().saveStorageLoginInfo(tk);
		GameGlobal.myUser = scl.user;
		let rs = "ROLE_worker";
		let urs:string = scl.user.roles[0].name
		GameGlobal.CurrentCompany = scl.user.companytest;
		// GameGlobal.CurrentCompany = "aikang";
		if(GameGlobal.CurrentCompany== null || GameGlobal.CurrentCompany==""){
			ViewManager.ins().open(ShopSerchForCompanyPanel);
		}else{
			ViewManager.ins().open(ShopAskNumPanel);	
		}
		this.CloseSelf();
    }
	
	
}