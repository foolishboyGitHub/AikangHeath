window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/base/background/background.exml'] = window.background = (function (_super) {
	__extends(background, _super);
	function background() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Rect1_i()];
	}
	var _proto = background.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1500;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,14,52,89);
		t.source = "back_ground_01";
		t.verticalCenter = 0;
		t.width = 800;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x648782;
		t.height = 1600;
		t.horizontalCenter = 0;
		t.strokeColor = 0x604444;
		t.verticalCenter = 0;
		t.width = 900;
		return t;
	};
	return background;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnAdd01.exml'] = window.BtnAdd01 = (function (_super) {
	__extends(BtnAdd01, _super);
	function BtnAdd01() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 50;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","verticalCenter",2),
					new eui.SetProperty("_Image1","horizontalCenter",2),
					new eui.SetProperty("_Image1","source","btnadd202003121"),
					new eui.SetProperty("","width",50),
					new eui.SetProperty("","height",50)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("_Image1","source","btnadd202003121"),
					new eui.SetProperty("","width",50),
					new eui.SetProperty("","height",50)
				])
		];
	}
	var _proto = BtnAdd01.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "btnadd202003120";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return BtnAdd01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnAdd02.exml'] = window.BtnAdd02 = (function (_super) {
	__extends(BtnAdd02, _super);
	function BtnAdd02() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 160;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",3),
					new eui.SetProperty("_Image1","x",20),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","size",28),
					new eui.SetProperty("labelDisplay","textColor",0x000000)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("_Image1","source","btnadd202003121"),
					new eui.SetProperty("_Image1","x",22),
					new eui.SetProperty("_Image1","verticalCenter",2),
					new eui.SetProperty("labelDisplay","x",62),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",20),
					new eui.SetProperty("_Image1","source","btnadd202003121"),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnAdd02.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.9;
		t.fillColor = 0xc6bfb4;
		t.percentHeight = 100;
		t.strokeColor = 0x282726;
		t.strokeWeight = 0.5;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "btnadd202003120";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.size = 28;
		t.text = "添加";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 60;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnAdd02;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnAdd03.exml'] = window.BtnAdd03 = (function (_super) {
	__extends(BtnAdd03, _super);
	function BtnAdd03() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 60;
		this.width = 200;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("_Image1","x",5),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","size",28),
					new eui.SetProperty("labelDisplay","textColor",0x000000)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("_Image1","source","btnadd202003121"),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","verticalCenter",2),
					new eui.SetProperty("labelDisplay","x",42),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",5),
					new eui.SetProperty("_Image1","source","btnadd202003121"),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnAdd03.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.9;
		t.fillColor = 0x84847b;
		t.percentHeight = 100;
		t.strokeColor = 0x282726;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = -36;
		t.source = "btnadd202003120";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 24;
		t.size = 28;
		t.text = "添加";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnAdd03;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnAddTime01.exml'] = window.BtnAddTime01 = (function (_super) {
	__extends(BtnAddTime01, _super);
	function BtnAddTime01() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 40;
		this.width = 80;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","fillAlpha",0.8),
					new eui.SetProperty("_Rect1","fillColor",0xa3a1a1)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x332c2c),
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x261d1d),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnAddTime01.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.8;
		t.fillColor = 0xa5a5a5;
		t.percentHeight = 100;
		t.strokeAlpha = 0.8;
		t.strokeColor = 0x7f7f7f;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "+";
		t.textAlign = "center";
		t.textColor = 0x353232;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnAddTime01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnBack01.exml'] = window.BtnBack01 = (function (_super) {
	__extends(BtnBack01, _super);
	function BtnBack01() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 60;
		this.width = 200;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("_Image1","x",5),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","size",28),
					new eui.SetProperty("labelDisplay","textColor",0x000000)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","verticalCenter",2),
					new eui.SetProperty("_Image1","source","btnBack202003181"),
					new eui.SetProperty("labelDisplay","x",42),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",5),
					new eui.SetProperty("_Image1","source","btnBack202003181"),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnBack01.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.9;
		t.fillColor = 0x84847b;
		t.percentHeight = 100;
		t.strokeColor = 0x282726;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 30;
		t.horizontalCenter = -36;
		t.source = "btnBack202003180";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 24;
		t.size = 28;
		t.text = "添加";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnBack01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnBack02.exml'] = window.BtnBack02 = (function (_super) {
	__extends(BtnBack02, _super);
	function BtnBack02() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 60;
		this.width = 200;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("_Image1","x",5),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","size",28),
					new eui.SetProperty("labelDisplay","textColor",0x000000)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","verticalCenter",2),
					new eui.SetProperty("_Image1","source","btnBack202003181"),
					new eui.SetProperty("labelDisplay","x",42),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",5),
					new eui.SetProperty("_Image1","source","btnBack202003181"),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnBack02.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.5;
		t.fillColor = 0x84847b;
		t.percentHeight = 100;
		t.strokeColor = 0x282726;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 30;
		t.horizontalCenter = -43;
		t.source = "btnBack202003180";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 24;
		t.size = 28;
		t.text = "添加";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnBack02;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnBack03.exml'] = window.BtnBack03 = (function (_super) {
	__extends(BtnBack03, _super);
	function BtnBack03() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 60;
		this.width = 80;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","size",28),
					new eui.SetProperty("labelDisplay","textColor",0x000000)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("labelDisplay","x",42),
					new eui.SetProperty("labelDisplay","verticalCenter",2),
					new eui.SetProperty("redPoint","x",-8)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnBack03.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0;
		t.fillColor = 0x84847b;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.strokeColor = 0x282726;
		t.strokeWeight = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "<";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 80;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "arrow_zuo";
		t.y = 0;
		return t;
	};
	return BtnBack03;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnCloseX.exml'] = window.BtnCloseX = (function (_super) {
	__extends(BtnCloseX, _super);
	function BtnCloseX() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 80;
		this.width = 80;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",80),
					new eui.SetProperty("_Rect1","ellipseHeight",80),
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("_Rect1","fillAlpha",0.2),
					new eui.SetProperty("_Rect1","strokeColor",0xffffff),
					new eui.SetProperty("_Rect1","fillColor",0xedeae8),
					new eui.SetProperty("labelDisplay","size",60),
					new eui.SetProperty("labelDisplay","height",60),
					new eui.SetProperty("labelDisplay","textColor",0xffffff),
					new eui.SetProperty("labelDisplay","x",0),
					new eui.SetProperty("labelDisplay","y",5)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0xc1847f),
					new eui.SetProperty("labelDisplay","size",60),
					new eui.SetProperty("labelDisplay","textColor",0xefe9e3),
					new eui.SetProperty("labelDisplay","height",60),
					new eui.SetProperty("labelDisplay","x",0),
					new eui.SetProperty("labelDisplay","y",10),
					new eui.SetProperty("labelDisplay","verticalAlign","top")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3d3c39),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xf4e7de)
				])
		];
	}
	var _proto = BtnCloseX.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 80;
		t.ellipseWidth = 80;
		t.fillAlpha = 0.2;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0xfcfcfc;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.fontFamily = "Tahoma";
		t.size = 60;
		t.text = "X";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.y = 10;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnCloseX;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnDel01.exml'] = window.BtnDel01 = (function (_super) {
	__extends(BtnDel01, _super);
	function BtnDel01() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 50;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","verticalCenter",2),
					new eui.SetProperty("_Image1","horizontalCenter",2),
					new eui.SetProperty("_Image1","source","btndel202003121")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("_Image1","source","btndel202003121")
				])
		];
	}
	var _proto = BtnDel01.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "btndel202003120";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return BtnDel01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnforcheckok.exml'] = window.btnforcheckok = (function (_super) {
	__extends(btnforcheckok, _super);
	function btnforcheckok() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 40;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",20),
					new eui.SetProperty("_Rect1","ellipseHeight",20),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("_Rect1","fillColor",0xb9ce6d),
					new eui.SetProperty("labelDisplay","textColor",0x000000)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0xc1847f),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xefe9e3)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3d3c39),
					new eui.SetProperty("labelDisplay","textColor",0xf4e7de),
					new eui.SetProperty("","width",120)
				])
		];
	}
	var _proto = btnforcheckok.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xb9ce6d;
		t.percentHeight = 100;
		t.strokeColor = 0x0a0908;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "添加";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return btnforcheckok;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnN10Skin.exml'] = window.BtnN10Skin = (function (_super) {
	__extends(BtnN10Skin, _super);
	function BtnN10Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",20),
					new eui.SetProperty("_Rect1","ellipseHeight",20),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("_Rect1","fillColor",0xed2512),
					new eui.SetProperty("labelDisplay","size",32),
					new eui.SetProperty("labelDisplay","textColor",0xefe9e3)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0xc1847f),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","size",32),
					new eui.SetProperty("labelDisplay","textColor",0xefe9e3)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3d3c39),
					new eui.SetProperty("labelDisplay","textColor",0xf4e7de)
				])
		];
	}
	var _proto = BtnN10Skin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xed2512;
		t.percentHeight = 100;
		t.strokeColor = 0x0a0908;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0xefe9e3;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnN10Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnN11Skin.exml'] = window.BtnN11Skin = (function (_super) {
	__extends(BtnN11Skin, _super);
	function BtnN11Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",20),
					new eui.SetProperty("_Rect1","ellipseHeight",20),
					new eui.SetProperty("_Rect1","strokeWeight",0),
					new eui.SetProperty("_Rect1","fillAlpha",1),
					new eui.SetProperty("_Rect1","strokeColor",0xffffff),
					new eui.SetProperty("_Rect1","fillColor",0xedeae8),
					new eui.SetProperty("labelDisplay","size",32),
					new eui.SetProperty("labelDisplay","textColor",0x424241)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0xc1847f),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","size",32),
					new eui.SetProperty("labelDisplay","textColor",0xefe9e3)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3d3c39),
					new eui.SetProperty("labelDisplay","textColor",0xf4e7de)
				])
		];
	}
	var _proto = BtnN11Skin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0x0a0908;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0xefe9e3;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnN11Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnN3Skin.exml'] = window.BtnN3Skin = (function (_super) {
	__extends(BtnN3Skin, _super);
	function BtnN3Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 88;
		this.width = 620;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","verticalCenter",2),
					new eui.SetProperty("_Image1","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("_Image1","source","ui_bt_04"),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnN3Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(20,9,122,54);
		t.source = "ui_bt_03";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnN3Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnN5Skin.exml'] = window.BtnN5Skin = (function (_super) {
	__extends(BtnN5Skin, _super);
	function BtnN5Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",3),
					new eui.SetProperty("labelDisplay","textColor",0xede7e1),
					new eui.SetProperty("labelDisplay","size",24)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnN5Skin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.9;
		t.fillColor = 0x6d6963;
		t.percentHeight = 100;
		t.strokeColor = 0x282726;
		t.strokeWeight = 0.5;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnN5Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnN6Skin.exml'] = window.BtnN6Skin = (function (_super) {
	__extends(BtnN6Skin, _super);
	function BtnN6Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",3),
					new eui.SetProperty("labelDisplay","size",24),
					new eui.SetProperty("labelDisplay","textColor",0x5b0b00)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("labelDisplay","textColor",0x160301)
				])
		];
	}
	var _proto = BtnN6Skin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.9;
		t.fillColor = 0x6d6963;
		t.percentHeight = 100;
		t.strokeColor = 0x282726;
		t.strokeWeight = 0.5;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0x5b0b00;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnN6Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnN7Skin.exml'] = window.BtnN7Skin = (function (_super) {
	__extends(BtnN7Skin, _super);
	function BtnN7Skin() {
		_super.call(this);
		this.skinParts = ["imgBg","labelDisplay"];
		
		this.currentState = "up";
		this.height = 88;
		this.width = 268;
		this.elementsContent = [this.imgBg_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("imgBg","x",0),
					new eui.SetProperty("imgBg","y",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("imgBg","verticalCenter",2),
					new eui.SetProperty("imgBg","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("imgBg","x",0),
					new eui.SetProperty("imgBg","y",0),
					new eui.SetProperty("imgBg","source","ui_st_bt_btn@30_0_30_0")
				])
		];
	}
	var _proto = BtnN7Skin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,5,92,42);
		t.source = "ui_thcz_bt_btn";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_yellow_3";
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0xf9edcf;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return BtnN7Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnN8Skin.exml'] = window.BtnN8Skin = (function (_super) {
	__extends(BtnN8Skin, _super);
	function BtnN8Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",3),
					new eui.SetProperty("_Rect1","fillColor",0x5b5a49),
					new eui.SetProperty("labelDisplay","size",36),
					new eui.SetProperty("labelDisplay","textColor",0xf4e7de)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x302e24),
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",2),
					new eui.SetProperty("labelDisplay","textColor",0xdbab8e),
					new eui.SetProperty("labelDisplay","size",30)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3d3c39),
					new eui.SetProperty("labelDisplay","textColor",0xf4e7de)
				])
		];
	}
	var _proto = BtnN8Skin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.9;
		t.fillColor = 0x5b5a49;
		t.percentHeight = 100;
		t.strokeColor = 0x282726;
		t.strokeWeight = 0.5;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0xefe4dc;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnN8Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnN9Skin.exml'] = window.BtnN9Skin = (function (_super) {
	__extends(BtnN9Skin, _super);
	function BtnN9Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",20),
					new eui.SetProperty("_Rect1","ellipseHeight",20),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("_Rect1","fillColor",0xcecda7),
					new eui.SetProperty("_Rect1","strokeAlpha",0.5),
					new eui.SetProperty("labelDisplay","size",28),
					new eui.SetProperty("labelDisplay","textColor",0x0c0c0b)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x302e24),
					new eui.SetProperty("_Rect1","ellipseWidth",20),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("_Rect1","strokeAlpha",0.5),
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xdbab8e),
					new eui.SetProperty("labelDisplay","size",28)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3d3c39),
					new eui.SetProperty("labelDisplay","textColor",0xf4e7de)
				])
		];
	}
	var _proto = BtnN9Skin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.6;
		t.fillColor = 0xb5ae65;
		t.percentHeight = 100;
		t.strokeColor = 0x0a0908;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0x141312;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnN9Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnNShop01.exml'] = window.BtnNShop01 = (function (_super) {
	__extends(BtnNShop01, _super);
	function BtnNShop01() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",3),
					new eui.SetProperty("_Rect1","ellipseHeight",3),
					new eui.SetProperty("_Rect1","strokeWeight",4),
					new eui.SetProperty("_Rect1","fillAlpha",1),
					new eui.SetProperty("_Rect1","fillColor",0xefbb7c),
					new eui.SetProperty("_Rect1","strokeColor",0xe0a718),
					new eui.SetProperty("labelDisplay","size",32),
					new eui.SetProperty("labelDisplay","textColor",0x191404),
					new eui.SetProperty("","height",60)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0xc1847f),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","size",32),
					new eui.SetProperty("labelDisplay","textColor",0xefe9e3)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3d3c39),
					new eui.SetProperty("labelDisplay","textColor",0xf4e7de)
				])
		];
	}
	var _proto = BtnNShop01.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 3;
		t.ellipseWidth = 3;
		t.fillAlpha = 1;
		t.fillColor = 0xefbb7c;
		t.percentHeight = 100;
		t.strokeColor = 0xe0a718;
		t.strokeWeight = 4;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0x0a0801;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnNShop01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnNShop02.exml'] = window.BtnNShop02 = (function (_super) {
	__extends(BtnNShop02, _super);
	function BtnNShop02() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",3),
					new eui.SetProperty("_Rect1","ellipseHeight",3),
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("_Rect1","fillColor",0xcb90d1),
					new eui.SetProperty("_Rect1","strokeColor",0x5b434f),
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("labelDisplay","size",50),
					new eui.SetProperty("labelDisplay","textColor",0xb9a2d6),
					new eui.SetProperty("","height",60)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("_Rect1","fillColor",0xc1847f),
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","size",50),
					new eui.SetProperty("labelDisplay","textColor",0xefe9e3)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("_Rect1","fillColor",0x3d3c39),
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("_Rect1","strokeAlpha",1),
					new eui.SetProperty("labelDisplay","size",50),
					new eui.SetProperty("labelDisplay","textColor",0x444240)
				])
		];
	}
	var _proto = BtnNShop02.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 3;
		t.ellipseWidth = 3;
		t.fillAlpha = 1;
		t.fillColor = 0xe57bed;
		t.percentHeight = 100;
		t.strokeColor = 0x511432;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0x0a0801;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnNShop02;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnNShop03.exml'] = window.BtnNShop03 = (function (_super) {
	__extends(BtnNShop03, _super);
	function BtnNShop03() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",3),
					new eui.SetProperty("_Rect1","ellipseHeight",3),
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("_Rect1","fillColor",0xcb90d1),
					new eui.SetProperty("_Rect1","strokeColor",0x5b434f),
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("labelDisplay","textColor",0x36343a),
					new eui.SetProperty("","height",60)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("_Rect1","fillColor",0xc1847f),
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xefe9e3)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("_Rect1","fillColor",0x3d3c39),
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("_Rect1","strokeAlpha",1),
					new eui.SetProperty("labelDisplay","textColor",0x444240)
				])
		];
	}
	var _proto = BtnNShop03.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 3;
		t.ellipseWidth = 3;
		t.fillAlpha = 1;
		t.fillColor = 0xe57bed;
		t.percentHeight = 100;
		t.strokeColor = 0x511432;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0x0a0801;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnNShop03;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnpayhuiyuan.exml'] = window.btnpayhuiyuan = (function (_super) {
	__extends(btnpayhuiyuan, _super);
	function btnpayhuiyuan() {
		_super.call(this);
		this.skinParts = ["labelDisplay","paytype"];
		
		this.currentState = "up";
		this.height = 100;
		this.width = 500;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.paytype_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeAlpha",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0x000000),
					new eui.SetProperty("labelDisplay","x",108),
					new eui.SetProperty("paytype","x",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("labelDisplay","size",60),
					new eui.SetProperty("labelDisplay","verticalCenter",2),
					new eui.SetProperty("","width",520)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("labelDisplay","size",60),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3),
					new eui.SetProperty("labelDisplay","x",108),
					new eui.SetProperty("paytype","x",0)
				])
		];
	}
	var _proto = btnpayhuiyuan.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0;
		t.fillColor = 0x84847b;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.strokeColor = 0x282726;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 50;
		t.text = "会员支付";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 350;
		t.x = 90;
		return t;
	};
	_proto.paytype_i = function () {
		var t = new eui.Image();
		this.paytype = t;
		t.source = "pay_huiyuan";
		t.verticalCenter = 0;
		return t;
	};
	return btnpayhuiyuan;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnpayweixin.exml'] = window.btnpayweixin = (function (_super) {
	__extends(btnpayweixin, _super);
	function btnpayweixin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","paytype"];
		
		this.currentState = "up";
		this.height = 100;
		this.width = 500;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.paytype_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeAlpha",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0x000000),
					new eui.SetProperty("labelDisplay","x",108),
					new eui.SetProperty("paytype","x",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("labelDisplay","size",60),
					new eui.SetProperty("labelDisplay","verticalCenter",2),
					new eui.SetProperty("","width",520)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("labelDisplay","size",60),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3),
					new eui.SetProperty("labelDisplay","x",108),
					new eui.SetProperty("paytype","x",0)
				])
		];
	}
	var _proto = btnpayweixin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0;
		t.fillColor = 0x84847b;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.strokeColor = 0x282726;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 50;
		t.text = "微信支付";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 350;
		t.x = 90;
		return t;
	};
	_proto.paytype_i = function () {
		var t = new eui.Image();
		this.paytype = t;
		t.source = "pay_weixin";
		t.verticalCenter = 0;
		return t;
	};
	return btnpayweixin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnpayzhifubao.exml'] = window.btnpayzhifubao = (function (_super) {
	__extends(btnpayzhifubao, _super);
	function btnpayzhifubao() {
		_super.call(this);
		this.skinParts = ["labelDisplay","paytype"];
		
		this.currentState = "up";
		this.height = 100;
		this.width = 500;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.paytype_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeAlpha",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0x000000),
					new eui.SetProperty("labelDisplay","x",108),
					new eui.SetProperty("paytype","x",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("labelDisplay","size",60),
					new eui.SetProperty("labelDisplay","verticalCenter",2),
					new eui.SetProperty("","width",520)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("labelDisplay","size",60),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3),
					new eui.SetProperty("labelDisplay","x",108),
					new eui.SetProperty("paytype","x",0)
				])
		];
	}
	var _proto = btnpayzhifubao.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0;
		t.fillColor = 0x84847b;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.strokeColor = 0x282726;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 50;
		t.text = "支付宝支付";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 360;
		t.x = 90;
		return t;
	};
	_proto.paytype_i = function () {
		var t = new eui.Image();
		this.paytype = t;
		t.source = "pay_zhifubao";
		t.verticalCenter = 0;
		return t;
	};
	return btnpayzhifubao;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnRecive01.exml'] = window.BtnRecive01 = (function (_super) {
	__extends(BtnRecive01, _super);
	function BtnRecive01() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 80;
		this.width = 320;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",3),
					new eui.SetProperty("labelDisplay","textColor",0x000000),
					new eui.SetProperty("labelDisplay","size",50)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",2),
					new eui.SetProperty("labelDisplay","size",50)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("labelDisplay","size",50),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnRecive01.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.9;
		t.fillColor = 0xedbe0b;
		t.percentHeight = 100;
		t.strokeColor = 0xedbe0b;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "收到";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnRecive01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnSave01.exml'] = window.BtnSave01 = (function (_super) {
	__extends(BtnSave01, _super);
	function BtnSave01() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 60;
		this.width = 200;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("_Image1","x",5),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","size",28),
					new eui.SetProperty("labelDisplay","textColor",0x000000)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","verticalCenter",2),
					new eui.SetProperty("_Image1","source","btnSave202003181"),
					new eui.SetProperty("labelDisplay","x",42),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",5),
					new eui.SetProperty("_Image1","source","btnSave202003181"),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnSave01.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.9;
		t.fillColor = 0x84847b;
		t.percentHeight = 100;
		t.strokeColor = 0x282726;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 30;
		t.horizontalCenter = -36;
		t.source = "btnSave202003180";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 24;
		t.size = 28;
		t.text = "保存";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnSave01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnShopbotLeft.exml'] = window.btnShopbotLeft = (function (_super) {
	__extends(btnShopbotLeft, _super);
	function btnShopbotLeft() {
		_super.call(this);
		this.skinParts = ["rect_rightbot","group_leftbot","labelDisplay","labelshow","redPoint"];
		
		this.currentState = "up";
		this.height = 105;
		this.width = 500;
		this.elementsContent = [this.group_leftbot_i(),this.labelDisplay_i(),this.labelshow_i(),this.redPoint_i(),this._Rect2_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("labelDisplay","textColor",0x7a7a7a),
					new eui.SetProperty("labelshow","textColor",0x7a7a7a)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x111111),
					new eui.SetProperty("rect_rightbot","fillColor",0x111111),
					new eui.SetProperty("labelDisplay","textColor",0x919191),
					new eui.SetProperty("labelshow","textColor",0x919191),
					new eui.SetProperty("redPoint","source","serwmh"),
					new eui.SetProperty("_Rect2","fillColor",0x111111),
					new eui.SetProperty("_Rect2","fillAlpha",1)
				])
		];
	}
	var _proto = btnShopbotLeft.prototype;

	_proto.group_leftbot_i = function () {
		var t = new eui.Group();
		this.group_leftbot = t;
		t.height = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 5;
		t.elementsContent = [this._Rect1_i(),this.rect_rightbot_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0x111111;
		t.percentHeight = 100;
		t.right = 0;
		t.width = 120;
		return t;
	};
	_proto.rect_rightbot_i = function () {
		var t = new eui.Rect();
		this.rect_rightbot = t;
		t.ellipseHeight = 120;
		t.ellipseWidth = 120;
		t.fillColor = 0x111111;
		t.percentHeight = 100;
		t.left = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 50;
		t.size = 40;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "¥86 ";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 284;
		t.x = 175;
		t.y = 15;
		return t;
	};
	_proto.labelshow_i = function () {
		var t = new eui.Label();
		this.labelshow = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.size = 22;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "未结账";
		t.textAlign = "left";
		t.textColor = 0x7c7a76;
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 175;
		t.y = 66;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.source = "serwm";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		this._Rect2 = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xf21313;
		t.height = 30;
		t.width = 30;
		t.x = 113;
		t.y = 28;
		return t;
	};
	return btnShopbotLeft;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnShopbotRight.exml'] = window.btnShopbotRight = (function (_super) {
	__extends(btnShopbotRight, _super);
	function btnShopbotRight() {
		_super.call(this);
		this.skinParts = ["rect_rightbot","group_rightbot","labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 100;
		this.width = 160;
		this.elementsContent = [this.group_rightbot_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",2),
					new eui.SetProperty("labelDisplay","textColor",0x7a7a7a)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x111111),
					new eui.SetProperty("rect_rightbot","fillColor",0x111111),
					new eui.SetProperty("labelDisplay","textColor",0x919191)
				])
		];
	}
	var _proto = btnShopbotRight.prototype;

	_proto.group_rightbot_i = function () {
		var t = new eui.Group();
		this.group_rightbot = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this.rect_rightbot_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0xd3ae0a;
		t.percentHeight = 100;
		t.width = 120;
		return t;
	};
	_proto.rect_rightbot_i = function () {
		var t = new eui.Rect();
		this.rect_rightbot = t;
		t.ellipseHeight = 120;
		t.ellipseWidth = 120;
		t.fillColor = 0xd3ae0a;
		t.percentHeight = 100;
		t.right = 0;
		t.width = 160;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "选好了";
		t.textAlign = "center";
		t.textColor = 0x0a0a0a;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return btnShopbotRight;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnShopGiveThisAgin.exml'] = window.btnShopGiveThisAgin = (function (_super) {
	__extends(btnShopGiveThisAgin, _super);
	function btnShopGiveThisAgin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 46;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x877764)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x878787),
					new eui.SetProperty("labelDisplay","size",40)
				])
		];
	}
	var _proto = btnShopGiveThisAgin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.1;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0x424242;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "再来一单";
		t.textAlign = "center";
		t.textColor = 0x3f3f3f;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 137;
		return t;
	};
	return btnShopGiveThisAgin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnShopHistoryOrder.exml'] = window.btnShopHistoryOrder = (function (_super) {
	__extends(btnShopHistoryOrder, _super);
	function btnShopHistoryOrder() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 46;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x877764)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x878787),
					new eui.SetProperty("labelDisplay","size",40)
				])
		];
	}
	var _proto = btnShopHistoryOrder.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.2;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0xd6c8b8;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 22;
		t.text = "<--继续加单";
		t.textAlign = "center";
		t.textColor = 0x8c8040;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 137;
		t.x = 5;
		return t;
	};
	return btnShopHistoryOrder;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnShopInfoListAdd.exml'] = window.BtnShopInfoListAdd = (function (_super) {
	__extends(BtnShopInfoListAdd, _super);
	function BtnShopInfoListAdd() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 40;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",20),
					new eui.SetProperty("_Rect1","ellipseHeight",20),
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("_Rect1","fillColor",0xf49411),
					new eui.SetProperty("labelDisplay","textColor",0x000000)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0xc1847f),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textColor",0xefe9e3)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3d3c39),
					new eui.SetProperty("labelDisplay","textColor",0xf4e7de),
					new eui.SetProperty("","width",120)
				])
		];
	}
	var _proto = BtnShopInfoListAdd.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xf49411;
		t.percentHeight = 100;
		t.strokeColor = 0x0a0908;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "添加";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnShopInfoListAdd;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnShopItemAdd01.exml'] = window.BtnShopItemAdd01 = (function (_super) {
	__extends(BtnShopItemAdd01, _super);
	function BtnShopItemAdd01() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 40;
		this.width = 50;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x877764)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x878787),
					new eui.SetProperty("labelDisplay","size",40)
				])
		];
	}
	var _proto = BtnShopItemAdd01.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xf49411;
		t.percentHeight = 100;
		t.strokeColor = 0xf49411;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "+";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 60;
		t.y = -3;
		return t;
	};
	return BtnShopItemAdd01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnShopItemDel01.exml'] = window.BtnShopItemDel01 = (function (_super) {
	__extends(BtnShopItemDel01, _super);
	function BtnShopItemDel01() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 40;
		this.width = 50;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x756d6d)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x878787)
				])
		];
	}
	var _proto = BtnShopItemDel01.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xfcfcfc;
		t.percentHeight = 100;
		t.strokeColor = 0xf49411;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "-";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 60;
		t.y = -3;
		return t;
	};
	return BtnShopItemDel01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnShopItemDel02.exml'] = window.BtnShopItemDel02 = (function (_super) {
	__extends(BtnShopItemDel02, _super);
	function BtnShopItemDel02() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 40;
		this.width = 50;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x756d6d)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x878787)
				])
		];
	}
	var _proto = BtnShopItemDel02.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xdd1f1f;
		t.percentHeight = 100;
		t.strokeColor = 0xd6d5cd;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "x";
		t.textAlign = "center";
		t.textColor = 0xf4f2f2;
		t.verticalAlign = "middle";
		t.width = 60;
		t.y = -2;
		return t;
	};
	return BtnShopItemDel02;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnShopMakeAddCintinue.exml'] = window.btnShopMakeAddCintinue = (function (_super) {
	__extends(btnShopMakeAddCintinue, _super);
	function btnShopMakeAddCintinue() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x877764)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x878787),
					new eui.SetProperty("labelDisplay","size",40)
				])
		];
	}
	var _proto = btnShopMakeAddCintinue.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.3;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0xd6c8b8;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "+";
		t.textAlign = "center";
		t.textColor = 0x5b523a;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	return btnShopMakeAddCintinue;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnShopOrderAddCintinue.exml'] = window.btnShopOrderAddCintinue = (function (_super) {
	__extends(btnShopOrderAddCintinue, _super);
	function btnShopOrderAddCintinue() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 46;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this._Label1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x877764)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x878787),
					new eui.SetProperty("labelDisplay","size",40),
					new eui.SetProperty("_Label1","size",40)
				])
		];
	}
	var _proto = btnShopOrderAddCintinue.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0xd6c8b8;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 22;
		t.text = "<--继续加单";
		t.textAlign = "center";
		t.textColor = 0x5b523a;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 137;
		t.x = 5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 30;
		t.text = "+";
		t.textAlign = "center";
		t.textColor = 0x7c6a42;
		t.verticalAlign = "middle";
		t.verticalCenter = -2;
		t.width = 50;
		t.x = 126;
		return t;
	};
	return btnShopOrderAddCintinue;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnShopOrderShowListSkin.exml'] = window.btnShopOrderShowListSkin = (function (_super) {
	__extends(btnShopOrderShowListSkin, _super);
	function btnShopOrderShowListSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 46;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","size",22),
					new eui.SetProperty("_Image1","y",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x877764),
					new eui.SetProperty("labelDisplay","size",22),
					new eui.SetProperty("_Image1","source","arrow_showup"),
					new eui.SetProperty("_Image1","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x878787),
					new eui.SetProperty("_Image1","source","arrow_showup")
				])
		];
	}
	var _proto = btnShopOrderShowListSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0xd6c8b8;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 22;
		t.text = "点击收起";
		t.textAlign = "center";
		t.textColor = 0x414232;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 137;
		t.x = 2;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "arrow_showup";
		t.verticalCenter = 0.5;
		t.x = 127;
		return t;
	};
	return btnShopOrderShowListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/btnShopOrderShowMoreSkin.exml'] = window.btnShopOrderShowMoreSkin = (function (_super) {
	__extends(btnShopOrderShowMoreSkin, _super);
	function btnShopOrderShowMoreSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 46;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","size",22),
					new eui.SetProperty("_Image1","y",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x877764),
					new eui.SetProperty("labelDisplay","size",22),
					new eui.SetProperty("_Image1","source","arrow_showdown"),
					new eui.SetProperty("_Image1","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x878787),
					new eui.SetProperty("_Image1","source","arrow_showdown")
				])
		];
	}
	var _proto = btnShopOrderShowMoreSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0xd6c8b8;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 22;
		t.text = "显示更多";
		t.textAlign = "center";
		t.textColor = 0x414232;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 137;
		t.x = 2;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "arrow_showdown";
		t.verticalCenter = 0.5;
		t.x = 127;
		return t;
	};
	return btnShopOrderShowMoreSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnShopSelSevRul.exml'] = window.BtnShopSelSevRul = (function (_super) {
	__extends(BtnShopSelSevRul, _super);
	function BtnShopSelSevRul() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 46;
		this.width = 160;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","size",22),
					new eui.SetProperty("_Image1","y",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x877764),
					new eui.SetProperty("labelDisplay","size",22),
					new eui.SetProperty("_Image1","source","arrow_showright"),
					new eui.SetProperty("_Image1","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x878787),
					new eui.SetProperty("_Image1","source","arrow_showright")
				])
		];
	}
	var _proto = BtnShopSelSevRul.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xf2f0ed;
		t.percentHeight = 100;
		t.strokeColor = 0xd6c8b8;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 22;
		t.text = "选规格";
		t.textAlign = "right";
		t.textColor = 0xb58a19;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 95;
		t.x = 18;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.3;
		t.source = "arrow_showright";
		t.verticalCenter = 0.5;
		t.x = 116;
		return t;
	};
	return BtnShopSelSevRul;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/BtnUpSkin.exml'] = window.BtnUpSkin = (function (_super) {
	__extends(BtnUpSkin, _super);
	function BtnUpSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","redPoint"];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","ellipseWidth",2),
					new eui.SetProperty("_Rect1","ellipseHeight",2),
					new eui.SetProperty("_Rect1","strokeWeight",3),
					new eui.SetProperty("labelDisplay","size",24),
					new eui.SetProperty("labelDisplay","textColor",0x000000)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3F3B36),
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = BtnUpSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.9;
		t.fillColor = 0x6d6963;
		t.percentHeight = 100;
		t.strokeColor = 0x282726;
		t.strokeWeight = 0.5;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 66;
		t.source = "ui_bm_reddot";
		t.verticalCenter = -23;
		t.visible = false;
		return t;
	};
	return BtnUpSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/Close1Btn.exml'] = window.Close1Btn = (function (_super) {
	__extends(Close1Btn, _super);
	function Close1Btn() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","scaleX",0.9),
					new eui.SetProperty("_Image1","scaleY",0.9)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Close1Btn.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 62;
		t.source = "ui_bt_firstClose";
		t.width = 62;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Close1Btn;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/ReturnBtn.exml'] = window.ReturnBtn = (function (_super) {
	__extends(ReturnBtn, _super);
	function ReturnBtn() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","ui_bt_007_up"),
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("_Image1","verticalCenter",0),
					new eui.SetProperty("_Image1","scaleX",0.9),
					new eui.SetProperty("_Image1","scaleY",0.9)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ReturnBtn.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "ui_bt_007_up";
		t.percentWidth = 100;
		return t;
	};
	return ReturnBtn;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/btn/TabBar1skin.exml'] = window.TabBar1skin = (function (_super) {
	__extends(TabBar1skin, _super);
	function TabBar1skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","verticalCenter",2),
					new eui.SetProperty("_Image1","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","horizontalCenter",2),
					new eui.SetProperty("labelDisplay","verticalCenter",2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("_Image1","source","ui_bt_04"),
					new eui.SetProperty("labelDisplay","textColor",0xe5e3e3)
				])
		];
	}
	var _proto = TabBar1skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(20,9,122,54);
		t.source = "ui_bt_03";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TabBar1skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/checkbox/CheckBoxB01.exml'] = window.CheckBoxB01 = (function (_super) {
	__extends(CheckBoxB01, _super);
	function CheckBoxB01() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 40;
		this.width = 260;
		this.elementsContent = [this._Group1_i(),this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = CheckBoxB01.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.source = "chekBox338";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 28;
		t.source = "chekBox336";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 32;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf7ecde;
		t.verticalAlign = "middle";
		t.percentWidth = 85;
		t.x = 42;
		t.y = 6;
		return t;
	};
	return CheckBoxB01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/checkbox/CheckBoxB02.exml'] = window.CheckBoxB02 = (function (_super) {
	__extends(CheckBoxB02, _super);
	function CheckBoxB02() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "down";
		this.height = 40;
		this.width = 40;
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = CheckBoxB02.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.source = "chekBox338";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 28;
		t.source = "chekBox336";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 0;
		t.y = 2;
		return t;
	};
	return CheckBoxB02;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/checkbox/CheckBoxB03.exml'] = window.CheckBoxB03 = (function (_super) {
	__extends(CheckBoxB03, _super);
	function CheckBoxB03() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 34;
		this.width = 90;
		this.elementsContent = [this._Group1_i(),this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = CheckBoxB03.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x99938c;
		t.percentHeight = 100;
		t.strokeColor = 0x191717;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.source = "chekBox338";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 28;
		t.source = "chekBox336";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 1;
		t.y = 2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.height = 28;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x140f09;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 54;
		t.x = 32;
		return t;
	};
	return CheckBoxB03;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/mv/MvLoading.exml'] = window.MvLoading = (function (_super) {
	__extends(MvLoading, _super);
	function MvLoading() {
		_super.call(this);
		this.skinParts = ["uiImageContainer"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.uiImageContainer_i()];
	}
	var _proto = MvLoading.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.fillColor = 0x353535;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.uiImageContainer_i = function () {
		var t = new eui.Group();
		this.uiImageContainer = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 60;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "load_Reel";
		t.x = 0;
		t.y = 5;
		return t;
	};
	return MvLoading;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/normalsel/normalselitem.exml'] = window.normalselitem = (function (_super) {
	__extends(normalselitem, _super);
	function normalselitem() {
		_super.call(this);
		this.skinParts = ["_rect_back","lab_name1","lab_name2"];
		
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._rect_back_i(),this.lab_name1_i(),this.lab_name2_i()];
	}
	var _proto = normalselitem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		return t;
	};
	_proto._rect_back_i = function () {
		var t = new eui.Rect();
		this._rect_back = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 385;
		t.fillColor = 0xefede1;
		t.percentHeight = 100;
		t.strokeColor = 0x2b2422;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.lab_name1_i = function () {
		var t = new eui.Label();
		this.lab_name1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.size = 40;
		t.stroke = 0.6;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 360;
		t.x = 42.66;
		return t;
	};
	_proto.lab_name2_i = function () {
		var t = new eui.Label();
		this.lab_name2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.size = 40;
		t.stroke = 0.6;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 300;
		t.x = 399;
		return t;
	};
	return normalselitem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/scroll/scrollHasNoBar.exml'] = window.scrollHasNoBar = (function (_super) {
	__extends(scrollHasNoBar, _super);
	function scrollHasNoBar() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = scrollHasNoBar.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.autoVisibility = false;
		t.bottom = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.autoVisibility = false;
		t.percentHeight = 100;
		t.right = 0;
		t.visible = false;
		return t;
	};
	return scrollHasNoBar;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/normalsel/normalselskin.exml'] = window.normalselskin = (function (_super) {
	__extends(normalselskin, _super);
	function normalselskin() {
		_super.call(this);
		this.skinParts = ["_btn_back","lab_title","listItem","scrollMy"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._btn_back_i(),this.lab_title_i(),this.scrollMy_i()];
	}
	var _proto = normalselskin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xedeae8;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Button();
		this._btn_back = t;
		t.height = 50;
		t.label = "《——";
		t.skinName = "BtnN11Skin";
		t.width = 120;
		t.x = 16;
		t.y = 28;
		return t;
	};
	_proto.lab_title_i = function () {
		var t = new eui.Label();
		this.lab_title = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 40;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "营业额查询";
		t.textAlign = "left";
		t.textColor = 0x0b0c01;
		t.width = 500;
		t.x = 171;
		t.y = 25;
		return t;
	};
	_proto.scrollMy_i = function () {
		var t = new eui.Scroller();
		this.scrollMy = t;
		t.anchorOffsetY = 0;
		t.height = 1160;
		t.skinName = "scrollHasNoBar";
		t.width = 720;
		t.x = 0;
		t.y = 100;
		t.viewport = this.listItem_i();
		return t;
	};
	_proto.listItem_i = function () {
		var t = new eui.List();
		this.listItem = t;
		t.height = 395;
		t.itemRendererSkinName = normalselitem;
		t.width = 800;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i(),this._Object14_i(),this._Object15_i(),this._Object16_i(),this._Object17_i(),this._Object18_i(),this._Object19_i(),this._Object20_i(),this._Object21_i(),this._Object22_i(),this._Object23_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	return normalselskin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/normalsel/normalTimeSetitem.exml'] = window.normalTimeSetitem = (function (_super) {
	__extends(normalTimeSetitem, _super);
	function normalTimeSetitem() {
		_super.call(this);
		this.skinParts = ["_rect_back","lab_name1","lab_name2","lab_name3"];
		
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._rect_back_i(),this.lab_name1_i(),this.lab_name2_i(),this.lab_name3_i()];
	}
	var _proto = normalTimeSetitem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		return t;
	};
	_proto._rect_back_i = function () {
		var t = new eui.Rect();
		this._rect_back = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 385;
		t.fillColor = 0xefede1;
		t.percentHeight = 100;
		t.strokeColor = 0x2b2422;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		t.y = 2;
		return t;
	};
	_proto.lab_name1_i = function () {
		var t = new eui.Label();
		this.lab_name1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.size = 30;
		t.stroke = 0.6;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 360;
		t.x = 20;
		return t;
	};
	_proto.lab_name2_i = function () {
		var t = new eui.Label();
		this.lab_name2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.size = 30;
		t.stroke = 0.6;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 220;
		t.x = 390;
		return t;
	};
	_proto.lab_name3_i = function () {
		var t = new eui.Label();
		this.lab_name3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.size = 30;
		t.stroke = 0.6;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 620;
		return t;
	};
	return normalTimeSetitem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/normalsel/normalTimeSetskin.exml'] = window.normalTimeSetskin = (function (_super) {
	__extends(normalTimeSetskin, _super);
	function normalTimeSetskin() {
		_super.call(this);
		this.skinParts = ["_btn_back","lab_title","listItem","scrollMy"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._btn_back_i(),this.lab_title_i(),this.scrollMy_i()];
	}
	var _proto = normalTimeSetskin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xedeae8;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Button();
		this._btn_back = t;
		t.height = 50;
		t.label = "《——";
		t.skinName = "BtnN11Skin";
		t.width = 120;
		t.x = 16;
		t.y = 28;
		return t;
	};
	_proto.lab_title_i = function () {
		var t = new eui.Label();
		this.lab_title = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 40;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "营业额查询";
		t.textAlign = "left";
		t.textColor = 0x0b0c01;
		t.width = 500;
		t.x = 171;
		t.y = 25;
		return t;
	};
	_proto.scrollMy_i = function () {
		var t = new eui.Scroller();
		this.scrollMy = t;
		t.anchorOffsetY = 0;
		t.height = 1160;
		t.skinName = "scrollHasNoBar";
		t.width = 720;
		t.x = 0;
		t.y = 100;
		t.viewport = this.listItem_i();
		return t;
	};
	_proto.listItem_i = function () {
		var t = new eui.List();
		this.listItem = t;
		t.height = 395;
		t.itemRendererSkinName = normalTimeSetitem;
		t.width = 800;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i(),this._Object14_i(),this._Object15_i(),this._Object16_i(),this._Object17_i(),this._Object18_i(),this._Object19_i(),this._Object20_i(),this._Object21_i(),this._Object22_i(),this._Object23_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	return normalTimeSetskin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioBill01.exml'] = window.RadioBill01 = (function (_super) {
	__extends(RadioBill01, _super);
	function RadioBill01() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 80;
		this.width = 160;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","fillColor",0x686666),
					new eui.SetProperty("labelDisplay","y",68)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0xd3d3d3),
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("_Rect1","strokeColor",0xf9ca93),
					new eui.SetProperty("labelDisplay","y",68),
					new eui.SetProperty("labelDisplay","textColor",0x605c12)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0xb5b3b3),
					new eui.SetProperty("_Rect1","strokeColor",0xf9db89),
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("labelDisplay","y",68),
					new eui.SetProperty("labelDisplay","textColor",0x073318)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0)
				])
		];
	}
	var _proto = RadioBill01.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0x636262;
		t.percentHeight = 100;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "服务";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return RadioBill01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioL001.exml'] = window.RadioL001 = (function (_super) {
	__extends(RadioL001, _super);
	function RadioL001() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 40;
		this.width = 150;
		this.elementsContent = [this._Group1_i(),this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = RadioL001.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.source = "chekBox338";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 28;
		t.source = "chekBox336";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 28;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf7ecde;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 50;
		t.y = 6;
		return t;
	};
	return RadioL001;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioL002.exml'] = window.RadioL002 = (function (_super) {
	__extends(RadioL002, _super);
	function RadioL002() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 46;
		this.width = 380;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = RadioL002.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "chekBox338";
		t.verticalCenter = 0;
		t.width = 32;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 30;
		t.source = "chekBox336";
		t.verticalCenter = 0;
		t.width = 32;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.size = 30;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf7f0e8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 320;
		t.x = 50;
		return t;
	};
	return RadioL002;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioL028.exml'] = window.RadioL028 = (function (_super) {
	__extends(RadioL028, _super);
	function RadioL028() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 60;
		this.width = 200;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","strokeWeight",1),
					new eui.SetProperty("_Rect1","ellipseWidth",6),
					new eui.SetProperty("_Rect1","ellipseHeight",6),
					new eui.SetProperty("_Rect1","strokeColor",0xafafaf),
					new eui.SetProperty("_Rect1","strokeAlpha",0.6),
					new eui.SetProperty("labelDisplay","verticalAlign","middle")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0xb2ac87),
					new eui.SetProperty("_Rect1","strokeColor",0xc13636),
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("_Rect1","ellipseWidth",6),
					new eui.SetProperty("_Rect1","ellipseHeight",6),
					new eui.SetProperty("labelDisplay","verticalAlign","middle"),
					new eui.SetProperty("labelDisplay","textColor",0x7c4c3b)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Rect1","strokeWeight",2),
					new eui.SetProperty("_Rect1","ellipseWidth",6),
					new eui.SetProperty("_Rect1","ellipseHeight",6),
					new eui.SetProperty("_Rect1","fillAlpha",0.6),
					new eui.SetProperty("_Rect1","fillColor",0xddcf8d),
					new eui.SetProperty("_Rect1","strokeColor",0xc92100),
					new eui.SetProperty("labelDisplay","textAlign","center"),
					new eui.SetProperty("labelDisplay","textColor",0xb72101),
					new eui.SetProperty("","height",60)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("labelDisplay","verticalAlign","middle")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("labelDisplay","verticalAlign","bottom")
				])
		];
	}
	var _proto = RadioL028.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 6;
		t.ellipseWidth = 6;
		t.fillColor = 0xefefed;
		t.percentHeight = 100;
		t.strokeAlpha = 0.6;
		t.strokeColor = 0x999999;
		t.strokeWeight = 1;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.horizontalCenter = 0;
		t.size = 28;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3f3d3b;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	return RadioL028;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioM00.exml'] = window.RadioM00 = (function (_super) {
	__extends(RadioM00, _super);
	function RadioM00() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("_Group1","percentWidth",100),
					new eui.SetProperty("_Group1","percentHeight",100)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","service1056"),
					new eui.SetProperty("labelDisplay","textColor",0x00ff00),
					new eui.SetProperty("","width",160),
					new eui.SetProperty("","height",100)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","service1056"),
					new eui.SetProperty("","width",160),
					new eui.SetProperty("","height",100)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","y",68),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("_Group1","percentWidth",100),
					new eui.SetProperty("_Group1","percentHeight",100)
				])
		];
	}
	var _proto = RadioM00.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.horizontalCenter = 0;
		t.source = "service1058";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "服务";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.y = 68;
		return t;
	};
	return RadioM00;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioM01.exml'] = window.RadioM01 = (function (_super) {
	__extends(RadioM01, _super);
	function RadioM01() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("_Group1","percentWidth",100),
					new eui.SetProperty("_Group1","percentHeight",100)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","service1056"),
					new eui.SetProperty("labelDisplay","textColor",0x00ff00),
					new eui.SetProperty("","width",160),
					new eui.SetProperty("","height",100)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","service1056"),
					new eui.SetProperty("","width",160),
					new eui.SetProperty("","height",100)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","y",68),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("_Group1","percentWidth",100),
					new eui.SetProperty("_Group1","percentHeight",100)
				])
		];
	}
	var _proto = RadioM01.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.horizontalCenter = 0;
		t.source = "service1058";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "服务";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.y = 68;
		return t;
	};
	return RadioM01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioM02.exml'] = window.RadioM02 = (function (_super) {
	__extends(RadioM02, _super);
	function RadioM02() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("_Group1","percentWidth",100),
					new eui.SetProperty("_Group1","percentHeight",100)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","service1056"),
					new eui.SetProperty("labelDisplay","textColor",0x00ff00),
					new eui.SetProperty("","width",160),
					new eui.SetProperty("","height",100)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","service1056"),
					new eui.SetProperty("","width",160),
					new eui.SetProperty("","height",100)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","y",68),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("_Group1","percentWidth",100),
					new eui.SetProperty("_Group1","percentHeight",100)
				])
		];
	}
	var _proto = RadioM02.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.horizontalCenter = 0;
		t.source = "service1058";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "服务";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.y = 68;
		return t;
	};
	return RadioM02;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioM03.exml'] = window.RadioM03 = (function (_super) {
	__extends(RadioM03, _super);
	function RadioM03() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("_Group1","percentWidth",100),
					new eui.SetProperty("_Group1","percentHeight",100)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","service1056"),
					new eui.SetProperty("labelDisplay","textColor",0x00ff00),
					new eui.SetProperty("","width",160),
					new eui.SetProperty("","height",100)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("","width",160),
					new eui.SetProperty("","height",100)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("labelDisplay","y",68),
					new eui.SetProperty("labelDisplay","horizontalCenter",0),
					new eui.SetProperty("_Group1","percentWidth",100),
					new eui.SetProperty("_Group1","percentHeight",100)
				])
		];
	}
	var _proto = RadioM03.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.horizontalCenter = 0;
		t.source = "service1058";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "服务";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.y = 68;
		return t;
	};
	return RadioM03;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioN01.exml'] = window.RadioN01 = (function (_super) {
	__extends(RadioN01, _super);
	function RadioN01() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","sexm77569")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","sexm77569")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","sexm74569")
				])
		];
	}
	var _proto = RadioN01.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "sexm74569";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 32;
		t.textAlign = "center";
		t.textColor = 0xC0C0C0;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioN01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioN02.exml'] = window.RadioN02 = (function (_super) {
	__extends(RadioN02, _super);
	function RadioN02() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","sexw76568")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","sexw76568")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","sexw76568")
				])
		];
	}
	var _proto = RadioN02.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "sexw74568";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 32;
		t.textAlign = "center";
		t.textColor = 0xC0C0C0;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioN02;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioS001.exml'] = window.RadioS001 = (function (_super) {
	__extends(RadioS001, _super);
	function RadioS001() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 40;
		this.width = 90;
		this.elementsContent = [this._Group1_i(),this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","source","")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","source","chekBox336")
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = RadioS001.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x99938c;
		t.percentHeight = 100;
		t.strokeColor = 0x191717;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.source = "chekBox338";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 28;
		t.source = "chekBox336";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 4;
		t.y = 2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.height = 30;
		t.size = 24;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "轮种";
		t.textAlign = "left";
		t.textColor = 0x140f09;
		t.verticalAlign = "middle";
		t.width = 56;
		t.x = 35;
		t.y = 6;
		return t;
	};
	return RadioS001;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioShop01.exml'] = window.RadioShop01 = (function (_super) {
	__extends(RadioShop01, _super);
	function RadioShop01() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "down";
		this.height = 60;
		this.width = 200;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","percentWidth",100),
					new eui.SetProperty("_Rect1","percentHeight",100),
					new eui.SetProperty("_Rect1","fillColor",0xefbb7c),
					new eui.SetProperty("_Rect1","strokeWeight",4),
					new eui.SetProperty("_Rect1","ellipseWidth",3),
					new eui.SetProperty("_Rect1","ellipseHeight",3),
					new eui.SetProperty("_Rect1","strokeColor",0xe0a718),
					new eui.SetProperty("_Rect2","fillColor",0xa0892e),
					new eui.SetProperty("_Rect2","x",10),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","x",60),
					new eui.SetProperty("labelDisplay","size",32)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect2","fillColor",0x0f0c02)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Rect2","fillColor",0x110e04)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Rect2","fillColor",0x0f0c03)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0x5b5854),
					new eui.SetProperty("_Rect2","fillColor",0x4c4b45)
				])
		];
	}
	var _proto = RadioShop01.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 3;
		t.ellipseWidth = 3;
		t.fillColor = 0xefbb7c;
		t.percentHeight = 100;
		t.strokeColor = 0xe0a718;
		t.strokeWeight = 4;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		this._Rect2 = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xa0892e;
		t.height = 30;
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 10;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.size = 32;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x3f3d3b;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 150;
		t.x = 60;
		return t;
	};
	return RadioShop01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/radio/RadioShopSel02.exml'] = window.RadioShopSel02 = (function (_super) {
	__extends(RadioShopSel02, _super);
	function RadioShopSel02() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "down";
		this.height = 40;
		this.width = 220;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","percentWidth",100),
					new eui.SetProperty("_Rect1","percentHeight",100),
					new eui.SetProperty("_Rect1","ellipseWidth",3),
					new eui.SetProperty("_Rect1","ellipseHeight",3),
					new eui.SetProperty("_Rect1","strokeColor",0xe0a718),
					new eui.SetProperty("_Rect2","x",10),
					new eui.SetProperty("_Rect2","fillColor",0xffffff),
					new eui.SetProperty("_Rect2","strokeWeight",3),
					new eui.SetProperty("_Rect2","fillAlpha",0.2),
					new eui.SetProperty("_Rect3","fillColor",0xffffff),
					new eui.SetProperty("_Rect3","width",20),
					new eui.SetProperty("_Rect3","height",20),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","x",53)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","strokeWeight",0),
					new eui.SetProperty("_Rect2","fillColor",0xffffff),
					new eui.SetProperty("_Rect2","strokeWeight",3),
					new eui.SetProperty("_Rect3","fillColor",0x0f0c02),
					new eui.SetProperty("labelDisplay","size",20)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Rect1","strokeWeight",0),
					new eui.SetProperty("_Rect2","fillColor",0xffffff),
					new eui.SetProperty("_Rect2","strokeWeight",3),
					new eui.SetProperty("_Rect2","strokeColor",0xe8b610),
					new eui.SetProperty("_Rect2","fillAlpha",0.2),
					new eui.SetProperty("_Rect3","fillColor",0xe8b610),
					new eui.SetProperty("labelDisplay","size",20)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Rect1","strokeWeight",0),
					new eui.SetProperty("_Rect2","strokeColor",0xe8b610),
					new eui.SetProperty("_Rect2","fillColor",0xffffff),
					new eui.SetProperty("_Rect2","strokeWeight",3),
					new eui.SetProperty("_Rect3","strokeColor",0xe8b610),
					new eui.SetProperty("_Rect3","fillColor",0xe8b610),
					new eui.SetProperty("labelDisplay","size",20)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Rect1","strokeWeight",0),
					new eui.SetProperty("_Rect2","fillColor",0x4c4b45),
					new eui.SetProperty("_Rect3","fillColor",0x4c4b45),
					new eui.SetProperty("labelDisplay","size",20),
					new eui.SetProperty("labelDisplay","height",30),
					new eui.SetProperty("labelDisplay","x",50),
					new eui.SetProperty("labelDisplay","text","服务我自己")
				])
		];
	}
	var _proto = RadioShopSel02.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 3;
		t.ellipseWidth = 3;
		t.fillAlpha = 0.2;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.strokeColor = 0xe0a718;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.width = 50;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		this._Rect2 = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xa0892e;
		t.height = 30;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		this._Rect3 = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xa0892e;
		t.height = 15;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 15;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.height = 30;
		t.size = 20;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x3f3d3b;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 150;
		t.x = 60;
		return t;
	};
	return RadioShopSel02;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/login/login.exml'] = window.login = (function (_super) {
	__extends(login, _super);
	function login() {
		_super.call(this);
		this.skinParts = ["_input_company","_input_username","_input_password","_loginBtn","revmsg","group_login"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.group_login_i()];
	}
	var _proto = login.prototype;

	_proto.group_login_i = function () {
		var t = new eui.Group();
		this.group_login = t;
		t.anchorOffsetX = 0;
		t.height = 1020;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._loginBtn_i(),this.revmsg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(107,63,68,384);
		t.source = "ui_fb_bm_bg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 285;
		t.horizontalCenter = 0;
		t.width = 456;
		t.y = 333;
		t.elementsContent = [this._Label1_i(),this._Rect1_i(),this._input_company_i(),this._Label2_i(),this._Rect2_i(),this._Rect3_i(),this._input_username_i(),this._Label3_i(),this._input_password_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "公司名:";
		t.textAlign = "right";
		t.textColor = 0x30332b;
		t.width = 120;
		t.x = 18;
		t.y = 33;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x82786e;
		t.height = 44;
		t.strokeColor = 0x050101;
		t.width = 268;
		t.x = 143;
		t.y = 26;
		return t;
	};
	_proto._input_company_i = function () {
		var t = new eui.EditableText();
		this._input_company = t;
		t.anchorOffsetX = 0;
		t.backgroundColor = 0xd1c8c8;
		t.borderColor = 0xb0d62a;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 220;
		t.x = 149;
		t.y = 30;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "用户名:";
		t.textAlign = "right";
		t.textColor = 0x30332b;
		t.width = 120;
		t.x = 18;
		t.y = 106;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x82786e;
		t.height = 44;
		t.strokeColor = 0x050101;
		t.width = 268;
		t.x = 143;
		t.y = 99;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x82786e;
		t.height = 44;
		t.strokeColor = 0x050101;
		t.width = 268;
		t.x = 143;
		t.y = 178;
		return t;
	};
	_proto._input_username_i = function () {
		var t = new eui.EditableText();
		this._input_username = t;
		t.anchorOffsetX = 0;
		t.backgroundColor = 0xd1c8c8;
		t.borderColor = 0xb0d62a;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 220;
		t.x = 149;
		t.y = 103;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "密 码:";
		t.textAlign = "right";
		t.textColor = 0x30332b;
		t.width = 120;
		t.x = 15;
		t.y = 183;
		return t;
	};
	_proto._input_password_i = function () {
		var t = new eui.EditableText();
		this._input_password = t;
		t.anchorOffsetX = 0;
		t.backgroundColor = 0xD1C8C8;
		t.borderColor = 0xB0D62A;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 220;
		t.x = 149;
		t.y = 182;
		return t;
	};
	_proto._loginBtn_i = function () {
		var t = new eui.Button();
		this._loginBtn = t;
		t.horizontalCenter = 0;
		t.label = "登录";
		t.skinName = "BtnN7Skin";
		t.width = 400;
		t.y = 657;
		return t;
	};
	_proto.revmsg_i = function () {
		var t = new eui.Label();
		this.revmsg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 243;
		t.horizontalCenter = 0.5;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xe51919;
		t.verticalAlign = "middle";
		t.width = 499;
		t.y = 57;
		return t;
	};
	return login;
})(eui.Skin);generateEUI.paths['resource/eui_skins/mainview/MainTableViewSkin.exml'] = window.MainTableViewSkin = (function (_super) {
	__extends(MainTableViewSkin, _super);
	function MainTableViewSkin() {
		_super.call(this);
		this.skinParts = ["_group_business","_group_worker","_group_room","_group_config","viewStack","_radio_business","_radio_worker","_radio_room","_radio_config"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.viewStack_i(),this._Group1_i()];
	}
	var _proto = MainTableViewSkin.prototype;

	_proto.viewStack_i = function () {
		var t = new eui.ViewStack();
		this.viewStack = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._group_business_i(),this._group_worker_i(),this._group_room_i(),this._group_config_i()];
		return t;
	};
	_proto._group_business_i = function () {
		var t = new eui.Group();
		this._group_business = t;
		t.percentHeight = 100;
		t.name = "page1";
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.fillColor = 0xb51010;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_worker_i = function () {
		var t = new eui.Group();
		this._group_worker = t;
		t.percentHeight = 100;
		t.name = "page2";
		t.percentWidth = 100;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x651010;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_room_i = function () {
		var t = new eui.Group();
		this._group_room = t;
		t.percentHeight = 100;
		t.name = "page3";
		t.percentWidth = 100;
		t.elementsContent = [this._Rect3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xcccccc;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_config_i = function () {
		var t = new eui.Group();
		this._group_config = t;
		t.percentHeight = 100;
		t.name = "page3";
		t.percentWidth = 100;
		t.elementsContent = [this._Rect4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 120;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect5_i(),this._radio_business_i(),this._radio_worker_i(),this._radio_room_i(),this._radio_config_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0xf7f6f4;
		t.percentHeight = 100;
		t.strokeColor = 0xffffff;
		t.percentWidth = 100;
		return t;
	};
	_proto._radio_business_i = function () {
		var t = new eui.RadioButton();
		this._radio_business = t;
		t.groupName = "G1";
		t.label = "主页";
		t.skinName = "RadioM00";
		t.value = "0";
		t.x = 13.3;
		t.y = 10;
		return t;
	};
	_proto._radio_worker_i = function () {
		var t = new eui.RadioButton();
		this._radio_worker = t;
		t.groupName = "G1";
		t.label = "会员";
		t.skinName = "RadioM01";
		t.value = "1";
		t.x = 192;
		t.y = 10;
		return t;
	};
	_proto._radio_room_i = function () {
		var t = new eui.RadioButton();
		this._radio_room = t;
		t.groupName = "G1";
		t.label = "订单";
		t.skinName = "RadioM02";
		t.value = "2";
		t.x = 371;
		t.y = 10;
		return t;
	};
	_proto._radio_config_i = function () {
		var t = new eui.RadioButton();
		this._radio_config = t;
		t.groupName = "G1";
		t.label = "我的";
		t.skinName = "RadioM03";
		t.value = "3";
		t.x = 549.45;
		t.y = 10;
		return t;
	};
	return MainTableViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myinfo/MyInfoMainSkin.exml'] = window.MyInfoMainSkin = (function (_super) {
	__extends(MyInfoMainSkin, _super);
	function MyInfoMainSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MyInfoMainSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "nofinfo";
		t.y = 150;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.horizontalCenter = -1.5;
		t.size = 50;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "暂无信息";
		t.textAlign = "center";
		t.textColor = 0x191817;
		t.width = 345;
		t.y = 835;
		return t;
	};
	return MyInfoMainSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/perurl/perUrlRoleItem.exml'] = window.perUrlRoleItem = (function (_super) {
	__extends(perUrlRoleItem, _super);
	function perUrlRoleItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = perUrlRoleItem.prototype;

	return perUrlRoleItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopAskNumSkin.exml'] = window.ShopAskNumSkin = (function (_super) {
	__extends(ShopAskNumSkin, _super);
	function ShopAskNumSkin() {
		_super.call(this);
		this.skinParts = ["_radio_num_0","_radio_num_1","_radio_num_2","_radio_num_3","_radio_num_4","_radio_num_5","_radio_num_6","_radio_num_7","_radio_num_8","_btn_more","group_asknum","lab_gukenum","_btn_sure","_btn_cancel","group_more","_radio_time_now","_radio_time_yuyue","group_time","_radio_last_old","_radio_last_new","group_last"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.group_asknum_i(),this.group_more_i(),this.group_time_i(),this.group_last_i()];
	}
	var _proto = ShopAskNumSkin.prototype;

	_proto.group_asknum_i = function () {
		var t = new eui.Group();
		this.group_asknum = t;
		t.height = 1280;
		t.width = 720;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i(),this._Scroller1_i(),this._btn_more_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 2;
		t.ellipseWidth = 2;
		t.fillAlpha = 1;
		t.fillColor = 0xc1ab7c;
		t.percentHeight = 100;
		t.strokeColor = 0xd6c5a2;
		t.strokeWeight = 10;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xbf902a;
		t.height = 880;
		t.horizontalCenter = 0;
		t.strokeColor = 0xd1b736;
		t.strokeWeight = 10;
		t.width = 600;
		t.y = 200;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xd1b736;
		t.height = 60;
		t.horizontalCenter = 0;
		t.strokeColor = 0xaf9744;
		t.strokeWeight = 6;
		t.width = 400;
		t.y = 245;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "请问客官，您几位啊？";
		t.textAlign = "center";
		t.textColor = 0x1e1503;
		t.width = 345;
		t.y = 257;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 400;
		t.skinName = "scrollHasNoBar";
		t.width = 600;
		t.x = 60;
		t.y = 320;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 600;
		t.elementsContent = [this._radio_num_0_i(),this._radio_num_1_i(),this._radio_num_2_i(),this._radio_num_3_i(),this._radio_num_4_i(),this._radio_num_5_i(),this._radio_num_6_i(),this._radio_num_7_i(),this._radio_num_8_i()];
		return t;
	};
	_proto._radio_num_0_i = function () {
		var t = new eui.RadioButton();
		this._radio_num_0 = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.label = "1位";
		t.skinName = "RadioShop01";
		t.value = "0";
		t.width = 300;
		t.x = 100;
		t.y = 30;
		return t;
	};
	_proto._radio_num_1_i = function () {
		var t = new eui.RadioButton();
		this._radio_num_1 = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.label = "2位";
		t.skinName = "RadioShop01";
		t.value = "1";
		t.width = 300;
		t.x = 100;
		t.y = 130;
		return t;
	};
	_proto._radio_num_2_i = function () {
		var t = new eui.RadioButton();
		this._radio_num_2 = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.label = "3位";
		t.skinName = "RadioShop01";
		t.value = "2";
		t.width = 300;
		t.x = 100;
		t.y = 230;
		return t;
	};
	_proto._radio_num_3_i = function () {
		var t = new eui.RadioButton();
		this._radio_num_3 = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.label = "4位";
		t.skinName = "RadioShop01";
		t.value = "3";
		t.width = 300;
		t.x = 100;
		t.y = 330;
		return t;
	};
	_proto._radio_num_4_i = function () {
		var t = new eui.RadioButton();
		this._radio_num_4 = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.label = "5位";
		t.skinName = "RadioShop01";
		t.value = "4";
		t.width = 300;
		t.x = 100;
		t.y = 430;
		return t;
	};
	_proto._radio_num_5_i = function () {
		var t = new eui.RadioButton();
		this._radio_num_5 = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.label = "6位";
		t.skinName = "RadioShop01";
		t.value = "5";
		t.width = 300;
		t.x = 100;
		t.y = 530;
		return t;
	};
	_proto._radio_num_6_i = function () {
		var t = new eui.RadioButton();
		this._radio_num_6 = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.label = "7位";
		t.skinName = "RadioShop01";
		t.value = "6";
		t.width = 300;
		t.x = 100;
		t.y = 630;
		return t;
	};
	_proto._radio_num_7_i = function () {
		var t = new eui.RadioButton();
		this._radio_num_7 = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.label = "8位";
		t.skinName = "RadioShop01";
		t.value = "7";
		t.width = 300;
		t.x = 100;
		t.y = 730;
		return t;
	};
	_proto._radio_num_8_i = function () {
		var t = new eui.RadioButton();
		this._radio_num_8 = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.label = "9位";
		t.skinName = "RadioShop01";
		t.value = "8";
		t.width = 300;
		t.x = 100;
		t.y = 830;
		return t;
	};
	_proto._btn_more_i = function () {
		var t = new eui.Button();
		this._btn_more = t;
		t.height = 60;
		t.label = "更多";
		t.skinName = "BtnNShop01";
		t.width = 400;
		t.x = 156;
		t.y = 775.88;
		return t;
	};
	_proto.group_more_i = function () {
		var t = new eui.Group();
		this.group_more = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect4_i(),this._Rect5_i(),this._Label2_i(),this._Rect6_i(),this.lab_gukenum_i(),this._Label3_i(),this._btn_sure_i(),this._btn_cancel_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.95;
		t.fillColor = 0x5b543f;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 6;
		t.ellipseWidth = 6;
		t.fillAlpha = 1;
		t.fillColor = 0x9e822f;
		t.height = 220;
		t.strokeColor = 0x7c6d42;
		t.strokeWeight = 6;
		t.width = 680;
		t.x = 20;
		t.y = 558;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.bold = true;
		t.size = 36;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "我们一共:";
		t.textAlign = "right";
		t.textColor = 0x141103;
		t.width = 244;
		t.x = 44;
		t.y = 604;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xdbba43;
		t.height = 3;
		t.width = 230;
		t.x = 304;
		t.y = 638;
		return t;
	};
	_proto.lab_gukenum_i = function () {
		var t = new eui.EditableText();
		this.lab_gukenum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x1c1b05;
		t.verticalAlign = "middle";
		t.width = 208;
		t.x = 318;
		t.y = 585;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.bold = true;
		t.size = 36;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "位";
		t.textAlign = "left";
		t.textColor = 0x141103;
		t.width = 60;
		t.x = 545;
		t.y = 604;
		return t;
	};
	_proto._btn_sure_i = function () {
		var t = new eui.Button();
		this._btn_sure = t;
		t.height = 60;
		t.label = "确定";
		t.skinName = "BtnNShop01";
		t.width = 200;
		t.x = 388;
		t.y = 678;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Button();
		this._btn_cancel = t;
		t.height = 60;
		t.label = "取消";
		t.skinName = "BtnNShop01";
		t.width = 200;
		t.x = 130;
		t.y = 678;
		return t;
	};
	_proto.group_time_i = function () {
		var t = new eui.Group();
		this.group_time = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect7_i(),this._Rect8_i(),this._Label4_i(),this._radio_time_now_i(),this._radio_time_yuyue_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.95;
		t.fillColor = 0x5b543f;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 6;
		t.ellipseWidth = 6;
		t.fillAlpha = 1;
		t.fillColor = 0x9e822f;
		t.height = 246;
		t.strokeColor = 0x7c6d42;
		t.strokeWeight = 6;
		t.width = 680;
		t.x = 20;
		t.y = 301;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.bold = true;
		t.size = 36;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "请问我们什么时候开始服务？";
		t.textAlign = "right";
		t.textColor = 0x141103;
		t.width = 530;
		t.x = 69;
		t.y = 340;
		return t;
	};
	_proto._radio_time_now_i = function () {
		var t = new eui.RadioButton();
		this._radio_time_now = t;
		t.anchorOffsetX = 0;
		t.groupName = "G2";
		t.label = "现在服务";
		t.skinName = "RadioShop01";
		t.value = "0";
		t.width = 220;
		t.x = 107;
		t.y = 422.71;
		return t;
	};
	_proto._radio_time_yuyue_i = function () {
		var t = new eui.RadioButton();
		this._radio_time_yuyue = t;
		t.anchorOffsetX = 0;
		t.groupName = "G2";
		t.label = "我要预约";
		t.skinName = "RadioShop01";
		t.value = "1";
		t.width = 220;
		t.x = 389;
		t.y = 422.71;
		return t;
	};
	_proto.group_last_i = function () {
		var t = new eui.Group();
		this.group_last = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect9_i(),this._Rect10_i(),this._Label5_i(),this._radio_last_old_i(),this._radio_last_new_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.95;
		t.fillColor = 0x5b543f;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 6;
		t.ellipseWidth = 6;
		t.fillAlpha = 1;
		t.fillColor = 0x9e822f;
		t.height = 246;
		t.strokeColor = 0x7c6d42;
		t.strokeWeight = 6;
		t.width = 680;
		t.x = 20;
		t.y = 301;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.bold = true;
		t.size = 26;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "检测到您上次正在挑选服务，是否继续？";
		t.textAlign = "right";
		t.textColor = 0x141103;
		t.width = 530;
		t.x = 69;
		t.y = 340;
		return t;
	};
	_proto._radio_last_old_i = function () {
		var t = new eui.RadioButton();
		this._radio_last_old = t;
		t.anchorOffsetX = 0;
		t.groupName = "G3";
		t.label = "继续挑选";
		t.skinName = "RadioShop01";
		t.value = "0";
		t.width = 220;
		t.x = 107;
		t.y = 422.71;
		return t;
	};
	_proto._radio_last_new_i = function () {
		var t = new eui.RadioButton();
		this._radio_last_new = t;
		t.anchorOffsetX = 0;
		t.groupName = "G3";
		t.label = "重新开始";
		t.skinName = "RadioShop01";
		t.value = "1";
		t.width = 220;
		t.x = 389;
		t.y = 422.71;
		return t;
	};
	return ShopAskNumSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopHistoryBillListIDetailSkin.exml'] = window.ShopHistoryBillListIDetailSkin = (function (_super) {
	__extends(ShopHistoryBillListIDetailSkin, _super);
	function ShopHistoryBillListIDetailSkin() {
		_super.call(this);
		this.skinParts = ["_btn_goback","lab_orderstate","lab_companyname","lab_billnumber","labelPerName","listGuke","group_shopMail","group_shoplist","_btn_showmore","_btn_showless","group_buttoninfo","scrollMy"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._btn_goback_i(),this.lab_orderstate_i(),this.scrollMy_i()];
	}
	var _proto = ShopHistoryBillListIDetailSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_goback_i = function () {
		var t = new eui.Button();
		this._btn_goback = t;
		t.anchorOffsetX = 0;
		t.label = "< 返回      ";
		t.skinName = "btnShopHistoryOrder";
		t.x = 10;
		t.y = 3;
		return t;
	};
	_proto.lab_orderstate_i = function () {
		var t = new eui.Label();
		this.lab_orderstate = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "订单已完成";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 360;
		t.x = 22;
		t.y = 69;
		return t;
	};
	_proto.scrollMy_i = function () {
		var t = new eui.Scroller();
		this.scrollMy = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 1120;
		t.skinName = "scrollHasNoBar";
		t.width = 720;
		t.x = 0;
		t.y = 120;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.touchThrough = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect2_i(),this.lab_companyname_i(),this.lab_billnumber_i(),this.group_shoplist_i(),this.group_buttoninfo_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.lab_companyname_i = function () {
		var t = new eui.Label();
		this.lab_companyname = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "店名：爱康推拿（江南西店）";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 360;
		t.x = 25;
		t.y = 45;
		return t;
	};
	_proto.lab_billnumber_i = function () {
		var t = new eui.Label();
		this.lab_billnumber = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "订单号：202012012558654455665";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 360;
		t.x = 25;
		t.y = 93;
		return t;
	};
	_proto.group_shoplist_i = function () {
		var t = new eui.Group();
		this.group_shoplist = t;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 141;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i(),this.labelPerName_i(),this.group_shopMail_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.y = 50;
		return t;
	};
	_proto.labelPerName_i = function () {
		var t = new eui.Label();
		this.labelPerName = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 22;
		t.text = "订单内容";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 25;
		t.y = 15;
		return t;
	};
	_proto.group_shopMail_i = function () {
		var t = new eui.Group();
		this.group_shopMail = t;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 50;
		t.elementsContent = [this._Rect5_i(),this.listGuke_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.listGuke_i = function () {
		var t = new eui.List();
		this.listGuke = t;
		t.itemRendererSkinName = ShopMakeOrderParent;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto.group_buttoninfo_i = function () {
		var t = new eui.Group();
		this.group_buttoninfo = t;
		t.height = 300;
		t.percentWidth = 100;
		t.y = 758;
		t.elementsContent = [this._btn_showmore_i(),this._btn_showless_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._btn_showmore_i = function () {
		var t = new eui.Button();
		this._btn_showmore = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "展示更多";
		t.skinName = "btnShopOrderShowMoreSkin";
		t.y = 15;
		return t;
	};
	_proto._btn_showless_i = function () {
		var t = new eui.Button();
		this._btn_showless = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "点击收起";
		t.skinName = "btnShopOrderShowListSkin";
		t.y = 15;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "备注信息：  比如不要太大力的师傅，要老年一点的。";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 635;
		t.x = 25;
		t.y = 93;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "优惠信息：  本店会员打九折，点击办理";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 635;
		t.x = 25;
		t.y = 143;
		return t;
	};
	return ShopHistoryBillListIDetailSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopHistoryBillListItem.exml'] = window.ShopHistoryBillListItem = (function (_super) {
	__extends(ShopHistoryBillListItem, _super);
	function ShopHistoryBillListItem() {
		_super.call(this);
		this.skinParts = ["group_companypic","lab_itemcompany","lab_itemcoco","lab_itemstate","listorder","scrollMy","lab_itemprice","lab_itemnum","_btn_likethisagin"];
		
		this.height = 320;
		this.width = 710;
		this.elementsContent = [this._Rect1_i(),this._Group3_i()];
	}
	var _proto = ShopHistoryBillListItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.group_companypic_i(),this._Rect2_i(),this.lab_itemcompany_i(),this.lab_itemcoco_i(),this.lab_itemstate_i(),this._Group1_i(),this._Group2_i(),this._btn_likethisagin_i()];
		return t;
	};
	_proto.group_companypic_i = function () {
		var t = new eui.Group();
		this.group_companypic = t;
		t.height = 64;
		t.width = 80;
		t.x = 35;
		t.y = 13;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 72;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 8;
		t.width = 90;
		t.x = 30;
		t.y = 8;
		return t;
	};
	_proto.lab_itemcompany_i = function () {
		var t = new eui.Label();
		this.lab_itemcompany = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "爱康推拿（江南西.）";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 338;
		t.x = 129;
		t.y = 21;
		return t;
	};
	_proto.lab_itemcoco_i = function () {
		var t = new eui.Label();
		this.lab_itemcoco = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = ">";
		t.textAlign = "left";
		t.textColor = 0x757575;
		t.width = 26;
		t.x = 502;
		t.y = 19;
		return t;
	};
	_proto.lab_itemstate_i = function () {
		var t = new eui.Label();
		this.lab_itemstate = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "进行中";
		t.textAlign = "left";
		t.textColor = 0x757575;
		t.width = 103;
		t.x = 573;
		t.y = 21;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.percentWidth = 100;
		t.y = 90;
		t.elementsContent = [this.scrollMy_i()];
		return t;
	};
	_proto.scrollMy_i = function () {
		var t = new eui.Scroller();
		this.scrollMy = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.percentHeight = 100;
		t.skinName = "scrollHasNoBar";
		t.width = 680;
		t.x = 30;
		t.y = 0;
		t.viewport = this.listorder_i();
		return t;
	};
	_proto.listorder_i = function () {
		var t = new eui.List();
		this.listorder = t;
		t.itemRendererSkinName = ShopHistoryBillListItemChild;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 130;
		t.x = 584;
		t.y = 90;
		t.elementsContent = [this._Rect3_i(),this.lab_itemprice_i(),this.lab_itemnum_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.9;
		t.fillColor = 0xf7f7f7;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.lab_itemprice_i = function () {
		var t = new eui.Label();
		this.lab_itemprice = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.height = 28;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "¥86 ";
		t.textAlign = "center";
		t.textColor = 0x141414;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.lab_itemnum_i = function () {
		var t = new eui.Label();
		this.lab_itemnum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.height = 28;
		t.size = 24;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "共3项";
		t.textAlign = "center";
		t.textColor = 0x727171;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 0;
		t.y = 86;
		return t;
	};
	_proto._btn_likethisagin_i = function () {
		var t = new eui.Button();
		this._btn_likethisagin = t;
		t.height = 40;
		t.label = "再来一单";
		t.skinName = "btnShopGiveThisAgin";
		t.width = 120;
		t.x = 556;
		t.y = 262;
		return t;
	};
	return ShopHistoryBillListItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopHistoryBillListItemChild.exml'] = window.ShopHistoryBillListItemChild = (function (_super) {
	__extends(ShopHistoryBillListItemChild, _super);
	function ShopHistoryBillListItemChild() {
		_super.call(this);
		this.skinParts = ["group_img","lab_name"];
		
		this.height = 135;
		this.width = 150;
		this.elementsContent = [this._Rect1_i(),this.group_img_i(),this._Rect2_i(),this.lab_name_i()];
	}
	var _proto = ShopHistoryBillListItemChild.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.group_img_i = function () {
		var t = new eui.Group();
		this.group_img = t;
		t.height = 100;
		t.width = 140;
		t.x = 5;
		t.y = 2;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0;
		t.height = 110;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 10;
		t.width = 154;
		t.x = -2;
		t.y = -2;
		return t;
	};
	_proto.lab_name_i = function () {
		var t = new eui.Label();
		this.lab_name = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.height = 22;
		t.size = 20;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x0c0c0c;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 5;
		t.y = 109;
		return t;
	};
	return ShopHistoryBillListItemChild;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopHistoryBillListSkin.exml'] = window.ShopHistoryBillListSkin = (function (_super) {
	__extends(ShopHistoryBillListSkin, _super);
	function ShopHistoryBillListSkin() {
		_super.call(this);
		this.skinParts = ["listorder","scrollMy"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this.scrollMy_i()];
	}
	var _proto = ShopHistoryBillListSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xededed;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 89;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.height = 101;
		t.percentWidth = 100;
		t.y = -10;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.height = 34;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "历史订单";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 360;
		t.x = 150;
		t.y = 34;
		return t;
	};
	_proto.scrollMy_i = function () {
		var t = new eui.Scroller();
		this.scrollMy = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 1120;
		t.skinName = "scrollHasNoBar";
		t.width = 710;
		t.x = 5;
		t.y = 96;
		t.viewport = this.listorder_i();
		return t;
	};
	_proto.listorder_i = function () {
		var t = new eui.List();
		this.listorder = t;
		t.itemRendererSkinName = ShopHistoryBillListItem;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return ShopHistoryBillListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopHuiYuanListItem.exml'] = window.ShopHuiYuanListItem = (function (_super) {
	__extends(ShopHuiYuanListItem, _super);
	function ShopHuiYuanListItem() {
		_super.call(this);
		this.skinParts = ["lab_typename","lab_cardid","lab_disgrate","lab_remoney","lab_summoney","lab_savepoint"];
		
		this.height = 150;
		this.width = 710;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.lab_typename_i(),this._Label1_i(),this.lab_cardid_i(),this._Label2_i(),this.lab_disgrate_i(),this._Label3_i(),this.lab_remoney_i(),this._Label4_i(),this.lab_summoney_i(),this._Label5_i(),this.lab_savepoint_i()];
	}
	var _proto = ShopHuiYuanListItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x504959;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.strokeColor = 0x84827c;
		t.strokeWeight = 6;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x827e7e;
		t.height = 1;
		t.strokeAlpha = 0.2;
		t.strokeColor = 0xa3a3a3;
		t.strokeWeight = 0.5;
		t.width = 690;
		t.x = 12;
		return t;
	};
	_proto.lab_typename_i = function () {
		var t = new eui.Label();
		this.lab_typename = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "VIP会员九折卡";
		t.textAlign = "left";
		t.textColor = 0xededed;
		t.width = 296;
		t.x = 50;
		t.y = 19;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "卡号:";
		t.textAlign = "right";
		t.textColor = 0xc6c4c4;
		t.width = 80;
		t.x = 344;
		t.y = 19;
		return t;
	};
	_proto.lab_cardid_i = function () {
		var t = new eui.Label();
		this.lab_cardid = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "AKJNX000219";
		t.textAlign = "left";
		t.textColor = 0xd1caca;
		t.width = 268;
		t.x = 430;
		t.y = 19;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "折扣:";
		t.textAlign = "left";
		t.textColor = 0xc9c3c3;
		t.width = 60;
		t.x = 50;
		t.y = 67;
		return t;
	};
	_proto.lab_disgrate_i = function () {
		var t = new eui.Label();
		this.lab_disgrate = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "9.5 折";
		t.textAlign = "left";
		t.textColor = 0xadb5aa;
		t.width = 138;
		t.x = 112;
		t.y = 67;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "余额:";
		t.textAlign = "left";
		t.textColor = 0xc9c3c3;
		t.width = 60;
		t.x = 50;
		t.y = 105;
		return t;
	};
	_proto.lab_remoney_i = function () {
		var t = new eui.Label();
		this.lab_remoney = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "18600";
		t.textAlign = "left";
		t.textColor = 0xc1bfba;
		t.width = 176;
		t.x = 112;
		t.y = 105;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "累积充值:";
		t.textAlign = "right";
		t.textColor = 0xc9c3c3;
		t.width = 110;
		t.x = 345;
		t.y = 67;
		return t;
	};
	_proto.lab_summoney_i = function () {
		var t = new eui.Label();
		this.lab_summoney = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "800";
		t.textAlign = "left";
		t.textColor = 0xadb5aa;
		t.width = 153;
		t.x = 460;
		t.y = 67;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "当前积分:";
		t.textAlign = "right";
		t.textColor = 0xc9c3c3;
		t.width = 110;
		t.x = 345;
		t.y = 105;
		return t;
	};
	_proto.lab_savepoint_i = function () {
		var t = new eui.Label();
		this.lab_savepoint = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xc1bfba;
		t.width = 176;
		t.x = 460;
		t.y = 105;
		return t;
	};
	return ShopHuiYuanListItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopHuiYuanNedPhoneNumber.exml'] = window.ShopHuiYuanNedPhoneNumber = (function (_super) {
	__extends(ShopHuiYuanNedPhoneNumber, _super);
	function ShopHuiYuanNedPhoneNumber() {
		_super.call(this);
		this.skinParts = ["lab_phone","lab_code","_btn_getcode","_btn_sure","group_asknum"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.group_asknum_i()];
	}
	var _proto = ShopHuiYuanNedPhoneNumber.prototype;

	_proto.group_asknum_i = function () {
		var t = new eui.Group();
		this.group_asknum = t;
		t.height = 1280;
		t.width = 720;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i(),this._Label2_i(),this._Rect4_i(),this.lab_phone_i(),this._Label3_i(),this._Rect5_i(),this.lab_code_i(),this._btn_getcode_i(),this._btn_sure_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 2;
		t.ellipseWidth = 2;
		t.fillAlpha = 1;
		t.fillColor = 0xc1ab7c;
		t.percentHeight = 100;
		t.strokeColor = 0xd6c5a2;
		t.strokeWeight = 10;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xbf902a;
		t.height = 880;
		t.horizontalCenter = 0;
		t.strokeColor = 0xd1b736;
		t.strokeWeight = 10;
		t.width = 660;
		t.y = 200;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.3;
		t.fillColor = 0xd1b736;
		t.height = 60;
		t.horizontalCenter = 0;
		t.strokeColor = 0xaf9744;
		t.strokeWeight = 2;
		t.width = 400;
		t.y = 284;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.horizontalCenter = 0.5;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "请先绑定手机号码";
		t.textAlign = "center";
		t.textColor = 0x1e1503;
		t.width = 345;
		t.y = 296;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.bold = true;
		t.size = 36;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "手机号:";
		t.textAlign = "right";
		t.textColor = 0x141103;
		t.width = 140;
		t.x = 40;
		t.y = 459;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xdbba43;
		t.height = 3;
		t.width = 463;
		t.x = 188;
		t.y = 496;
		return t;
	};
	_proto.lab_phone_i = function () {
		var t = new eui.EditableText();
		this.lab_phone = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x1c1b05;
		t.verticalAlign = "middle";
		t.width = 440;
		t.x = 202;
		t.y = 443;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.bold = true;
		t.size = 36;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "验证码:";
		t.textAlign = "right";
		t.textColor = 0x141103;
		t.width = 140;
		t.x = 40;
		t.y = 563;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xdbba43;
		t.height = 3;
		t.width = 247;
		t.x = 188;
		t.y = 600;
		return t;
	};
	_proto.lab_code_i = function () {
		var t = new eui.EditableText();
		this.lab_code = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x1c1b05;
		t.verticalAlign = "middle";
		t.width = 226;
		t.x = 202;
		t.y = 547;
		return t;
	};
	_proto._btn_getcode_i = function () {
		var t = new eui.Button();
		this._btn_getcode = t;
		t.height = 60;
		t.label = "获取";
		t.skinName = "BtnNShop03";
		t.width = 200;
		t.x = 453;
		t.y = 542;
		return t;
	};
	_proto._btn_sure_i = function () {
		var t = new eui.Button();
		this._btn_sure = t;
		t.height = 70;
		t.label = "绑定";
		t.skinName = "BtnNShop01";
		t.width = 380;
		t.x = 174;
		t.y = 701;
		return t;
	};
	return ShopHuiYuanNedPhoneNumber;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopHuiYuanPanel.exml'] = window.ShopHuiYuanPanel = (function (_super) {
	__extends(ShopHuiYuanPanel, _super);
	function ShopHuiYuanPanel() {
		_super.call(this);
		this.skinParts = ["lab_companyname","_btn_addnew","listItem_h","scrollMy_h"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this._Label2_i(),this.scrollMy_h_i()];
	}
	var _proto = ShopHuiYuanPanel.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0xcccccc;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.lab_companyname_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x4e4c51;
		t.height = 110;
		t.strokeColor = 0x9e9c96;
		t.strokeWeight = 6;
		t.width = 710;
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto.lab_companyname_i = function () {
		var t = new eui.Label();
		this.lab_companyname = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "爱康推拿";
		t.textAlign = "center";
		t.textColor = 0xc9c7c1;
		t.verticalAlign = "middle";
		t.width = 360;
		t.x = 150;
		t.y = 39;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.percentWidth = 100;
		t.y = 110;
		t.elementsContent = [this._Rect3_i(),this._Label1_i(),this._btn_addnew_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x351a35;
		t.height = 110;
		t.strokeColor = 0x9e9c96;
		t.strokeWeight = 6;
		t.width = 710;
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.horizontalCenter = -217;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "我的会员卡";
		t.textAlign = "left";
		t.textColor = 0xc9c7c1;
		t.verticalAlign = "middle";
		t.width = 180;
		t.y = 39;
		return t;
	};
	_proto._btn_addnew_i = function () {
		var t = new eui.Button();
		this._btn_addnew = t;
		t.height = 60;
		t.label = "+";
		t.skinName = "BtnNShop02";
		t.width = 200;
		t.x = 499;
		t.y = 22;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "您在本店还没有会员卡，点击\"+\"办理";
		t.textAlign = "center";
		t.textColor = 0x333027;
		t.verticalAlign = "middle";
		t.width = 598;
		t.x = 62;
		t.y = 245;
		return t;
	};
	_proto.scrollMy_h_i = function () {
		var t = new eui.Scroller();
		this.scrollMy_h = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 1120;
		t.skinName = "scrollHasNoBar";
		t.width = 710;
		t.x = 5;
		t.y = 218;
		t.viewport = this.listItem_h_i();
		return t;
	};
	_proto.listItem_h_i = function () {
		var t = new eui.List();
		this.listItem_h = t;
		t.itemRendererSkinName = ShopHuiYuanListItem;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 6;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return ShopHuiYuanPanel;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopMakeInfoItem.exml'] = window.ShopMakeInfoItem = (function (_super) {
	__extends(ShopMakeInfoItem, _super);
	function ShopMakeInfoItem() {
		_super.call(this);
		this.skinParts = ["group_img","lab_itemname","lab_itemtime","lab_itemprice","_btn_del","lab_waitetime","lab_num"];
		
		this.height = 150;
		this.width = 710;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Group1_i(),this.lab_itemname_i(),this.lab_itemtime_i(),this.lab_itemprice_i(),this._btn_del_i(),this.lab_waitetime_i(),this.lab_num_i()];
	}
	var _proto = ShopMakeInfoItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf9f8f2;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.strokeWeight = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x827e7e;
		t.height = 1;
		t.strokeAlpha = 0.2;
		t.strokeColor = 0xa3a3a3;
		t.strokeWeight = 0.5;
		t.width = 690;
		t.x = 12;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 23;
		t.y = 20;
		t.elementsContent = [this.group_img_i(),this._Rect3_i()];
		return t;
	};
	_proto.group_img_i = function () {
		var t = new eui.Group();
		this.group_img = t;
		t.height = 100;
		t.width = 140;
		t.x = 5;
		t.y = 2;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0;
		t.height = 110;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 10;
		t.width = 154;
		t.x = -2;
		t.y = -2;
		return t;
	};
	_proto.lab_itemname_i = function () {
		var t = new eui.Label();
		this.lab_itemname = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "中式穴位推拿或沐足二选一";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 481;
		t.x = 185;
		t.y = 19;
		return t;
	};
	_proto.lab_itemtime_i = function () {
		var t = new eui.Label();
		this.lab_itemtime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "60分钟|养生";
		t.textAlign = "left";
		t.textColor = 0x3d3d3d;
		t.width = 408;
		t.x = 185;
		t.y = 70;
		return t;
	};
	_proto.lab_itemprice_i = function () {
		var t = new eui.Label();
		this.lab_itemprice = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 28;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "¥86 ";
		t.textAlign = "left";
		t.textColor = 0xd82020;
		t.width = 176;
		t.x = 185;
		t.y = 100;
		return t;
	};
	_proto._btn_del_i = function () {
		var t = new eui.Button();
		this._btn_del = t;
		t.label = "x";
		t.skinName = "BtnShopItemDel02";
		t.x = 634;
		t.y = 102;
		return t;
	};
	_proto.lab_waitetime_i = function () {
		var t = new eui.Label();
		this.lab_waitetime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "9月25日21点15分";
		t.textAlign = "right";
		t.textColor = 0x706f6f;
		t.width = 205;
		t.x = 325;
		t.y = 108;
		return t;
	};
	_proto.lab_num_i = function () {
		var t = new eui.Label();
		this.lab_num = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "12个";
		t.textAlign = "right";
		t.textColor = 0x353535;
		t.verticalAlign = "middle";
		t.width = 76;
		t.x = 534;
		t.y = 106;
		return t;
	};
	return ShopMakeInfoItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopMakeInfoListSkin.exml'] = window.ShopMakeInfoListSkin = (function (_super) {
	__extends(ShopMakeInfoListSkin, _super);
	function ShopMakeInfoListSkin() {
		_super.call(this);
		this.skinParts = ["rect_bake_all","labelPerName","listGuke","scrollMy","group_shoplist"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = ShopMakeInfoListSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.touchThrough = false;
		t.percentWidth = 100;
		t.elementsContent = [this.rect_bake_all_i(),this.group_shoplist_i()];
		return t;
	};
	_proto.rect_bake_all_i = function () {
		var t = new eui.Rect();
		this.rect_bake_all = t;
		t.fillAlpha = 0.6;
		t.fillColor = 0x333131;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.group_shoplist_i = function () {
		var t = new eui.Group();
		this.group_shoplist = t;
		t.bottom = 0;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.labelPerName_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 0.8;
		t.fillColor = 0xf7e6b2;
		t.percentHeight = 100;
		t.strokeAlpha = 0.6;
		t.strokeColor = 0x070404;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.y = 60;
		return t;
	};
	_proto.labelPerName_i = function () {
		var t = new eui.Label();
		this.labelPerName = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "注意：每一个服务对象会有一名服务人员";
		t.textAlign = "center";
		t.textColor = 0xad3a29;
		t.verticalAlign = "middle";
		t.width = 520;
		t.y = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 60;
		t.elementsContent = [this._Rect3_i(),this.scrollMy_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.scrollMy_i = function () {
		var t = new eui.Scroller();
		this.scrollMy = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.skinName = "scrollHasNoBar";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.viewport = this.listGuke_i();
		return t;
	};
	_proto.listGuke_i = function () {
		var t = new eui.List();
		this.listGuke = t;
		t.itemRendererSkinName = ShopMakeInfoParent;
		t.width = 680;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	return ShopMakeInfoListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopMakeInfoParent.exml'] = window.ShopMakeInfoParent = (function (_super) {
	__extends(ShopMakeInfoParent, _super);
	function ShopMakeInfoParent() {
		_super.call(this);
		this.skinParts = ["rect_back1","rect_back2","rect_back3","_radio_sevidx","listShopGukeIdx","_btn_addnew","group_addNew"];
		
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ShopMakeInfoParent.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rect_back1_i(),this.rect_back2_i(),this.rect_back3_i(),this._radio_sevidx_i(),this.listShopGukeIdx_i(),this.group_addNew_i()];
		return t;
	};
	_proto.rect_back1_i = function () {
		var t = new eui.Rect();
		this.rect_back1 = t;
		t.fillAlpha = 1;
		t.fillColor = 0xf2f0ed;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.rect_back2_i = function () {
		var t = new eui.Rect();
		this.rect_back2 = t;
		t.fillColor = 0xffffff;
		t.horizontalCenter = 0;
		t.strokeColor = 0x424242;
		t.percentWidth = 100;
		t.y = 60;
		return t;
	};
	_proto.rect_back3_i = function () {
		var t = new eui.Rect();
		this.rect_back3 = t;
		t.fillColor = 0xffffff;
		t.horizontalCenter = 0;
		t.strokeColor = 0x424242;
		t.percentWidth = 100;
		t.y = 60;
		return t;
	};
	_proto._radio_sevidx_i = function () {
		var t = new eui.RadioButton();
		this._radio_sevidx = t;
		t.anchorOffsetX = 0;
		t.label = "服务我自己";
		t.skinName = "RadioShopSel02";
		t.x = 18;
		t.y = 10;
		return t;
	};
	_proto.listShopGukeIdx_i = function () {
		var t = new eui.List();
		this.listShopGukeIdx = t;
		t.itemRendererSkinName = ShopMakeInfoItem;
		t.x = 5;
		t.y = 60;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0.5;
		t.horizontalAlign = "left";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto.group_addNew_i = function () {
		var t = new eui.Group();
		this.group_addNew = t;
		t.height = 60;
		t.percentWidth = 100;
		t.y = 527;
		t.elementsContent = [this._btn_addnew_i()];
		return t;
	};
	_proto._btn_addnew_i = function () {
		var t = new eui.Button();
		this._btn_addnew = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "+";
		t.skinName = "btnShopMakeAddCintinue";
		t.y = 0;
		return t;
	};
	return ShopMakeInfoParent;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopMakeOrderItem.exml'] = window.ShopMakeOrderItem = (function (_super) {
	__extends(ShopMakeOrderItem, _super);
	function ShopMakeOrderItem() {
		_super.call(this);
		this.skinParts = ["group_img","lab_itemname","lab_itemtime","lab_itemprice","lab_waitetime","lab_num","_btn_del"];
		
		this.height = 150;
		this.width = 710;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Group1_i(),this.lab_itemname_i(),this.lab_itemtime_i(),this.lab_itemprice_i(),this.lab_waitetime_i(),this.lab_num_i(),this._btn_del_i()];
	}
	var _proto = ShopMakeOrderItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.strokeWeight = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x827e7e;
		t.height = 1;
		t.strokeAlpha = 0.2;
		t.strokeColor = 0xa3a3a3;
		t.strokeWeight = 0.5;
		t.width = 690;
		t.x = 12;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 23;
		t.y = 20;
		t.elementsContent = [this.group_img_i(),this._Rect3_i()];
		return t;
	};
	_proto.group_img_i = function () {
		var t = new eui.Group();
		this.group_img = t;
		t.height = 100;
		t.width = 140;
		t.x = 5;
		t.y = 2;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0;
		t.height = 110;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 10;
		t.width = 154;
		t.x = -2;
		t.y = -2;
		return t;
	};
	_proto.lab_itemname_i = function () {
		var t = new eui.Label();
		this.lab_itemname = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "中式穴位推拿或沐足二选一";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 438;
		t.x = 185;
		t.y = 19;
		return t;
	};
	_proto.lab_itemtime_i = function () {
		var t = new eui.Label();
		this.lab_itemtime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "60分钟|养生";
		t.textAlign = "left";
		t.textColor = 0x3d3d3d;
		t.width = 323;
		t.x = 185;
		t.y = 70;
		return t;
	};
	_proto.lab_itemprice_i = function () {
		var t = new eui.Label();
		this.lab_itemprice = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 28;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "¥86 ";
		t.textAlign = "left";
		t.textColor = 0x0c0b0b;
		t.width = 155;
		t.x = 542;
		t.y = 61;
		return t;
	};
	_proto.lab_waitetime_i = function () {
		var t = new eui.Label();
		this.lab_waitetime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "9月25日21点15分";
		t.textAlign = "left";
		t.textColor = 0x706f6f;
		t.width = 205;
		t.x = 185;
		t.y = 108;
		return t;
	};
	_proto.lab_num_i = function () {
		var t = new eui.Label();
		this.lab_num = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "12个";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.verticalAlign = "middle";
		t.width = 76;
		t.x = 398;
		t.y = 106;
		return t;
	};
	_proto._btn_del_i = function () {
		var t = new eui.Button();
		this._btn_del = t;
		t.label = "x";
		t.skinName = "BtnShopItemDel02";
		t.x = 634;
		t.y = 102;
		return t;
	};
	return ShopMakeOrderItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopMakeOrderListSkin.exml'] = window.ShopMakeOrderListSkin = (function (_super) {
	__extends(ShopMakeOrderListSkin, _super);
	function ShopMakeOrderListSkin() {
		_super.call(this);
		this.skinParts = ["_btn_backtoshop","lab_companyname","lab_billnumber","labelPerName","listGuke","group_shopMail","group_shoplist","_btn_showmore","_btn_showless","lab_codestart","lab_codesfinish","group_buttoninfo","scrollMy"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.scrollMy_i()];
	}
	var _proto = ShopMakeOrderListSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.scrollMy_i = function () {
		var t = new eui.Scroller();
		this.scrollMy = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 1120;
		t.skinName = "scrollHasNoBar";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.touchThrough = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect2_i(),this._btn_backtoshop_i(),this.lab_companyname_i(),this.lab_billnumber_i(),this.group_shoplist_i(),this.group_buttoninfo_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_backtoshop_i = function () {
		var t = new eui.Button();
		this._btn_backtoshop = t;
		t.anchorOffsetX = 0;
		t.label = "<";
		t.skinName = "BtnBack03";
		t.x = 15;
		t.y = 52;
		return t;
	};
	_proto.lab_companyname_i = function () {
		var t = new eui.Label();
		this.lab_companyname = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "店名：爱康推拿（江南西店）";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 360;
		t.x = 188;
		t.y = 45;
		return t;
	};
	_proto.lab_billnumber_i = function () {
		var t = new eui.Label();
		this.lab_billnumber = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "订单号：202012012558654455665";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 360;
		t.x = 188;
		t.y = 93;
		return t;
	};
	_proto.group_shoplist_i = function () {
		var t = new eui.Group();
		this.group_shoplist = t;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 141;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i(),this.labelPerName_i(),this.group_shopMail_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.y = 50;
		return t;
	};
	_proto.labelPerName_i = function () {
		var t = new eui.Label();
		this.labelPerName = t;
		t.style = "l_brown_1";
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.size = 22;
		t.text = "订单内容";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 25;
		t.y = 15;
		return t;
	};
	_proto.group_shopMail_i = function () {
		var t = new eui.Group();
		this.group_shopMail = t;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 50;
		t.elementsContent = [this._Rect5_i(),this.listGuke_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.listGuke_i = function () {
		var t = new eui.List();
		this.listGuke = t;
		t.itemRendererSkinName = ShopMakeOrderParent;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto.group_buttoninfo_i = function () {
		var t = new eui.Group();
		this.group_buttoninfo = t;
		t.height = 200;
		t.percentWidth = 100;
		t.y = 775;
		t.elementsContent = [this._btn_showmore_i(),this._btn_showless_i(),this._Label1_i(),this.lab_codestart_i(),this._Label2_i(),this.lab_codesfinish_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._btn_showmore_i = function () {
		var t = new eui.Button();
		this._btn_showmore = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "展示更多";
		t.skinName = "btnShopOrderShowMoreSkin";
		t.y = 15;
		return t;
	};
	_proto._btn_showless_i = function () {
		var t = new eui.Button();
		this._btn_showless = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "点击收起";
		t.skinName = "btnShopOrderShowListSkin";
		t.y = 15;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.size = 28;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "服务验证码： 开始码";
		t.textAlign = "left";
		t.textColor = 0x203834;
		t.width = 282;
		t.x = 25;
		t.y = 86;
		return t;
	};
	_proto.lab_codestart_i = function () {
		var t = new eui.Label();
		this.lab_codestart = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.size = 28;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "4792";
		t.textAlign = "center";
		t.textColor = 0x799920;
		t.width = 94;
		t.x = 297;
		t.y = 86;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.size = 28;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "结束码";
		t.textAlign = "left";
		t.textColor = 0x203834;
		t.width = 100;
		t.x = 431;
		t.y = 86;
		return t;
	};
	_proto.lab_codesfinish_i = function () {
		var t = new eui.Label();
		this.lab_codesfinish = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.size = 28;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "4792";
		t.textAlign = "center";
		t.textColor = 0x995620;
		t.width = 94;
		t.x = 519;
		t.y = 86;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "备注信息：  比如不要太大力的师傅，要老年一点的。";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 635;
		t.x = 25;
		t.y = 152;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "优惠信息：  本店会员打九折，点击办理";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 635;
		t.x = 25;
		t.y = 217;
		return t;
	};
	return ShopMakeOrderListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopMakeOrderParent.exml'] = window.ShopMakeOrderParent = (function (_super) {
	__extends(ShopMakeOrderParent, _super);
	function ShopMakeOrderParent() {
		_super.call(this);
		this.skinParts = ["rect_back1","rect_back2","rect_back3","_radio_sevidx","lab_waitestate","listShopGukeIdx","_btn_addnew","group_addNew"];
		
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ShopMakeOrderParent.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rect_back1_i(),this.rect_back2_i(),this.rect_back3_i(),this._radio_sevidx_i(),this.lab_waitestate_i(),this.listShopGukeIdx_i(),this.group_addNew_i()];
		return t;
	};
	_proto.rect_back1_i = function () {
		var t = new eui.Rect();
		this.rect_back1 = t;
		t.fillAlpha = 1;
		t.fillColor = 0xf2f0ed;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.rect_back2_i = function () {
		var t = new eui.Rect();
		this.rect_back2 = t;
		t.fillColor = 0xffffff;
		t.horizontalCenter = 0;
		t.strokeColor = 0x424242;
		t.percentWidth = 100;
		t.y = 60;
		return t;
	};
	_proto.rect_back3_i = function () {
		var t = new eui.Rect();
		this.rect_back3 = t;
		t.fillColor = 0xffffff;
		t.horizontalCenter = 0;
		t.strokeColor = 0x424242;
		t.percentWidth = 100;
		t.y = 60;
		return t;
	};
	_proto._radio_sevidx_i = function () {
		var t = new eui.RadioButton();
		this._radio_sevidx = t;
		t.anchorOffsetX = 0;
		t.label = "服务我自己";
		t.skinName = "RadioShopSel02";
		t.x = 18;
		t.y = 10;
		return t;
	};
	_proto.lab_waitestate_i = function () {
		var t = new eui.Label();
		this.lab_waitestate = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.stroke = 0.5;
		t.strokeColor = 0x000000;
		t.text = "等待中  技师全忙";
		t.textAlign = "left";
		t.textColor = 0xd83457;
		t.verticalAlign = "middle";
		t.width = 358;
		t.x = 296;
		t.y = 22;
		return t;
	};
	_proto.listShopGukeIdx_i = function () {
		var t = new eui.List();
		this.listShopGukeIdx = t;
		t.itemRendererSkinName = ShopMakeOrderItem;
		t.x = 5;
		t.y = 60;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0.5;
		t.horizontalAlign = "left";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto.group_addNew_i = function () {
		var t = new eui.Group();
		this.group_addNew = t;
		t.height = 60;
		t.percentWidth = 100;
		t.y = 527;
		t.elementsContent = [this._btn_addnew_i()];
		return t;
	};
	_proto._btn_addnew_i = function () {
		var t = new eui.Button();
		this._btn_addnew = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "+";
		t.skinName = "btnShopMakeAddCintinue";
		t.y = 0;
		return t;
	};
	return ShopMakeOrderParent;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopOrderFloatingBall.exml'] = window.ShopOrderFloatingBall = (function (_super) {
	__extends(ShopOrderFloatingBall, _super);
	function ShopOrderFloatingBall() {
		_super.call(this);
		this.skinParts = ["group_shopmakelist","_btn_bot_left","_btn_bot_right","lab_redbot_num"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.group_shopmakelist_i(),this._Group1_i()];
	}
	var _proto = ShopOrderFloatingBall.prototype;

	_proto.group_shopmakelist_i = function () {
		var t = new eui.Group();
		this.group_shopmakelist = t;
		t.percentHeight = 100;
		t.touchThrough = true;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 60;
		t.height = 105;
		t.horizontalCenter = 0;
		t.width = 660;
		t.elementsContent = [this._btn_bot_left_i(),this._btn_bot_right_i(),this.lab_redbot_num_i()];
		return t;
	};
	_proto._btn_bot_left_i = function () {
		var t = new eui.Button();
		this._btn_bot_left = t;
		t.label = "¥86 ";
		t.skinName = "btnShopbotLeft";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_bot_right_i = function () {
		var t = new eui.Button();
		this._btn_bot_right = t;
		t.label = "下单";
		t.right = 0;
		t.skinName = "btnShopbotRight";
		t.y = 5;
		return t;
	};
	_proto.lab_redbot_num_i = function () {
		var t = new eui.Label();
		this.lab_redbot_num = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 20;
		t.size = 16;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 60;
		t.x = 98;
		t.y = 31.67;
		return t;
	};
	return ShopOrderFloatingBall;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopOrderListSkin.exml'] = window.ShopOrderListSkin = (function (_super) {
	__extends(ShopOrderListSkin, _super);
	function ShopOrderListSkin() {
		_super.call(this);
		this.skinParts = ["_btn_back","pic_itempic","lab_itemname","lab_itemtime","lab_itemprice","_btn_order","group_add"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._btn_back_i(),this._Group2_i()];
	}
	var _proto = ShopOrderListSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf9f9f9;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.strokeWeight = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Button();
		this._btn_back = t;
		t.height = 50;
		t.label = "《——";
		t.skinName = "BtnN11Skin";
		t.width = 120;
		t.x = 16;
		t.y = 5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.y = 60;
		t.elementsContent = [this._Group1_i(),this.group_add_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 720;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.pic_itempic_i(),this.lab_itemname_i(),this.lab_itemtime_i(),this.lab_itemprice_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0x757272;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pic_itempic_i = function () {
		var t = new eui.Image();
		this.pic_itempic = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 164;
		t.x = 18;
		return t;
	};
	_proto.lab_itemname_i = function () {
		var t = new eui.Label();
		this.lab_itemname = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "中式穴位推拿或沐足二选一";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 483;
		t.x = 196;
		t.y = 43;
		return t;
	};
	_proto.lab_itemtime_i = function () {
		var t = new eui.Label();
		this.lab_itemtime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "75分钟|养生";
		t.textAlign = "left";
		t.textColor = 0x161616;
		t.width = 280;
		t.x = 196;
		t.y = 85;
		return t;
	};
	_proto.lab_itemprice_i = function () {
		var t = new eui.Label();
		this.lab_itemprice = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 28;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "¥86 ";
		t.textAlign = "left";
		t.textColor = 0xd82020;
		t.width = 280;
		t.x = 196;
		t.y = 124;
		return t;
	};
	_proto.group_add_i = function () {
		var t = new eui.Group();
		this.group_add = t;
		t.height = 180;
		t.width = 720;
		t.y = 938;
		t.elementsContent = [this._Rect3_i(),this._btn_order_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0x757272;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_order_i = function () {
		var t = new eui.Button();
		this._btn_order = t;
		t.anchorOffsetX = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.label = "添加";
		t.skinName = "BtnN10Skin";
		t.width = 360;
		t.y = 44;
		return t;
	};
	return ShopOrderListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopOredrSkin.exml'] = window.ShopOredrSkin = (function (_super) {
	__extends(ShopOredrSkin, _super);
	function ShopOredrSkin() {
		_super.call(this);
		this.skinParts = ["botMov","lab_itemname","_radio_wo","_radio_tb","lab_haveset_selhid","_radio_lun","_radio_nan","_radio_nv","_radio_dian","_btn_worksel","_btn_querytime","_radio_lev_no","_radio_lev_sel","lab_haveset_settime","_btn_time_MA","lab_time_mou","_btn_time_MD","_btn_time_DA","lab_time_day","_btn_time_DD","_btn_time_HA","lab_time_hou","_btn_time_HD","_btn_time_FA","lab_time_min","_btn_time_FD","_btn_time_NA","lab_time_num","_btn_time_ND","lab_wntm","group_time","lab_sel_scrip","lab_itemprice","_btn_order","group_add","_btn_back","rect_bot"];
		
		this.height = 1280;
		this.width = 720;
		this.botMov_i();
		this.elementsContent = [this._Rect1_i(),this._Group11_i()];
		
		eui.Binding.$bindProperties(this, ["rect_bot"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [458.5],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [833.23],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [390],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [800],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [232.21],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [918],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [140],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [1070.31],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
	}
	var _proto = ShopOredrSkin.prototype;

	_proto.botMov_i = function () {
		var t = new egret.tween.TweenGroup();
		this.botMov = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._Wait1_i(),this._Set2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x514f4f;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.strokeWeight = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 939;
		t.percentWidth = 100;
		t.y = 88;
		t.elementsContent = [this._Rect2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.group_time_i(),this.group_add_i(),this._btn_back_i(),this.rect_bot_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xf9f7f7;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.y = -1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 720;
		t.y = 0;
		t.elementsContent = [this.lab_itemname_i()];
		return t;
	};
	_proto.lab_itemname_i = function () {
		var t = new eui.Label();
		this.lab_itemname = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "中式穴位推拿或沐足二选一";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 483;
		t.y = 18.48;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 720;
		t.y = 60;
		t.elementsContent = [this._Rect3_i(),this._Label1_i(),this._radio_wo_i(),this._radio_tb_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0x757272;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "服务对象";
		t.textAlign = "left";
		t.textColor = 0x565454;
		t.width = 120;
		t.x = 16;
		t.y = 39;
		return t;
	};
	_proto._radio_wo_i = function () {
		var t = new eui.RadioButton();
		this._radio_wo = t;
		t.anchorOffsetX = 0;
		t.groupName = "G3";
		t.height = 60;
		t.label = "服务自己";
		t.skinName = "RadioL028";
		t.value = "0";
		t.width = 200;
		t.x = 150;
		t.y = 20;
		return t;
	};
	_proto._radio_tb_i = function () {
		var t = new eui.RadioButton();
		this._radio_tb = t;
		t.anchorOffsetX = 0;
		t.groupName = "G3";
		t.height = 60;
		t.label = "服务同伴";
		t.skinName = "RadioL028";
		t.value = "1";
		t.width = 200;
		t.x = 402;
		t.y = 20;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 325;
		t.width = 720;
		t.y = 165;
		t.elementsContent = [this._Label2_i(),this.lab_haveset_selhid_i(),this._radio_lun_i(),this._radio_nan_i(),this._radio_nv_i(),this._radio_dian_i(),this._btn_worksel_i(),this._btn_querytime_i(),this._Rect4_i(),this._Label3_i(),this._radio_lev_no_i(),this._radio_lev_sel_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "选择技师";
		t.textAlign = "left";
		t.textColor = 0x565454;
		t.width = 120;
		t.x = 16;
		t.y = 20;
		return t;
	};
	_proto.lab_haveset_selhid_i = function () {
		var t = new eui.Label();
		this.lab_haveset_selhid = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 18;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "只能在所选服务对象的第一项里设定";
		t.textAlign = "right";
		t.textColor = 0x704d4d;
		t.width = 316;
		t.x = 386;
		t.y = 21.44;
		return t;
	};
	_proto._radio_lun_i = function () {
		var t = new eui.RadioButton();
		this._radio_lun = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.height = 60;
		t.label = "店家安排";
		t.skinName = "RadioL028";
		t.value = "0";
		t.width = 200;
		t.x = 18;
		t.y = 65.4;
		return t;
	};
	_proto._radio_nan_i = function () {
		var t = new eui.RadioButton();
		this._radio_nan = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.height = 60;
		t.label = "要男技师";
		t.skinName = "RadioL028";
		t.value = "1";
		t.width = 200;
		t.x = 248;
		t.y = 65.4;
		return t;
	};
	_proto._radio_nv_i = function () {
		var t = new eui.RadioButton();
		this._radio_nv = t;
		t.anchorOffsetX = 0;
		t.groupName = "G1";
		t.height = 60;
		t.label = "要女技师";
		t.skinName = "RadioL028";
		t.value = "2";
		t.width = 200;
		t.x = 478.5;
		t.y = 65.4;
		return t;
	};
	_proto._radio_dian_i = function () {
		var t = new eui.RadioButton();
		this._radio_dian = t;
		t.groupName = "G1";
		t.height = 60;
		t.label = "我要点钟";
		t.skinName = "RadioL028";
		t.value = "3";
		t.width = 200;
		t.x = 16;
		t.y = 148.28;
		return t;
	};
	_proto._btn_worksel_i = function () {
		var t = new eui.Button();
		this._btn_worksel = t;
		t.height = 60;
		t.label = "选择技师";
		t.skinName = "BtnN9Skin";
		t.width = 200;
		t.x = 248.5;
		t.y = 148.28;
		return t;
	};
	_proto._btn_querytime_i = function () {
		var t = new eui.Button();
		this._btn_querytime = t;
		t.height = 60;
		t.label = "查看预约";
		t.skinName = "BtnN9Skin";
		t.width = 200;
		t.x = 481;
		t.y = 148.28;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.fillColor = 0xd8d7cb;
		t.height = 90;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 230;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "技师等级";
		t.textAlign = "left";
		t.textColor = 0x565454;
		t.width = 120;
		t.x = 16;
		t.y = 262.12;
		return t;
	};
	_proto._radio_lev_no_i = function () {
		var t = new eui.RadioButton();
		this._radio_lev_no = t;
		t.anchorOffsetX = 0;
		t.groupName = "G50";
		t.height = 60;
		t.label = "没有要求";
		t.skinName = "RadioL028";
		t.value = "0";
		t.width = 200;
		t.x = 150;
		t.y = 243.12;
		return t;
	};
	_proto._radio_lev_sel_i = function () {
		var t = new eui.RadioButton();
		this._radio_lev_sel = t;
		t.anchorOffsetX = 0;
		t.groupName = "G50";
		t.height = 60;
		t.label = "选择等级";
		t.skinName = "RadioL028";
		t.value = "0";
		t.width = 200;
		t.x = 402;
		t.y = 243.12;
		return t;
	};
	_proto.group_time_i = function () {
		var t = new eui.Group();
		this.group_time = t;
		t.height = 270;
		t.width = 720;
		t.y = 494;
		t.elementsContent = [this._Rect5_i(),this._Label4_i(),this.lab_haveset_settime_i(),this._Group8_i(),this._Group10_i(),this.lab_wntm_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0x757272;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "时间钟次";
		t.textAlign = "left";
		t.textColor = 0x565454;
		t.width = 170;
		t.x = 16;
		t.y = 20;
		return t;
	};
	_proto.lab_haveset_settime_i = function () {
		var t = new eui.Label();
		this.lab_haveset_settime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 18;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "只能在所选服务对象的第一项里设定";
		t.textAlign = "right";
		t.textColor = 0x704d4d;
		t.width = 316;
		t.x = 386;
		t.y = 26;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 80;
		t.y = 70;
		t.elementsContent = [this._Rect6_i(),this._Label5_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.6;
		t.fillColor = 0xcccccc;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "开始时间";
		t.textAlign = "center";
		t.textColor = 0x444444;
		t.verticalAlign = "middle";
		t.width = 170;
		t.y = 2;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 90;
		t.x = 0;
		t.y = 40;
		t.elementsContent = [this._Rect7_i(),this._btn_time_MA_i(),this.lab_time_mou_i(),this._btn_time_MD_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1d1d1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_time_MA_i = function () {
		var t = new eui.Button();
		this._btn_time_MA = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "+";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_time_mou_i = function () {
		var t = new eui.Label();
		this.lab_time_mou = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "9月";
		t.textAlign = "center";
		t.textColor = 0x352f2f;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._btn_time_MD_i = function () {
		var t = new eui.Button();
		this._btn_time_MD = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 45;
		t.label = "-";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 90;
		t.x = 100;
		t.y = 40;
		t.elementsContent = [this._Rect8_i(),this._btn_time_DA_i(),this.lab_time_day_i(),this._btn_time_DD_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1d1d1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_time_DA_i = function () {
		var t = new eui.Button();
		this._btn_time_DA = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "+";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_time_day_i = function () {
		var t = new eui.Label();
		this.lab_time_day = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "21日";
		t.textAlign = "center";
		t.textColor = 0x352f2f;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._btn_time_DD_i = function () {
		var t = new eui.Button();
		this._btn_time_DD = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 45;
		t.label = "-";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 90;
		t.x = 200;
		t.y = 40;
		t.elementsContent = [this._Rect9_i(),this._btn_time_HA_i(),this.lab_time_hou_i(),this._btn_time_HD_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1d1d1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_time_HA_i = function () {
		var t = new eui.Button();
		this._btn_time_HA = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "+";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_time_hou_i = function () {
		var t = new eui.Label();
		this.lab_time_hou = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "14点";
		t.textAlign = "center";
		t.textColor = 0x352f2f;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._btn_time_HD_i = function () {
		var t = new eui.Button();
		this._btn_time_HD = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 45;
		t.label = "-";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 90;
		t.x = 300;
		t.y = 40;
		t.elementsContent = [this._Rect10_i(),this._btn_time_FA_i(),this.lab_time_min_i(),this._btn_time_FD_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1d1d1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_time_FA_i = function () {
		var t = new eui.Button();
		this._btn_time_FA = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "+";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_time_min_i = function () {
		var t = new eui.Label();
		this.lab_time_min = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "45分";
		t.textAlign = "center";
		t.textColor = 0x352f2f;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._btn_time_FD_i = function () {
		var t = new eui.Button();
		this._btn_time_FD = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 45;
		t.label = "-";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.width = 130;
		t.x = 520;
		t.y = 70;
		t.elementsContent = [this._Rect11_i(),this._Label6_i(),this._Group9_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.6;
		t.fillColor = 0xcccccc;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "数量";
		t.textAlign = "center";
		t.textColor = 0x444444;
		t.verticalAlign = "middle";
		t.width = 100;
		t.y = 2;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 130;
		t.x = 0;
		t.y = 40;
		t.elementsContent = [this._Rect12_i(),this._btn_time_NA_i(),this.lab_time_num_i(),this._btn_time_ND_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1d1d1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_time_NA_i = function () {
		var t = new eui.Button();
		this._btn_time_NA = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "+";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_time_num_i = function () {
		var t = new eui.Label();
		this.lab_time_num = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "2.5";
		t.textAlign = "center";
		t.textColor = 0x352f2f;
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto._btn_time_ND_i = function () {
		var t = new eui.Button();
		this._btn_time_ND = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 45;
		t.label = "-";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.lab_wntm_i = function () {
		var t = new eui.Label();
		this.lab_wntm = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 30;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "预约时间冲突";
		t.textAlign = "center";
		t.textColor = 0xd12323;
		t.verticalAlign = "middle";
		t.width = 151;
		t.x = 229;
		t.y = 20;
		return t;
	};
	_proto.group_add_i = function () {
		var t = new eui.Group();
		this.group_add = t;
		t.height = 170;
		t.width = 720;
		t.y = 767;
		t.elementsContent = [this._Rect13_i(),this.lab_sel_scrip_i(),this._Label7_i(),this.lab_itemprice_i(),this._btn_order_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0x757272;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_sel_scrip_i = function () {
		var t = new eui.Label();
		this.lab_sel_scrip = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "已选规格";
		t.textAlign = "left";
		t.textColor = 0x565454;
		t.width = 665;
		t.x = 16;
		t.y = 20;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 40;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "总计";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 95;
		t.x = 14.49;
		t.y = 91.11;
		return t;
	};
	_proto.lab_itemprice_i = function () {
		var t = new eui.Label();
		this.lab_itemprice = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 80;
		t.size = 56;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "¥86 ";
		t.textAlign = "left";
		t.textColor = 0xcc0a0a;
		t.verticalAlign = "middle";
		t.width = 222.81;
		t.x = 120.8;
		t.y = 60.03;
		return t;
	};
	_proto._btn_order_i = function () {
		var t = new eui.Button();
		this._btn_order = t;
		t.anchorOffsetX = 0;
		t.height = 60;
		t.horizontalCenter = 179;
		t.label = "添加";
		t.skinName = "BtnN10Skin";
		t.width = 296.36;
		t.y = 74.59;
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Button();
		this._btn_back = t;
		t.horizontalCenter = 0;
		t.label = "x";
		t.skinName = "BtnCloseX";
		t.y = 945.92;
		return t;
	};
	_proto.rect_bot_i = function () {
		var t = new eui.Rect();
		this.rect_bot = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xe01111;
		t.height = 20;
		t.width = 20;
		t.x = 525;
		t.y = 913.23;
		return t;
	};
	return ShopOredrSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopPangeItem.exml'] = window.ShopPangeItem = (function (_super) {
	__extends(ShopPangeItem, _super);
	function ShopPangeItem() {
		_super.call(this);
		this.skinParts = ["group_imgshow","lab_itemname","lab_itemtime","lab_itemprice","_btn_order"];
		
		this.height = 220;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.group_imgshow_i(),this.lab_itemname_i(),this.lab_itemtime_i(),this.lab_itemprice_i(),this._btn_order_i()];
	}
	var _proto = ShopPangeItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf9f8f2;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.strokeWeight = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x827e7e;
		t.height = 1;
		t.strokeAlpha = 0;
		t.strokeColor = 0x757272;
		t.strokeWeight = 0;
		t.width = 690;
		t.x = 18;
		return t;
	};
	_proto.group_imgshow_i = function () {
		var t = new eui.Group();
		this.group_imgshow = t;
		t.height = 160;
		t.width = 200;
		t.x = 54;
		t.y = 25;
		return t;
	};
	_proto.lab_itemname_i = function () {
		var t = new eui.Label();
		this.lab_itemname = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "中式穴位推拿或沐足二选一";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 490;
		t.x = 288;
		t.y = 21;
		return t;
	};
	_proto.lab_itemtime_i = function () {
		var t = new eui.Label();
		this.lab_itemtime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 26;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "75分钟|养生";
		t.textAlign = "left";
		t.textColor = 0x161616;
		t.width = 303;
		t.x = 288;
		t.y = 83;
		return t;
	};
	_proto.lab_itemprice_i = function () {
		var t = new eui.Label();
		this.lab_itemprice = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 28;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "¥86 ";
		t.textAlign = "left";
		t.textColor = 0xd82020;
		t.width = 150;
		t.x = 288;
		t.y = 144;
		return t;
	};
	_proto._btn_order_i = function () {
		var t = new eui.Button();
		this._btn_order = t;
		t.height = 50;
		t.label = "选规格";
		t.skinName = "BtnShopInfoListAdd";
		t.width = 150;
		t.x = 546;
		t.y = 139;
		return t;
	};
	return ShopPangeItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopPangeSkin.exml'] = window.ShopPangeSkin = (function (_super) {
	__extends(ShopPangeSkin, _super);
	function ShopPangeSkin() {
		_super.call(this);
		this.skinParts = ["group_companypic","lab_companyname","lab_companydress","lab_companyphone","lab_companymobil","listItem_s","scrollMy_s"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.scrollMy_s_i()];
	}
	var _proto = ShopPangeSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.scrollMy_s_i = function () {
		var t = new eui.Scroller();
		this.scrollMy_s = t;
		t.anchorOffsetY = 0;
		t.height = 1080;
		t.skinName = "scrollHasNoBar";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group1_i(),this.listItem_s_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.percentWidth = 100;
		t.y = 60;
		t.elementsContent = [this._Rect2_i(),this.group_companypic_i(),this.lab_companyname_i(),this.lab_companydress_i(),this.lab_companyphone_i(),this.lab_companymobil_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xf4f3f2;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.group_companypic_i = function () {
		var t = new eui.Group();
		this.group_companypic = t;
		t.height = 240;
		t.width = 300;
		t.x = 395;
		t.y = 18;
		return t;
	};
	_proto.lab_companyname_i = function () {
		var t = new eui.Label();
		this.lab_companyname = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "爱康推拿（江南西店）";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 360;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.lab_companydress_i = function () {
		var t = new eui.Label();
		this.lab_companydress = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "地址：江南大道中173号桥鸿大厦3楼(地铁2号江南西站线E出口)";
		t.textAlign = "left";
		t.textColor = 0x383535;
		t.width = 350;
		t.x = 20;
		t.y = 92;
		return t;
	};
	_proto.lab_companyphone_i = function () {
		var t = new eui.Label();
		this.lab_companyphone = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 24;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "电话：02031950745/18027339919";
		t.textAlign = "left";
		t.textColor = 0x383535;
		t.width = 366;
		t.x = 20;
		t.y = 193;
		return t;
	};
	_proto.lab_companymobil_i = function () {
		var t = new eui.Label();
		this.lab_companymobil = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 24;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "手机：02031950745/18027339919";
		t.textAlign = "left";
		t.textColor = 0x383535;
		t.width = 366;
		t.x = 20;
		t.y = 230;
		return t;
	};
	_proto.listItem_s_i = function () {
		var t = new eui.List();
		this.listItem_s = t;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = ShopPangeItem;
		t.width = 712;
		t.y = 360;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 4;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		return t;
	};
	return ShopPangeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopPayHuiYuanSelListSkin.exml'] = window.ShopPayHuiYuanSelListSkin = (function (_super) {
	__extends(ShopPayHuiYuanSelListSkin, _super);
	function ShopPayHuiYuanSelListSkin() {
		_super.call(this);
		this.skinParts = ["_btn_addnew","listItem_h","scrollMy_h","_btn_back"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this._Label3_i(),this.scrollMy_h_i(),this._btn_back_i()];
	}
	var _proto = ShopPayHuiYuanSelListSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0xcccccc;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x4e4c51;
		t.height = 110;
		t.strokeColor = 0x9e9c96;
		t.strokeWeight = 6;
		t.width = 710;
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "爱康推拿";
		t.textAlign = "center";
		t.textColor = 0xc9c7c1;
		t.verticalAlign = "middle";
		t.width = 360;
		t.x = 150;
		t.y = 39;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.percentWidth = 100;
		t.y = 110;
		t.elementsContent = [this._Rect3_i(),this._Label2_i(),this._btn_addnew_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x351a35;
		t.height = 110;
		t.strokeColor = 0x9e9c96;
		t.strokeWeight = 6;
		t.width = 710;
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "选择一个会员卡项进行支付";
		t.textAlign = "left";
		t.textColor = 0xc9c7c1;
		t.verticalAlign = "middle";
		t.width = 400;
		t.x = 31;
		t.y = 39;
		return t;
	};
	_proto._btn_addnew_i = function () {
		var t = new eui.Button();
		this._btn_addnew = t;
		t.height = 60;
		t.label = "+";
		t.skinName = "BtnNShop02";
		t.width = 200;
		t.x = 499;
		t.y = 22;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "您在本店还没有会员卡，点击\"+\"办理";
		t.textAlign = "center";
		t.textColor = 0x333027;
		t.verticalAlign = "middle";
		t.width = 598;
		t.x = 62;
		t.y = 245;
		return t;
	};
	_proto.scrollMy_h_i = function () {
		var t = new eui.Scroller();
		this.scrollMy_h = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 1120;
		t.skinName = "scrollHasNoBar";
		t.width = 710;
		t.x = 5;
		t.y = 218;
		t.viewport = this.listItem_h_i();
		return t;
	};
	_proto.listItem_h_i = function () {
		var t = new eui.List();
		this.listItem_h = t;
		t.itemRendererSkinName = ShopHuiYuanListItem;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 6;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Button();
		this._btn_back = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.skinName = "BtnBack03";
		t.width = 117;
		t.x = 10;
		t.y = 27;
		return t;
	};
	return ShopPayHuiYuanSelListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopPayStateShow.exml'] = window.ShopPayStateShow = (function (_super) {
	__extends(ShopPayStateShow, _super);
	function ShopPayStateShow() {
		_super.call(this);
		this.skinParts = ["group_paychannelweixin","group_paychannelzhifubao","lab_price","lab_time","group_timeshow","_btn_back_order","group_success","lab_payfail","_btn_back"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.group_paychannelweixin_i(),this.group_paychannelzhifubao_i(),this.group_timeshow_i(),this.group_success_i(),this.lab_payfail_i(),this._btn_back_i()];
	}
	var _proto = ShopPayStateShow.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.group_paychannelweixin_i = function () {
		var t = new eui.Group();
		this.group_paychannelweixin = t;
		t.height = 180;
		t.horizontalCenter = 0;
		t.width = 660;
		t.y = 250;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this._Image1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeColor = 0x3f5940;
		t.strokeWeight = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "请在剩余时间内使用“微信”向店家扫码付款";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 601;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "pay_weixin";
		t.x = 284;
		t.y = 83;
		return t;
	};
	_proto.group_paychannelzhifubao_i = function () {
		var t = new eui.Group();
		this.group_paychannelzhifubao = t;
		t.height = 180;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 660;
		t.y = 250;
		t.elementsContent = [this._Rect3_i(),this._Label2_i(),this._Image2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeColor = 0x3f5940;
		t.strokeWeight = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "请在剩余时间内使用“支付宝”向店家扫码付款";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 601;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "pay_zhifubao";
		t.x = 284;
		t.y = 83;
		return t;
	};
	_proto.group_timeshow_i = function () {
		var t = new eui.Group();
		this.group_timeshow = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.width = 660;
		t.y = 432;
		t.elementsContent = [this._Rect4_i(),this._Label3_i(),this.lab_price_i(),this._Label4_i(),this._Label5_i(),this.lab_time_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeColor = 0x3f5940;
		t.strokeWeight = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 60;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "付款";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 143;
		t.x = 44;
		t.y = 27;
		return t;
	};
	_proto.lab_price_i = function () {
		var t = new eui.Label();
		this.lab_price = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 60;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "1325.76";
		t.textAlign = "center";
		t.textColor = 0xc69b17;
		t.width = 328;
		t.x = 174;
		t.y = 31;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 60;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "元";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 138;
		t.x = 475;
		t.y = 27;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 80;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "剩余";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 188;
		t.x = 40;
		t.y = 147;
		return t;
	};
	_proto.lab_time_i = function () {
		var t = new eui.Label();
		this.lab_time = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 100;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "60";
		t.textAlign = "center";
		t.textColor = 0x68221f;
		t.width = 202;
		t.x = 233;
		t.y = 137;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 80;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "秒";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 138;
		t.x = 465;
		t.y = 147;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 38;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "注意：请务必一次性付清指定金额，勿用累加方式，如果您已经付款完成，但任未显示付款成功，请与店家联系。";
		t.textAlign = "left";
		t.textColor = 0x873e25;
		t.width = 604;
		t.x = 37;
		t.y = 330;
		return t;
	};
	_proto.group_success_i = function () {
		var t = new eui.Group();
		this.group_success = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 660;
		t.y = 487;
		t.elementsContent = [this._Rect5_i(),this._Label8_i(),this._btn_back_order_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeColor = 0x3f5940;
		t.strokeWeight = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 60;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "付款成功";
		t.textAlign = "left";
		t.textColor = 0x46750e;
		t.width = 336;
		t.x = 210;
		t.y = 146;
		return t;
	};
	_proto._btn_back_order_i = function () {
		var t = new eui.Button();
		this._btn_back_order = t;
		t.anchorOffsetX = 0;
		t.height = 60;
		t.label = "返回订单";
		t.skinName = "BtnShopInfoListAdd";
		t.width = 260;
		t.x = 196;
		t.y = 328;
		return t;
	};
	_proto.lab_payfail_i = function () {
		var t = new eui.Label();
		this.lab_payfail = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 60;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "付款失败";
		t.textAlign = "center";
		t.textColor = 0xaf361d;
		t.width = 506;
		t.x = 56;
		t.y = 1014;
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Button();
		this._btn_back = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.skinName = "BtnBack03";
		t.width = 117;
		t.x = 10;
		t.y = 57;
		return t;
	};
	return ShopPayStateShow;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopSelMoneyChannel.exml'] = window.ShopSelMoneyChannel = (function (_super) {
	__extends(ShopSelMoneyChannel, _super);
	function ShopSelMoneyChannel() {
		_super.call(this);
		this.skinParts = ["_btn_pay_weixin","_btn_pay_zhifubao","_btn_pay_huiyuan","group_selmoneychannel","lab_timetest","_btn_back_message","group_channelmessage","_btn_back"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.group_selmoneychannel_i(),this.group_channelmessage_i(),this._btn_back_i()];
	}
	var _proto = ShopSelMoneyChannel.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 0.95;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.group_selmoneychannel_i = function () {
		var t = new eui.Group();
		this.group_selmoneychannel = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this._btn_pay_weixin_i(),this._btn_pay_zhifubao_i(),this._btn_pay_huiyuan_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeColor = 0x3f5940;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "请选择支付方式";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 218;
		t.x = 195;
		t.y = 10;
		return t;
	};
	_proto._btn_pay_weixin_i = function () {
		var t = new eui.Button();
		this._btn_pay_weixin = t;
		t.anchorOffsetX = 0;
		t.label = "微信支付";
		t.skinName = "btnpayweixin";
		t.x = 35;
		t.y = 100;
		return t;
	};
	_proto._btn_pay_zhifubao_i = function () {
		var t = new eui.Button();
		this._btn_pay_zhifubao = t;
		t.anchorOffsetX = 0;
		t.label = "支付宝支付";
		t.skinName = "btnpayzhifubao";
		t.x = 35;
		t.y = 250;
		return t;
	};
	_proto._btn_pay_huiyuan_i = function () {
		var t = new eui.Button();
		this._btn_pay_huiyuan = t;
		t.anchorOffsetX = 0;
		t.label = "会员支付";
		t.skinName = "btnpayhuiyuan";
		t.x = 35;
		t.y = 400;
		return t;
	};
	_proto.group_channelmessage_i = function () {
		var t = new eui.Group();
		this.group_channelmessage = t;
		t.height = 300;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 560;
		t.elementsContent = [this._Rect3_i(),this._Label2_i(),this._Label3_i(),this.lab_timetest_i(),this._Label4_i(),this._btn_back_message_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeColor = 0x3f5940;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "有其他顾客占用支付通道！";
		t.textAlign = "center";
		t.textColor = 0x353535;
		t.width = 400;
		t.x = 75;
		t.y = 28;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 40;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "请于";
		t.textAlign = "center";
		t.textColor = 0x353535;
		t.width = 92;
		t.x = 86;
		t.y = 120;
		return t;
	};
	_proto.lab_timetest_i = function () {
		var t = new eui.Label();
		this.lab_timetest = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 40;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "120";
		t.textAlign = "left";
		t.textColor = 0xb27f33;
		t.width = 81;
		t.x = 191;
		t.y = 120;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 40;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "秒后再尝试";
		t.textAlign = "left";
		t.textColor = 0x353535;
		t.width = 220;
		t.x = 288;
		t.y = 120;
		return t;
	};
	_proto._btn_back_message_i = function () {
		var t = new eui.Button();
		this._btn_back_message = t;
		t.anchorOffsetX = 0;
		t.height = 60;
		t.label = "确定";
		t.skinName = "BtnShopInfoListAdd";
		t.width = 260;
		t.x = 136;
		t.y = 218;
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Button();
		this._btn_back = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.skinName = "BtnBack03";
		t.width = 117;
		t.x = 10;
		t.y = 57;
		return t;
	};
	return ShopSelMoneyChannel;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shoppage/ShopTimeBarItem.exml'] = window.ShopTimeBarItem = (function (_super) {
	__extends(ShopTimeBarItem, _super);
	function ShopTimeBarItem() {
		_super.call(this);
		this.skinParts = ["lab_time","group_sbar"];
		
		this.height = 38;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this.lab_time_i(),this.group_sbar_i()];
	}
	var _proto = ShopTimeBarItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xa59081;
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 2;
		t.y = 16;
		return t;
	};
	_proto.lab_time_i = function () {
		var t = new eui.Label();
		this.lab_time = t;
		t.style = "l_brown_1";
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "28-12:00";
		t.textAlign = "center";
		t.textColor = 0xa39e8a;
		t.width = 100;
		t.y = 0;
		return t;
	};
	_proto.group_sbar_i = function () {
		var t = new eui.Group();
		this.group_sbar = t;
		t.height = 20;
		t.width = 100;
		t.x = 0;
		t.y = 20;
		return t;
	};
	return ShopTimeBarItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/toptouch/toptouchskin.exml'] = window.toptouchskin = (function (_super) {
	__extends(toptouchskin, _super);
	function toptouchskin() {
		_super.call(this);
		this.skinParts = ["touchGroup"];
		
		this.height = 1380;
		this.width = 720;
		this.elementsContent = [this.touchGroup_i()];
	}
	var _proto = toptouchskin.prototype;

	_proto.touchGroup_i = function () {
		var t = new eui.Group();
		this.touchGroup = t;
		t.height = 1380;
		t.width = 720;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0xaab577;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "语音助手";
		t.textAlign = "center";
		t.textColor = 0x83bc21;
		t.width = 176;
		t.y = 33;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "语音助手";
		t.textAlign = "center";
		t.textColor = 0x83bc21;
		t.width = 137;
		t.x = 574;
		t.y = 1329;
		return t;
	};
	return toptouchskin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/warm/WarmCodeCheck.exml'] = window.WarmCodeCheck = (function (_super) {
	__extends(WarmCodeCheck, _super);
	function WarmCodeCheck() {
		_super.call(this);
		this.skinParts = ["sureBtn","closeBtn","_input_code","group","animGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.animGroup_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("sure",
				[
				])
			,
			new eui.State ("reward",
				[
				])
			,
			new eui.State ("checkBox",
				[
				])
		];
	}
	var _proto = WarmCodeCheck.prototype;

	_proto.animGroup_i = function () {
		var t = new eui.Group();
		this.animGroup = t;
		t.height = 1280;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.group_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xa8a097;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 500;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 660;
		t.y = 100;
		t.elementsContent = [this._Rect2_i(),this.sureBtn_i(),this.closeBtn_i(),this._Label1_i(),this._Rect3_i(),this._input_code_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x565153;
		t.percentHeight = 100;
		t.strokeColor = 0x0f0e0e;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Button();
		this.sureBtn = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnN8Skin";
		t.width = 440;
		t.y = 338;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Close1Btn";
		t.top = 2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "输入4位数字验证码";
		t.textAlign = "center";
		t.textColor = 0xb7ad89;
		t.verticalAlign = "middle";
		t.width = 432;
		t.y = 33;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x352f2f;
		t.height = 160;
		t.horizontalCenter = 0;
		t.strokeColor = 0x232121;
		t.strokeWeight = 2;
		t.width = 400;
		t.y = 143;
		return t;
	};
	_proto._input_code_i = function () {
		var t = new eui.EditableText();
		this._input_code = t;
		t.anchorOffsetX = 0;
		t.backgroundColor = 0xd1c8c8;
		t.borderColor = 0xb0d62a;
		t.fontFamily = "Arial";
		t.height = 160;
		t.horizontalCenter = "0";
		t.size = 100;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 400;
		t.y = 143;
		return t;
	};
	return WarmCodeCheck;
})(eui.Skin);generateEUI.paths['resource/eui_skins/warm/WarmPriceSkin.exml'] = window.WarmPriceSkin = (function (_super) {
	__extends(WarmPriceSkin, _super);
	function WarmPriceSkin() {
		_super.call(this);
		this.skinParts = ["btn_xianfu","listItem_price","scrollMy_price","sureBtn","closeBtn","lab_allprice","btn_del_num","lab_num","btn_add_num","lab_priceone","btn_delprice_10yuan","lab_price_10yuan","btn_addprice_10yuan","btn_delprice_yuan","lab_price_yuan","btn_addprice_yuan","btn_delprice_jiao","lab_price_jiao","btn_addprice_jiao","group_pop","animGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.animGroup_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("sure",
				[
				])
			,
			new eui.State ("reward",
				[
				])
			,
			new eui.State ("checkBox",
				[
				])
		];
	}
	var _proto = WarmPriceSkin.prototype;

	_proto.animGroup_i = function () {
		var t = new eui.Group();
		this.animGroup = t;
		t.height = 1280;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.group_pop_i()];
		return t;
	};
	_proto.group_pop_i = function () {
		var t = new eui.Group();
		this.group_pop = t;
		t.height = 530;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 600;
		t.y = 600;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Label1_i(),this._Label2_i(),this.btn_xianfu_i(),this.scrollMy_price_i(),this.sureBtn_i(),this.closeBtn_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x565153;
		t.percentHeight = 100;
		t.strokeColor = 0x0f0e0e;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x494748;
		t.height = 335;
		t.strokeColor = 0x0f0e0e;
		t.strokeWeight = 2;
		t.width = 570;
		t.x = 17;
		t.y = 20;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "选择支付方式";
		t.textAlign = "center";
		t.textColor = 0x999664;
		t.verticalAlign = "middle";
		t.width = 188;
		t.x = 46;
		t.y = 26;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.horizontalCenter = 138;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "设置单价";
		t.textAlign = "center";
		t.textColor = 0x999664;
		t.verticalAlign = "middle";
		t.width = 158;
		t.y = 26;
		return t;
	};
	_proto.btn_xianfu_i = function () {
		var t = new eui.Button();
		this.btn_xianfu = t;
		t.anchorOffsetX = 0;
		t.height = 40;
		t.label = "原价";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnUpSkin";
		t.width = 250;
		t.x = 29;
		t.y = 79;
		return t;
	};
	_proto.scrollMy_price_i = function () {
		var t = new eui.Scroller();
		this.scrollMy_price = t;
		t.anchorOffsetY = 0;
		t.height = 211;
		t.skinName = "scrollHasNoBar";
		t.width = 258;
		t.x = 26;
		t.y = 128;
		t.viewport = this.listItem_price_i();
		return t;
	};
	_proto.listItem_price_i = function () {
		var t = new eui.List();
		this.listItem_price = t;
		t.anchorOffsetY = 0;
		t.height = 211;
		t.itemRendererSkinName = WarmPriceTypeItemSkin;
		t.width = 800;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 6;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.x = "null";
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Button();
		this.sureBtn = t;
		t.height = 60;
		t.label = "确  定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnN5Skin";
		t.width = 250;
		t.x = 320;
		t.y = 448;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.height = 60;
		t.label = "返  回";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnBack01";
		t.width = 250;
		t.x = 30;
		t.y = 448;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 253;
		t.x = 324;
		t.y = 375;
		t.elementsContent = [this._Rect3_i(),this._Label3_i(),this.lab_allprice_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4d4854;
		t.height = 40;
		t.width = 159;
		t.x = 80;
		t.y = 3;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "总价:";
		t.textAlign = "left";
		t.textColor = 0xb7ad89;
		t.verticalAlign = "middle";
		t.width = 92;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.lab_allprice_i = function () {
		var t = new eui.EditableText();
		this.lab_allprice = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf4e313;
		t.verticalAlign = "middle";
		t.width = 153;
		t.x = 86;
		t.y = 2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 11;
		t.y = 372;
		t.elementsContent = [this._Label4_i(),this._Rect4_i(),this.btn_del_num_i(),this.lab_num_i(),this.btn_add_num_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "数量:";
		t.textAlign = "right";
		t.textColor = 0xb7ad89;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 2;
		t.y = 4;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4d4854;
		t.height = 40;
		t.width = 100;
		t.x = 133;
		t.y = 3;
		return t;
	};
	_proto.btn_del_num_i = function () {
		var t = new eui.Button();
		this.btn_del_num = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnDel01";
		t.x = 78;
		t.y = -1;
		return t;
	};
	_proto.lab_num_i = function () {
		var t = new eui.EditableText();
		this.lab_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x43db59;
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 139;
		t.y = 4;
		return t;
	};
	_proto.btn_add_num_i = function () {
		var t = new eui.Button();
		this.btn_add_num = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnAdd01";
		t.x = 238;
		t.y = -1;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 295;
		t.y = 80;
		t.elementsContent = [this._Rect5_i(),this._Label5_i(),this.lab_priceone_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4d4854;
		t.height = 40;
		t.width = 159;
		t.x = 96;
		t.y = 3;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "单价:";
		t.textAlign = "left";
		t.textColor = 0x0a0808;
		t.verticalAlign = "middle";
		t.width = 114;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.lab_priceone_i = function () {
		var t = new eui.EditableText();
		this.lab_priceone = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0xbca18f;
		t.verticalAlign = "middle";
		t.width = 153;
		t.x = 102;
		t.y = 2;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 292;
		t.y = 144.66666666666666;
		t.elementsContent = [this._Label6_i(),this._Rect6_i(),this.btn_delprice_10yuan_i(),this.lab_price_10yuan_i(),this.btn_addprice_10yuan_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "10元";
		t.textAlign = "center";
		t.textColor = 0x0a0808;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 2;
		t.y = 4;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4d4854;
		t.height = 40;
		t.width = 100;
		t.x = 133;
		t.y = 3;
		return t;
	};
	_proto.btn_delprice_10yuan_i = function () {
		var t = new eui.Button();
		this.btn_delprice_10yuan = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnDel01";
		t.x = 78;
		t.y = -1;
		return t;
	};
	_proto.lab_price_10yuan_i = function () {
		var t = new eui.Label();
		this.lab_price_10yuan = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xaab3b5;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 143;
		t.y = 4;
		return t;
	};
	_proto.btn_addprice_10yuan_i = function () {
		var t = new eui.Button();
		this.btn_addprice_10yuan = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnAdd01";
		t.x = 238;
		t.y = -1;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 292;
		t.y = 215.33333333333331;
		t.elementsContent = [this._Label7_i(),this._Rect7_i(),this.btn_delprice_yuan_i(),this.lab_price_yuan_i(),this.btn_addprice_yuan_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "元";
		t.textAlign = "center";
		t.textColor = 0x0a0808;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 2;
		t.y = 4;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4d4854;
		t.height = 40;
		t.width = 100;
		t.x = 133;
		t.y = 3;
		return t;
	};
	_proto.btn_delprice_yuan_i = function () {
		var t = new eui.Button();
		this.btn_delprice_yuan = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnDel01";
		t.x = 78;
		t.y = -1;
		return t;
	};
	_proto.lab_price_yuan_i = function () {
		var t = new eui.Label();
		this.lab_price_yuan = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xaab3b5;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 143;
		t.y = 4;
		return t;
	};
	_proto.btn_addprice_yuan_i = function () {
		var t = new eui.Button();
		this.btn_addprice_yuan = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnAdd01";
		t.x = 238;
		t.y = -1;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 292;
		t.y = 286;
		t.elementsContent = [this._Label8_i(),this._Rect8_i(),this.btn_delprice_jiao_i(),this.lab_price_jiao_i(),this.btn_addprice_jiao_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "角";
		t.textAlign = "center";
		t.textColor = 0x0a0808;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 2;
		t.y = 4;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4d4854;
		t.height = 40;
		t.width = 100;
		t.x = 133;
		t.y = 3;
		return t;
	};
	_proto.btn_delprice_jiao_i = function () {
		var t = new eui.Button();
		this.btn_delprice_jiao = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnDel01";
		t.x = 78;
		t.y = -1;
		return t;
	};
	_proto.lab_price_jiao_i = function () {
		var t = new eui.Label();
		this.lab_price_jiao = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xaab3b5;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 143;
		t.y = 4;
		return t;
	};
	_proto.btn_addprice_jiao_i = function () {
		var t = new eui.Button();
		this.btn_addprice_jiao = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnAdd01";
		t.x = 238;
		t.y = -1;
		return t;
	};
	return WarmPriceSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/warm/WarmPriceTypeItemSkin.exml'] = window.WarmPriceTypeItemSkin = (function (_super) {
	__extends(WarmPriceTypeItemSkin, _super);
	function WarmPriceTypeItemSkin() {
		_super.call(this);
		this.skinParts = ["_rect_back","lab_price","lab_pname","_img_check"];
		
		this.height = 50;
		this.width = 250;
		this.elementsContent = [this._rect_back_i(),this.lab_price_i(),this.lab_pname_i(),this._img_check_i()];
	}
	var _proto = WarmPriceTypeItemSkin.prototype;

	_proto._rect_back_i = function () {
		var t = new eui.Rect();
		this._rect_back = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 385;
		t.fillColor = 0x706d6a;
		t.percentHeight = 100;
		t.strokeColor = 0x2b2422;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		return t;
	};
	_proto.lab_price_i = function () {
		var t = new eui.Label();
		this.lab_price = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.size = 28;
		t.stroke = 0.6;
		t.strokeColor = 0x000000;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 99;
		t.x = 112;
		return t;
	};
	_proto.lab_pname_i = function () {
		var t = new eui.Label();
		this.lab_pname = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Tahoma";
		t.size = 28;
		t.stroke = 0.6;
		t.strokeColor = 0x000000;
		t.text = "美团";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 115;
		t.x = 2;
		return t;
	};
	_proto._img_check_i = function () {
		var t = new eui.Image();
		this._img_check = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.height = 32;
		t.source = "chekBox339";
		t.verticalCenter = 0;
		t.width = 32;
		t.x = 213;
		return t;
	};
	return WarmPriceTypeItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/warm/WarmSelHuiYuanPay.exml'] = window.WarmSelHuiYuanPay = (function (_super) {
	__extends(WarmSelHuiYuanPay, _super);
	function WarmSelHuiYuanPay() {
		_super.call(this);
		this.skinParts = ["sureBtn","notBtn","lab_typecname","lab_cardid","lab_price","lab_pricedis","lab_disrate","lab_rmoney","group","animGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.animGroup_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("sure",
				[
				])
			,
			new eui.State ("reward",
				[
				])
			,
			new eui.State ("checkBox",
				[
				])
		];
	}
	var _proto = WarmSelHuiYuanPay.prototype;

	_proto.animGroup_i = function () {
		var t = new eui.Group();
		this.animGroup = t;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.group_i()];
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 600;
		t.y = 200;
		t.elementsContent = [this._Rect1_i(),this.sureBtn_i(),this.notBtn_i(),this._Label1_i(),this._Label2_i(),this.lab_typecname_i(),this._Label3_i(),this.lab_cardid_i(),this._Label4_i(),this.lab_price_i(),this._Label5_i(),this.lab_pricedis_i(),this._Label6_i(),this.lab_disrate_i(),this._Label7_i(),this.lab_rmoney_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x2b2026;
		t.percentHeight = 100;
		t.strokeColor = 0xc4931d;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Button();
		this.sureBtn = t;
		t.height = 80;
		t.label = "确定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "btnforcheckok";
		t.width = 200;
		t.x = 60;
		t.y = 576;
		return t;
	};
	_proto.notBtn_i = function () {
		var t = new eui.Button();
		this.notBtn = t;
		t.height = 80;
		t.label = "返回";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "btnforcheckok";
		t.width = 200;
		t.x = 335;
		t.y = 576;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "会员结算:";
		t.textAlign = "right";
		t.textColor = 0xbf9b22;
		t.verticalAlign = "top";
		t.width = 160;
		t.y = 31;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "选择会员:";
		t.textAlign = "right";
		t.textColor = 0x8b915b;
		t.verticalAlign = "top";
		t.width = 160;
		t.x = 90;
		t.y = 116;
		return t;
	};
	_proto.lab_typecname_i = function () {
		var t = new eui.Label();
		this.lab_typecname = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "VIP黄金卡卡";
		t.textAlign = "left";
		t.textColor = 0xe5dede;
		t.verticalAlign = "top";
		t.width = 320;
		t.x = 267;
		t.y = 116;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "会员卡号:";
		t.textAlign = "right";
		t.textColor = 0x8b915b;
		t.verticalAlign = "top";
		t.width = 160;
		t.x = 90;
		t.y = 186;
		return t;
	};
	_proto.lab_cardid_i = function () {
		var t = new eui.Label();
		this.lab_cardid = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "8888.00";
		t.textAlign = "left";
		t.textColor = 0xe5dede;
		t.verticalAlign = "top";
		t.width = 320;
		t.x = 267;
		t.y = 186;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "本单费用:";
		t.textAlign = "right";
		t.textColor = 0x8b915b;
		t.verticalAlign = "top";
		t.width = 160;
		t.x = 90;
		t.y = 256;
		return t;
	};
	_proto.lab_price_i = function () {
		var t = new eui.Label();
		this.lab_price = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "6666.00";
		t.textAlign = "left";
		t.textColor = 0xe5dede;
		t.verticalAlign = "top";
		t.width = 320;
		t.x = 267;
		t.y = 256;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "实际扣款:";
		t.textAlign = "right";
		t.textColor = 0x8b915b;
		t.verticalAlign = "top";
		t.width = 160;
		t.x = 90;
		t.y = 326;
		return t;
	};
	_proto.lab_pricedis_i = function () {
		var t = new eui.Label();
		this.lab_pricedis = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "2222.00";
		t.textAlign = "left";
		t.textColor = 0xe5dede;
		t.verticalAlign = "top";
		t.width = 320;
		t.x = 267;
		t.y = 326;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "本单折扣:";
		t.textAlign = "right";
		t.textColor = 0x8b915b;
		t.verticalAlign = "top";
		t.width = 160;
		t.x = 90;
		t.y = 396;
		return t;
	};
	_proto.lab_disrate_i = function () {
		var t = new eui.Label();
		this.lab_disrate = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "2222.00";
		t.textAlign = "left";
		t.textColor = 0xe5dede;
		t.verticalAlign = "top";
		t.width = 320;
		t.x = 267;
		t.y = 396;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "剩余金额:";
		t.textAlign = "right";
		t.textColor = 0x8b915b;
		t.verticalAlign = "top";
		t.width = 160;
		t.x = 90;
		t.y = 466;
		return t;
	};
	_proto.lab_rmoney_i = function () {
		var t = new eui.Label();
		this.lab_rmoney = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "2222.00";
		t.textAlign = "left";
		t.textColor = 0xe5dede;
		t.verticalAlign = "top";
		t.width = 320;
		t.x = 267;
		t.y = 466;
		return t;
	};
	return WarmSelHuiYuanPay;
})(eui.Skin);generateEUI.paths['resource/eui_skins/warm/WarmTimeSkin.exml'] = window.WarmTimeSkin = (function (_super) {
	__extends(WarmTimeSkin, _super);
	function WarmTimeSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","btn_querrywork","sureBtn","lab_time","lab_wntm","btn_del_hour","lab_hour","btn_add_hour","btn_del_sec","lab_sec","btn_add_sec","lab_wnnum","lab_num","btn_del_num","lab_numset","btn_add_num","group","animGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.animGroup_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("sure",
				[
				])
			,
			new eui.State ("reward",
				[
				])
			,
			new eui.State ("checkBox",
				[
				])
		];
	}
	var _proto = WarmTimeSkin.prototype;

	_proto.animGroup_i = function () {
		var t = new eui.Group();
		this.animGroup = t;
		t.height = 1280;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this.closeBtn_i(),this.group_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf7f4f4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "设定服务时间";
		t.textAlign = "center";
		t.textColor = 0x3d3c3a;
		t.verticalAlign = "middle";
		t.width = 273;
		t.x = 208;
		t.y = 40;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "《——";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnN11Skin";
		t.x = 31;
		t.y = 37;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 680;
		t.y = 160;
		t.elementsContent = [this.btn_querrywork_i(),this.sureBtn_i(),this._Label2_i(),this.lab_time_i(),this.lab_wntm_i(),this._Label3_i(),this.btn_del_hour_i(),this.lab_hour_i(),this.btn_add_hour_i(),this._Label4_i(),this.btn_del_sec_i(),this.lab_sec_i(),this.btn_add_sec_i(),this._Label5_i(),this.lab_wnnum_i(),this.lab_num_i(),this._Label6_i(),this.btn_del_num_i(),this.lab_numset_i(),this.btn_add_num_i()];
		return t;
	};
	_proto.btn_querrywork_i = function () {
		var t = new eui.Button();
		this.btn_querrywork = t;
		t.height = 50;
		t.horizontalCenter = 6;
		t.label = "查看预约";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnN11Skin";
		t.width = 200;
		t.y = 30;
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Button();
		this.sureBtn = t;
		t.height = 60;
		t.horizontalCenter = 6;
		t.label = "设定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnN9Skin";
		t.width = 200;
		t.y = 463;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "开始时间:";
		t.textAlign = "right";
		t.textColor = 0x3d3c3a;
		t.verticalAlign = "middle";
		t.width = 168;
		t.x = 117;
		t.y = 112;
		return t;
	};
	_proto.lab_time_i = function () {
		var t = new eui.Label();
		this.lab_time = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "12日 14:30";
		t.textAlign = "left";
		t.textColor = 0x6d6464;
		t.verticalAlign = "middle";
		t.width = 220;
		t.x = 293;
		t.y = 112;
		return t;
	};
	_proto.lab_wntm_i = function () {
		var t = new eui.Label();
		this.lab_wntm = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "时间冲突";
		t.textAlign = "right";
		t.textColor = 0xd12323;
		t.verticalAlign = "middle";
		t.width = 132;
		t.x = 521;
		t.y = 112;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "小时";
		t.textAlign = "center";
		t.textColor = 0x0a0808;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 148;
		t.y = 179;
		return t;
	};
	_proto.btn_del_hour_i = function () {
		var t = new eui.Button();
		this.btn_del_hour = t;
		t.horizontalCenter = -34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnDel01";
		t.y = 171;
		return t;
	};
	_proto.lab_hour_i = function () {
		var t = new eui.Label();
		this.lab_hour = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.horizontalCenter = 61;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "14";
		t.textAlign = "center";
		t.textColor = 0x474b4c;
		t.verticalAlign = "middle";
		t.width = 80;
		t.y = 176;
		return t;
	};
	_proto.btn_add_hour_i = function () {
		var t = new eui.Button();
		this.btn_add_hour = t;
		t.horizontalCenter = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnAdd01";
		t.y = 171;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "分钟";
		t.textAlign = "center";
		t.textColor = 0x0a0808;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 148;
		t.y = 246;
		return t;
	};
	_proto.btn_del_sec_i = function () {
		var t = new eui.Button();
		this.btn_del_sec = t;
		t.horizontalCenter = -34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnDel01";
		t.y = 238;
		return t;
	};
	_proto.lab_sec_i = function () {
		var t = new eui.Label();
		this.lab_sec = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.horizontalCenter = 61;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "30";
		t.textAlign = "center";
		t.textColor = 0x474b4c;
		t.verticalAlign = "middle";
		t.width = 80;
		t.y = 243;
		return t;
	};
	_proto.btn_add_sec_i = function () {
		var t = new eui.Button();
		this.btn_add_sec = t;
		t.horizontalCenter = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnAdd01";
		t.y = 238;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "预定钟数:";
		t.textAlign = "right";
		t.textColor = 0x3d3c3a;
		t.verticalAlign = "middle";
		t.width = 168;
		t.x = 117;
		t.y = 316;
		return t;
	};
	_proto.lab_wnnum_i = function () {
		var t = new eui.Label();
		this.lab_wnnum = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "时间冲突";
		t.textAlign = "right";
		t.textColor = 0xd12323;
		t.verticalAlign = "middle";
		t.width = 132;
		t.x = 521;
		t.y = 320;
		return t;
	};
	_proto.lab_num_i = function () {
		var t = new eui.Label();
		this.lab_num = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "1.5";
		t.textAlign = "center";
		t.textColor = 0x6d6464;
		t.verticalAlign = "middle";
		t.width = 130;
		t.x = 335;
		t.y = 316;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 36;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "钟数";
		t.textAlign = "center";
		t.textColor = 0x0a0808;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 148;
		t.y = 380;
		return t;
	};
	_proto.btn_del_num_i = function () {
		var t = new eui.Button();
		this.btn_del_num = t;
		t.horizontalCenter = -34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnDel01";
		t.y = 372;
		return t;
	};
	_proto.lab_numset_i = function () {
		var t = new eui.Label();
		this.lab_numset = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 40;
		t.horizontalCenter = 61;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "1.5";
		t.textAlign = "center";
		t.textColor = 0x474b4c;
		t.verticalAlign = "middle";
		t.width = 80;
		t.y = 377;
		return t;
	};
	_proto.btn_add_num_i = function () {
		var t = new eui.Button();
		this.btn_add_num = t;
		t.horizontalCenter = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnAdd01";
		t.y = 372;
		return t;
	};
	return WarmTimeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/warm/WarmTimeSkin2.exml'] = window.WarmTimeSkin2 = (function (_super) {
	__extends(WarmTimeSkin2, _super);
	function WarmTimeSkin2() {
		_super.call(this);
		this.skinParts = ["lab_haveset_settime","_btn_time_MA","lab_time_mou","_btn_time_MD","_btn_time_DA","lab_time_day","_btn_time_DD","_btn_time_HA","lab_time_hou","_btn_time_HD","_btn_time_FA","lab_time_min","_btn_time_FD","lab_wntm","group_time","animGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.animGroup_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("sure",
				[
				])
			,
			new eui.State ("reward",
				[
				])
			,
			new eui.State ("checkBox",
				[
				])
		];
	}
	var _proto = WarmTimeSkin2.prototype;

	_proto.animGroup_i = function () {
		var t = new eui.Group();
		this.animGroup = t;
		t.height = 1280;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.group_time_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.fillColor = 0xf7f4f4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -1;
		return t;
	};
	_proto.group_time_i = function () {
		var t = new eui.Group();
		this.group_time = t;
		t.height = 270;
		t.width = 720;
		t.y = 494;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this.lab_haveset_settime_i(),this._Group5_i(),this.lab_wntm_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0x757272;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "时间钟次";
		t.textAlign = "left";
		t.textColor = 0x565454;
		t.width = 170;
		t.x = 16;
		t.y = 20;
		return t;
	};
	_proto.lab_haveset_settime_i = function () {
		var t = new eui.Label();
		this.lab_haveset_settime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 18;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "只能在所选服务对象的第一项里设定";
		t.textAlign = "right";
		t.textColor = 0x704d4d;
		t.width = 316;
		t.x = 386;
		t.y = 26;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 80;
		t.y = 70;
		t.elementsContent = [this._Rect3_i(),this._Label2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.6;
		t.fillColor = 0xcccccc;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "开始时间";
		t.textAlign = "center";
		t.textColor = 0x444444;
		t.verticalAlign = "middle";
		t.width = 170;
		t.y = 2;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 90;
		t.x = 0;
		t.y = 40;
		t.elementsContent = [this._Rect4_i(),this._btn_time_MA_i(),this.lab_time_mou_i(),this._btn_time_MD_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1d1d1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_time_MA_i = function () {
		var t = new eui.Button();
		this._btn_time_MA = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "+";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_time_mou_i = function () {
		var t = new eui.Label();
		this.lab_time_mou = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "9月";
		t.textAlign = "center";
		t.textColor = 0x352f2f;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._btn_time_MD_i = function () {
		var t = new eui.Button();
		this._btn_time_MD = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 45;
		t.label = "-";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 90;
		t.x = 100;
		t.y = 40;
		t.elementsContent = [this._Rect5_i(),this._btn_time_DA_i(),this.lab_time_day_i(),this._btn_time_DD_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1d1d1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_time_DA_i = function () {
		var t = new eui.Button();
		this._btn_time_DA = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "+";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_time_day_i = function () {
		var t = new eui.Label();
		this.lab_time_day = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "21日";
		t.textAlign = "center";
		t.textColor = 0x352f2f;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._btn_time_DD_i = function () {
		var t = new eui.Button();
		this._btn_time_DD = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 45;
		t.label = "-";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 90;
		t.x = 200;
		t.y = 40;
		t.elementsContent = [this._Rect6_i(),this._btn_time_HA_i(),this.lab_time_hou_i(),this._btn_time_HD_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1d1d1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_time_HA_i = function () {
		var t = new eui.Button();
		this._btn_time_HA = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "+";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_time_hou_i = function () {
		var t = new eui.Label();
		this.lab_time_hou = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "14点";
		t.textAlign = "center";
		t.textColor = 0x352f2f;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._btn_time_HD_i = function () {
		var t = new eui.Button();
		this._btn_time_HD = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 45;
		t.label = "-";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 90;
		t.x = 300;
		t.y = 40;
		t.elementsContent = [this._Rect7_i(),this._btn_time_FA_i(),this.lab_time_min_i(),this._btn_time_FD_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1d1d1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._btn_time_FA_i = function () {
		var t = new eui.Button();
		this._btn_time_FA = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "+";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_time_min_i = function () {
		var t = new eui.Label();
		this.lab_time_min = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "45分";
		t.textAlign = "center";
		t.textColor = 0x352f2f;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._btn_time_FD_i = function () {
		var t = new eui.Button();
		this._btn_time_FD = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 45;
		t.label = "-";
		t.skinName = "BtnAddTime01";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.lab_wntm_i = function () {
		var t = new eui.Label();
		this.lab_wntm = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 30;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.stroke = 0.01;
		t.strokeColor = 0x000000;
		t.text = "预约时间冲突";
		t.textAlign = "center";
		t.textColor = 0xd12323;
		t.verticalAlign = "middle";
		t.width = 151;
		t.x = 229;
		t.y = 20;
		return t;
	};
	return WarmTimeSkin2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/warm/warnFrameSkin.exml'] = window.warnFrameSkin = (function (_super) {
	__extends(warnFrameSkin, _super);
	function warnFrameSkin() {
		_super.call(this);
		this.skinParts = ["bg","sureBtn","notBtn","closeBtn","warnLabel","group","animGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.animGroup_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("sure",
				[
				])
			,
			new eui.State ("reward",
				[
				])
			,
			new eui.State ("checkBox",
				[
				])
		];
	}
	var _proto = warnFrameSkin.prototype;

	_proto.animGroup_i = function () {
		var t = new eui.Group();
		this.animGroup = t;
		t.height = 1280;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.group_i()];
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 600;
		t.y = 200;
		t.elementsContent = [this.bg_i(),this.sureBtn_i(),this.notBtn_i(),this.closeBtn_i(),this.warnLabel_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(97,63,109,384);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_fb_bm_bg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Button();
		this.sureBtn = t;
		t.horizontalCenter = -142;
		t.label = "确定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnN7Skin";
		t.y = 404;
		return t;
	};
	_proto.notBtn_i = function () {
		var t = new eui.Button();
		this.notBtn = t;
		t.label = "取消";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnN7Skin";
		t.x = 318;
		t.y = 404;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Close1Btn";
		t.top = 2;
		return t;
	};
	_proto.warnLabel_i = function () {
		var t = new eui.Label();
		this.warnLabel = t;
		t.style = "l_brown_1";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 227;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 0.2;
		t.strokeColor = 0x000000;
		t.text = "提示";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -49.5;
		t.width = 580;
		return t;
	};
	return warnFrameSkin;
})(eui.Skin);