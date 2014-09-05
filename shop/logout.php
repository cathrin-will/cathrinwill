<?php
session_start();
//logs out you
$_SESSION['log'] = 0;
$_SESSION['name'] = 0;
$_SESSION['admin'] = 0;
// re directs you back to the home page
header( 'Location: index.php' ) ;
?>