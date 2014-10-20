<?php
	require('../inc/connect.php');
	$title =  "A/B Testing";
	include("../inc/head.php");
	// $red = 0;
	// $green = 0;
	// get stuff
	mysql_select_db('cathrinw_abtest');
	$result=mysql_query("SELECT * FROM colour WHERE id = 1");
	$row=mysql_fetch_array($result);
	extract($row);

	$total_red = $red;
	$total_green = $green;

	if (isset($_COOKIE['vote3'])) {
		// nothing
	}
	else {

		//Process the Vote
		// update stuff
		if(isset($_POST['button-green']) ) {

			if(! get_magic_quotes_gpc() ) {
				$btn_green = addslashes ($_POST['button-green']);
			}
			else {
				$btn_green = $_POST['button-green'];
			}

			$total_green = $btn_green + $green;
			// print_r($total_green);
			$sql = "UPDATE cathrinw_abtest.colour SET green ='".$total_green."' WHERE id = 1 ";
				// connect
			mysql_select_db('cathrinw_abtest');
			$retval = mysql_query( $sql, $conn );
			// enter stuff
			if(! $retval ) {
			  die('Could not enter data: ' . mysql_error());
			}

		}
		if(isset($_POST['button-red'])) {

			if(! get_magic_quotes_gpc() ) {
				$btn_red = addslashes ($_POST['button-red']);
			}
			else {
				$btn_red = $_POST['button-red'];
			}
			$total_red = $btn_red + $red;
			// print_r($total_red);
			$sql = "UPDATE cathrinw_abtest.colour SET red = '".$total_red."' WHERE id = 1 ";
				// connect
			mysql_select_db('cathrinw_abtest');
			$retval = mysql_query( $sql, $conn );
			// enter stuff
			if(! $retval ) {
			  die('Could not enter data: ' . mysql_error());
			}
		}
	}
