<?php

	include '../../_config/config.php';

	//Check if cookie is set, and if so check if it is valid
	if (isset($_COOKIE[$auth->config->cookie_name]) && $auth->checkSession($_COOKIE[$auth->config->cookie_name])) {
		//Set $logged to true for !isset workaround (!isset not working)
		$logged = true;
		$uid = $auth->getPermission($_COOKIE[$auth->config->cookie_name]);
	}else{
		//If it is not set or is not valid, redirect to homepage
		header("Location: $_PUBLIC_DIR");
		exit();
	}

	//If $logged is true, display logged in page
	if ($logged = true) {
		if (isset($_POST['newsflash-submit'])) {

			// Setup news
			$news = new News("newsflash", $newsDBH);

			$inputArray = array($_POST['newsflash-comment'], $_POST['newsflash-group']);

		    foreach ($inputArray as $input) {
			    if(empty($input)){
				    $error = array();
				    array_push($error, 1);
			    }else{}
		    } 

		    if (isset($error) && in_array(1, $error)) {
			    $message = "<span style='color: #800000;'>Please fill in every input.</span>";
		    }else{
		    	$newsPost = $news->pushNewsflash(htmlspecialchars($_POST['newsflash-comment']), htmlspecialchars($_POST['newsflash-group']), date('d/m/Y'));
				if ($newsPost == true) {
					$message = "<span style='color: forestgreen;'>Newsfalsh successfully updated.</span>";
				} else{
					$message = "<span style='color: #800000;'>Something went wrong. Please try again.</span>";
				}
		    }
		}

		$groups = new Groups($groupsDBH, "subscribed_groups");

		if (isset($_POST['save-group-prefs'])) {
			
			// Update user's group preferences

			if (!empty($_POST['beavers-check']) || !empty($_POST['cubs-check']) || !empty($_POST['scouts-check']) || !empty($_POST['explorers-check'])){
				$groups->addGroups($_POST['beavers-check'], $_POST['cubs-check'], $_POST['scouts-check'], $_POST['explorers-check']);
			}

			// Add user's email to group mail lists

			if (isset($_POST['emails-check'])) {	
				if (!empty($_POST['email-input'])) {
					if (filter_var($_POST['email-input'], FILTER_VALIDATE_EMAIL)) {
						$groupsArray = array($_POST['beavers-check'], $_POST['cubs-check'], $_POST['scouts-check'], $_POST['explorers-check']);
						
						$groups->addMail($groupsArray, $_POST['email-input']);

						setcookie('email-valid', null, -1, '/');
					} else{
						$emailMessage = "Invalid email";

						setcookie("email-valid", $emailMessage, time() + (30), '/');
					}
					
				}else{
					$emailMessage = "Enter email";

					setcookie("email-valid", $emailMessage, time() + (30), '/');
				}
			}

		}

		// Refresh to update selected groups

		if($_GET['refresh'] == '1'){
			header('Location: ../private/');
		}

		// Find groups in cookie
		if(!empty($groups->getGroups())){
			foreach ($groups->getGroups() as $group) {
				if ($group == "beavers") {
					$beaversChecked = "checked";
				}
				if ($group == "cubs") {
					$cubsChecked = "checked";
				}
				if ($group == "scouts") {
					$scoutsChecked = "checked";
				}
				if ($group == "explorers") {
					$explorersChecked = "checked";
				}
			}
		}
	
?>

<!DOCTYPE html>
<html>
	<head>
		<title>1st Lytchett Matravers Scout Group</title>
		<link rel="shortcut icon" type="image/png" href="<?= $_PUBLIC_DIR ?>favicon.png">
		<link rel="stylesheet" type="text/css" href="../../_templates/default/css/main.private.css">
		<meta charset="UTF-8">
		<meta name="robots" content="noindex, follow">
	</head>

	<body>

		<? include 'modules/header.php'; ?>

		<section class="section-main">
			<h1><span class="title-highlight">1st Lytchett Matravers Scout Group</span></h1>
		</section>

		<section class="section-about">
			<div class="text-content">
				<br>
				<p class="bg-quote">
					<b>
						"Two things matter in life: following your dreams 
						and looking after your friends. This is what I love 
						about Scouting. It's about doing great things, loving 
						and enjoying the great adventures and helping others 
						to do the same."
					</b>
					<br>
					<span style="font-family: Courier New; font-size: 0.5em;">-Bear Grylls, Chief Scout-<span>
				</p>

				<p class="text-welcome">
					You have logged in; now you can view photos, programmes, documents, and more.
				</p>
				<p>
					<form action="?refresh=1" method="post">
						I would like to see information for:<br>
						<div class="group-check">
							<input type="checkbox" value="beavers" id="beavers-check" name="beavers-check">
							<label for="beavers-check">Beavers</label><br>
							<input type="checkbox" value="cubs" id="cubs-check" name="cubs-check">
							<label for="cubs-check">Cubs</label><br>
							<input type="checkbox" value="scouts" id="scouts-check" name="scouts-check">
							<label for="scouts-check">Scouts</label><br>
							<input type="checkbox" value="explorers" id="explorers-check" name="explorers-check">
							<label for="explorers-check">Explorers</label><br><br>
							<input type="checkbox" value="emails" id="emails-check" name="emails-check" checked>
							<label for="emails-check"><small>Send me emails when these groups add new information</small></label><br>
							<span class="loginMessage" style="color: #800000;"><?=$_COOKIE['email-valid']?></span>
							<input type="email" placeholder="Enter your email" id="email-input" name="email-input">
							<br><br>
							<input type="submit" value="Save Preferences" id="save-group-prefs" name="save-group-prefs">
						</div>
					</form>
				</p>
				<br><br>
				<?
					if ($uid == 2 || $uid == 100) { ?>
						Change the public newsflash on the homepage:
						<br><?= $message ?>
						<form action="" method="post">
							<input type="text" placeholder="New Comment" name="newsflash-comment">
							<input type="text" placeholder="Group Name" name="newsflash-group">
							<input type="submit" placeholder="change" name="newsflash-submit">
						</form>
				<? } ?>
				<br><br>
				<form method="link" action="../../_includes/auth/logout.php">
					<input type="submit" value="Log Out">
				</form>
			</div>
		</section>

		<? include 'modules/footer.php'; ?>

	</body>
	<script type="text/javascript">
		document.getElementById('emails-check').onclick = function() {
		    toggleSub(this, 'email-input');
		};

		function toggleSub(box, id) {
		    // get reference to related content to display/hide
		    var el = document.getElementById(id);
		    
		    if ( box.checked ) {
		        el.style.opacity = '1';
		        el.removeAttribute('disabled')
		    } else {
		        el.style.opacity = '0.25';
		        el.setAttribute('disabled')
		    }
		}
	</script>
	<script type="text/javascript">
		if("<? echo $beaversChecked; ?>" == "checked"){
		    document.getElementById('beavers-check').checked = true;
		    console.log("Beavers is '<? echo $beaversChecked; ?>'");
		}
		if("<? echo $cubsChecked; ?>" == "checked"){
		    document.getElementById('cubs-check').checked = true;
		    console.log("Cubs is '<? echo $cubsChecked; ?>'");
		}
		if("<? echo $scoutsChecked; ?>" == "checked"){
		    document.getElementById('scouts-check').checked = true;
		    console.log("Scouts is '<? echo $scoutsChecked; ?>'");
		}
		if("<? echo $explorersChecked; ?>" == "checked"){
		    document.getElementById('explorers-check').checked = true;
		    console.log("Explorers is '<? echo $explorersChecked; ?>'");
		}

	    // console.log("<?= $beaversChecked ?>")

	</script>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-55858968-1', 'auto');
	  ga('send', 'pageview');
	</script>
</html>

<?

	}

?>