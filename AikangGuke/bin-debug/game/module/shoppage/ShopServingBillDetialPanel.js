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
var ShopServingBillDetialPanel = (function (_super) {
    __extends(ShopServingBillDetialPanel, _super);
    function ShopServingBillDetialPanel() {
        var _this = _super.call(this) || this;
        _this._showmore = false;
        _this.skinName = "ShopHistoryBillListIDetailSkin";
        return _this;
    }
    ShopServingBillDetialPanel.prototype.childrenCreated = function () {
        if (this._showmore == false) {
            this._btn_showmore.visible = true;
            this._btn_showless.visible = false;
        }
        else {
            this._btn_showmore.visible = false;
            this._btn_showless.visible = true;
        }
        this._AddClick(this._btn_showmore, this._OnClick);
        this._AddClick(this._btn_showless, this._OnClick);
        this._AddClick(this._btn_goback, this._OnClick);
    };
    ShopServingBillDetialPanel.prototype.OnOpen = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this._data = param[0];
        if (!this._data) {
            WarnWin.show("数据异常 data_systemrole 为空", null, this);
            this.CloseSelf();
            return;
        }
        var knarray = this._data;
        if (knarray.length <= 0) {
            return;
        }
        var kenvo = knarray[0];
        this.gethistoryinfoDetail(kenvo);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, this.onShowSelGuke, this);
        EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew, this.onAddNewShop, this);
        this.scrollMy.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
    };
    ShopServingBillDetialPanel.prototype.OnClose = function () {
        this.scrollMy.removeEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
        EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, this.onShowSelGuke, this);
        EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew, this.onAddNewShop, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail, this.onServerEventData, this);
    };
    ;
    ShopServingBillDetialPanel.prototype.gethistoryinfoDetail = function (kenvo) {
        var comanyname = GameGlobal.CurrentCompany;
        var cmpany = {
            name: comanyname,
            bill: kenvo.billnumber
        };
        var rurl = FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
    };
    ShopServingBillDetialPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail:
                ShopPageManage.ins().data_ShopHistoryListDetail = json.obj;
                this.setShopInfoList();
                break;
        }
    };
    ShopServingBillDetialPanel.prototype.setShopInfoList = function () {
        var knarray = ShopPageManage.ins().data_ShopHistoryListDetail;
        if (knarray.length <= 0) {
            return;
        }
        var gukenum = 0;
        if (knarray[0].workstate <= 2) {
            this.lab_orderstate.text = "订单进行中...";
            this.lab_orderstate.textColor = 0x64A325;
        }
        else {
            this.lab_orderstate.text = "订单已完成>";
            this.lab_orderstate.textColor = 0x353535;
        }
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            if (kenvo.gukenum > gukenum) {
                gukenum = kenvo.gukenum;
            }
        }
        var mArr = [];
        var showallnum = 0;
        for (var i = 0; i < gukenum; i++) {
            var wArr = [];
            for (var s = 0; s < knarray.length; s++) {
                var kenvo = knarray[s];
                if (kenvo.gukeidx == i) {
                    wArr.push({ idx: s, d: kenvo });
                    showallnum++;
                }
            }
            var t = "第 " + i + " 位同伴";
            if (i == 0) {
                t = "我自己";
            }
            mArr.push({ idx: i, title: t, d: wArr });
            showallnum++;
            if (this._showmore == false) {
                if (showallnum > 3) {
                    break;
                }
            }
        }
        var lh = this.scrollMy.viewport.scrollV;
        var mCollection = new eui.ArrayCollection(mArr);
        this.listGuke.dataProvider = mCollection;
        this.listGuke.itemRenderer = listShopHistoryDetalInfoItem;
        this.listGuke.validateNow();
        if (lh > this.scrollMy.viewport.height) {
            lh = this.scrollMy.viewport.height - 500;
        }
        this.scrollMy.viewport.scrollV = lh;
        this.group_buttoninfo.y = this.group_shoplist.y + this.group_shoplist.height;
    };
    ShopServingBillDetialPanel.prototype._on_Show = function () {
        this.visible = true;
    };
    ShopServingBillDetialPanel.prototype._on_hide = function () {
    };
    ShopServingBillDetialPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._btn_showmore:
                this._showmore = true;
                this._btn_showmore.visible = false;
                this._btn_showless.visible = true;
                this.setShopInfoList();
                break;
            case this._btn_showless:
                this._showmore = false;
                this._btn_showmore.visible = true;
                this._btn_showless.visible = false;
                this.setShopInfoList();
                break;
            case this._btn_goback:
                this.CloseSelf();
                break;
        }
    };
    /**
     * 滚动位置改变的时候
     */
    ShopServingBillDetialPanel.prototype.onScrollerChange = function () {
        for (var i = 0; i < this.listGuke.$indexToRenderer.length; i++) {
            if (!this.listGuke.$indexToRenderer[i])
                continue;
            this.listGuke.$indexToRenderer[i].doSomeChange();
        }
    };
    ShopServingBillDetialPanel.prototype.onShowSelGuke = function () {
        this.onScrollerChange();
    };
    ShopServingBillDetialPanel.prototype.onAddNewShop = function () {
        this._on_hide();
    };
    ////////////////'
    ShopServingBillDetialPanel.LAYER_LEVEL = LayerManager.UI_Popup;
    return ShopServingBillDetialPanel;
}(BaseEuiView));
__reflect(ShopServingBillDetialPanel.prototype, "ShopServingBillDetialPanel");
var listShopHistoryDetalInfoItem = (function (_super) {
    __extends(listShopHistoryDetalInfoItem, _super);
    function listShopHistoryDetalInfoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    listShopHistoryDetalInfoItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);
        this._btn_addnew.visible = false;
    };
    listShopHistoryDetalInfoItem.prototype._on_thisTap = function (event) {
        if (ShopPageManage.ins()._selGukeIdx != this.data.idx) {
            ShopPageManage.ins()._selGukeIdx = this.data.idx;
            EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, null));
        }
    };
    listShopHistoryDetalInfoItem.prototype.dataChanged = function () {
        this.setData();
    };
    listShopHistoryDetalInfoItem.prototype.setData = function () {
        var data = this.data;
        this._radio_sevidx.label = "" + data.title;
        var mArr = [];
        var knarray = data.d;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            if (kenvo.d.sid > 0)
                mArr.push({ idx: i, d: kenvo.d, allnum: knarray.length });
            this.lab_waitestate.text = "";
        }
        var mCollection = new eui.ArrayCollection(mArr);
        this.listShopGukeIdx.dataProvider = mCollection;
        this.listShopGukeIdx.itemRenderer = listGukeHistroyDetailIdxItem;
        this.setRectSize();
    };
    listShopHistoryDetalInfoItem.prototype.setView = function () {
        var data = this.data;
        this._radio_sevidx.label = "" + data.title;
        var knarray = data.d;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            this.lab_waitestate.text = "";
        }
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
        if (ShopPageManage.ins()._selGukeIdx == data.idx) {
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
    listShopHistoryDetalInfoItem.prototype.setRectSize = function () {
        this.rect_back3.visible = false;
        var knarray = this.data.d;
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
            this.rect_back1.strokeColor = 0x4B8789;
            this.rect_back1.strokeWeight = 5;
            this.rect_back2.strokeColor = 0x4B8789;
            this.rect_back2.strokeWeight = 5;
        }
        else {
            this._radio_sevidx.selected = false;
            this.rect_back1.strokeColor = 0x4B8789;
            this.rect_back1.strokeWeight = 0;
            this.rect_back2.strokeColor = 0xFFFFFF;
            this.rect_back2.strokeWeight = 0;
        }
        this.rect_back2.height = this.rect_back1.height - 60;
    };
    listShopHistoryDetalInfoItem.prototype.doSomeChange = function () {
        // this.setData();
        this.setRectSize();
        for (var i = 0; i < this.listShopGukeIdx.$indexToRenderer.length; i++) {
            if (!this.listShopGukeIdx.$indexToRenderer[i])
                continue;
            this.listShopGukeIdx.$indexToRenderer[i].doSomeChange();
        }
    };
    listShopHistoryDetalInfoItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);
    };
    return listShopHistoryDetalInfoItem;
}(eui.ItemRenderer));
__reflect(listShopHistoryDetalInfoItem.prototype, "listShopHistoryDetalInfoItem");
var listGukeHistroyDetailIdxItem = (function (_super) {
    __extends(listGukeHistroyDetailIdxItem, _super);
    function listGukeHistroyDetailIdxItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    listGukeHistroyDetailIdxItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this._btn_del.visible = false;
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    listGukeHistroyDetailIdxItem.prototype.dataChanged = function () {
        this.setData();
    };
    listGukeHistroyDetailIdxItem.prototype.setData = function () {
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
        sproto.sprotoRequest.loadURLImgOnThisDress(this.data.d.headpic, function (event) {
            var loader = event.target;
            //获取加载到的纹理对象
            var texture = loader.data;
            var bitmap = new egret.Bitmap(texture);
            bitmap.width = this.group_img.width;
            bitmap.height = this.group_img.height;
            this.group_img.addChild(bitmap);
        }, this);
    };
    listGukeHistroyDetailIdxItem.prototype.doSomeChange = function () {
    };
    listGukeHistroyDetailIdxItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    listGukeHistroyDetailIdxItem.prototype.formatTime_lab = function (now) {
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
    return listGukeHistroyDetailIdxItem;
}(eui.ItemRenderer));
__reflect(listGukeHistroyDetailIdxItem.prototype, "listGukeHistroyDetailIdxItem");
//# sourceMappingURL=ShopServingBillDetialPanel.js.map