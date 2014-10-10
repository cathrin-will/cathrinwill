<?php
	// require('../inc/connect.php');
	$title =  "A/B Testing";
	include("../inc/head.php");
	$red = 0;
	$green = 0;

	// // get stuff
	// mysql_select_db('cathrinw_abtest');
	// $result=mysql_query("SELECT * FROM colour WHERE id = 1");
	// $row=mysql_fetch_array($result);
	// extract($row);

	// if (isset($_COOKIE['vote'])) {
	// 	// nothing
	// }
	// else {

	// 	//Process the Vote
	// 	// update stuff
	// 	if(isset($_POST['button-green']) ) {

	// 		if(! get_magic_quotes_gpc() ) {
	// 			$btn_green = addslashes ($_POST['button-green']);
	// 		}
	// 		else {
	// 			$btn_green = $_POST['button-green'];
	// 		}

	// 		$total_green = $btn_green + $green;
	// 		$sql = "UPDATE cathrinw_abtest.colour SET green ='".$total_green."' WHERE id = 1 ";
	// 			// connect
	// 		mysql_select_db('cathrinw_abtest');
	// 		$retval = mysql_query( $sql, $conn );
	// 		// enter stuff
	// 		if(! $retval ) {
	// 		  die('Could not enter data: ' . mysql_error());
	// 		}

	// 	}
	// 	if(isset($_POST['button-red'])) {

	// 		if(! get_magic_quotes_gpc() ) {
	// 			$btn_red = addslashes ($_POST['button-red']);
	// 		}
	// 		else {
	// 			$btn_red = $_POST['button-red'];
	// 		}
	// 		$total_red = $btn_red + $red;
	// 		$sql = "UPDATE cathrinw_abtest.colour SET red = '".$total_red."' WHERE id = 1 ";
	// 			// connect
	// 		mysql_select_db('cathrinw_abtest');
	// 		$retval = mysql_query( $sql, $conn );
	// 		// enter stuff
	// 		if(! $retval ) {
	// 		  die('Could not enter data: ' . mysql_error());
	// 		}
	// 	}
	// }
?>
<body>
	<?php include("../inc/cookie.php"); include("../inc/header.php"); ?>

	<div class="wrapper">
		<div class="grid-wrapper">
			<div class="grid">
				<div class="grid__item one-whole">


					<h1>What is A/B testing?</h1>
					<p>Just like the name suggest A/B testing is <a href="#">testing two</a> different versions of an element against each other.</p>
					<p>Element A vs element B.</p>
					<p>For instance which cat do you prefer:</p>
					<div class="grid">
						<div class="grid__item one-whole lap-and-up-one-half text--center">
							<h4>Cat A (Lil bub)</h4>
							<a href="/assets/img/cats/lil-bub-600x450.jpg" class="pop--img">
								<img src="/assets/img/cats/lil-bub-600x450.jpg" alt="Lil bub" class="img--center img--shadow">
							</a>
						</div><!--
						--><div class="grid__item one-whole lap-and-up-one-half text--center">
							<h4>Cat B (Tard)</h4>
							<a href="/assets/img/cats/grumpy-cat-600x450.jpg" class="pop--img">
								<img src="/assets/img/cats/grumpy-cat-600x450.jpg" alt="Grump Cat" class="img--center img--shadow">
							</a>
						</div>
					</div>
					<p>In terms of a website half the users would see Lil bub and the other half would see Tard, you can then measure which one was better received.</p>
					<p>Let's try it here, below you will either see a green button or a red button.</p>
					<div class="grid">
							<div class="grid__item one-whole lap-and-up-one-half text--center">
								<form action=<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?> method="post">
									<button type="submit" id="button-green" data-ga name="button-green" value="1" class="btn btn--green">Hmmmm shiny button</button><br>
									<span class="giga"><?php echo $green; ?> </span>

							</div><!--
						--><div class="grid__item one-whole lap-and-up-one-half text--center">

								<button type="submit" id="button-red" data-ga name="button-red" value="1" class="btn btn--red">Hmmmm shiny button</button><br>
								<span class="giga"><?php echo $red; ?> </span>
							</form>
						</div>
					</div>
					<p><em>So far the click stats are, green: <strong><?php echo $green; ?></strong> and red: <strong><?php echo $red; ?></strong>.</em></p>

					<h2>Why do this?</h2>
					<p>In short to improve the website or email. Maybe we think users like sliders everywhere and huge hero images on every page, and maybe they do! But the best way to find out is to test this on the users who will be using it.</p>

					<p>With this we can:</p>
					<ul>
						<li>Design more effective emails/websites customised to the target audience</li>
						<li>Improve click rates, page engagement and profit</li>
						<li>Sell it as a service to our clients before or after a project has finished.</li>
					</ul>

					<p>Instead of doing little improvements that may do more damage than good we can actually test which one is more effective.</p>

					<h2>So how can we sell this?</h2>
					<h3>Emails</h3>
					<p>A one off email is not the best choice, because there is nothing to action with the results once it’s sent out, but with an email that get’s sent out on a regular basis we can offer to test a complete redesign or maybe just a small part like the subject line, to see which one generates more clicks. Thereby improving the email for future use.</p>
					<p>It’s important to note that changing the entire design will not give us insight into what part actually made the difference. So stick to simple small changes.</p>
					<p>Don’t re-word the entire link and change the colour for instance. Focus on one thing at a time.</p>
					<h3>Websites</h3>
					<p>For websites there is a lot more than can be measured.</p>
					<p>Including:</p>
					<ul>
						<li>how long the user spends on the page</li>
						<li>amount of users that bounce(leave the website)</li>
						<li>or custom events like sign up, click buttons, fill out forms.</li>
					</ul>

					<p>As with the emails changing an entire page can show us which one is better but will not tell us what in particular made the difference. Not to say that this should always be avoided. Just keep it in mind, a huge change won’t give us the specifics.</p>
					<p>A few good changes include:</p>
					<ul>
						<li>heading wording</li>
						<li>Call to action buttons</li>
						<li>images (picture of a dog or cat)</li>
						<li>hyperlink wording</li>
					</ul>
					<p>The great thing about websites is we can set up more extensive tests not just A against B but, 3 or 4 variations of an element. Every colour button if you like.</p>
					<p>And this is something we can sell to any client, regardless of whether the website was built by us or not,  finished long ago or only just gone live, it does have to be live though!</p>
				</div>
			</div><!-- /grid -->
		</div><!-- /wrapper__inner -->
	</div><!-- /wrapper -->

	<?php include("../inc/footer.php"); include("../inc/scripts.php"); mysql_close($conn);?>
</body>
</html>
