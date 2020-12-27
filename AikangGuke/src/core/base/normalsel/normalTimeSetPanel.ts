class normalTimeSetPanel  extends BaseEuiView {

	public static LAYER_LEVEL = LayerManager.UI_Main;

	protected lab_title: eui.Label;
	protected scrollMy: eui.Scroller;
	protected listItem: eui.List;
	protected _btn_back: eui.Button;

	protected _title:any;
	protected _listdata:any;
	protected _callfunc:any;
	protected _callthisobj:any;
	public constructor() {
		super();
		this.skinName = "normalTimeSetskin";
	}

	public OnOpen(...param: any[]) {


		this._title = param[0];
		this._listdata = param[1];
		this._callfunc = param[2];
		this._callthisobj = param[3];

		this.lab_title.text = this._title;

		this.onListUpdate();

		///////////////////////////////////

		//////////////////////////////////
		this.AddClick(this.lab_title, this._OnClick);
		this.AddClick(this._btn_back, this._OnClick);

	}
	private _OnClick(e: egret.TouchEvent) {
		switch (e.target) {
			case this.lab_title:
				this.CloseSelf();
			break;
			case this._btn_back:
				this.CloseSelf();
			break;
			  
		}
	}
	OnClose() {
		
		
	};
	private onEventData(e:DataTransEvent) {
		
    }
	private onServerEventData(e:DataTransEvent) {

	}
	private onListUpdate(){


		let mArr: any[] = [];
		let knarray: Array<any> = this._listdata;
        for (var i = 0; i < knarray.length; i++) {
            let kenvo: any = knarray[i];
			mArr.push({idx:i, d:kenvo, selfunc:this._callfunc, callobj:this._callthisobj, closefunc:this.CloseSelf, closeobj:this});
        }
        
        let mCollection: eui.ArrayCollection = new eui.ArrayCollection(mArr);
        this.listItem.dataProvider = mCollection;
        this.listItem.itemRenderer = listnormalTimeSetItem;
        this.listItem.validateNow();
	}
	private on_btn_sure(){
		
			
	}
}


class listnormalTimeSetItem extends eui.ItemRenderer {

    /////////////////////////////////////////////////////////////////////////////
    // BtnTable6Skin.exml
    /////////////////////////////////////////////////////////////////////////////

	protected lab_name1:eui.Label;
	protected lab_name2:eui.Label;
	protected lab_name3:eui.Label;
    /////////////////////////////////////////////////////////////////////////////

    createChildren() {
        super.childrenCreated();
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);

		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this._on_touch_begin,this);
    }
	protected _on_touch_begin(){
		// this.data.selfunc.call(this.data.callobj, this.data.idx);
		this.data.closefunc.call(this.data.closeobj);
	}
    dataChanged() {
        let data = this.data;
		if(data.d.c == 1){
			this.lab_name1.textColor = 0xCC2A2A;
			this.lab_name2.textColor = 0xCC2A2A;
			this.lab_name3.textColor = 0xCC2A2A;
		}else if(data.d.c == 0){
			this.lab_name1.textColor = 0x6DB716;
			this.lab_name2.textColor = 0x6DB716;
			this.lab_name3.textColor = 0x6DB716;
		}
		if(data.d.name1 != null){
			this.lab_name1.text = data.d.name1;
		}
		if(data.d.name2 != null){
			this.lab_name2.text = data.d.name2;
		}
		if(data.d.name3 != null){
			this.lab_name3.text = data.d.name3;
		}


    }

    public doSomeChange() {

    }
	private onRemove(){
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this._on_touch_begin,this);
	}
}