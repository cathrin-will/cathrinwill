(function ( $ ) {
	$.fn.greenify = function(options) {
		var nav = this,
		var settings = $.extend( {}, defaults, options );
		// default options
		var defaults = {
			color: 'red',
			backgroundColor: 'green',
			anim: 'fadeOut'
		};

		goAnim: function(anim) {
			console.log(anim)
		}

		//make use of each
		nav.find('li:even').each(function() {
			var listItem = $( this );
			listItem.css({
				backgroundColor: settings.backgroundColor
			});
		});

		// Greenify the collection based on the settings variable.
		return nav.css({
			color: settings.color
		});


		return this;
	};
}( jQuery ));
