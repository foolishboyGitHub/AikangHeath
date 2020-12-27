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
var normalTimeSetPanel = (function (_super) {
    __extends(normalTimeSetPanel, _super);
    function normalTimeSetPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "normalTimeSetskin";
        return _this;
    }
    normalTimeSetPanel.prototype.OnOpen = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
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
    };
    normalTimeSetPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this.lab_title:
                this.CloseSelf();
                break;
            case this._btn_back:
                this.CloseSelf();
                break;
        }
    };
    normalTimeSetPanel.prototype.OnClose = function () {
    };
    ;
    normalTimeSetPanel.prototype.onEventData = function (e) {
    };
    normalTimeSetPanel.prototype.onServerEventData = function (e) {
    };
    normalTimeSetPanel.prototype.onListUpdate = function () {
        var mArr = [];
        var knarray = this._listdata;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            mArr.push({ idx: i, d: kenvo, selfunc: this._callfunc, callobj: this._callthisobj, closefunc: this.CloseSelf, closeobj: this });
        }
        var mCollection = new eui.ArrayCollection(mArr);
        this.listItem.dataProvider = mCollection;
        this.listItem.itemRenderer = listnormalTimeSetItem;
        this.listItem.validateNow();
    };
    normalTimeSetPanel.prototype.on_btn_sure = function () {
    };
    normalTimeSetPanel.LAYER_LEVEL = LayerManager.UI_Main;
    return normalTimeSetPanel;
}(BaseEuiView));
__reflect(normalTimeSetPanel.prototype, "normalTimeSetPanel");
var listnormalTimeSetItem = (function (_super) {
    __extends(listnormalTimeSetItem, _super);
    function listnormalTimeSetItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    listnormalTimeSetItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_touch_begin, this);
    };
    listnormalTimeSetItem.prototype._on_touch_begin = function () {
        // this.data.selfunc.call(this.data.callobj, this.data.idx);
        this.data.closefunc.call(this.data.closeobj);
    };
    listnormalTimeSetItem.prototype.dataChanged = function () {
        var data = this.data;
        if (data.d.c == 1) {
            this.lab_name1.textColor = 0xCC2A2A;
            this.lab_name2.textColor = 0xCC2A2A;
            this.lab_name3.textColor = 0xCC2A2A;
        }
        else if (data.d.c == 0) {
            this.lab_name1.textColor = 0x6DB716;
            this.lab_name2.textColor = 0x6DB716;
            this.lab_name3.textColor = 0x6DB716;
        }
        if (data.d.name1 != null) {
            this.lab_name1.text = data.d.name1;
        }
        if (data.d.name2 != null) {
            this.lab_name2.text = data.d.name2;
        }
        if (data.d.name3 != null) {
            this.lab_name3.text = data.d.name3;
        }
    };
    listnormalTimeSetItem.prototype.doSomeChange = function () {
    };
    listnormalTimeSetItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_touch_begin, this);
    };
    return listnormalTimeSetItem;
}(eui.ItemRenderer));
__reflect(listnormalTimeSetItem.prototype, "listnormalTimeSetItem");
//# sourceMappingURL=normalTimeSetPanel.js.map