class DataTransEvent   extends egret.Event {
	public data: any;

    //权限功能变化
    public static Event_PerUrlUpdata: string = "Event_PerUrlUpdata";

    //登陆管理
    public static Event_loginManager: string = "Event_loginManager";
    //模块管理
    public static Event_FuncManager: string = "Event_FuncManager";
    //权限管理
    public static Event_PerUrlRoleManager: string = "Event_PerUrlRoleManager";

    //功能管理
    public static Event_System_FuncurlManager: string = "Event_System_FuncurlManager";

    public static Event_System_Funcurl_SelParentId: string = "Event_System_Funcurl_SelParentId";

    //功能管理
    public static Event_System_Funcurl_Del_Sucess: string = "Event_System_Funcurl_Del_Sucess";

     //员工管理
    public static Event_Member_MemManager: string = "Event_Member_MemManager";
    public static Event_Member_TypeSel: string = "Event_Member_TypeSel";
    public static Event_Member_AddNew_GetRoles: string = "Event_Member_AddNew_GetRoles";
    public static Event_Member_AddNew_Add: string = "Event_Member_AddNew_Add";
    public static Event_Member_Query_GetUser: string = "Event_Member_Query_GetUser";
    public static Event_Member_SetVisiable_GetUser: string = "Event_Member_SetVisiable_GetUser";
    public static Event_Member_SetVisiable_Set: string = "Event_Member_SetVisiable_Set";
	public static Event_Member_Update_GetUser: string = "Event_Member_Update_GetUser";
    public static Event_Member_Update_Update: string = "Event_Member_Update_Update";
    public static Event_Member_Update_GetRoles: string = "Event_Member_Update_GetRoles";
    public static Event_Member_Update_SetRoles: string = "Event_Member_Update_SetRoles";
    public static Event_Member_Update_SetRolesToPanel: string = "Event_Member_Update_SetRolesToPanel";

    //项目管理
    public static Event_ServiceItem_AddNew_Add: string = "Event_ServiceItem_AddNew_Add";
    public static Event_ServiceItem_Querry_GetItemList: string = "Event_ServiceItem_Querry_GetItemList";
    public static Event_ServiceItem_Update_GetItemList: string = "Event_ServiceItem_Update_GetItemList";
    public static Event_ServiceItem_Update_Update: string = "Event_ServiceItem_Update_Update";
    public static Event_ServiceItem_Srot_GetItemList: string = "Event_ServiceItem_Srot_GetItemList";
    public static Event_ServiceItem_Srot_Save: string = "Event_ServiceItem_Srot_Save";
    public static Event_ServiceItem_SetVisiable_GetItemList: string = "Event_ServiceItem_SetVisiable_GetItemList";
    public static Event_ServiceItem_SetVisiable_Set: string = "Event_ServiceItem_SetVisiable_Set";


    //排钟设置
    public static Event_PlanWorker_PlanList_GetAllUser: string = "Event_PlanWorker_PlanList_GetAllUser";
    public static Event_PlanWorker_PlanList_GetPlanUser: string = "Event_PlanWorker_PlanList_GetPlanUser";
    public static Event_PlanWorker_PlanList_SavePlanList: string = "Event_PlanWorker_PlanList_SavePlanList";
    public static Event_PlanWorker_PlanList_SetCheckFind: string = "Event_PlanWorker_PlanList_SetCheckFind";
    public static Event_PlanWorker_PlanList_SetCheckImg: string = "Event_PlanWorker_PlanList_SetCheckImg";
    public static Event_PlanWorker_PlanList_CurrentSel: string = "Event_PlanWorker_PlanList_CurrentSel";
    public static Event_PlanWorker_PlanExcItem_GetAllUser: string = "Event_PlanWorker_PlanExcItem_GetAllUser";
    public static Event_PlanWorker_PlanExcItem_GetItemList: string = "Event_PlanWorker_PlanExcItem_GetItemList";
	public static Event_PlanWorker_PlanExcItem_GetAllExcItem: string = "Event_PlanWorker_PlanExcItem_GetAllExcItem";
    public static Event_PlanWorker_PlanExcItem_SaveExcItem: string = "Event_PlanWorker_PlanExcItem_SaveExcItem";
    public static Event_PlanWorker_PlanExcItem_ExcItemChange: string = "Event_PlanWorker_PlanExcItem_ExcItemChange";
    public static Event_PlanWorker_Config_GetConfig: string = "Event_PlanWorker_Config_GetConfig";
    public static Event_PlanWorker_Config_SaveConfig: string = "Event_PlanWorker_Config_SaveConfig";
    
