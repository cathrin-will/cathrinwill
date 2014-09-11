var main = (function() {
	'use strict';

/*------------------------------------*\
	function go - delete me
\*------------------------------------*/
	function go() {
		console.log('hello');
	}

/*------------------------------------*\
Cookie Control
\*------------------------------------*/
function cookieControl() {
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