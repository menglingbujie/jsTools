define(function(require,exports,module){
	
	function addCookie(json){
		console.log(json);
		if (document.all){
		window.external.addToFavoritesBar(json.url,json.title);
		} else if (window.sidebar)  {
		 window.sidebar.addPanel(json.title,json.url, "");
		} else {
		 alert('關閉本提示后，請使用Ctrl+D添加到收藏夾');
		}
	}
	function init(){
		$("#favBtnId").on("click",function(){
			var _url = $(this).attr("url");
			var _title = $(this).html();
			addCookie({title:_title,url:_url});
		});
	}
	module.exports = {
		init:init
	}
})