var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WaiterStateUtil = (function () {
    function WaiterStateUtil() {
    }
    WaiterStateUtil.getStateName = function (state) {
        var str = "";
        if (state == this.SST_YY_WAIT) {
            str = "预约";
        }
        if (state == this.SST_YY_RECV) {
            str = "定约";
        }
        if (state >= this.SST_WF_MIN && state < this.SST_WF_MAX) {
            str = "缺人";
        }
        if (state >= this.SST_HJ_MIN && state < this.SST_HJ_MAX) {
            str = "呼叫";
        }
        if (state >= this.SST_SD_MIN && state < this.SST_SD_MAX) {
            str = "准备";
        }
        if (state >= this.SST_SZ_MIN && state < this.SST_SZ_MAX) {
            str = "试钟";
        }
        if (state >= this.SST_FW_MIN && state < this.SST_FW_MAX) {
            str = "上钟";
        }
        if (state >= this.SST_ZT_MIN && state < this.SST_ZT_MAX) {
            str = "暂停";
        }
        if (state == this.SST_YY_WAIT) {
            str = "预约";
        }
        if (state == this.SST_YY_RECV) {
            str = "定约";
        }
        if (state >= this.SST_FW_FINISH) {
            str = "结束";
        }
        return str;
    };
    WaiterStateUtil.getStateSound = function (state) {
        var str = "";
        if (state == this.SST_YY_WAIT) {
            str = "resource/sound/worker/yuyue.mp3";
        }
        if (state == this.SST_YY_RECV) {
            str = "resource/sound/worker/dingyue.mp3";
        }
        if (state >= this.SST_WF_MIN && state < this.SST_WF_MAX) {
            str = "resource/sound/worker/queren.mp3";
        }
        if (state >= this.SST_HJ_MIN && state < this.SST_HJ_MAX) {
            str = "resource/sound/worker/hujiao.mp3";
        }
        if (state >= this.SST_SD_MIN && state < this.SST_SD_MAX) {
            str = "resource/sound/worker/zhunbei.mp3";
        }
        if (state >= this.SST_SZ_MIN && state < this.SST_SZ_MAX) {
            str = "resource/sound/worker/shizhong.mp3";
        }
        if (state >= this.SST_FW_MIN && state < this.SST_FW_MAX) {
            str = "resource/sound/worker/shangzhong.mp3";
        }
        if (state >= this.SST_ZT_MIN && state < this.SST_ZT_MAX) {
            str = "resource/sound/worker/zanting.mp3";
        }
        if (state >= this.SST_FW_FINISH) {
            str = "resource/sound/worker/jieshu.mp3";
        }
        return str;
    };
    WaiterStateUtil.getStateNameColor = function (state) {
        var color = 0x888888;
        if (state >= this.SST_WF_MIN && state < this.SST_WF_MAX) {
            color = 0xff0000;
        }
        if (state >= this.SST_HJ_MIN && state < this.SST_HJ_MAX) {
            color = 0xf66200;
        }
        if (state >= this.SST_SD_MIN && state < this.SST_SD_MAX) {
            color = 0xf6007f;
        }
        if (state >= this.SST_SZ_MIN && state < this.SST_SZ_MAX) {
            color = 0x00b3f6;
        }
        if (state >= this.SST_FW_MIN && state < this.SST_FW_MAX) {
            color = 0x05da0a;
        }
        if (state >= this.SST_ZT_MIN && state < this.SST_ZT_MAX) {
            color = 0x363952;
        }
        if (state >= this.SST_FW_FINISH) {
            color = 0xecc90a;
        }
        return color;
    };
    WaiterStateUtil.getStateBackColor = function (state) {
        var color = 0x888888;
        if (state >= this.SST_WF_MIN && state < this.SST_WF_MAX) {
            color = 0xff0000;
        }
        if (state >= this.SST_HJ_MIN && state < this.SST_HJ_MAX) {
            color = 0xf66200;
        }
        if (state >= this.SST_SD_MIN && state < this.SST_SD_MAX) {
            color = 0xf6007f;
        }
        if (state >= this.SST_SZ_MIN && state < this.SST_SZ_MAX) {
            color = 0x00b3f6;
        }
        if (state >= this.SST_FW_MIN && state < this.SST_FW_MAX) {
            color = 0x05da0a;
        }
        if (state >= this.SST_ZT_MIN && state < this.SST_ZT_MAX) {
            color = 0xf63952;
        }
        if (state >= this.SST_FW_FINISH) {
            color = 0xecc90a;
        }
        return color;
    };
    //预约
    WaiterStateUtil.SST_YY_WAIT = 10;
    WaiterStateUtil.SST_YY_RECV = 11;
    //无服务人员
    WaiterStateUtil.SST_WF_MIN = 100;
    WaiterStateUtil.SST_WF_MAX = 199;
    //已呼叫相应服务人员
    WaiterStateUtil.SST_HJ_MIN = 200;
    WaiterStateUtil.SST_HJ_MAX = 299;
    //收到服务人员确认
    WaiterStateUtil.SST_SD_MIN = 300;
    //已经通过开始验证码 同批的钟单在服务 这个在等  证明已经到房间
    WaiterStateUtil.SST_SD_YZM = 310;
    WaiterStateUtil.SST_SD_MAX = 399;
    //试钟
    WaiterStateUtil.SST_SZ_MIN = 400;
    WaiterStateUtil.SST_SZ_MAX = 499;
    //服务
    WaiterStateUtil.SST_FW_MIN = 500;
    WaiterStateUtil.SST_FW_MAX = 599;
    //暂停
    WaiterStateUtil.SST_ZT_MIN = 600;
    WaiterStateUtil.SST_ZT_MAX = 699;
    //服务
    WaiterStateUtil.SST_FW_FINISH = 2000;
    return WaiterStateUtil;
}());
__reflect(WaiterStateUtil.prototype, "WaiterStateUtil");
//# sourceMappingURL=WaiterStateUtil.js.map