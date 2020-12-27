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
var ShopOredrPanel = (function (_super) {
    __extends(ShopOredrPanel, _super);
    function ShopOredrPanel() {
        var _this = _super.call(this) || this;
        _this._listWorks = [];
        _this._listGukes = [];
        _this._listWorkItems = [];
        _this._listWlevs = [];
        _this._selWtype = 0;
        _this._selWLev = 0;
        _this._SelHid = -1;
        _this._settime = 0;
        _this._setnum = 0;
        _this.skinName = "ShopOredrSkin";
        return _this;
    }
    ShopOredrPanel.prototype.childrenCreated = function () {
        var _raido_group = new eui.RadioButtonGroup();
        _raido_group.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);
        this._radio_lun.group = _raido_group;
        this._radio_nan.group = _raido_group;
        this._radio_nv.group = _raido_group;
        this._radio_dian.group = _raido_group;
        this._radio_lun.selected = true;
        this._selWtype = 0;
        var _raido_group1 = new eui.RadioButtonGroup();
        _raido_group1.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler1, this);
        this._radio_wo.group = _raido_group1;
        this._radio_tb.group = _raido_group1;
        var _raido_group2 = new eui.RadioButtonGroup();
        _raido_group2.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler2, this);
        this._radio_lev_no.group = _raido_group2;
        this._radio_lev_sel.group = _raido_group2;
        this._btn_worksel.visible = false;
        this._btn_querytime.visible = false;
        this._AddClick(this._btn_worksel, this._OnClick);
        this._AddClick(this._btn_querytime, this._OnClick);
        this._AddClick(this._btn_back, this._OnClick);
        this._AddClick(this._btn_order, this._OnClick);
        this._AddClick(this._btn_time_MA, this._OnClick);
        this._AddClick(this._btn_time_MD, this._OnClick);
        this._AddClick(this._btn_time_DA, this._OnClick);
        this._AddClick(this._btn_time_DD, this._OnClick);
        this._AddClick(this._btn_time_HA, this._OnClick);
        this._AddClick(this._btn_time_HD, this._OnClick);
        this._AddClick(this._btn_time_FA, this._OnClick);
        this._AddClick(this._btn_time_FD, this._OnClick);
        this._AddClick(this._btn_time_NA, this._OnClick);
        this._AddClick(this._btn_time_ND, this._OnClick);
        this._AddClick(this._radio_tb, this._OnClick);
        this._AddClick(this._radio_lev_no, this._OnClick);
        this._AddClick(this._radio_lev_sel, this._OnClick);
        this.lab_time_num.text = 1 + "";
        this._setnum = 1;
        this.lab_wntm.visible = false;
        //设置顾客列表
        this._radio_tb.visible = false;
        var gnum = ShopPageManage.ins().ShopGuke_Num;
        if (gnum > 1) {
            this._radio_tb.visible = true;
        }
        this._listGukes = [];
        for (var i = 1; i < gnum; i++) {
            var gname = "";
            gname = "第 " + i + " 位同伴";
            this._listGukes.push({ name1: gname, hid: 0 });
        }
        this._listWlevs = [];
        this._listWlevs.push({ name1: "初级技师", lev: 1 });
        this._listWlevs.push({ name1: "中级技师", lev: 2 });
        this._listWlevs.push({ name1: "高级技师", lev: 3 });
        this._listWlevs.push({ name1: "特级技师", lev: 4 });
        this._listWlevs.push({ name1: "专家坐诊", lev: 5 });
        this.rect_bot.visible = false;
        this.lab_haveset_selhid.visible = false;
        this.lab_haveset_settime.visible = false;
    };
    ShopOredrPanel.prototype.formatTime_lab = function (now) {
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
        var ts = nowMonth + "月" + nowweekday + "日 " + hhs + ":" + mms;
        this.lab_time_mou.text = nowMonths + "月";
        this.lab_time_day.text = nowweekdays + "日";
        this.lab_time_hou.text = hh + "时";
        this.lab_time_min.text = mm + "分";
    };
    ShopOredrPanel.prototype._setSameGuketime = function () {
        //同一顾客的下一项目的开始时间是上一个项目的开始时间加上服务时长
        var find = 0;
        var ltm = 0;
        var nowt;
        var data = ShopPageManage.ins().data_ShopMakeList;
        var knarray = data;
        var maxtm = new Date().getTime();
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            if (kenvo.gukeidx == ShopPageManage.ins()._selGukeIdx) {
                var sitem = ShopPageManage.ins().getServiceItemBySid(kenvo.sid);
                if (sitem != null) {
                    var ltmmm = new Date(kenvo.waittime).getTime();
                    if (ltmmm + (kenvo.clocknumyy * sitem.timelong) * 60 * 1000 > maxtm) {
                        maxtm = ltmmm;
                        ltm = (kenvo.clocknumyy * sitem.timelong);
                    }
                    find = 1;
                }
            }
        }
        var nowt;
        nowt = maxtm + 20 * 1000 + ltm * 60 * 1000;
        this._settime = nowt;
        this.formatTime_lab(new Date(nowt));
        this.setSelDateTimeEnable(true);
        this.lab_haveset_settime.visible = false;
        if (find == 1) {
            this.setSelDateTimeEnable(false);
            this.lab_haveset_settime.visible = true;
        }
    };
    ShopOredrPanel.prototype.setLastGukeSel = function () {
        //上次这位同伴选择的排钟方式
        var find = 0;
        var lastwtypesel = 0;
        var lasthidsel = -1;
        var lastidsel = 0;
        var lastwlev = 0;
        var knarray = ShopPageManage.ins().data_ShopMakeList;
        for (var i = 0; i < knarray.length; i++) {
            var kenvo = knarray[i];
            if (kenvo.gukeidx == ShopPageManage.ins()._selGukeIdx) {
                if (kenvo.id > lastidsel) {
                    lastwtypesel = kenvo.wtype;
                    lasthidsel = kenvo.hid;
                    lastidsel = kenvo.id;
                    lastwlev = kenvo.wlev;
                    find = 1;
                }
            }
        }
        this.setSelWtypeEnable(true);
        this._btn_worksel.enabled = true;
        this.lab_haveset_selhid.visible = false;
        if (find == 1) {
            //已经选过服务方式 那么不能在选了
            this.setSelWtypeEnable(false);
            this.lab_haveset_selhid.visible = true;
        }
        this._selWtype = lastwtypesel;
        this._btn_worksel.visible = false;
        this._btn_worksel.label = "选择技师";
        this._btn_querytime.visible = false;
        if (lastwtypesel == 0) {
            this._radio_lun.enabled = true;
            this._radio_lun.selected = true;
        }
        else if (lastwtypesel == 1) {
            this._radio_nan.enabled = true;
            this._radio_nan.selected = true;
        }
        else if (lastwtypesel == 2) {
            this._radio_nv.enabled = true;
            this._radio_nv.selected = true;
        }
        else if (lastwtypesel == 3) {
            this._radio_dian.enabled = true;
            this._radio_dian.selected = true;
            this._SelHid = lasthidsel;
            var knarray_1 = ShopPageManage.ins().data_ShopWorkerList;
            for (var i = 0; i < knarray_1.length; i++) {
                var wk = knarray_1[i];
                if (wk.hid == this._SelHid) {
                    this._btn_worksel.label = "  " + wk.servicecode + "号  ";
                    this._btn_worksel.visible = true;
                    break;
                }
            }
            if (find == 1) {
                this._btn_worksel.enabled = false;
            }
            this.sendSelWorker();
        }
        if (lastwlev == 0) {
            this._radio_lev_no.selected = true;
        }
        else {
            this._radio_lev_sel.selected = true;
            this._radio_lev_sel.label = this._listWlevs[lastwlev - 1].name1;
        }
        this._radio_lev_no.enabled = true;
        this._radio_lev_sel.enabled = true;
        if (find == 1) {
            this._radio_lev_no.enabled = false;
            this._radio_lev_sel.enabled = false;
        }
    };
    ShopOredrPanel.prototype.setSelWtypeEnable = function (e) {
        if (e == true) {
            this._radio_lun.enabled = true;
            this._radio_nan.enabled = true;
            this._radio_nv.enabled = true;
            this._radio_dian.enabled = true;
        }
        else {
            this._radio_lun.enabled = false;
            this._radio_nan.enabled = false;
            this._radio_nv.enabled = false;
            this._radio_dian.enabled = false;
        }
    };
    ShopOredrPanel.prototype.setSelDateTimeEnable = function (e) {
        if (e == true) {
            this._btn_time_MA.enabled = true;
            this._btn_time_MD.enabled = true;
            this._btn_time_DA.enabled = true;
            this._btn_time_DD.enabled = true;
            this._btn_time_HA.enabled = true;
            this._btn_time_HD.enabled = true;
            this._btn_time_FA.enabled = true;
            this._btn_time_FD.enabled = true;
        }
        else {
            this._btn_time_MA.enabled = false;
            this._btn_time_MD.enabled = false;
            this._btn_time_DA.enabled = false;
            this._btn_time_DD.enabled = false;
            this._btn_time_HA.enabled = false;
            this._btn_time_HD.enabled = false;
            this._btn_time_FA.enabled = false;
            this._btn_time_FD.enabled = false;
        }
    };
    ShopOredrPanel.prototype.OnOpen = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this._data = param[0];
        this.lab_itemname.text = this._data.name;
        this.lab_itemprice.text = "¥" + this._data.price;
        //上一次选择的顾客同伴
        var sel = 0;
        if (ShopPageManage.ins()._selGukeIdx <= 0) {
            this._radio_wo.selected = true;
        }
        else {
            this._radio_tb.selected = true;
            sel = ShopPageManage.ins()._selGukeIdx - 1;
            if (sel >= 0 && sel < this._listGukes.length) {
                this._radio_tb.label = this._listGukes[sel].name1;
            }
        }
        this._setSameGuketime();
        var comanyname = GameGlobal.CurrentCompany;
        var cmpany = {
            name: comanyname
        };
        var rurl = FuncUrlUtil.ShopInfo_GetCanWorkerList;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
        this.botMov.addEventListener(egret.Event.COMPLETE, this.redBotHit, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetCanWorkerList, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_GetThisWorkerOrderList, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_MakeShop, this.onServerEventData, this);
        EventCenter.Instance.addEventListener(FuncUrlUtil.ShopInfo_AddShopFor, this.onServerEventData, this);
    };
    ShopOredrPanel.prototype.OnClose = function () {
        this.botMov.removeEventListener(egret.Event.COMPLETE, this.redBotHit, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetCanWorkerList, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_GetThisWorkerOrderList, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_MakeShop, this.onServerEventData, this);
        EventCenter.Instance.removeEventListener(FuncUrlUtil.ShopInfo_AddShopFor, this.onServerEventData, this);
    };
    ;
    ShopOredrPanel.prototype.redBotHit = function () {
        EventCenter.Instance.dispatchEvent(new DataTransEvent(DataTransEvent.Event_ShopInfo_MakeShop_BotHit, null));
        this.CloseSelf();
    };
    ShopOredrPanel.prototype.onServerEventData = function (e) {
        var json = e.data;
        switch (json.msg) {
            case FuncUrlUtil.ShopInfo_GetCanWorkerList:
                ShopPageManage.ins().data_ShopWorkerList = json.obj;
                this.onList_work_Update();
                this.setLastGukeSel();
                break;
            case FuncUrlUtil.ShopInfo_GetThisWorkerOrderList:
                ShopPageManage.ins().data_ThisWorkerItemList = json.obj;
                this.onList_workwait_Update();
                this._btn_querytime.visible = true;
                this.ifTimeOverEachOther();
                break;
            case FuncUrlUtil.ShopInfo_MakeShop:
                ShopPageManage.ins().data_ShopMakeList = json.obj;
                this.rect_bot.visible = true;
                this.botMov.play(0);
                this._setSameGuketime();
                this.setLastGukeSel();
                break;
            case FuncUrlUtil.ShopInfo_AddShopFor:
                ShopPageManage.ins().data_ShopMakeList = json.obj;
                this.rect_bot.visible = true;
                this.botMov.play(0);
                break;
        }
    };
    ShopOredrPanel.prototype.ifTimeOverEachOther = function () {
        this.lab_time_mou.textColor = 0x352F2F;
        this.lab_time_day.textColor = 0x352F2F;
        this.lab_time_hou.textColor = 0x352F2F;
        this.lab_time_min.textColor = 0x352F2F;
        this.lab_time_num.textColor = 0x352F2F;
        this.lab_wntm.visible = false;
        var settm = { time: this._settime, num: this._setnum };
        if (this._SelHid > 0) {
            var ov = ShopPageManage.ins()._ifWorkerItemTimeisOverEachOther(settm);
            if (ov == 1) {
                this.lab_wntm.visible = true;
                this.lab_time_mou.textColor = 0xD12323;
                this.lab_time_day.textColor = 0xD12323;
                this.lab_time_hou.textColor = 0xD12323;
                this.lab_time_min.textColor = 0xD12323;
            }
            if (ov >= 2) {
                this.lab_wntm.visible = true;
                this.lab_time_num.textColor = 0xD12323;
            }
            if (ov == 0) {
                var ovs = ShopPageManage.ins()._ifWorkerItemTimeisOverEachOtherOnThisShop(settm, this._SelHid);
                if (ovs == 1) {
                    this.lab_wntm.visible = true;
                    this.lab_time_mou.textColor = 0xD12323;
                    this.lab_time_day.textColor = 0xD12323;
                    this.lab_time_hou.textColor = 0xD12323;
                    this.lab_time_min.textColor = 0xD12323;
                }
                if (ovs >= 2) {
                    this.lab_wntm.visible = true;
                    this.lab_time_num.textColor = 0xD12323;
                }
            }
        }
        var ov1 = ShopPageManage.ins()._ifGukeItemTimeisOverEachOther(settm);
        if (ov1 == 1) {
            this.lab_wntm.visible = true;
            this.lab_time_mou.textColor = 0xD12323;
            this.lab_time_day.textColor = 0xD12323;
            this.lab_time_hou.textColor = 0xD12323;
            this.lab_time_min.textColor = 0xD12323;
        }
        if (ov1 >= 2) {
            this.lab_wntm.visible = true;
            this.lab_time_num.textColor = 0xD12323;
        }
    };
    ShopOredrPanel.prototype.onList_work_Update = function () {
        var data = ShopPageManage.ins().data_ShopWorkerList;
        this._listWorks = [];
        var knarray = data;
        for (var i = 0; i < knarray.length; i++) {
            var wk = knarray[i];
            this._listWorks.push({ name1: "  " + wk.servicecode + "号  ", hid: wk.hid });
        }
    };
    ShopOredrPanel.prototype.onList_workwait_Update = function () {
        var data = ShopPageManage.ins().data_ThisWorkerItemList;
        this._listWorkItems = [];
        var knarray = data;
        var nowtime = new Date().getTime();
        var lasttime;
        var lastday;
        var showday = -1;
        for (var i = 0; i < knarray.length; i++) {
            var item = knarray[i];
            if (item.workstate >= WaiterStateUtil.SST_FW_FINISH) {
                continue;
            }
            var sitem = ShopPageManage.ins().getServiceItemBySid(item.sid);
            var wdate = new Date(item.waittime);
            var num = item.clocknumyy;
            if (num == null) {
                num = 1;
            }
            var ytm = wdate.getTime() + num * sitem.timelong * 60 * 1000;
            if (item.workstate >= WaiterStateUtil.SST_SZ_MIN && item.workstate < WaiterStateUtil.SST_FW_FINISH) {
                var mms = (nowtime - wdate.getTime()) / (60 * 1000);
                var hmms = mms % 60;
                if (hmms > 10) {
                    var hhs = Math.floor(mms / 60) + 1;
                    ytm = wdate.getTime() + hhs * 60 * 60 * 1000;
                }
                else {
                    ytm = nowtime;
                }
            }
            var nowytm = new Date(ytm);
            var wdatet = this.formatTime_hour(wdate);
            var ydate = this.formatTime_hour(nowytm);
            if (nowytm.getDay() > wdate.getDay()) {
                ydate = this.formatTime(nowytm);
            }
            {
                var first = 0;
                if (lasttime == null) {
                    lasttime = nowtime;
                    first = 1;
                }
                //中间空闲时间超过30分钟才显示
                var lv_1 = (wdate.getTime() - lasttime) / (60 * 1000);
                if (lv_1 > 30) {
                    var lvdate = new Date(lasttime);
                    var lvdatet_1 = this.formatTime_hour(lvdate);
                    var kxwdatet = this.formatTime_hour(wdate);
                    var wwd = wdate.getDay();
                    var lld = lvdate.getDay();
                    if (wwd != lld) {
                        kxwdatet = this.formatTime(wdate);
                    }
                    var hhlv_1 = Math.floor(lv_1 / 60);
                    var sv_1 = "";
                    if (hhlv_1 > 0) {
                        sv_1 = sv_1 + hhlv_1 + "小时";
                    }
                    var mmlv_1 = Math.floor(lv_1 % 60);
                    if (mmlv_1 > 0) {
                        sv_1 = sv_1 + mmlv_1 + "分";
                    }
                    if (first == 1) {
                        this._listWorkItems.push({ name1: this.formatTime_day(lvdate), name2: "", name3: "", c: 2 });
                        showday = lvdate.getDay();
                    }
                    this._listWorkItems.push({ name1: lvdatet_1 + " 至 " + kxwdatet, name2: sv_1, name3: "空闲", c: 0 });
                }
            }
            //不是同一天就显示日期
            if (lastday == null) {
                if (showday != wdate.getDay()) {
                    this._listWorkItems.push({ name1: this.formatTime_day(wdate), name2: "", name3: "", c: 2 });
                    showday = wdate.getDay();
                }
            }
            else {
                if (wdate.getDay() > lastday.getDay()) {
                    if (showday != wdate.getDay()) {
                        this._listWorkItems.push({ name1: this.formatTime_day(wdate), name2: "", name3: "", c: 2 });
                        showday = wdate.getDay();
                    }
                }
            }
            var lv = (ytm - wdate.getTime()) / (60 * 1000);
            var hhlv = Math.floor(lv / 60);
            var sv = "";
            if (hhlv > 0) {
                sv = sv + hhlv + "小时";
            }
            var mmlv = Math.floor(lv % 60);
            if (mmlv > 0) {
                sv = sv + mmlv + "分钟";
            }
            this._listWorkItems.push({ name1: wdatet + " 至 " + ydate, name2: sv, name3: "预约", c: 1 });
            lasttime = ytm;
            lastday = new Date(ytm);
        }
        if (lasttime == null) {
            lasttime = new Date().getTime();
        }
        var mlvdate = new Date(lasttime);
        var lvdatet = this.formatTime_hour(mlvdate);
        if (showday != mlvdate.getDay()) {
            this._listWorkItems.push({ name1: this.formatTime_day(mlvdate), name2: "", name3: "", c: 2 });
        }
        this._listWorkItems.push({ name1: lvdatet + " 后", name2: "", name3: "空闲", c: 0 });
        ShopPageManage.ins().data_listWorkItems = this._listWorkItems;
        ShopPageManage.ins().data_listWorkTile = this._btn_worksel.label + "的工作安排";
    };
    ShopOredrPanel.prototype.formatTime = function (now) {
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
        var ts = nowMonths + "月" + nowweekdays + "日 " + hhs + ":" + mms;
        return ts;
    };
    ShopOredrPanel.prototype.formatTime_day = function (now) {
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
        var ts = nowMonths + "月" + nowweekdays + "日";
        return ts;
    };
    ShopOredrPanel.prototype.formatTime_hour = function (now) {
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
        var ts = hhs + ":" + mms;
        return ts;
    };
    ShopOredrPanel.prototype._OnClick = function (e) {
        switch (e.target) {
            case this._radio_lev_no:
                this._selWLev = 0;
                break;
            case this._radio_lev_sel:
                ViewManager.ins().open(normalselpanel, "选择技师", this._listWlevs, this._onselWlev, this);
                break;
            case this._btn_worksel:
                ViewManager.ins().open(normalselpanel, "选择技师", this._listWorks, this._selWorker, this);
                break;
            case this._btn_querytime:
                ViewManager.ins().open(normalTimeSetPanel, this._btn_worksel.label + "的工作安排", this._listWorkItems, null, this);
                break;
            case this._btn_back:
                this.CloseSelf();
                break;
            case this._btn_order:
                this.makeOrder();
                break;
            case this._radio_tb:
                ViewManager.ins().open(normalselpanel, "选择同伴", this._listGukes, this._selGuke, this);
                break;
            case this._btn_time_FD:
                this._settime = this._settime - 60 * 1000;
                var std = new Date(this._settime);
                this.formatTime_lab(std);
                this.ifTimeOverEachOther();
                break;
            case this._btn_time_FA:
                this._settime = this._settime + 60 * 1000;
                var std = new Date(this._settime);
                this.formatTime_lab(std);
                this.ifTimeOverEachOther();
                break;
            case this._btn_time_HD:
                this._settime = this._settime - 60 * 60 * 1000;
                var std = new Date(this._settime);
                this.formatTime_lab(std);
                this.ifTimeOverEachOther();
                break;
            case this._btn_time_HA:
                this._settime = this._settime + 60 * 60 * 1000;
                var std = new Date(this._settime);
                this.formatTime_lab(std);
                this.ifTimeOverEachOther();
                break;
            case this._btn_time_DD:
                this._settime = this._settime - 24 * 60 * 60 * 1000;
                var std = new Date(this._settime);
                this.formatTime_lab(std);
                this.ifTimeOverEachOther();
                break;
            case this._btn_time_DA:
                this._settime = this._settime + 24 * 60 * 60 * 1000;
                var std = new Date(this._settime);
                this.formatTime_lab(std);
                this.ifTimeOverEachOther();
                break;
            case this._btn_time_MD:
                var std = new Date(this._settime);
                var days = Util.getDaysOfMonth_pre(std);
                this._settime = this._settime - days * 24 * 60 * 60 * 1000;
                std = new Date(this._settime);
                this.formatTime_lab(std);
                this.ifTimeOverEachOther();
                break;
            case this._btn_time_MA:
                var std = new Date(this._settime);
                var days = Util.getDaysOfMonth(std);
                this._settime = this._settime + days * 24 * 60 * 60 * 1000;
                std = new Date(this._settime);
                this.formatTime_lab(std);
                this.ifTimeOverEachOther();
                break;
            case this._btn_time_ND:
                this._setnum = this._setnum - 0.5;
                this.lab_time_num.text = this._setnum + "";
                this.ifTimeOverEachOther();
                this.lab_itemprice.text = "¥" + this._setnum * this._data.price;
                break;
            case this._btn_time_NA:
                this._setnum = this._setnum + 0.5;
                this.lab_time_num.text = this._setnum + "";
                this.ifTimeOverEachOther();
                this.lab_itemprice.text = "¥" + this._setnum * this._data.price;
                break;
        }
    };
    ShopOredrPanel.prototype._onselWlev = function (sel) {
        this._selWLev = this._listWlevs[sel].lev;
        this._radio_lev_sel.label = this._listWlevs[sel].name1;
    };
    ShopOredrPanel.prototype._selWorker = function (sel) {
        this._SelHid = this._listWorks[sel].hid;
        this._btn_worksel.label = this._listWorks[sel].name1;
        this.sendSelWorker();
    };
    ShopOredrPanel.prototype.sendSelWorker = function () {
        var comanyname = GameGlobal.CurrentCompany;
        var cmpany = {
            name: comanyname,
            hid: this._SelHid + ""
        };
        var rurl = FuncUrlUtil.ShopInfo_GetThisWorkerOrderList;
        sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(cmpany), rurl);
    };
    ShopOredrPanel.prototype._selGuke = function (sel) {
        ShopPageManage.ins()._selGukeIdx = sel + 1;
        this._radio_tb.label = this._listGukes[sel].name1;
        this._setSameGuketime();
        //设置上次默认选择的技师
        this.setLastGukeSel();
    };
    ShopOredrPanel.prototype.radioChangeHandler = function (e) {
        //当点击第一个选项卡按钮时，下面输出为
        var radioGroup = e.target;
        var sel = radioGroup.selectedValue;
        if (sel == 3) {
            this._btn_worksel.visible = true;
            this._radio_lev_no.enabled = false;
            this._radio_lev_sel.enabled = false;
            this._radio_lev_no.selected = true;
        }
        else {
            this._btn_worksel.visible = false;
            this._btn_worksel.label = "选择技师";
            this._btn_querytime.visible = false;
            this._radio_lev_no.enabled = true;
            this._radio_lev_sel.enabled = true;
        }
        this._selWtype = sel;
    };
    ShopOredrPanel.prototype.radioChangeHandler1 = function (e) {
        //当点击第一个选项卡按钮时，下面输出为
        var radioGroup = e.target;
        var sel = radioGroup.selectedValue;
        if (sel == 0) {
            ShopPageManage.ins()._selGukeIdx = 0;
            this._setSameGuketime();
            //设置上次默认选择的技师
            this.setLastGukeSel();
        }
        if (sel == 1) {
            ViewManager.ins().open(normalselpanel, "选择同伴", this._listGukes, this._selGuke, this);
        }
    };
    ShopOredrPanel.prototype.radioChangeHandler2 = function (e) {
        //当点击第一个选项卡按钮时，下面输出为
        var radioGroup = e.target;
        var sel = radioGroup.selectedValue;
        if (sel == 0) {
            this._selWLev = 0;
        }
        if (sel == 1) {
        }
    };
    ShopOredrPanel.prototype.makeOrder = function () {
        if (this.lab_wntm.visible == true) {
            WarnWin.show("时间冲突，请重新设置服务时间！", null, this);
            return;
        }
        var wt = new Date(this._settime);
        var wtstr = this.formatTime_servers(wt);
        var selhcode = "";
        var selhname = "";
        var knarray = ShopPageManage.ins().data_ShopWorkerList;
        for (var i = 0; i < knarray.length; i++) {
            var wk = knarray[i];
            if (wk.hid == this._SelHid) {
                selhcode = wk.servicecode;
                selhname = wk.name;
                break;
            }
        }
        var order = {
            company: GameGlobal.CurrentCompany,
            gukenum: ShopPageManage.ins().ShopGuke_Num,
            gukeidx: ShopPageManage.ins()._selGukeIdx,
            rmid: egret.getOption("rmid"),
            rmname: egret.getOption("rmname"),
            hid: this._SelHid,
            hcode: selhcode,
            hname: selhname,
            sid: this._data.id,
            sname: this._data.name,
            clocknumyy: this._setnum,
            wtype: this._selWtype,
            wlev: this._selWLev,
            waittime: wtstr,
            workstate: 0,
            billnumber: ""
        };
        if (ShopPageManage.ins()._addstate == 0) {
            var rurl = FuncUrlUtil.ShopInfo_MakeShop;
            sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
        }
        else if (ShopPageManage.ins()._addstate == 2) {
            order.workstate = ShopPageManage.ins()._addstate;
            order.billnumber = ShopPageManage.ins()._addbillnumber;
            var rurl = FuncUrlUtil.ShopInfo_AddShopFor;
            sproto.sprotoRequest.sendPostRequestJson(JSON.stringify(order), rurl);
        }
    };
    ShopOredrPanel.prototype.formatTime_servers = function (now) {
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
        var ts = nowYear + "-" + nowMonths + "-" + nowweekdays + " " + hhs + ":" + mms + ":" + sss;
        return ts;
    };
    ////////////////'
    ShopOredrPanel.LAYER_LEVEL = LayerManager.UI_USER_INFO;
    return ShopOredrPanel;
}(BaseEuiView));
__reflect(ShopOredrPanel.prototype, "ShopOredrPanel");
//# sourceMappingURL=ShopOredrPanel.js.map