<?php
session_start();
// Turn off all error reporting
error_reporting(0);

//connects to database
require('connect.php'); 

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
   
      <h3>CDs, Albums and whatnot</h3>

<?php

   if ($result=mysql_query("SELECT * FROM Items ORDER BY artist"))
   {
      while ($row=mysql_fetch_array($result))
      {
         extract($row);
?>
		<div class="item2">
		<h4><?php echo "$artist";?></h4>
		<?php echo "<p><i>$album</i></P>";?>
         <img src="img/<?php echo $image;?>"/>
         
		<b><?php echo "£$price";?></b>
         <form action="cart.php" method="post">
            <p>
               Quantity:
               <select name="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
				  <option value="4">5</option>
               </select>
               <input type="hidden" name="productid" value="<?php echo $itemID;?>"/>
               <input type="submit" value="Add to Cart"/>
            </p> 
         </form>
		 </div>
<?php
      }
   }
?>

   </div>
		<footer><p>
			<a href="index.php">Home</a> | 
			<a href="shop.php" class="high">Albums</a> | 
			<a href="cart.php">Shopping Cart</a> | 
			<a href="account.php">Create Account</a> 
			</p>
		</footer>
	</body>
</html>
