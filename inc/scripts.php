	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/assets/js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
	<!-- Load the Content Experiment JavaScript API client for the experiment -->
	<script src="//www.google-analytics.com/cx/api.js?experiment=rGsk0JBASXuRa8GpRhr7xg"></script>
	<script>
		  // Ask Google Analytics which variation to show the user.
		 var chosenVariation = cxApi.chooseVariation();

		// Define JavaScript for each page variation of this experiment.
		var pageVariations = [
			function() {},  // Original: Do nothing. This will render the default HTML.
			function() {    // Variation 1: Home text
				document.getElementById('ga-exp').innerHTML = '<a href="/"> Home</a>';
			}
		];

		// // Wait for the DOM to load, then execute the view for the chosen variation.
		$(document).ready(
			pageVariations[chosenVariation]
		);
	</script>

	<!-- Ga Tracking -->
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-38670955-1', 'cathrinwill.com');
		ga('require', 'displayfeatures');
		ga('send', 'pageview');
	</script>

	<script src="/assets/js/min/main.min.js"></script>


