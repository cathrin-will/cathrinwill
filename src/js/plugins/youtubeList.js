(function($){
	$.youtubeList = function(el, apiKey, playlistId, options){
		// To avoid scope issues, use 'base' instead of 'this'
		// to reference this class from internal events and functions.
		var base = this;

		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;

		// Add a reverse reference to the DOM object
		base.$el.data("youtubeList", base);

		base.init = function(){
			base.apiKey = apiKey;
			base.playlistId = playlistId;

			base.options = $.extend({},$.youtubeList.defaultOptions, options);

			// Put your initialization code here
		};

		// Sample Function, Uncomment to use
		// base.functionName = function(paramaters){

		// };
		console.log(base)
		var ytJson = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId='+playlistId+'&key='+apiKey;
		console.log(ytJson);
		var wrapper = $('#youtube-channel');
		// var wrapper = base;
		console.log(wrapper)
		var itemArr = [];
		$.getJSON(ytJson, function(data) {
			// video title = item.snippet.title
			$.each(data.items, function(i, item) {
				var listItem = '<li><a href="https://youtu.be/'+item.snippet.resourceId.videoId+'"><img src="'+item.snippet.thumbnails.high.url+'"></li>';
				itemArr.push(listItem);

				if ( i === showCount ) {
					wrapper.append(itemArr);
					return false;
				}
			});
		});
		// Run initializer
		base.init();

	};

	$.youtubeList.defaultOptions = {
		itemWrapper: 'li',
		showCount: 3,
		showTitle: false
	};

	$.fn.youtubeList = function(apiKey, playlistId, options){
		return this.each(function(){
			(new $.youtubeList(this, apiKey, playlistId, options));
		});
	};

})(jQuery);