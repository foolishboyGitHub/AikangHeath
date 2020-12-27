class EnableViewCtrlManage {
	
	private static  colorMatrix = [
                        0.3,0.6,0,0,
						0,0.3,0.6,0,
						0,0,0.3,0.6,
						0,0,0,0,0,0,
						1,0
                    ];
    private static cflilterD:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(EnableViewCtrlManage.colorMatrix);
	public static colorMatrix1 = [
						1, 0, 0, 0, 0,
						0, 1, 0, 0, 0,
						0, 0, 1, 0, 0,
						0, 0, 0, 1, 0
					];
    private static cflilterE:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(EnableViewCtrlManage.colorMatrix1);

	public constructor() {
	}
	public static SetViewEnableTrue(view:eui.Component){

			view.filters = [EnableViewCtrlManage.cflilterE];
			view.enabled = true;
	}
	public static SetViewEnableFalse(view:eui.Component){

			view.filters = [EnableViewCtrlManage.cflilterD];
			view.enabled = false;
	}
}