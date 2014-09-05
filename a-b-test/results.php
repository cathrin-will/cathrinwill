
<?php  $title =  "A/B Testing";?>
<?php include("../inc/head.php"); ?>
<body>
	<?php include("../inc/cookie.php"); include("../inc/header.php"); ?>

	<div class="wrapper">
		<div class="grid-wrapper">
			<div class="grid">
				<div class="grid__item one-whole">

					<?php

						if(isset($_GET['clicked'])) {

							$strClicked = $_GET['clicked'];

							switch($strClicked) {

								case 'red':
									$strMessage = 'red';
									break;

								case 'green':
									$strMessage = 'green';
									break;

								case 'red':
									$strMessage = 'meh';
									break;
							}
						}

						echo $strMessage;
					?>
					So far the *** button is winning!
					x people have clicked it.
					<a href="a.php">Go back and finish reading the article!</a>
				</div>
			</div><!-- /grid -->
		</div><!-- /wrapper__inner -->
	</div><!-- /wrapper -->

	<?php include("../inc/footer.php"); include("../inc/scripts.php"); ?>
</body>
</html>
