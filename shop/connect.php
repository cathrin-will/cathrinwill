<?php
//putting this in a different file saves writing this connection on every page 
$con=mysql_connect("10.168.1.60","cathrinw_ann","n00dleface");
   mysql_select_db("cathrinw_shop",$con);
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
?>