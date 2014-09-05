<?php
//start session
session_start(); 
//connects to database
require('connect.php');
//call username stored as variable for later use
$username = $_SESSION['name'];
//delete order
extract($_POST);
// lets user delete his/her orders
	if (IsSet($deleteOrder)){
            mysql_query("DELETE FROM Orders WHERE orderID='$_POST[orderid]' ");
			}
?>
<!DOCTYPE html>
	<html>
		<head>
			<title>This is NOT a real shop</title>
			<link rel="stylesheet" href="style.css" type="text/css"  />		
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
		<?php
// this sql statement connects the 3 tables ogether to get the correct item name for that user
   if ($result=mysql_query("select * from Users,Orders,Items where username='$username' AND Users.userID=Orders.userID AND Items.itemID=Orders.itemID"))
   {
      while ($row=mysql_fetch_array($result))
      {
         extract($row);
               echo "<p><b>Order:</b> $orderID, <b>Item:</b> $artist - $album
			   <form method='post' action='$page_location'>
			   <input type='hidden' name='orderid' value='$orderID'>
			   <input type='submit' name='deleteOrder' value='Cancel Order'/></form>
			   </p>";
      }
   }
?>
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