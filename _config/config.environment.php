<?php

	const HOST = 'localhost';
	const USER = 'lytchettdb';
	const PASS = 'LytchettDB1';
	$DIR = dirname(dirname(__FILE__));

	// Set up PHPAuth system
	$dbh = new PDO("mysql:host=" . HOST . ";dbname=DATA_DIRECTORY", USER, PASS);
	$config = new PHPAuth\Config($dbh);
	$auth   = new PHPAuth\Auth($dbh, $config, $lang);