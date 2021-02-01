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
var ShopSerchForCompanyPanel = (function (_super) {
    __extends(ShopSerchForCompanyPanel, _super);
    function ShopSerchForCompanyPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopSerchForCompany";
        return _this;
    }
    ShopSerchForCompanyPanel.prototype.childrenCreated = function () {
        this._AddClick(this.btn_serach, this._OnClick);
    };
    ShopSerchForCompanyPanel.prototype.OnOpen = function () {
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetHistoryGoInfo, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_SerachCompanyGoInfo, this.onServerEventData, this);
        this.elab_serach.addEventListener(egret.FocusEvent.FOCUS_OUT, this.onFocusOut, this);
        this.elab_serach.addEventListener(egret.FocusEvent.FOCUS_IN, this.onSearchInput, this);
        this.elab_serach.addEventListener(egret.Event.CHANGE, this.onChange, this);
        this.gethistoryGoInfo();
    };
    ShopSerchForCompanyPanel.prototype.OnClose = function () {
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetHistoryGoInfo, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_SerachCompanyGoInfo, this.onServerEventData, this);
        this.elab_serach.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.onFocusOut, this);
        this.elab_serach.removeEventListener(egret.FocusEvent.FOCUS_IN, this.onSearchInput, this);
        this.elab_serach.removeEventListener(egret.Event.CHANGE, this.onChange, this);
    };
    ;
    ShopSerchForCompanyPanel.prototype.onFocusOut = function (e) {
        switch (e.currentTarget) {
            case this.elab_serach:
                if (this.elab_serach.text == "") {
                    this.elab_serach.text = "门店名称，地址等...";
                    this.elab_serach.textColor = 0xB5B5B5;
                }
                break;
        }
    };
    ShopSerchForCompanyPanel.prototype.onSearchInput = function (e) {
        switch (e.currentTarget) {
            case this.elab_serach:
                if (this.elab_serach.text == "门店名称，地址等...") {
                    this.elab_serach.text = "";
                    this.elab_serach.textColor = 0x0A0A0A;
                }
                break;
        }
    };
    ShopSerchForCompanyPanel.prototype.onChange = function (e) {
    };
    ShopSerchForCompanyPanel.prototype.gethistoryGoInfo = function () {
        var cmpany = {
            name: ""
        };
        var rurl = FuncUrlUtil.ShopInfo_GetHistoryGoInfo;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
    };
    ShopSerchForCompanyPanel.prototype.SerachCompanyGoInfo = function () {
        var key = "";
        if (this.elab_serach.text != "门店名称，地址等...") {
            key = this.elab_serach.text;
        }
        var cmpany = {
            key: key
        };
        var rurl = FuncUrlUtil.ShopInfo_SerachCompanyGoInfo;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
    };
    ShopSerchForCompanyPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_GetHistoryGoInfo:
                var map = json.obj;
                if (map.msg == "like") {
                    this.lab_guessyou.text = "猜你喜欢...";
                }
                ShopPageManage.ins().data_ShopHistoryGoInfoList = map.ol;
                this.onList_wait_Update();
                break;
            case FuncUrlUtil.ShopInfo_SerachCompanyGoInfo:
                var map = json.obj;
                ShopPageManage.ins().data_SerachShopGoInfoList = map.ol;
                ViewManager.ins().open(ShopSerchForCompanyOnSerachPanel, this.CloseSelf, this);
                break;
        }
    };
    ShopSerchForCompanyPanel.prototype.onList_wait_Update = function () {
        var knarray = ShopPageManage.ins().data_ShopHistoryGoInfoList;
        if (knarray.length <= 0) {
            return;
        }
        var mArr = [];
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            mArr.push({ idx: i, d: kenvo, closefunc: this.CloseSelf, closeobj: this });
        }
        var mCollection = new eui.ArrayCollection(mArr);
        this.listorder.dataProvider = mCollection;
        this.listorder.itemRenderer = ListShopSerchForCompanyItem;
        this.listorder.validateNow();
    };
    ShopSerchForCompanyPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this.btn_serach:
                this.SerachCompanyGoInfo();
                break;
        }
    };
    ////////////////'
    ShopSerchForCompanyPanel.LAYER_LEVEL = LayerManager.UI_GAME_MAP;
    return ShopSerchForCompanyPanel;
}(BaseEuiView));
__reflect(ShopSerchForCompanyPanel.prototype, "ShopSerchForCompanyPanel");
var ListShopSerchForCompanyItem = (function (_super) {
    __extends(ListShopSerchForCompanyItem, _super);
    function ListShopSerchForCompanyItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    ListShopSerchForCompanyItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    ListShopSerchForCompanyItem.prototype._on_tap_this = function (event) {
        GameGlobal.CurrentCompany = this.data.d.ofcompany;
        ViewManager.ins().open(ShopAskNumPanel);
        this.data.closefunc.call(this.data.closeobj);
    };
    ListShopSerchForCompanyItem.prototype.dataChanged = function () {
        var kenvo = this.data.d;
        var sn = decodeURI(kenvo.ofcname);
        if (sn.length > 12) {
            sn = sn.substr(0, 11) + "...";
        }
        this.lab_company.text = sn;
        this.lab_adress.text = kenvo.ofadress;
        sproto.sprotoRequest.loadURLImgOnThisDress(kenvo.ofheadpic, function (event) {
            var loader = event.target;
            //获取加载到的纹理对象
            var texture = loader.data;
            var bitmap = new egret.Bitmap(texture);
            bitmap.width = this.group_companypic.width;
            bitmap.height = this.group_companypic.height;
            this.group_companypic.addChild(bitmap);
        }, this);
    };
    ListShopSerchForCompanyItem.prototype.doSomeChange = function () {
    };
    ListShopSerchForCompanyItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
    };
    return ListShopSerchForCompanyItem;
}(eui.ItemRenderer));
__reflect(ListShopSerchForCompanyItem.prototype, "ListShopSerchForCompanyItem");
//# sourceMappingURL=ShopSerchForCompanyPanel.js.map