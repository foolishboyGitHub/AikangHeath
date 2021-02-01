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
var ShopMakeInfoListPaeul = (function (_super) {
    __extends(ShopMakeInfoListPaeul, _super);
    function ShopMakeInfoListPaeul() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShopMakeInfoListSkin";
        return _this;
    }
    ShopMakeInfoListPaeul.prototype.childrenCreated = function () {
        this.visible = false;
    };
    ShopMakeInfoListPaeul.prototype.OnOpen = function () {
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_DelShopItem, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_ShowState_SelGuke, this.onShowSelGuke, this);
        EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_MakeShop_AddNew, this.onAddNewShop, this);
        this.scrollMy.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
    };
    ShopMakeInfoListPaeul.prototype.OnClose = function () {
        this.scrollMy.removeEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_DelShopItem, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_ShowState_SelGuke, this.onShowSelGuke, this);
        EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_MakeShop_AddNew, this.onAddNewShop, this);
    };
    ;
    ShopMakeInfoListPaeul.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_DelShopItem:
                ShopPageManage.ins().data_ShopMakeList = json.obj;
                this.setShopInfoList();
                EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, null));
                var knarray = json.obj;
                if (knarray.length <= 0) {
                    this._on_hide();
                }
                break;
        }
    };
    ShopMakeInfoListPaeul.prototype.setShopInfoList = function () {
        var gukenum = 0;
        var data = ShopPageManage.ins().data_ShopMakeList;
        if (!data) {
            WarnWin.show("数据异常 data_systemrole 为空", null, this);
            this.CloseSelf();
            return;
        }
        var knarray = data;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            if (kenvo.gukenum > gukenum) {
                gukenum = kenvo.gukenum;
            }
        }
        var mArr = [];
        for (var i = 0; i < gukenum; i++) {
            var wArr = [];
            for (var s = 0; s < knarray.length; s++) {
                var kenvo = knarray[s];
                if (kenvo.gukeidx == i) {
                    wArr.push({ idx: s, d: kenvo });
                }
            }
            var t = "第 " + i + " 位同伴";
            if (i == 0) {
                t = "我自己";
            }
            mArr.push({ idx: i, title: t, d: wArr });
        }
        var lh = this.scrollMy.viewport.scrollV;
        var mCollection = new eui.ArrayCollection(mArr);
        this.listGuke.dataProvider = mCollection;
        this.listGuke.itemRenderer = listShopMakeInfoItem;
        this.listGuke.validateNow();
        this.scrollMy.viewport.scrollV = lh;
    };
    ShopMakeInfoListPaeul.prototype._on_Show = function () {
        this.visible = true;
        if (this.scrollMy.height > 850) {
            this.scrollMy.height = 850;
        }
        var gh = this.scrollMy.height + 50 + 180;
        this.group_shoplist.height = 0;
        var tw = egret.Tween.get(this.group_shoplist);
        tw.to({ height: gh }, 30);
        this.rect_bake_all.alpha = 1;
        this.onScrollerChange();
    };
    ShopMakeInfoListPaeul.prototype._on_hide = function () {
        var tw = egret.Tween.get(this.group_shoplist);
        tw.to({ height: 0 }, 50).call(function () {
            this.visible = false;
        }, this);
        var tw1 = egret.Tween.get(this.rect_bake_all);
        tw1.to({ alpha: 0 }, 50);
    };
    ShopMakeInfoListPaeul.prototype._OnClick = function (e) {
        switch (e.target) {
        }
    };
    /**
     * 滚动位置改变的时候
     */
    ShopMakeInfoListPaeul.prototype.onScrollerChange = function () {
        for (var i = 0; i < this.listGuke.$indexToRenderer.length; i++) {
            if (!this.listGuke.$indexToRenderer[i])
                continue;
            this.listGuke.$indexToRenderer[i].doSomeChange();
        }
    };
    ShopMakeInfoListPaeul.prototype.onShowSelGuke = function () {
        this.onScrollerChange();
    };
    ShopMakeInfoListPaeul.prototype.onAddNewShop = function () {
        this._on_hide();
    };
    ////////////////'
    ShopMakeInfoListPaeul.LAYER_LEVEL = LayerManager.UI_Main;
    return ShopMakeInfoListPaeul;
}(BaseEuiView));
__reflect(ShopMakeInfoListPaeul.prototype, "ShopMakeInfoListPaeul");
var listShopMakeInfoItem = (function (_super) {
    __extends(listShopMakeInfoItem, _super);
    function listShopMakeInfoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    listShopMakeInfoItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);
        this._btn_addnew.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_AddNewTap, this);
    };
    listShopMakeInfoItem.prototype._on_thisTap = function (event) {
        if (ShopPageManage.ins()._selGukeIdx != this.data.idx) {
            ShopPageManage.ins()._selGukeIdx = this.data.idx;
            EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_ShowState_SelGuke, null));
        }
    };
    listShopMakeInfoItem.prototype._on_AddNewTap = function (event) {
        EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_AddNew, null));
    };
    listShopMakeInfoItem.prototype.dataChanged = function () {
        this.setData();
    };
    listShopMakeInfoItem.prototype.setData = function () {
        var data = this.data;
        this._radio_sevidx.label = "" + data.title;
        var mArr = [];
        var knarray = data.d;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            if (kenvo.d.sid > 0)
                mArr.push({ idx: i, d: kenvo.d, allnum: knarray.length });
        }
        var mCollection = new eui.ArrayCollection(mArr);
        this.listShopGukeIdx.dataProvider = mCollection;
        this.listShopGukeIdx.itemRenderer = listGukeIdxItem;
        this.setRectSize();
    };
    listShopMakeInfoItem.prototype.setRectSize = function () {
        var knarray = this.data.d;
        this.rect_back3.visible = false;
        if (knarray.length <= 0) {
            this.height = 160;
            this.rect_back3.visible = true;
            this.rect_back3.height = 10;
        }
        else {
            this.height = 66 + knarray.length * 150 + this.group_addNew.height + 20;
        }
        this.group_addNew.y = this.listShopGukeIdx.y + this.listShopGukeIdx.height + 20;
        if (ShopPageManage.ins()._selGukeIdx == this.data.idx) {
            this._radio_sevidx.selected = true;
            this.rect_back1.strokeColor = 0xE8B610;
            this.rect_back1.strokeWeight = 5;
            this.rect_back2.strokeColor = 0xE8B610;
            this.rect_back2.strokeWeight = 5;
        }
        else {
            this._radio_sevidx.selected = false;
            this.rect_back1.strokeColor = 0xE8B610;
            this.rect_back1.strokeWeight = 0;
            this.rect_back2.strokeColor = 0xFFFFFF;
            this.rect_back2.strokeWeight = 0;
        }
        this.rect_back2.height = this.rect_back1.height - 60;
    };
    listShopMakeInfoItem.prototype.doSomeChange = function () {
        // this.setData();
        this.setRectSize();
        for (var i = 0; i < this.listShopGukeIdx.$indexToRenderer.length; i++) {
            if (!this.listShopGukeIdx.$indexToRenderer[i])
                continue;
            this.listShopGukeIdx.$indexToRenderer[i].doSomeChange();
        }
    };
    listShopMakeInfoItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);
        this._btn_addnew.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_AddNewTap, this);
    };
    return listShopMakeInfoItem;
}(eui.ItemRenderer));
__reflect(listShopMakeInfoItem.prototype, "listShopMakeInfoItem");
var listGukeIdxItem = (function (_super) {
    __extends(listGukeIdxItem, _super);
    function listGukeIdxItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    listGukeIdxItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this._btn_del.addEventListener(egret.TouchEvent.TOUCH_TAP, this._delItem, this);
    };
    listGukeIdxItem.prototype._delItem = function (e) {
        var comanyname = GameGlobal.CurrentCompany;
        var item = {
            cname: comanyname,
            shopid: this.data.d.id
        };
        var rurl = FuncUrlUtil.ShopInfo_DelShopItem;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(item), rurl);
    };
    listGukeIdxItem.prototype.dataChanged = function () {
        this.setData();
    };
    listGukeIdxItem.prototype.setData = function () {
        var data = this.data;
        this.lab_itemname.text = data.d.sname;
        var sitem = ShopPageManage.ins().getServiceItemBySid(data.d.sid);
        var strwtype = "";
        if (data.d.wtype == 0) {
            strwtype = "店家安排";
        }
        else if (data.d.wtype == 1) {
            strwtype = "要男技师";
        }
        else if (data.d.wtype == 2) {
            strwtype = "要女技师";
        }
        else if (data.d.wtype == 3) {
            strwtype = "点钟 " + data.d.hcode + " 号技师";
        }
        var strwlev = "";
        if (data.d.wlev == 0) {
            strwlev = "等级无要求";
        }
        else if (data.d.wlev == 1) {
            strwlev = "初级技师";
        }
        else if (data.d.wlev == 2) {
            strwlev = "中级技师";
        }
        else if (data.d.wlev == 3) {
            strwlev = "高级技师";
        }
        else if (data.d.wlev == 4) {
            strwlev = "特级技师";
        }
        else if (data.d.wlev == 5) {
            strwlev = "专家坐诊";
        }
        if (data.d.wtype == 3) {
            strwlev = ""; //点钟的话 就不要等级要求了
        }
        this.lab_itemtime.text = sitem.timelong + "分钟 " + strwtype + " " + strwlev;
        this.lab_itemprice.text = "" + sitem.price * data.d.clocknumyy;
        var wdate = new Date(data.d.waittime);
        this.lab_waitetime.text = this.formatTime_lab(wdate);
        this.lab_num.text = data.d.clocknumyy + "个";
        this._btn_del.visible = false;
        if (data.idx >= data.allnum - 1) {
            this._btn_del.visible = true; //按顺序删除
        }
        var strpic = this.data.d.headpic;
        var strl = strpic.split(".");
        var minpic = strl[0] + "_min." + strl[1];
        sproto.sprotoRequest.loadURLImgOnThisDress(strpic, function (event) {
            var loader = event.target;
            //获取加载到的纹理对象
            var texture = loader.data;
            var bitmap = new egret.Bitmap(texture);
            bitmap.width = this.group_img.width;
            bitmap.height = this.group_img.height;
            this.group_img.addChild(bitmap);
        }, this);
    };
    listGukeIdxItem.prototype.doSomeChange = function () {
    };
    listGukeIdxItem.prototype.onRemove = function () {
        this._btn_del.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._delItem, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    listGukeIdxItem.prototype.formatTime_lab = function (now) {
        var nowYear = now.getFullYear();
        var nowMonth = now.getMonth() + 1;
        var nowweekday = now.getDate();
        var nowMonths;
        var nowweekdays;
        if (nowMonth < 10) {
            nowMonths = "0" + nowMonth;
        }
        else {
            nowMonths = nowMonth;
        }
        if (nowweekday < 10) {
            nowweekdays = "0" + nowweekday;
        }
        else {
            nowweekdays = nowweekday;
        }
        var hh = now.getHours(); //时
        var mm = now.getMinutes(); //分
        var ss = now.getSeconds(); //秒
        var hhs, mms, sss;
        if (hh < 10) {
            hhs = "0" + hh;
        }
        else {
            hhs = hh;
        }
        if (mm < 10) {
            mms = "0" + mm;
        }
        else {
            mms = mm;
        }
        if (ss < 10) {
            sss = "0" + ss;
        }
        else {
            sss = ss;
        }
        var ts = nowMonth + "月" + nowweekday + "日" + hh + "点" + mm + "分";
        return ts;
    };
    return listGukeIdxItem;
}(eui.ItemRenderer));
__reflect(listGukeIdxItem.prototype, "listGukeIdxItem");
//# sourceMappingURL=ShopMakeInfoListPaeul.js.map