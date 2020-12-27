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
var ShopOrderInfoListPanel = (function (_super) {
    __extends(ShopOrderInfoListPanel, _super);
    function ShopOrderInfoListPanel() {
        var _this = _super.call(this) || this;
        _this._showmore = false;
        _this.skinName = "ShopMakeOrderListSkin";
        return _this;
    }
    ShopOrderInfoListPanel.prototype.childrenCreated = function () {
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
        this._AddClick(this._btn_backtoshop, this._OnClick);
    };
    ShopOrderInfoListPanel.prototype.OnOpen = function () {
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_DelAddItem, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, this.onShowSelGuke, this);
        EventCenter.Instance.addEventListener(DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew, this.onAddNewShop, this);
        this.scrollMy.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
    };
    ShopOrderInfoListPanel.prototype.OnClose = function () {
        this.scrollMy.removeEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
        EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, this.onShowSelGuke, this);
        EventCenter.Instance.removeEventListener(DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew, this.onAddNewShop, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_DelAddItem, this.onServerEventData, this);
    };
    ;
    ShopOrderInfoListPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_DelAddItem:
                ShopPageManage.ins().data_ShopMakeList = json.obj;
                EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, null));
                break;
        }
    };
    ShopOrderInfoListPanel.prototype.setShopInfoList = function () {
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
            if (kenvo.workstate >= 2) {
                this._btn_backtoshop.visible = false;
            }
        }
        var mArr = [];
        var showallnum = 0;
        for (var i = 0; i < gukenum + 1; i++) {
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
        this.listGuke.itemRenderer = listShopOrderInfoItem;
        this.listGuke.validateNow();
        if (lh > this.scrollMy.viewport.height) {
            lh = this.scrollMy.viewport.height - 500;
        }
        this.scrollMy.viewport.scrollV = lh;
        this.group_buttoninfo.y = this.group_shoplist.y + this.group_shoplist.height;
    };
    ShopOrderInfoListPanel.prototype._on_Show = function () {
        this.visible = true;
    };
    ShopOrderInfoListPanel.prototype._on_hide = function () {
        this.visible = false;
    };
    ShopOrderInfoListPanel.prototype._OnClick = function (e) {
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
            case this._btn_backtoshop:
                var comanyname = GameGlobal.CurrentCompany;
                var item = {
                    company: comanyname,
                };
                var rurl = FuncUrlUtil.ShopInfo_BackToShoping;
                sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(item), rurl);
                break;
        }
    };
    /**
     * 滚动位置改变的时候
     */
    ShopOrderInfoListPanel.prototype.onScrollerChange = function () {
        for (var i = 0; i < this.listGuke.$indexToRenderer.length; i++) {
            if (!this.listGuke.$indexToRenderer[i])
                continue;
            this.listGuke.$indexToRenderer[i].doSomeChange();
        }
    };
    ShopOrderInfoListPanel.prototype.onShowSelGuke = function () {
        this.onScrollerChange();
    };
    ShopOrderInfoListPanel.prototype.onAddNewShop = function () {
        this._on_hide();
    };
    ////////////////'
    ShopOrderInfoListPanel.LAYER_LEVEL = LayerManager.UI_Main;
    return ShopOrderInfoListPanel;
}(BaseEuiView));
__reflect(ShopOrderInfoListPanel.prototype, "ShopOrderInfoListPanel");
var listShopOrderInfoItem = (function (_super) {
    __extends(listShopOrderInfoItem, _super);
    function listShopOrderInfoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    listShopOrderInfoItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);
        this._btn_addnew.addEventListener(egret.TouchEvent.TOUCH_TAP, this._on_AddNewTap, this);
        this._btn_addnew.visible = false;
    };
    listShopOrderInfoItem.prototype._on_thisTap = function (event) {
        if (ShopPageManage.ins()._selGukeIdx != this.data.idx) {
            ShopPageManage.ins()._selGukeIdx = this.data.idx;
            EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke, null));
        }
    };
    listShopOrderInfoItem.prototype._on_AddNewTap = function (event) {
        EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew, null));
    };
    listShopOrderInfoItem.prototype.dataChanged = function () {
        this.setData();
    };
    listShopOrderInfoItem.prototype.setData = function () {
        var data = this.data;
        this._radio_sevidx.label = "" + data.title;
        var mArr = [];
        var knarray = data.d;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            if (kenvo.d.sid > 0)
                mArr.push({ idx: i, d: kenvo.d, allnum: knarray.length });
            if (kenvo.d.hid > 0) {
                this.lab_waitestate.text = "技师正在赶来...";
                this.lab_waitestate.textColor = 0x9AD635;
            }
            else {
                this.lab_waitestate.textColor = 0xD83457;
                if (kenvo.d.waitestate == 1) {
                    this.lab_waitestate.text = "技师全忙！ 请稍等。";
                }
                if (kenvo.d.waitestate == 2) {
                    this.lab_waitestate.text = "所选等级技师全忙！ ，请稍等。";
                }
                if (kenvo.d.waitestate == 3) {
                    this.lab_waitestate.text = "所选等级男技师全忙！ ，请稍等。";
                }
                if (kenvo.d.waitestate == 4) {
                    this.lab_waitestate.text = "所选等级女技师全忙！ ，请稍等。";
                }
                if (kenvo.d.waitestate == 5) {
                    this.lab_waitestate.text = "未到服务开始时间！ ，请稍等。";
                }
            }
            if (kenvo.d.workstate == 2) {
                this._btn_addnew.visible = true;
            }
        }
        var mCollection = new eui.ArrayCollection(mArr);
        this.listShopGukeIdx.dataProvider = mCollection;
        this.listShopGukeIdx.itemRenderer = listGukeOrderIdxItem;
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
    listShopOrderInfoItem.prototype.setView = function () {
        var data = this.data;
        this._radio_sevidx.label = "" + data.title;
        var knarray = data.d;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            if (kenvo.d.hid > 0) {
                this.lab_waitestate.text = "技师正在赶来...";
                this.lab_waitestate.textColor = 0x9AD635;
            }
            else {
                this.lab_waitestate.textColor = 0xD83457;
                if (kenvo.d.waitestate == 1) {
                    this.lab_waitestate.text = "技师全忙！ 请稍等。";
                }
                if (kenvo.d.waitestate == 2) {
                    this.lab_waitestate.text = "所选等级技师全忙！ ，请稍等。";
                }
                if (kenvo.d.waitestate == 3) {
                    this.lab_waitestate.text = "所选等级男技师全忙！ ，请稍等。";
                }
                if (kenvo.d.waitestate == 4) {
                    this.lab_waitestate.text = "所选等级女技师全忙！ ，请稍等。";
                }
                if (kenvo.d.waitestate == 5) {
                    this.lab_waitestate.text = "未到服务开始时间！ ，请稍等。";
                }
            }
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
    listShopOrderInfoItem.prototype.doSomeChange = function () {
        this.setData();
        for (var i = 0; i < this.listShopGukeIdx.$indexToRenderer.length; i++) {
            if (!this.listShopGukeIdx.$indexToRenderer[i])
                continue;
            this.listShopGukeIdx.$indexToRenderer[i].doSomeChange();
        }
    };
    listShopOrderInfoItem.prototype.onRemove = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_thisTap, this);
        this._btn_addnew.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._on_AddNewTap, this);
    };
    return listShopOrderInfoItem;
}(eui.ItemRenderer));
__reflect(listShopOrderInfoItem.prototype, "listShopOrderInfoItem");
var listGukeOrderIdxItem = (function (_super) {
    __extends(listGukeOrderIdxItem, _super);
    function listGukeOrderIdxItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    listGukeOrderIdxItem.prototype.createChildren = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this._btn_del.addEventListener(egret.TouchEvent.TOUCH_TAP, this._delItem, this);
    };
    listGukeOrderIdxItem.prototype._delItem = function (e) {
        var comanyname = GameGlobal.CurrentCompany;
        var item = {
            cname: comanyname,
            shopid: this.data.d.id
        };
        var rurl = FuncUrlUtil.ShopInfo_DelAddItem;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(item), rurl);
    };
    listGukeOrderIdxItem.prototype.dataChanged = function () {
        this.setData();
    };
    listGukeOrderIdxItem.prototype.setData = function () {
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
        if (this.data.d.workstate == 2 && this.data.d.paystate == 0) {
            this._btn_del.visible = true; //按顺序删除
            this._btn_del.enabled = false;
            if (data.idx >= data.allnum - 1) {
                this._btn_del.enabled = true;
            }
        }
    };
    listGukeOrderIdxItem.prototype.doSomeChange = function () {
    };
    listGukeOrderIdxItem.prototype.onRemove = function () {
        this._btn_del.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._delItem, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    listGukeOrderIdxItem.prototype.formatTime_lab = function (now) {
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
    return listGukeOrderIdxItem;
}(eui.ItemRenderer));
__reflect(listGukeOrderIdxItem.prototype, "listGukeOrderIdxItem");
//# sourceMappingURL=ShopOrderInfoListPanel.js.map