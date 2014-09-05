<?php
   session_start();
   $cart=$_SESSION["cart"];   
   //connects to database
require('connect.php'); 

   extract($_POST);
   if (IsSet($productid)||IsSet($_SESSION["notempty"])) $empty=false;
   else $empty=true;

   if (!$empty)
   {
      if (IsSet($cart[$productid])) $cart[$productid]+=$quantity;
      else $cart[$productid]=$quantity;
      $_SESSION["notempty"]=true;
   }

   $_SESSION["cart"]=$cart;
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

      <?php

      if ($empty) {echo "<h4>Your shopping cart is empty</h4>";
	  echo "<a href='shop.php'>Continue Shopping</a>"; }
      else
      {
         echo "<h4>Your shopping cart contains:</h4>";
		 
         $total=0;
         foreach ($cart as $id=>$no)
         {
            if ($id!="")
            {
               $result=mysql_query("SELECT * FROM Items WHERE itemID='$id'");
               $row=mysql_fetch_array($result);
               extract($row);

               if ($stock<$no) $no=$stock;

               echo "<p>$no units of item: $artist at $price each</p>";
            }
            $total+=$no*$price;
         }
         echo "<p>Total to pay: £$total</p>";
		 echo "<a href='shop.php'>Continue Shopping</a>|";
		 // if you're not logged in you can't order
		  if ($_SESSION['log'] == 1)
		  {echo "<a href='checkout.php'>Proceed to Checkout</a>|";}
			else { echo "<a href='index.php'>Log in</a>|";}
		echo "<a href='empty.php'>Empty Cart</a>";
      } ?>

   </div>

		<footer><p>
			<a href="index.php">Home</a> | 
			<a href="shop.php">Albums</a> | 
			<a href="cart.php" class="high">Shopping Cart</a> | 
			<a href="account.php">Create Account</a> 
			</p>
		</footer>
	</body>
</html>
