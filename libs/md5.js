
define(function(require,exports,module){
	var m_tranType = "hex";
	function doTrans(text){
		var _md5 = require("tools/md5_lib.js");
		var _resText = "";
		//console.log(m_tranType+"====>"+text);
		switch(m_tranType){
			case "md5":{_resText = _md5.hex_md5(text);}break;
			case "b64":{_resText = _md5.b64_md5(text);}break;
			case "str":{_resText = _md5.str_md5(text);}break;
			case "md5_hmac":{_resText = _md5.hex_hmac_md5(text);}break;
			case "b64_hmac":{_resText = _md5.b64_hmac_md5(text);}break;
			case "str_hmac":{_resText = _md5.str_hmac_md5(text);}break;
			default:{
				_resText = _md5.hex_md5(text);
			}break;
		}
		return _resText;
	}
	function initEvents(){
		$("#md5SelectId").on("change",function(){
			var _type = $(this).val();
			m_tranType = _type;
			var _text = $("#md5InputId").val();
			if(!_text){
				return;
			}
			var _res = doTrans(_text);
			$("#md5ResultId").html(_res);
		})
		
		$("#md5InputId").on("change",function(){
			var _text = $(this).val();
			var _res = doTrans(_text);
			$("#md5ResultId").html(_res);
		});
	}
	function init(){
		initEvents();
	}
	module.exports = {
		init:init
	}
})