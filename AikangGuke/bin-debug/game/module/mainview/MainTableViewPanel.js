var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainTableViewPanel = (function (_super) {
    __extends(MainTableViewPanel, _super);
    function MainTableViewPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "MainTableViewSkin";
        return _this;
    }
    MainTableViewPanel.prototype.childrenCreated = function () {
        var _raido_group = new eui.RadioButtonGroup();
        _raido_group.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);
        this._radio_business.group = _raido_group;
        this._radio_worker.group = _raido_group;
        this._radio_room.group = _raido_group;
        this._radio_config.group = _raido_group;
        this.viewStack.selectedIndex = 0;
        this._ShopPagePanel = new ShopPagePanel();
        this._ShopPagePanel.DoOpen();
        this._group_business.addChild(this._ShopPagePanel);
    };
    MainTableViewPanel.prototype.radioChangeHandler = function (e) {
        //当点击第一个选项卡按钮时，下面输出为
        var radioGroup = e.target;
        this.viewStack.selectedIndex = radioGroup.selectedValue;
        var sel = this.viewStack.selectedIndex;
        this.setSelViewActive(sel);
    };
    MainTableViewPanel.prototype.setSelViewActive = function (sel) {
    };
    MainTableViewPanel.prototype.OnOpen = function () {
    };
    MainTableViewPanel.prototype.OnClose = function () {
        this._ShopPagePanel.DoClose();
        this._group_business.removeChild(this._ShopPagePanel);
        this._ShopPagePanel = null;
    };
    ;
    ////////////////'
    MainTableViewPanel.LAYER_LEVEL = LayerManager.UI_USER_INFO;
    return MainTableViewPanel;
}(BaseEuiView));
__reflect(MainTableViewPanel.prototype, "MainTableViewPanel");
//# sourceMappingURL=MainTableViewPanel.js.map