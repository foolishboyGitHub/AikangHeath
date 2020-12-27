var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var StringUtil = (function () {
    function StringUtil() {
    }
    /**
     * <h5>功能:判断两字符串相似度(最小为0,最大为1)</h5>
     *
     * @param strOne
     * @param strTwo
     * @return 两字符串相似度(最小为0,最大为1)
     */
    StringUtil.SimlarityString = function (strOne, strTwo) {
        var seta = [];
        var setb = [];
        for (var i = 0; i < strOne.length; i++) {
            seta.push(strOne.substring(i, i + 1));
        }
        for (var i = 0; i < strTwo.length; i++) {
            setb.push(strTwo.substring(i, i + 1));
        }
        var x = 0;
        var y = 0;
        if (seta.length != 0 && setb.length != 0) {
            if (seta.length >= setb.length) {
                y = setb.length;
            }
            else {
                y = seta.length;
            }
            for (var i = 0; i < seta.length; i++) {
                var obja = seta[i];
                for (var j = 0; j < setb.length; j++) {
                    var objb = setb[j];
                    if (obja == objb) {
                        x++;
                    }
                }
            }
            var z = 0.0;
            z = x / y;
            return z;
        }
        else {
            return 0;
        }
    };
    return StringUtil;
}());
__reflect(StringUtil.prototype, "StringUtil");
//# sourceMappingURL=StringUtil.js.map