    //提成设置
    public static Event_ServiceSalary_Config_GetUsers: string = "Event_ServiceSalary_Config_GetUsers";
    public static Event_ServiceSalary_Config_GetSalaryByUid: string = "Event_ServiceSalary_Config_GetSalaryByUid";
    public static Event_ServiceSalary_Config_SaveSalaryByUid: string = "Event_ServiceSalary_Config_SaveSalaryByUid";
    public static Event_ServiceSalary_Querry_GetUsers: string = "Event_ServiceSalary_Querry_GetUsers";
    public static Event_ServiceSalary_Querry_GetSalaryByUid: string = "Event_ServiceSalary_Querry_GetSalaryByUid";

    //房间设置
    public static Event_RoomSet_Add_AddNew: string = "Event_RoomSet_Add_AddNew";
    public static Event_RoomSet_Querry_GetAllRoom: string = "Event_RoomSet_Querry_GetAllRoom";
	public static Event_RoomSet_Querry_GetEnabledRoom: string = "Event_RoomSet_Querry_GetEnabledRoom";
	//删除
	public static Event_RoomSet_Del_GetAllRoom: string = "Event_RoomSet_Del_GetAllRoom";
	public static Event_RoomSet_Del_Delete: string = "Event_RoomSet_Del_Delete";
	//显示隐藏
	public static Event_RoomSet_Update_GetAllRoom: string = "Event_RoomSet_Update_GetAllRoom";
	public static Event_RoomSet_Update_Update: string = "Event_RoomSet_Update_Update";
    public static Event_RoomSet_Update_Update_ToList: string = "Event_RoomSet_Update_Update_ToList";
	//显示隐藏
	public static Event_RoomSet_SetEnabled_GetAllRoom: string = "Event_RoomSet_SetEnabled_GetAllRoom";
	public static Event_RoomSet_SetEnabled_SetEnabled: string = "Event_RoomSet_SetEnabled_SetEnabled";


    //开单
    public static Event_WaiterSet_Add_AddNew: string  = "Event_WaiterSet_Add_AddNew";
	public static Event_WaiterSet_Add_GetRule: string  = "Event_WaiterSet_Add_GetRule";
    public static Event_WaiterSet_Add_GetTypeWorks: string  = "Event_WaiterSet_Add_GetTypeWorks";

    //下单窗口 浮球显示
    public static Event_ShopInfo_MakeShop_ShopOrderFloatingBallShow: string  = "Event_ShopInfo_MakeShop_ShopOrderFloatingBallShow";
    //下单窗口 浮球隐藏
    public static Event_ShopInfo_MakeShop_ShopOrderFloatingBallHide: string  = "Event_ShopInfo_MakeShop_ShopOrderFloatingBallHide";

    //添加商品完成 小球落下
    public static Event_ShopInfo_MakeShop_BotHit: string  = "Event_ShopInfo_MakeShop_BotHit";

     //下单时选择不同的顾客
    public static Event_ShopInfo_ShowState_SelGuke: string  = "Event_ShopInfo_ShowState_SelGuke";

     //下单时选择不同的顾客
    public static Event_ShopInfo_MakeShop_AddNew: string  = "Event_ShopInfo_MakeShop_AddNew";

     //下单时选择不同的顾客
    public static Event_ShopInfo_ShowState_O_SelGuke: string  = "Event_ShopInfo_ShowState_O_SelGuke";

     //下单时选择不同的顾客
    public static Event_ShopInfo_MakeShop__O_AddNew: string  = "Event_ShopInfo_MakeShop__O_AddNew";

     //下单时选择不同的顾客
    public static Event_ShopPay_Close_Sel_MoneyChanel_panel: string  = "Event_ShopPay_Close_Sel_MoneyChanel_panel";


	public constructor(type: string, data: any = null, bubbles: boolean = false, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
        this.data = data;
    }
	public clone(): egret.Event {
        return new DataTransEvent(this.type, this.data, this.bubbles, this.cancelable);
    }
}