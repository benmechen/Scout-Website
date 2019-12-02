<?php
	include '../../../../../_config/config.php';

	//Check if cookie is set, and if so check if it is valid
	if (isset($_COOKIE[$auth->config->cookie_name]) && $auth->checkSession($_COOKIE[$auth->config->cookie_name])) {
		//Set $logged to true for !isset workaround (!isset not working)
		$logged = true;
		$uid = $auth->getPermission($_COOKIE[$auth->config->cookie_name]);
	}else{
		//If it is not set or is not valid, redirect to homepage
		$ref = "$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        header("Location: $_PUBLIC_DIR?ref=$ref");
		exit();
	}

	//If $logged is true, display logged in page
	if ($logged = true) {

		// Notifications setup
		$notifications = new Notifications($_SERVER['REMOTE_ADDR']);

		$photosCheck = $notifications->checkGroup($photosDBH, "scouts");

		$newsCheck = $notifications->checkGroup($newsDBH, "scouts");

		$documentsCheck = $notifications->checkGroup($documentsDBH, "scouts");

		$commentsCheck = $notifications->checkGroup($commentsDBH, "scouts");

		// Photos folders setup
		$photosFolders = new Dir('scouts', $photosDBH);

		// Set up Groups
		$groups = new Groups($groupsDBH, "subscribed-groups");


		// Create a new folder
		if (!empty($_POST['photos-folder-submit'])) {
			$inputArray = array($_POST['photos-folder-title'], $_POST['photos-folder-description']);

		    foreach ($inputArray as $input) {
			    if(empty($input)){
				    $error = array();
				    array_push($error, 1);
			    }else{}
		    } 

		    if (isset($error) && in_array(1, $error)) {
			    $message = "<span style='color: #800000;'>Please fill in every input.</span>";
		    }else{

				$photosCreate = $photosFolders->create($_PUBLIC_DIR . "pages/private/sections/beavers/photos/", htmlspecialchars($_POST['photos-folder-title']));

				if ($photosCreate['success'] == true) {
					$photosNewFolderAdd = $photosFolders->push($photosCreate['name'], htmlspecialchars($_POST['photos-folder-description']), date('d/m/y'));
					$photosCopy = $photosFolders->newFileWrite($photosCreate['name'] . "/index.php", '<?php $dir = basename(__DIR__); include "../photos-folder-base.php";');
					$groups->mailUsers("scouts", "photos", htmlspecialchars($_POST['photos-folder-title']), htmlspecialchars($_POST['photos-folder-description']));
				}

			}
		}


		// Delete a folder
		if (!empty($_POST['photos-delete-submit'])) {
			$photosDelete = $photosFolders->delete($_POST['photos-delete-id'], $_POST['photos-delete-name'] , "deleted-folders/" . $_POST['photos-delete-id'] . "-" . $_POST['photos-delete-name'] . "-" . date('d:m:y'));
			if ($photosDelete['database'] == true && $photosDelete['rm'] == true) {
				header('Location: ');
			} else{
				$message = "<span style='color: #800000;'>Something went wrong. Please try again.</span>";
			}
		}


		// Rename a folder
		if (isset($_POST['rename-submit'])) {
			
			$photosFolders->update($_POST['rename-id'], $_POST['rename-newname'],$_PUBLIC_DIR . "pages/private/sections/scouts/photos/", $_POST['rename-oldname']);
			
		}
	
?>

<!DOCTYPE html>
<html>
	<head>
		<title>1st Lytchett Matravers Scout Group | Scouts</title>
		<link rel="stylesheet" type="text/css" href="<?=$_PUBLIC_DIR?>_templates/default/css/main.private.css">
		<link rel="shortcut icon" type="image/png" href="<?= $_PUBLIC_DIR ?>favicon.png">
		<meta charset="UTF-8">
		<meta name="robots" content="noindex, follow">
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/jquery.2.1.4.js"></script>
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/animate.js"></script>
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/jquery.smoothState.js"></script>
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/page-transition.js"></script>
		<!--<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/jquery.isotope.js"></script>
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/masonry-layout.js"></script>-->
		
	</head>

	<body>
		<div class="scouts-header">
			<? include '../../../modules/header.php'; ?>
		</div>

		<section class="section-scouts" id='main'>
			
			<div class="scouts-hero">
				<h1><span class="title-highlight">Scouts</span></h1>
			</div>

			<div class="scouts-main-content main-content">
				<div class="scouts-page-nav">
					<ul>
						<a href="../" class="home">
							<li>
								<span class="page-nav-content"><span>Home<? if($newsCheck > 0){ ?><span class="alert" data-badge="<?= $newsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="../documents/" class="documents">
							<li>
								<span class="page-nav-content"><span>Documents<? if($documentsCheck > 0){ ?><span class="alert" data-badge="<?= $documentsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="" class="photos active">
							<li>
								<span class="page-nav-content"><span>Photos<? if($photosCheck > 0){ ?><span class="alert" data-badge="<?= $photosCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="../calendar/" class="calendar">
							<li>
								<span class="page-nav-content"><span>Calendar</span></span>
							</li>
						</a>
						<a href="../contact/" class="chat">
							<li>
								<span class="page-nav-content"><span>Contact<? if($commentsCheck > 0){ ?><span class="alert" data-badge="<?= $commentsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<span class="stretch"></span>
					</ul>
				</div>
				<h2 class="anim_element anim_element--fadeInLeft">Photos</h2>

				

				<div class="scouts-page-main anim_element anim_element--fadeInLeft">
					
					<? if ($uid == 2 || $uid == 100) { ?>
						<div class="news-tile">
							<?= $message ?>
							<form method="post" action="" name="photos-new-folder">
								<input type="text" name="photos-folder-title" class="news-post-input" placeholder="Folder Title">
								<textarea name="photos-folder-description" class="news-post-input" placeholder="Description"></textarea>
								<input type="submit" class="news-post-input" name="photos-folder-submit" value="Create new folder">
							</form>
						</div>
					<? } ?>
				
					<div class="grid">
						<?

							$photosData = $photosFolders->pull();

							// var_dump($newsData);
							// echo $newsData['message'];

							foreach ($photosData as $data) {
								$photosThumbnail = $photosFolders->thumbnail($data['title'] . "/");
								?>
								<?= $message ?>
								<div class="grid-item folder-grid-item">
									<a href="<?= $data['title'] ?>">
										<div class="photos-tile" style="background-image: url('<?=$photosThumbnail?>'); background-color: rgba(153,153,153,9);background-size: cover; background-repeat:no-repeat; background-position: center;">
											<span class="scouts-photos-name">
												<span><?= $data['title'] ?><br><i><small><?= $data['date'] ?></small></i>
												<? if ($uid == 2 || $uid == 100) { ?>
													<form method="post" action="">
														<input type="hidden" name="photos-delete-id" value="<?= $data['id'] ?>">
														<input type="hidden" name="photos-delete-name" value="<?= $data['title'] ?>">
														<input type="submit" name="photos-delete-submit" class="news-delete-submit" value="Delete">
													</form>
												<? } ?>
												</span>
											</span>
										</div>
										<?= $data['title'] ?>
									</a>
									<? if ($uid == 2 || $uid == 100) { ?>
									<br>
										<div class="rename-folder-form-container">
											<small style="cursor: pointer;" class="rename-element">(rename)</small>
											<form method="post" action="" style="display: none;" class="rename-form">
												<input type="input" name="rename-newname" placeholder="New Name">
												<input type="hidden" name="rename-oldname" value="<?= $data['title'] ?>">
												<input type="hidden" name="rename-id" value="<?= $data['id'] ?>">
												<input type="submit" name="rename-submit" value="Change">
											</form>
										</div>
									<? } ?>

								</div>
								
							<? } ?>
									
						
					</div>
					
				</div>

				<div class="scouts-page-sidebar main-side">
					<span class="stripe anim_element anim_element--fadeIn"></span>  
					<h2 class="anim_element anim_element--fadeIn">Recently Uploaded</h2>
					<div class="anim_element anim_element--fadeIn">
						<? foreach ($photosData as $data) { ?>
							<ul>
								<li><a href="<?= $data['title'] ?>"><?= $data['date'] ?> - <b><?= $data['title'] ?></b></a></li>
							</ul>
						<? } ?>
					</div>
				</div>
				<div class="spacer" style="clear: both;"></div>
			</div>

		</section>

		<? include '../../../modules/footer.php'; ?>

	</body>
	<script type="text/javascript">
		$(document).ready(function(){
		    $(".stripe").css({"padding-top":$(".section-scouts").height()/2+"px"});
		    $(".stripe").css({"padding-bottom":$(".section-scouts").height()/2+"px"});
		});		
	</script>

	<!--Toggle rename form on click-->
	<script>
		$(document).ready(function(){
		    $(".rename-element").click(function(){
		        $(".rename-form").slideToggle("slow");
		    });
		});
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
		$seen = $notifications->seen($photosDBH, "scouts");
	}

?>