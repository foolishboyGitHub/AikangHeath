var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FuncUrlUtil = (function () {
    function FuncUrlUtil() {
    }
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
    //顾客 定单
    FuncUrlUtil.ShopInfo_MakeOrder = "/ShopInfo/MakeOrder";
    //顾客 退回预定界面
    FuncUrlUtil.ShopInfo_BackToShoping = "/ShopInfo/BackToShoping";
    FuncUrlUtil.ShopInfo_RequestMoneyChannel = "/ShopInfo/RequestMoneyChannel";
    FuncUrlUtil.ShopInfo_AskMoneyChannel = "/ShopInfo/AskMoneyChannel";
    //顾客 结账
    FuncUrlUtil.ShopInfo_CheckOrderBills = "/ShopInfo/CheckOrderBills";
    //历史单
    FuncUrlUtil.ShopInfo_GetHistoryShopInfo = "/ShopInfo/GetHistoryShopInfo"; //
    return FuncUrlUtil;
}());
__reflect(FuncUrlUtil.prototype, "FuncUrlUtil");
//# sourceMappingURL=FuncUrlUtil.js.map