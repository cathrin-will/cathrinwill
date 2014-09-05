<?php
//start session
session_start(); 
//connects to database
require('connect.php'); 

?>
<!DOCTYPE html>
	<html>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	
		<head>
			<title>This is NOT a real shop</title>
			<link rel="stylesheet" href="style.css" type="text/css"  />		
		</head>
	<body>
		<form name="search" method="post" action="search.php">
	<p class="search">Search for Albums:
	<input type="text" name="find" placeholder="search" /></p>
	</form>
	<header><h1>My Fake SHOP</h1></header>
		<nav>
			<ul>
			  <li><a href="index.php" class="high">Home</a></li>
			  <li><a href="shop.php">Albums</a></li>
			  <li><a href="cart.php">Shopping Cart</a></li>
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
			<?php if($_SESSION['log'] == 1) { ?>
			<p>Welcome <?php echo $_SESSION['name']. ".";?> <a href="logout.php"> Log out</a></p>
			<?php } else { ?>
			<p><a href="index.php">Log in</a></p>
			<?php } ?> 
		</div>
   <div id="main">
      <h4>Create a new account</h4>
      <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" >
         <p>Title:
			 <input type="radio" name="title" value="Mrs" checked="checked"/>Mrs
			 <input type="radio" name="title" value="Miss"/>Miss
			 <input type="radio" name="title" value="Ms"/>Ms
			 <input type="radio" name="title" value="Mrs"/>Mr	
			 <input type="radio" name="title" value="Dr"/>Dr</p>			 
         <p>Firstname: <input type="text" name="fname" maxlength="20" required="required"/></p>
		 <p>Surname: <input type="text" name="lname" size="30" required="required"/></p>

         <p>Mailing Address:</p>
         <textarea name="address" placeholder="Type address here" required="required" ></textarea></p>
         <p>Username: <input type="text" name="username" size="20" required="required" /></p>
         <p>Password: <input type="password" name="password" size="21" required="required" /></p>
		 <p>Password: <input type="password" name="password2" size="21" required="required" /></p>
		 <p>Email Address: <input type="email" name="email" size="21" required="required" /></p>
         <p><input type="submit" name="submit" value="Create Account"/></p>
      </form>
      <?php
        if(isset($_POST['submit'])){
		
		 mysql_query("INSERT INTO Users (title,fname,lname,address,username,password)
                         VALUES ('$_POST[title]','$_POST[fname]','$_POST[lname]','$_POST[address]','$_POST[username]','$_POST[password]')");
		 
    echo "<p>Welcome <b> $_POST[fname] </b> your account has been created!<p>";
	?>
	<script>
$(document).ready(function(){
// once the account is name the form is hidden
	$('form').hide();
	$('h4').hide();

});
</script>
	<?php } ?>
      
   </div>

		<footer><p>
			<a href="index.php">Home</a> | 
			<a href="shop.php">Albums</a> | 
			<a href="cart.php">Shopping Cart</a> | 
			<a href="account.php" class="high">Create Account</a> 
			</p>
		</footer>
	</body>

</html>
