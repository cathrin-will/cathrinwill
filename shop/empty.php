<?php
session_start();
//Empty cart
unset($_SESSION["cart"]);
unset($_SESSION["notempty"]);

// re directs you back to the home page
header( 'Location: shop.php' ) ;
?>