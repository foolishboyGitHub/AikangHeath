class MainTableViewPanel   extends BaseEuiView {
	 ////////////////'
	public static LAYER_LEVEL = LayerManager.UI_USER_INFO;
	/**
     * 输入
     */
    public viewStack:eui.ViewStack;

	private _group_business:eui.Group;
	private _group_worker:eui.Group;
	private _group_room:eui.Group;
	private _group_config:eui.Group;

	private _radio_business:eui.RadioButton;
	private _radio_worker:eui.RadioButton;
	private _radio_room:eui.RadioButton;
	private _radio_config:eui.RadioButton;
	
	private _ShopPagePanel:ShopPagePanel;
	private _ShopMyHuiYuanPanel:ShopMyHuiYuanPanel;
	private _ShopServingBillListPanel:ShopServingBillListPanel;
	private _MyInfoMainPanel:MyInfoMainPanel;
	public constructor() {
		super();
		this.skinName = "MainTableViewSkin";	
	}

	protected childrenCreated(){
		var _raido_group:eui.RadioButtonGroup = new eui.RadioButtonGroup();
    	_raido_group.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);

		this._radio_business.group = _raido_group;
		this._radio_worker.group = _raido_group;
		this._radio_room.group = _raido_group;
		this._radio_config.group = _raido_group;

		this.viewStack.selectedIndex = 0;


		this._ShopPagePanel = new ShopPagePanel();
		this._ShopPagePanel.DoOpen();
		this._group_business.addChild(this._ShopPagePanel);

		this._ShopMyHuiYuanPanel = new ShopMyHuiYuanPanel();
		this._ShopMyHuiYuanPanel.DoOpen();
		this._group_worker.addChild(this._ShopMyHuiYuanPanel);

		this._ShopServingBillListPanel = new ShopServingBillListPanel();
		this._ShopServingBillListPanel.DoOpen();
		this._group_room.addChild(this._ShopServingBillListPanel);

		this._MyInfoMainPanel = new MyInfoMainPanel();
		this._MyInfoMainPanel.DoOpen();
		this._group_config.addChild(this._MyInfoMainPanel);

    }
    private radioChangeHandler(e:eui.UIEvent){
                                                   //当点击第一个选项卡按钮时，下面输出为
        let radioGroup:eui.RadioButtonGroup = e.target;
        this.viewStack.selectedIndex = radioGroup.selectedValue;
		let sel = this.viewStack.selectedIndex;
		this.setSelViewActive(sel);
		
    }
	private setSelViewActive(sel){
		if(sel == 0){
			EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_ShopOrderFloatingBallShow, null));
		}else if(sel == 1){
			this._ShopMyHuiYuanPanel.QueryHuiYuanInfo();
			EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_ShopOrderFloatingBallHide, null));
		}else if(sel == 2){
			EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_ShopOrderFloatingBallHide, null));
			this._ShopServingBillListPanel.gethistoryinfo();
		}else if(sel == 3){
			EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_ShopOrderFloatingBallHide, null));
		}
	}
	OnOpen() {

		
	}

	OnClose() {
		this._ShopPagePanel.DoClose();
		this._group_business.removeChild(this._ShopPagePanel);
		this._ShopPagePanel = null;

		this._ShopMyHuiYuanPanel.DoClose();
		this._group_worker.removeChild(this._ShopMyHuiYuanPanel);
		this._ShopMyHuiYuanPanel = null;

		this._ShopServingBillListPanel.DoClose();
		this._group_room.removeChild(this._ShopServingBillListPanel);
		this._ShopServingBillListPanel = null;
	};
}