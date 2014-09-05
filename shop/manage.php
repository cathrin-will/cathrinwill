<?php
//start session
session_start(); 
//connects to database
require('connect.php'); 
$username = $_SESSION['name'];
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
			  <li><a href="index.php" >Home</a></li>
			  <li><a href="shop.php">Albums</a></li>
			  <li><a href="cart.php">Shopping Cart</a></li>
			  <?php if($_SESSION['log'] == 0) { ?>
			  <li><a href="account.php">Create Account</a></li>
			  <?php } ?>
			  <?php if($_SESSION['log'] == 1) { ?>
			  <li class="sub"><a href="manage.php" class="high" >Manage Account</a></li>
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
      <h4>Manage your account</h4>
	  <?php
// all the info is taken from the username in the database so you don't have to fill out every input box again
   if ($result=mysql_query("SELECT * FROM Users WHERE username='$username'"))
   {
      while ($row=mysql_fetch_array($result))
      {
         extract($row);
?>
      <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" >
         <p>Title:
			 <input type="radio" name="title" value="Mrs" checked="checked"/>Mrs
			 <input type="radio" name="title" value="Miss"/>Miss
			 <input type="radio" name="title" value="Ms"/>Ms
			 <input type="radio" name="title" value="Mrs"/>Mr	
			 <input type="radio" name="title" value="Dr"/>Dr</p>			 
         <p>Firstname: <input type="text" name="fname" maxlength="20" required="required" value="<?php echo "$fname";?>"/></p>
		 <p>Surname: <input type="text" name="lname"  required="required" value="<?php echo "$lname";?>" /></p>

         <p>Mailing Address:</p>
		 <textarea name="address" required="required" value="test?" ><?php echo "$address";?></textarea></p>
         <p>Username: <input type="text" name="username" required="required" value="<?php echo "$username";?>"/></p>
         <p>Password: <input type="password" name="password" required="required" value="<?php echo "$password";?>"/></p>
		 <p>Password: <input type="password" name="password2"  required="required"value="<?php echo "password";?>" /></p>
		 <p>Email Address: <input type="email" name="email"  required="required" value="<?php echo "$email";?>"/></p>
         <p><input type="submit" name="submit" value="Save"/></p>
      </form>
  <?php
      }
   }
?>  
  <?php
	  //all values updated into the database
        if(isset($_POST['submit'])){
		mysql_query("UPDATE Users SET 
		fname='$_POST[fname]',
		lname='$_POST[lname]',
		address='$_POST[address]',
		username='$_POST[username]',
		password='$_POST[password]',
		password2='$_POST[password2]',
		email='$_POST[email]'
		WHERE username='$username'");
						 
    echo "<p>updates saved<p>";
	?>
	<script>
$(document).ready(function(){
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
