class StringUtil {
	/**
	 * <h5>功能:判断两字符串相似度(最小为0,最大为1)</h5>
	 * 
	 * @param strOne 
	 * @param strTwo
	 * @return 两字符串相似度(最小为0,最大为1)
	 */
	public static SimlarityString(strOne:string, strTwo:string):number {
		var seta = [];
		var setb = [];

		for (var i = 0; i < strOne.length; i++) {
			seta.push(strOne.substring(i, i + 1));
		}
		for (var i = 0; i < strTwo.length; i++) {
			setb.push(strTwo.substring(i, i + 1));
		}
		var  x:number = 0;
		var  y:number = 0;
		if (seta.length != 0 && setb.length != 0) {
			if (seta.length >= setb.length) {
				y = setb.length;
			} else {
				y = seta.length;
			}

			for (var i=0; i<seta.length; i++) {
				var obja = seta[i];
				for (var j=0; j<setb.length; j++) {
					var objb = setb[j];
					if (obja==objb) {
						x++;
					}
				}
			}
			var z:number = 0.0;
			z = x / y;	
			return z;
		} else {
			return 0;
		}
	}
}