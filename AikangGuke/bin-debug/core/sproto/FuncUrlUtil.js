var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FuncUrlUtil = (function () {
    function FuncUrlUtil() {
    }
    //常去的地方
    FuncUrlUtil.ShopInfo_GetHistoryGoInfo = "/ShopInfo/GetHistoryGoInfo";
    FuncUrlUtil.ShopInfo_SerachCompanyGoInfo = "/ShopInfo/SerachCompanyGoInfo";
    //商品列表
    FuncUrlUtil.ShopInfo_GetShopInfo = "/ShopInfo/GetShopInfo";
    //商品列表
    FuncUrlUtil.ShopInfo_newShopMake = "/ShopInfo/newShopMake";
    //工作者列表
    FuncUrlUtil.ShopInfo_GetCanWorkerList = "/ShopInfo/GetCanWorkerList";
    //工作者 预约列表
    FuncUrlUtil.ShopInfo_GetThisWorkerOrderList = "/ShopInfo/GetThisWorkerOrderList";
    //顾客 预定单
    FuncUrlUtil.ShopInfo_MakeShop = "/ShopInfo/MakeShop";
    FuncUrlUtil.ShopInfo_AddShopFor = "/ShopInfo/AddShopFor";
    FuncUrlUtil.ShopInfo_GetMakeShopInfo = "/ShopInfo/GetMakeShopInfo";
    FuncUrlUtil.ShopInfo_DelShopItem = "/ShopInfo/DelShopItem";
    FuncUrlUtil.ShopInfo_DelAddItem = "/ShopInfo/DelAddItem";
    FuncUrlUtil.ShopInfo_FreshOrderList = "/ShopInfo/FreshOrderList";
    //顾客 定单
    FuncUrlUtil.ShopInfo_MakeOrder = "/ShopInfo/MakeOrder";
    //顾客 退回预定界面
    FuncUrlUtil.ShopInfo_BackToShoping = "/ShopInfo/BackToShoping";
    //申请支付通道
    FuncUrlUtil.ShopInfo_RequestMoneyChannel = "/ShopInfo/RequestMoneyChannel";
    //会员支付查询会员信息
    FuncUrlUtil.ShopInfo_RequestHuiYuanPayInfo = "/ShopInfo/RequestHuiYuanPayInfo";
    //选择会员卡进行支付
    FuncUrlUtil.ShopInfo_SelMyHuiYuanAndToPay = "/ShopInfo/SelMyHuiYuanAndToPay";
    //选择会员卡进行支付
    FuncUrlUtil.ShopInfo_SureToSelMyHuiYuanAndToPay = "/ShopInfo/SureToSelMyHuiYuanAndToPay";
    FuncUrlUtil.ShopInfo_AskMoneyChannel = "/ShopInfo/AskMoneyChannel";
    //顾客 结账
    FuncUrlUtil.ShopInfo_CheckOrderBills = "/ShopInfo/CheckOrderBills";
    //历史单
    FuncUrlUtil.ShopInfo_GetHistoryShopInfo = "/ShopInfo/GetHistoryShopInfo"; //
    FuncUrlUtil.ShopInfo_GetHistoryShopInfoDetail = "/ShopInfo/GetHistoryShopInfoDetail"; //
    //顾客 获取我的会员信息
    FuncUrlUtil.ShopInfo_GetMyHuiYuanInfo = "/ShopInfo/GetMyHuiYuanInfo";
    //顾客 绑定手机号 发送验证码
    FuncUrlUtil.ShopInfo_BindTeleVerifySendCode = "/ShopInfo/BindTeleVerifySendCode";
    //顾客 绑定手机号 发送验证码
    FuncUrlUtil.ShopInfo_BindTeleVerifyBindByCode = "/ShopInfo/BindTeleVerifyBindByCode";
    return FuncUrlUtil;
}());
__reflect(FuncUrlUtil.prototype, "FuncUrlUtil");
//# sourceMappingURL=FuncUrlUtil.js.map