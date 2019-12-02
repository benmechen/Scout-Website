<?php

	include '../../_config/config.php';

	$groups = new Groups($groupsDBH, "subscribed_groups");

	if($groups->unsubscribe($_GET['email'])){
		echo "Your email has been removed from our mailing lists.<br><br><small><a href='https://1stlytchettscoutgroup.co.uk'>1st Lytchett Matravers Scout Group</a></small>";
	} else{
		echo "Request unsuccessful. Please try again.";
	}

?>