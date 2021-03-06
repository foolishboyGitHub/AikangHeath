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
var ShopPagePanel = (function (_super) {
    __extends(ShopPagePanel, _super);
    function ShopPagePanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopPangeSkin";
        return _this;
    }
    ShopPagePanel.prototype.childrenCreated = function () {
        // this._AddClick(this._btn_gohistory, this._OnClick);
    };
    ShopPagePanel.prototype.OnOpen = function () {
        this.on_setCompanyInfo();
        this.onList_wait_Update();
        ViewManager.ins().open(ShopOrderFloatingBallPanel);
    };
    ShopPagePanel.prototype.OnClose = function () {
    };
    ;
    ShopPagePanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_GetShopInfo:
                break;
        }
    };
    ShopPagePanel.prototype.on_setCompanyInfo = function () {
        var data = ShopPageManage.ins().data_CompanyInfo;
        this.lab_companyname.text = decodeURI(data.cname);
        this.lab_companydress.text = "地址：" + data.adress;
        this.lab_companyphone.text = "电话：" + data.sevtelephone;
        this.lab_companymobil.text = "手机：" + data.sevmobilephone;
        sproto.sprotoRequest.loadURLImgOnThisDress(data.headpic, function (event) {
            var loader = event.target;
            //获取加载到的纹理对象
            var texture = loader.data;
            var bitmap = new egret.Bitmap(texture);
            bitmap.width = this.group_companypic.width;
            bitmap.height = this.group_companypic.height;
            this.group_companypic.addChild(bitmap);
        }, this);
    };
    ShopPagePanel.prototype.onList_wait_Update = function () {
        var json = ShopPageManage.ins().data_ShopInfoItem;
        var knarray = json;
        var mArr = [];
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            mArr.push({ idx: i, d: kenvo });
        }
        var mCollection = new eui.ArrayCollection(mArr);
        this.listItem_s.dataProvider = mCollection;
        this.listItem_s.itemRenderer = listShopInfoItem;
        this.listItem_s.validateNow();
    };
    ShopPagePanel.prototype._OnClick = function (e) {
        switch (e.target) {
        }
    };
    ////////////////'
    ShopPagePanel.LAYER_LEVEL = LayerManager.UI_USER_INFO;
    return ShopPagePanel;
}(BaseEuiView));
__reflect(ShopPagePanel.prototype, "ShopPagePanel");
var listShopInfoItem = (function (_super) {
    __extends(listShopInfoItem, _super);
    function listShopInfoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    listShopInfoItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this._btn_order.addEventListener(egret.TouchEvent.TOUCH_END, this._on_order, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    listShopInfoItem.prototype._on_order = function (event) {
        var point = { x: event.stageX, y: event.stageY };
        ViewManager.ins().open(ShopOredrPanel, this.data.d);
    };
    listShopInfoItem.prototype.dataChanged = function () {
        this.lab_itemname.text = this.data.d.name;
        this.lab_itemtime.text = this.data.d.timelong + "|";
        this.lab_itemprice.text = "¥" + this.data.d.price;
        sproto.sprotoRequest.loadURLImgOnThisDress(this.data.d.headpic, function (event) {
            var loader = event.target;
            //获取加载到的纹理对象
            var texture = loader.data;
            var bitmap = new egret.Bitmap(texture);
            bitmap.width = this.group_imgshow.width;
            bitmap.height = this.group_imgshow.height;
            this.group_imgshow.addChild(bitmap);
        }, this);
    };
    listShopInfoItem.prototype.doSomeChange = function () {
    };
    listShopInfoItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    return listShopInfoItem;
}(eui.ItemRenderer));
__reflect(listShopInfoItem.prototype, "listShopInfoItem");
//# sourceMappingURL=ShopPagePanel.js.map