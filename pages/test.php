<?php

	include '../_config/config.php';
	// spl_autoload_register('application_autoloader');

	// $test = new PHPAuth\Auth();

	// if (!$auth->isLogged()) {
 //    	header('HTTP/1.0 403 Forbidden');
 //    	echo "Forbidden";

 //    	exit();
	// }

	echo $_SERVER['REMOTE_ADDR'] . "</br>";
	echo $_SERVER['SERVER_PROTOCOL'] . "</br>";
	echo $_SERVER['SERVER_SOFTWARE'] . "</br>";
	echo $_SERVER['SERVER_ADDR'] . "</br>";
