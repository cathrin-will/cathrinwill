<?php
//start session
session_start(); 
//connects to database
require('connect.php'); 

// refrence: http://www.dreamincode.net/forums/topic/52783-basic-login-script-with-php/ - for login
// Get the data passed from the form
$username = $_POST['user'];
$password = $_POST['pass'];

// Do some basic sanitizing
$username = stripslashes($username);
$password = stripslashes($password);


//find username and password
$sql = "select * from Users where username = '$username' and password = '$password'";
$result = mysql_query($sql) or die ( mysql_error() );
$count = 0;

while ($line = mysql_fetch_assoc($result)) {
	 $count++;}
	 //if it's found a line with username and password
	 if ($count == 1) {
	$_SESSION['log'] = 1;
	$_SESSION['name'] = $username;
	$_SESSION['id'] = $userID;
}

//check if user is admin
$sq = "select * from Users where username = '$username' and password = '$password' and admin = 'Yes'";
$resul = mysql_query($sq) or die ( mysql_error() );
$coun = 0;
while ($line = mysql_fetch_assoc($resul)) {
	 $coun++;}
	 //set admin variable
	 if ($coun == 1) {
	$_SESSION['admin'] = 1;
}
?>

<!DOCTYPE html>
	<html>
		<head>
			<title>This is NOT a real shop</title>
			<link rel="stylesheet" href="style.css" type="text/css"  />		
		<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38670955-1']);
  _gaq.push(['_setDomainName', 'cathrinwill.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
		</head>
	<body>
	<form name="search" method="post" action="search.php">
	<p class="search">Search for Albums:
	<input type="text" name="find" placeholder="search" /></p>
	</form>
	<header>
		<h1>My Fake SHOP</h1>	
	</header>
		<nav>
			<ul>
			  <li><a href="index.php" class="high">Home</a></li>
			  <li><a href="shop.php">Albums</a></li>
			  <li><a href="cart.php">Shopping Cart</a></li>
			  <!-- depending on whether you're logged in or the admin user you will see different links -->
			  <?php if($_SESSION['log'] == 0) { ?>
			  <li><a href="account.php">Create Account</a></li>
			  <?php } ?>
			  <?php if($_SESSION['log'] == 1) { ?>
			  <li class="sub"><a href="manage.php">Manage Account</a></li>
			  <li class="sub"><a href="view_orders.php">View orders</a></li>
			  <?php } ?>
			  <?php if($_SESSION['admin'] == 1) { ?>
			  <li><a href="admin.php">Admin Controls</a></li>
			  <?php } ?>
			</ul>
		</nav>
		<div id="log">
		<!-- shows if you're logged in on ever page -->
		<?php if($_SESSION['log'] == 1) { ?>
		<p>Welcome <?php echo $_SESSION['name']. ".";?> <a href="logout.php"> Log out</a></p>
		<?php } else { ?>
		<p><a href="index.php">Log in</a></p>
		<?php } ?> 
		</div>
		<div id="main">
		<?php if ($_SESSION['log'] == 1) {?>
<p> You are logged in <?php echo $_SESSION['name']; ?>! </p>

<p><a href="logout.php">Log out</a></p>
<?php } 
else { ?>
			<p> To be totally clear this is not a real shop, just in case the "Fake CD Shop" title didn't give it away.<p>
			</br>
			<p>Please enter your username and password</p>
			  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" >
				 <p>Username:<input type="text" name="user" value="<?php echo($username);?>" required="required" /> </p>
				 <p>Password:<input type="password" name="pass" value="<?php echo($password);?>" required="required" /></p>
				 <p><input type="submit" value="submit"/>	
			 </form>
			 </br>
			 <p>or go create a <a href="account.php">new account</a></p>
			 			 
			<?php } ?> 
		</div>
		<footer><p>
			<a href="index.php" class="high">Home</a> | 
			<a href="shop.php">Albums</a> | 
			<a href="cart.php">Shopping Cart</a> | 
			<a href="account.php">Create Account</a> 
			</p>
		</footer>
	</body>
</html>