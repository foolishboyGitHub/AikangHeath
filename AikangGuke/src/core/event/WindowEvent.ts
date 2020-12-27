class WindowEvent extends egret.Event {
	private static Path: string = "pure.view.event.";


	/**
	 * 显示或隐藏顶部功能按钮
	 */
	public static SHOW_OR_HIDE_NEV_MENS: string = WindowEvent.Path + "SHOW_OR_HIDE_NEV_MENS";





	public _data: any = null

	public _type: string = "";

	public constructor(type: string, obj: any = null, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
		this._type = type;
		this._data = obj;
	}

	public get data(): Object {
		return this._data;
	}

	public clone(): egret.Event {
		return new WindowEvent(this._type, this._data);
	}
}