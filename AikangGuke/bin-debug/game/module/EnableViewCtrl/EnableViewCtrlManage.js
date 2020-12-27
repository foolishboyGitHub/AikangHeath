var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EnableViewCtrlManage = (function () {
    function EnableViewCtrlManage() {
    }
    EnableViewCtrlManage.SetViewEnableTrue = function (view) {
        view.filters = [EnableViewCtrlManage.cflilterE];
        view.enabled = true;
    };
    EnableViewCtrlManage.SetViewEnableFalse = function (view) {
        view.filters = [EnableViewCtrlManage.cflilterD];
        view.enabled = false;
    };
    EnableViewCtrlManage.colorMatrix = [
        0.3, 0.6, 0, 0,
        0, 0.3, 0.6, 0,
        0, 0, 0.3, 0.6,
        0, 0, 0, 0, 0, 0,
        1, 0
    ];
    EnableViewCtrlManage.cflilterD = new egret.ColorMatrixFilter(EnableViewCtrlManage.colorMatrix);
    EnableViewCtrlManage.colorMatrix1 = [
        1, 0, 0, 0, 0,
        0, 1, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0
    ];
    EnableViewCtrlManage.cflilterE = new egret.ColorMatrixFilter(EnableViewCtrlManage.colorMatrix1);
    return EnableViewCtrlManage;
}());
__reflect(EnableViewCtrlManage.prototype, "EnableViewCtrlManage");
//# sourceMappingURL=EnableViewCtrlManage.js.map