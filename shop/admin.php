<?php
//start session
session_start(); 
//connects to database
require('connect.php'); 
//stops non admin users entering
if($_SESSION['admin'] == 0) { header("location:index.php");}
?>
<!DOCTYPE html>
<html>
   <head>
	   <title>Owner Stock Management</title>
	   <link rel="stylesheet" href="style.css" type="text/css"  />
	   <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	   <script>
// a little jquery to show the section you are in and hide all the others
$(document).ready(function(){
$('#two, #three').hide();
	$("#lone").click(function(){
	$('#one').show();
	$('#two, #three').hide();
	});

	$("#ltwo").click(function(){
	$('#two').show();
	$(' #one, #three').hide();
	});

	$("#lthree").click(function(){
	$('#three').show();
	$('#one, #two').hide();
	});
});
</script>
   </head>
		<nav>
			<ul>
			  <li><a id="lone" href="#">Add Item</a></li>
			  <li><a id="ltwo" href="#">View Items</a></li>
			  <li><a id="lthree" href="#"  >View Orders</a></li>
			  <li><a href="index.php">Back to Home</a></li>
			</ul>
		</nav>
   <body>
   <div id="one">
	<h2>Add Item:</h2>
      <form method="post" action="<?php echo($page_location)?>">
         <p>Artist:<input type="text" name="artist"/></p>
         <p>Album:<input type="text" name="album"/></p>
         <p>Image Name:<input type="text" name="image" /></p>
<!-- pattern is a new html5 attribute that stops you putting in the wrong characters, and can protect against sql injections, but i've only done it once here to demonstrate -->
        <p> Number of Stock:<input type="text" name="number" /></p>

         <p>Unit Price:<input type="text" name="price" pattern="^[0-9]{1,2}(\.[0-9]{1,2})?$" maxlength="5"/></p>
         <p><input type="submit" name="Add" value="Add Item"/></p>
      </form>   
   </div>
   <div id="two">
      <h2>Stock Inventory:</h2>
      <?php
         extract($_POST);
         if (IsSet($Add))
            {mysql_query("INSERT INTO Items (artist,album,image,stock,price)
                         VALUES ('$artist','$album','$image','$number','$price')");
         
         }
		 //items and orders can be individually deleted
		 else if (IsSet($deleteItem))
         {
            mysql_query("DELETE FROM Items WHERE itemID='$_POST[itemid]' ");
			}
		 else if (IsSet($deleteOrder))
         {
            mysql_query("DELETE FROM Orders WHERE orderID='$_POST[orderid]' ");
			}
         if ($result=mysql_query("SELECT * FROM Items"))
         {
            while ($row=mysql_fetch_array($result))
            {
               extract($row);
               echo "<div class='item' ><b>Item $itemID:</b> <u> $artist</u>
               <i> $album</i>, $stock items costing £$price each. 
			   <img src='img/$image'/>
			   <form method='post' action='$page_location'>
			   <input type='hidden' name='itemid' value='$itemID'>
			   <input type='submit' name='deleteItem' value='Delete this item'/></form></div>";
            }
		}
         $page_location=$SERVER["PHP_SELF"];
      ?>
	</div>
	<div id="three">
      <h2>List of Orders:</h2>
      <?php
         if ($result=mysql_query("SELECT * FROM Orders"))
         {
            while ($row=mysql_fetch_array($result))
            {
               extract($row);
               echo "<div class='item'><b>Order:</b> $orderID, <b>User:</b>$firstname $lastname <b>Item:</b>$itemID
			   <form method='post' action='$page_location'>
			   <input type='hidden' name='orderid' value='$orderID'>
			   <input type='submit' name='deleteOrder' value='Delete this order'/></form>
			   </div>";
            }
         }
         mysql_close($con);
      ?>
	 </div>
   </body>
</html>