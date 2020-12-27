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
var normalselpanel = (function (_super) {
    __extends(normalselpanel, _super);
    function normalselpanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "normalselskin";
        return _this;
    }
    normalselpanel.prototype.OnOpen = function () {
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
    normalselpanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this.lab_title:
                this.CloseSelf();
                break;
            case this._btn_back:
                this.CloseSelf();
                break;
        }
    };
    normalselpanel.prototype.OnClose = function () {
    };
    ;
    normalselpanel.prototype.onEventData = function (e) {
    };
    normalselpanel.prototype.onServerEventData = function (e) {
    };
    normalselpanel.prototype.onListUpdate = function () {
        var mArr = [];
        var knarray = this._listdata;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            mArr.push({ idx: i, d: kenvo, selfunc: this._callfunc, callobj: this._callthisobj, closefunc: this.CloseSelf, closeobj: this });
        }
        var mCollection = new eui.ArrayCollection(mArr);
        this.listItem.dataProvider = mCollection;
        this.listItem.itemRenderer = listnormalselItem;
        this.listItem.validateNow();
    };
    normalselpanel.prototype.on_btn_sure = function () {
    };
    normalselpanel.LAYER_LEVEL = LayerManager.UI_Main;
    return normalselpanel;
}(BaseEuiView));
__reflect(normalselpanel.prototype, "normalselpanel");
var listnormalselItem = (function (_super) {
    __extends(listnormalselItem, _super);
    function listnormalselItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    listnormalselItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_touch_begin, this);
    };
    listnormalselItem.prototype._on_touch_begin = function () {
        this.data.selfunc.call(this.data.callobj, this.data.idx);
        this.data.closefunc.call(this.data.closeobj);
    };
    listnormalselItem.prototype.dataChanged = function () {
        var data = this.data;
        if (data.d.name1 != null) {
            this.lab_name1.text = data.d.name1;
        }
        if (data.d.name2 != null) {
            this.lab_name2.text = data.d.name2;
        }
    };
    listnormalselItem.prototype.doSomeChange = function () {
    };
    listnormalselItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_touch_begin, this);
    };
    return listnormalselItem;
}(eui.ItemRenderer));
__reflect(listnormalselItem.prototype, "listnormalselItem");
//# sourceMappingURL=normalselpanel.js.map