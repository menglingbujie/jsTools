

define(function(require,exports,module){
	function init(){
		var colorTransObj = require("tools/color_trans.js");
		var mediaQueryObj = require("tools/media_query.js");
		var md5Obj = require("tools/md5.js");
		var favObj = require("tools/fav.js");
		colorTransObj.init();
		mediaQueryObj.init();
		md5Obj.init();
		favObj.init();
	}
	module.exports = {
		init:init,
	}
})