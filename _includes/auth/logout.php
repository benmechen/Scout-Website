<?php

	include '../../_config/config.php';

	if(isset($_COOKIE[$auth->config->cookie_name])){
		$auth->logout($_COOKIE[$auth->config->cookie_name]);

		header("Location: ../../");
		exit();
	}