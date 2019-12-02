<?php

	$groups = new Groups($groupsDBH, "subscribed_groups");

	$notifications = new Notifications($_SERVER['REMOTE_ADDR']);

	$dbs = array($newsDBH, $photosDBH, $documentsDBH, $commentsDBH);

	$subscribedGroups = $groups->getGroups();
	
	if(!empty($subscribedGroups)){
		foreach ($subscribedGroups as $group) {
			switch ($group) {
				case 'beavers':
					$beavers = $notifications->checkGroup($dbs, "beavers");
					break;
				case 'cubs':
					$cubs = $notifications->checkGroup($dbs, "cubs");
					break;
				case 'scouts':
					$scouts = $notifications->checkGroup($dbs, "scouts");
				break;
				case 'explorers':
					$explorers = $notifications->checkGroup($dbs, "explorers");
					break;
				
				default:
					# code...
					break;
			}
		}
	}

	// $beavers = $notifications->checkGroup($dbs, "beavers");

	// $cubs = $notifications->checkGroup($dbs, "cubs");

	// $scouts = $notifications->checkGroup($dbs, "scouts");

	// $explorers = $notifications->checkGroup($dbs, "explorers");
?>
<header id="private-header">
	<a class="logo" href="<?=$_PUBLIC_DIR?>pages/private/"></a>
	<nav>
		<ul>
			<li><a href="<?=$_PUBLIC_DIR?>pages/private/">Home</a></li> | 
			<li><a href="<?=$_PUBLIC_DIR?>pages/private/sections/beavers/">Beavers<? if($beavers > 0){ ?><span class="alert" data-badge="<?= $beavers ?>"></span><? } ?></a></li> | 
			<li><a href="<?=$_PUBLIC_DIR?>pages/private/sections/cubs/">Cubs<? if($cubs > 0){ ?><span class="alert" data-badge="<?= $cubs ?>"></span><? } ?></a></li> | 
			<li><a href="<?=$_PUBLIC_DIR?>pages/private/sections/scouts/">Scouts<? if($scouts > 0){ ?><span class="alert" data-badge="<?= $scouts ?>"></span><? } ?></a></li> | 
			<li><a href="<?=$_PUBLIC_DIR?>pages/private/sections/explorers/">Explorers<? if($explorers > 0){ ?><span class="alert" data-badge="<?= $explorers ?>"></span><? } ?></a></li>
		</ul>
	</nav>
</header>