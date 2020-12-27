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
var DataTransEvent = (function (_super) {
    __extends(DataTransEvent, _super);
    function DataTransEvent(type, data, bubbles, cancelable) {
        if (data === void 0) { data = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.data = data;
        return _this;
    }
    DataTransEvent.prototype.clone = function () {
        return new DataTransEvent(this.type, this.data, this.bubbles, this.cancelable);
    };
    //权限功能变化
    DataTransEvent.Event_PerUrlUpdata = "Event_PerUrlUpdata";
    //登陆管理
    DataTransEvent.Event_loginManager = "Event_loginManager";
    //模块管理
    DataTransEvent.Event_FuncManager = "Event_FuncManager";
    //权限管理
    DataTransEvent.Event_PerUrlRoleManager = "Event_PerUrlRoleManager";
    //功能管理
    DataTransEvent.Event_System_FuncurlManager = "Event_System_FuncurlManager";
    DataTransEvent.Event_System_Funcurl_SelParentId = "Event_System_Funcurl_SelParentId";
    //功能管理
    DataTransEvent.Event_System_Funcurl_Del_Sucess = "Event_System_Funcurl_Del_Sucess";
    //员工管理
    DataTransEvent.Event_Member_MemManager = "Event_Member_MemManager";
    DataTransEvent.Event_Member_TypeSel = "Event_Member_TypeSel";
    DataTransEvent.Event_Member_AddNew_GetRoles = "Event_Member_AddNew_GetRoles";
    DataTransEvent.Event_Member_AddNew_Add = "Event_Member_AddNew_Add";
    DataTransEvent.Event_Member_Query_GetUser = "Event_Member_Query_GetUser";
    DataTransEvent.Event_Member_SetVisiable_GetUser = "Event_Member_SetVisiable_GetUser";
    DataTransEvent.Event_Member_SetVisiable_Set = "Event_Member_SetVisiable_Set";
    DataTransEvent.Event_Member_Update_GetUser = "Event_Member_Update_GetUser";
    DataTransEvent.Event_Member_Update_Update = "Event_Member_Update_Update";
    DataTransEvent.Event_Member_Update_GetRoles = "Event_Member_Update_GetRoles";
    DataTransEvent.Event_Member_Update_SetRoles = "Event_Member_Update_SetRoles";
    DataTransEvent.Event_Member_Update_SetRolesToPanel = "Event_Member_Update_SetRolesToPanel";
    //项目管理
    DataTransEvent.Event_ServiceItem_AddNew_Add = "Event_ServiceItem_AddNew_Add";
    DataTransEvent.Event_ServiceItem_Querry_GetItemList = "Event_ServiceItem_Querry_GetItemList";
    DataTransEvent.Event_ServiceItem_Update_GetItemList = "Event_ServiceItem_Update_GetItemList";
    DataTransEvent.Event_ServiceItem_Update_Update = "Event_ServiceItem_Update_Update";
    DataTransEvent.Event_ServiceItem_Srot_GetItemList = "Event_ServiceItem_Srot_GetItemList";
    DataTransEvent.Event_ServiceItem_Srot_Save = "Event_ServiceItem_Srot_Save";
    DataTransEvent.Event_ServiceItem_SetVisiable_GetItemList = "Event_ServiceItem_SetVisiable_GetItemList";
    DataTransEvent.Event_ServiceItem_SetVisiable_Set = "Event_ServiceItem_SetVisiable_Set";
    //排钟设置
    DataTransEvent.Event_PlanWorker_PlanList_GetAllUser = "Event_PlanWorker_PlanList_GetAllUser";
    DataTransEvent.Event_PlanWorker_PlanList_GetPlanUser = "Event_PlanWorker_PlanList_GetPlanUser";
    DataTransEvent.Event_PlanWorker_PlanList_SavePlanList = "Event_PlanWorker_PlanList_SavePlanList";
    DataTransEvent.Event_PlanWorker_PlanList_SetCheckFind = "Event_PlanWorker_PlanList_SetCheckFind";
    DataTransEvent.Event_PlanWorker_PlanList_SetCheckImg = "Event_PlanWorker_PlanList_SetCheckImg";
    DataTransEvent.Event_PlanWorker_PlanList_CurrentSel = "Event_PlanWorker_PlanList_CurrentSel";
    DataTransEvent.Event_PlanWorker_PlanExcItem_GetAllUser = "Event_PlanWorker_PlanExcItem_GetAllUser";
    DataTransEvent.Event_PlanWorker_PlanExcItem_GetItemList = "Event_PlanWorker_PlanExcItem_GetItemList";
    DataTransEvent.Event_PlanWorker_PlanExcItem_GetAllExcItem = "Event_PlanWorker_PlanExcItem_GetAllExcItem";
    DataTransEvent.Event_PlanWorker_PlanExcItem_SaveExcItem = "Event_PlanWorker_PlanExcItem_SaveExcItem";
    DataTransEvent.Event_PlanWorker_PlanExcItem_ExcItemChange = "Event_PlanWorker_PlanExcItem_ExcItemChange";
    DataTransEvent.Event_PlanWorker_Config_GetConfig = "Event_PlanWorker_Config_GetConfig";
    DataTransEvent.Event_PlanWorker_Config_SaveConfig = "Event_PlanWorker_Config_SaveConfig";
    //提成设置
    DataTransEvent.Event_ServiceSalary_Config_GetUsers = "Event_ServiceSalary_Config_GetUsers";
    DataTransEvent.Event_ServiceSalary_Config_GetSalaryByUid = "Event_ServiceSalary_Config_GetSalaryByUid";
    DataTransEvent.Event_ServiceSalary_Config_SaveSalaryByUid = "Event_ServiceSalary_Config_SaveSalaryByUid";
    DataTransEvent.Event_ServiceSalary_Querry_GetUsers = "Event_ServiceSalary_Querry_GetUsers";
    DataTransEvent.Event_ServiceSalary_Querry_GetSalaryByUid = "Event_ServiceSalary_Querry_GetSalaryByUid";
    //房间设置
    DataTransEvent.Event_RoomSet_Add_AddNew = "Event_RoomSet_Add_AddNew";
    DataTransEvent.Event_RoomSet_Querry_GetAllRoom = "Event_RoomSet_Querry_GetAllRoom";
    DataTransEvent.Event_RoomSet_Querry_GetEnabledRoom = "Event_RoomSet_Querry_GetEnabledRoom";
    //删除
    DataTransEvent.Event_RoomSet_Del_GetAllRoom = "Event_RoomSet_Del_GetAllRoom";
    DataTransEvent.Event_RoomSet_Del_Delete = "Event_RoomSet_Del_Delete";
    //显示隐藏
    DataTransEvent.Event_RoomSet_Update_GetAllRoom = "Event_RoomSet_Update_GetAllRoom";
    DataTransEvent.Event_RoomSet_Update_Update = "Event_RoomSet_Update_Update";
    DataTransEvent.Event_RoomSet_Update_Update_ToList = "Event_RoomSet_Update_Update_ToList";
    //显示隐藏
    DataTransEvent.Event_RoomSet_SetEnabled_GetAllRoom = "Event_RoomSet_SetEnabled_GetAllRoom";
    DataTransEvent.Event_RoomSet_SetEnabled_SetEnabled = "Event_RoomSet_SetEnabled_SetEnabled";
    //开单
    DataTransEvent.Event_WaiterSet_Add_AddNew = "Event_WaiterSet_Add_AddNew";
    DataTransEvent.Event_WaiterSet_Add_GetRule = "Event_WaiterSet_Add_GetRule";
    DataTransEvent.Event_WaiterSet_Add_GetTypeWorks = "Event_WaiterSet_Add_GetTypeWorks";
    //添加商品完成 小球落下
    DataTransEvent.Event_ShopInfo_MakeShop_BotHit = "Event_ShopInfo_MakeShop_BotHit";
    //下单时选择不同的顾客
    DataTransEvent.Event_ShopInfo_ShowState_SelGuke = "Event_ShopInfo_ShowState_SelGuke";
    //下单时选择不同的顾客
    DataTransEvent.Event_ShopInfo_MakeShop_AddNew = "Event_ShopInfo_MakeShop_AddNew";
    //下单时选择不同的顾客
    DataTransEvent.Event_ShopInfo_ShowState_O_SelGuke = "Event_ShopInfo_ShowState_O_SelGuke";
    //下单时选择不同的顾客
    DataTransEvent.Event_ShopInfo_MakeShop__O_AddNew = "Event_ShopInfo_MakeShop__O_AddNew";
    return DataTransEvent;
}(egret.Event));
__reflect(DataTransEvent.prototype, "DataTransEvent");
//# sourceMappingURL=DataTransEvent.js.map