declare function _getCookie_();
class loginviewX  extends BaseEuiView {

	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_Main;
	/**
     * 输入
     */
    private _input_username:eui.EditableText;
	private _input_password:eui.EditableText;
	private _loginBtn:eui.Button;
	private _gouqiu:eui.Button;
	private __request:XMLHttpRequest;
	private statusPostLabel:egret.TextField;
	public constructor() {
		super();
		this.skinName = "login";
	}

	protected childrenCreated(): void {
        this._AddClick(this._loginBtn, this._OnClick);
		this._AddClick(this._gouqiu, this._OnClick);
		// this._gouqiu.visible = false;
		this.__request  =  new XMLHttpRequest();
		this.__request.withCredentials = true;
		this.__request.onload = this.onPostComplete;
		// this.__request.addEventListener("load",this.onPostComplete);
        // this.__request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError);
        // this.__request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress);

		this.statusPostLabel = new egret.TextField();
        this.addChild(this.statusPostLabel);
        this.statusPostLabel.width = 400;
        this.statusPostLabel.size = 18;
        this.statusPostLabel.x = 150;
        this.statusPostLabel.y = 100;
        
	}

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			case this._loginBtn:
                this.onLogin();
				break; 
			case this._gouqiu:
                this.onGouqiu();
				break;     

		}
	}
	public onLogin() {
		var params = "username="+this._input_username.text + "&password="+this._input_password.text;
		var rurl = "http://localhost:8082/dologin";
		this.sendPostRequest(params, rurl);
	}
	public onGouqiu() {
		var params = "username="+this._input_username.text + "&password="+this._input_password.text;
		var rurl = "http://localhost:8082/employee";
		this.sendPostRequest(params, rurl);
	}
	public CloseSelf() {
		this.parent.removeChild(this);
	}
	private sendPostRequest(params:string, rurl:string) {
		var cckk = _getCookie_();
		console.log("cookie is : ",cckk);
        var request = this.__request;
		
 //       request.responseType = RES.ResourceItem.TYPE_TEXT;
        request.open('POST', rurl, true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
		console.log("heads is : ",request.getAllResponseHeaders());
		request.send(params);
        

    }
    private onPostComplete(event:Event) {
        var request = <XMLHttpRequest>event.currentTarget;
        console.log("post data : ",request.response);
		var cckk = _getCookie_();
		console.log("cookie is : ",cckk);
		let json = JSON.parse(request.response);
	   
		if(json.status == 200){
			console.log(json.msg);
			// this._loginBtn.visible = false;
			// this._gouqiu.visible = true;
		}else if(json.status == 201){
			console.log(json.msg);
			// this._loginBtn.visible = true;
			// this._gouqiu.visible = false;
		}	
		
    }
	private onPostIOError(event:Event):void {
        console.log("post error : " + event.type);
    }

    private onPostProgress(event:Event):void {
        console.log("post progress :  ");
    }
}