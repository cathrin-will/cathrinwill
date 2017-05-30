/*------------------------------------*\
Cookie Control
\*------------------------------------*/

function cookieControl() {
	var biscuit = $('.js-cookie');

	if ( Cookies.get('allow_cookies') == 1 || Cookies.get('repeat_visit') == 1 ) {
		biscuit.addClass('hidden');
	} else {
		biscuit.addClass('block');
	}

	setTimeout(function() {
		Cookies.set('repeat_visit', '1', { expires: 365, path:'/' });
		biscuit.removeClass('block');
		biscuit.addClass('hidden');
	}, 60000);

	$('.js-cookie__close').on('click', function() {
		biscuit.addClass('hidden');
		Cookies.set('allow_cookies', '1', { expires: 365, path:'/' });
	});
}
