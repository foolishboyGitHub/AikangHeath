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
var ShopSerchForCompanyOnSerachPanel = (function (_super) {
    __extends(ShopSerchForCompanyOnSerachPanel, _super);
    function ShopSerchForCompanyOnSerachPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopSerchForCompanyOnSerach";
        return _this;
    }
    ShopSerchForCompanyOnSerachPanel.prototype.childrenCreated = function () {
        this._AddClick(this.btn_back, this._OnClick);
    };
    ShopSerchForCompanyOnSerachPanel.prototype.OnOpen = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this._closefunc = param[0];
        this._closeobj = param[1];
        this.onList_wait_Update();
    };
    ShopSerchForCompanyOnSerachPanel.prototype.OnClose = function () {
        this._closefunc.call(this._closeobj);
    };
    ;
    ShopSerchForCompanyOnSerachPanel.prototype.onList_wait_Update = function () {
        var knarray = ShopPageManage.ins().data_SerachShopGoInfoList;
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
        this.listorder.itemRenderer = ListShopSerchForCompanyOnSerachItem;
        this.listorder.validateNow();
    };
    ShopSerchForCompanyOnSerachPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this.btn_back:
                this.CloseSelf();
                break;
        }
    };
    ////////////////'
    ShopSerchForCompanyOnSerachPanel.LAYER_LEVEL = LayerManager.UI_GAME_MAP;
    return ShopSerchForCompanyOnSerachPanel;
}(BaseEuiView));
__reflect(ShopSerchForCompanyOnSerachPanel.prototype, "ShopSerchForCompanyOnSerachPanel");
var ListShopSerchForCompanyOnSerachItem = (function (_super) {
    __extends(ListShopSerchForCompanyOnSerachItem, _super);
    function ListShopSerchForCompanyOnSerachItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    ListShopSerchForCompanyOnSerachItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    ListShopSerchForCompanyOnSerachItem.prototype._on_tap_this = function (event) {
        GameGlobal.CurrentCompany = this.data.d.ofcompany;
        ViewManager.ins().open(ShopAskNumPanel);
        this.data.closefunc.call(this.data.closeobj);
    };
    ListShopSerchForCompanyOnSerachItem.prototype.dataChanged = function () {
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
    ListShopSerchForCompanyOnSerachItem.prototype.doSomeChange = function () {
    };
    ListShopSerchForCompanyOnSerachItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_tap_this, this);
    };
    return ListShopSerchForCompanyOnSerachItem;
}(eui.ItemRenderer));
__reflect(ListShopSerchForCompanyOnSerachItem.prototype, "ListShopSerchForCompanyOnSerachItem");
//# sourceMappingURL=ShopSerchForCompanyOnSerachPanel.js.map