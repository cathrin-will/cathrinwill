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
		$.cookie('chocolate_chip', 'yes', {expires: 365, path: '/' });
	});
	var isSet  = $.cookie('chocolate_chip');

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
	};

	return { init: init };

})();

$(function() {
	main.init();
});