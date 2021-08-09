<?php
$con= mysqli_connect("localhost","gclubson__spin-test","fo6b-i*A^pnu","gclubson_spin-test") or die("Error: " . mysqli_error($con));
mysqli_query($con, "SET NAMES 'utf8' ");
error_reporting( error_reporting() & ~E_NOTICE );
date_default_timezone_set('Asia/Bangkok');
?>