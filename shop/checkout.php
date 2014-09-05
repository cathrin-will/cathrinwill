<?php
   session_start();
   $cart=$_SESSION["cart"];
	$username = $_SESSION['name'];
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

      if ($empty) echo "<h4>Your shopping cart is empty</h4>";
      else
      {
         echo "<h4>Checkout</h4>";
         $total=0;
         foreach ($cart as $id=>$no)
         {
            if ($id!="")
            {
               $result=mysql_query("SELECT * FROM Items WHERE itemID='$id'");
               $row=mysql_fetch_array($result);
               extract($row);

               if ($stock<$no) $no=$stock;
            }
            $total+=$no*$price;
         }
         echo "<p>Total to pay: £$total</p>";

   if ($result=mysql_query("SELECT * FROM Users WHERE username='$username'"))
   {
      while ($row=mysql_fetch_array($result))
      {
         extract($row);
?>
<!-- hidden form elements to post users information automatically -->
         <form method="post" action="order.php">
			 <p><input type="hidden" name="firstname" value="<?php echo "$fname";?>"/></p>
			 <p> <input type="hidden" name="lastname"  value="<?php echo "$lname";?>" /></p>
		  <p><input type="hidden" name="userid"  required="required" value="<?php echo "$userID";?>" /></p>
            <p><input type="submit" value="Place Order"/></p>
         </form>

      <?php } }  } ?>

      <a href="shop.php">Continue Shopping</a>
  
   </div>
		<footer><p>
			<a href="index.php" >Home</a> | 
			<a href="shop.php">Albums</a> | 
			<a href="cart.php" class="high">Shopping Cart</a> | 
			<a href="account.php">Create Account</a> 
			</p>
		</footer>
	</body>
</html>
