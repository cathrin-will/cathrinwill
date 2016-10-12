var main = (function() {
	'use strict';

/*------------------------------------*\
	function go - nibble and pieces
\*------------------------------------*/
function go() {
	$('.simu').on('mousedown', function(){
		$('.pusher').addClass('pushed')
		$('.pusher').addClass('go')
		console.log('pushed')
	})
	$('.simu').on('mouseup', function(){
		$('.pusher').removeClass('pushed')
		console.log('release')
	});
	var pusher = new Pusher('087e104eb546157304a9', {cluster:'eu'})
	var button = pusher.subscribe('button')

	button.bind('press', function(data) {
		$('.pusher').addClass('pushed')
		$('.pusher').addClass('go')
		console.log('pushed')
	});
	button.bind('release', function(data) {
		$('.pusher').removeClass('pushed')
		console.log('release')
	});
	// $('.ac-nav').greenify({
	// 	color: 'orange',
	// 	backgroundColor: 'tomato',
	// 	anim: 'test'
	// }).addClass('because');
	// greenify.goAnim();

	/*------------------------------------*\
	GA event
	\*------------------------------------*/
	// $('a[data-ga]').on('click', function(e) {
	// 	console.log('clicked');
	// 	e.preventDefault();
	// 	var link = $(this),
	// 	gaData = link.data('ga');

	// 	ga('send', 'event', {
	// 		'eventCategory' : 'link',
	// 		'eventAction' : 'click',
	// 		'eventLabel' : gaData,
	// 		'eventValue' : 1,
	// 		'hitCallback' : function() {
	// 			window.location.href = link.attr('href');
	// 		}
	// 	});
	// });
// var favicon=new Favico({
//     animation:'slide'
// });
// favicon.badge(1);
}
/*------------------------------------*\
	VideoList
\*------------------------------------*/
// function youTubeVideoList() {
// 	console.log('test')
		// var ytJson = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=UUgJ-62H7I30jrvf6rCJ6RuQ&key=AIzaSyBctW6Qeg_xWBvYRSwT_Uj5ON12PRkDTm0";
		// var wrapper = $('#youtube-channel');
		// var itemArr = [];
		// $.getJSON(ytJson, function(data) {
		// 	// video title = item.snippet.title
		// 	$.each(data.items, function(i, item) {
		// 		var listItem = '<li><a href="https://youtu.be/'+item.snippet.resourceId.videoId+'"><img src="'+item.snippet.thumbnails.high.url+'"></li>';
		// 		itemArr.push(listItem);

		// 		if ( i === 1 ) {
		// 			wrapper.append(itemArr);
		// 			return false;
		// 		}
		// 	});
		// });
// 	}
// $('#youtube-channel').youtubeList({
// 	playlistId: 'test',
// 	// playlistId: 'UUgJ-62H7I30jrvf6rCJ6RuQ',
// 	apiKey: 'AIzaSyBctW6Qeg_xWBvYRSwT_Uj5ON12PRkDTm0'
// });
// $('#youtube-channel').youtubeList('AIzaSyBctW6Qeg_xWBvYRSwT_Uj5ON12PRkDTm0','UUgJ-62H7I30jrvf6rCJ6RuQ',{
// 	itemWrapper: 'ul',
// 	showCount: 1,
// 	showTitle: true

// });
/*------------------------------------*\
Cookie Control
\*------------------------------------*/
function cookieControl() {
	//  cookie bar
	var cookie = $('#cookie');

	$('#cookie-close').on('click',function () {
		cookie.slideUp('fast');
		$.cookie('peanut_butter_cookie', 'yes', {expires: 365, path: '/' });
	});
	var isSet  = $.cookie('peanut_butter_cookie');

	if ( isSet == 'yes' ) {
		cookie.hide();
	}
	else {
		cookie.show();
	}
}
/*------------------------------------*\
Function control centre
\*------------------------------------*/
	var init = function() {
		cookieControl();
		go();
		// youTubeVideoList();
		// magPop();
	};

	return { init: init };

})();

$(function() {
	main.init();
});