
define(function(require,exports,module){
	function hasColorSupport(){
		var input = document.createElement("input");
		input.setAttribute("type", "color");
	
		var hasColorType = (input.type !== "text");
	
		if (hasColorType) {
			var testString = "foo";
	
			input.value=testString;
			hasColorType = (input.value != testString);
		}
	
		return((hasColorType)?true:false);
	}
	function transDecToSec2(val){
		var _val = val;
		var _hexRes = parseInt(_val).toString(16);
		var _secRes = parseInt(_val).toString(2);
		var _ocxRes = parseInt(_val).toString(8);
		console.log( "Hex: "+_hexRes+"<br>Sec: "+_secRes+"<br>Ocx:"+_ocxRes);
	}
	function transDecToSec(val){
		var _secArr = [];
		//dec to sec
		(function decToSec(v){
			var _num = v;
			while(v>=2){
				_secArr.push(_num%2);
				_num=Math.floor(_num/2);
			}
			_secArr.push(_num%2);
			for(var i=0,len=(8-arr.length);i<len;i++){
				_secArr.push(0);
			}
			console.log(_secArr.reverse().join("").toString());
		})(val)
	}
	function transDecToHex(val){
		//sec to hex
		var _hex = "";
		var _charArr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
		var _d = Math.floor(val/16);
		var _m = val%16;
		_hex=_charArr[_d]+_charArr[_m]
		return _hex;
	}
	var _charArr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
	//alert(Math.floor(256/16))
	function doTrans(evt,obj){
		console.log(obj);
		var _resId = obj.resId;
		var _val = obj.val;
		if(_val>255){
			alert("Over 255!");
			evt.srcElement.value=255;
			_val = 255;
		}
		var _res = transDecToHex(_val);
		color = color.concat(_res);
		$("#"+_resId).html(_res);
		//$(_resId).innerHTML = _res;
	}
	function distributeEvent(id,evtName,handler,argsObj){
		var _evtHandler = handler;
		//if has args
		if(argsObj){
/*
			_evtHandler = function(e){
				handler.call(this,e,{resId:argsObj,val:id.value});
			}
*/
			_evtHandler = function(e){
				handler.call(this,e,{resId:argsObj,val:id.val()});
			}
		}
		id.on(evtName,_evtHandler);
/*
		if(window.attachEvent){
			id.attachEvent("on"+evtName,_evtHandler);
		}else{
			id.addEventListener(evtName,_evtHandler,false);
		}
*/
	}
	var color = new String();
	function domInit(){
		if(hasColorSupport()){
			$("#colorId").show();
			$("#colorTableId").hide();
			$("#resultBtnId").hide();
			$("#colorId").on("change",function(evt){
				//alert(evt.srcElement.value)
				//var _color = $("colorId").value;
				var _color = $("#colorId").val();
				$("#resultTextId").val(_color);
				$("#resultId").css("background-color",_color);
				$("#resultId").show();
			})
			/*
distributeEvent($("colorId"),"change",function(evt){
				//alert(evt.srcElement.value)
				var _color = $("colorId").value;
				$("resultTextId").value=_color;
				$("resultId").style.backgroundColor = _color;
				$("resultId").style.display = "block";
			});
*/
		}else{
			$("resultBtnId").show();
			$("#colorId").hide();
			$("#resultBtnId").on("click",function(evt){
				var _r = $("#redResId").html()||"00";
				var _g = $("#greenResId").html()||"00";
				var _b = $("#blueResId").html()||"00";
				var _color = "#"+_r+_g+_b;
				$("#resultTextId").val(_color);
				$("#resultId").css("background-color",_color);
				$("#resultId").css("display","block");
				$("#resultId").show();
			})
/*
			distributeEvent($("resultBtnId"),"click",function(evt){
				var _r = $("redResId").innerHTML||"00";
				var _g = $("greenResId").innerHTML||"00";
				var _b = $("blueResId").innerHTML||"00";
				var _color = "#"+_r+_g+_b;
				$("resultTextId").value=_color;
				$("resultId").style.backgroundColor = _color;
				$("resultId").style.display = "block";
			});
*/
		}
		distributeEvent($("#redTxtId"),"change",doTrans,"redResId");
		distributeEvent($("#greenTxtId"),"change",doTrans,"greenResId");
		distributeEvent($("#blueTxtId"),"change",doTrans,"blueResId");
	}
	module.exports = {
		init:domInit,
	}
})