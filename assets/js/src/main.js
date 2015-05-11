var main = (function() {
	'use strict';

/*------------------------------------*\
	function go - nibble and pieces
\*------------------------------------*/
function go() {
	$('.ac-nav').greenify({
		color: 'orange',
		backgroundColor: 'tomato',
		anim: 'test'
	}).addClass('because');
	greenify.goAnim()

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
Magnific pop up
\*------------------------------------*/
function magPop() {
	$('.pop--img').magnificPopup({
		type:'image',
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it
			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function
		}
	});
}


/*------------------------------------*\
Function control centre
\*------------------------------------*/
	var init = function() {
		cookieControl();
		go();
		magPop();
	};

	return { init: init };

})();

$(function() {
	main.init();
});