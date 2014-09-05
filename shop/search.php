<?php
//start session
session_start(); 
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
<?php  echo "<h2>Results</h2><p>"; 

 // refrence: http://php.about.com/od/phpwithmysql/ss/php_search.htm  - for search
 $find  = $_POST['find'];
 //If they did not enter a search term we give them an error 
 if ($find == "") 
 { 
 echo "<p>You forgot to enter a search term"; 
 exit; 
 } 
  //And we remind them what they searched for 
 echo "<b>Searched For:</b> " .$find. "</br></br>"; 
 
 // Otherwise we connect to our Database 
require('connect.php');
 
 // We preform a bit of filtering 
 $find = strtoupper($find); 
 $find = strip_tags($find); 
 $find = trim ($find); 
 
 //Now we search for our search term, in the field the user specified 
 $result = mysql_query("SELECT * FROM Items WHERE album LIKE'%$find%' or artist LIKE '%$find%' "); 


 //And we display the results 
      while ($row=mysql_fetch_array($result))
      {
         extract($row);
 
?>
<div class="item2">
		<h3><?php echo "$artist";?></h3>
         <img src="img/<?php echo $image;?>"/>
         <p><i><?php echo $album;?></i></p>
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
 //This counts the number or results - and if there wasn't any it gives them a little message explaining that 
 $anymatches=mysql_num_rows($result); 
 if ($anymatches == 0) 
 { 
 echo "Sorry, but we can not find an entry to match your query<br><br>"; 
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