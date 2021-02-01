class ShopHuiYuanNedPhoneNumberPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_USER_INFO;
	/**
     * 输入
     */
    

	protected _btn_getcode : eui.Button;
    protected _btn_sure : eui.Button;

    protected lab_phone:eui.EditableText;
	protected lab_code:eui.EditableText;


    public timer:egret.Timer;

    public _tm;

	public constructor() {
		super();
		this.skinName = "ShopHuiYuanNedPhoneNumber";	
	}

	protected childrenCreated(){

	
        this.lab_phone.restrict = "0-9";
		this.lab_code.restrict = "0-9";

        this._AddClick(this._btn_sure, this._OnClick);
        this._AddClick(this._btn_getcode, this._OnClick);

        
    }

	OnOpen() {
		
        
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_BindTeleVerifySendCode, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode, this.onServerEventData, this);

        this.timer = new egret.Timer(1000);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
		this.timer.start();

    }

	OnClose() {
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_BindTeleVerifySendCode, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode, this.onServerEventData, this);
        this.timer.stop();
		this.timer.removeEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
		this.timer = null;
      };

	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	

            case FuncUrlUtil.ShopInfo_BindTeleVerifySendCode:			
                var data = json.obj;
                if(data.msg == "later"){
                    var tm = data.tm;
                    WarnWin.show("请 "+tm+" 秒后再获取验证码！", null, null);
                    this._tm = tm;                 
                }
                if(data.msg == "ok"){
                    WarnWin.show(" 验证码已发送，请查看手机短信！", null, null);
                    this._tm = data.tm;
                }
			break;
            case FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode:			
                var data = json.obj;
                this.setBindResault(data);
                 
			break;

		}
	}
	private setBindResault(data){
        if(data.msg == "overtime"){
            WarnWin.show("验证码已过期！", null, null);     
            return;           
        }
        if(data.msg == "ok"){
            WarnWin.show("绑定成功！", null, null);  
            var company = {
                name:GameGlobal.CurrentCompany
            };	
            var rurl = FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo;
            sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(company), rurl);  
            this.CloseSelf();  
        }
    }
    private timerFunc(){
		if(this._tm > 0){
			this._btn_getcode.label = "("+this._tm+")秒后获取";
            this._btn_getcode.enabled = false;
		}else{
            this._btn_getcode.label = "获取";
			this._btn_getcode.enabled = true;
		}
        if(this._tm > 0){
            this._tm --;
        }
	}

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			case this._btn_getcode:
                this.sendGetTelenumberCode();
			break;

            case this._btn_sure:
                this.sendTelenumberCodeToBind();
			break; 
           
		}
	}
    private sendGetTelenumberCode(){
        var telenumber = this.lab_phone.text;
        if(telenumber.length != 11){
            WarnWin.show("请输入正确的手机号码",null, null);
            return;
        }
        var info = {
            telenumber:telenumber
        };
        var rurl = FuncUrlUtil.ShopInfo_BindTeleVerifySendCode;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(info), rurl);
    }
    private sendTelenumberCodeToBind(){
        var telenumber = this.lab_phone.text;
        var code = this.lab_code.text;
        if(telenumber.length != 11){
            WarnWin.show("请输入正确的手机号码",null, null);
            return;
        }
        if(code.length <=1 ){
            WarnWin.show("请输入正确的验证码",null, null);
            return;
        }
        var info = {
            telenumber:telenumber,
            code:code
        };
        var rurl = FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(info), rurl);
    }
  

}
