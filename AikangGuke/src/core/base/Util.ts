class Util {
	public static GetClass(obj: any): any {
		if (!obj) {
			return null
		}
        let clsName = obj.__class__
		if (!clsName) {
			return null
		}
		return egret.getDefinitionByName(clsName)
	}

	public static CopyProtoData(obj ) {
		if (obj == null) {
			return null
		}
		let newObj = {}
		var keys = Object.keys(obj);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
			if (key == "se" || key == "de") {
				continue
			}
            newObj[key] = obj[key]
        }
	}

	public static GetParentByType(obj: egret.DisplayObject, cls: any): egret.DisplayObject {
		if (obj == null) {
			return null
		}
		let parentName = egret.getQualifiedClassName(cls);
		let parent = obj
		if (egret.is(parent, parentName)) {
			return parent
		}
		for (let i = 0; i < 10; ++i) {
			parent = parent.parent
			if (parent == null) {
				return null
			}
			if (egret.is(parent, parentName)) {
				return parent
			}
		}
		return null
	}




	public static Copy(text: string): boolean {
		try {
			var t = document.createElement("input");
			t.value = text
			document.body.appendChild(t)
			t.select()
			t.setSelectionRange(0, t.value.length)
			document.execCommand("Copy")
			document.body.removeChild(t)
			return true
		} catch(e) {
			console.error("Copy => " + e)
		}
		return false
	}

	public static formatTime(now):string{
		let nowYear = now.getFullYear();
		let nowMonth = now.getMonth() + 1;
		let nowweekday = now.getDate();
		let nowMonths;
		let nowweekdays;
		if (nowMonth < 10) {
			nowMonths = "0" + nowMonth;
		} else {
			nowMonths = nowMonth;
		}
		if (nowweekday < 10) {
			nowweekdays = "0" + nowweekday;
		} else {
			nowweekdays = nowweekday;
		}
		let hh = now.getHours();            //时
		let mm = now.getMinutes();          //分
		let ss = now.getSeconds();           //秒
		let hhs, mms, sss;
		if (hh < 10) {
			hhs = "0" + hh;
		} else {
			hhs = hh;
		}
		if (mm < 10) {
			mms = "0" + mm;
		} else {
			mms = mm;
		}
		if (ss < 10) {
			sss = "0" + ss;
		} else {
			sss = ss;
		}
		var ts = nowYear + "-" + nowMonths + "-" + nowweekdays + " " + hhs + ":" + mms + ":" + sss;
		return ts;
	}
	public static isLeapYear(year:number):boolean{
        if (year % 100 == 0 && year % 400 == 0){
            return true;
        }else if (year % 100 != 0 && year % 4==0){
            return true;
        }
        return false;
    }
	public static getDaysOfMonth(now):number{
		let year = now.getFullYear();
		let isLeapYear = this.isLeapYear(year);
		let month = now.getMonth() + 1;
		let days=0;
		switch (month){
            case 1:
				days=31;
                break;
            case 3:
				days=31;
                break;
            case 5:
				days=31;
                break;
            case 7:
				days=31;
                break;
            case 8:
				days=31;
                break;
            case 10:
				days=31;
                break;
            case 12:
                days=31;
                break;
            case 4:
				days=30;
                break;
            case 6:
				days=30;
                break;
            case 9:
				days=30;
                break;
            case 11:
                days=30;
                break;
            case 2:
                if (isLeapYear){
                    days=29;
                }else{
                    days=28;
                }
			
			
		}
		return days;
	}

	public static getDaysOfMonth_pre(now):number{
		let year = now.getFullYear();
		let isLeapYear = this.isLeapYear(year);
		let month = now.getMonth();
		if(month == 0){
			month = 12;
		}
		let days=0;
		switch (month){
            case 1:
				days=31;
                break;
            case 3:
				days=31;
                break;
            case 5:
				days=31;
                break;
            case 7:
				days=31;
                break;
            case 8:
				days=31;
                break;
            case 10:
				days=31;
                break;
            case 12:
                days=31;
                break;
            case 4:
				days=30;
                break;
            case 6:
				days=30;
                break;
            case 9:
				days=30;
                break;
            case 11:
                days=30;
                break;
            case 2:
                if (isLeapYear){
                    days=29;
                }else{
                    days=28;
                }
			
			
		}
		return days;
	}
}