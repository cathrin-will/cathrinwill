<?php
	$dbhost = '10.168.1.45';
	$dbuser = 'cathrinw_ann';
	$dbpass = 'n00dleface';
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	if(! $conn )
	{
	  die('Could not connect: ' . mysql_error());
	}
?>