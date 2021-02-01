class ShopAskNumPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_USER_INFO;
	/**
     * 输入
     */

	protected _radio_num_0: eui.RadioButton;
    protected _radio_num_1: eui.RadioButton;
    protected _radio_num_2: eui.RadioButton;
    protected _radio_num_3: eui.RadioButton;
    protected _radio_num_4: eui.RadioButton;
    protected _radio_num_5: eui.RadioButton;
    protected _radio_num_6: eui.RadioButton;
    protected _radio_num_7: eui.RadioButton;
    protected _radio_num_8: eui.RadioButton;

    protected _radio_time_now: eui.RadioButton;
    protected _radio_time_yuyue: eui.RadioButton;

    protected _radio_last_old: eui.RadioButton;
    protected _radio_last_new: eui.RadioButton;
    

	protected _btn_more : eui.Button;
    protected _btn_sure : eui.Button;
    protected _btn_cancel : eui.Button;

    protected lab_gukenum:eui.EditableText;
    protected group_asknum: eui.Group
    protected group_more: eui.Group;
	protected group_time: eui.Group;
    protected group_last: eui.Group;

	public constructor() {
		super();
		this.skinName = "ShopAskNumSkin";	
	}

	protected childrenCreated(){

        var _raido_group:eui.RadioButtonGroup = new eui.RadioButtonGroup();
    	_raido_group.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);

         var _raido_group_time:eui.RadioButtonGroup = new eui.RadioButtonGroup();
    	_raido_group_time.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler_time, this);

		this._radio_num_0.group = _raido_group;
		this._radio_num_1.group = _raido_group;
		this._radio_num_2.group = _raido_group;
		this._radio_num_3.group = _raido_group;
        this._radio_num_4.group = _raido_group;
		this._radio_num_5.group = _raido_group;
		this._radio_num_6.group = _raido_group;
		this._radio_num_7.group = _raido_group;
		this._radio_num_8.group = _raido_group;

        this._radio_time_now.group = _raido_group_time;
		this._radio_time_yuyue.group = _raido_group_time;

        var _raido_group_last:eui.RadioButtonGroup = new eui.RadioButtonGroup();
    	this._radio_last_old.group = _raido_group_last;
		this._radio_last_new.group = _raido_group_last;

        this.group_asknum.visible = false;
        this.group_last.visible = false;
        this.group_more.visible = false;
        this.group_time.visible = false;
        this.lab_gukenum.restrict = "0-9";

        this._AddClick(this._btn_more, this._OnClick);
        this._AddClick(this._btn_sure, this._OnClick);
        this._AddClick(this._btn_cancel, this._OnClick);
        this._AddClick(this._radio_last_old, this._OnClick);
        this._AddClick(this._radio_last_new, this._OnClick);
    }

	OnOpen() {
		
		EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetShopInfo, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetMakeShopInfo, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_newShopMake, this.onServerEventData, this);
        this.sendGetMakeShopInfo();
    }

	OnClose() {
		EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetShopInfo, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetMakeShopInfo, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_newShopMake, this.onServerEventData, this);
    };

	private onServerEventData(e:DataTransEvent) {
		var json = e.data;
		switch (json.msg) {	
			case FuncUrlUtil.ShopInfo_GetMakeShopInfo:		
                ShopPageManage.ins().data_ShopMakeList = json.obj;	
                let data = ShopPageManage.ins().data_ShopMakeList;
                let num = 0;
                let godd = 0;
                if(data != null){
                    num = data.length;
                }
                if(num <= 0) // 没有任何订单
                {
                    this.group_asknum.visible = true;
                }
                else{
                    let item: any = data[0];
                    godd = item.workstate;

                    if(godd == 0 )//已下单阶段  直接前往下一个面板
                    {
                       this.group_last.visible = true;
                    }
                    else if(godd == 1 )//已下单阶段  直接前往下一个面板
                    {
                        this.sendShopInfo();
                    }
                    else if(godd == 2 )//已下单阶段  直接前往下一个面板
                    {
                        this.sendShopInfo();
                    }
                }
                
                
			break; 

            case FuncUrlUtil.ShopInfo_GetShopInfo:
                var map = json.obj;
                ShopPageManage.ins().data_CompanyInfo  = map.cm;
				ShopPageManage.ins().data_ShopInfoItem = map.sl;
				this.CloseSelf();
                ViewManager.ins().open(MainTableViewPanel);
			break;
			case FuncUrlUtil.ShopInfo_newShopMake:			
				ShopPageManage.ins().data_ShopMakeList = json.obj;
                this.sendShopInfo();
			break;
		}
	}
	

	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {

			case this._btn_more:
				this.group_more.visible = true;
			break;
            case this._btn_cancel:
				this.group_more.visible = false;
			break; 
            case this._btn_sure:
				this.group_more.visible = false;
                let strnum = this.lab_gukenum.text;
                ShopPageManage.ins().ShopGuke_Num = Number(strnum);
                this.sendNewShop();
                
			break; 
            case this._radio_last_old:
                let data = ShopPageManage.ins().data_ShopMakeList;
                let item: any = data[0];
                ShopPageManage.ins().ShopGuke_Num = item.gukenum;
				this.sendShopInfo();
			break;
            case this._radio_last_new:
                var tw = egret.Tween.get(  this.group_last );
                tw.to( {alpha:0}, 100 ).call(
                    function(){
                        this.group_last.visible = false;
                        this.group_asknum.visible = true;
                        this.group_asknum.alpha = 0;
                        var tw1 = egret.Tween.get(  this.group_asknum );
                        tw1.to( {alpha:1}, 100 );
                    },
                    this
                );
				
			break;   
		}
	}
    private sendGetMakeShopInfo(){
        var cmpany = {
            name:GameGlobal.CurrentCompany
        };	
        var rurl = FuncUrlUtil.ShopInfo_GetMakeShopInfo;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
    }
    private sendShopInfo()
    {
        var cmpany = {
            name:GameGlobal.CurrentCompany
        };	
        var rurl = FuncUrlUtil.ShopInfo_GetShopInfo;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
        
    }
    private sendNewShop()
    {
        var cmpany = {
            name:GameGlobal.CurrentCompany,
            num:ShopPageManage.ins().ShopGuke_Num
        };	
        var rurl = FuncUrlUtil.ShopInfo_newShopMake;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
        
    }
    private radioChangeHandler(e:eui.UIEvent){
                                                   //当点击第一个选项卡按钮时，下面输出为
        let radioGroup:eui.RadioButtonGroup = e.target;
        let sel = radioGroup.selectedValue;
        ShopPageManage.ins().ShopGuke_Num = Number(sel) + 1;
		
        this.sendNewShop();
        
    }

    private radioChangeHandler_time(e:eui.UIEvent){
                                                   //当点击第一个选项卡按钮时，下面输出为
        let radioGroup:eui.RadioButtonGroup = e.target;
        let sel = radioGroup.selectedValue;
        ShopPageManage.ins().ShopGuke_TimeType = sel;

    }
}
