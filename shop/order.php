<?php
   session_start();
   $cart=$_SESSION["cart"];

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
      <?php
         echo "<h4>Order Placed</h4>";
         $total=0;
         foreach ($cart as $id=>$no)
         {
            //Add price for cart item to total
            if ($id!="")
            {
               $result=mysql_query("SELECT * FROM Items WHERE itemID='$id'");
               $row=mysql_fetch_array($result);
               extract($row);
            }
            $total+=$no*$price;

            //Compute new stock and update table
            $newstock=$itemstock-$no;
            mysql_query("UPDATE Items SET stock='$newstock' WHERE itemID=$id");
         }
         echo "<p>Total order value: £$total</p>";
         //Generate new order
         extract($_POST);
         mysql_query("INSERT INTO Orders (userID,firstname,lastname,itemID) 
                      VALUES ('$userid','firstname','$lastname','$id')");
        
         echo "<p>Name: $firstname $surname</p>";

         //Empty cart
         unset($_SESSION["cart"]);
		 unset($_SESSION["notempty"]);
      ?>
      <a href="index.php">Continue shopping</a>
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
