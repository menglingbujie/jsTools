
define(function(require,exports,module){
	function init(){
		var _width = screen.width;
    	var _height = screen.height;
    	var _cwidth = document.body.clientWidth;
    	var _cheight = document.body.clientHeight;
    	var _ratio = window.devicePixelRatio;
    	
    	var _tipMsg = "width*height: "+_width+"*"+_height+"--ratio:"+_ratio;
    	$("#tipsId").html(_tipMsg);
	}
	module.exports = {
		init:init
	}
})