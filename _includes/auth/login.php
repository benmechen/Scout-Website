<?php

	include '../../_config/config.php';

	$login = $auth->login($_POST['username'], $_POST['password']);

	if($login['error']) {
	    // Something went wrong, display error message
	    echo '<div class="error">' . $login['message'] . '</div>';
	} else {
	    // Logged in successfully, set cookie, display success message
	   setcookie($auth->config->cookie_name, $login['hash'], $login['expire'], $auth->config->cookie_path, $auth->config->cookie_domain, $auth->config->cookie_secure, $auth->config->cookie_http);

	   // $permission = $auth->getPermission($login['hash']);

	   if ($auth->getPermission($login['hash'])== 100) {
			header("Location: ../../pages/private/admin/");
			exit();
	   }

	   else{
	   		header("Location: ../../pages/private/");
	   }
	}