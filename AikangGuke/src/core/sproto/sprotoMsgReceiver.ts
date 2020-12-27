namespace sproto {
	export class sprotoMsgReceiver {

		private static m_RpcReqHandlerDict: { [key: string]: any } = {};

		public static AddHandler(tag: string, rpc: Function, thisObj: any): void {
			if (!rpc) {
				return;
			}
			if (DEBUG) {
				if (sprotoMsgReceiver.m_RpcReqHandlerDict[tag]) {
					console.error("重复注册协议 => " + tag)
					return;
				}
			}
			sprotoMsgReceiver.m_RpcReqHandlerDict[tag] = { HandlerFunc: rpc, thisObject: thisObj }
		}

		public static Handler(tag: string, data: string): Boolean {
			let funcObj = sprotoMsgReceiver.m_RpcReqHandlerDict[tag];
			if (funcObj == null) {
				// console.log("SprotoReceiver.Handler =>无法处理消息", tag);
				return false;
			}
//			console.log("SprotoReceiver.Handler => " + tag + " " + funcObj.thisObject)
			funcObj.HandlerFunc.call(funcObj.thisObject, data)
			return true;
		}
	}
}