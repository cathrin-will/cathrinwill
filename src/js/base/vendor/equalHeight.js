/*------------------------------------*\
	Equal heights
\*------------------------------------*/
	function equalHeights() {
		$(window).load(function() {
			equalheight('.js-equal-height');
		});

		$(window).resize($.throttle(1000, function (e) {
			equalheight('.js-equal-height');
		}));
	}

/*------------------------------------*\
equal height
\*------------------------------------*/
	function equalheight(matchItems) {
		var currentTallest = 0,
			currentRowStart = 0,
			currentDiv = 0,
			topPosition = 0;
			var rowDivs = [];

		$(matchItems).each(function() {
			var $this = $(this);

			$this.height('auto');
			topPosition = $this.offset().top;

			if ( currentRowStart !== topPosition ) {
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPosition;
				currentTallest = $this.height();
				rowDivs.push($this);
			} else {
				rowDivs.push($this);
				currentTallest = (currentTallest < $this.height()) ? ($this.height()) : (currentTallest);
			}

			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}