?>
<body>
	<?php include("../inc/cookie.php"); // include("../inc/header.php"); ?>

	<div class="wrapper">
		<div class="grid-wrapper">
			<div class="grid">
				<div class="grid__item one-whole">

					<h1>What is A/B testing?</h1>
					<p>As the name suggests, A/B testing is just a way of comparing two different things. This typically means comparing copy, images or the design of an element (e.g. button colour or subject line on an email).</p>
					<p>We can then show visitors one of these two variants at random, and measure how well each performs.</p>
					<p>For instance, which cat do you prefer:</p>
					<div class="grid">
						<div class="grid__item one-whole lap-and-up-one-half">
								<h4>Cat A (Lil bub)</h4>
								<div class="island">
									<a href="/assets/img/cats/lil-bub-600x450.jpg" class="pop--img">
										<img src="/assets/img/cats/lil-bub-600x450.jpg" alt="Lil bub" class="img--left img--shadow" width="200">
									</a>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos dolorem hic quisquam modi.</p>
								</div>
						</div><!--
						--><div class="grid__item one-whole lap-and-up-one-half">
							<h4>Cat B (Tard)</h4>
							<div class="island">
								<a href="/assets/img/cats/grumpy-cat-600x450.jpg" class="pop--img">
									<img src="/assets/img/cats/grumpy-cat-600x450.jpg" alt="Grump Cat" class="img--left img--shadow" width="200">
								</a>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos dolorem hic quisquam modi.</p>
							</div>
						</div>
					</div>
					<p>In terms of a website, we could for instance measure which image made the user more likely to fill out a form to adopt a kitty.</p>

					<p>Let's try it here, below you will see a green button and a red button, click one, any one will do.</p>
					<form action=<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?> method="post">
					<div class="grid">
							<div class="grid__item one-whole lap-and-up-one-half text--center">
								<button type="submit" id="button-green" data-ga name="button-green" value="1" class="btn btn--green">Hmmmm shiny button</button><br>
								<span class="giga"><?php echo $total_green; ?> </span>
							</div><!--
						--><div class="grid__item one-whole lap-and-up-one-half text--center">
								<button type="submit" id="button-red" data-ga name="button-red" value="1" class="btn btn--red">Hmmmm shiny button</button><br>
								<span class="giga"><?php echo $total_red; ?> </span>
						</div>
					</div>
					</form>
					<p><em>So far the click stats are, green: <strong><?php echo $total_green; ?></strong> and red: <strong><?php echo $total_red; ?></strong>.</em></p>
					<p>
						<?php
							if ($total_red>$total_green) {
								echo "The red button is winning!";
							}
							elseif ($total_green>$total_red) {
								echo "The green button is winning!";
							}
							else {
								echo "The buttons are equally sexy!";
							}

						?>
					</p>

					<h2>Why do this?</h2>
					<p>In short, to improve the website or email. Maybe we (or our client) think that users love carousels and really engage with huge hero images on every page, and maybe they do! But it is important to take a step back and realise that we are constantly (necessarily) making assumptions. However well-informed they are,  challenging these assumptions is important, and the best way to find out whether they hold up is to test on the users who will be using it.</p>

					<p>With this we can:</p>
					<ul>
						<li>Design more effective emails/websites customised to the target audience</li>
						<li>Improve click rates, page engagement and - importantly for our clients - profit</li>
						<li>Sell it as a service to our clients before or after a project has finished</li>
					</ul>

					<p>Instead of doing little improvements based on guesswork or an individual's whim, we can actually test which one is more effective.</p>

					<h2>So how can we sell this?</h2>
					<h3>Emails</h3>
					<p>A one-off email is not the best choice, because there is no opportunity to implement what we learn from the test. With an email that is sent out on a regular basis though, we can offer to test things like the subject line (maybe adding personalisation) or the number/prominence of links to see which one generates more opens/clicks.</p>
					<p>It’s important to note that changing the entire design will not give us much useful insight into what change actually made the difference. We should stick to simple small changes, and iterate on them (improving gradually over time, learning from past results).</p>
					<p>Don’t re-word the entire link and change the colour for instance: focus on one thing at a time.</p>

					<h3>Websites</h3>
					<p>For websites we have the ability to measure pretty much anything, including:</p>
					<ul>
						<li>how long the user spends on the page</li>
						<li>amount of users that bounce (leave the website)</li>
						<li>or custom events like signing up, clicking buttons, filling out forms</li>
					</ul>

					<p>Examples of good changes include:</p>
					<ul>
						<li>heading wording</li>
						<li>design of important calls to action</li>
						<li>images (picture of a dog or cat)</li>
						<li>hyperlink wording</li>
					</ul>
					<h2>Why this is so exciting</h2>
					<p>We can sell this to any client, whether the site was built by us or not, regardless of whether the site has been live 5 minutes or several years.</p>
					<p>And we can continue to sell this, test after test, there is always room for further improvement. Think of the site as a living, breathing thing that develops and improves or gets left to go stale.</p>
					<p>This will not only make us profit but the client as well, win win. There are big agencies out there that do very well only selling A/B testing as a service, this is not a new thing and we should really catch up.</p>
					<p>It will also help us think more about how we design things and improve on them for future projects.</p>

					<h2>Real example</h2>
					<h3>Website - Donate button</h3>
					<p>One of our websites weren't getting many clicks through to their Donate page and theorised a yellow button might make it stand out more and therefore more users would click it.</p>
					<div class="grid">
						<div class="grid__item one-whole lap-and-up-one-half text--center">
							<h4>Variation A - Original</h4>
							<a href="/assets/img/ab-test/example-a.jpg" class="pop--img">
								<img src="/assets/img/ab-test/example-a.jpg" alt="Example A" class="img--center img--shadow">
							</a>
						</div><!--
						--><div class="grid__item one-whole lap-and-up-one-half text--center">
							<h4>Variation B - Yellow button</h4>
							<a href="/assets/img/ab-test/example-b.jpg" class="pop--img">
								<img src="/assets/img/ab-test/example-b.jpg" alt="Example B" class="img--center img--shadow">
							</a>
						</div>
					</div>
					<p>After 2 weeks with the test running, 50% of website traffic seeing the original and 50% seeing the yewllow button, the results were in:</p>

					<img src="/assets/img/ab-test/results.png" alt="Example B" class="img--center img--shadow">

					<p>After receiving results it was a simple case of making the winning variation in this case the yellow button live on the site.</p>

				</div>
			</div><!-- /grid -->
		</div><!-- /wrapper__inner -->
	</div><!-- /wrapper -->

	<?php include("../inc/footer.php"); include("../inc/scripts.php"); mysql_close($conn);?>
</body>
</html>
