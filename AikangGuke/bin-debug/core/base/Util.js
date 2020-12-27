var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Util = (function () {
    function Util() {
    }
    Util.GetClass = function (obj) {
        if (!obj) {
            return null;
        }
        var clsName = obj.__class__;
        if (!clsName) {
            return null;
        }
        return egret.getDefinitionByName(clsName);
    };
    Util.CopyProtoData = function (obj) {
        if (obj == null) {
            return null;
        }
        var newObj = {};
        var keys = Object.keys(obj);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            if (key == "se" || key == "de") {
                continue;
            }
            newObj[key] = obj[key];
        }
    };
    Util.GetParentByType = function (obj, cls) {
        if (obj == null) {
            return null;
        }
        var parentName = egret.getQualifiedClassName(cls);
        var parent = obj;
        if (egret.is(parent, parentName)) {
            return parent;
        }
        for (var i = 0; i < 10; ++i) {
            parent = parent.parent;
            if (parent == null) {
                return null;
            }
            if (egret.is(parent, parentName)) {
                return parent;
            }
        }
        return null;
    };
    Util.Copy = function (text) {
        try {
            var t = document.createElement("input");
            t.value = text;
            document.body.appendChild(t);
            t.select();
            t.setSelectionRange(0, t.value.length);
            document.execCommand("Copy");
            document.body.removeChild(t);
            return true;
        }
        catch (e) {
            console.error("Copy => " + e);
        }
        return false;
    };
    Util.formatTime = function (now) {
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
    Util.isLeapYear = function (year) {
        if (year % 100 == 0 && year % 400 == 0) {
            return true;
        }
        else if (year % 100 != 0 && year % 4 == 0) {
            return true;
        }
        return false;
    };
    Util.getDaysOfMonth = function (now) {
        var year = now.getFullYear();
        var isLeapYear = this.isLeapYear(year);
        var month = now.getMonth() + 1;
        var days = 0;
        switch (month) {
            case 1:
                days = 31;
                break;
            case 3:
                days = 31;
                break;
            case 5:
                days = 31;
                break;
            case 7:
                days = 31;
                break;
            case 8:
                days = 31;
                break;
            case 10:
                days = 31;
                break;
            case 12:
                days = 31;
                break;
            case 4:
                days = 30;
                break;
            case 6:
                days = 30;
                break;
            case 9:
                days = 30;
                break;
            case 11:
                days = 30;
                break;
            case 2:
                if (isLeapYear) {
                    days = 29;
                }
                else {
                    days = 28;
                }
        }
        return days;
    };
    Util.getDaysOfMonth_pre = function (now) {
        var year = now.getFullYear();
        var isLeapYear = this.isLeapYear(year);
        var month = now.getMonth();
        if (month == 0) {
            month = 12;
        }
        var days = 0;
        switch (month) {
            case 1:
                days = 31;
                break;
            case 3:
                days = 31;
                break;
            case 5:
                days = 31;
                break;
            case 7:
                days = 31;
                break;
            case 8:
                days = 31;
                break;
            case 10:
                days = 31;
                break;
            case 12:
                days = 31;
                break;
            case 4:
                days = 30;
                break;
            case 6:
                days = 30;
                break;
            case 9:
                days = 30;
                break;
            case 11:
                days = 30;
                break;
            case 2:
                if (isLeapYear) {
                    days = 29;
                }
                else {
                    days = 28;
                }
        }
        return days;
    };
    return Util;
}());
__reflect(Util.prototype, "Util");
//# sourceMappingURL=Util.js.map