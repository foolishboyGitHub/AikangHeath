class EventCenter {


    /**
     * 单例引用 
     */
    private static _instance: EventCenter;
    public static get Instance(): EventCenter {
        if (!this._instance) this._instance = new EventCenter();
        return this._instance;
    }
    public dispatchEvent(event:egret.Event){
        GameGlobal.MessageCenter.dispatch(event.type,event);
    }
    public addEventListener(type: string, listener: Function, listenerObj: any){
        GameGlobal.MessageCenter.addListener(type,listener,listenerObj);
    }
    public removeEventListener(type: string, listener: Function, listenerObj: any){
        GameGlobal.MessageCenter.removeListener(type,listener,listenerObj);
    }
}